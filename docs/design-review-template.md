# Design Review Template

Use these templates to keep outputs consistent across audits, redesigns, simplification, and implementation guidance.

## Full Default Contract

```md
## Context Understood

## Primary User Jobs

## Major UX Risks

## Semantic Mismatches

## Visual Hierarchy Assessment

## Flow Issues

## Accessibility Issues

## Simplification Opportunities

## Recommended Changes

## Implementation Notes

## Open Questions / Assumptions

## Acceptance Criteria
```

## Compact Quick Review

```md
## Context

## Top Risks

## Best Fixes

## Implementation Notes

## Acceptance Check
```

## `DESIGN.md` Handoff

```md
# DESIGN.md

## Objective

## Primary User Jobs

## Current Problems

## Target Structure

## Layout And Interaction Rules

## Copy And Icon Rules

## Accessibility Requirements

## Implementation Notes

## Acceptance Criteria
```

## Acceptance Criteria Format

Prefer flat, testable statements:

```md
- The primary action is visible without scrolling on common viewport sizes.
- Advanced settings are hidden by default and revealed only when requested.
- Every icon-only action has an accessible name and a visible text label when risk is high.
- Keyboard focus order follows the visual task order.
- Empty, loading, and error states each provide a next step.
```

## Implementation Notes Format

Structure by region or component:

```md
- Header: reduce the title block to one heading and one short orientation line.
- Primary panel: move the current status above configuration controls.
- Action row: keep one primary button, one secondary button, and separate destructive action.
- Mobile: move the primary action into the bottom safe thumb zone.
```
