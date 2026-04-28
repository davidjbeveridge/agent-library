# Automation Catalog

Use this catalog as a role-agnostic starting point. Rename jobs to match the user's role and work surface.

## Core Micro-Loop Jobs

| Job | Purpose | Default Workday Times | Estimated Runtime |
|---|---|---:|---:|
| Fast Signal Sweep | Detect new signals from high-volatility sources | `:02`, `:32` | 4 minutes |
| Meeting Prep Lookahead | Prepare upcoming meeting briefs | `:08`, `:38` | 6 minutes |
| Post-Meeting Follow-Through | Extract decisions and tasks | `:15`, `:45` | 7 minutes |
| Self-Improvement Light Pass | Improve local/private system artifacts and lightly detect role drift | `:24`, `:54` | 4 minutes |

## Daily Jobs

| Job | Purpose | Default Time | Estimated Runtime |
|---|---|---:|---:|
| Cloud Manifest Preflight | Verify cloud doc IDs, permissions, mirrors, and publish queue | 05:27 | 6 minutes |
| Source Auth And Lock Preflight | Verify sources and locks | 05:35 | 8 minutes |
| Overnight Context Ingest | Ingest overnight changes | 05:47 | 16 minutes |
| Control Plane Full Reconcile | Reconcile active work | 06:06 | 14 minutes |
| Risk Decision Follow-Up Reconcile | Update risk, decision, and follow-up registers | 06:22 | 11 minutes |
| Daily Operating Brief Build | Build daily brief | 06:35 | 10 minutes |
| Meeting Day Planner | Classify meetings and prep agenda | 06:47 | 8 minutes |
| Morning System Improvement Deep Pass | Implement safe local improvements | 06:57 | 8 minutes |
| Emergency Mode Watchdog | Detect emergencies and suppress lower-priority work | 07:26 | 6 minutes |
| Midday Control Plane Delta | Refresh active changes | 11:31 | 10 minutes |
| Midday Follow-Up Sweep | Capture morning follow-ups | 11:43 | 8 minutes |
| Leadership Narrative Delta | Update stakeholder narrative | 11:53 | 6 minutes |
| Midday System Improvement Medium Pass | Tune local system | 12:02 | 5 minutes |
| Cloud Doc Delta Publish | Publish approved cloud doc deltas | 12:09 | 8 minutes |
| Role Drift And Change-Agent Scan | Detect role/org changes and mutate the operating system | 15:31 | 12 minutes |
| End-Of-Day Follow-Through Capture | Capture afternoon outcomes | 16:31 | 13 minutes |
| End-Of-Day Risk And Decision Update | Reconcile decisions before next day | 16:46 | 9 minutes |
| Daily Digest And Narrative Update | Produce digest and staged drafts | 16:57 | 8 minutes |
| Durable Memory And Ops State Sync | Save durable state | 17:09 | 6 minutes |
| Daily System Improvement Deep Pass | Implement safe improvements from day | 17:18 | 9 minutes |
| Cloud Doc Publish And Mirror Sync | Publish approved updates and sync mirrors | 17:31 | 12 minutes |
| Workday Handoff Snapshot | Record final state | 18:58 | 6 minutes |

## Weekly Jobs

| Day | Time | Job | Runtime |
|---|---:|---|---:|
| Monday | 08:05 | Weekly Portfolio Strategy Reset | 20 minutes |
| Monday | 08:29 | Weekly Stakeholder/Delegation Planner | 16 minutes |
| Monday | 08:49 | Workstream Operator Dispatch | 25 minutes |
| Monday | 09:18 | Weekly System Opportunity Scan | 8 minutes |
| Monday | 09:31 | Cloud Operating Docs Architecture Review | 18 minutes |
| Tuesday | 08:05 | Professional Risk And Quality Gate Review | 25 minutes |
| Tuesday | 08:34 | Throughput And Workflow Diagnostic | 22 minutes |
| Tuesday | 09:01 | AI Operating Leverage Review | 16 minutes |
| Tuesday | 09:22 | Automation Mutation Review | 20 minutes |
| Wednesday | 08:05 | Customer/Business/Outcome Signal Deep Scan | 24 minutes |
| Wednesday | 08:33 | Strategy Assumptions Refresh | 18 minutes |
| Wednesday | 08:55 | Operating Topology Delta Scan | 18 minutes |
| Wednesday | 09:17 | Role Drift And Operating Model Mutation Review | 22 minutes |
| Thursday | 08:05 | Stakeholder Narrative Deep Draft | 22 minutes |
| Thursday | 08:32 | Packet Validation | 16 minutes |
| Thursday | 08:52 | Approval Queue Grooming | 14 minutes |
| Thursday | 09:09 | Org Change Proposal Builder | 24 minutes |
| Friday | 08:05 | Weekly Stakeholder Packet Final | 20 minutes |
| Friday | 08:31 | Weekly System Retrospective | 25 minutes |
| Friday | 09:03 | Skill And Automation Improvement Implementation | 30 minutes |
| Friday | 09:40 | Archive And Backlog Cleanup | 15 minutes |
| Friday | 10:01 | Cloud Doc Weekly Publish And Diff Audit | 18 minutes |

## Monthly / Quarterly Jobs

| Time | Cadence | Job | Runtime |
|---:|---|---|---:|
| 13:07 | First Monday monthly | Full Strategy And Operating Topology Review | 55 minutes |
| 14:12 | First Monday monthly | Stakeholder/Delegation/Capacity Review | 33 minutes |
| 13:07 | First Wednesday monthly | Operating Model And Org Change Portfolio Review | 55 minutes |
| 14:12 | First Wednesday monthly | Cloud Docs Governance And Audience Review | 33 minutes |
| 13:07 | First Friday monthly | Quality, Risk, And Policy Review | 45 minutes |
| 14:07 | First business day quarterly | Role Strategy Refresh | 75 minutes |
| 15:31 | First business day quarterly | Automation And Skill Architecture Reset | 45 minutes |

## Workstream Operators

Create one operator per active role-specific workstream. Examples:

- Major project launch operator.
- Critical customer/account operator.
- Hiring or talent process operator.
- Compliance/risk closure operator.
- Strategic planning operator.
- Operational health operator.
- Research/market intelligence operator.
- Cloud documentation operator.
- Role drift and change-agent operator.

Each operator needs:

- Scope.
- Schedule.
- Event triggers.
- Direct local actions.
- Approval-required actions.
- Exit criteria.
