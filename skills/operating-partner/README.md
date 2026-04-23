# Operating Partner

Portable user-skill bundle for turning Codex into a proactive operating partner with live context refresh, standing initiative charters, leverage-oriented opportunity detection, and bounded autonomous execution.

This README is the package-local install contract for agents pointed directly at `skills/operating-partner/`.

## When An Agent Is Pointed At This Folder

The install agent should ask:

1. `Install this skill project-locally or into a global Codex config like ~/.codex/?`
2. `Do you want install only, or install plus validation?`
3. `Do you want this bundle used only for planning, or also for initiative execution once a standing charter exists?`

Default recommendation:

- `global Codex config`
- Unless the user explicitly overrides this, treat `~/.codex/` as the canonical home for this bundle's durable reference points and first-run automation behavior.

## What This Bundle Is

- Main skill manifest: `SKILL.md`
- Skill metadata: `agents/openai.yaml`
- Operating references under `references/`
- Output templates under `templates/`
- Canonical durable reference points at `~/.codex/PROFILE.md` and `~/.codex/GOALS.md` by default

The bundle is self-contained and does not depend on repo-root files.

## Install

Copy this folder into a skills library under the name `operating-partner`.

Default install target:

- `~/.codex/skills/operating-partner/`
- Canonical user context files: `~/.codex/PROFILE.md` and `~/.codex/GOALS.md`

### Global Codex Config

```bash
mkdir -p ~/.codex/skills
rsync -a ./ ~/.codex/skills/operating-partner/
```

### Project-Local

```bash
mkdir -p ./skills
rsync -a ./ ./skills/operating-partner/
```

## Validate

Portable bundle validation:

```bash
sed -n '1,120p' SKILL.md
sed -n '1,80p' agents/openai.yaml
find references templates -maxdepth 2 -type f | sort
```

## Use

After install, invoke the skill with prompts like:

- `Use $operating-partner to build a live operating picture from my current tools and propose the top strategic, tactical, and technical initiatives.`
- `Use $operating-partner to design standing initiative charters so Codex can act without asking for every tool call.`
- `Use $operating-partner to run a leverage review, rank the highest-payoff actions, and draft the approvals or automations needed.`

On first substantive use, the skill should:

1. look for `PROFILE.md` and `GOALS.md`
2. create them if missing, defaulting to `~/.codex/PROFILE.md` and `~/.codex/GOALS.md`
3. read them before any interview or survey
4. install a durable automation for continued operation unless the user explicitly opts out
5. default that automation to a thread heartbeat every 30 minutes unless the user explicitly wants a different cadence or a separate cron job

If you need more detail, load:

- `references/operating-model.md`
- `references/context-refresh.md`
- `references/durable-reference-points.md`
- `references/initiative-charters.md`
- `references/memory-interface.md`
- `references/opportunity-engine.md`
- `references/feedback-loops.md`
- the relevant template under `templates/`

## Important Constraints

- The bundle is designed for bounded autonomy, not blind action.
- Broad execution authority should come from explicit standing charters, not from one-off hidden assumptions.
- Fast-changing context should expire and be refreshed rather than fossilized into permanent memory.
- The canonical memory interface and its fallback should be recorded in `PROFILE.md`.
