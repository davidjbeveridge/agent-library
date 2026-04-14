#!/usr/bin/env python3
from __future__ import annotations

from ux_ui_design_lead_bundle_lib import command_status


def main() -> int:
    checks = [
        command_status("python3"),
        command_status("node"),
        command_status("npx"),
        command_status("magick"),
        command_status("compare"),
        command_status("rsync"),
        command_status("zip"),
    ]

    core_ready = all(item["found"] for item in checks if item["name"] in {"python3", "rsync", "zip"})
    helper_ready = all(item["found"] for item in checks if item["name"] in {"node", "npx", "magick", "compare"})

    print(f"core_ready={str(core_ready).lower()}")
    print(f"helper_ready={str(helper_ready).lower()}")
    for item in checks:
        status = "ok" if item["found"] else "missing"
        print(f"{item['name']}: {status} {item['path']}".rstrip())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
