#!/usr/bin/env python3
from __future__ import annotations

from ux_ui_design_lead_bundle_lib import validate_portable_bundle


def main() -> int:
    issues = validate_portable_bundle()
    if issues:
        print("Portable bundle validation failed:")
        for issue in issues:
            print(f"- {issue}")
        return 1
    print("Portable bundle validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
