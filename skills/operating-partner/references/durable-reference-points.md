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

On later runs, before any survey, interview, or calibration questions:

1. resolve the canonical paths
2. read `PROFILE.md` if it exists
3. read `GOALS.md` if it exists
4. use those files as the starting context

If both files already contain durable user-specific context, start there and avoid duplicate questions.

## First-Run Rule

If either file is missing or effectively blank, treat that as first substantive run.

In that case:

1. resolve the canonical paths
2. read any durable file that already exists so you do not ask duplicate questions
3. run the initial user interview before creating or updating either file
4. create or update `PROFILE.md` and `GOALS.md` from the relevant templates using the interview results

Do not create placeholder copies of `PROFILE.md` or `GOALS.md` before the initial interview.

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
