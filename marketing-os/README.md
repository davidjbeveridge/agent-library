# marketing-os

`marketing-os` is a standalone, portable, composition-first marketing operating system. It ingests business or project context, detects local capabilities, routes work through wrapped vendored skill packs or native fallbacks, and keeps an audit-friendly record of assumptions, evidence, risks, experiments, and next steps.

This is a standalone subproject, not a global Codex skill bundle.

## When An Agent Is Pointed At This Folder

The install agent should ask:

1. `Do you want project-local install only, or project-local install plus bootstrap and validation?`
2. `Do you want optional external-tool setup handled now, or only the core package bootstrap?`

Default recommendation:

- `project-local`

`global Codex config` is not applicable for this package.

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

## Install

Use this package project-locally from this repo or from a cloned copy.

```bash
cd marketing-os
```

Do not install this into `~/.codex/skills`. It is a standalone application package.

## Bootstrap

Core bootstrap:

```bash
npm install
npm run generate:schema
```

Optional bootstrap:

- configure external tool credentials only if the user asked for enhanced or full capability modes
- do not assume tool adapters should be configured during core install

## Validate

### Dependency Install

```bash
npm install
```

### Build And Schema Generation

```bash
npm run generate:schema
npm run build
```

### Tests

```bash
npm test
```

### CLI Smoke Tests

```bash
npm run detect-capabilities
npm run run-workflow -- launch-saas --input examples/sample-projects/saas/context.json
```

## Use

Run a workflow against a sample fixture:

```bash
npm run run-workflow -- launch-saas --input examples/sample-projects/saas/context.json
```

Other useful entrypoints:

```bash
npm run summarize-context -- examples/sample-projects/saas/context.json
npm run propose-next-steps -- examples/sample-projects/saas/context.json
npm run audit-vendored-dependencies
```

## External Agent Install Notes

If an external agent is told to install `marketing-os`, it should:

1. Treat this as a project-local package
2. Run `npm install`
3. Run `npm run generate:schema`
4. Run tests and CLI smoke checks only if the user asked for validation
5. Ask before configuring optional external tools or credentials

## Runtime Scope

This version is standalone-core only. Thin runtime wrappers can be added later for Codex, MCP, OpenClaw, or custom runners without changing the core orchestrator or shared context contract.

## Repository Working Artifacts

This subproject currently contains some committed working artifacts such as:

- `node_modules/`
- `dist/`
- `.data/`

These are not the primary install surface. External install agents should follow the install and bootstrap steps above rather than copying those directories as the install procedure.
