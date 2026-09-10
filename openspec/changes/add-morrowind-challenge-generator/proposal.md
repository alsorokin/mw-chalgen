## Why

Morrowind players seeking a fresh playthrough need a quick way to construct varied self-imposed challenges without manually resolving incompatible constraints. A client-side generator makes this accessible while providing a foundation for an expanding rule catalog.

## What Changes

- Add a static web application for configuring and generating Morrowind challenge rulesets.
- Present a categorized catalog of individually enabled or disabled candidate rules.
- Allow users to request the exact number of rules in a generated ruleset.
- Generate only combinations whose selected rules are mutually compatible.
- Clearly explain when the enabled rules cannot satisfy the requested rule count.

## Capabilities

### New Capabilities
- `morrowind-challenge-generation`: Configuring candidate rules and generating valid randomized Morrowind challenge rulesets at a requested size.

### Modified Capabilities

- None.

## Impact

- Adds a static client-side application and a maintainable challenge-rule catalog.
- Requires no backend, persistent storage, or external service for the initial release.
