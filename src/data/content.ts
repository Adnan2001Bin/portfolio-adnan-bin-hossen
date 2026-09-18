/* =========================================================
   Content data — content.ts
   Typed content for the Stats proof strip (Phase 4) and the
   sticky Features split panel (Phase 4).

   NOTE (D2/D15): Stat numbers are placeholder metrics — confirm/replace
   with real figures before Phase 9. Feature media use gradient
   placeholders until real project stills exist.
   ========================================================= */

/* ---- Stats / proof strip ---- */
export interface Stat {
  /** Big headline number */
  value: string;
  /** Small superscript unit next to the number */
  unit: string;
  /** Bold caption under the number */
  title: string;
  /** Supporting sentence */
  desc: string;
}

export const stats: Stat[] = [
  {
    value: "6",
    unit: "+ yrs",
    title: "Full-stack experience",
    desc: "Years designing and shipping web products end to end, from first commit to production.",
  },
  {
    value: "40",
    unit: "+",
    title: "Projects shipped",
    desc: "Apps, APIs, and interfaces delivered for startups, teams, and open source.",
  },
  {
    value: "99",
    unit: "/100",
    title: "Median Lighthouse score",
    desc: "Performance-first builds — fast loads, smooth motion, accessible by default.",
  },
];

/* ---- Sticky feature split panel ---- */
export interface Feature {
  id: string;
  /** Short label shown in the vertical active list */
  label: string;
  /** Headline for the active description */
  title: string;
  /** Body copy for the active description */
  desc: string;
  /** Gradient behind the media (fallback + scrim base) */
  gradient: string;
  /** Cover image path (served from /public) */
  image: string;
  /** Alt text for the image */
  alt: string;
}

export const featuresHeading = {
  eyebrow: "How I build",
  title: "Built to scale, made to last",
};

export const features: Feature[] = [
  {
    id: "frontend",
    label: "Frontend craft",
    title: "Interfaces that feel alive",
    desc: "Accessible, animated, pixel-precise UIs built with modern frameworks — motion and detail that never gets in the way of usability.",
    gradient:
      "linear-gradient(140deg, #0b3b2e 0%, #0e9f6e 55%, #34d399 100%)",
    image: "/images/feat-frontend.jpg",
    alt: "Colorful user interface design on a screen",
  },
  {
    id: "backend",
    label: "Backend systems",
    title: "APIs built to scale",
    desc: "Typed services, clean data models, and resilient architecture — the invisible layer that keeps products fast and reliable as they grow.",
    gradient:
      "linear-gradient(140deg, #0c1f3a 0%, #1e3a8a 60%, #2563eb 100%)",
    image: "/images/feat-backend.jpg",
    alt: "Server room with network cabling lit in green",
  },
  {
    id: "delivery",
    label: "Ship & iterate",
    title: "From commit to production",
    desc: "CI/CD, testing, monitoring, and performance budgets — a delivery pipeline that turns ideas into shipped features with confidence.",
    gradient:
      "linear-gradient(140deg, #134e4a 0%, #0f766e 55%, #2dd4bf 100%)",
    image: "/images/feat-delivery.jpg",
    alt: "Developer workspace with code on multiple monitors",
  },
];
