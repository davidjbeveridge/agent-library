# Packaging And Optimization

Optimization is part of the workflow, not an afterthought.

## Preferred Optimizers

- `oxipng`
- `pngquant`
- `cwebp`
- `img2webp`
- `avifenc`
- `jpegoptim`
- `exiftool`

## Packaging Rules

- keep source-of-truth assets unchanged
- generate delivery variants into a target folder
- emit a manifest with source paths, output paths, formats, sizes when known, and skipped steps

## Metadata Policy

- strip metadata from public web assets unless the metadata is required
- keep provenance in the manifest rather than hiding it in fragile EXIF fields

## Target Profiles

### Web

- optimize aggressively
- prefer SVG, WebP, AVIF, and compressed PNG where appropriate

### Social

- keep platform-safe raster outputs
- maintain readable focal points at cropped aspect ratios

### Print

- preserve quality over aggressive compression
- be careful with metadata stripping and color assumptions

## Honest Failure Behavior

When an optimizer is missing:

- copy the unoptimized artifact
- record the skipped step in the manifest
- include the exact missing binary in the report
