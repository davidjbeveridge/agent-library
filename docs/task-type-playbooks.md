# Task Type Playbooks

Use these mode-specific operating notes with `.agents/skills/ux-ui-design-lead/SKILL.md`.

## Audit

- Required inputs: current screen or flow and at least one evidence source.
- Optional inputs: audience, product goal, known complaints.
- Process: map semantics, hierarchy, flow, and accessibility, then rank the risks.
- Outputs: full contract and prioritized repair list.
- Success criteria: the major failure modes are explicit and actionable.

## Redesign

- Required inputs: current UI evidence or strong brief and a primary user job.
- Optional inputs: brand constraints, target platform, implementation constraints.
- Process: define target structure, rebalance emphasis, and specify behavior.
- Outputs: `DESIGN.md` handoff and before/after structural direction.
- Success criteria: one dominant purpose and one implementable direction.

## Simplification

- Required inputs: overloaded screen or flow and evidence of complexity.
- Optional inputs: usage frequency, novice vs expert audience.
- Process: remove, defer, collapse, or default secondary complexity.
- Outputs: remove/keep/defer list and revised structure.
- Success criteria: fewer decisions and a shorter path to the primary outcome.

## Implementation Guidance

- Required inputs: problem statement plus current UI or codebase.
- Optional inputs: system constraints, component library.
- Process: translate intent into concrete layout, state, copy, and responsive rules.
- Outputs: `DESIGN.md` handoff and component-level notes.
- Success criteria: coding agents can act without inventing design decisions.

## Critique

- Required inputs: interface evidence.
- Optional inputs: quality bar or competitor context.
- Process: identify confusion, semantic drift, clutter, and weak discipline.
- Outputs: compact review by default.
- Success criteria: critique points name real product problems, not style preferences.

## Polish

- Required inputs: implemented UI.
- Optional inputs: multi-state screenshots or browser access.
- Process: tighten spacing, emphasis, state treatment, and consistency.
- Outputs: compact or full contract and a polish pass list.
- Success criteria: the interface feels more deliberate without adding noise.

## Accessibility Pass

- Required inputs: running UI, code, or screenshots.
- Optional inputs: keyboard path, semantic markup.
- Process: run the checklist, document blockers, and specify repairs.
- Outputs: full contract with concrete accessibility fixes.
- Success criteria: critical access barriers are explicit and repair-ready.

## Icon/Label Design

- Required inputs: concept, action, or status to represent.
- Optional inputs: existing icon set and surrounding copy.
- Process: determine semantic burden and choose the safest pattern.
- Outputs: icon treatment, label, tooltip, and aria guidance.
- Success criteria: meaning is clear without insider knowledge.

## Design System Extraction

- Required inputs: existing app or codebase.
- Optional inputs: screenshots, CSS, token sources.
- Process: inventory patterns, tokens, variants, states, and inconsistencies.
- Outputs: token map, component inventory, normalization priorities.
- Success criteria: reusable system boundaries are implementation-ready.

## Component Review

- Required inputs: single component or component family.
- Optional inputs: usage contexts and source code.
- Process: inspect semantics, anatomy, state behavior, and accessibility.
- Outputs: component review and targeted adjustments.
- Success criteria: responsibilities, states, and risks are clearly documented.

## Flow Redesign

- Required inputs: current flow and target outcome.
- Optional inputs: drop-off evidence, first-time vs repeat-user differences.
- Process: remove unnecessary steps and recenter the sequence on the primary job.
- Outputs: redesigned flow and screen responsibilities.
- Success criteria: the next action is obvious at each stage.

## Autonomous Build Support

- Required inputs: product goal and enough evidence to proceed without constant approval.
- Optional inputs: codebase entrypoints, current implementation constraints.
- Process: turn design intent into implementation-ready direction, assumptions, and acceptance criteria.
- Outputs: `DESIGN.md` handoff, risk notes, and acceptance criteria.
- Success criteria: coding agents can build with minimal ambiguity.
