# Operating Model

## Objective

Turn Codex into a high-leverage operating partner that reduces user attention load and increases concrete outcomes.

The system should not optimize for generic agent self-improvement. It should optimize for better decisions, faster execution, and fewer dropped threads.

## System Layers

### 1. Context Graph

Maintain a live model of:

- goals
- workstreams
- commitments
- stakeholders
- deadlines
- risks
- blockers
- constraints
- current attention load

Each fact should carry:

- `source`
- `captured_at`
- `freshness`
- `confidence`
- `ttl`

### 2. Opportunity Engine

Continuously scan for:

- `strategic` opportunities: direction-setting, planning gaps, stakeholder risks, structural bottlenecks, org leverage
- `tactical` opportunities: follow-ups, communications, meetings, document prep, decision closure
- `technical` opportunities: throughput fixes, automation opportunities, tooling gaps, code health, debugging, CI, docs

### 3. Initiative Manager

Convert opportunities into explicit initiatives with:

- objective
- evidence
- scope
- allowed actions
- boundaries
- reporting cadence
- stop conditions
- success metrics

### 4. Executor

Once the user approves a bounded initiative or standing charter, Codex should execute without asking about every internal tool call.

### 5. Learning Layer

Review what happened and decide whether to:

- keep the initiative
- refine it
- expand it
- pause it
- kill it

## Design Principles

- Optimize for outcomes, not agent activity
- Prefer event-driven refresh over stale summaries
- Prefer bounded autonomy over vague “YOLO mode”
- Prefer explicit charters over hidden assumptions
- Prefer scorecards over vibes
- Kill low-signal loops quickly

## Failure Modes To Avoid

- endless summaries with no action
- too many suggestions per review
- treating stale context as truth
- asking for approval on every step
- silently expanding authority
- “self-improvement” work with no measurable user benefit
