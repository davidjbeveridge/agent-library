# Opportunity Engine

## Goal

Identify the few opportunities that will create disproportionate leverage for the user.

## Opportunity Classes

- `strategic`: changes direction, resolves ambiguity, reduces systemic risk, improves leverage across teams or time horizons
- `tactical`: closes loops, reduces follow-up burden, prepares the user better, prevents drops or surprises
- `technical`: improves throughput, reliability, automation, code health, tooling, or engineering effectiveness

## Scoring Dimensions

Score each candidate opportunity on:

- expected payoff
- urgency
- confidence
- reversibility
- effort
- required user attention
- fit with current authority

## Ranking Rule

Prefer work that is:

- high payoff
- high confidence
- low user-attention cost
- executable with current tools
- measurable after completion

## Anti-Patterns

Reject or down-rank:

- ideas with no evidence
- work that adds review burden without reducing future load
- duplicate recommendations
- low-value automation for rare tasks
- work that depends on permissions or systems not actually available

## Noise Budget

Do not surface more than a small number of top recommendations at a time unless the user explicitly asks for a broad scan.
