# Install From Repo Root

This is the canonical install contract for external Codex or Claude sessions that are told:

- `Install [repo root]`
- `Install [repo root]/[package]`

Use this file as the first source of truth for repo-root installation.

## Supported Installable Units

| Package id | Install path | Kind | Install scope support | Default recommendation | Bootstrap requirements | Optional heavy dependencies | Primary install doc |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ux-ui-design-lead` | `skills/ux-ui-design-lead/` | Portable Codex skill bundle | `project-local`, `global Codex config` | `global Codex config` | Copy bundle into skills directory | Optional helper scripts and local toolchain | `skills/ux-ui-design-lead/README.md` |
| `asset-pipeline` | `skills/asset-pipeline/` | Portable Codex skill bundle | `project-local`, `global Codex config` | `global Codex config` | Copy bundle into skills directory; optional deterministic and ML bootstrap | Optional graphics CLI toolchain and local ML stack | `skills/asset-pipeline/README.md` |
| `marketing-os` | `marketing-os/` | Standalone Node/TypeScript package | `project-local` | `project-local` | `npm install`, schema generation, tests, CLI verification | Optional external tool credentials and vendored integration setup | `marketing-os/README.md` |

## Required Question Flow

When an agent is asked to install from repo root, it must ask:

1. `Which package(s) do you want installed?`
2. `Install into this project/repo, or into a global config like ~/.codex/?`
3. `Do you want install only, or install plus bootstrap and validation?`
4. `Do you want optional heavy dependencies installed as well, such as local ML packages or large CLI toolchains?`

If the user does not specify a package set, do not assume “everything.” Ask explicitly.

## Default Recommendations

- For `ux-ui-design-lead`: recommend `global Codex config`
- For `asset-pipeline`: recommend `global Codex config`
- For `marketing-os`: recommend `project-local`

If the user requests repo-local testing or authoring, a portable skill bundle may be installed `project-local` instead.

## Repo-Root Install Procedure

1. Read this file.
2. Enumerate the supported installable units from the table above.
3. Ask the required package-selection and install-scope questions.
4. Route into the selected package’s own `README.md`.
5. Stop after `install` if the user did not request bootstrap work.
6. Ask before installing optional heavy dependencies.
7. Run package-local validation steps only if the user asked for bootstrap or validation.

## Package Routing

### `skills/ux-ui-design-lead`

Use:

- [skills/ux-ui-design-lead/README.md](/Users/davidjbeveridge/src/agent-library/skills/ux-ui-design-lead/README.md)

### `skills/asset-pipeline`

Use:

- [skills/asset-pipeline/README.md](/Users/davidjbeveridge/src/agent-library/skills/asset-pipeline/README.md)

### `marketing-os`

Use:

- [marketing-os/README.md](/Users/davidjbeveridge/src/agent-library/marketing-os/README.md)

## Terms

- `install`: copy or clone the package into the chosen target
- `bootstrap`: install dependencies and make commands runnable
- `validate`: run help, doctor, tests, or smoke checks
- `use`: run example invocations after install

These terms should be interpreted consistently across the package docs.
