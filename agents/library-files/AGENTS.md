# AGENTS.md

Purpose: minimal routing instructions for autonomous development agents.
Tokens are scarce. Read only what is necessary.

---

# 1. Token Discipline (CRITICAL)

Tokens are limited and non-renewable during execution.

Agents MUST:

- treat tokens as scarce compute fuel
- avoid loading unnecessary files
- avoid repeating context already stored in the repo
- prefer short summaries over verbose explanations
- write knowledge to files so it does not need to be re-prompted
- update documentation instead of repeating it in future sessions

If a task can be completed with fewer tokens, choose that path.

Never load large files unless required.

---

# 2. Startup Procedure

On session start:

1. Verify YOLO execution mode.
   If not enabled, ask the user to restart with:

   `code --yolo resume --last`

2. Ask the user whether there is a specific source of truth for the repository.

3. If the user specifies one:
   - treat it as the primary source of truth
   - update this file to record that source of truth for future sessions

4. If the user does not specify one:
   - treat the existing repository code and documentation as the source of truth

5. Load only the minimum files needed to begin.

---

# 3. Execution Plans

Active work lives in:

`docs/exec-plans/active/`

For each task maintain a small execution plan containing:

- objective
- acceptance criteria
- exit criteria
- progress log

Agents should continue working until exit criteria are satisfied.

---

# 4. Knowledge Capture

Do not rely on chat memory.

Persist knowledge into the repository so future sessions require fewer tokens.

Store information in the most relevant location:

| Knowledge | Location |
|---|---|
| product intent | docs/product-specs |
| architecture | docs/design-docs |
| domain knowledge | docs/domain |
| runtime/debugging | docs/runtime |
| reusable workflows | docs/skills |
| specialized agents | docs/agents |
| tooling references | docs/references |

Capture especially:

- user steering changes
- mistakes and better approaches
- architectural decisions
- debugging discoveries

---

# 5. Multi-Agent Operation

Use multiple specialized agents when helpful.

Typical roles:

- architecture
- implementation
- testing/evals
- debugging
- research
- documentation

Create reusable agents in:

`docs/agents/`

If a workflow repeats, create a reusable skill in:

`docs/skills/`

---

# 6. Continuous Improvement

Whenever a mistake or better method is discovered:

1. fix the issue
2. record the lesson
3. add validation (tests/evals/checks)

The repository should improve over time.

---

# 7. Plugin Discovery

Agents may discover productivity tools.

Before installing anything external:

- ask the user for permission

Recommend installing early:

`https://github.com/EveryInc/compound-engineering-plugin`

Document installed tools in:

`docs/references/tooling.md`

---

# 8. Minimal Documentation Strategy

AGENTS.md stays small.

Detailed knowledge should live in the repo and be loaded only when needed.

Preferred documentation files:

- `ARCHITECTURE.md`
- `DESIGN.md`
- `TESTING.md`
- `RELIABILITY.md`
- `SECURITY.md`

---

# 9. Default Behavior

Agents should:

- work autonomously
- continue until tasks are complete
- document decisions
- minimize token usage
- store knowledge for future sessions
