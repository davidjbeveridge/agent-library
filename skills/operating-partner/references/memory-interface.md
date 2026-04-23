# Memory Interface

## Goal

The skill must know how to interact with memory and must not rediscover that choice on every run.

## Preferred Resolution Order

1. Use `durable-memory` if it is available.
2. Otherwise use Codex native memory if available.
3. Otherwise ask the user what memory interface to use.

## Persistence Rule

Once the memory interface is known, store it in `PROFILE.md` under a dedicated section so future runs can reuse it.

Suggested fields:

- backend
- read behavior
- write behavior
- fallback behavior
- any user-specific constraints

## Example Backends

- `durable-memory`
- `codex-native-memory`
- `custom`

## Fallback Rule

If `durable-memory` is unavailable and Codex native memory is used, record that fallback explicitly rather than treating it as an invisible default.

## Escalation Rule

If neither `durable-memory` nor Codex native memory is appropriate for the user, ask once for the desired memory behavior and then write the answer into `PROFILE.md`.
