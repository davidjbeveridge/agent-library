# Optional Figma Adapter

This adapter is optional. The core pack does not depend on Figma and does not require any Figma runtime integration.

## Use When

- a Figma file already exists and needs to be compared against local UI or code
- design intent is easier to recover from Figma than from text alone

## Inputs

- Figma frames, screenshots, or exports
- current local UI evidence
- target route, component, or flow

## Outputs

- translated semantic and hierarchy expectations
- parity gaps between Figma intent and local implementation
- implementation notes grounded in what the shipped UI should communicate

## Translation Rules

Convert Figma artifacts into the pack's native model:

- identify the primary user job
- extract hierarchy and grouping cues
- identify intended actions, statuses, and disclosures
- identify accessibility and label implications

Do not assume Figma is correct. Treat it as one evidence source that must still be translated into user jobs, visible semantics, accessibility constraints, and implementation reality.
