## Context

The existing static catalog contains eight generic restrictions and only pairwise incompatibility declarations. See `proposal.md` for motivation and `specs/morrowind-challenge-generation/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**
- Expand the catalog into a varied, setting-appropriate collection of independently selectable rules.
- Pair each exact mechanical restriction with a concise narrative title and voice.
- Preserve stable rule identifiers and symmetric conflict declarations.

**Non-Goals:**
- Character-build-aware generation that filters rules based on selected major or minor skills.
- Rule presets, objective tracking, mod integration, or enforcing restrictions in-game.
- Individual `No <skill>` rules that may be irrelevant to a generated character.

## Decisions

### Curate playstyle rules rather than enumerate skill bans

Add rules only when their restriction changes a broad tactical, economic, or roleplay pattern. The expanded catalog will cover the following rules:

| Category | Narrative title | Mechanical restriction |
| --- | --- | --- |
| Travel | The First Step Is Sacred | Travel on foot only; do not use boats, silt striders, guild guides, Recall, or Intervention. |
| Survival | Sleep Is for the Dead | Do not rest or wait. |
| Survival | A Bed Must Be Earned | Rest only in owned, rented, or clearly safe beds. |
| Alchemy | Dry Law | Do not consume potions or alcoholic drinks. |
| Alchemy | The Ash Yields Enough | Do not create potions. |
| Alchemy | The Alchemist's Vow | Recover health only with self-crafted potions. |
| Magic | No Borrowed Hands | Do not summon creatures or Bound equipment. |
| Magic | The Soul Is Not Currency | Do not create enchantments or pay for enchanting services. |
| Magic | The Old Ways Have Teeth | Do not cast spells. |
| Combat | One Blade, One Oath | Choose one weapon skill and use no other weapon type. |
| Combat | Let the Armor Rust | Wear no armor. |
| Economy | What the Ash Gives | Do not buy equipment; use found, gifted, or self-made gear only. |
| Economy | Gold Has a Long Memory | Do not sell any loot. |
| Economy | The Honest Empty Pocket | Do not steal from people, homes, shops, or unsecured town containers. |
| Progression | No Master but Experience | Do not pay trainers. |
| Progression | Born to the Calling | Use only major skills for combat and utility. |
| Factions | A Stranger in Every House | Do not join factions. |
| Factions | The Emperor's Shadow | Do not join Imperial Legion, Imperial Cult, Fighters Guild, or Mages Guild. |
| World | The Pilgrim's Circuit | Complete the Pilgrimage of the Seven Graces before beginning the main quest. |
| World | Directions, Not Destinations | Navigate using dialogue and notes rather than quest-marker guidance. |

The final copy will use concise in-world flavor followed by the exact restriction. This improves readability without requiring players to infer the rule's gameplay effect. The catalog will not include individual `No Sneak`, `No Spear`, or similar skill bans, nor a one-Great-House rule, because those are either no-ops, arbitrarily narrow, or already enforced by the game.

Alternative considered: add every skill as a separate no-use rule. Rejected because random combinations would be noisy and frequently irrelevant to the chosen character.

### Reframe existing rules in the narrative catalog

Replace generic titles and descriptions where they overlap the curated rules. In particular, the no-potions rule becomes `Dry Law` and references St. Felms, while the loot-selling rule prohibits selling any loot rather than only dungeon loot.

Alternative considered: keep mechanical labels and add narrative text only to new rules. Rejected because generated results would have inconsistent tone.

### Declare only direct mechanical conflicts

Continue using symmetric pairwise incompatibilities for rules that cannot both be followed. The conflict graph will include, at minimum, mutually exclusive rest restrictions; `Dry Law` and `The Alchemist's Vow`; and `The Ash Yields Enough` and `The Alchemist's Vow`. Broader thematic tension alone is not a conflict: multiple difficult restrictions may coexist.

Alternative considered: use category limits or rule bundles. Rejected because the current exact-size generator is intentionally independent of categories and presets are outside this change.

## Risks / Trade-offs

- [Flavor obscures the rule] -> Every description ends with an explicit mechanical instruction.
- [Narrative references are lore-inaccurate] -> Review setting terminology, including St. Felms and vanilla Great House behavior, before adding catalog entries.
- [The larger candidate set makes invalid combinations harder to understand] -> Preserve actionable incompatibility feedback and use conflicts only for true contradictions.

## Migration Plan

1. Replace and extend the static catalog data while retaining existing identifiers where the underlying rule remains the same.
2. Extend catalog and generator tests for the new rule count and all declared conflicts.
3. Roll back by restoring the prior static catalog if a rule's wording or compatibility declaration proves incorrect.
