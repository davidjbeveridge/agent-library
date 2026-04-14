# UX/UI Design Pack Index

## Purpose

This directory is the canonical home of the repository's local-first UX/UI design lead system.

Use `.agents` for:

- canonical design methodology
- routing and delegation guidance
- repository-native orchestration

Use `.codex/agents` for:

- specialist agent prompts that Codex tooling can invoke directly

Use `skills/ux-ui-design-lead` for:

- the portable, globally installable skill bundle
- bundled references, templates, examples, and helper scripts

## Canonical Files

- Lead skill: `.agents/skills/ux-ui-design-lead/SKILL.md`
- Root routing: `AGENTS.md`
- Specialist prompts: `.codex/agents/`
- Docs and references: `docs/`
- Optional adapters: `adapters/ux-ui-design/`

## Working Rules

- Keep the methodology canonical in `.agents/skills/ux-ui-design-lead/SKILL.md`.
- Treat `skills/ux-ui-design-lead/` as a generated portable bundle, not as the authoring source of truth.
- Keep specialist prompts narrow and opinionated.
- Put durable design logic in `docs/` when it is reusable across tasks.
- Keep the core pack local-first. Optional adapters must never become required for the base workflow.
- Keep repo-local `.codex/agents/` as the true custom-agent surface for this repository.

## Default Flow

1. Load `AGENTS.md`.
2. Load `.agents/skills/ux-ui-design-lead/SKILL.md`.
3. Load only the relevant docs for the current task mode.
4. Load any required specialist prompt from `.codex/agents/`.
5. Gather evidence from app state, browser snapshots, screenshots, code, and briefs.
6. Produce one of the standardized output contracts.

## Portable Bundle Workflow

Use `docs/portable-skill-workflow.md` and the repo scripts under `scripts/` to:

- sync generated references into the portable bundle
- validate the portable bundle
- package the bundle as `.skill`
- install it into `~/.codex/skills/ux-ui-design-lead`
