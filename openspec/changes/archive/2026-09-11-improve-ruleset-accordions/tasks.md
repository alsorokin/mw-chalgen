## 1. Collapsible Catalog

- [x] 1.1 Replace the always-visible catalog wrapper with an initially closed native disclosure control and concise summary text; verify the catalog is closed on first page load and can be opened without affecting the candidate set.
- [x] 1.2 Render every category as an independently collapsible native disclosure section while retaining its rule checkboxes; verify collapsing one category does not change another category's open state or selections.
- [x] 1.3 Style outer and category disclosure summaries plus generated rule descriptions; verify controls are visually distinguishable and readable in the existing static theme.

## 2. Complete Generated Results

- [x] 2.1 Render each generated rule's title and complete catalog description with DOM text nodes; verify generated output contains the same description shown for each selected rule.

## 3. Browser Verification

- [x] 3.1 Exercise collapsed and expanded catalog flows in a browser, including category toggling and checkbox persistence; verify a feasible generation shows the requested number of complete rule entries without a backend service.
