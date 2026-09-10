## MODIFIED Requirements

### Requirement: Rule catalog configuration
The system SHALL present a varied catalog of independently selectable Morrowind challenge rules organized into categories. Each rule SHALL have a unique stable identifier, an evocative narrative title, and flavor text that also states its precise, enforceable gameplay restriction.

#### Scenario: Selecting candidate rules
- **WHEN** a user enables or disables a rule
- **THEN** subsequent generations use only the enabled rules as candidates

#### Scenario: Browsing rules by category
- **WHEN** a user views the challenge rule catalog
- **THEN** the system displays each rule with its category

#### Scenario: Understanding a narrative rule
- **WHEN** a user views a narrative rule
- **THEN** its title and description convey an in-world motive and its exact gameplay restriction

#### Scenario: Generating a varied challenge
- **WHEN** a user enables all catalog rules
- **THEN** the candidate set includes rules for character progression, combat, survival, magic, economy, faction participation, and world interaction

#### Scenario: Excluding redundant or narrow constraints
- **WHEN** a user views the catalog
- **THEN** it does not include a Great House exclusivity rule already enforced by the base game, a stealth-combat prohibition, or individual bans for arbitrary skills
