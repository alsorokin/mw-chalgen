export const challengeRules = [
  {
    id: "walk-everywhere",
    category: "Travel",
    title: "The First Step Is Sacred",
    description: "Every league crossed beneath your own power is a prayer. Travel on foot only; do not use boats, silt striders, guild guides, Recall, or Intervention.",
    incompatibleWith: [],
  },
  {
    id: "no-resting",
    category: "Survival",
    title: "Sleep Is for the Dead",
    description: "The Sixth House has enough sleepers. Do not rest or wait.",
    incompatibleWith: ["rest-only-leveling"],
  },
  {
    id: "rest-only-leveling",
    category: "Survival",
    title: "A Bed Must Be Earned",
    description: "Anything less than a proper bed invites dreams with too many teeth. Rest only in owned, rented, or clearly safe beds.",
    incompatibleWith: ["no-resting"],
  },
  {
    id: "no-potions",
    category: "Alchemy",
    title: "Dry Law",
    description: "With St. Felms' fervor, you hold that potions and drink are sins worse than mating a guar. Do not consume potions or alcoholic drinks.",
    incompatibleWith: ["alchemy-only-healing"],
  },
  {
    id: "alchemy-only-healing",
    category: "Alchemy",
    title: "The Alchemist's Vow",
    description: "Your own hands must prepare every remedy worth trusting. Recover health only with self-crafted potions.",
    incompatibleWith: ["no-potions", "no-potion-crafting"],
  },
  {
    id: "no-potion-crafting",
    category: "Alchemy",
    title: "The Ash Yields Enough",
    description: "The soil provides what it intends you to have; mortar and pestle only tempt fate. Do not create potions.",
    incompatibleWith: ["alchemy-only-healing"],
  },
  {
    id: "no-summoning",
    category: "Magic",
    title: "No Borrowed Hands",
    description: "If a task requires another soul to do it, perhaps it was never yours to attempt. Do not summon creatures or Bound equipment.",
    incompatibleWith: [],
  },
  {
    id: "no-enchanting",
    category: "Magic",
    title: "The Soul Is Not Currency",
    description: "To trap a soul in a trinket is slavery with better jewelry. Do not create enchantments or pay for enchanting services.",
    incompatibleWith: [],
  },
  {
    id: "no-spellcasting",
    category: "Magic",
    title: "The Old Ways Have Teeth",
    description: "Spells are promises to powers that remember every word. Do not cast spells.",
    incompatibleWith: [],
  },
  {
    id: "one-weapon-type",
    category: "Combat",
    title: "One Blade, One Oath",
    description: "A fighter who changes weapons is only shopping for a better excuse. Choose one weapon skill and use no other weapon type.",
    incompatibleWith: [],
  },
  {
    id: "no-armor",
    category: "Combat",
    title: "Let the Armor Rust",
    description: "Steel between you and danger only teaches danger to aim higher. Wear no armor.",
    incompatibleWith: [],
  },
  {
    id: "no-buying-equipment",
    category: "Economy",
    title: "What the Ash Gives",
    description: "Nothing bought has a story worth carrying. Do not buy equipment; use found, gifted, or self-made gear only.",
    incompatibleWith: [],
  },
  {
    id: "no-selling-loot",
    category: "Economy",
    title: "Gold Has a Long Memory",
    description: "Every trinket has a debt attached to it. Do not sell any loot.",
    incompatibleWith: [],
  },
  {
    id: "no-stealing",
    category: "Economy",
    title: "The Honest Empty Pocket",
    description: "A thief counts coin; an honorable traveler counts favors. Do not steal from people, homes, shops, or unsecured town containers.",
    incompatibleWith: [],
  },
  {
    id: "no-trainers",
    category: "Progression",
    title: "No Master but Experience",
    description: "A teacher can show the stance, but only failure explains why it matters. Do not pay trainers.",
    incompatibleWith: [],
  },
  {
    id: "major-skills-only",
    category: "Progression",
    title: "Born to the Calling",
    description: "The skills named at your beginning are the only ones the ancestors bothered to bless. Use only major skills for combat and utility.",
    incompatibleWith: [],
  },
  {
    id: "no-factions",
    category: "Factions",
    title: "A Stranger in Every House",
    description: "The Houses have enough cousins, the guilds enough debtors, and the temples enough kneeling. Do not join factions.",
    incompatibleWith: [],
  },
  {
    id: "no-imperial-factions",
    category: "Factions",
    title: "The Emperor's Shadow",
    description: "You came to Vvardenfell to escape the Empire's long arm, not salute it. Do not join the Imperial Legion, Imperial Cult, Fighters Guild, or Mages Guild.",
    incompatibleWith: [],
  },
  {
    id: "pilgrims-circuit",
    category: "World",
    title: "The Pilgrim's Circuit",
    description: "No grand destiny is earned without knowing the land's holy places. Complete the Pilgrimage of the Seven Graces before beginning the main quest.",
    incompatibleWith: [],
  },
  {
    id: "directions-not-destinations",
    category: "World",
    title: "Directions, Not Destinations",
    description: "If an outlander cannot find a place from a local's directions, perhaps that place never wished to be found. Navigate using dialogue and notes rather than quest-marker guidance.",
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
