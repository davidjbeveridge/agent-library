# Tooling Overview

This bundle is organized into lanes so agents can pick the narrowest reliable toolchain.

## Tier Model

### No-Tool Fallback

Use this tier when external CLIs are missing.

- write raw SVG directly
- write diagram or chart specs directly
- produce structured review and compare reports
- preserve prompts, recipes, and install guidance

### Minimum Deterministic Tier

Recommended baseline:

- `python3`
- `inkscape`
- `magick`
- `ffmpeg`

This supports:

- SVG edits and exports
- raster conversions and compositing
- screenshot and frame extraction work
- review and compare reports

### Enhanced Deterministic Tier

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

This unlocks clean vector normalization, vectorization, text-native diagrams and charts, faster raster work, and better packaging.

### Local ML Tier

Add:

- `torch`
- `diffusers`
- local model weights
- optional acceleration backends

This unlocks text-to-image, img2img, and inpainting through the bundle's backend abstraction.

## Lane Selection Matrix

| Need | Preferred lane | Fallback |
| --- | --- | --- |
| Logo, mark, icon | SVG lane | raw SVG authoring |
| Sketch to vector | vectorize lane | preserve sketch + vector brief |
| Screenshot cleanup, crop, annotate | raster lane | ImageMagick path or written ops plan |
| Diagram from text | diagram lane | preserve text spec |
| Quant chart from data | chart lane | preserve Vega-Lite spec |
| Blog/social hero synthesis | local ML lane | deterministic composition + prompt recipe |
| Asset QA | review lane | structured report without renders |
| Shipping bundle | package lane | copy outputs + honest manifest |

## Stable Commands

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

Use `scripts/doctor.py` before large workflows when the available tier is unclear.
