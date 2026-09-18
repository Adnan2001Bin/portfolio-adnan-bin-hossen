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
| **Current phase** | 4 — Stats + sticky features |
| **Status** | ✅ Completed — awaiting user approval to start Phase 5 |
| **Last updated** | 2026-09-19 |
| **Waiting on** | User approval to begin Phase 5 (Process systems) |

---

## Phase board

| Phase | Name | Status | Approved by user? | Notes |
|------:|------|--------|-------------------|-------|
| 0 | Spec lock | ✅ Approved | Yes | Identity filled, scope confirmed |
| 1 | Scaffold | ✅ Approved | Yes | Astro 5 + TS + Tailwind 4 + tokens + BaseLayout + header shell |
| 2 | Hero + morph | ✅ Approved | Yes | Header states + hero section + stadium morph animation |
| 3 | Mosaic + centerpiece | ✅ Approved | Yes | Floating mosaic + featured ovals + parallax |
| 4 | Stats + sticky features | ✅ Completed | Pending | Stats cards + sticky split panel |
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

### Phase 4 — Stats + sticky features

- [x] Playwriter live-site pass on numa.uprock.pro (stats + sticky feature panel):
  - Located sections (stats ~3638px, sticky feature "Wear it easily, trust it daily" ~5731px)
  - Captured feature choreography at multiple scroll positions: left title + divider stays put; vertical 3-item active list (dot on active) + active description swap; right media crossfades; section is PINNED and scrubs through 3 states
  - Reviewed reference images `pw_scroll_2` (stat cards), `pw_scroll_3` (feature panel)
  - Assets: Numa uses lifestyle photos for feature media → NOT copied; placeholder gradients used (D2)
- [x] Created `src/data/content.ts` — typed `stats` (3) + `features` (3) + `featuresHeading`
  - Stat metrics are placeholders to confirm (D15): 6+ yrs / 40+ projects / 99 Lighthouse
- [x] Created `src/components/sections/Stats.astro`:
  - 3 tall gradient cards (emerald→light, dark-mode override → dark surface), big number + superscript unit, dot top-left, caption + description on lighter bottom
  - Staggered entrance on scroll; reduced-motion safe
- [x] Created `src/components/sections/Features.astro` (`#about` anchor):
  - Desktop (lg+): pinned split panel — left headline + divider + 3-item active list + crossfading description; right large rounded media crossfades. GSAP pin + scrub maps scroll progress → active index
  - List items are real `<button role="tab">` — clickable + keyboard accessible (also drives state under reduced motion / no pin)
  - Mobile (< lg): static stacked layout (media + title + desc per feature)
  - Reduced motion: no pin/parallax; click-to-switch still works
- [x] Updated `src/pages/index.astro` — imports + renders `<Stats />` and `<Features />`
- [x] Build passes cleanly (~5.6s, 0 errors)
- [x] Verified in browser (Playwriter, localhost preview):
  - Stats: 3 emerald cards render correctly (dark visual; light verified via DOM — correct gradient + readable dark title text)
  - Features: all 3 states verified — Frontend craft (idx0), Backend systems (idx1), Ship & iterate (idx2 active at scroll confirmed); media crossfades; header scrolled state intact
- [x] `tracking.md` updated; waiting for permission to start Phase 5

### Phase 3 — Mosaic + centerpiece

- [x] Playwriter live-site pass on numa.uprock.pro (mosaic section):
  - Inspected scroll choreography at multiple positions (centerpiece → grid)
  - Confirmed frame geometry: pill `border-radius` (~1040px) + `overflow: hidden` over media; ~1.5:1 aspect; 4-column staggered grid with parallax drift
  - Reviewed reference images `pw_scroll_1` (mosaic/centerpiece)
  - Assets: Numa mosaic uses lifestyle photography → per rules, NOT copied; replaced with portfolio placeholders (D2)
- [x] Created `src/data/projects.ts` — typed content model:
  - `featuredProject` (wide stadium centerpiece), `featuredOvals` (surrounding ovals), `mosaicItems` (12 grid tiles)
  - Placeholder gradients + labels (title + tag), clearly marked (D2)
