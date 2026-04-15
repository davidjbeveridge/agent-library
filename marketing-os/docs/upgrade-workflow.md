# Upgrade Workflow

1. Audit the current dependency state with `marketing-os audit-vendored-dependencies`.
2. Run `marketing-os upgrade-vendored-dependency <dependency-id> --sha <candidate>` without `--apply` to inspect candidate metadata.
3. Review snapshot diffs, wrapper compatibility, and policy risks.
4. Apply the upgrade with `--apply` only after review.
5. Regenerate `MANIFEST.sha256` and update `UPSTREAM.md`.
6. Run tests and dependency audits again before enabling the upgraded dependency.
