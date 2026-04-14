#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from pathlib import Path


TEXT_SUFFIXES = {".css", ".scss", ".sass", ".less", ".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs", ".json"}
IGNORE_DIRS = {"node_modules", ".git", "dist", "build", "__pycache__"}

CSS_VAR_RE = re.compile(r"--([A-Za-z0-9_-]+)\s*:\s*([^;]+);")
COLOR_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)")
SPACING_RE = re.compile(r"(?<![A-Za-z0-9_-])\d+(?:\.\d+)?(?:px|rem|em)\b")
RADIUS_RE = re.compile(r"border-radius\s*:\s*([^;]+);")
SHADOW_RE = re.compile(r"box-shadow\s*:\s*([^;]+);")
MOTION_RE = re.compile(r"(?:transition|animation)(?:-duration)?\s*:\s*([^;]+);")
TAILWIND_HINT_RE = re.compile(r"\b(colors|spacing|fontFamily|borderRadius|boxShadow|transitionDuration)\b")


def iter_files(paths: list[Path]) -> list[Path]:
    files: list[Path] = []
    for base in paths:
        base = base.expanduser().resolve()
        if base.is_file():
            if base.suffix in TEXT_SUFFIXES:
                files.append(base)
            continue
        for root, dirnames, filenames in __import__("os").walk(base):
            dirnames[:] = [name for name in dirnames if name not in IGNORE_DIRS]
            for filename in filenames:
                path = Path(root) / filename
                if path.suffix in TEXT_SUFFIXES:
                    files.append(path)
    return sorted(set(files))


def normalize_repeated(counter: Counter[str], minimum: int = 2) -> list[dict[str, object]]:
    items = []
    for value, count in counter.most_common():
        if count < minimum:
            continue
        items.append({"value": value, "count": count})
    return items


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    args = parser.parse_args()

    files = iter_files(args.paths)
    output_dir = args.output_dir.expanduser().resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    custom_properties = []
    theme_files = []
    repeated = {
        "colors": Counter(),
        "spacing": Counter(),
        "radii": Counter(),
        "shadows": Counter(),
        "motion": Counter(),
    }
    category_hits = defaultdict(set)

    for path in files:
        text = path.read_text(encoding="utf-8", errors="ignore")
        relative = str(path)

        for name, value in CSS_VAR_RE.findall(text):
            custom_properties.append({"name": name, "value": value.strip(), "file": relative})
            if "color" in name:
                category_hits["color"].add(relative)
            if "space" in name or "gap" in name or "padding" in name or "margin" in name:
                category_hits["spacing"].add(relative)
            if "radius" in name:
                category_hits["radius"].add(relative)

        repeated["colors"].update(COLOR_RE.findall(text))
        repeated["spacing"].update(SPACING_RE.findall(text))
        repeated["radii"].update(value.strip() for value in RADIUS_RE.findall(text))
        repeated["shadows"].update(value.strip() for value in SHADOW_RE.findall(text))
        repeated["motion"].update(value.strip() for value in MOTION_RE.findall(text))

        if TAILWIND_HINT_RE.search(text) or "theme:" in text or "extend:" in text:
            theme_files.append(relative)

    report = {
        "inputs": [str(path.expanduser().resolve()) for path in args.paths],
        "file_count": len(files),
        "custom_properties": custom_properties,
        "theme_files": sorted(set(theme_files)),
        "repeated_values": {key: normalize_repeated(counter) for key, counter in repeated.items()},
        "categories_found": {key: sorted(values) for key, values in category_hits.items()},
    }

    json_path = output_dir / "design-token-report.json"
    md_path = output_dir / "design-token-report.md"
    json_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Design Token Extraction Report",
        "",
        f"- Inputs: {', '.join(report['inputs'])}",
        f"- Files scanned: {report['file_count']}",
        f"- CSS custom properties found: {len(report['custom_properties'])}",
        f"- Theme-like files detected: {len(report['theme_files'])}",
        "",
        "## Repeated Colors",
    ]
    lines.extend([f"- {item['value']} ({item['count']})" for item in report["repeated_values"]["colors"][:10]] or ["- none"])
    lines.extend(["", "## Repeated Spacing Values"])
    lines.extend([f"- {item['value']} ({item['count']})" for item in report["repeated_values"]["spacing"][:10]] or ["- none"])
    lines.extend(["", "## Repeated Radius Values"])
    lines.extend([f"- {item['value']} ({item['count']})" for item in report["repeated_values"]["radii"][:10]] or ["- none"])
    lines.extend(["", "## Repeated Shadow Values"])
    lines.extend([f"- {item['value']} ({item['count']})" for item in report["repeated_values"]["shadows"][:10]] or ["- none"])
    lines.extend(["", "## Theme-Like Files"])
    lines.extend([f"- {item}" for item in report["theme_files"]] or ["- none"])
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(md_path)
    print(json_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