- [x] Created `src/components/sections/Mosaic.astro`:
  - Section intro (eyebrow + heading + subcopy), `#work` anchor for nav
  - Featured centerpiece: wide stadium frame + 3 floating ovals (absolute, idle float + scroll parallax)
  - Floating mosaic: 4-column staggered grid of stadium tiles, per-column parallax drift (alternating speeds)
  - Reusable `.frame` pattern: pill/stadium mask, sheen overlay, gradient label
  - Entrance reveals (intro, centerpiece scale-in, ovals back.out, tiles random-stagger)
  - Placeholder disclosure line (D2)
  - `prefers-reduced-motion`: no parallax/idle float; static staggered grid
- [x] Updated `src/pages/index.astro` — imports + renders `<Mosaic />`
- [x] Build passes cleanly (~4s, 0 errors)
- [x] Verified in browser via Playwriter (localhost preview): centerpiece + floating ovals + parallax mosaic grid render correctly (dark mode); header transitions to scrolled state
- [x] `tracking.md` updated; waiting for permission to start Phase 4

---

## Files touched (Images — user request)

| File | Action |
|------|--------|
| `public/images/*.jpg` | Added — 20 curated Unsplash dev/tech/UI images |
| `src/data/projects.ts` | Updated — `image` + `alt` on featured/ovals/tiles |
| `src/data/content.ts` | Updated — `image` + `alt` on features |
| `src/components/sections/Hero.astro` | Updated — bg image + gradient scrim; removed placeholder badge |
| `src/components/sections/Mosaic.astro` | Updated — `<img>` in centerpiece/ovals/tiles; removed placeholder disclosure |
| `src/components/sections/Features.astro` | Updated — `<img>` in desktop + mobile media |

## Files touched (Phase 4)

| File | Action |
|------|--------|
| `src/data/content.ts` | Created — typed `stats` + `features` + `featuresHeading` |
| `src/components/sections/Stats.astro` | Created — 3 gradient proof cards (emerald→light, dark override) |
| `src/components/sections/Features.astro` | Created — sticky split panel (pin+scrub, accessible tabs, mobile stacked fallback) |
| `src/pages/index.astro` | Updated — imports + renders `<Stats />` and `<Features />` |
| `tracking.md` | Updated — Phase 3 approved, Phase 4 tracked |

## Files touched (Phase 3)

| File | Action |
|------|--------|
| `src/data/projects.ts` | Created — typed content model (featured + ovals + 12 mosaic tiles), placeholder gradients |
| `src/components/sections/Mosaic.astro` | Created — floating mosaic + featured centerpiece + parallax |
| `src/pages/index.astro` | Updated — imports + renders `<Mosaic />` |
| `tracking.md` | Updated — Phase 2 approved, Phase 3 tracked |

## Files touched (Phase 2)

| File | Action |
|------|--------|
| `src/scripts/smooth-scroll.ts` | Created — Lenis + GSAP ticker sync, reduced-motion aware |
| `src/components/sections/Hero.astro` | Created — hero section with morph animation |
| `src/components/Header.astro` | Rewritten — three visual states (transparent/scrolled/default) |
| `src/layouts/BaseLayout.astro` | Updated — uses shared smooth-scroll module |
| `src/pages/index.astro` | Updated — imports Hero component |
| `tracking.md` | Updated — Phase 1 approved, Phase 2 tracked |

---

## Decisions & assumptions

