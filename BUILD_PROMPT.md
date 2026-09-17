# Build Prompt: Cinematic Animated Portfolio (Numa-inspired)

## Goal

Build a production-ready **personal portfolio website** that **copies the visual design language, layout patterns, motion language, and scroll choreography** of https://numa.uprock.pro/ — but **fully rewrites all content, IA, and sections for a portfolio**.

This is a **design adaptation**, not a medical/product clone. Do not reuse Numa copy, product claims, medical imagery, or branding. Reuse: shapes, spacing, typography feel, color roles, section composition, and scroll-driven storytelling.

## Design reference sources (must follow)

1. Live site: https://numa.uprock.pro/
2. Local scroll screenshots in: `./reference images/` (including any `pw_scroll_*.png`)
3. Live-site QA and asset capture must use **Playwriter** (not Playwright MCP) — see below.

### Playwriter live-site checklist (mandatory)

Whenever checking https://numa.uprock.pro/ with **Playwriter**, do **all** of the following — not just a static screenshot of the first fold:

1. **Design**
   - Layout, spacing, radii, typography scale, colors, header pills, glass/frosted UI, layered depth
2. **Animations**
   - Entrance motion, hover states, crossfades, morphing frames, Lottie/micro-motion, 3D object motion
3. **Scrolling behavior**
   - Smooth scroll feel (Lenis-like), pin/scrub sections, sticky columns, how far each pin lasts
4. **Scroll-driven change animations**
   - What changes **as scroll progresses**: hero → stadium mask morph, floating mosaic drift, stats reveal, sticky feature list advancing + media swap, timeline/wave/graph scrub, giant keywords sliding, device mockup screen sync with stacked cards, testimonial card overlays, final CTA glow / 3D focus
   - Capture multiple scroll positions (and short notes on timing/easing) so implementation matches the choreography, not a single frame
5. **Asset copy: animation / 3D images**
   - Identify and **download/copy** from the live site the animation-related and **3D product/visual images** (and image sequences / video / Lottie sources where used) needed to recreate the same motion look
   - Save them under a project folder such as `src/assets/reference-from-numa/` (or `public/reference-from-numa/`) with clear filenames
   - Log every copied asset path in `tracking.md`
   - Use these assets for matching scroll/3D animation behavior in the portfolio UI shells; **replace lifestyle/people photography and all Numa branding/copy** with portfolio content — keep the copied **3D / device / motion** visuals where they power the cinematic effect
   - Prefer network inspection via Playwriter (`page` + response URLs for images/videos/lottie/json) over guessing filenames

Do this Playwriter pass **before coding each motion-heavy phase**, and again during **Phase 9 polish**.

### Core visual system to replicate

- **Stadium / pill geometry** as the main motif (image masks, buttons, floating frames)
- **Extremely large border-radius** on media frames and content panels
- **Generous whitespace**, airy premium layout, strong type hierarchy
- **Floating header**: left pill “Menu”, centered logo/name, right pill primary CTA
- **Frosted / translucent UI pills** over imagery (backdrop blur)
- **Accent green** for major headlines / active states (`#0E9F6E` family — replaces Numa’s electric blue everywhere: headlines, active dots, gradients, final CTA glow)
- **Light surfaces**: white / soft off-white; dark mode as a first-class theme (invert surfaces carefully, keep accent)
- **Layered depth**: oversized text behind media/3D; sticky columns; stacked cards; parallax
- **Cinematic scroll**: morphing hero mask, floating mosaic, sticky feature panels, timeline/graph section, sticky device + stacked cards, testimonial photo+quote overlays, final glowing CTA with 3D focal object
- Font feel: geometric modern sans (Numa uses Figtree) — pick a distinctive expressive sans (not Inter/Roboto/Arial/system). Pair with a clean body face if needed.

## Content identity (fill these)

- Name: `[YOUR NAME]`
- Role: `[e.g. Creative Frontend Engineer / Full-Stack Developer]`
- One-line positioning: `[SHORT HOOK]`
- Location / availability: `[CITY · Open to work / Freelance]`
- Primary CTA: `[View Work / Hire Me / Contact]`
- Secondary CTA: `[Download CV / Email]`
- Socials: `[GitHub, LinkedIn, X, etc.]`
- Theme brand name/logo mark: `[SHORT MARK]`
- Accent color override: `#0E9F6E` (user chose **green** instead of Numa blue; soft `#34D399`; glow `#059669`)

### Portfolio copy rules

