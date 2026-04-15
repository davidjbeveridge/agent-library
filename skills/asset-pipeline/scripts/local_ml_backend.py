from __future__ import annotations

from dataclasses import dataclass
import json
from pathlib import Path
from typing import Any

from common import read_text_if_exists
from tool_probe import probe_python_module


@dataclass
class BackendConfig:
    backend: str = "diffusers"
    model: str | None = None
    device: str | None = "auto"
    dtype: str | None = "auto"
    cache_dir: str | None = None
    default_width: int = 1024
    default_height: int = 1024
    default_steps: int = 30


class BackendUnavailableError(RuntimeError):
    pass


def _parse_simple_yaml(text: str) -> dict[str, Any]:
    data: dict[str, Any] = {}
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = value.strip().strip("'\"")
    return data


def load_backend_config(path: Path) -> BackendConfig:
    text = read_text_if_exists(path)
    if text is None:
        raise FileNotFoundError(path)
    if path.suffix.lower() == ".json":
        data = json.loads(text)
    else:
        data = _parse_simple_yaml(text)
    return BackendConfig(
        backend=data.get("backend", "diffusers"),
        model=data.get("model"),
        device=data.get("device", "auto"),
        dtype=data.get("dtype", "auto"),
        cache_dir=data.get("cache_dir"),
        default_width=int(data.get("default_width", 1024)),
        default_height=int(data.get("default_height", 1024)),
        default_steps=int(data.get("default_steps", 30)),
    )


def backend_status() -> dict[str, Any]:
    torch = probe_python_module("torch")
    diffusers = probe_python_module("diffusers")
    pil = probe_python_module("PIL")
    return {
        "backend": "diffusers",
        "torch": torch,
        "diffusers": diffusers,
        "PIL": pil,
        "available": torch["available"] and diffusers["available"] and pil["available"],
    }


class DiffusersBackend:
    def __init__(self, config: BackendConfig) -> None:
        self.config = config
        status = backend_status()
        if not status["available"]:
            raise BackendUnavailableError("Diffusers backend unavailable. Install torch, diffusers, and Pillow.")

    def _device_string(self) -> str | None:
        if self.config.device == "auto":
            return None
        return self.config.device

    def generate(
        self,
        *,
        prompt: str,
        output: Path,
        model: str | None = None,
        seed: int | None = None,
        width: int | None = None,
        height: int | None = None,
        steps: int | None = None,
        negative_prompt: str | None = None,
    ) -> dict[str, Any]:
        from diffusers import AutoPipelineForText2Image
        from PIL import Image  # noqa: F401
        import torch

        model_id = model or self.config.model
        if not model_id:
            raise BackendUnavailableError("No local ML model configured.")
        pipe = AutoPipelineForText2Image.from_pretrained(model_id, torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32)
        device = self._device_string() or ("cuda" if torch.cuda.is_available() else "cpu")
        pipe = pipe.to(device)
        generator = None
        if seed is not None:
            generator = torch.Generator(device=device).manual_seed(seed)
        image = pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            width=width or self.config.default_width,
            height=height or self.config.default_height,
            num_inference_steps=steps or self.config.default_steps,
            generator=generator,
        ).images[0]
        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output)
        return {
            "backend": "diffusers",
            "model": model_id,
            "output": str(output),
            "seed": seed,
        }

    def edit(
        self,
        *,
        input_path: Path,
        prompt: str,
        output: Path,
        model: str | None = None,
        seed: int | None = None,
        strength: float = 0.6,
        mask: Path | None = None,
        negative_prompt: str | None = None,
    ) -> dict[str, Any]:
        from diffusers import AutoPipelineForImage2Image, AutoPipelineForInpainting
        from PIL import Image
        import torch

        model_id = model or self.config.model
        if not model_id:
            raise BackendUnavailableError("No local ML model configured.")
        device = self._device_string() or ("cuda" if torch.cuda.is_available() else "cpu")
        generator = None
        if seed is not None:
            generator = torch.Generator(device=device).manual_seed(seed)
        init_image = Image.open(input_path).convert("RGB")
        if mask:
            pipe = AutoPipelineForInpainting.from_pretrained(model_id, torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32).to(device)
            mask_image = Image.open(mask).convert("RGB")
            image = pipe(
                prompt=prompt,
                image=init_image,
                mask_image=mask_image,
                negative_prompt=negative_prompt,
                generator=generator,
                strength=strength,
            ).images[0]
        else:
            pipe = AutoPipelineForImage2Image.from_pretrained(model_id, torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32).to(device)
            image = pipe(
                prompt=prompt,
                image=init_image,
                negative_prompt=negative_prompt,
                generator=generator,
                strength=strength,
            ).images[0]
        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output)
        return {
            "backend": "diffusers",
            "model": model_id,
            "output": str(output),
            "seed": seed,
            "mask": str(mask) if mask else None,
        }


def get_backend(config_path: Path) -> DiffusersBackend:
    config = load_backend_config(config_path)
    if config.backend != "diffusers":
        raise BackendUnavailableError(f"Unsupported backend '{config.backend}'.")
    return DiffusersBackend(config)