| # | Decision | Rationale |
|---|----------|-----------|
| D1 | Accent = emerald green `#0E9F6E` (not Numa blue) | User preference; premium emerald replaces electric blue for headlines, active states, gradients, CTA glow |
| D2 | Placeholders for all project screenshots, portrait, and media | No real assets yet; clearly labeled placeholder images; real assets swapped before Phase 9 polish |
| D3 | Copy Numa 3D/animation assets via Playwriter for motion shells | Per BUILD_PROMPT.md §Asset copy; replace lifestyle/branding with portfolio content but keep 3D/device/motion visuals |
| D4 | Font: Space Grotesk (display) + DM Sans (body) | Distinctive geometric sans, not Inter/Roboto |
| D5 | Secondary CTA = Download CV / Email | Standard portfolio pattern |
| D6 | Brand mark = "Adnan" text | Keeping text mark; can upgrade to monogram later |
| D7 | Hero gradient placeholder (dark navy + emerald glows) instead of real portrait | No portrait assets yet; clearly marked with badge |
| D8 | Hero CTA over dark bg = white pill (not accent green) | Matches Numa's white pill CTA over hero; transitions to accent after scroll |
| D9 | Lenis + GSAP sync via shared module `smooth-scroll.ts` | Single init, prevents double rAF loops, properly connects Lenis scroll to ScrollTrigger |
| D10 | Morph uses margin animation (not inset) on hero-frame | More reliable with GSAP; margin on a relatively-positioned block-level element |
| D11 | Mosaic tiles carry small title+tag labels (Numa has none) | Portfolio benefit: visitors need to know what each piece is; kept subtle over gradient scrim |
| D12 | Numa mosaic lifestyle photos NOT copied | Per BUILD_PROMPT asset rules — replace people photography; used placeholder gradients (D2) instead |
| D13 | Column parallax via `margin-top` for stagger + GSAP `y` for drift | Keeps GSAP sole owner of `transform`; avoids inline-transform conflict |
| D14 | Tiles use large rounded-rect radius (not full pill) | Full pill/ellipse would crop bottom labels; large radius preserves stadium feel while keeping labels legible |
| D15 | Stat numbers are placeholder metrics (6+ yrs / 40+ / 99) | No confirmed figures yet; kept believable, editable in `content.ts` — confirm/replace before Phase 9 |
| D16 | Feature panel list items are `<button role="tab">` | Accessibility: keyboard + click switching; also provides the interaction path under reduced motion / non-pinned states |
| D17 | Features desktop pin vs mobile stacked = two data-driven layouts | Cleaner than one layout hacked for both; avoids absolute-media issues on small screens; minimal duplication (content from `content.ts`) |
| D18 | Real images sourced from Unsplash (dev/tech/UI), replacing gradient placeholders in hero + mosaic + features | User request; free license (no attribution required); curated developer/workspace/UI/dashboard/server imagery. Gradients kept behind images as fallback/scrim base. Supersedes placeholder notes D7/D12 for these sections. |
| D19 | Images downloaded locally to `public/images/*.jpg` (not Astro `assets` pipeline yet) | Simplicity across ~20 images / many components; fetched pre-optimized from Unsplash CDN (w-sized, q80). Convert to Astro `<Image>`/AVIF-WebP in Phase 9 polish. |

---

## Open questions (all resolved)

| # | Question | Answer |
|---|----------|--------|
| Q1 | Name, role, positioning? | Adnan Bin Hossen · Full-Stack Developer · "Full-stack products that scale cleanly — from interface to API." |
| Q2 | Project assets ready? | No — use clearly marked placeholders |
| Q3 | Primary CTA label? | Hire Me |
| Q4 | Accent color? | Emerald `#0E9F6E` (with soft `#34D399` and glow `#059669`) |
| Q5 | Social links? | GitHub, LinkedIn, Website, Email |
| Q6 | Location? | Dhaka, Bangladesh |

---

## Assets copied from numa.uprock.pro

> Fill during Playwriter passes. Prefer `src/assets/reference-from-numa/` or `public/reference-from-numa/`.

| Date | Phase | Source URL | Local path | Type (img / video / lottie / 3D / sequence) | Used in section |
|------|------:|------------|------------|---------------------------------------------|-----------------|
| — | — | — | — | — | — |

> Note: Phase 2 hero uses a CSS gradient placeholder, not Numa assets. Numa's hero uses a video (`/f/8481e588bacd48325f27d47baf528b0a_1920.mp4`).
> Note: Phase 3 mosaic tiles/centerpiece use CSS gradient placeholders + labels (D2/D12). Numa's mosaic is lifestyle photography, which per BUILD_PROMPT asset rules must NOT be copied — so nothing copied this phase. Real project visuals to be swapped before Phase 9. 3D/device motion asset copying still planned for Phase 6/8.
> Note: Phase 4 stat cards use gradient treatment (like Numa's). Stat cards remain gradient (they're number cards, not image slots).

## Images added (Unsplash — user request)

