# AGENTS.md

## Purpose

This repository is an active Codex skill pack for local-first UX/UI design leadership. Load this file first, then load only the design assets relevant to the task.

The canonical methodology lives in:

- `.agents/skills/ux-ui-design-lead/SKILL.md`
- `docs/ux-rubric.md`
- `docs/ui-heuristics.md`
- `docs/accessibility-checklist.md`
- `docs/browser-visual-review-workflow.md`

Compatibility-facing custom specialist agents live in:

- `.codex/agents/`

Skill-loader discovery and the portable global-install bundle live in:

- `skills/ux-ui-design-lead/SKILL.md`

The portable bundle is installable into `~/.codex/skills/ux-ui-design-lead`. The repo-local `.codex/agents/` remain the actual custom-agent surface for this repository because no shared global custom-agent path was discovered here.

## What This Pack Is For

Use this repository when the task is about any of the following:

- auditing an existing interface
- redesigning a screen, component, or flow
- simplifying a product around the primary user job
- reviewing a running UI in the browser
- comparing screenshots, mockups, or shipped UI against intended semantics
- improving copy, icon usage, states, hierarchy, or accessibility
- extracting a design system from an existing product
- producing implementation-ready design guidance for another agent

This pack is intentionally local-first. The core workflow must work from:

- screenshots
- local image references
- running applications
- browser snapshots or DOM inspection
- source code
- markdown briefs
- user stories
- bug reports

Figma and other cloud design platforms are optional adapters only. They are never a required dependency.

## Load Order

For any substantial design task, load these in order:

1. `.agents/skills/ux-ui-design-lead/SKILL.md`
2. The smallest relevant docs subset from `docs/`
3. Any required specialist prompt from `.codex/agents/`
4. Task-specific evidence such as screenshots, DOM snapshots, routes, source files, or user briefs

Do not load all docs by default. Keep the context set tight.

## Invocation

Invoke the lead skill directly when the user asks for UX/UI work. Good triggers include:

- "audit this screen"
- "simplify this flow"
- "review this running app"
- "make this hierarchy clearer"
- "fix this UI so it matches the intended task"
- "extract a design system from this app"
- "improve the copy, labels, icons, or states"

Recommended entry phrasing:

- `Use $ux-ui-design-lead to audit this settings page and simplify it around the main user job.`
- `Use $ux-ui-design-lead in polish mode on this running app and call out hierarchy, affordance, and accessibility issues.`
- `Use $ux-ui-design-lead in autonomous build support mode and produce implementation-ready guidance for the frontend agent.`

## Operating Model

The design lead owns:

- task framing
- evidence selection
- semantic interpretation
- prioritization
- synthesis across disciplines
- final recommendations

The lead should keep synthesis local and delegate only bounded specialist analyses.

### Autonomous Mode

Use autonomous mode when:

- the task is clearly scoped
- the primary user job can be inferred from evidence
- the product direction is stable enough to move without constant approval
- implementation guidance or direct UI changes are expected

Autonomous mode must still record:

- assumptions
- rejected alternatives
- accessibility constraints
- acceptance criteria

### Human-In-The-Loop Mode

Use HITL mode when:

- product intent is contested
- multiple user jobs are competing for dominance
- the change affects brand voice or major workflow sequencing
- evidence is too weak to safely finalize the design direction

In HITL mode, reduce ambiguity early, show tradeoffs, and keep outputs compact and decision-ready.

## Global Skill Use

The globally installable skill bundle is self-contained and portable. It mirrors the reusable methodology, references, templates, examples, and helper scripts under `skills/ux-ui-design-lead/`.

Use the portable bundle when:

- you want the skill available from `~/.codex/skills`
- you want bundled references and helper scripts without relying on this repo root

Use the repo-local surfaces when:

- you want the canonical authoring source
- you want the real `.codex/agents/` specialist prompts
- you are editing or extending the pack itself

## Delegation Rules

