#!/usr/bin/env python3
from __future__ import annotations

from ux_ui_design_lead_bundle_lib import sync_generated_bundle


def main() -> int:
    written = sync_generated_bundle()
    print(f"Synced {len(written)} generated files into skills/ux-ui-design-lead")
    for path in written:
        print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
