# Output Contract

Use this contract when creating role-operator artifacts.

## Workspace

Default local mirror path:

`~/.codex/role-operator/<role-slug>/`

Derive `<role-slug>` from the user's role or name. Use lowercase letters, digits, and hyphens. If uncertain, use `default`.

Default cloud workspace:

- Google Drive folder for private or semi-private operating docs.
- Confluence page tree for team/org-visible operating docs.

Cloud docs are the durable source of truth after implementation. Local files are mirrors, caches, and recovery copies.

## Required Files

### `ROLE_OPERATING_MODEL.md`

Purpose: canonical model of the user's role.

Required sections:

- Header with build date, timezone, and confidentiality label.
- Source statement explaining what was and was not searched.
- Core model: one concise sentence describing the user's real role.
- What the environment expects: org, customers, stakeholders, market, or profession.
- Current responsibilities: explicit and hidden jobs.
- Current strategic/work surface area.
- Strengths and differentiators.
- Failure modes and risks.
- What the user could become.
- Highest-leverage moves.
- Operating rules for future Codex work.
- Source inventory with confidence tiers.
- Known gaps.
- Working hypothesis for the next 30-90 days.

### `ROLE_OPTIMAL_PRACTICES.md`

Purpose: benchmark excellent performance for this role.

Required sections:

- Executive summary.
- Benchmarked responsibilities.
- What the user should add to the current model.
- Highest-leverage 30-day moves.
- Source notes with links.

Use current web research when benchmarks may have changed.

### `AUTONOMOUS_ROLE_SYSTEM.md`

Purpose: design a Codex Skills + Automations system that can run the role's operating work in the background.

Required sections:

- Design goal.
- Definition of success.
- Negative success metrics.
- Authority model.
- Core data products.
- Cloud document system of record.
- Skills to build.
- Maximal skill implementation details.
- Automations to build.
- Exact schedule down to the minute.
- Time-bound initiative/project agents.
- Self-improvement loop.
- Role-drift, emergency-mode, and change-agent loop.
- Reporting model.
- Maximal implementation mode.
- Exit criteria.

### `AUTOMATION_IMPLEMENTATION_PLAN.md`

Purpose: concrete install plan for Codex Automations.

Required sections:

- Existing automation inventory.
- Automations to create.
- Automations to update.
- Automations intentionally not created.
- Cloud docs created or targeted.
- Human-readable schedule.
- Tool-call implementation notes.
- Authority levels and stop conditions.
- Validation checklist.

### `CLOUD_DOCS_MANIFEST.md` or `cloud-docs.json`

Purpose: identify canonical cloud docs and local mirrors.

Required fields:

- provider,
- document title,
- document ID or URL,
- permission class,
- intended audience,
- owner,
- local mirror path,
- last cloud read,
- last local write,
- last publish,
- sync status,
- approval requirements.

### `CHANGE_AGENT_BACKLOG.md`

Purpose: track role drift, emergencies, org-change opportunities, system defects, strategic frontiers, experiments, direct changes, staged proposals, and outcomes.

Required fields:

- signal class,
- evidence,
- confidence,
- expected leverage,
- blast radius,
- authority level,
- direct action taken or staged action,
- success metric,
- rollback,
- review date.

## Style

Write as a confidential local working model, not an HR document or official source of truth.

Use explicit confidence language. Distinguish facts, inferences, stale assumptions, and speculation.

Prefer concrete operating mechanisms over generic advice. Every recommendation should answer at least three of: cadence, artifact, owner, signal, trigger, guardrail, exit criterion.

Every durable document should have a cloud target or an explicit reason it remains local-only. Every cloud doc should have a local mirror and a manifest entry.