- Rewrite every headline/body for a developer/designer portfolio tone
- Keep Numa-like brevity and cinematic confidence
- Prefer real project names, stack, outcomes (metrics if available)
- Use placeholders only if assets are missing, and mark them clearly

## Section map (Numa pattern → Portfolio adaptation)

Implement a single long homepage with these sections in order (names can vary, structure must match):

1. **Hero (full-bleed / rounded frame)**
   - Numa: lifestyle photo + large white headline + subcopy + CTA
   - Portfolio: portrait / atmospheric creative still / abstract 3D scene
   - Headline = positioning statement (not product pitch)
   - Subcopy = who you are + what you build
   - CTA = primary portfolio action
   - Header: Menu | Brand | Contact/Hire

2. **Hero morph / stadium mask transition**
   - On scroll, hero frame morphs into a centered stadium/pill image mask on white (or theme surface)
   - Keep cinematic easing; no jank

3. **Floating mosaic / scattered stadium frames**
   - Numa: lifestyle ovals floating in space
   - Portfolio: project thumbnails, UI crops, workspace/process stills
   - Staggered absolute/grid layout with parallax drift

4. **Featured centerpiece + surrounding ovals**
   - Center: featured project visual or personal brand object
   - Around: related stills / stack icons as imagery (not emoji rows)

5. **Stats / proof strip (3 gradient cards)**
   - Numa: 72 hours / 100 dose / 50%
   - Portfolio examples: years experience / shipped projects / clients or open-source / performance wins
   - Keep blue-to-white atmospheric gradient card treatment

6. **Sticky split feature panel (“Wear it easily…” pattern)**
   - Left: bold blue title + vertical active list (3 items with blue dot)
   - Right: large rounded media that swaps with active item
   - Portfolio mapping: 3 signature strengths OR 3 featured projects
   - Scroll-pinned behavior: list advances while media crossfades

7. **Process / systems section (timeline + wave/graph + giant moving words)**
   - Numa: Basal / Correction / Food recognition with day timeline + wave chart
   - Portfolio: process stages (Discover → Design → Build → Ship) or skill domains
   - Keep oversized blue keywords sliding through, sparse body copy, subtle data viz aesthetic (not fake medical metrics)

8. **Case-study sticky device section (“Managed in one app”)**
   - Left sticky headline
   - Center sticky phone/laptop mockup
   - Right stacked rounded cards that advance on scroll and sync mockup screen
   - Portfolio: one flagship case study (problem → approach → result), 3 cards

9. **How I work / 3 steps**
   - 3 rounded media+text cards (Attach / Connect / Connect → Discover / Design / Deliver)
   - Optional oversized background type behind cards

10. **Testimonials / quotes**
    - Full-bleed rounded photo frames with floating white quote cards (avatar + quote + name + role)
    - 2–3 slides or scroll-stacked cards

11. **Final CTA (“Start living” pattern)**
    - Giant blue phrase behind/around interactive 3D object
    - Soft blue bottom glow
    - Pill CTA + short reassurance line
    - Portfolio: “Let’s build something” / “Available for projects” + Contact CTA

12. **Footer**
    - Compact links, socials, copyright — keep minimal; no clutter

## Navigation / Menu

- Overlay or side frosted menu like Numa
- Links: Home, Work, About, Process, Contact (smooth-scroll anchors)
- Keyboard accessible; Esc closes; focus trap when open

## Technical requirements

### Required stack

- **Astro** (latest) + **TypeScript**
- **Tailwind CSS** + **raw CSS** for complex masks, scroll timelines, theme tokens
- Dark + light mode (class strategy + CSS variables)
- Responsive: mobile, tablet, desktop
- Clean modular components; production-ready

### Recommended additions (include these)

- **Lenis** (or equivalent) smooth scrolling
- **GSAP + ScrollTrigger** for pinned/scrubbed cinematic sections (preferred for this design)
- **Three.js** via Astro client island (vanilla Three or React Three Fiber island) for 1–2 interactive 3D accents (hero object and/or final CTA object) — enhance, don’t dominate
- Optional: Lottie for micro-motion only if it helps
- Astro View Transitions (subtle, not flashy)
- Icon set: Lucide or Phosphor
- Image pipeline: Astro assets / optimized formats (AVIF/WebP), lazy loading
- Content model: typed data files (`src/data/*`) for projects, stats, testimonials, nav

### Architecture expectations

