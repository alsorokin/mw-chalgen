import { challengeRules } from "./catalog.js";
import { GenerationError, generateRuleset } from "./generator.js";

const form = document.querySelector("#challenge-form");
const catalogElement = document.querySelector("#rule-catalog");
const countInput = document.querySelector("#rule-count");
const resultElement = document.querySelector("#result");

function groupRulesByCategory(rules) {
  return rules.reduce((categories, rule) => {
    (categories.get(rule.category) ?? categories.set(rule.category, []).get(rule.category)).push(rule);
    return categories;
  }, new Map());
}

function renderCatalog() {
  const fragment = document.createDocumentFragment();
  for (const [category, rules] of groupRulesByCategory(challengeRules)) {
    const section = document.createElement("section");
    section.className = "rule-category";
    const title = document.createElement("h3");
    title.textContent = category;
    const list = document.createElement("div");
    list.className = "rule-list";

    for (const rule of rules) {
      const label = document.createElement("label");
      label.className = "rule-control";
      label.innerHTML = `
        <input type="checkbox" name="rule" value="${rule.id}" checked>
        <span><strong>${rule.title}</strong><small>${rule.description}</small></span>
      `;
      list.append(label);
    }
    section.append(title, list);
    fragment.append(section);
  }
  catalogElement.replaceChildren(fragment);
}

function enabledRules() {
  const enabledIds = new Set(
    [...form.querySelectorAll('input[name="rule"]:checked')].map((input) => input.value),
  );
  return challengeRules.filter((rule) => enabledIds.has(rule.id));
}

function showError(message) {
  resultElement.className = "result result--error";
  resultElement.replaceChildren();
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  resultElement.append(messageElement);
}

function showRuleset(rules) {
  resultElement.className = "result";
  resultElement.replaceChildren();
  const heading = document.createElement("h2");
  heading.textContent = "Your challenge";
  const list = document.createElement("ul");
  for (const rule of rules) {
    const item = document.createElement("li");
    item.textContent = rule.title;
    list.append(item);
  }
  resultElement.append(heading, list);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const count = Number(countInput.value);
  try {
    showRuleset(generateRuleset(enabledRules(), count));
  } catch (error) {
    if (error instanceof GenerationError) {
      showError(error.message);
      return;
    }
    throw error;
  }
});

renderCatalog();
