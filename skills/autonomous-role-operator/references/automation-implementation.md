# Automation Implementation

Use this reference when the user asks to implement, install, create, enable, or update Codex Automations for a role operating system.

## Tool Routing

Use the Codex automation tool when available. If it is not loaded, search for it with tool discovery. Prefer the automation tool over hand-written raw directives.

Before creating automations, inspect existing automation configs under `$CODEX_HOME/automations/*/automation.toml` when available. Prefer updating matching automations over creating duplicates.

## Automation Types

Use cron automations for detached background jobs against a workspace.

Use heartbeat automations only when the user wants the current conversation thread to wake up later and continue.

## Creation Policy

If the user asks for a proposal, use suggested create/update.

If the user explicitly asks to implement, install, enable, create, or turn on the system, create/update automations directly, subject to authority guardrails.

Do not create external-write automations unless the user grants a named external-write charter.

Cloud operating docs are a special case: create or update restricted Google Drive/Confluence docs only after the user has approved or requested a cloud-docs implementation. Treat writes inside the designated restricted workspace as allowed by the cloud-docs charter; treat sharing/audience changes or publication outside that workspace as approval-required.

## Prompt Contract

Each automation prompt must be self-contained and include:

- Role workspace path.
- Cloud workspace path, folder ID, page tree, or manifest path when cloud docs are enabled.
- Canonical operating model path.
- Skill name to use.
- Objective.
- Allowed actions.
- Approval-required actions.
- Outputs to update.
- Stop conditions.
- Reporting behavior.

Do not include schedule details in the prompt; pass schedule through the automation tool fields.

## Recommended Automation Families

### Fast Signal Sweep

Purpose: refresh fast-changing sources, detect urgent risks, update private context state.

Typical schedule: workdays twice hourly, staggered away from `:00`.

### Meeting Prep Lookahead

Purpose: prepare briefs for upcoming high-value meetings.

Typical schedule: workdays twice hourly, offset after fast signal sweep.

### Post-Meeting Follow-Through

Purpose: extract decisions and tasks after meetings.

Typical schedule: workdays twice hourly, offset after meeting prep.

### Self-Improvement Light Pass

Purpose: directly improve local/private skills, prompts, templates, scripts, and source routing when safe.

Typical schedule: workdays twice hourly, last in each half-hour cycle.

### Cloud Manifest Preflight

Purpose: verify cloud doc IDs, permissions, local mirrors, and publish queues.

Typical schedule: early workday before context ingest.

### Cloud Doc Delta Publish

Purpose: publish approved local deltas into the restricted cloud workspace and refresh local mirrors.

Typical schedule: midday and end-of-day, outside micro-loop windows.

### Role Drift And Change-Agent Scan

Purpose: detect changed responsibilities, emergencies, stakeholder shifts, system defects, and org-change opportunities; directly update local/private and restricted-cloud artifacts when safe.

Typical schedule: daily in a reserved afternoon window plus light checks during self-improvement passes.

### Emergency Mode Watchdog

Purpose: detect urgent operating-mode changes and suppress lower-priority jobs when needed.

Typical schedule: early workday plus event-driven from urgent signals.

### Daily Operating Brief

Purpose: build the user's daily role brief.

Typical schedule: early workday before first substantive meeting.

### Control Plane Reconciliation

Purpose: reconcile active work, stakeholders, risks, owners, milestones, and decisions.

Typical schedule: early morning plus midday delta.

### End-Of-Day Handoff

Purpose: capture final state, open loops, tomorrow risks, and drafts needing approval.

Typical schedule: late workday.

### Weekly Strategy / Stakeholder / Risk Reviews

Purpose: deeper analysis for role-specific strategy, stakeholder management, delivery risk, customer/business signals, and system health.

Typical schedule: staggered across the workweek in reserved focus blocks.

### Monthly / Quarterly Reviews

Purpose: revisit strategy, team/system design, success metrics, and automation usefulness.

Typical schedule: first Monday or first business day of month/quarter, in a reserved heavy window.

### Cloud Docs Governance Review

Purpose: review doc ownership, stale docs, permissions, audience, and cloud/local drift.

Typical schedule: monthly.

### Automation And Skill Architecture Reset

Purpose: update skills, automations, schedules, and operating docs based on role drift and system learning.

Typical schedule: quarterly, plus event-driven after major role/org changes.

## Schedule Rules

Use the user's timezone.

Avoid `:00` starts. Prefer offsets like `:02`, `:08`, `:15`, `:24`, `:32`, `:38`, `:45`, and `:54` for micro-loops.

Estimate runtime for every job. Leave at least two minutes of buffer between jobs sharing write targets.

Use suppression windows for heavy jobs so micro-loops no-op instead of overlapping.

Use fallback slots for weekly and monthly jobs.

If the automation tool only supports weekly cron schedules for exact wall-clock times, create separate weekly schedules or multiple automations instead of relying on unsupported minute intervals.

## Standard Cron Automation Fields

Use:

- `kind`: `cron`
- `cwds`: the user workspace root, usually the home directory or project directory
- `executionEnvironment`: `local` for local/private operating work unless worktree isolation is required
- `status`: `ACTIVE` unless user asks to stage or pause
- `reasoningEffort`: `medium` for routine loops, `high` for strategic/risk/system-improvement loops

## Validation

After creating or updating automations:

- Re-list matching automation configs if possible.
- Confirm names, schedule intent, workspace, prompt objective, and status.
- Confirm no duplicates were created.
- Confirm cloud docs were created/updated only inside the approved workspace.
- Confirm role-drift and change-agent loops write to a backlog and do not publish org-facing changes without approval.
- Record created/updated automations in `AUTOMATION_IMPLEMENTATION_PLAN.md`.
- Save a durable private pointer if durable memory is available.
