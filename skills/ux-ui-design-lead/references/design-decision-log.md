# Design Decision Log

Use this file as the durable home for high-value design decisions made with this pack.

## When To Log

Log a decision when it:

- changes flow structure
- changes the primary user job emphasis
- introduces or removes major controls
- defines a reusable icon, copy, or state pattern
- sets a design-system rule
- resolves a recurring ambiguity

## Entry Schema

Use this structure:

```md
## YYYY-MM-DD - Short decision title

- Context:
- Evidence:
- Decision:
- Rationale:
- Tradeoffs:
- Implementation consequence:
- Validation follow-up:
```

## Example

```md
## 2026-04-13 - Settings screen now prioritizes active status over configuration

- Context: The screen mixed current account state with low-frequency advanced settings.
- Evidence: Browser review of the running app, two screenshots from empty and configured states, and the permissions settings code.
- Decision: Move current status and primary action to the top region. Collapse advanced settings behind a secondary disclosure.
- Rationale: The primary job is to understand account state and take the next safe action, not to browse advanced controls.
- Tradeoffs: Power users take one extra click to reach advanced configuration.
- Implementation consequence: Header copy changes, disclosure control added, mobile action row moved into thumb reach.
- Validation follow-up: Re-check keyboard flow, focus order, and empty/error states after implementation.
```

## Logging Expectations

- Prefer concise entries over long essays.
- Keep evidence types explicit.
- Name the user-facing impact, not just the visual change.
- If a design change affects implementation behavior, state that directly.
