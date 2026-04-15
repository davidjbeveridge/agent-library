# AGENTS.md

## Purpose

This file is the repo-level router for installation and navigation. It is not the canonical runtime entrypoint for any single package.

If the request is `Install [repo root]` or otherwise asks how to install from this repository, load:

- [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md)

If the request points at a specific package path, route to that package’s own install docs instead of treating the whole repo as one unit.

## Supported Repo-Root Install Targets

- `skills/ux-ui-design-lead/`
- `skills/asset-pipeline/`
- `marketing-os/`

## Required Repo-Root Install Conversation

When an external agent is told to install from repo root, it must:

1. Discover the supported installable units from [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md)
2. Ask which package or package set the user wants installed
3. Ask whether the install target is project-local or a global config such as `~/.codex/`
4. Ask before installing optional heavy dependencies such as local ML models, large CLI toolchains, or package-manager dependencies
5. Follow the selected package’s own `README.md`

Do not guess package selection or install scope from the repo tree alone.

## Task Routing

- Repo install or repo navigation requests:
  - [INSTALL.md](/Users/davidjbeveridge/src/agent-library/INSTALL.md)
- UX/UI audit, redesign, simplification, critique, polish, or accessibility work:
  - [skills/ux-ui-design-lead/README.md](/Users/davidjbeveridge/src/agent-library/skills/ux-ui-design-lead/README.md)
  - [skills/ux-ui-design-lead/SKILL.md](/Users/davidjbeveridge/src/agent-library/skills/ux-ui-design-lead/SKILL.md)
- Asset generation, editing, packaging, vector/raster/diagram/chart work:
  - [skills/asset-pipeline/README.md](/Users/davidjbeveridge/src/agent-library/skills/asset-pipeline/README.md)
  - [skills/asset-pipeline/SKILL.md](/Users/davidjbeveridge/src/agent-library/skills/asset-pipeline/SKILL.md)
- Marketing OS setup or usage:
  - [marketing-os/README.md](/Users/davidjbeveridge/src/agent-library/marketing-os/README.md)

## Repository Conventions

- `skills/` contains portable install bundles
- `.agents/` and `.codex/agents/` are repository-native authoring/runtime support surfaces
- `marketing-os/` is a standalone subproject, not a Codex skill bundle

If the user wants a portable skill globally, default recommendation is a global Codex install. If the user wants `marketing-os`, default recommendation is project-local setup.
