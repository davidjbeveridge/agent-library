# Runtime Extension Points

This package intentionally avoids coupling to Codex, MCP, OpenClaw, or any other orchestration runtime in its first implementation.

Future wrappers should:

- treat `MarketingOrchestrator` as the integration boundary
- preserve the shared `MarketingContext` contract
- reuse the same registries and workflows
- avoid introducing runtime-specific state into core modules
