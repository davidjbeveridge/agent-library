# Design Tradeoffs

- Vendoring instead of live fetching keeps execution deterministic and auditable.
- Wrappers instead of direct invocation keep semi-trusted upstream content behind local trust boundaries.
- Composition-first but not composition-only preserves strong fallbacks when upstream coverage is missing or unsafe.
- Local-first plain files make the system inspectable and easy to adapt in other runtimes later.
- Confidence and provenance tracking matter because marketing recommendations often outrun the evidence available.
- Thin abstractions reduce hidden behavior and make future agent changes easier to review.
