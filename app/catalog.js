export const challengeRules = [
  {
    id: "walk-everywhere",
    category: "Travel",
    title: "Walk everywhere",
    description: "Do not use boats, silt striders, guild guides, or intervention spells.",
    incompatibleWith: [],
  },
  {
    id: "no-resting",
    category: "Survival",
    title: "No resting",
    description: "Do not rest or wait to recover health, magicka, or fatigue.",
    incompatibleWith: ["rest-only-leveling"],
  },
  {
    id: "rest-only-leveling",
    category: "Survival",
    title: "Rest to level",
    description: "Only sleep in beds or rented rooms when leveling up.",
    incompatibleWith: ["no-resting"],
  },
  {
    id: "no-potions",
    category: "Combat",
    title: "No potions",
    description: "Do not drink crafted, bought, or found potions.",
    incompatibleWith: ["alchemy-only-healing"],
  },
  {
    id: "alchemy-only-healing",
    category: "Combat",
    title: "Alchemist's remedy",
    description: "Recover health only with self-crafted potions.",
    incompatibleWith: ["no-potions"],
  },
  {
    id: "one-weapon-type",
    category: "Combat",
    title: "One weapon discipline",
    description: "Choose one weapon skill and use no other weapon type.",
    incompatibleWith: [],
  },
  {
    id: "no-buying-equipment",
    category: "Economy",
    title: "No bought equipment",
    description: "Use only equipment you find, receive, or make.",
    incompatibleWith: [],
  },
  {
    id: "no-selling-loot",
    category: "Economy",
    title: "No selling loot",
    description: "Do not sell dungeon loot for gold.",
    incompatibleWith: [],
  },
];

export function validateCatalog(catalog) {
  const rulesById = new Map();

  for (const rule of catalog) {
    if (rulesById.has(rule.id)) {
      throw new Error(`The rule catalog contains duplicate id "${rule.id}".`);
    }
    rulesById.set(rule.id, rule);
  }

  for (const rule of catalog) {
    for (const conflictingId of rule.incompatibleWith) {
      const conflictingRule = rulesById.get(conflictingId);
      if (!conflictingRule) {
        throw new Error(`Rule "${rule.id}" conflicts with unknown rule "${conflictingId}".`);
      }
      if (!conflictingRule.incompatibleWith.includes(rule.id)) {
        throw new Error(`Conflict between "${rule.id}" and "${conflictingId}" must be symmetric.`);
      }
    }
  }

  return rulesById;
}

validateCatalog(challengeRules);
