## Context

The project has no existing application implementation. See `proposal.md` for motivation and `specs/morrowind-challenge-generation/spec.md` for the behavior contract. The first iteration is a static, client-side web application with no persistence or server-side validation.

## Goals / Non-Goals

**Goals:**
- Keep the rule catalog and incompatibility declarations easy to extend.
- Generate an exact-size, randomized compatible subset of enabled rules.
- Make invalid requests clear without changing a user's enabled selections.

**Non-Goals:**
- Persisting selections, user accounts, sharing rulesets, or backend APIs.
- Preset difficulty profiles or category-level limits on generated results.
- Authoring or editing custom rules in the user interface.

## Decisions

### Represent rules as catalog data with symmetric incompatibilities

Each rule will have a stable identifier, display information, a category, and identifiers of incompatible rules. The catalog will declare incompatibilities symmetrically or normalize them at load time so compatibility is independent of which rule is considered first.

This separates content expansion from generation logic and allows categories to organize the UI without imposing output constraints. A pairwise compatibility model is preferred over hard-coded rule combinations because it scales as the catalog grows. Higher-order constraints are deferred until they are needed.

### Keep all candidate selection client-side

The initial application will use static assets and browser-side state only. The enabled-rule set and requested count are sufficient inputs to generation.

A server or database would add operational complexity without a requirement for persistence, accounts, or shared content. Storage can be introduced later without changing the rule catalog contract.

### Find a valid combination before presenting any result

Generation will construct a compatible subset from the enabled candidates and requested count, using randomized ordering with backtracking or repeated bounded search. A result is presented only after it reaches the exact requested size.

Greedy selection alone can fail after making an early compatible choice that blocks a valid larger combination. Exhaustive combination search is simple and reliable for an initial small catalog; randomized candidate order provides variety. If future catalog growth makes the search expensive, the implementation can add pruning and sampling while preserving the same behavior.

### Validate feasibility in the UI

The UI will reject non-positive counts and report infeasibility when fewer enabled rules exist than requested or conflicts eliminate every exact-size combination. It will leave the candidate selection unchanged so the user can decide how to resolve the issue.

Automatically changing candidates would violate user intent. Returning a smaller set would violate the exact-count contract.

## Risks / Trade-offs

- [A large, dense conflict graph can increase combination-search time] → Start with a small catalog, prune incompatible branches, and set a bounded work limit with visible failure feedback if necessary.
- [Manually maintained incompatibility declarations can become asymmetric] → Validate or normalize catalog conflicts during application initialization and cover them with unit tests.
- [Purely random candidate order can make results appear repetitive] → Shuffle candidates for every request; defer history-based avoidance until a later iteration.

## Migration Plan

1. Publish the static application and catalog assets.
2. Roll back by serving the prior static asset version if a release issue is found.

