## Why

The initial challenge catalog is mechanically sound but sparse and generic. Narrative-driven rules with explicit gameplay effects will make generated challenges feel like distinct Morrowind characters rather than an arbitrary list of prohibitions.

## What Changes

- Expand the catalog with additional character, combat, survival, magic, economy, faction, and world-interaction rules.
- Give catalog rules evocative titles and short in-world flavor while retaining an unambiguous mechanical restriction.
- Refine existing generic rules into the narrative presentation, including St. Felms-themed abstinence and a ban on selling any loot.
- Exclude redundant, no-op, overly narrow skill bans, and Great House restrictions already enforced by the base game.
- Define incompatibilities for rules whose mechanical restrictions cannot coexist.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `morrowind-challenge-generation`: Present a broader, narrative-driven catalog of independently selectable, mechanically clear challenge rules.

## Impact

- Updates the static rule catalog in `app/catalog.js` and its catalog validation and generator tests.
- Does not add backend services, persistence, or dependencies.