Delegate only when the subtask is bounded and can be reviewed independently. The lead must not hand off the final cross-disciplinary synthesis.

Use these specialist agents for narrow responsibilities:

- `.codex/agents/ux_researcher.md`
- `.codex/agents/flow_simplifier.md`
- `.codex/agents/interaction_designer.md`
- `.codex/agents/visual_designer.md`
- `.codex/agents/accessibility_reviewer.md`
- `.codex/agents/content_designer.md`
- `.codex/agents/design_systems_engineer.md`
- `.codex/agents/icon_semantics_designer.md`
- `.codex/agents/frontend_design_reviewer.md`
- `.codex/agents/design_critic.md`

Delegation rules:

- Delegate evidence gathering, not ownership of product intent.
- Run compatible reviewers in parallel when they have distinct evidence or write scopes.
- Escalate uncertainty back to the lead instead of guessing missing intent.
- Do not let specialists redefine the primary user job without explicit evidence.
- Use the critic as an independent challenge pass after a proposed direction exists.

## Model Guidance

Prefer lighter or faster agents for:

- first-pass evidence gathering
- screenshot annotation
- DOM reading
- copy tightening
- component-level checks
- one-dimensional reviews such as icon meaning or focus order

Prefer heavier agents for:

- ambiguous redesigns
- flow restructuring with multiple competing jobs
- autonomous build support
- design system extraction from a large codebase
- reconciliation of conflicting evidence from screenshots, DOM, and code

## Standard Evidence Ladder

Use the strongest local evidence available, in this order:

1. running application state
2. browser snapshot and DOM inspection
3. screenshots or local images
4. source code and component structure
5. markdown brief, user story, or bug report
6. verbal explanation only

When stronger evidence becomes available, revise the earlier reading instead of defending first impressions.

## Output Contracts

### Full Default Contract

Use these exact section names unless the user requests another format:

1. `Context Understood`
2. `Primary User Jobs`
3. `Major UX Risks`
4. `Semantic Mismatches`
5. `Visual Hierarchy Assessment`
6. `Flow Issues`
7. `Accessibility Issues`
8. `Simplification Opportunities`
9. `Recommended Changes`
10. `Implementation Notes`
11. `Open Questions / Assumptions`
12. `Acceptance Criteria`

### Compact Review Contract

Use this when the user wants a quick pass:

1. `Context`
2. `Top Risks`
3. `Best Fixes`
4. `Implementation Notes`
5. `Acceptance Check`

### `DESIGN.md` Handoff Contract

Use this for redesign and autonomous build support:

1. `Objective`
2. `Primary User Jobs`
3. `Current Problems`
4. `Target Structure`
5. `Layout And Interaction Rules`
6. `Copy And Icon Rules`
7. `Accessibility Requirements`
8. `Implementation Notes`
9. `Acceptance Criteria`

## Design Decision Logging

Durable design decisions belong in `docs/design-decision-log.md`.

Record at least:

- date
- context
- evidence used
- decision
- rationale
- tradeoffs
- downstream implementation consequence
- validation follow-up

Do not leave important design rationale only in chat output.

## Pack Map

- Canonical lead skill: `.agents/skills/ux-ui-design-lead/SKILL.md`
- Pack index: `.agents/index.md`
- Specialist agent prompts: `.codex/agents/`
- Compatibility notes: `.codex/README.md`
- Portable skill bundle: `skills/ux-ui-design-lead/`
- Skill display metadata: `skills/ux-ui-design-lead/agents/openai.yaml`
- Rubric and reference docs: `docs/`
- Optional adapters only: `adapters/ux-ui-design/`
- Build and install workflow: `docs/portable-skill-workflow.md`
- Repo tooling: `scripts/sync_ux_ui_design_lead_bundle.py`, `scripts/validate_ux_ui_design_lead_bundle.py`, `scripts/package_ux_ui_design_lead_bundle.py`, `scripts/install_ux_ui_design_lead_bundle.py`, `scripts/doctor_ux_ui_design_lead_bundle.py`
