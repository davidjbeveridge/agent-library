# UX/UI Design Lead

Portable user-skill bundle for local-first UX/UI audit, redesign, simplification, critique, polish, accessibility review, and implementation-ready design guidance.

This README is the package-local install contract for agents pointed directly at `skills/ux-ui-design-lead/`.

## When An Agent Is Pointed At This Folder

The install agent should ask:

1. `Install this skill project-locally or into a global Codex config like ~/.codex/?`
2. `Do you want install only, or install plus bootstrap and validation?`
3. `Do you want optional helper dependencies installed as well?`

Default recommendation:

- `global Codex config`

## What This Bundle Is

- Main skill manifest: `SKILL.md`
- Skill metadata: `agents/openai.yaml`
- bundled references under `references/`
- templates under `templates/`
- examples under `examples/`
- optional helper scripts under `scripts/`

The bundle is self-contained and does not require repo-root docs.

## Install

Copy this folder into a skills library under the name `ux-ui-design-lead`.

### Global Codex Config

```bash
mkdir -p ~/.codex/skills
rsync -a ./ ~/.codex/skills/ux-ui-design-lead/
```

### Project-Local

```bash
mkdir -p ./skills
rsync -a ./ ./skills/ux-ui-design-lead/
```

## Bootstrap

Bootstrap is optional. Core skill usage works without extra dependencies.

Optional helper dependencies:

- `python3`
- `magick` and `compare` for screenshot diff work
- project source files for design token extraction

Helper scripts:

- `scripts/doctor.py`
- `scripts/screenshot_diff.py`
- `scripts/extract_design_tokens.py`

## Validate

Portable bundle validation:

```bash
python3 ./scripts/doctor.py
python3 ./scripts/screenshot_diff.py --help
python3 ./scripts/extract_design_tokens.py --help
```

Skill-surface validation:

```bash
sed -n '1,80p' SKILL.md
sed -n '1,80p' agents/openai.yaml
```

## Use

After install, invoke the skill with prompts like:

- `Use $ux-ui-design-lead to audit this settings page and simplify it around the main user job.`
- `Use $ux-ui-design-lead in polish mode on this running app and call out hierarchy, affordance, and accessibility issues.`
- `Use $ux-ui-design-lead in autonomous build support mode and produce implementation-ready guidance for the frontend agent.`

If you need more detail, load:

- `references/lead-methodology.md`
- the smallest relevant subset under `references/`
- templates under `templates/`

## Important Constraints

- Core usage is local-first and does not depend on Figma or other paid design tools.
- The bundle is portable and self-describing.
- Repository-native `.codex/agents/` prompts remain repo-local and are not part of this portable bundle.
