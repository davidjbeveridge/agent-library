---
name: asset-pipeline
description: CLI-first, local-first asset generation, editing, review, comparison, and packaging for SVG, raster, diagrams, charts, screenshots, and optional local ML image workflows.
---

# Asset Pipeline

Use this skill when the task is to create, edit, optimize, compare, package, or review visual assets without depending on Figma, cloud APIs, or a browser UI.

## Philosophy

- Prefer open formats first. SVG is the default source of truth for vector assets. Text specs are the default source of truth for diagrams and charts.
- Prefer deterministic CLI tooling before local ML. Use local models only when true image synthesis, img2img, or inpainting is materially required.
- Treat generation, editing, review, comparison, and packaging as separate phases with explicit artifacts and sidecars.
- Keep assets maintainable for humans and agents. Preserve source files, avoid destructive edits by default, and write stable outputs with machine-readable sidecars when useful.
- Never pretend a dependency exists. If a lane is unavailable, keep the source spec, explain the gap, and provide the next deterministic fallback.

## Supported Asset Types

- SVG logos, marks, and logo systems
- Icons and icon sets
- Vector illustrations
- Diagrams from text specs
- Charts from structured data or declarative specs
- Blog and social images
- Screenshots and screenshot-derived callouts
- Raster edits and conversions
- Packaging and optimization deliverables

## Operating Modes

- `generate`: create a new asset from a brief, prompt, or text spec
- `edit`: modify an existing asset while preserving semantic intent
- `optimize`: reduce size, normalize structure, and prepare outputs
- `vectorize`: convert raster input to vector output
- `diagram`: author and render diagrams from text
- `chart`: author and render charts from structured data
- `review`: assess semantics, readability, quality, and fitness
- `compare`: compare two or more assets and report meaningful differences
- `package`: export, optimize, manifest, and bundle deliverables

## Lane Selection

Use deterministic CLI manipulation when the task is structural, spec-driven, export-oriented, cleanup-oriented, comparison-oriented, or packaging-oriented.

Use the local ML lane only when the request requires:

- brand-new bitmap synthesis
- major visual restyling that deterministic transforms cannot reach
- inpainting or prompt-guided image editing

If local ML is unavailable, do not claim generation happened. Fall back to:

- SVG or text-spec creation
- raster compositing and direct manipulation
- review notes describing what would be generated
- install and setup guidance for the missing backend

## Dependency Tiers

- No-tool fallback: raw SVG authoring, text-spec generation, structured review, compare manifests, and dependency guidance
- Minimum deterministic tier: `python3`, `inkscape`, `magick`, `ffmpeg`
- Enhanced deterministic tier: add `svgo`, `picosvg`, `resvg` or `rsvg-convert`, `potrace`, `vtracer`, `libvips`, `gmic`, `graphviz`, `plantuml`, `d2`, `mmdc`, `vl-convert`, `oxipng`, `pngquant`, `cwebp`, `img2webp`, `avifenc`, `jpegoptim`, `exiftool`
- Local ML tier: add `torch`, `diffusers`, model weights, and optional acceleration backends

See `docs/tooling-overview.md` for the full lane matrix and `scripts/doctor.py` for dependency probing.

## Maintainability Rules

- Vector source files live as `.svg`
- Diagram and chart sources live beside renders as `.dot`, `.puml`, `.d2`, `.mmd`, `.vl.json`, or other text specs
- Raster edits preserve original inputs unless `--in-place` is explicitly requested
- Outputs may include sidecars such as `*.recipe.json`, `*.review.md`, or `*.asset.json`
- Preserve semantic intent across edits: keep labels, layer purpose, icon meaning, and chart/diagram semantics explicit in companion files when the visual alone is ambiguous

## Subagent Orchestration

The orchestrator should explicitly load subagent prompts from `subagents/` rather than assuming runtime auto-discovery.

- Start with `subagents/asset_orchestrator.md` when the user asks for multi-step work or the correct lane is unclear.
- Use `subagents/svg_asset_designer.md`, `subagents/icon_semantics_designer.md`, or `subagents/brand_mark_designer.md` for vector concept and semantic design work.
- Use `subagents/vector_pipeline_operator.md`, `subagents/raster_pipeline_operator.md`, `subagents/diagram_designer.md`, and `subagents/chart_designer.md` for deterministic execution lanes.
- Use `subagents/local_image_generator.md` and `subagents/local_image_editor.md` only when local ML is requested or clearly warranted.
- Use `subagents/visual_semantics_reviewer.md` for QA and semantic review.
- Finish with `subagents/asset_optimizer_packager.md` when outputs must ship cleanly.

## Output Contract

Default response sections:

1. `Intent`
2. `Chosen Lane`
3. `Inputs`
4. `Operations`
5. `Outputs`
6. `Review Notes`
7. `Missing Dependencies / Fallbacks`

When actual files are created or changed, include exact paths. When dependencies are missing, say what was preserved and what command should be retried after installation.

## Wrapper Surface

Use the stable commands in `bin/`:

- `asset-svg-edit`
- `asset-svg-opt`
- `asset-svg-render`
- `asset-vectorize`
- `asset-raster`
- `asset-compare`
- `asset-diagram`
- `asset-chart`
- `asset-img-gen`
- `asset-img-edit`
- `asset-review`
- `asset-package`

Each command supports `--help`, avoids interactivity, prefers stable file I/O, and fails clearly when a dependency lane is unavailable.

## Recommended Reading

- `docs/tooling-overview.md`
- `docs/svg-pipeline.md`
- `docs/raster-pipeline.md`
- `docs/diagram-and-chart-pipeline.md`
- `docs/local-ml-pipeline.md`
- `docs/visual-review.md`
- `docs/packaging-and-optimization.md`
- `docs/examples.md`

## Workflow Defaults

1. Capture the semantic intent in a short brief or sidecar first.
2. Choose the narrowest lane that can satisfy the request.
3. Preserve or create a source-of-truth artifact before emitting derivatives.
4. Run review after generation or editing, not just before packaging.
5. Package and optimize only after semantics and technical quality are acceptable.
