# agent-library

Personal library of installable AI skill bundles, standalone agentic packages, and repository-native authoring surfaces.

This repo is intended to be readable by both humans and external install agents. If an agent is told `Install [repo root]`, it should start with [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md), not guess from the directory tree.

## Installable Packages

These are the supported repo-root install targets:

| Package | Path | Kind | Default install scope | Primary install doc |
| --- | --- | --- | --- | --- |
| `ux-ui-design-lead` | `skills/ux-ui-design-lead/` | Portable Codex skill bundle | Global Codex config | `skills/ux-ui-design-lead/README.md` |
| `asset-pipeline` | `skills/asset-pipeline/` | Portable Codex skill bundle | Global Codex config | `skills/asset-pipeline/README.md` |
| `marketing-os` | `marketing-os/` | Standalone Node/TypeScript subproject | Project-local | `marketing-os/README.md` |

Canonical repo-root install contract:

- [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md)

## How To Read This Repo

1. Start with [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md) for repo-root installation, package selection, scope selection, and bootstrap rules.
2. Then read the selected package’s own `README.md` or `SKILL.md`.
3. Only after that, load package-specific scripts, references, and validation commands.

## Structure

### Installable Packages

- `skills/` contains portable, user-installable skill bundles
- `marketing-os/` contains a standalone installable subproject

### Authoring And Runtime Support Surfaces

- `.agents/` contains canonical repository-native authoring surfaces and agent systems
- `.codex/agents/` contains repository-local specialist prompts
- `prompts/` contains reusable prompt templates
- `agents/` contains agent-definition and library support files
- `docs/` contains shared reference material and internal supporting docs
- `adapters/` contains optional non-core integration notes
- `scripts/` contains repo tooling for the UX/UI bundle packaging flow

### Generated Or Local Working Content

- `marketing-os/node_modules/`, `marketing-os/dist/`, and `marketing-os/.data/` are working artifacts for the standalone subproject, not the primary install surface for external agents
- external install agents should follow `marketing-os/README.md` rather than copying those directories blindly

## Repo-Root Install Behavior

If an external agent is told `Install [repo root]`, it should:

1. Read [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md)
2. Enumerate the supported installable units
3. Ask which package or package set the user wants
4. Ask whether the target is project-local or a global config such as `~/.codex/`
5. Ask before installing optional heavy dependencies such as local ML stacks or large toolchains
6. Follow the selected package’s own install instructions

## Notes

- Portable skills default to global install recommendations.
- `marketing-os` defaults to project-local install because it is a standalone package, not a global Codex skill.
- Repository-native authoring files are intentionally separate from the portable install surfaces.
