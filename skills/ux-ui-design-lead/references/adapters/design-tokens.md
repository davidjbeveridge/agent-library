# Optional Design Tokens Adapter

This adapter is optional. The core pack does not require token tooling, but it now includes a local helper for token extraction.

## Use When

- an existing token file or system needs to be interpreted
- design-system extraction needs to map visual decisions into reusable tokens

## Inputs

- token files or style references
- component inventory or screenshots
- current code usage

## Local Helper Workflow

Use the bundled extractor when you want a normalized report from local files:

```bash
python3 scripts/extract_design_tokens.py \
  ./src ./styles \
  --output-dir ./token-report
```

The helper scans for:

- CSS custom properties
- common JSON token files
- theme-like config patterns
- repeated hard-coded color, spacing, radius, shadow, and motion values

## Outputs

- token categories translated into semantic design rules
- inconsistencies between intended token usage and current UI
- migration notes for code or component structure

## Translation Rules

Translate raw token data into:

- visual meaning
- component usage rules
- state coverage
- implementation priorities

Do not treat token parity as sufficient proof of good UX.
