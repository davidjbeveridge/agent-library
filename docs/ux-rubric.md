# UX/UI Rubric

Use this rubric when a scored review helps prioritize work or compare before/after quality.

## Scoring Scale

- `0` Failing: actively misleads or blocks the user.
- `1` Weak: understandable only with extra effort or prior knowledge.
- `2` Adequate: functional, but leaves clarity or quality on the table.
- `3` Strong: clear, disciplined, and aligned to user intent.

## Categories

### Primary-Job Support

Ask:

- Is the dominant user job obvious?
- Does the screen help the user act on that job quickly?
- Are secondary jobs subordinated?

Scoring:

- `0` The UI hides or competes with the main task.
- `1` The main task exists but is buried or noisy.
- `2` The main task is visible but not sharply prioritized.
- `3` The screen clearly centers the primary job.

### Semantics

Ask:

- Do labels, icons, and groupings mean what users think they mean?
- Does the UI mirror user language instead of internal schema?

Scoring:

- `0` Meanings are misleading or internally inconsistent.
- `1` Meaning is recoverable but jargon-heavy or ambiguous.
- `2` Most semantics are sound with a few weak spots.
- `3` The interface communicates intent cleanly and consistently.

### Visual Hierarchy

Ask:

- What do users notice first?
- Does emphasis match importance?
- Are headings, values, and actions weighted correctly?

Scoring:

- `0` Emphasis is backwards or chaotic.
- `1` Some hierarchy exists but key signals compete.
- `2` Hierarchy mostly works with a few noisy areas.
- `3` The scan path is deliberate and trustworthy.

### Scanability

Ask:

- Can users skim headings, labels, values, and actions?
- Are long forms and complex panels broken into readable chunks?

Scoring:

- `0` Users must read everything to understand anything.
- `1` Skimming is possible but inefficient.
- `2` The surface is readable with isolated friction.
- `3` Users can orient and act quickly.

### Affordance And Interaction Clarity

Ask:

- Do controls look and behave like the action they perform?
- Are state changes legible?
- Are destructive or high-stakes actions explicit?

Scoring:

- `0` Controls invite the wrong action or hide consequence.
- `1` Action logic is learnable but not obvious.
- `2` Controls mostly align with expectations.
- `3` Interaction behavior feels direct and reliable.

### State Clarity

Ask:

- Are empty, loading, success, and error states informative?
- Do users know what to do next?

Scoring:

- `0` States create confusion or dead ends.
- `1` States exist but do not guide recovery.
- `2` State handling is serviceable with some ambiguity.
- `3` States reinforce trust and momentum.

### Accessibility

Ask:

- Can the UI be used with keyboard, screen reader, and reduced motion?
- Is contrast sufficient?
- Are labels and errors programmatically clear?

Scoring:

- `0` Major accessibility blockers exist.
- `1` Partial compliance with important gaps.
- `2` Reasonably accessible with a few repair items.
- `3` Accessibility is integrated into the design behavior.

### Responsiveness

Ask:

- Does the layout preserve meaning across viewport sizes?
- Are touch targets and scan paths platform-appropriate?

Scoring:

- `0` The design breaks or changes meaning on other screens.
- `1` It technically fits but becomes hard to use.
- `2` It adapts with a few awkward areas.
- `3` It preserves clarity and control across platforms.

### Implementation Readiness

Ask:

- Could a frontend engineer act on this guidance directly?
- Are layout, copy, state, and accessibility requirements explicit?

Scoring:

- `0` Recommendations are too vague to implement safely.
- `1` Some direction exists but major decisions are missing.
- `2` Most guidance is actionable with minor interpretation.
- `3` Another agent can implement without inventing the design.

## Interpreting Totals

- `0-10`: foundational redesign or repair needed
- `11-18`: usable but materially weak
- `19-23`: solid baseline with targeted improvement opportunities
- `24-27`: strong, disciplined product UI

Use scores to guide priority, not to replace written reasoning.
