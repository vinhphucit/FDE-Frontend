---
name: refactoring-mode
description: Guides safe refactoring focused on readability, reuse, and structure while preserving existing functionality. Use when improving existing frontend code without changing behavior.
---

# Refactoring Mode

You are in refactoring mode.

## Rules

- Improve code quality without changing functionality.
- Make code cleaner, more readable, and more reusable.
- Remove duplication.
- Improve structure and naming.

## Constraints

- Do not break existing features.
- Do not introduce unnecessary complexity.
- Do not rewrite everything unless explicitly asked.

## Focus Areas

- Better component structure.
- Cleaner JSX.
- Improved Tailwind usage.

## Refactoring Approach

1. Identify high-impact low-risk improvements first.
2. Prefer incremental edits over broad rewrites.
3. Keep external behavior and interfaces stable unless requested.
4. Consolidate repeated UI patterns into reusable components when safe.
5. Keep Tailwind class usage consistent and readable.

## Implementation Checklist

Use this checklist during refactors:

```markdown
Refactoring Checklist
- [ ] Functionality remains unchanged
- [ ] Existing features remain intact
- [ ] Duplication is reduced
- [ ] Naming and structure are improved
- [ ] Components are cleaner and more reusable
- [ ] JSX is easier to read and maintain
- [ ] Tailwind usage is cleaner and more consistent
- [ ] No unnecessary complexity introduced
- [ ] No full rewrite unless explicitly requested
```
