# Icon Semantics Guide

Use this guide when choosing, reviewing, or repairing icon usage.

## First Principles

- Icons are scan accelerators, not universal language.
- High-stakes meaning should not depend on icon recognition alone.
- An icon is only good if the user can infer the right action and consequence from context.

## Decision Tree

Ask in order:

1. Is the action or state high-stakes, destructive, financial, privacy-related, or workflow-altering?
   - If yes, use a visible text label. The icon can be supportive, not primary.
2. Is the icon pattern widely learned in this product context?
   - If no, pair it with text or replace it with text.
3. Is the icon representing navigation, status, or action?
   - Do not blur these roles in the same region.
4. Will similar nearby icons compete visually or semantically?
   - If yes, increase differentiation or add labels.

## Good Defaults

- Action icons: pair with labels unless the action is low-risk and familiar.
- Status icons: pair with readable status text where interpretation matters.
- Navigation icons: use labels when the nav is not universally obvious.
- Decorative icons: remove them if they do not support scanning or comprehension.

## High-Stakes Rules

Never rely on icon-only treatment for:

- delete
- remove account or member
- publish
- submit payment
- change permissions
- disable security or privacy settings
- irreversible workflow transitions

Use:

- label
- optional icon
- tooltip if needed
- clear accessible name

## Pattern Guidance

### Status

- Use color plus text, not color alone.
- Make positive, warning, and error states visibly distinct.
- Keep status icon shapes consistent across the product.

### Action

- Button weight should match consequence.
- Icons should reinforce the verb, not replace it when the action is risky.
- Hover or tooltip text must match the visible label if both exist.

### Navigation

- Icon metaphors should be stable across screens.
- Do not reuse the same icon for different navigation destinations unless one is explicitly contextual.

## Common Failure Modes

- one icon means settings in one place and edit in another
- a trash icon appears next to routine list actions with no label
- a star means favorite in one context and required in another
- status icons rely on subtle color differences
- users need a tooltip every time to decode the control

## Output Requirements

When reviewing icon usage, state:

- concept or action
- current treatment
- likely user interpretation
- risk level
- recommended icon and label pattern
- tooltip or aria guidance if needed
