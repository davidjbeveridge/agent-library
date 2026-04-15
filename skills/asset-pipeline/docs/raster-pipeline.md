# Raster Pipeline

The raster lane handles deterministic bitmap operations, not open-ended synthesis.

## Preferred Stack

1. libvips
2. ImageMagick
3. G'MIC for advanced scripted effects
4. FFmpeg for animated or time-based media

## Why libvips First

- fast on large images
- good default for resize, crop, color conversion, and batch processing
- predictable CLI-friendly operations

## Why ImageMagick Stays In The Bundle

- broad fallback coverage
- common installation footprint
- useful for compare workflows, text annotations, and general conversions

## When To Use FFmpeg

- extract video frames
- build image sequences
- overlay or composite in time-based media
- convert animated assets

## Safe Defaults

- preserve the original raster input unless `--in-place` is requested
- write transformed outputs to a sibling or target folder
- record the operation chain in a sidecar when the workflow has multiple steps

## Typical Operations

- `resize`
- `crop`
- `pad`
- `annotate`
- `composite`
- `convert`

## Review Checklist

- is the output sharper or clearer rather than merely smaller
- did the crop remove context needed for meaning
- did annotation improve emphasis without obscuring important content
- did conversion or optimization introduce visible artifacts
