# Optional UX/UI Design Adapters

These adapters are optional extension points for external artifacts. They are not required for the core pack.

The core workflow remains fully usable from:

- screenshots
- local images
- running applications
- browser snapshots and DOM inspection
- source code
- markdown briefs
- user stories
- bug reports

Use an adapter only when external evidence already exists and helps translate into the pack's native evidence model.

## Native Evidence Model

Every adapter should translate external artifacts into:

- user jobs
- semantic structure
- visible hierarchy
- interaction rules
- accessibility implications
- implementation notes

Adapters should never replace local review of the shipped or running UI.

## Local-First Helpers

Two adapters now have real helper workflows:

- screenshot diff helper: `skills/ux-ui-design-lead/scripts/screenshot_diff.py`
- design token extraction helper: `skills/ux-ui-design-lead/scripts/extract_design_tokens.py`

These helpers remain optional. They support the local-first workflow without introducing a cloud dependency.

## Included Stubs

- `figma.md`
- `design-tokens.md`
- `screenshot-diff.md`
- `external-design-systems.md`
