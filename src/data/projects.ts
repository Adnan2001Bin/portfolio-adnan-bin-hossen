/* =========================================================
   Projects data — projects.ts
   Typed content model for the Work mosaic (Phase 3).

   NOTE (D2): No real project screenshots yet. Each item uses a
   clearly-marked gradient placeholder + label. Swap `image` in
   later (Astro assets) before the Phase 9 polish pass.
   ========================================================= */

export interface MosaicItem {
  /** Stable id */
  id: string;
  /** Project / piece name (shown as overlay label) */
  title: string;
  /** Short tag: type · stack */
  tag: string;
  /**
   * Placeholder gradient (CSS `background` value). Replaced by a real
   * optimized image later. Kept as a string so it can live in data.
   */
  gradient: string;
  /** Optional aspect ratio for the frame (width / height). Default 3/2. */
  aspect?: "3/2" | "1/1" | "4/5" | "16/10";
}

export interface FeaturedProject extends MosaicItem {
  /** One-line outcome / positioning shown near the centerpiece */
  blurb: string;
}

/* ---- Featured centerpiece (wide stadium frame) ---- */
export const featuredProject: FeaturedProject = {
  id: "atlas",
  title: "Atlas — Analytics Platform",
  tag: "SaaS · Next.js · PostgreSQL",
  blurb:
    "A real-time analytics platform serving dashboards to thousands of teams — from data pipeline to pixel.",
  gradient:
    "linear-gradient(135deg, #0b3b2e 0%, #0e9f6e 45%, #34d399 100%)",
  aspect: "16/10",
};

/* ---- Ovals floating around the centerpiece ---- */
export const featuredOvals: MosaicItem[] = [
  {
    id: "orbit",
    title: "Orbit",
    tag: "Design system",
    gradient: "linear-gradient(150deg, #1e293b 0%, #334155 100%)",
    aspect: "1/1",
  },
  {
    id: "ledger",
    title: "Ledger",
    tag: "Fintech · API",
    gradient: "linear-gradient(150deg, #064e3b 0%, #059669 100%)",
    aspect: "1/1",
  },
  {
    id: "pulse",
    title: "Pulse",
    tag: "Realtime · WebSocket",
    gradient: "linear-gradient(150deg, #0c1f3a 0%, #1d4ed8 100%)",
    aspect: "1/1",
  },
];

/* ---- Floating mosaic grid (scattered stadium frames) ---- */
export const mosaicItems: MosaicItem[] = [
  {
    id: "nimbus",
    title: "Nimbus",
    tag: "Cloud IDE · TypeScript",
    gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
  },
  {
    id: "forge",
    title: "Forge",
    tag: "CI/CD · Go",
    gradient: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
  },
  {
    id: "canvas",
    title: "Canvas",
    tag: "Editor · React",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
  },
  {
    id: "beacon",
    title: "Beacon",
    tag: "Monitoring · Rust",
    gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
  },
  {
    id: "harbor",
    title: "Harbor",
    tag: "E-commerce · Astro",
    gradient: "linear-gradient(135deg, #0b3b2e 0%, #0e9f6e 100%)",
  },
  {
    id: "relay",
    title: "Relay",
    tag: "Chat · Node.js",
    gradient: "linear-gradient(135deg, #172554 0%, #2563eb 100%)",
  },
  {
    id: "vault",
    title: "Vault",
    tag: "Auth · JWT",
    gradient: "linear-gradient(135deg, #134e4a 0%, #2dd4bf 100%)",
  },
  {
    id: "quill",
    title: "Quill",
    tag: "CMS · Content",
    gradient: "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)",
  },
  {
    id: "prism",
    title: "Prism",
    tag: "Data viz · D3",
    gradient: "linear-gradient(135deg, #064e3b 0%, #34d399 100%)",
  },
  {
    id: "summit",
    title: "Summit",
    tag: "Portfolio · Motion",
    gradient: "linear-gradient(135deg, #0c1f3a 0%, #1e3a8a 100%)",
  },
  {
    id: "grove",
    title: "Grove",
    tag: "Mobile · Expo",
    gradient: "linear-gradient(135deg, #14532d 0%, #22c55e 100%)",
  },
  {
    id: "atlas-mini",
    title: "Atlas",
    tag: "Dashboard · charts",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
  },
];
