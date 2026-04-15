# Asset Pipeline

Portable user-skill bundle for CLI-first asset generation, editing, review, comparison, and packaging.

This README is written so another agent can be pointed at this folder and told to install the skill and its optional dependencies without guessing.

## What This Bundle Is

- Main skill manifest: `SKILL.md`
- Skill metadata: `agents/openai.yaml`
- Specialist prompts: `subagents/*.md`
- CLI wrappers: `bin/asset-*`
- Python helpers: `scripts/*.py`
- Example inputs: `examples/*`
- Templates and config: `templates/*`, `config/*`

The bundle is self-contained. It does not require any repo-root files.

## Install The Skill

### Generic Install Rule

Copy this entire folder into the user's global skills library under the name `asset-pipeline`.

Target layout:

```text
<skills-library>/
  asset-pipeline/
    SKILL.md
    README.md
    agents/
    subagents/
    docs/
    bin/
    scripts/
    templates/
    examples/
    config/
```

### Codex Example

If the user's Codex home is `~/.codex`, install to:

```bash
mkdir -p ~/.codex/skills
rsync -a ./ ~/.codex/skills/asset-pipeline/
chmod +x ~/.codex/skills/asset-pipeline/bin/* ~/.codex/skills/asset-pipeline/scripts/doctor.py
```

If copying from elsewhere, run those commands from inside this folder.

### Validate The Install

```bash
~/.codex/skills/asset-pipeline/scripts/doctor.py
~/.codex/skills/asset-pipeline/bin/asset-svg-edit --help
~/.codex/skills/asset-pipeline/bin/asset-review --help
```

## Dependency Tiers

Install only the tier you need.

### Tier 0: No-Tool Fallback

No extra dependencies beyond `python3`.

Capabilities:

- raw SVG and text-spec generation
- structured review reports
- preserved prompt/spec recipes
- clear missing-dependency output

### Tier 1: Minimum Deterministic

Recommended tools:

- `python3`
- `inkscape`
- `imagemagick`
- `ffmpeg`

Capabilities:

- SVG edit and render
- raster conversion and composition
- screenshot and frame processing
- compare and review flows

### Tier 2: Enhanced Deterministic

Add:

- `svgo`
- `picosvg`
- `resvg` or `rsvg-convert`
- `potrace`
- `vtracer`
- `libvips`
- `gmic`
- `graphviz`
- `plantuml`
- `d2`
- `mmdc`
- `vl-convert`
- `oxipng`
- `pngquant`
- `cwebp`
- `img2webp`
- `avifenc`
- `jpegoptim`
- `exiftool`

Capabilities:

- SVG normalization and optimization
- raster-to-vector conversion
- text-native diagram rendering
- chart rendering
- better optimization and packaging

### Tier 3: Local ML

Add Python packages and local weights:

- `torch`
- `diffusers`
- `Pillow`
- local model weights compatible with the backend config

Capabilities:

- text-to-image
- img2img
- inpainting / masked editing

## Recommended Install Commands

Use the commands that fit the host OS and package manager.

### macOS With Homebrew

Minimum deterministic tier:

```bash
brew install inkscape imagemagick ffmpeg
```

Enhanced deterministic tier:

```bash
brew install librsvg potrace vtracer libvips graphviz plantuml d2 pngquant webp libavif jpegoptim exiftool
npm install -g svgo @mermaid-js/mermaid-cli vega-lite vl-convert
python3 -m pip install --user picosvg
```

Notes:

- `resvg` may require a separate tap or manual install depending on the machine.
- `gmic` is optional and may not be packaged everywhere.

### Debian / Ubuntu

Minimum deterministic tier:

```bash
sudo apt-get update
sudo apt-get install -y inkscape imagemagick ffmpeg python3 python3-pip
```

Enhanced deterministic tier:

```bash
sudo apt-get install -y librsvg2-bin potrace vtracer libvips-tools graphviz plantuml pngquant webp libavif-bin jpegoptim libimage-exiftool-perl
npm install -g svgo @mermaid-js/mermaid-cli vega-lite vl-convert
python3 -m pip install --user picosvg
```

Optional tools like `d2`, `gmic`, and `resvg` may need manual install depending on distro packaging.

### Python Local ML Environment

Create a dedicated virtual environment if local ML is desired:

```bash
python3 -m venv .venv-asset-pipeline
source .venv-asset-pipeline/bin/activate
python -m pip install --upgrade pip
python -m pip install pillow diffusers torch transformers accelerate safetensors
```

Then copy and edit the config:

```bash
cp config/local-ml.example.yaml config/local-ml.yaml
```

Set the `model` field in `config/local-ml.yaml` to a local path or a model identifier that is already accessible to the environment.

## Install Workflow For Another Agent

If another LLM tool is asked to install this bundle, it should:

1. Copy this folder into the user's global skills directory as `asset-pipeline`.
2. Mark `bin/*` and `scripts/doctor.py` executable.
3. Run `scripts/doctor.py` and record which tier is available.
4. If the user requested deterministic tooling, install the Tier 1 or Tier 2 dependencies that match the host OS.
5. If the user requested local ML, create an isolated Python environment and install the Tier 3 Python packages.
6. Validate with the commands in the next section.
7. Stop and report clearly if a package is unavailable on the host package manager instead of silently skipping it.

## Validation Commands

Run these after install:

```bash
./scripts/doctor.py
./bin/asset-svg-edit --help
./bin/asset-svg-render --help
./bin/asset-raster --help
./bin/asset-review --help
./bin/asset-package --help
```

Smoke test the minimum deterministic tier:

```bash
./bin/asset-svg-render \
  --input examples/sample.svg \
  --output /tmp/asset-pipeline-sample.png \
  --format png \
  --width 256

./bin/asset-review \
  --input examples/sample.svg \
  --intent examples/sample-review-intent.md \
  --output /tmp/asset-pipeline-sample.review.md
```

Smoke test honest fallback behavior:

```bash
./bin/asset-chart \
  --spec examples/chart-example.vl.json \
  --output /tmp/asset-pipeline-chart.svg \
  --format svg
```

If `vl-convert` is missing, the command should preserve a spec and fail clearly rather than fabricating a render.

## Invocation Examples

After install, invoke the main skill with prompts like:

- `Use $asset-pipeline to create a clean SVG logo mark from this brief.`
- `Use $asset-pipeline in vectorize mode on this sketch and save the final SVG.`
- `Use $asset-pipeline in review mode to assess whether this icon communicates the intended action without text.`
- `Use $asset-pipeline in package mode to optimize these outputs for web delivery.`

Explicit specialist prompts can be loaded from `subagents/` when tighter orchestration is needed.

## Important Constraints

- No cloud APIs are required.
- No browser UI is required.
- No Figma dependency exists.
- Local ML is optional and should never be treated as the only path.
- Deterministic transforms are preferred when they can satisfy the request.
