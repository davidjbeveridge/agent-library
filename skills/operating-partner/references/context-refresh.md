# Context Refresh

## Goal

Maintain a live operating picture that is fresh enough to support proactive action.

## Refresh Policy

- Use event-driven refresh when a source supports it.
- Use periodic sweeps when no event hook exists.
- High-volatility context may justify refreshes every 30 minutes.
- Slow-changing context should be refreshed less often.

## Suggested Source Tiers

### Tier 1: Fast-Changing

Refresh frequently:

- chat and inbox activity
- calendar changes
- current tasks and blockers
- recent repo state on active work
- most recent Codex sessions

### Tier 2: Medium-Changing

Refresh on cadence or trigger:

- Jira or issue trackers
- shared docs tied to active initiatives
- recurring project dashboards
- working plans and meeting notes

### Tier 3: Slow-Changing

Refresh when needed:

- role definition
- long-term goals
- stable stakeholder map
- durable preferences
- standing policies and guardrails

## Capture Rules

For each fact or signal, record:

- what changed
- why it matters
- source and timestamp
- confidence
- decay expectation

## TTL Guidance

- messages, meeting changes, and live coordination notes: short TTL
- weekly priorities and active initiatives: medium TTL
- role, core goals, durable preferences, and explicit decisions: long TTL

## Practical Rule

Never let a stale summary outrank a fresh primary source.
