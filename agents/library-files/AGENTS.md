# AGENTS.md

Purpose: operating instructions for autonomous development agents in this repository.

The default mode is aggressive multi-agent execution. The lead agent acts as the engineering manager for the project and is responsible for planning, sequencing, delegation, integration, and delivery quality.

---

# 1. Core Operating Model

Agents should optimize for:

- building the right thing
- resolving uncertainty early
- maximizing safe parallel execution
- persisting coordination state in the repo
- reducing rework across agents

Do not optimize for token thrift at the expense of speed, rigor, or correctness. Use enough context to make sound decisions, then persist what matters so future agents do not need to rediscover it.

Assume the lead agent may create, replace, or retire sub-agents freely. Treat agent creation as cheap. Delegate aggressively when work can proceed in parallel.

---

# 2. Source Of Truth

`SPEC.md` is the product source of truth unless the user explicitly states otherwise.

Use it to understand:

- product goals
- scope
- constraints
- desired behavior
- open questions

If implementation or docs conflict with `SPEC.md`, surface the conflict and drive resolution explicitly.

---

# 3. Startup Procedure

At the start of a task:

1. Verify the execution environment and repository state.
2. Read the minimum material needed to understand the active request.
3. Read `SPEC.md` before making plans that affect scope, sequencing, or architecture.
4. Identify deliverables, constraints, and unknowns.
5. Decide whether the work should immediately branch into multiple agents.

The lead agent owns initial orientation and should not wait too long to decompose work for parallel execution.

---

# 4. Planning And Dependency Graph

Before substantial implementation, build an internal dependency graph covering:

- deliverables
- prerequisite tasks
- architectural dependencies
- risky assumptions
- open questions
- external blockers
- validation requirements

Use that graph to sequence work with two priorities:

1. front-load resolution of risks, open questions, and blocking dependencies
2. maximize parallelization once blockers are understood or removed

The graph may be represented internally however the agent prefers, but its important outputs must be persisted in repo artifacts so other agents can follow the current plan without re-analysis.

---

# 5. Execution Plans

Active work lives in:

`docs/exec-plans/active/`

Each meaningful task should have a compact execution plan that records:

- objective
- scope boundaries
- dependency graph summary
- risks and open questions
- parallel workstreams
- acceptance criteria
- exit criteria
- progress log
- decisions and handoffs

Plans should be updated as reality changes. Do not let the chat log become the only source of coordination truth.

---

# 6. Multi-Agent Orchestration

The lead agent is the EM for the working agent team.

The lead agent must:

- break work into clear, low-coupling subproblems
- assign sub-agents to parallelizable work
- front-load investigation into risky or blocking areas
- define interfaces and contracts between workstreams
- track who owns what
- integrate outputs into a coherent result
- replace or redirect agents when their current path is ineffective

Typical agent roles include:

- architecture
- implementation
- testing and evals
- debugging
- research
- documentation
- integration

Prefer many small, well-scoped agents over one overloaded agent when dependencies permit parallel work.

---

# 7. Agent Coordination And Handoffs

Agents must communicate through persistent repository artifacts, not just chat.

Use the active execution plan directory to record:

- current ownership
- status updates
- interface decisions
- discovered blockers
- breaking changes
- handoff notes
- follow-up tasks

If one agent makes a change that can affect another workstream, record it immediately in the relevant plan or coordination note so downstream agents can adapt without rework.

When useful, create small supporting files for coordination, such as:

- dependency summaries
- task breakdowns
- interface contracts
- migration notes
- validation checklists

---

# 8. Knowledge Capture

Do not rely on chat memory for durable project knowledge.

Persist information in the most relevant location:

| Knowledge | Location |
|---|---|
| product intent | `SPEC.md` or `docs/product-specs` |
| architecture | `docs/design-docs` |
| domain knowledge | `docs/domain` |
| runtime/debugging | `docs/runtime` |
| reusable workflows | `docs/skills` |
| specialized agents | `docs/agents` |
| tooling references | `docs/references` |

Capture especially:

- user steering changes
- resolved open questions
- architectural decisions
- failed approaches and better replacements
- debugging discoveries
- agent coordination conventions

If product intent changes, update `SPEC.md` or the appropriate product-spec artifact instead of leaving the new direction only in chat.

---

# 9. Continuous Improvement

Whenever a mistake, weak assumption, or better method is discovered:

1. fix the issue
2. record the lesson
3. add validation where appropriate
4. update plans or coordination artifacts affected by the change

The system should get faster and more reliable as the repo accumulates project memory.

---

# 10. Tooling And External Dependencies

Before installing anything external:

- ask the user for permission

Document adopted tools in:

`docs/references/tooling.md`

Do not assume Jira or any issue tracker is part of the workflow unless the user explicitly introduces one.

---

# 11. Default Behavior

Agents should:

- operate autonomously
- use multi-agent execution by default when it helps
- resolve blockers early
- document decisions and handoffs
- keep plans current
- continue until acceptance and exit criteria are met
- favor correctness, speed, and coordination over performative minimalism
