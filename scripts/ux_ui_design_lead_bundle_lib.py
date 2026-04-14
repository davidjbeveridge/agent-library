from __future__ import annotations

import os
import re
import shutil
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
BUNDLE_NAME = "ux-ui-design-lead"
BUNDLE_ROOT = REPO_ROOT / "skills" / BUNDLE_NAME
DIST_ROOT = REPO_ROOT / "dist"

CANONICAL_SKILL = REPO_ROOT / ".agents" / "skills" / BUNDLE_NAME / "SKILL.md"
DOCS_DIR = REPO_ROOT / "docs"
ADAPTERS_DIR = REPO_ROOT / "adapters" / "ux-ui-design"
SPECIALISTS_DIR = REPO_ROOT / ".codex" / "agents"

BUNDLE_DOC_MAP = {
    DOCS_DIR / "ux-rubric.md": Path("references/ux-rubric.md"),
    DOCS_DIR / "ui-heuristics.md": Path("references/ui-heuristics.md"),
    DOCS_DIR / "accessibility-checklist.md": Path("references/accessibility-checklist.md"),
    DOCS_DIR / "icon-semantics-guide.md": Path("references/icon-semantics-guide.md"),
    DOCS_DIR / "design-review-template.md": Path("references/design-review-template.md"),
    DOCS_DIR / "design-system-guidelines.md": Path("references/design-system-guidelines.md"),
    DOCS_DIR / "task-type-playbooks.md": Path("references/task-type-playbooks.md"),
    DOCS_DIR / "browser-visual-review-workflow.md": Path("references/browser-visual-review-workflow.md"),
    DOCS_DIR / "design-decision-log.md": Path("references/design-decision-log.md"),
}

BUNDLE_ADAPTER_MAP = {
    ADAPTERS_DIR / "README.md": Path("references/adapters/README.md"),
    ADAPTERS_DIR / "figma.md": Path("references/adapters/figma.md"),
    ADAPTERS_DIR / "design-tokens.md": Path("references/adapters/design-tokens.md"),
    ADAPTERS_DIR / "screenshot-diff.md": Path("references/adapters/screenshot-diff.md"),
    ADAPTERS_DIR / "external-design-systems.md": Path("references/adapters/external-design-systems.md"),
}

SPECIALIST_FILES = sorted(SPECIALISTS_DIR.glob("*.md"))

REPO_TO_BUNDLE_REWRITES = [
    ("docs/accessibility-checklist.md", "references/accessibility-checklist.md"),
    ("docs/ui-heuristics.md", "references/ui-heuristics.md"),
    ("docs/ux-rubric.md", "references/ux-rubric.md"),
    ("docs/icon-semantics-guide.md", "references/icon-semantics-guide.md"),
    ("docs/design-review-template.md", "references/design-review-template.md"),
    ("docs/design-system-guidelines.md", "references/design-system-guidelines.md"),
    ("docs/task-type-playbooks.md", "references/task-type-playbooks.md"),
    ("docs/browser-visual-review-workflow.md", "references/browser-visual-review-workflow.md"),
    ("docs/design-decision-log.md", "references/design-decision-log.md"),
    ("docs/examples.md", "examples/prompts.md"),
    (".agents/skills/ux-ui-design-lead/SKILL.md", "references/lead-methodology.md"),
    ("skills/ux-ui-design-lead/scripts/screenshot_diff.py", "scripts/screenshot_diff.py"),
    ("skills/ux-ui-design-lead/scripts/extract_design_tokens.py", "scripts/extract_design_tokens.py"),
    ("`.agents/skills/ux-ui-design-lead/SKILL.md`", "`this skill`"),
]

REQUIRED_MANUAL_FILES = [
    BUNDLE_ROOT / "SKILL.md",
    BUNDLE_ROOT / "agents" / "openai.yaml",
    BUNDLE_ROOT / "scripts" / "doctor.py",
    BUNDLE_ROOT / "scripts" / "screenshot_diff.py",
    BUNDLE_ROOT / "scripts" / "extract_design_tokens.py",
]

GENERATED_TEMPLATE_FILES = {
    Path("templates/full-review-template.md"): """## Context Understood

## Primary User Jobs

## Major UX Risks

## Semantic Mismatches

## Visual Hierarchy Assessment

## Flow Issues

## Accessibility Issues

## Simplification Opportunities

## Recommended Changes

## Implementation Notes

## Open Questions / Assumptions

## Acceptance Criteria
""",
    Path("templates/compact-review-template.md"): """## Context

## Top Risks

## Best Fixes

## Implementation Notes

## Acceptance Check
""",
    Path("templates/design-handoff-template.md"): """# DESIGN.md

## Objective

## Primary User Jobs

## Current Problems

## Target Structure

## Layout And Interaction Rules

## Copy And Icon Rules

## Accessibility Requirements

## Implementation Notes

## Acceptance Criteria
""",
}

FORBIDDEN_BUNDLE_PATTERNS = [
    ".agents/",
    ".codex/",
    "docs/",
    "adapters/ux-ui-design/",
    "AGENTS.md",
]

