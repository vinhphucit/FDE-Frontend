---
name: project-structure
description: Enforces a strict Next.js App Router project layout with fixed app routes, component directories, and separated data files. Use when creating, refactoring, or organizing frontend files and folders.
---

# Project Structure

Follow this project structure strictly.

## Base Requirement

- Use Next.js App Router.

## Required Folder Structure

```text
/app
  /page.tsx
  /about/page.tsx
  /products/page.tsx
  /contact/page.tsx

/components
  /ui
  /layout

/data
  products.json
```

## Route and Folder Meanings

- `app/page.tsx`: homepage.
- `app/about/page.tsx`: about page.
- `app/products/page.tsx`: products page.
- `app/contact/page.tsx`: contact page.
- `components/ui`: reusable UI pieces (buttons, cards, and shared UI primitives).
- `components/layout`: layout-level components (navbar, footer).
- `data/products.json`: product data source.

## Rules

- Do not mix logic and UI unnecessarily.
- Keep data separate in `data/`.
- Import data from `data/` instead of hardcoding large content.
- Reuse components whenever possible.
- Do not change this structure unless explicitly asked by the user.

## Implementation Checklist

Use this checklist for any related task:

```markdown
Project Structure Checklist
- [ ] Uses Next.js App Router
- [ ] Keeps required `app/` routes in place
- [ ] Places reusable UI in `components/ui`
- [ ] Places navbar/footer and layout parts in `components/layout`
- [ ] Stores product data in `data/products.json`
- [ ] Imports data instead of hardcoding large content
- [ ] Keeps UI and logic cleanly separated
- [ ] Reuses components where possible
- [ ] Does not alter structure without explicit approval
```
