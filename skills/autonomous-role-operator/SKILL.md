---
name: autonomous-role-operator
description: Build and optionally implement a generic autonomous role operating system for any user. Use when the user asks Codex to understand their job, role, responsibilities, expectations, potential, or operating model; benchmark what optimal performance in that role should look like; design Codex Skills and Codex Automations to perform the role in the background; create cloud-hosted operating docs in Google Drive or Confluence; or create/update recurring Codex automations for context refresh, briefing, follow-through, risk tracking, decision tracking, stakeholder updates, role-drift detection, cloud document publishing, and continuous self-improvement. Applies to any role or profession, not just engineering leadership.
---

# Autonomous Role Operator

## Overview

Use this skill to turn a user's role into a cloud-hosted operating model and, when requested, into a running Codex-powered background operating system. Keep the model role-agnostic: infer the user's actual function from evidence, then adapt the terminology, benchmarks, automations, cloud docs, change-agent loops, and guardrails to that role.

## Decision Tree

Classify the request:

- If the user asks to understand who they are, what their role is, what is expected of them, or what they could become, run the role-model workflow.
- If the user asks what someone in their position should optimally do, run the benchmark workflow and merge it into the role model.
- If the user asks how Codex could do the role automatically, run the autonomous-system workflow.
- If the user asks to implement, install, enable, create automations, or keep this running, run the automation-implementation workflow.
- If the user says docs need to live in Google Drive, Confluence, or another cloud system of record, run the cloud-docs workflow.
- If the user asks how the system adapts when the role/org changes, emergencies happen, or Codex should proactively create change, run the role-drift and change-agent workflow.
- If the user asks for all of the above, do all workflows in order and make the merged role model the canonical context anchor.

## Required Context Order

Before broad discovery, read the strongest local anchors that exist:

1. User-provided files or explicit app mentions.
2. `~/.codex/PROFILE.md` and `~/.codex/GOALS.md`.
3. Existing role/operator docs under `~/.codex/`.
4. Durable memory, if available.
5. Connected apps and MCPs: calendar, email, chat, documents, issue trackers, repos, CRM, task systems, or domain-specific systems.
6. Local filesystem sources likely to contain role, performance, planning, or project context.
7. Web research for current external benchmarks, only when benchmarking or current best practices matter.

For connector discovery, use available app/MCP search tools before broad filesystem or web search. For OpenAI/Codex automation questions, prefer local docs/tool metadata and official tooling behavior over generic web results.

## Output Workflow

Create a role-specific local mirror under `~/.codex/role-operator/<role-slug>/` unless the user gives another path. Also create or target a cloud workspace in Google Drive or Confluence as the durable system of record when implementation is requested. Use `references/output-contract.md` and `references/cloud-docs-and-change-agent.md` for the exact contract.

Produce these files when doing the full workflow:

- `ROLE_OPERATING_MODEL.md`: who the user is, current role, expectations, responsibilities, current work, strengths, failure modes, potential future role, and leverage moves.
- `ROLE_OPTIMAL_PRACTICES.md`: external and internal benchmark for what excellent performance in this role should include.
- `AUTONOMOUS_ROLE_SYSTEM.md`: Codex Skills and Automations design for doing the operating work in the background.
- `AUTOMATION_IMPLEMENTATION_PLAN.md`: exact automation catalog, schedules, prompts, work directories, authority level, and create/update status.
- `CLOUD_DOCS_MANIFEST.md` or `cloud-docs.json`: cloud doc IDs/URLs, permission class, owner, local mirror path, sync status, and publish rules.
- `CHANGE_AGENT_BACKLOG.md`: role drift, emergencies, system defects, org-change opportunities, direct changes, staged proposals, experiments, and outcomes.

If the user asks for one canonical document, merge benchmark and automation design into `ROLE_OPERATING_MODEL.md` and preserve the other files as source notes.

## Role Model Workflow

Build a high-signal model, not a data dump:

- Identify the user's likely identity, role, org, reporting/stakeholder context, and current responsibilities.
- Separate stable facts from live signals and speculation.
- Capture source confidence and known gaps.
- Infer what is expected of the user by their org, customers, stakeholders, market, or profession.
- Identify current jobs-to-be-done, hidden jobs, strengths, failure modes, leverage points, and plausible future role expansion.
- Write the result as a confidential local working model unless the user asks otherwise.

Do not over-index on job title. Infer the real role from calendars, messages, docs, issues, projects, performance artifacts, customer signals, and recurring responsibilities.

## Benchmark Workflow

Research what excellent performance should look like for the user's role. Use web browsing when current role benchmarks, laws, standards, market expectations, or professional practices may have changed.

Prefer:

- primary or authoritative sources,
- role-specific standards,
- public job ladders or competency models,
- respected practitioner writing,
- relevant industry benchmarks,
- internal performance frameworks if available.

Map benchmarks into role-specific operating responsibilities. Avoid generic advice like "communicate more" unless converted into a concrete operating mechanism with cadence, artifact, owner, and success signal.

## Autonomous-System Workflow

