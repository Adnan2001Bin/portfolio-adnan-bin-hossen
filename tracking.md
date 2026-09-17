# Portfolio build tracker

> Living status file. The agent must update this whenever work happens.
> **Rule:** never start the next phase without explicit user permission.

## Sources

| File / link | Role |
|-------------|------|
| `BUILD_PROMPT.md` | Full build spec (design, sections, stack) |
| `AGENT_PROMPT.md` | How the agent must operate |
| `reference images/` | Scroll-sequence visual references |
| https://numa.uprock.pro/ | Live design + scroll/animation reference (inspect with Playwriter) |

### Playwriter QA reminder

When checking the live site, verify design, animations, **scrolling behavior**, **scroll-driven animation changes**, and **copy 3D / animation images** into the project (log below).

---

## Current status

| Field | Value |
|-------|-------|
| **Current phase** | 1 — Scaffold |
| **Status** | ✅ Completed — awaiting user approval to start Phase 2 |
| **Last updated** | 2026-09-17 |
| **Waiting on** | User approval to begin Phase 2 (Hero + morph) |

---

## Phase board

| Phase | Name | Status | Approved by user? | Notes |
|------:|------|--------|-------------------|-------|
| 0 | Spec lock | ✅ Approved | Yes | Identity filled, scope confirmed |
| 1 | Scaffold | ✅ Completed | Yes | Astro 5 + TS + Tailwind 4 + tokens + BaseLayout + header shell |
| 2 | Hero + morph | Not started | No | Header + hero + stadium morph |
| 3 | Mosaic + centerpiece | Not started | No | Floating mosaic + featured ovals |
| 4 | Stats + sticky features | Not started | No | Stats cards + sticky split panel |
| 5 | Process systems | Not started | No | Timeline / wave / giant keywords |
| 6 | Case study device | Not started | No | Sticky device + stacked cards |
| 7 | Steps + testimonials | Not started | No | 3 steps + quote overlays |
| 8 | Final CTA + 3D + footer | Not started | No | CTA, 3D accents, footer |
| 9 | Polish pass | Not started | No | Responsive, a11y, motion, perf, Playwriter QA |

**Status values:** `Not started` · `In progress` · `Blocked` · `Completed` · `Approved`

---

## Content identity (confirmed Phase 0)

- **Name:** Adnan Bin Hossen (short: Adnan)
- **Role:** Full-Stack Developer
- **One-line positioning:** Full-stack products that scale cleanly — from interface to API.
- **Location / availability:** Dhaka, Bangladesh
- **Primary CTA:** Hire Me
- **Secondary CTA:** Download CV / Email
- **Socials:**
  - GitHub: https://github.com/Adnan2001Bin
  - LinkedIn: https://www.linkedin.com/in/adnan-bin-hossen/
  - Website: https://adnancodes.tech/
  - Email: adnan2001bin@gmail.com
- **Brand mark / site name:** Adnan (or AB monogram — TBD)
- **Accent color:** Emerald green `#0E9F6E`
  - Accent: `#0E9F6E`
  - Soft: `#34D399`
  - Glow: `#059669`

---

## Active phase checklist

### Phase 1 — Scaffold

- [x] Astro 5 project initialized with TypeScript (strict)
- [x] Tailwind CSS 4 configured via `@tailwindcss/vite` plugin
- [x] Design tokens in `src/styles/tokens.css` (light/dark theme variables)
- [x] Animation keyframes in `src/styles/animations.css` (with reduced-motion)
- [x] Global styles in `src/styles/global.css` (Tailwind 4 @theme, fonts, base resets)
- [x] `src/layouts/BaseLayout.astro` (fonts, global CSS, theme flash prevention, Lenis init)
- [x] `src/components/Header.astro` (floating glass header: Menu · Brand · Toggle · CTA)
- [x] `src/data/navigation.ts` (typed nav items, socials, site config)
- [x] `src/pages/index.astro` (scaffold page with section placeholders)
- [x] Fonts: Space Grotesk (display) + DM Sans (body) via @fontsource-variable
- [x] Dark/light mode: class strategy, CSS vars, localStorage + system pref
- [x] Lenis smooth scroll: deferred init, reduced-motion aware
- [x] GSAP + ScrollTrigger: installed, ready for Phase 2+
- [x] SVG favicon with emerald "A" monogram
- [x] Build passes, dev server starts cleanly (Astro 5.18.2)
- [x] `tracking.md` updated; waiting for permission to start Phase 2

