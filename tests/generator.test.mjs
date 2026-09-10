import assert from "node:assert/strict";
import test from "node:test";

import { challengeRules, validateCatalog } from "../app/catalog.js";
import { GenerationError, areCompatible, generateRuleset } from "../app/generator.js";

const noRandomness = () => 0;

test("validates catalog conflicts are known and symmetric", () => {
  assert.throws(
    () => validateCatalog([{ id: "a", incompatibleWith: ["missing"] }]),
    /unknown rule/,
  );
  assert.throws(
    () =>
      validateCatalog([
        { id: "a", incompatibleWith: ["b"] },
        { id: "b", incompatibleWith: [] },
      ]),
    /must be symmetric/,
  );
});

test("generates an exact-size compatible ruleset", () => {
  const ruleset = generateRuleset(challengeRules, 5, noRandomness);

  assert.equal(ruleset.length, 5);
  for (const rule of ruleset) {
    assert.ok(areCompatible(rule, ruleset.filter((otherRule) => otherRule.id !== rule.id)));
  }
});

test("rejects non-positive requested counts without a partial ruleset", () => {
  assert.throws(
    () => generateRuleset(challengeRules, 0),
    (error) => error instanceof GenerationError && error.code === "invalid-count",
  );
});

test("rejects requests with too few candidates", () => {
  assert.throws(
    () => generateRuleset(challengeRules.slice(0, 2), 3),
    (error) => error instanceof GenerationError && error.code === "insufficient-candidates",
  );
});

test("rejects conflict-blocked combinations without returning a partial ruleset", () => {
  const conflictingRules = [
    { id: "a", incompatibleWith: ["b", "c"] },
    { id: "b", incompatibleWith: ["a", "c"] },
    { id: "c", incompatibleWith: ["a", "b"] },
  ];

  assert.throws(
    () => generateRuleset(conflictingRules, 2, noRandomness),
    (error) => error instanceof GenerationError && error.code === "conflict-blocked",
  );
});
