# Diagram And Chart Pipeline

Keep diagrams and charts text-native whenever possible.

## Diagram Engines

- Graphviz for graph structure and dependency maps
- PlantUML for UML-style documentation and quick architecture visuals
- D2 for concise system and product diagrams
- Mermaid CLI for ecosystems that already use Mermaid

## Chart Engine

- Vega-Lite via `vl-convert`

## Source Of Truth Rules

- preserve `.dot`, `.puml`, `.d2`, `.mmd`, `.vl.json`, or equivalent source files
- render to SVG first when practical
- add PNG only when a consumer cannot use SVG

## Diagram Guidance

- make grouping explicit
- keep labels short and meaningful
- show the dominant flow first
- avoid decorative complexity that obscures relationships

## Chart Guidance

- choose chart types based on comparison intent, not novelty
- avoid misleading encodings
- label axes, units, and legends clearly
- preserve the data-to-mark relationship in the source spec

## Missing Engine Behavior

If the requested engine is unavailable:

- preserve or generate the source spec
- validate obvious structure when possible
- emit install guidance
- do not fabricate a rendered asset
