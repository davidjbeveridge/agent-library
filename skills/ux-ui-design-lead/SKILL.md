---
name: ux-ui-design-lead
description: Local-first UX/UI design leadership for web, mobile, and desktop products. Use when Codex needs to audit, redesign, simplify, critique, polish, review accessibility, inspect running UIs, analyze screenshots, compare semantics against implementation, or produce implementation-ready design guidance without depending on Figma or paid design tools.
---

# UX/UI Design Lead

This is the portable, globally installable skill bundle. It is self-contained and does not assume access to any repository root or any separate instruction, agent, or docs tree.

## Use When

Trigger this skill for:

- screen or flow audits
- redesign and simplification work
- critique and polish passes
- accessibility reviews
- icon and label decisions
- component review
- flow redesign
- design system extraction
- implementation-ready UX/UI handoffs

Do not use this skill for moodboarding, visual trend hunting, or tool-specific design file work with no product evidence.

## Core Rules

- Stay local-first. Prefer running UI, browser snapshots, DOM inspection, screenshots, local images, code, briefs, and bug reports.
- Treat Figma and external design systems as optional inputs, never dependencies.
- Keep semantics, user jobs, and accessibility ahead of decoration.
- Delegate specialist lenses conceptually by loading the matching files under `references/specialists/`.
- Use the templates under `templates/` for final outputs.

## What To Load First

For substantial work, read in this order:

1. `references/lead-methodology.md`
2. One or more of:
   - `references/task-type-playbooks.md`
   - `references/browser-visual-review-workflow.md`
   - `references/ux-rubric.md`
   - `references/ui-heuristics.md`
   - `references/accessibility-checklist.md`
   - `references/icon-semantics-guide.md`
   - `references/design-system-guidelines.md`
3. Templates from `templates/`
4. `examples/prompts.md` if you want example phrasing or output shape

Load only what the current task needs.

## Specialist Lenses

When you need a bounded specialist perspective, load the matching file under `references/specialists/`:

- `ux_researcher.md`
- `flow_simplifier.md`
- `interaction_designer.md`
- `visual_designer.md`
- `accessibility_reviewer.md`
- `content_designer.md`
- `design_systems_engineer.md`
- `icon_semantics_designer.md`
- `frontend_design_reviewer.md`
- `design_critic.md`

Use specialist lenses to sharpen one dimension of the work. Keep final synthesis local.

## Task Mode Selector

Use `references/task-type-playbooks.md` to select the right mode:

- `audit`
- `redesign`
- `simplification`
- `implementation guidance`
- `critique`
- `polish`
- `accessibility pass`
- `icon/label design`
- `design system extraction`
- `component review`
- `flow redesign`
- `autonomous build support`

## Default Procedure

1. Identify the primary user job.
2. Gather the strongest local evidence available.
3. Build a semantic reading before proposing fixes.
4. Compare intended hierarchy versus actual hierarchy.
5. Identify the biggest UX, accessibility, and state clarity failures.
6. Simplify around the dominant task.
7. Produce implementation-ready recommendations.

Read `references/lead-methodology.md` for the full operating method.

## Helper Scripts

Use bundled scripts when they materially improve the work:

- Screenshot diff:

```bash
python3 {baseDir}/scripts/screenshot_diff.py \
  --baseline baseline.png \
  --current current.png \
  --output-dir ./diff-output
```

- Design token extraction:

```bash
python3 {baseDir}/scripts/extract_design_tokens.py \
  ./src ./styles \
  --output-dir ./token-report
```

- Environment doctor:

```bash
python3 {baseDir}/scripts/doctor.py
```

These helpers are optional. The core skill still works without them.

## Output Contracts

Choose one template:

- Full review: `templates/full-review-template.md`
- Compact review: `templates/compact-review-template.md`
- Redesign handoff: `templates/design-handoff-template.md`

Always include:

- primary user jobs
- major risks
- recommended changes
- implementation notes
- acceptance criteria

## Optional Adapters

Load these only when external artifacts already exist:

- `references/adapters/figma.md`
- `references/adapters/design-tokens.md`
- `references/adapters/screenshot-diff.md`
- `references/adapters/external-design-systems.md`

They translate external artifacts into the same local-first evidence model. They do not replace browser or screenshot review of the actual product.

## Efficiency Plan

- Read `references/lead-methodology.md` once per task, not repeatedly.
- Load only the task-mode and specialist references the task needs.
- Prefer the helper scripts over re-deriving diff or token inventory logic by hand.
- Stop when the design direction is implementation-ready, not merely descriptive.

## Pitfalls And Fixes

- Symptom: the UI looks polished but still feels wrong.
  - Fix: load `references/specialists/design_critic.md` and re-check semantics versus visuals.
- Symptom: there is too much configuration on the main path.
  - Fix: load `references/specialists/flow_simplifier.md` and `references/task-type-playbooks.md`.
- Symptom: labels and icons feel ambiguous.
  - Fix: load `references/icon-semantics-guide.md` and `references/specialists/content_designer.md`.
- Symptom: browser evidence and code evidence disagree.
  - Fix: prioritize the visible product behavior and document the semantic mismatch.

## Verification Checklist

- The primary user job is explicit.
- The recommendations are grounded in visible or code-backed evidence.
- Accessibility is integrated into the design recommendations.
- The output uses one of the bundled templates.
- No external paid tool is required to execute the core workflow.
