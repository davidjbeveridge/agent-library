# Portable Skill Workflow

Use this workflow to rebuild, validate, package, and install the globally portable `ux-ui-design-lead` skill bundle.

## Why This Exists

The repository keeps its canonical authoring surfaces in:

- `AGENTS.md`
- `.agents/skills/ux-ui-design-lead/`
- `.codex/agents/`
- `docs/`

The globally installable bundle lives in:

- `skills/ux-ui-design-lead/`

That bundle is generated from repo sources so the pack does not drift.

## Commands

Sync generated bundle files:

```bash
python3 scripts/sync_ux_ui_design_lead_bundle.py
```

Validate the portable bundle:

```bash
python3 scripts/validate_ux_ui_design_lead_bundle.py
```

Package the bundle:

```bash
python3 scripts/package_ux_ui_design_lead_bundle.py
```

Install into the global Codex skills directory:

```bash
python3 scripts/install_ux_ui_design_lead_bundle.py
```

Check helper-tool availability:

```bash
python3 scripts/doctor_ux_ui_design_lead_bundle.py
```

## What Gets Installed

The global install includes:

- portable `SKILL.md`
- `agents/openai.yaml`
- bundled references
- specialist reference files
- templates
- examples
- helper scripts

The global install does not create a shared custom-agent directory for the repo's `.codex/agents/*.md` prompts. Those remain repository-local.

## Recommended Routine

1. Update canonical repo sources.
2. Run sync.
3. Run validation.
4. Package if you want a distributable `.skill`.
5. Install into `~/.codex/skills/ux-ui-design-lead` when ready.

## Core Dependency Model

Core usage remains local-first and dependency-light.

- required for repo tooling: `python3`, `rsync`, `zip`
- optional helpers: `node`, `npx`, `magick`, `compare`

The skill itself still works without the optional helpers.
