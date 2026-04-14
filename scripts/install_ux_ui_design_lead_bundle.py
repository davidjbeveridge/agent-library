#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
import tempfile
from pathlib import Path

from ux_ui_design_lead_bundle_lib import BUNDLE_ROOT, validate_portable_bundle


def copy_bundle(source: Path, destination: Path) -> None:
    shutil.copytree(source, destination)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--dest",
        type=Path,
        default=Path.home() / ".codex" / "skills" / "ux-ui-design-lead",
    )
    args = parser.parse_args()

    issues = validate_portable_bundle()
    if issues:
        print("Refusing to install because validation failed:")
        for issue in issues:
            print(f"- {issue}")
        return 1

    destination = args.dest.expanduser()
    destination.parent.mkdir(parents=True, exist_ok=True)

    staging_parent = Path(tempfile.mkdtemp(prefix=".ux-ui-design-lead-", dir=destination.parent))
    staging_dest = staging_parent / destination.name
    backup_dest = None

    try:
        copy_bundle(BUNDLE_ROOT, staging_dest)
        if destination.exists():
            backup_dest = destination.parent / f".{destination.name}.backup"
            if backup_dest.exists():
                shutil.rmtree(backup_dest)
            destination.rename(backup_dest)
        staging_dest.rename(destination)
        if backup_dest and backup_dest.exists():
            shutil.rmtree(backup_dest)
        print(destination)
        return 0
    except Exception as exc:
        print(f"Install failed: {exc}")
        if backup_dest and backup_dest.exists() and not destination.exists():
            backup_dest.rename(destination)
        return 1
    finally:
        if staging_parent.exists():
            shutil.rmtree(staging_parent, ignore_errors=True)


if __name__ == "__main__":
    raise SystemExit(main())
