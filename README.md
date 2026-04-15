# agent-library

My personal library of AI workflow assets, including active Codex instruction surfaces.

This repository is a place to organize the prompts, agents, and skills I use for writing, coding, research, and automation.

## Structure

- `prompts/` for reusable prompt templates and reference prompts
- `agents/` for agent definitions, role setups, and orchestration patterns
- `skills/` for discovery-facing skill entrypoints and wrappers
- `scripts/` for repo tooling such as bundle sync, validation, packaging, install, and environment checks
- `.agents/` for canonical repository-native agent systems and skills
- `.codex/agents/` for compatibility-facing custom agent prompts
- `docs/` for reusable reference material, rubrics, templates, and playbooks
- `adapters/` for optional non-core integrations
- `marketing-os/` for the standalone composition-first marketing operating system subproject

This repository now uses a live root `AGENTS.md` as its top-level routing file for the UX/UI design lead pack.

The current canonical pack is:

- root routing: `AGENTS.md`
- canonical lead skill: `.agents/skills/ux-ui-design-lead/SKILL.md`
- specialist Codex prompts: `.codex/agents/`
- portable installable bundle: `skills/ux-ui-design-lead/`
- bundle workflow: `docs/portable-skill-workflow.md`

This repository also now contains:

- `marketing-os/` as a standalone Node/TypeScript package for local-first, composition-first agentic marketing orchestration

## Notes

This is a personal public repository. The contents reflect my own workflows, experiments, and evolving practices.
