#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
from pathlib import Path


def run(command: list[str], allow_non_zero: bool = False) -> subprocess.CompletedProcess[str]:
    completed = subprocess.run(command, capture_output=True, text=True)
    if completed.returncode != 0 and not allow_non_zero:
        raise RuntimeError(completed.stderr.strip() or completed.stdout.strip() or "command failed")
    return completed


def identify_size(path: Path) -> tuple[int, int]:
    completed = run(["magick", "identify", "-format", "%w %h", str(path)])
    width, height = completed.stdout.strip().split()
    return int(width), int(height)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--baseline", required=True, type=Path)
    parser.add_argument("--current", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    args = parser.parse_args()

    if not shutil.which("magick") or not shutil.which("compare"):
        print("ImageMagick is required. Install `magick` and `compare` to use screenshot diff.")
        return 1

    baseline = args.baseline.expanduser().resolve()
    current = args.current.expanduser().resolve()
    output_dir = args.output_dir.expanduser().resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    baseline_size = identify_size(baseline)
    current_size = identify_size(current)
    if baseline_size != current_size:
        print(
            f"Image sizes do not match: baseline={baseline_size[0]}x{baseline_size[1]} current={current_size[0]}x{current_size[1]}"
        )
        return 1

    diff_path = output_dir / "diff.png"
    mask_path = output_dir / "diff-mask.png"
    summary_json = output_dir / "summary.json"
    summary_txt = output_dir / "summary.txt"

    ae = run(
        ["compare", "-metric", "AE", str(baseline), str(current), "null:"],
        allow_non_zero=True,
    )
    rmse = run(
        ["compare", "-metric", "RMSE", str(baseline), str(current), "null:"],
        allow_non_zero=True,
    )

    run(["compare", str(baseline), str(current), str(diff_path)], allow_non_zero=True)
    run(
        [
            "magick",
            str(baseline),
            str(current),
            "-compose",
            "difference",
            "-composite",
            "-colorspace",
            "gray",
            "-threshold",
            "0",
            str(mask_path),
        ]
    )

    bbox = run(["magick", str(mask_path), "-format", "%@", "info:"], allow_non_zero=True).stdout.strip()
    changed_pixels = int((ae.stderr or ae.stdout or "0").strip().split()[0])
    rmse_value = (rmse.stderr or rmse.stdout or "").strip()

    summary = {
        "baseline": str(baseline),
        "current": str(current),
        "diff_image": str(diff_path),
        "mask_image": str(mask_path),
        "different_pixels": changed_pixels,
        "rmse": rmse_value,
        "changed_region": bbox or "none",
        "dimensions": {"width": baseline_size[0], "height": baseline_size[1]},
    }

    summary_json.write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    summary_txt.write_text(
        "\n".join(
            [
                f"baseline: {summary['baseline']}",
                f"current: {summary['current']}",
                f"diff_image: {summary['diff_image']}",
                f"mask_image: {summary['mask_image']}",
                f"different_pixels: {summary['different_pixels']}",
                f"rmse: {summary['rmse']}",
                f"changed_region: {summary['changed_region']}",
            ]
        )
        + "\n",
        encoding="utf-8",
    )

    print(summary_txt)
    print(summary_json)
    print(diff_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
