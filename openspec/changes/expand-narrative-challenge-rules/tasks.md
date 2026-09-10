## 1. Narrative Catalog

- [ ] 1.1 Replace the existing generic rule titles and descriptions with the planned narrative presentation, retaining stable identifiers where their mechanical restrictions remain unchanged; verify every rendered rule has an evocative title and an explicit gameplay restriction.
- [ ] 1.2 Add the planned character progression, combat, survival, alchemy, magic, economy, faction, and world-interaction rules to the catalog; verify the all-enabled candidate set includes every required category and excludes redundant Great House, stealth, and individual skill-ban rules.
- [ ] 1.3 Add symmetric incompatibility declarations for all directly contradictory narrative rules, including both rest rules and The Alchemist's Vow conflicts; verify catalog validation accepts the expanded catalog.

## 2. Catalog and Generator Verification

- [ ] 2.1 Extend catalog tests to reject unknown, asymmetric, and newly declared contradictory rule pairs; verify all catalog validation tests pass.
- [ ] 2.2 Exercise exact-size generation against the expanded catalog; verify unit tests always return compatible rulesets of the requested size and preserve infeasibility behavior.

## 3. Browser Presentation

- [ ] 3.1 Exercise the static application with the expanded catalog; verify categorized controls display narrative titles and descriptions, a feasible request produces the requested number of rules, and no backend service is required.
