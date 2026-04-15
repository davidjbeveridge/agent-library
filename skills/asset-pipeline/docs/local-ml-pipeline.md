# Local ML Pipeline

Local ML is optional. Use it only when deterministic tools cannot satisfy the request.

## Scope

- text-to-image
- img2img
- inpainting and masked edits

## Backend Abstraction

The wrappers call `scripts/local_ml_backend.py`, which defines a backend interface rather than hard-coding a single model.

Expected backend capabilities:

- `generate`
- `edit`
- backend metadata and health reporting

The default shape matches Diffusers-style pipelines:

- model id or local path
- prompt
- negative prompt
- seed
- dimensions
- step count
- strength or guidance options for editing

## Requirements

- Python
- `torch`
- `diffusers`
- local model weights

## Fallback Rules

If the backend is unavailable:

- keep the prompt and settings in a sidecar or report
- explain what would have been generated or edited
- fall back to deterministic composition, text specs, or raster edits if they can still help

## Safety And Quality

- do not imply a model exists if it does not
- keep generation parameters explicit for reproducibility
- review outputs semantically after generation; a plausible image can still communicate the wrong thing
