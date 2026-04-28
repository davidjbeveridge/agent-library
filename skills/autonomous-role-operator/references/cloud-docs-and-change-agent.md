# Cloud Docs And Change-Agent Loop

Use this reference whenever the role operating system needs durable cloud-hosted docs or proactive adaptation to role/org change.

## Cloud Docs Requirement

Role-operator documents should not live only on local disk. Local files are mirrors, caches, lock targets, and recovery copies. The durable source of truth should be a cloud workspace the user can access outside Codex.

Preferred cloud systems:

- Google Drive for private or semi-private operating docs the user owns directly.
- Confluence for team, project, or org-visible operating docs.

Use the connector/tooling available in the session. If Google Drive or Confluence tools are not loaded and cloud implementation is requested, discover them before falling back.

## Cloud Workspace Contract

Create or target a restricted cloud workspace with:

- Hub or index doc.
- Role operating model.
- Control plane or active-work ledger.
- Risk and decision register.
- Follow-up ledger.
- Stakeholder narrative or brief drafts.
- Operating-system changelog.
- Change-agent backlog.
- Emergency mode runbook.

Store the cloud manifest locally as `cloud-docs.json` or `CLOUD_DOCS_MANIFEST.md` with:

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

## Cloud Write Authority

Directly update cloud docs only when all are true:

- A named cloud-docs charter exists.
- The target doc is inside the approved folder/page tree.
- The doc audience is private/restricted as specified by the charter.
- The change is factual, reversible, and logged.
- No personnel, legal, budget, customer-facing, or external commitment is introduced.

Stage for approval when:

- The doc is team-visible or org-visible.
- The update changes audience, sharing, or publication scope.
- The update changes commitments, priorities, staffing, deadlines, or sensitive narratives.
- The target is outside the approved workspace.

## Cloud Sync Automation

Add these automation families when implementing:

- Cloud Manifest Preflight: verify IDs, permissions, mirrors, and publish queue.
- Cloud Doc Delta Publish: publish approved deltas from local mirrors into the restricted workspace.
- Cloud Doc Publish And Mirror Sync: end-of-day publish plus cloud-to-local mirror sync.
- Cloud Doc Weekly Publish And Diff Audit: detect cloud/local drift and repair or stage fixes.
- Cloud Docs Governance And Audience Review: review audience, sharing, stale docs, and doc sprawl.

## Change-Agent Purpose

The system should not merely maintain the current operating model. It should help the user and their organization adapt faster than ambient change.

It should continuously ask:

- Has the user's role changed?
- Has the environment changed?
- Has an emergency changed priorities or cadence?
- Is a repeated friction pattern evidence that the operating system needs to change?
- Is there an opportunity to improve how the team/org works?
- Should a skill, automation, schedule, doc, or source-routing rule mutate?

## Signal Classes

Classify detected signals:

- `role-drift`: responsibilities, stakeholders, expectations, or recurring work changed.
- `emergency`: time-sensitive risk requires temporary operating-mode change.
- `org-opportunity`: a bounded process, communication, decision, or operating-model change could improve the org.
- `system-defect`: a skill, automation, source, prompt, schedule, or doc is failing.
- `strategic-frontier`: an emerging opportunity could expand the user's role or impact.

## Direct Change Actions

Allowed under normal local/private authority:

- Update local operating model and mirrors.
- Update restricted cloud docs inside the cloud-docs charter.
- Add or modify local skills, scripts, templates, prompts, and schedules.
- Add or pause local/private loops.
- Create a change experiment in the change-agent backlog.
- Update emergency mode state and runbook.
- Stage automation updates or external communications.

Approval required:

- External messages or shared-doc publication beyond the approved workspace.
- Org process changes that affect other people.
- Commitments, deadlines, staffing, budget, customer, legal, security, or personnel-sensitive changes.
- Expanding automation authority.

## Org Change Experiment Template

Every org-facing change should have:

- hypothesis,
- evidence,
- affected stakeholders,
- proposed owner,
- blast radius,
- expected leverage,
- success metric,
- rollback plan,
- communication draft,
- approval path,
- review date.

## Emergency Mode

Emergency mode triggers include:

- incident/security/customer-impacting risk,
- executive escalation,
- launch-critical blocker,
- missed or likely missed commitment,
- personnel-sensitive surprise,
- source signal that invalidates current priority assumptions.

Emergency mode process:

1. Record trigger and source.
2. Set emergency mode state.
3. Suppress lower-priority automations.
4. Increase relevant source scan frequency.
5. Update control plane, risk register, and cloud emergency runbook.
6. Draft immediate stakeholder update.
7. Continue until residual risk has owner/checkpoint and normal cadence is restored.

## Success

The change-agent loop works when:

- Role changes are reflected in docs and automations same day.
- Emergencies alter cadence immediately.
- Repeated friction becomes tooling, automation, process, or doc change.
- Org-change ideas become bounded experiments rather than vague suggestions.
- Cloud docs stay current enough to be a real source of truth.
