## Slidez Landing Page – System Architecture

This document gives a high-level overview of how the landing page app is structured and what the most important files are responsible for.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS 4 + custom utility classes
- **UI**: Custom sections/components, shadcn-inspired primitives
- **Analytics**: Google Analytics 4 + Microsoft Clarity

---

## High-Level Architecture

- `**app/`**: Route definitions, metadata, and top-level layout for the marketing site.
- `**components/**`: Reusable UI, sections, and templates used across multiple routes.
- `**lib/**`: Small utility modules (e.g. analytics helpers, shared schemas).
- `**next.config.ts**`: Runtime and security-related headers for all routes.

The main flow for a page:

1. `**app/layout.tsx**` wraps every page with global metadata, fonts, HTML shell, and analytics.
2. `**app/page.tsx**` (or another `app/.../page.tsx`) renders the page content using sections from `components/`.
3. `**components/Analytics.tsx**` injects GA4 + Clarity scripts at the document level.
4. `**lib/gtag.ts**` centralizes GA4 configuration and provides typed event helpers.

---

## Important Files – App Router (`app/`)

- `**app/layout.tsx**`
  - Global HTML shell and metadata for the entire site.
  - Sets font (`Geist`), `<html lang="en" className="dark">`, and `<body>` classes.
  - Injects JSON-LD for organization, website, and the mobile app.
  - Renders the shared `<Analytics />` component at the bottom of the body.
- `**app/page.tsx**`
  - Home page that stitches together the core marketing sections.
  - Uses `Navbar`, `Hero`, `Features`, `HowItWorks`, `ChromeExtension`, `FAQ`, `CTA`, and `Footer`.
  - Uses `next/dynamic` for below-the-fold sections to keep initial bundle small.
  - Configures per-page `metadata` (canonical URL, robots behavior).
- `**app/globals.css**`
  - Global Tailwind layers and base styles.
  - Shared layout, typography, and custom utility classes used across pages.
- **Outfit/feature pages (examples)**
  - `**app/ai-stylist/page.tsx`**
  - `**app/ai-virtual-try-on/page.tsx**`
  - `**app/outfit-ideas/page.tsx**`, `**app/what-to-wear/page.tsx**`, etc.
  - Each page focuses on a specific use case (AI stylist, virtual try-on, outfit ideas).
  - Typically imports a shared template from `components/templates/` and passes configuration for copy, images, and SEO.
- **Placeholder marketing/legal/blog routes**
  - `**app/(placeholder)/layout.tsx`**
  - `**app/(placeholder)/about/page.tsx**`
  - `**app/(placeholder)/blog/page.tsx**`
  - `**app/(placeholder)/faq/page.tsx**`
  - `**app/(placeholder)/terms/page.tsx**`
  - `**app/(placeholder)/privacy/page.tsx**`
  - `**app/(placeholder)$page/page.tsx**`
  - Skeleton or simple pages reserved for future content; keep routing structure ready without fully implemented copy.
- `**app/opengraph-image.tsx**`
  - Generates the Open Graph image that is referenced in global metadata.
  - Ensures consistent share images across routes.
- `**app/sitemap.ts` / `app/robots.ts**`
  - `sitemap.ts`: Declares the URLs that should be discoverable by search engines.
  - `robots.ts`: Controls crawling behavior for bots and search engines.

---

## Important Files – Components (`components/`)

### Layout and Page Sections

- `**components/sections/Navbar.tsx**`
  - Top navigation bar with brand identity and primary CTAs.
- `**components/sections/Hero.tsx**`
  - Above-the-fold hero section used on the home page.
  - Communicates the core value proposition of Slidez.
- `**components/sections/Features.tsx**`
  - Feature grid highlighting AI stylist, virtual try-on, and core benefits.
- `**components/sections/HowItWorks.tsx**`
  - Explains the key steps in using the product (input → AI styling → virtual try-on).
- `**components/sections/ChromeExtension.tsx**`
  - Dedicated section for promoting the Chrome extension.
- `**components/sections/FAQ.tsx**`
  - Frequently asked questions for the home page.
- `**components/sections/CTA.tsx**`
  - Final call-to-action block driving app downloads.
- `**components/sections/Footer.tsx**`
  - Site-wide footer: links to legal pages, social accounts, and app store links.
