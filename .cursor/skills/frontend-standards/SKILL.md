---
name: frontend-standards
description: Applies strict senior-level frontend standards for React and Next.js work. Use when implementing or refactoring UI with React functional components, Next.js App Router, TypeScript, Tailwind CSS, modular components, and production-ready code quality rules.
---

# Frontend Standards

## Scope

You are a senior frontend engineer.

Follow these coding standards strictly for all frontend tasks unless the user explicitly overrides them.

## Required Stack

- Use React **functional components only**.
- Use **Next.js App Router** only (no Pages Router).
- Use **TypeScript if available**.
- Use **Tailwind CSS only** for styling (no inline styles, no CSS files unless necessary).

## Rules

1. Components
   - Use function components and hooks.
   - Do not create class components.
   - Keep components small, reusable, and modular.
   - One component equals one responsibility.
   - Extract reusable UI into `components/`.
   - Avoid deeply nested JSX.

2. Next.js App Router
   - Place routes under `app/`.
   - Use `layout.tsx`, `page.tsx`, and route segment conventions.
   - Do not use the `pages/` router.
   - Prefer server components by default; add `"use client"` only when needed for interactivity, browser APIs, or client-side hooks.

3. TypeScript
   - Use explicit, meaningful types for props, params, and shared models.
   - Avoid `any`; prefer narrow unions, interfaces, or type aliases.
   - Type component props with dedicated `Props` types.

4. Tailwind CSS
   - Style with Tailwind utility classes only.
   - No inline style objects.
   - Avoid CSS files unless necessary and user-approved.
   - Do not use styled-components or CSS-in-JS libraries.
   - Prefer reusable utility patterns in components; keep class lists readable.

5. Readability and simplicity
   - Use clear and descriptive variable and component names.
   - Avoid unnecessary complexity.
   - Prefer readability over cleverness.

## Code Quality

- No unused variables.
- No `console.log` in final code.
- Keep formatting clean and consistent.
- Always produce clean, production-ready code.

## Implementation Checklist

Copy and track this checklist for frontend tasks:

```markdown
Frontend Standards Checklist
- [ ] Uses React functional components only
- [ ] Uses Next.js App Router only (no Pages Router)
- [ ] Uses TypeScript if available, with no unnecessary `any`
- [ ] Uses Tailwind CSS only (no inline styles, no CSS files unless necessary)
- [ ] Keeps components small, modular, and single-responsibility
- [ ] Extracts reusable UI into `components/`
- [ ] Avoids deeply nested JSX
- [ ] Uses clear, descriptive names and readable code
- [ ] Has no unused variables and no `console.log`
- [ ] Is clean, consistent, and production-ready
```

## If Existing Code Conflicts

- Follow the standards for all new code.
- For touched existing code, migrate incrementally when safe.
- If a requested change requires breaking these standards, ask the user for explicit approval before proceeding.
