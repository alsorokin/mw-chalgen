## ADDED Requirements

### Requirement: Generated ruleset details
The system SHALL present every generated rule with its narrative title and complete catalog description.

#### Scenario: Viewing a generated ruleset
- **WHEN** a feasible generation produces a ruleset
- **THEN** each presented rule includes its narrative title and complete description

## MODIFIED Requirements

### Requirement: Rule catalog configuration
The system SHALL present challenge rules organized into categories and SHALL allow the user to independently enable or disable each rule as a generation candidate. The full catalog SHALL be initially collapsed, and each category SHALL be independently collapsible when the catalog is open.

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
