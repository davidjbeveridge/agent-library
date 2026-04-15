from __future__ import annotations

import importlib.util
import shutil
import subprocess
from typing import Any


BINARIES = {
    "inkscape": ["inkscape", "--version"],
    "magick": ["magick", "--version"],
    "ffmpeg": ["ffmpeg", "-version"],
    "svgo": ["svgo", "--version"],
    "picosvg": ["picosvg", "--help"],
    "resvg": ["resvg", "--version"],
    "rsvg-convert": ["rsvg-convert", "--version"],
    "potrace": ["potrace", "--version"],
    "vtracer": ["vtracer", "--help"],
    "vips": ["vips", "--version"],
    "gmic": ["gmic", "--version"],
    "dot": ["dot", "-V"],
    "plantuml": ["plantuml", "-version"],
    "d2": ["d2", "--version"],
    "mmdc": ["mmdc", "--version"],
    "vl-convert": ["vl-convert", "--version"],
    "oxipng": ["oxipng", "--version"],
    "pngquant": ["pngquant", "--version"],
    "cwebp": ["cwebp", "-version"],
    "img2webp": ["img2webp", "-version"],
    "avifenc": ["avifenc", "--version"],
    "jpegoptim": ["jpegoptim", "--version"],
    "exiftool": ["exiftool", "-ver"],
}


def probe_binary(name: str) -> dict[str, Any]:
    path = shutil.which(name)
    result: dict[str, Any] = {"name": name, "available": path is not None, "path": path, "version": None}
    if not path:
        return result
    cmd = BINARIES.get(name, [name, "--version"])
    try:
        proc = subprocess.run(cmd, text=True, capture_output=True, check=False)
        version_text = (proc.stdout or proc.stderr or "").strip().splitlines()
        result["version"] = version_text[0] if version_text else None
    except Exception as exc:
        result["version"] = f"error: {exc}"
    return result


def probe_python_module(name: str) -> dict[str, Any]:
    spec = importlib.util.find_spec(name)
    return {"name": name, "available": spec is not None, "origin": getattr(spec, "origin", None) if spec else None}


def detect_tiers() -> dict[str, Any]:
    binaries = {name: probe_binary(name) for name in BINARIES}
    modules = {
        "torch": probe_python_module("torch"),
        "diffusers": probe_python_module("diffusers"),
        "PIL": probe_python_module("PIL"),
    }

    minimum = all(binaries[name]["available"] for name in ["inkscape", "magick", "ffmpeg"])
    enhanced = minimum and all(
        binaries[name]["available"]
        for name in [
            "svgo",
            "picosvg",
            "potrace",
            "vtracer",
            "vips",
            "dot",
            "d2",
            "vl-convert",
            "oxipng",
            "pngquant",
            "cwebp",
            "avifenc",
            "jpegoptim",
            "exiftool",
        ]
    )
    local_ml = modules["torch"]["available"] and modules["diffusers"]["available"]

    return {
        "binaries": binaries,
        "python_modules": modules,
        "tiers": {
            "no_tool_fallback": True,
            "minimum_deterministic": minimum,
            "enhanced_deterministic": enhanced,
            "local_ml": local_ml,
        },
    }
