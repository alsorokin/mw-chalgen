# Morrowind Challenge Generation Specification

## Purpose

Provide a configurable, randomized Morrowind challenge ruleset that never includes incompatible rules.

## Requirements

### Requirement: Rule catalog configuration
The system SHALL present a varied catalog of independently selectable Morrowind challenge rules organized into categories. Each rule SHALL have a unique stable identifier, an evocative narrative title, and flavor text that also states its precise, enforceable gameplay restriction. The full catalog SHALL be initially collapsed, and each category SHALL be independently collapsible when the catalog is open.

#### Scenario: Selecting candidate rules
- **WHEN** a user enables or disables a rule
- **THEN** subsequent generations use only the enabled rules as candidates

#### Scenario: Browsing rules by category
- **WHEN** a user views the challenge rule catalog
- **THEN** the system displays each rule with its category

#### Scenario: Revealing the catalog
- **WHEN** a user first views the configuration form
- **THEN** the full challenge-rule catalog is collapsed
- **AND THEN** the user can expand it to access the categorized controls

#### Scenario: Collapsing a category
- **WHEN** a user expands the catalog and toggles a category
- **THEN** only that category's controls are shown or hidden
- **AND THEN** selections in every category are retained

#### Scenario: Understanding a narrative rule
- **WHEN** a user views a narrative rule
- **THEN** its title and description convey an in-world motive and its exact gameplay restriction

#### Scenario: Generating a varied challenge
- **WHEN** a user enables all catalog rules
- **THEN** the candidate set includes rules for character progression, combat, survival, magic, economy, faction participation, and world interaction

#### Scenario: Excluding redundant or narrow constraints
- **WHEN** a user views the catalog
- **THEN** it does not include a Great House exclusivity rule already enforced by the base game, a stealth-combat prohibition, or individual bans for arbitrary skills

### Requirement: Generated ruleset details
The system SHALL present every generated rule with its narrative title and complete catalog description.

#### Scenario: Viewing a generated ruleset
- **WHEN** a feasible generation produces a ruleset
- **THEN** each presented rule includes its narrative title and complete description

### Requirement: Requested ruleset size
The system SHALL allow the user to specify the exact positive number of rules to include in a generated ruleset.

#### Scenario: Choosing a result size
- **WHEN** a user enters a positive requested rule count
- **THEN** the system uses that count as the required size of the next generated ruleset

#### Scenario: Rejecting a non-positive result size
- **WHEN** a user requests generation with a zero or negative rule count
- **THEN** the system explains that the requested count must be positive and does not generate a ruleset

### Requirement: Compatible randomized ruleset generation
The system SHALL randomly generate a ruleset containing exactly the requested number of enabled rules, and SHALL never include two rules that are declared mutually incompatible.

#### Scenario: Generating a valid ruleset
- **WHEN** the enabled candidate rules contain a compatible combination at the requested size and the user generates a ruleset
- **THEN** the system presents exactly the requested number of enabled rules
- **AND THEN** no pair of presented rules is mutually incompatible

#### Scenario: Producing varied valid rulesets
- **WHEN** the user generates multiple rulesets using the same feasible candidates and requested size
- **THEN** the system randomizes its selection among compatible combinations

### Requirement: Infeasible generation feedback
The system SHALL not produce a partial or conflicting ruleset when the enabled rules cannot satisfy the requested count, and SHALL provide actionable feedback.

#### Scenario: Insufficient enabled rules
- **WHEN** fewer enabled rules exist than the requested count
- **THEN** the system explains that more rules must be enabled or the requested count reduced

#### Scenario: Conflicts prevent the requested size
- **WHEN** enabled rules exist in sufficient quantity but no compatible combination reaches the requested count
- **THEN** the system explains that the user must adjust the enabled rules or requested count