> High-quality dev/tech/UI photos (Unsplash license, no attribution required), downloaded to `public/images/`. Replaced gradient placeholders in hero, mosaic, and features. Gradients retained behind images as fallback/scrim. Consider Astro image optimization (AVIF/WebP) in Phase 9.

| Section | File(s) | Subject |
|---------|---------|---------|
| Hero background | `hero-bg.jpg` | Dark code / DevTools screen (emerald scrim over it) |
| Mosaic centerpiece | `work-atlas.jpg` | Analytics dashboard on laptop |
| Mosaic ovals | `work-orbit/ledger/pulse.jpg` | UI design / finance charts / code |
| Mosaic tiles (12) | `work-nimbus/forge/canvas/beacon/harbor/relay/vault/quill/prism/summit/grove/atlas-mini.jpg` | Code, workspaces, data viz, server room, app/UI, dashboards |
| Feature media (3) | `feat-frontend/backend/delivery.jpg` | App UI mockup / green server room / dev workspace |

All 20 images verified loaded in-browser (naturalWidth OK) and visually confirmed rendering across hero, centerpiece, mosaic grid, and feature panel.

---

## Session log

| Date | Phase | Summary |
|------|------:|---------|
| 2026-09-17 | — | Created `BUILD_PROMPT.md`, `AGENT_PROMPT.md`, and `tracking.md` |
| 2026-09-17 | — | Added Playwriter scroll/animation QA + 3D/animation asset-copy requirements |
| 2026-09-17 | 0 | Completed Phase 0: filled content identity (Adnan Bin Hossen, Full-Stack Developer, emerald accent), confirmed placeholders for assets, resolved all open questions, scope matches BUILD_PROMPT.md |
| 2026-09-17 | 1 | Completed Phase 1 Scaffold: Astro 5 + TS + Tailwind 4, design tokens, animations.css, global styles, BaseLayout with Lenis + theme flash prevention, floating glass Header, typed data files, Space Grotesk + DM Sans fonts, dark/light mode, favicon. Build + dev server verified. |
| 2026-09-17 | 2 | Started Phase 2: inspected Numa live site HTML, reviewed reference images for hero morph behavior. Created Hero.astro with gradient bg + entrance animation + GSAP pin/scrub morph. Created smooth-scroll.ts for Lenis+GSAP sync. Rewrote Header with 3 visual states. |
| 2026-09-18 | 2 | Completed Phase 2: fixed hero-section bg for morph reveal, verified build (clean, 4.3s). All deliverables done. |
| 2026-09-19 | 3 | Started + completed Phase 3 Mosaic + centerpiece: Playwriter pass on Numa mosaic (geometry + parallax choreography). Created typed `projects.ts` + `Mosaic.astro` (featured wide-stadium centerpiece + floating ovals + 4-column parallax mosaic grid, reduced-motion aware). Wired into index. Build clean; verified centerpiece + grid in browser. Numa lifestyle photos not copied (placeholders per rules). |
| 2026-09-19 | 4 | Started + completed Phase 4 Stats + sticky features: Playwriter pass on Numa stats + sticky feature panel (pin/scrub choreography). Created `content.ts` + `Stats.astro` (3 emerald gradient proof cards) + `Features.astro` (desktop pinned split with scrub-driven active list + media crossfade, accessible tab buttons, mobile stacked fallback, reduced-motion safe). Wired into index. Build clean; verified all 3 feature states + stats in browser (dark) and light mode via DOM. |
| 2026-09-19 | — | User request: added real high-quality images from the internet (Unsplash) to all image sections. Collected curated dev/tech/UI photo URLs via Playwriter, downloaded 20 images to `public/images/`, added `image`+`alt` to `projects.ts` & `content.ts`, wired `<img>` (object-cover, lazy, alt) into Hero (bg + scrim), Mosaic (centerpiece/ovals/tiles), Features (desktop + mobile media). Removed placeholder badge + disclosure. Build clean; verified all 20 images render in browser. |

---

## Gate protocol (reminder)

1. Finish current phase deliverables  
2. Mark phase **Completed** here  
3. Summarize + ask user to review  
4. Wait for explicit approval  
5. Only then set next phase to **In progress** and mark previous **Approved**