REF_PATH_PATTERN = re.compile(
    r"(?P<path>(?:references|templates|examples|scripts)/[A-Za-z0-9_./-]+\.(?:md|py|yaml))"
)


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---\n"):
        return text
    marker = "\n---\n"
    end = text.find(marker, 4)
    if end == -1:
        return text
    return text[end + len(marker) :]


def rewrite_repo_paths(text: str) -> str:
    result = text
    for old, new in REPO_TO_BUNDLE_REWRITES:
        result = result.replace(old, new)
    return result


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def generated_bundle_files() -> dict[Path, str]:
    generated: dict[Path, str] = {}

    lead_method = rewrite_repo_paths(strip_frontmatter(read_text(CANONICAL_SKILL))).rstrip() + "\n"
    generated[Path("references/lead-methodology.md")] = lead_method

    for source, dest in BUNDLE_DOC_MAP.items():
        generated[dest] = rewrite_repo_paths(read_text(source)).rstrip() + "\n"

    generated[Path("examples/prompts.md")] = rewrite_repo_paths(
        read_text(DOCS_DIR / "examples.md")
    ).rstrip() + "\n"

    for source, dest in BUNDLE_ADAPTER_MAP.items():
        generated[dest] = rewrite_repo_paths(read_text(source)).rstrip() + "\n"

    for source in SPECIALIST_FILES:
        generated[Path("references/specialists") / source.name] = read_text(source).rstrip() + "\n"

    for dest, content in GENERATED_TEMPLATE_FILES.items():
        generated[dest] = content.rstrip() + "\n"

    return generated


def sync_generated_bundle() -> list[Path]:
    written: list[Path] = []
    for rel_path, content in generated_bundle_files().items():
        target = BUNDLE_ROOT / rel_path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding="utf-8")
        written.append(target)
    return written


def list_bundle_files() -> list[Path]:
    files: list[Path] = []
    for root, dirnames, filenames in os.walk(BUNDLE_ROOT):
        dirnames[:] = [name for name in sorted(dirnames) if name != "__pycache__"]
        for filename in sorted(filenames):
            files.append(Path(root) / filename)
    return files


def bundle_text_files() -> list[Path]:
    allowed = {".md", ".txt", ".py", ".yaml", ".yml"}
    return [path for path in list_bundle_files() if path.suffix in allowed]


def missing_manual_files() -> list[Path]:
    return [path for path in REQUIRED_MANUAL_FILES if not path.exists()]


def validate_frontmatter(skill_path: Path) -> list[str]:
    issues: list[str] = []
    text = read_text(skill_path)
    if not text.startswith("---\n"):
        return [f"{skill_path}: missing YAML frontmatter"]
    end = text.find("\n---\n", 4)
    if end == -1:
        return [f"{skill_path}: unterminated YAML frontmatter"]
    frontmatter = text[4:end]
    if "name:" not in frontmatter:
        issues.append(f"{skill_path}: frontmatter missing name")
    if "description:" not in frontmatter:
        issues.append(f"{skill_path}: frontmatter missing description")
    return issues


def validate_generated_files() -> list[str]:
    issues: list[str] = []
    expected = generated_bundle_files()
    for rel_path, content in expected.items():
        actual = BUNDLE_ROOT / rel_path
        if not actual.exists():
            issues.append(f"{actual}: missing generated file")
            continue
        if read_text(actual) != content:
            issues.append(f"{actual}: out of sync with repo sources")
    return issues


def validate_forbidden_patterns() -> list[str]:
    issues: list[str] = []
    for path in bundle_text_files():
        text = read_text(path)
        for pattern in FORBIDDEN_BUNDLE_PATTERNS:
            if pattern in text:
                issues.append(f"{path}: contains forbidden repo reference `{pattern}`")
    return issues


def validate_internal_references() -> list[str]:
    issues: list[str] = []
    for path in bundle_text_files():
        text = read_text(path)
        for match in REF_PATH_PATTERN.finditer(text):
            rel_path = Path(match.group("path"))
            if not (BUNDLE_ROOT / rel_path).exists():
                issues.append(f"{path}: references missing bundle file `{rel_path}`")
    return issues


def validate_symlinks() -> list[str]:
    issues: list[str] = []
    for path in list_bundle_files():
        if path.is_symlink():
            issues.append(f"{path}: symlinks are not allowed in the portable bundle")
    return issues


def validate_portable_bundle() -> list[str]:
    issues: list[str] = []
    for path in missing_manual_files():
        issues.append(f"{path}: missing required bundle file")
    issues.extend(validate_frontmatter(BUNDLE_ROOT / "SKILL.md"))
    skill_lines = read_text(BUNDLE_ROOT / "SKILL.md").splitlines()
    if len(skill_lines) > 500:
        issues.append(f"{BUNDLE_ROOT / 'SKILL.md'}: expected fewer than 500 lines, found {len(skill_lines)}")
    issues.extend(validate_generated_files())
    issues.extend(validate_forbidden_patterns())
    issues.extend(validate_internal_references())
    issues.extend(validate_symlinks())
    return issues


def command_status(name: str) -> dict[str, str | bool]:
    found = shutil.which(name)
    return {"name": name, "found": bool(found), "path": found or ""}
