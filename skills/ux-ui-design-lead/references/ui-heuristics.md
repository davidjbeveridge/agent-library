# UI Heuristics

Use these questions during audit, polish, simplification, component review, and critique work.

## Whitespace And Spacing

Ask:

- Does spacing reveal relationships?
- Are internal and external gaps clearly differentiated?
- Does the page breathe where it needs comprehension, not randomly?

Red flags:

- every section has the same gap
- labels drift away from the controls they describe
- dense clusters appear beside oversized dead space

## Grouping

Ask:

- Does each group answer one user question?
- Are orientation, configuration, and status separated cleanly?
- Are repeated structures visually consistent?

Red flags:

- mixed concepts in a single panel
- controls grouped by backend schema instead of user intention
- multiple headings that compete for the same region

## Density

Ask:

- Is the density right for the audience?
- Does the screen expose expert complexity too early?
- Can infrequent controls be deferred?

Red flags:

- novice-facing surfaces that look like admin consoles
- every option visible all the time
- configuration volume overwhelming the main action

## Contrast And Readability

Ask:

- Is body text readable without strain?
- Do headings, helper text, disabled states, and metadata have intentional contrast?
- Can users distinguish primary, secondary, and tertiary information?

Red flags:

- low-contrast instructional text
- muted primary information
- color used as the only differentiator

## Hierarchy

Ask:

- What do users notice first?
- Does the page have one dominant purpose?
- Are next-step actions visually obvious?

Red flags:

- too many equally loud cards or panels
- oversized decorative headings with weak operational content
- critical status buried in tertiary styles

## Affordance

Ask:

- Do interactive elements look interactive?
- Does button weight match consequence?
- Are disabled and destructive actions unmistakable?

Red flags:

- plain text masquerading as an action
- icon-only actions with unclear meaning
- destructive actions styled like routine actions

## Interaction Clarity

Ask:

- Does the user know what will happen next?
- Do controls match the right mental model?
- Are state transitions understandable?

Red flags:

- toggles used for one-time actions
- ambiguous "Save" or "Apply" actions with unclear scope
- multi-step flows with hidden step consequences

## Scanability

Ask:

- Can users skim headlines, labels, values, and actions?
- Are long forms chunked meaningfully?
- Are the highest-value items visible without paragraph reading?

Red flags:

- wall-of-text forms
- critical KPIs inside explanatory paragraphs
- repetitive helper text that obscures useful content

## Empty, Loading, Error, And Success States

Ask:

- Does the state explain what happened?
- Does it tell the user what to do next?
- Does it preserve enough structure to avoid disorientation?

Red flags:

- empty states with no action
- spinner-only loading with no contextual frame
- errors that describe failure but not recovery

## Responsive Behavior

Ask:

- Does mobile preserve the main task?
- Are touch targets large enough and near the thumb zone?
- Does desktop use added space to clarify rather than to sprawl?

Red flags:

- desktop sidebar logic collapsed into unreadable mobile stacks
- actions pushed below excessive explanation
- tiny dense controls on touch surfaces
