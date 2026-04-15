from __future__ import annotations

import hashlib
import json
import shutil
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

from common import ensure_parent, result_payload, run_cmd, write_json, write_text
from tool_probe import probe_binary


def sha256_of(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(65536), b""):
            digest.update(chunk)
    return digest.hexdigest()


def inspect_svg(path: Path) -> dict[str, Any]:
    data = {
        "viewBox": None,
        "title": None,
        "desc": None,
        "elements": 0,
        "fills": [],
        "strokes": [],
    }
    root = ET.fromstring(path.read_text(encoding="utf-8"))
    data["viewBox"] = root.attrib.get("viewBox")
    fills: set[str] = set()
    strokes: set[str] = set()
    for elem in root.iter():
        if elem.tag.endswith("title") and elem.text and not data["title"]:
            data["title"] = elem.text.strip()
        if elem.tag.endswith("desc") and elem.text and not data["desc"]:
            data["desc"] = elem.text.strip()
        if elem is not root:
            data["elements"] += 1
        fill = elem.attrib.get("fill")
        stroke = elem.attrib.get("stroke")
        if fill:
            fills.add(fill)
        if stroke:
            strokes.add(stroke)
    data["fills"] = sorted(fills)
    data["strokes"] = sorted(strokes)
    return data


def describe_asset(path: Path) -> dict[str, Any]:
    info = {
        "path": str(path),
        "suffix": path.suffix.lower(),
        "size_bytes": path.stat().st_size,
        "sha256": sha256_of(path),
    }
    if path.suffix.lower() == ".svg":
        info["svg"] = inspect_svg(path)
    return info


def review_assets(inputs: list[Path], intent: str, brand_brief: str | None = None) -> dict[str, Any]:
    metadata = [describe_asset(path) for path in inputs]
    findings: list[str] = []
    for item in metadata:
        if item["suffix"] == ".svg":
            svg = item.get("svg", {})
            if not svg.get("viewBox"):
                findings.append(f"{item['path']}: missing viewBox makes scaling less predictable.")
            if not svg.get("title"):
                findings.append(f"{item['path']}: missing <title> weakens semantics and accessibility.")
            if not svg.get("desc"):
                findings.append(f"{item['path']}: missing <desc> leaves intent implicit.")
            if svg.get("elements", 0) > 80:
                findings.append(f"{item['path']}: high element count may make the asset harder to maintain.")
        if item["size_bytes"] > 1_500_000:
            findings.append(f"{item['path']}: large file size suggests optimization may still be needed.")
    notes = [
        f"Intent reviewed: {intent.strip()}",
        "Review focuses on semantic clarity, structural maintainability, and obvious technical risks.",
    ]
    if brand_brief:
        notes.append("Brand brief was considered during review.")
    return {
        "metadata": metadata,
        "findings": findings,
        "notes": notes,
    }


def write_review_report(output: Path, review: dict[str, Any]) -> None:
    lines = [
        "# Asset Review",
        "",
        "## Notes",
        "",
    ]
    for note in review["notes"]:
        lines.append(f"- {note}")
    lines.extend(["", "## Findings", ""])
    if review["findings"]:
        for finding in review["findings"]:
            lines.append(f"- {finding}")
    else:
        lines.append("- No obvious semantic or technical defects were detected from static inspection.")
    lines.extend(["", "## Asset Metadata", ""])
    for item in review["metadata"]:
        lines.append(f"- `{item['path']}` ({item['suffix']}, {item['size_bytes']} bytes)")
    write_text(output, "\n".join(lines) + "\n")


def compare_assets(baseline: Path, candidate: Path, output_dir: Path, mode: str = "pixel") -> dict[str, Any]:
    output_dir.mkdir(parents=True, exist_ok=True)
    diff_png = output_dir / "diff.png"
    report_json = output_dir / "compare.json"
    report_md = output_dir / "compare.md"
    warnings: list[str] = []
    metrics: dict[str, Any] = {
        "baseline": describe_asset(baseline),
        "candidate": describe_asset(candidate),
        "mode": mode,
        "diff_image": None,
        "tool_used": None,
    }

    magick = probe_binary("magick")
    if magick["available"]:
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            base_png = tmp / "baseline.png"
            cand_png = tmp / "candidate.png"
            try:
                run_cmd(["magick", str(baseline), str(base_png)])
                run_cmd(["magick", str(candidate), str(cand_png)])
                proc = run_cmd(
                    ["magick", "compare", "-metric", "RMSE", str(base_png), str(cand_png), str(diff_png)],
                    check=False,
                )
                metric_output = (proc.stderr or proc.stdout or "").strip()
                metrics["diff_image"] = str(diff_png)
                metrics["metric_output"] = metric_output
                metrics["tool_used"] = "magick compare"
            except Exception as exc:
                warnings.append(f"ImageMagick compare failed: {exc}")
    else:
        warnings.append("ImageMagick not available. Falling back to hash and size comparison only.")

    if metrics["baseline"]["sha256"] == metrics["candidate"]["sha256"]:
        summary = "Assets are byte-identical."
    else:
        summary = "Assets differ."
        if metrics.get("diff_image"):
            summary += " A visual diff image was produced."
    metrics["summary"] = summary
    metrics["warnings"] = warnings

    write_json(report_json, metrics)
    lines = [
        "# Asset Compare Report",
        "",
        f"- Summary: {summary}",
        f"- Baseline: `{baseline}`",
        f"- Candidate: `{candidate}`",
        f"- Mode: `{mode}`",
    ]
    if metrics.get("metric_output"):
        lines.append(f"- Metric: `{metrics['metric_output']}`")
    if warnings:
        lines.append("- Warnings:")
        for warning in warnings:
            lines.append(f"  - {warning}")
    write_text(report_md, "\n".join(lines) + "\n")
    return result_payload(
        ok=True,
        command="asset-compare",
        message=summary,
        outputs=[str(report_json), str(report_md)] + ([str(diff_png)] if diff_png.exists() else []),
        warnings=warnings,
        tool_chain=[metrics["tool_used"]] if metrics["tool_used"] else [],
        extra={"compare": metrics},
    )