- `**components/sections/BrandsStrip.tsx**`
  - Visual strip of brands/retailers used for social proof.
- `**components/sections/HowItWorks.tsx**`
  - Step-by-step explanation of how the AI stylist and try-on flow works.
- `**components/sections/AIStylistLinks.tsx**`
  - Cross-links to AI stylist related routes for better internal navigation.

### Reusable Templates

- `**components/templates/OutfitIdeasTemplate.tsx**`
  - Shared template used by multiple outfit idea pages.
  - Takes an `OutfitPageConfig` and renders:
    - AI stylist hero + embedded `StylistTool`.
    - “Ways to Style” cards, “What Goes With” content.
    - Benefits, FAQs, popular outfit ideas, and related pages.
  - Injects structured data (JSON-LD) with shared app schema, FAQ schema, breadcrumbs, and web page schema.
- `**components/templates/OutfitIdeasHubTemplate.tsx**`
  - Hub page for browsing multiple outfit idea topics from a single surface.
- `**components/templates/WhatToWearTemplate.tsx**`
  - Template specialized for “What to wear” search-intent pages.

### Feature Components

- `**components/features/ai-stylist/StylistTool.tsx**`
  - Core interactive component used on AI stylist/outfit idea pages.
  - Handles user input for occasions and style preferences and renders AI-powered suggestions.

### UI Primitives

- `**components/ui/button.tsx**`
  - Reusable button component with variants (e.g. primary, outline).
  - Used for CTAs across the site for consistent look and feel.
- `**components/ui/badge.tsx**`
  - Small badge/pill used for labels and highlights.
- `**components/ui/glowing-effect.tsx**`
  - Decorative glow effect used in hero and other highlight sections.
- `**components/ui/floating-styler.tsx**`
  - Floating card/CTA surface showcasing the stylist tool in a compact layout.

### Analytics

- `**components/Analytics.tsx**`
  - Client-side component that injects:
    - GA4 script (`gtag.js`) if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured.
    - GA4 initialization script (`dataLayer`, `gtag('config', ...)`).
    - Microsoft Clarity script for session replay.
  - Rendered once in `app/layout.tsx`, so it applies to all pages.

---

## Important Files – Libraries (`lib/`)

- `**lib/gtag.ts**`
  - Exposes `GA_ID` (via `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID`).
  - Declares a global `window.gtag` and `window.dataLayer` shape for TypeScript.
  - Provides helpers:
    - `trackDownloadClick`
    - `trackExtensionClick`
    - `trackStylistDemoSubmit`
  - These helpers should be used from UI components instead of calling `gtag` directly.
- `**lib/outfit-pages**` (folder, referenced by templates)
  - Exports the `OutfitPageConfig` type.
  - Provides shared JSON-LD generators:
    - `sharedSoftwareAppSchema`
    - `generateFaqSchema`
    - `generateBreadcrumbSchema`
    - `generateWebPageSchema`
  - Central place for SEO configuration and schema logic for programmatic outfit pages.

---

## Configuration and Runtime

- `**next.config.ts**`
  - Defines HTTP security headers that apply to all routes:
    - `X-Content-Type-Options: nosniff`
    - `X-Frame-Options: DENY`
    - `X-XSS-Protection: 1; mode=block`
    - `Referrer-Policy: strict-origin-when-cross-origin`
    - `Permissions-Policy` restricting camera, microphone, and geolocation.
  - In non-production environments, adds `X-Robots-Tag: noindex, nofollow` to avoid accidental indexing.
- `**tsconfig.json**`
  - TypeScript compiler options and path aliases (e.g. `@/components`, `@/lib`).
- `**package.json**`
  - Scripts for `dev`, `build`, `start`, and `lint`.
  - Lists framework and tooling versions to keep local/CI environments consistent.

---

## How to Add a New Marketing Page

1. **Create the route**
  - Add a new file under `app/.../page.tsx`.
2. **Reuse templates and sections**
  - Prefer using `components/templates/`* and `components/sections/*` for layout and content.
3. **Hook into analytics**
  - Use helpers from `lib/gtag.ts` for any key interactions you want to track.
4. **Keep SEO consistent**
  - Set `metadata` on the page and reuse the JSON-LD generators from `lib/outfit-pages` where appropriate.

