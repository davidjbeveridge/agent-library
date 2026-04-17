---
name: lifecycle-recommendations
description: Generate onboarding, nurture, retention, upsell, and churn reduction suggestions.
---

# lifecycle-recommendations

## Purpose

Generate onboarding, nurture, retention, upsell, and churn reduction suggestions.

## Required Inputs

- onboarding or retention context

## Optional Inputs

- product milestones\n- CRM notes\n- churn reasons

## Outputs

- lifecycle recommendations\n- message ideas\n- risks

## Evidence Expectations

Use only the evidence present in the shared context and clearly mark assumptions where evidence is missing.

## Fallback Assumptions

If lifecycle telemetry is missing, recommend milestone instrumentation and low-risk message tests first.

## Validation Rules

- Do not fabricate metrics, competitor behavior, or customer sentiment.
- Downgrade confidence when evidence is weak.
- Produce implementation-ready notes when action is recommended.
