# Examples

## Prompt Patterns

### Create A Clean SVG Logo Mark

`Use $asset-pipeline in generate mode to create a restrained SVG logo mark from skills/asset-pipeline/examples/logo-brief.md. Keep the source of truth in SVG, render a preview PNG, and review whether the silhouette stays legible at small size.`

### Design A Semantically Clear Remix Icon

`Use $asset-pipeline in generate mode to design an icon for "remix" that reads clearly without text, then add tooltip, label, and accessibility guidance if the icon alone is insufficient.`

### Vectorize A Rough Sketch

`Use $asset-pipeline in vectorize mode on this sketch, choose bilevel or color vectorization explicitly, clean the result, and save the final SVG plus a note on any remaining topology issues.`

### Generate A Blog Hero Image Locally

`Use $asset-pipeline in generate mode to create a local blog hero image from this brief, then optimize it for web delivery. If no local ML backend is configured, produce the deterministic fallback plan and prompt recipe instead of pretending the image was generated.`

### Edit A PNG To Improve Composition

`Use $asset-pipeline in edit mode to crop, rebalance, and add emphasis to this PNG. Keep the original untouched and write the output plus review notes.`

### Generate A Technical Diagram

`Use $asset-pipeline in diagram mode to turn this system description into a D2 diagram, render SVG if D2 is installed, and preserve the text spec either way.`

### Render A Chart

`Use $asset-pipeline in chart mode to turn this structured data into a Vega-Lite spec, render both SVG and PNG if vl-convert is available, and explain the encoding choices.`

### Compare Two Image Assets

`Use $asset-pipeline in compare mode to compare these two assets, produce a diff artifact, and report meaningful visual changes instead of raw pixel counts alone.`

### Package A Folder For Web Delivery

`Use $asset-pipeline in package mode to optimize every asset in this folder for web delivery, keep sources untouched, and write a manifest of outputs and skipped optimization steps.`

### Review Icon Comprehensibility

`Use $asset-pipeline in review mode to assess whether this icon communicates the intended action without text, call out ambiguity, and recommend label or geometry changes.`

## Explicit Subagent Invocations

- `Load subagents/asset_orchestrator.md and choose the right lane for this request.`
- `Load subagents/vector_pipeline_operator.md and clean, render, and optimize this SVG.`
- `Load subagents/visual_semantics_reviewer.md and review whether this chart is readable and semantically honest.`
