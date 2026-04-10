## Business Requirements

An MVP of a B2B industrial product website as a web application.

The website represents a company similar to Loctite, specializing in:

- Industrial adhesives
- Threadlockers
- Sealants
- Surface treatments
- Bonding solutions for manufacturing

---

## Scope

The website should include only the essential pages:

- Homepage
- About page
- Products page (list)
- Product detail page
- Contact page

Optional (if simple to implement):
- Industries page
- Applications page
- Services page

Do NOT add extra pages or features.

---

## Product Structure

- The website has a fixed set of product categories:
  - Threadlockers
  - Instant Adhesives
  - Structural Adhesives
  - Sealants & Gasketing
  - Surface Treatments

- Each product contains:
  - name
  - description
  - image
  - slug
  - category
  - applications (use cases)
  - key features
  - optional technical specifications (strength, curing time, material compatibility)

- Products are displayed in a clean grid layout

---

## Features

The website should support:

- Viewing product categories
- Viewing product list
- Viewing product detail
- Contact / request quote

Basic interactions only:
- Navigate between pages
- Click product → view detail
- Click CTA → go to contact

Do NOT implement:
- shopping cart
- checkout
- user accounts
- search or filtering (keep it simple)

---

## Internationalization

- The website supports 2 languages:
  - English
  - Vietnamese

- Use route-based locale:
  - `/en`
  - `/vi`

- All text must come from translation files

---

## Data

- Use static dummy data (JSON)
- The app should load with pre-populated sample products (e.g. threadlockers, adhesives)
- No backend or database

---

## UI/UX Requirements

The highest priority is:
- clean
- modern
- professional
- engineering-focused

Design goals:
- Strong visual hierarchy
- Clear product categorization
- Easy navigation
- Responsive (mobile + desktop)

Focus on:
- product clarity
- technical credibility
- industrial trust

---

## Layout

- Global Navbar (logo + menu)
- Global Footer (company info)

Each page should include:
- hero section
- product or content section
- clear CTA

---

## Call-To-Action

The website must include clear CTAs:

- "Request a Quote"
- "Contact Us"
- "Get Technical Support"

CTAs should appear:
- on homepage
- on product pages
- on contact page

---

## Content Behavior

- Content must be clear, technical, and practical
- Avoid vague marketing text
- Focus on:
  - real-world applications
  - engineering use cases
  - problem-solving

Example:
Instead of:
"High quality adhesive"

Use:
"Medium-strength threadlocker designed to prevent loosening due to vibration in metal fasteners"

---

## Applications (Important)

Products should highlight applications such as:

- Automotive assembly
- Electronics manufacturing
- Industrial machinery
- Construction
- Maintenance & repair

Applications should be clearly visible on product pages.

---

## Constraints

- Keep the application simple
- Do not over-engineer
- Do not add unnecessary features
- Do not introduce backend or APIs

---

## Initial State

The website should load with:
- sample company information
- sample industrial products
- fully working navigation

---

## Goal

Deliver a simple but high-quality industrial company website that:
- clearly presents technical products
- demonstrates real-world applications
- builds trust with engineering clients
- encourages users to request a quote or contact sales

---

# Role

You are a senior frontend engineer building a modern industrial B2B website.

Focus on:
- Clean architecture
- Scalable structure
- Maintainable code
- Professional UI/UX
- Technical clarity
- SEO optimization

---

# Tech Stack

- Use Next.js (App Router)
- Use TypeScript
- Use Tailwind CSS for styling
- Use Next.js built-in features whenever possible
- Do NOT use CSS modules unless necessary

---

## Color Scheme

Use a professional industrial color system inspired by engineering brands.

### Primary Color
- Blue (trust, engineering reliability)

Recommended:
- `blue-700` (main)
- `blue-800` (hover)

---

### Secondary Color
- Dark Gray / Slate (industrial tone)

Recommended:
- `slate-700`
- `slate-900`

---

### Accent Color
- Red (technical emphasis, Loctite-style branding)

Recommended:
- `red-600`

Use for:
- CTAs
- highlights
- important actions

---

### Neutral Colors

- Background: `white` or `gray-50`
- Text:
  - Primary: `gray-900`
  - Secondary: `gray-600`
- Borders: `gray-200`

---

### Avoid

- playful or bright colors
- too many gradients
- inconsistent color usage

---

# Architecture

- Pages must be inside `app/`
- Use route-based structure:
  - `app/[locale]/page.tsx`
  - `app/[locale]/products`
  - `app/[locale]/about`
  - `app/[locale]/contact`

- Components:
  - `components/ui`
  - `components/layout`
  - `components/sections`

- Data:
  - Store static data in `data/*.json`
  - Do NOT hardcode large content inside components

---

# Internationalization (i18n)

- Must support multiple languages
- Use `[locale]` routing
- All content from translation files

---

# Coding Standards

- Functional components only
- Small, reusable components
- Clear naming
- No unnecessary complexity

---

# UI/UX Guidelines

- Clean, structured, industrial design
- Prioritize clarity over decoration
- Strong hierarchy and readability
- Subtle interactions only

---

# Product Display Rules

- Products must be data-driven
- Include:
  - name
  - description
  - applications
  - features

- Support product detail pages:
  `app/[locale]/products/[slug]`

---

# Development Behavior

- Only implement requested features
- Do not modify unrelated code
- Keep solutions simple
- Prefer static data

---

# Performance & SEO

- Use Next.js Image
- Semantic HTML
- Clean URLs
- Proper metadata

---

# Constraints

- No unnecessary dependencies
- No over-engineering
- No structure rewrites without reason

---

# Goal

Build a scalable, multilingual, industrial-grade website similar in spirit to Loctite:
- product-focused
- application-driven
- professional and trustworthy