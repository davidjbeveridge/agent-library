#!/usr/bin/env python3
from __future__ import annotations

import argparse
import zipfile
from pathlib import Path

from ux_ui_design_lead_bundle_lib import BUNDLE_NAME, BUNDLE_ROOT, DIST_ROOT, list_bundle_files, validate_portable_bundle


FIXED_ZIP_TIME = (2026, 1, 1, 0, 0, 0)


def write_deterministic_file(archive: zipfile.ZipFile, source: Path, arcname: str) -> None:
    info = zipfile.ZipInfo(arcname)
    info.date_time = FIXED_ZIP_TIME
    info.compress_type = zipfile.ZIP_DEFLATED
    info.external_attr = 0o644 << 16
    archive.writestr(info, source.read_bytes())


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=DIST_ROOT / f"{BUNDLE_NAME}.skill")
    args = parser.parse_args()

    issues = validate_portable_bundle()
    if issues:
        print("Refusing to package because validation failed:")
        for issue in issues:
            print(f"- {issue}")
        return 1

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(args.output, "w") as archive:
        for source in list_bundle_files():
            rel = source.relative_to(BUNDLE_ROOT)
            arcname = f"{BUNDLE_NAME}/{rel.as_posix()}"
            write_deterministic_file(archive, source, arcname)

    print(args.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
