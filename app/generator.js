export class GenerationError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "GenerationError";
    this.code = code;
  }
}

function shuffle(items, random) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export function areCompatible(rule, selectedRules) {
  return selectedRules.every(
    (selectedRule) =>
      !rule.incompatibleWith.includes(selectedRule.id) &&
      !selectedRule.incompatibleWith.includes(rule.id),
  );
}

export function generateRuleset(candidates, count, random = Math.random) {
  if (!Number.isInteger(count) || count <= 0) {
    throw new GenerationError("invalid-count", "The requested rule count must be a positive whole number.");
  }
  if (candidates.length < count) {
    throw new GenerationError(
      "insufficient-candidates",
      `Enable at least ${count} rules, or reduce the requested count.`,
    );
  }

  const orderedCandidates = shuffle(candidates, random);

  function findCompatibleSubset(remainingRules, selectedRules) {
    if (selectedRules.length === count) {
      return selectedRules;
    }
    if (selectedRules.length + remainingRules.length < count) {
      return null;
    }

    for (let index = 0; index < remainingRules.length; index += 1) {
      const candidate = remainingRules[index];
      if (!areCompatible(candidate, selectedRules)) {
        continue;
      }

      const result = findCompatibleSubset(
        remainingRules.slice(index + 1),
        [...selectedRules, candidate],
      );
      if (result) {
        return result;
      }
    }
    return null;
  }

  const ruleset = findCompatibleSubset(orderedCandidates, []);
  if (!ruleset) {
    throw new GenerationError(
      "conflict-blocked",
      "The enabled rules cannot form a compatible set at this size. Adjust the enabled rules or reduce the requested count.",
    );
  }
  return ruleset;
}
