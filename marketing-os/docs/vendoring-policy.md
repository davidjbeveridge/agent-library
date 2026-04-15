# Vendoring Policy

`marketing-os` vendors approved upstream skill packs as pinned local snapshots.

## Rules

- Never fetch live upstream content at runtime.
- Keep immutable upstream copies under `third_party/<dependency>/snapshot/`.
- Preserve upstream attribution, license data, and import metadata.
- Generate integrity manifests for every snapshot.
- Apply local changes in `third_party_overlays/` when possible.
- Route all usage through local wrappers that constrain context and validate outputs.
