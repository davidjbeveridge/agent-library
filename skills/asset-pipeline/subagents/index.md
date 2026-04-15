# Asset Pipeline Subagents

Use this file as the routing map for explicit specialist invocation.

## Routing

- Start with `asset_orchestrator.md` when the task spans multiple lanes or dependencies are uncertain.
- Use `svg_asset_designer.md` for vector composition, raw SVG direction, and structured visual motifs.
- Use `icon_semantics_designer.md` when icon meaning, label pairing, or recognizability is the critical problem.
- Use `brand_mark_designer.md` for logos, marks, and restrained identity systems.
- Use `vector_pipeline_operator.md` for Inkscape, SVGO, picosvg, resvg, Potrace, and VTracer operations.
- Use `raster_pipeline_operator.md` for libvips, ImageMagick, G'MIC, and FFmpeg raster work.
- Use `diagram_designer.md` for Graphviz, PlantUML, D2, and Mermaid specs.
- Use `chart_designer.md` for Vega-Lite-first chart work and structured-data rendering.
- Use `local_image_generator.md` for text-to-image generation when a local backend exists.
- Use `local_image_editor.md` for img2img, inpainting, or prompt-guided editing with local models.
- Use `visual_semantics_reviewer.md` to verify communication, hierarchy, readability, and technical quality.
- Use `asset_optimizer_packager.md` to optimize, transcode, strip metadata, and emit package manifests.

## Shared Handoff Contract

Every subagent should return:

- `Intent`
- `Inputs`
- `Operations`
- `Outputs`
- `Open Risks`
- `Next Handoff`

Do not assume another subagent ran unless its outputs are explicitly provided.