- `src/components/` modular section components
- `src/layouts/BaseLayout.astro`
- `src/styles/tokens.css` (colors, radii, shadows, motion)
- `src/styles/animations.css` for non-Tailwind motion
- Islands only where needed (`client:visible` / `client:idle`) — keep JS minimal
- Prefer CSS/ScrollTrigger over heavy frameworks

## Animation & motion principles

- Smooth, cinematic, performance-conscious
- Pin + scrub key storytelling sections
- Crossfade media, morph border-radius/masks, parallax mosaic, stacked-card advances
- Respect `prefers-reduced-motion`: disable scrub/parallax/3D auto-spin; show static equivalents
- Target 60fps on mid-range laptops; avoid layout thrash; GPU-friendly transforms/opacity

## Accessibility

- Semantic landmarks, heading order
- Keyboard navigation for menu, theme toggle, carousels
- Visible focus states
- Readable contrast in light and dark
- Alt text for meaningful images; decorative images aria-hidden
- Reduced-motion support as above

## Performance

- Fast LCP: prioritize hero image/font strategy
- Subset fonts; preload only critical face
- Defer non-critical JS; code-split islands
- Compress media; no unoptimized multi-MB PNGs in critical path
- Minimize unused JS; no animation libraries for trivial hover if CSS suffices

## Theme

- CSS variables for:
  - `--bg`, `--surface`, `--text`, `--muted`, `--accent`, `--accent-soft`, `--border`, `--shadow`
- Theme toggle in header or menu
- Persist preference (`localStorage`) + system preference fallback

## Responsive behavior

- Desktop: preserve cinematic pinned storytelling
- Tablet: simplify pin distances; keep motif
- Mobile:
  - Convert sticky dual-column sections to vertical stacked flow
  - Keep stadium motif and type hierarchy
  - Touch-friendly targets; no hover-only critical actions
  - Reduce 3D complexity / fallback to stills if needed

## Do / Don’t

### Do

- Match Numa’s proportion, radius language, whitespace, and scroll rhythm
- Make content unmistakably a portfolio
- Use high-quality real project visuals
- Keep one job per section

### Don’t

- Don’t copy Numa medical copy, brand mark, or “Pre-order” product UX literally
- Don’t turn the first viewport into a dashboard of stats/chips/pills clusters beyond the Numa header pattern
- Don’t add purple-glow generic AI aesthetic; stick to Numa’s white + **green accent** system (`#0E9F6E` family, plus dark theme variant)
- Don’t ship without reduced-motion paths

## Phased implementation order (hard gates)

Work **one phase at a time**. Do **not** start the next phase until the user explicitly grants permission.

| Phase | Name | Deliverables |
|------:|------|--------------|
| 0 | Spec lock | Confirm content identity placeholders; note open questions in `tracking.md` |
| 1 | Scaffold | Astro + TS + Tailwind + theme tokens + BaseLayout + header shell |
| 2 | Hero + morph | Header + hero + first stadium morph section matching references |
| 3 | Mosaic + centerpiece | Floating mosaic + featured centerpiece ovals |
| 4 | Stats + sticky features | Stats cards + sticky split feature panel |
| 5 | Process systems | Timeline / wave / giant keywords process section |
| 6 | Case study device | Sticky device + stacked cards case study |
| 7 | Steps + testimonials | 3-step section + testimonial overlays |
| 8 | Final CTA + 3D + footer | Final CTA, interactive 3D accent(s), footer |
| 9 | Polish pass | Responsive, a11y, reduced-motion, performance, Playwriter visual QA |

## Acceptance criteria

- [ ] Visual likeness to Numa’s section choreography is obvious side-by-side with references
- [ ] Playwriter live-site pass verified design, animations, scrolling behavior, and scroll-driven changes
- [ ] Needed animation / 3D images (and related motion assets) copied from the live site and logged in `tracking.md`
- [ ] All text/sections are portfolio-specific
- [ ] Light + dark mode both polished
- [ ] Mobile/tablet/desktop verified
- [ ] Scroll animations feel cinematic but stable
- [ ] At least one interactive 3D accent works without blocking content
- [ ] Fast load mindset: optimized assets, minimal unnecessary JS
- [ ] Keyboard + reduced-motion OK
- [ ] Code is modular TypeScript Astro, ready to deploy
- [ ] Every phase was completed and approved before the next phase started

## Out of scope

- Backend/auth/CMS (unless simple Markdown/content collections)
- Exact pixel-perfect clone of proprietary assets
- Medical product functionality
