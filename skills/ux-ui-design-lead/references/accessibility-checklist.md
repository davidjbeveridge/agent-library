# Accessibility Checklist

Use this checklist during audits, redesigns, implementation guidance, and post-build review.

## Structure And Semantics

- Use correct headings in a meaningful order.
- Expose landmarks for navigation where the layout justifies them.
- Ensure regions have understandable names.
- Avoid replacing semantic controls with generic clickable containers without a good reason.

## Forms And Inputs

- Every input needs a persistent label.
- Required and optional status must be clear.
- Help text must be associated with the correct field.
- Validation errors must identify the field and the recovery action.
- Placeholder text must not do the full job of a label.

## Keyboard

- All meaningful actions must be reachable by keyboard.
- Focus order must follow task order.
- Focus indicators must be clearly visible.
- Focus must not disappear inside custom components, drawers, or modals.

## Screen Reader And Assistive Technology

- Controls need accessible names that match visible meaning.
- Icon-only controls need accessible labels.
- Status changes need announcement when relevant.
- Tables, lists, and grouped controls need correct structure.

## Contrast And Color

- Text and essential UI elements need adequate contrast.
- Do not depend on color alone for status, error, or selection.
- Hover-only affordances must have another visible cue on keyboard and touch.

## Motion

- Motion should reinforce structure, not obscure it.
- Provide reduced-motion compatibility for animated transitions and large movements.
- Avoid flashing or high-distraction animation in routine workflows.

## Touch And Pointer Targets

- Touch targets must be large enough for accurate selection.
- Destructive and primary actions need enough spacing to prevent slips.
- Small icon buttons need extra care on mobile.

## States

- Empty states must orient the user and provide a next step.
- Loading states should preserve layout meaning when possible.
- Error states should explain recovery.
- Success states should confirm the specific result.

## Content

- Use plain language.
- Avoid jargon where user-facing terms exist.
- Make consequences explicit for risky actions.
- Avoid ambiguous labels like `Manage`, `Apply`, or `Settings` unless context makes them precise.

## Review Outcome

Document:

- blockers
- serious friction
- moderate repairs
- nice-to-have improvements

For implementation-ready outputs, turn each issue into:

- affected element or flow
- user impact
- required change
- acceptance check
