# Asset Pipeline

Portable user-skill bundle for CLI-first asset generation, editing, review, comparison, and packaging.

This README is the package-local install contract for agents pointed directly at `skills/asset-pipeline/`.

## When An Agent Is Pointed At This Folder

The install agent should ask:

1. `Install this skill project-locally or into a global Codex config like ~/.codex/?`
2. `Do you want install only, or install plus bootstrap and validation?`
3. `Do you want optional heavy dependencies installed as well, especially deterministic graphics tools or local ML packages?`

Default recommendation:

- `global Codex config`

## What This Bundle Is

- Main skill manifest: `SKILL.md`
- Skill metadata: `agents/openai.yaml`
- Specialist prompts: `subagents/*.md`
- CLI wrappers: `bin/asset-*`
- Python helpers: `scripts/*.py`
- Example inputs: `examples/*`
- Templates and config: `templates/*`, `config/*`

The bundle is self-contained and does not depend on repo-root files.

## Install

Copy this entire folder into a skills library under the name `asset-pipeline`.

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

### Global Codex Config

If the target is `~/.codex/skills`:

```bash
mkdir -p ~/.codex/skills
rsync -a ./ ~/.codex/skills/asset-pipeline/
chmod +x ~/.codex/skills/asset-pipeline/bin/* ~/.codex/skills/asset-pipeline/scripts/doctor.py
```

### Project-Local

If the target is a project-local skills directory:

```bash
mkdir -p ./skills
rsync -a ./ ./skills/asset-pipeline/
chmod +x ./skills/asset-pipeline/bin/* ./skills/asset-pipeline/scripts/doctor.py
```

## Bootstrap

Bootstrap is optional. Stop after `install` unless the user asked for dependency setup.

### Dependency Tiers

#### Tier 0: No-Tool Fallback

- required: `python3`
- supports raw SVG and text-spec generation, review reports, preserved recipes, and missing-dependency reporting

#### Tier 1: Minimum Deterministic

Recommended tools:

- `python3`
- `inkscape`
- `imagemagick`
- `ffmpeg`

#### Tier 2: Enhanced Deterministic

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

#### Tier 3: Local ML

Add:

- `torch`
- `diffusers`
- `Pillow`
- `transformers`
- `accelerate`
- `safetensors`
- local model weights compatible with the backend config

### Python Interpreter Rule

Use the same Python interpreter for install and runtime. If the machine has multiple Python installations, prefer one of:

- an activated virtual environment
- a Homebrew Python such as `/opt/homebrew/bin/python3`

After installing Python packages, make sure the corresponding user or venv bin directory is on `PATH`.

### macOS With Homebrew

Minimum deterministic tier:

```bash
brew install inkscape imagemagick ffmpeg
```

Enhanced deterministic tier:

```bash
brew install librsvg potrace vips graphviz plantuml d2 pngquant webp libavif jpegoptim exiftool gmic resvg oxipng
npm install -g svgo @mermaid-js/mermaid-cli
python3 -m pip install --user picosvg vl-convert-python
cargo install vtracer --locked
```

Notes:

- `vips` is the Homebrew formula name, not `libvips`
- `vtracer` is installed via Cargo in this documented path
- `vl-convert-python` may expose only a Python module on some systems; if no `vl-convert` executable appears on `PATH`, provide a thin wrapper command before claiming the chart lane is bootstrapped

Local ML tier:

```bash
python3 -m pip install --user diffusers torch torchvision transformers accelerate safetensors
```

### Debian / Ubuntu

Minimum deterministic tier:

```bash
sudo apt-get update
sudo apt-get install -y inkscape imagemagick ffmpeg python3 python3-pip
```

Enhanced deterministic tier:

```bash
sudo apt-get install -y librsvg2-bin potrace libvips-tools graphviz plantuml pngquant webp libavif-bin jpegoptim libimage-exiftool-perl
npm install -g svgo @mermaid-js/mermaid-cli
python3 -m pip install --user picosvg vl-convert-python
```

Notes:

- `d2`, `gmic`, `resvg`, and `vtracer` may require manual install depending on distro packaging
- if no `vl-convert` executable appears, expose a wrapper that calls the installed Python module before marking the chart lane complete

### Local ML Environment

For a cleaner local ML setup, prefer an isolated virtual environment:

```bash
python3 -m venv .venv-asset-pipeline
source .venv-asset-pipeline/bin/activate
python -m pip install --upgrade pip
python -m pip install pillow diffusers torch torchvision transformers accelerate safetensors
```

Then copy and edit config:

```bash
cp config/local-ml.example.yaml config/local-ml.yaml
```

## Validate

### Portable Bundle Validation

```bash
./scripts/doctor.py
./bin/asset-svg-edit --help
./bin/asset-review --help
```

### Deterministic Tool Validation

```bash
./bin/asset-svg-render \
  --input examples/sample.svg \
  --output /tmp/asset-pipeline-sample.png \
  --format png \
  --width 256

./bin/asset-diagram \
  --spec examples/diagram-example.d2 \
  --engine d2 \
  --output /tmp/asset-pipeline-diagram.svg
```

### Local ML Validation

Validate only if the user asked for local ML bootstrap and a real model is configured:

```bash
./bin/asset-img-gen \
  --prompt "Minimal geometric hero image for a developer tools blog" \
  --output /tmp/asset-pipeline-gen.png \
  --backend-config config/local-ml.yaml
```

## Use

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