Design for maximal effectiveness unless the user explicitly asks for a minimal version. The design must include:

- Skills to build, with skill names, paths, triggers, inputs, outputs, scripts, references, and validation rules.
- Core local data products under the role workspace.
- Authority model: observe, maintain private state, draft/stage, directly implement low-risk local/private changes, approval-required actions, forbidden actions.
- Success metrics, negative success metrics, guardrails, and exit criteria.
- Exact automation schedule in the user's timezone, down to the minute.
- Estimated runtime for every job.
- Staggered start times to avoid `:00` clustering and job overlap.
- Lock/suppression/fallback behavior.
- Cloud document system of record: Google Drive or Confluence canonical docs plus local mirrors/caches.
- A high-frequency self-improvement and change-agent loop that directly edits local/private skills, scripts, templates, prompts, schedules, cloud operating docs, and role assumptions when safe.
- Role-drift and emergency-mode behavior: how the system detects changed responsibilities, new stakeholders, emergencies, org shifts, and the need to mutate the operating model or automation set.

Use `scripts/generate_schedule.py` to draft or validate a non-overlapping schedule when useful.

## Cloud-Docs Workflow

Use `references/cloud-docs-and-change-agent.md`.

Make cloud docs first-class:

- Use Google Drive for private or semi-private docs the user owns directly.
- Use Confluence for team/org-visible operating docs when appropriate.
- Treat local files as mirrors, caches, lock targets, and recovery copies.
- Store cloud IDs, URLs, permission class, owner, and mirror paths in a manifest.
- Add cloud sync/publish automations with explicit schedules.
- Require explicit approval before changing sharing/audience or publishing outside the designated cloud workspace.

If the user asks to implement cloud docs, use the relevant Google Drive or Confluence connector tools when available. If tools are not loaded, discover them before falling back.

## Role-Drift And Change-Agent Workflow

Use `references/cloud-docs-and-change-agent.md`.

The system should not merely maintain the current operating model. It should detect change and create change.

Build automated loops that:

- Detect role drift, emergencies, new workstreams, stakeholder changes, strategy shifts, and repeated friction.
- Classify each signal as role drift, emergency, org opportunity, system defect, or strategic frontier.
- Directly update local/private and restricted cloud operating docs when factual and inside authority.
- Directly change local skills, scripts, templates, prompts, and schedules when safe.
- Stage external-facing org/process changes as bounded experiments with hypothesis, audience, owner, success metric, blast radius, rollback, and approval path.
- Enter emergency mode when triggers fire and exit only when residual risks have owners and normal cadence is restored.
- Keep a change-agent backlog and cloud changelog.

## Automation-Implementation Workflow

When the user asks to implement the plan, use Codex Automations rather than only writing a document.

1. Search for the automation tool if it is not already loaded.
2. Inspect existing automations under `$CODEX_HOME/automations/*/automation.toml` when available to avoid duplicates.
3. Prefer updating matching existing automations over creating duplicates.
4. Create cron automations for detached background role operations.
5. Use thread heartbeats only when the user wants the current thread to wake up and continue.
6. Keep each automation prompt self-contained: include role workspace paths, skill to use, authority level, outputs, and stop conditions.
7. Do not include raw schedules in the user-facing response; use human-readable timing there.
8. Use suggested automation creation/update when the user asks for a proposal; use direct create/update when the user explicitly says implement, install, enable, or create.
9. Create cloud sync/publish automations when cloud docs are part of the plan.
10. Create role-drift, emergency-mode, and change-agent automations when the system needs to adapt proactively.
11. Preserve Level 4 approval boundaries unless the user grants a named external-write or cloud-doc publishing charter.

Read `references/automation-implementation.md` before creating automations.

## Direct-Action Guardrails

Use `references/authority-and-success.md`.

Default allowed actions:

- Read approved local and connected sources.
- Write local/private role-operator artifacts.
- Write restricted cloud operating docs after a named cloud-docs charter designates the exact folder/page tree and audience.
- Save private durable notes, tasks, and decision records.
- Draft external messages, comments, docs, and updates.
- Edit local/private skills, scripts, templates, prompts, and schedules when the change is reversible and logged.

Default approval-required actions:

- Sending messages or emails.
- Editing shared docs outside the designated restricted cloud workspace, issues, calendars, or production systems.
- Changing cloud doc sharing, audience, or publication scope.
- Making commitments on behalf of the user.
- Personnel, compensation, legal, budget, public, customer-facing, security-sensitive, or irreversible actions.
- Expanding automation authority.

Default forbidden actions:

- Secretly impersonating the user externally.
- Destructive changes without explicit request.
- Hiding uncertainty, deleting evidence, or suppressing failures.

## Reporting

For document-only runs, provide links to created files and a concise summary of what changed.

For implementation runs, report:

- skills created or updated,
- automations created or updated,
- automations staged for approval,
- local workspace path,
- authority boundaries,
- any skipped actions and why,
- validation results.

Keep final responses concise. The durable value should live in files and automations, not in chat.
