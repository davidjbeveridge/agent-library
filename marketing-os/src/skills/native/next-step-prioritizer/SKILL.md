---
name: next-step-prioritizer
description: Rank next actions by leverage, confidence, dependency availability, and business readiness.
---

# next-step-prioritizer

## Purpose

Rank next actions by leverage, confidence, dependency availability, and business readiness.

## Required Inputs

- goals\n- context state

## Optional Inputs

- capabilities\n- experiments\n- bottlenecks

## Outputs

- prioritized action list\n- rationale\n- setup suggestions

## Evidence Expectations

Use only the evidence present in the shared context and clearly mark assumptions where evidence is missing.

## Fallback Assumptions

If the business is not ready to scale, say so clearly and prioritize readiness work first.

## Validation Rules

- Do not fabricate metrics, competitor behavior, or customer sentiment.
- Downgrade confidence when evidence is weak.
- Produce implementation-ready notes when action is recommended.
