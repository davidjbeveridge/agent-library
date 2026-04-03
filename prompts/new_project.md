Help me set up this project with a robust, automated, multi-agent workflow covering the full SDLC. You have full autonomy to create and maintain AGENTS.md files and any other project artifacts needed to support this workflow.

Design the workflow so specialized agents are defined and used for every major responsibility required to produce a high-quality codebase, including: requirements discovery, planning, domain modeling, system design and architecture, implementation, BDD + TDD, test strategy, invariant
enforcement, security, correctness, readability, maintainability, documentation, CI/CD, deployment tooling, observability, operational readiness, and automated code review. Apply Domain-Driven Design and SOLID principles throughout, and identify and cover any important SDLC concerns I
have not explicitly listed.

Set the repository up for harness-driven development. Build the project so agents can work effectively through strong scaffolding, clear feedback loops, reliable verification, and repo-native workflows rather than ad hoc instructions. Prefer making the repository legible to agents:
architecture, standards, plans, decisions, constraints, and operating context should live in versioned files in the repo, not only in prompts or external tools.

Treat AGENTS.md as the top-level map, not a monolith. Store contextual knowledge alongside the relevant files and domains as the codebase evolves, and maintain an index of all such context files from AGENTS.md. Use a hierarchical knowledge structure so agents can dynamically load only the
context they need for the task at hand, preserving context window efficiency while keeping deeper guidance discoverable. Define conventions for keeping this knowledge indexed, current, and enforceable.

Configure the project so agent usage is automatic and maximized. The primary agent should know when to delegate, which specialized agents or skills to use, what context to load, and how to coordinate work across the lifecycle of each task.

Establish the following workflow rules as defaults:

- Every feature or change must have an associated Jira task and GitHub PR.
- All feature work must be done in a separate branch or worktree.
- Every change must be committed granularly and intentionally.
- All prompts, agent delegations, decisions, and outcomes must be logged to a development log file and committed to the repository.
- Prefer command-line tools and MCP integrations wherever possible.
- End-to-end verification may use Playwright, but all Playwright flows must be committed as code and run through the project’s test/build system.
- All feature development must follow BDD and TDD by default.

Organize this system clearly, implement the necessary project files and conventions, and bias for action. Do not ask unnecessary questions. Make reasonable decisions, execute them, and leave the project with a well-structured, enforceable, agent-first development workflow.
