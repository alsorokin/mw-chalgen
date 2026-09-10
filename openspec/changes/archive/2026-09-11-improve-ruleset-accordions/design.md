## Context

The current form renders all category controls immediately, and generated output lists only rule titles. See `proposal.md` for motivation and `specs/morrowind-challenge-generation/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**
- Reduce initial form density without hiding the available configuration.
- Give every category an independent, keyboard-accessible disclosure control.
- Present generated narrative rules with the complete text needed to follow them.

**Non-Goals:**
- Persisting accordion state between reloads.
- Adding category-wide enable or disable controls.
- Changing candidate selection, generation, or error behavior.

## Decisions

### Use native disclosure elements

Use a top-level `<details>` element with a `<summary>` for the full catalog and leave it closed in initial markup. Render each category as its own nested `<details>` element with a summary and its rule controls inside. Categories start expanded when the parent catalog is opened, so a user can inspect the available controls immediately while retaining independent collapse behavior.

Native disclosure elements provide mouse, keyboard, and assistive-technology interaction without custom state management or dependencies. Existing checkboxes remain mounted when a category or the outer catalog is closed, so their selections persist naturally.

Alternative considered: custom buttons with `aria-expanded` and JavaScript visibility state. Rejected because native disclosures provide the required behavior with less state and a more reliable accessibility baseline.

### Render generated descriptions from catalog data

Extend each generated list item to contain the rule title and the same complete description displayed in the catalog. Create both elements with DOM APIs and assign text content rather than interpolating catalog strings as HTML.

Alternative considered: copy only a shortened description to results. Rejected because a generated challenge must be understandable without reopening the catalog.

## Risks / Trade-offs

- [Nested disclosures may appear visually dense] -> Style summaries as clear section headers and preserve spacing between rules.
- [A closed catalog conceals the number of enabled rules] -> Include concise summary text that explains the catalog contains configurable candidate rules.
- [Catalog descriptions could contain markup-like text] -> Render result text through DOM text nodes rather than HTML interpolation.

## Migration Plan

1. Replace catalog and category wrappers with native disclosure markup.
2. Update styles for disclosure summaries and generated descriptions.
3. Exercise keyboard and browser flows for opening disclosures, changing selections, and generating a result.
