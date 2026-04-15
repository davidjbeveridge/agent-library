# Dependency Review Checklist

- Verify upstream repository identity and URL.
- Record pinned commit SHA and import date.
- Preserve upstream license or record that no license file was present.
- Generate and store a `MANIFEST.sha256` for the vendored snapshot.
- Review prompts, instructions, scripts, and tooling for unsafe commands or hidden assumptions.
- Confirm wrapper feasibility without direct raw invocation.
- Identify coupling risks and fallback behavior if the dependency becomes unusable.
- Record any trust or policy concerns in `UPSTREAM.md`.
- Keep local changes in `third_party_overlays/` where practical.
- Require an audit pass before enabling upgraded snapshots.
