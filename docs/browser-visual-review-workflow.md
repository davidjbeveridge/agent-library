# Browser Visual Review Workflow

This is the primary visual verification workflow for the pack.

## Goal

Review what the product actually communicates, not what the code or brief claims it communicates.

## Preferred Loop

1. Inspect the running app.
2. Capture a browser snapshot or screenshot.
3. Inspect DOM structure and interactive states when useful.
4. Compare intended hierarchy versus actual hierarchy.
5. Propose changes.
6. Re-inspect after changes or after a new build.

Repeat until the result is materially clearer or the remaining gap is precisely documented.

## What To Capture

Record:

- route
- viewport
- user role or auth state
- selected entity, record, or tab
- important state such as empty, loading, validation, success, or error

Without state context, visual review becomes unreliable.

## What To Look For

- first noticeable element
- action priority
- grouping and spacing logic
- wording of labels and actions
- visibility of current status
- discoverability of advanced controls
- focus handling and keyboard reachability
- responsive changes in meaning

## DOM Inspection Use Cases

Inspect DOM or accessibility trees when you need to confirm:

- heading structure
- landmark usage
- accessible names
- focus order
- hidden versus visible content
- semantic mismatch between visible and coded meaning

Do not replace visual reading with DOM-only analysis. Use both.

## Screenshot Comparison

Use screenshots when:

- hierarchy, spacing, composition, and emphasis matter most
- you need to compare current UI with intended references
- browser access is unavailable or incomplete

Use multiple screenshots if a single screen cannot show the relevant flow or state progression.

## No-Playwright Fallback

If Playwright or browser automation is not available:

1. inspect screenshots or local images
2. inspect relevant code
3. infer behavior carefully
4. mark assumptions clearly
5. produce implementation-ready guidance only where confidence is sufficient

The pack must still function without browser automation.

## Review Outcome

End the loop with:

- the standardized output contract
- evidence cited by type
- changes prioritized by impact
- implementation notes that describe visible outcomes, not just aesthetic preferences
