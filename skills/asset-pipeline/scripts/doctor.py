#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys

from tool_probe import detect_tiers


def main() -> int:
    parser = argparse.ArgumentParser(description="Probe asset-pipeline dependencies and report tier availability.")
    parser.add_argument("--json", action="store_true", help="Emit JSON output.")
    args = parser.parse_args()

    report = detect_tiers()
    if args.json:
        sys.stdout.write(json.dumps(report, indent=2, sort_keys=True) + "\n")
        return 0

    print("asset-pipeline doctor")
    print("")
    print("tiers:")
    for name, available in report["tiers"].items():
        print(f"- {name}: {'yes' if available else 'no'}")
    print("")
    print("binaries:")
    for name, info in report["binaries"].items():
        marker = "yes" if info["available"] else "no"
        version = f" ({info['version']})" if info["version"] else ""
        print(f"- {name}: {marker}{version}")
    print("")
    print("python modules:")
    for name, info in report["python_modules"].items():
        marker = "yes" if info["available"] else "no"
        print(f"- {name}: {marker}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
