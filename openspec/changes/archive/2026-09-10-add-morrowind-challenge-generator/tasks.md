## 1. Static Application Foundation

- [x] 1.1 Create the static application entry point, styles, and client-side script structure; verify the page loads without runtime errors in a browser.
- [x] 1.2 Define an extensible categorized Morrowind challenge-rule catalog with stable identifiers and incompatibility declarations; verify catalog validation detects unknown or asymmetric conflicts.

## 2. Ruleset Generation

- [x] 2.1 Implement compatibility helpers and exact-size randomized subset generation with backtracking; verify unit tests cover valid exact-size selections and exclude every conflicting pair.
- [x] 2.2 Implement infeasibility detection for non-positive counts, too few candidates, and conflict-blocked combinations; verify unit tests cover each error condition without returning a partial result.

## 3. Configuration and Results UI

- [x] 3.1 Render categorized rule controls that independently enable and disable candidate rules; verify toggling a rule changes the candidate set used by generation.
- [x] 3.2 Add requested rule-count input and generate action with client-side validation; verify invalid counts show actionable feedback and retain the user's selections.
- [x] 3.3 Present generated rulesets and infeasibility feedback; verify successful output contains exactly the requested number of rules and failed output contains no ruleset.

## 4. Integration Validation

- [x] 4.1 Exercise representative browser flows for feasible and infeasible requests; verify generated results satisfy the ruleset contract and the static app requires no backend service.
