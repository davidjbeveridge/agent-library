# SVG Pipeline

The SVG lane is the primary vector lane for this bundle.

## Source Of Truth

- Keep source assets in `.svg`
- Prefer simple geometry, explicit viewBox values, and stable grouping
- Avoid irreversible editor metadata unless it is required for later edits

## Preferred Stack

1. Inkscape CLI
2. SVGO
3. picosvg
4. resvg or `rsvg-convert`
5. Potrace for bilevel raster-to-vector
6. VTracer for color raster-to-vector

## Inkscape CLI Use

Use Inkscape CLI for:

- action-driven cleanup and edits
- deterministic exports
- query operations
- SVG-aware transformations

When Inkscape is unavailable, the wrappers can still perform XML-safe edits for simple fill, stroke, or viewBox changes.

## Normalization

- run `asset-svg-opt` after structural edits
- prefer SVGO for optimization
- use picosvg when simplification or normalization helps downstream rendering
- render test outputs after optimization to make sure semantics survived cleanup

## Rendering

Preferred order:

1. `resvg`
2. `rsvg-convert`
3. Inkscape export

Use explicit width and height when the target surface is known. Keep the original SVG unchanged.

## Vectorization

- use Potrace for high-contrast bilevel input
- use VTracer for color input when color boundaries matter
- always review vectorized results for topology noise, excessive node counts, and semantic drift

## Review Checklist

- does the silhouette communicate the intended idea at small size
- are strokes and fills stable across light and dark backgrounds
- does the viewBox tightly fit the intended mark
- did optimization remove meaningful IDs, labels, or structure that downstream agents need