---

## Files touched (this phase)

| File | Action |
|------|--------|
| `package.json` | Created — deps: astro, tailwindcss 4, gsap, lenis, fontsource |
| `astro.config.mjs` | Created — Tailwind Vite plugin |
| `tsconfig.json` | Created — strict, path aliases |
| `src/env.d.ts` | Created — Astro type reference |
| `src/styles/tokens.css` | Created — design tokens (colors, shadows, glass, motion, radii) |
| `src/styles/animations.css` | Created — keyframes + reduced-motion |
| `src/styles/global.css` | Created — Tailwind 4 entry, @theme, base layer |
| `src/data/navigation.ts` | Created — nav items, socials, siteConfig |
| `src/components/Header.astro` | Created — floating glass header shell |
| `src/layouts/BaseLayout.astro` | Created — root layout, fonts, Lenis |
| `src/pages/index.astro` | Created — scaffold homepage |
| `public/favicon.svg` | Created — emerald monogram |
| `tracking.md` | Updated — Phase 0 approved, Phase 1 tracked |

---

## Decisions & assumptions

| # | Decision | Rationale |
|---|----------|-----------|
| D1 | Accent = emerald green `#0E9F6E` (not Numa blue) | User preference; premium emerald replaces electric blue for headlines, active states, gradients, CTA glow |
| D2 | Placeholders for all project screenshots, portrait, and media | No real assets yet; clearly labeled placeholder images; real assets swapped before Phase 9 polish |
| D3 | Copy Numa 3D/animation assets via Playwriter for motion shells | Per BUILD_PROMPT.md §Asset copy; replace lifestyle/branding with portfolio content but keep 3D/device/motion visuals |
| D4 | Font: geometric modern sans (not Inter/Roboto) | Will select during Phase 1 scaffold; candidates: Figtree, Space Grotesk, Outfit, Satoshi, Plus Jakarta Sans |
| D5 | Secondary CTA = Download CV / Email | Standard portfolio pattern |
| D6 | Brand mark = "Adnan" text or AB monogram | Final mark decided during Phase 1/2 |

---

## Open questions (all resolved for Phase 0)

| # | Question | Answer |
|---|----------|--------|
| Q1 | Name, role, positioning? | Adnan Bin Hossen · Full-Stack Developer · "Full-stack products that scale cleanly — from interface to API." |
| Q2 | Project assets ready? | No — use clearly marked placeholders |
| Q3 | Primary CTA label? | Hire Me |
| Q4 | Accent color? | Emerald `#0E9F6E` (with soft `#34D399` and glow `#059669`) |
| Q5 | Social links? | GitHub, LinkedIn, Website, Email |
| Q6 | Location? | Dhaka, Bangladesh |

---

## Files touched (this phase)

| File | Action |
|------|--------|
| `tracking.md` | Updated with content identity, decisions, resolved questions |

---

## Assets copied from numa.uprock.pro

> Fill during Playwriter passes. Prefer `src/assets/reference-from-numa/` or `public/reference-from-numa/`.

| Date | Phase | Source URL | Local path | Type (img / video / lottie / 3D / sequence) | Used in section |
|------|------:|------------|------------|---------------------------------------------|-----------------|
| — | — | — | — | — | — |

---

## Session log

| Date | Phase | Summary |
|------|------:|---------|
| 2026-09-17 | — | Created `BUILD_PROMPT.md`, `AGENT_PROMPT.md`, and `tracking.md` |
| 2026-09-17 | — | Added Playwriter scroll/animation QA + 3D/animation asset-copy requirements |
| 2026-09-17 | 0 | Completed Phase 0: filled content identity (Adnan Bin Hossen, Full-Stack Developer, emerald accent), confirmed placeholders for assets, resolved all open questions, scope matches BUILD_PROMPT.md |
| 2026-09-17 | 1 | Completed Phase 1 Scaffold: Astro 5 + TS + Tailwind 4, design tokens, animations.css, global styles, BaseLayout with Lenis + theme flash prevention, floating glass Header, typed data files, Space Grotesk + DM Sans fonts, dark/light mode, favicon. Build + dev server verified. |

---

## Gate protocol (reminder)

1. Finish current phase deliverables  
2. Mark phase **Completed** here  
3. Summarize + ask user to review  
4. Wait for explicit approval  
5. Only then set next phase to **In progress** and mark previous **Approved**
