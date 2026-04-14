# Design System Guidelines

Use this guide when extracting a design system from an existing application or tightening a loose one.

## Extraction Workflow

1. Inventory the major screens and shared regions.
2. Capture repeated component patterns.
3. Group components by responsibility, not implementation accident.
4. Identify token candidates.
5. Note inconsistent variants and states.
6. Prioritize normalization by user impact and implementation leverage.

## Token Categories

Extract tokens in this order:

- color
- typography
- spacing
- radius
- shadow or elevation
- border treatment
- motion duration and easing

Use semantic names where possible:

- `surface-primary`
- `text-muted`
- `action-primary`
- `status-warning`

Avoid brittle names tied to raw hex values or one screen.

## Component Inventory

For each component family, document:

- purpose
- default anatomy
- variants
- states
- accessibility expectations
- platform-specific adjustments

Useful component groups:

- buttons and actions
- form fields
- tables and lists
- cards or panels, if they are truly structural
- navigation
- banners and alerts
- modals, drawers, and sheets
- empty, loading, error, and success patterns

## State Guidance

Every reusable component should specify:

- default
- hover
- focus
- pressed
- selected
- disabled
- loading
- error
- success, when applicable

If a component lacks clear state rules, it is not system-ready.

## Variant Discipline

- Do not create variants for one-off styling preferences.
- Add a variant only when it maps to a distinct semantic or behavioral role.
- If two variants differ only by decoration, consider a token or layout rule instead.

## Extraction Outputs

Produce:

- token categories and examples
- component inventory
- inconsistency list
- recommended consolidation priorities
- implementation notes for code structure

## Handoff Guidance

When another agent will implement the system work, include:

- source locations or representative files
- naming rules
- migration priorities
- risk notes for visual regressions
- acceptance criteria for parity and accessibility
