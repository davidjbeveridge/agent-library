# Architecture

`marketing-os` separates strategy, execution, measurement, and reporting around a shared `MarketingContext` contract.

## Layers

- Core orchestrator: ingest context, classify work, detect capabilities, route tasks, persist outputs.
- Native skills: safe first-party fallbacks that work in `MODE_MINIMAL`.
- Vendored wrappers: semi-trusted dependency adapters that normalize inputs and outputs and never expose raw upstream content directly.
- Tool adapters: optional local integrations with explicit detection, health checks, and read/write boundaries.
- Persistence: plain JSON state under `.data/` for contexts, recommendations, and future run history.

## Execution Modes

- `MODE_MINIMAL`: native-only, no vendored or external tools.
- `MODE_COMPOSED`: vendored wrappers available, but no external tools.
- `MODE_ENHANCED`: vendored wrappers plus read-only or partial tools.
- `MODE_FULL`: vendored wrappers plus read-write tool adapters.

## Trust Boundaries

Vendored dependencies are semi-trusted. The orchestrator routes only through local wrappers, and every wrapper emits normalized artifacts plus provenance. Output validation and policy checks run after wrapper or native execution.
