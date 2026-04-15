from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Any


BUNDLE_ROOT = Path(__file__).resolve().parent.parent


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def read_text_if_exists(path: Path | None) -> str | None:
    if path is None or not path.exists():
        return None
    return path.read_text(encoding="utf-8")


def write_text(path: Path, content: str) -> None:
    ensure_parent(path)
    path.write_text(content, encoding="utf-8")


def write_json(path: Path, data: Any) -> None:
    ensure_parent(path)
    path.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def copy_file(src: Path, dst: Path) -> None:
    ensure_parent(dst)
    shutil.copy2(src, dst)


def run_cmd(
    cmd: list[str],
    *,
    check: bool = True,
    capture_output: bool = True,
    input_text: str | None = None,
) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        cmd,
        check=check,
        text=True,
        capture_output=capture_output,
        input=input_text,
    )


def command_exists(name: str) -> bool:
    return shutil.which(name) is not None


def rel_to_bundle(path: Path) -> str:
    try:
        return str(path.resolve().relative_to(BUNDLE_ROOT.resolve()))
    except Exception:
        return str(path.resolve())


def result_payload(
    *,
    ok: bool,
    command: str,
    message: str,
    inputs: dict[str, Any] | None = None,
    outputs: list[str] | None = None,
    warnings: list[str] | None = None,
    tool_chain: list[str] | None = None,
    extra: dict[str, Any] | None = None,
) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "ok": ok,
        "command": command,
        "message": message,
        "inputs": inputs or {},
        "outputs": outputs or [],
        "warnings": warnings or [],
        "tool_chain": tool_chain or [],
    }
    if extra:
        payload.update(extra)
    return payload


def emit(payload: dict[str, Any], *, as_json: bool = False) -> int:
    if as_json:
        sys.stdout.write(json.dumps(payload, indent=2, sort_keys=True) + "\n")
    else:
        sys.stdout.write(f"{payload['command']}: {payload['message']}\n")
        for item in payload.get("outputs", []):
            sys.stdout.write(f"output: {item}\n")
        for item in payload.get("warnings", []):
            sys.stdout.write(f"warning: {item}\n")
    return 0 if payload.get("ok") else 2


def dependency_failure(
    *,
    command: str,
    missing: list[str],
    fallback: str,
    inputs: dict[str, Any] | None = None,
    outputs: list[str] | None = None,
) -> dict[str, Any]:
    return result_payload(
        ok=False,
        command=command,
        message=f"Missing dependency: {', '.join(missing)}",
        inputs=inputs,
        outputs=outputs,
        warnings=[fallback],
        tool_chain=[],
    )


def parse_inputs_csv(raw: str) -> list[Path]:
    return [Path(part.strip()) for part in raw.split(",") if part.strip()]


def load_json_file(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def safe_env(key: str, default: str | None = None) -> str | None:
    value = os.environ.get(key)
    return value if value else default
