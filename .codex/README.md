# Codex Compatibility

This directory contains compatibility-facing custom specialist prompts for Codex inside this repository.

The canonical design methodology for the UX/UI package does not live here. It lives in:

- `skills/ux-ui-design-lead/README.md`
- `.agents/skills/ux-ui-design-lead/SKILL.md`
- `docs/`

Use `.codex/agents/` when Codex tooling expects a direct specialist prompt such as `visual_designer` or `accessibility_reviewer`.

Global installation currently covers the portable skill bundle under `~/.codex/skills/ux-ui-design-lead`. It does not create a shared global custom-agent directory for these specialist prompts.

Keep these files:

- specialized
- reusable on their own
- narrow in scope
- explicit about escalation back to the lead

Do not duplicate the full lead methodology in every specialist file.
