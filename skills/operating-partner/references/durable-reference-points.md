# Durable Reference Points

## Purpose

`PROFILE.md` and `GOALS.md` are the primary durable reference points for this skill.

They are intended to reduce repeated interviews, preserve user-specific context in a user-readable form, and give later runs a stable place to begin.

## Default Paths

Unless the user explicitly overrides them, use:

- `~/.codex/PROFILE.md`
- `~/.codex/GOALS.md`

If the user explicitly wants project-local operation, use workspace-local copies instead.

## Required Behavior

Before any survey, interview, or calibration questions:

1. resolve the canonical paths
2. read `PROFILE.md` if it exists
3. read `GOALS.md` if it exists
4. use those files as the starting context

If a file is missing, create it from the relevant template before continuing.

## File Roles

### `PROFILE.md`

This file should store durable profile context such as:

- role
- team or org context
- recurring responsibilities
- key stakeholders
- preferences and guardrails
- memory interface
- standing approval defaults

### `GOALS.md`

This file should store durable outcome context such as:

- current goals
- target outcomes
- active initiatives
- success measures
- review cadence

## Update Rule

If an interview or calibration session improves understanding, update the files rather than leaving the new facts only in chat or memory.

## Practical Rule

Use these files as stable anchors, not as a dumping ground for every transient signal.
