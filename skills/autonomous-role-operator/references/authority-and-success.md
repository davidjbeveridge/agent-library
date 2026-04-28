# Authority And Success

Use this reference when designing or implementing autonomous role operations.

## Authority Levels

### Level 0: Observe

Allowed:

- Read approved local and connected sources.
- Build summaries.
- Detect changes, risks, stale context, and likely follow-ups.

### Level 1: Maintain Private State

Allowed:

- Update local/private Markdown, JSON, scripts, templates, and role-operator artifacts.
- Update restricted cloud operating docs after a named cloud-docs charter designates the exact workspace and audience.
- Save private durable notes, tasks, decisions, and risk records.
- Mark assumptions stale.
- Create local run logs and changelogs.

### Level 2: Draft And Stage

Allowed:

- Draft messages, emails, docs, issue comments, meeting agendas, updates, proposals, and decision memos.
- Stage approval-required actions in a local queue.
- Prepare suggested automation changes.

### Level 3: Direct Low-Risk Local Implementation

Allowed:

- Edit local/private skills, scripts, templates, prompts, schedules, runbooks, and validation checks.
- Edit restricted cloud docs inside the approved cloud-docs workspace.
- Create or update private task/reminder records.
- Prune noisy scans and adjust local scoring.
- Archive stale private artifacts after preserving a pointer.

Required:

- High confidence.
- Reversible change.
- Local/private scope.
- Run log entry.
- Success signal.
- No expansion of authority.

### Level 4: Approval Required

Requires explicit user approval or a named standing charter:

- Sending Slack messages, emails, or external communications.
- Editing shared documents outside the approved restricted cloud-docs workspace, tickets, calendars, CRM records, dashboards, or production systems.
- Changing cloud doc sharing, audience, or publication scope.
- Creating commitments on behalf of the user.
- Changing external-facing automation behavior.
- Personnel, legal, finance, budget, roadmap, customer, security, or public actions.

### Level 5: Forbidden

Never do:

- Secretly impersonate the user externally.
- Make destructive changes without explicit request.
- Decide personnel, compensation, legal, or budget matters.
- Hide uncertainty or delete evidence of failures.
- Expand authority because it seems useful.

## Success Definition

The system is working when:

- The user spends less attention reconstructing context.
- Important risks and decisions are visible before someone asks.
- Routine follow-ups are captured and tracked.
- Drafts are ready before they are needed.
- Local/private operating state stays fresh.
- Cloud operating docs stay current and are treated as the durable source of truth.
- Direct changes reduce future workload.
- Role drift and emergency signals mutate the system same day when safe.
- Org-change opportunities become bounded experiments rather than stale suggestions.
- User-facing noise decreases over time.

## Negative Metrics

The system is failing when:

- It increases review burden.
- It creates summaries without action.
- It repeatedly suggests the same thing without implementation.
- It acts on stale context over fresh sources.
- It makes unauthorized commitments.
- It leaves canonical docs local-only when cloud docs are required.
- It misses role changes, emergencies, or repeated friction that should change the operating model.
- It hides uncertainty.
- It cannot explain why an automation exists.

## Kill Criteria

Pause, kill, or narrow a loop when:

- It creates more review burden than leverage.
- It produces no material signal over a meaningful window.
- It depends on stale or unavailable sources.
- It repeatedly requires user correction.
- It cannot define success or rollback.
- It risks unauthorized external impact.
