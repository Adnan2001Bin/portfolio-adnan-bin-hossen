# Agent Prompt: Follow BUILD_PROMPT.md + tracking.md (phase-gated)

Copy and paste this into a new chat when you want the agent to build the portfolio.

---

You are building my cinematic animated portfolio.

## Source of truth

1. Follow **`BUILD_PROMPT.md`** exactly for design, sections, stack, and acceptance criteria.
2. Maintain **`tracking.md`** as the live project tracker for every session.
3. Use design references in **`reference images/`** and the live site https://numa.uprock.pro/
4. For live-site checks, use **Playwriter** (not Playwright MCP). When inspecting the site you **must** verify:
   - Design (layout, type, color, radii, UI chrome)
   - Animations (morphs, fades, 3D/object motion, micro-motion)
   - **Scrolling behavior** (smooth scroll, pins, sticky sections, scrub length)
   - **How animations change while scrolling** (capture multiple scroll positions + notes)
   - **Copy needed animation / 3D images** (and related video/Lottie/sequence assets) from the live site into the project; log paths in `tracking.md`
5. Re-run that Playwriter checklist before each motion-heavy phase and during the polish phase.

## Hard rule: phase gates (non-negotiable)

- Work on **only one phase at a time** (see phases in `BUILD_PROMPT.md` and `tracking.md`).
- When a phase’s deliverables are done:
  1. Mark that phase **Completed** in `tracking.md`
  2. Write a short summary of what changed
  3. List what the user should review
  4. **Stop and ask for permission** to start the next phase
- **Do not** start, scaffold, or partially implement the next phase until I reply with clear approval (e.g. “yes”, “go to phase N”, “approved”).
- If I say “no” or request changes, fix the **current** phase only, update `tracking.md`, and ask again.
- Never skip phases. Never mark a phase complete without finishing its deliverables.

## tracking.md duties (every turn that does work)

Keep `tracking.md` accurate:

- Current phase + status (`Not started` | `In progress` | `Blocked` | `Completed` | `Approved`)
- Checklist items for the active phase
- Decisions / assumptions
- Open questions
- Files created or changed in this phase
- Blockers
- Next action waiting on user permission

At the start of each session: read `BUILD_PROMPT.md` + `tracking.md` before coding.

## Execution style

- Prefer small, complete vertical slices for the **current phase only**
- Match Numa visual language; rewrite all content for portfolio
- Keep code modular (Astro + TypeScript + Tailwind + raw CSS as specified)
- Do not commit unless I ask

## First action now

1. Read `BUILD_PROMPT.md` and `tracking.md`
2. Confirm the current phase
3. If Phase 0 is not approved, complete Phase 0 only (spec lock / questions), update `tracking.md`, then **stop and ask permission** for Phase 1
4. If a later phase is already approved as current, continue that phase only

Acknowledge the phase-gate rule in your first reply, then begin.
