#!/usr/bin/env python3
from __future__ import annotations

import shutil


def main() -> int:
    commands = ["python3", "node", "npx", "magick", "compare"]
    statuses = []
    for command in commands:
        path = shutil.which(command)
        statuses.append((command, path))

    core_ready = any(command == "python3" and path for command, path in statuses)
    helper_ready = all(path for _, path in statuses if _ in {"node", "npx", "magick", "compare"})

    print(f"core_ready={str(core_ready).lower()}")
    print(f"helper_ready={str(helper_ready).lower()}")
    for command, path in statuses:
        label = "ok" if path else "missing"
        print(f"{command}: {label} {path or ''}".rstrip())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
