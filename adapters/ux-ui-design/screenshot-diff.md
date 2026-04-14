# Optional Screenshot Diff Adapter

This adapter is optional. The core pack does not require automated visual diff tooling, but it now includes a local helper for screenshot comparison.

## Use When

- before-and-after screenshots exist
- a regression review needs image-level comparison support
- the lead needs quick evidence of spacing, hierarchy, or state drift

## Inputs

- baseline screenshots
- current screenshots
- route and state metadata

## Local Helper Workflow

Use the bundled diff helper when you already have baseline and current screenshots:

```bash
python3 skills/ux-ui-design-lead/scripts/screenshot_diff.py \
  --baseline ./baseline.png \
  --current ./current.png \
  --output-dir ./diff-output
```

The helper generates:

- a diff image
- a difference mask
- a JSON summary
- a short text summary of changed pixels and the changed region

## Outputs

- visual-diff summary translated into user-facing impact
- list of hierarchy, spacing, or state regressions that matter
- notes on which differences are material versus cosmetic

## Translation Rules

Translate raw screenshot deltas into:

- changed hierarchy
- changed affordance
- changed content clarity
- changed accessibility or state signaling

Do not report pixel drift without explaining why it matters to the user.
