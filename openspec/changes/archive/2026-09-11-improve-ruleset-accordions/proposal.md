## Why

The expanded catalog makes the configuration form visually dense before a user is ready to adjust it. Collapsible rule controls reduce initial clutter, while fuller generated output lets players act on narrative rules without reopening the catalog.

## What Changes

- Place the full challenge-rule catalog inside an initially collapsed accordion.
- Make each rule category independently collapsible when the catalog is open.
- Render each generated rule with its title and full description rather than its title alone.
- Preserve existing rule selection, generation, validation, and feedback behavior.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `morrowind-challenge-generation`: Provide collapsible catalog navigation and complete narrative rule details in generated rulesets.

## Impact

- Updates the static HTML, CSS, browser-side rendering, and UI test coverage.
- Does not add dependencies, persistence, or backend services.
