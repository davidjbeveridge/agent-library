# marketing-os

`marketing-os` is a standalone, portable, composition-first marketing operating system. It ingests a business or project context, detects the capabilities available in the local environment, routes work through wrapped vendored skill packs or native fallbacks, and keeps an audit-friendly record of assumptions, evidence, risks, experiments, and next steps.

## Goals

- Run usefully with no external tools or third-party runtime dependencies.
- Compose approved vendored skill packs through local wrappers instead of trusting raw upstream content.
- Keep a normalized shared marketing context across strategy, execution, measurement, and reporting.
- Work locally first, with plain files, predictable registries, and explicit trust boundaries.

## MVP Surface

- TypeScript core orchestrator and workflow engine
- Shared `MarketingContext` schema in Zod and generated JSON Schema
- Capability detection for vendored packs and optional tool adapters
- Native fallback skills for strategy, audits, experiments, reporting, and prioritization
- Wrapper adapters around Corey, Kim, Kostja, and Typefully vendored snapshots
- Example workflows for SaaS, local services, ecommerce, devtools, and stagnation recovery
- CLI commands for capability detection, workflow execution, context summarization, next-step prioritization, vendored audits, and upgrades

## Quick Start

```bash
cd marketing-os
npm install
npm run generate:schema
npm test
npm run detect-capabilities
```

Run a workflow against a sample fixture:

```bash
npm run run-workflow -- launch-saas --input examples/sample-projects/saas/context.json
```

## Runtime Scope

This first version is standalone-core only. It is designed so thin runtime wrappers can be added later for Codex, MCP, OpenClaw, or custom runners without changing the core orchestrator or shared context contract.
