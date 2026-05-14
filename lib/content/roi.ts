import type { CtaButton } from "./home";

export type ROIPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  headlineStats: { stat: string; label: string }[];
  savingsSection: {
    eyebrow: string;
    title: string;
    areas: { title: string; stat: string; desc: string; iconKey: string }[];
  };
  mathSection: {
    eyebrow: string;
    title: string;
    body: string;
    cta: CtaButton;
    tableTitle: string;
    rows: { label: string; value: string; sub: string }[];
    summaryLabel: string;
    summaryValue: string;
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const roiDefaults: ROIPageData = {
  metaTitle: "ROI — The Financial Case for Physical AI",
  metaDescription: "Adaptiv delivers 40–60% operational cost reduction and $200K–$1M+ annual savings per large facility. Deployed across 12,000 devices in 6,000+ buildings.",
  hero: {
    eyebrow: "RETURN ON INVESTMENT",
    titleLines: ["It Pays for Itself.", "Then Keeps Paying."],
    body: "Deployed across 12,000 devices in 6,000+ buildings — including Charles de Gaulle Airport and nuclear power plants — Adaptiv delivers 40–60% operational cost reduction. Partners like ABM ($8B+ revenue) and Samsic trust the platform at scale.",
    primaryCta: { label: "Get Your ROI Estimate", href: "/contact" },
    secondaryCta: { label: "See the Numbers →", href: "#savings" },
  },
  headlineStats: [
    { stat: "40–60%", label: "Operational cost reduction across scenarios" },
    { stat: "$200K–$1M+", label: "Annual savings per large facility" },
    { stat: "12,000", label: "Devices across 6,000+ buildings" },
    { stat: "15–20%", label: "Occupant satisfaction improvement" },
  ],
  savingsSection: {
    eyebrow: "WHERE IT ADDS UP",
    title: "Four Cost Centres. One Platform Cutting All of Them.",
    areas: [
      { title: "Energy", stat: "10–30%", desc: "Merlin adjusts HVAC and lighting in real time based on occupancy and weather. Universities have deferred $1M–$5M in new construction through smarter space utilisation alone.", iconKey: "energy" },
      { title: "Maintenance", stat: "40–60%", desc: "Predictive alerts catch leaks in seconds and forecast equipment failures before they happen. A 2,000-space parking structure saves ~1.5 FTE ($45K/yr) and avoids $5K+ per emergency repair.", iconKey: "maintenance" },
      { title: "Operations", stat: "40–55%", desc: "Demand-driven dispatch replaces fixed schedules. A 200-person office with 30 meeting rooms recovers $150K–$250K from ghost bookings alone. Airport terminals cut SLA breaches 50–70%, saving $50K–$200K in contract penalties.", iconKey: "operations" },
      { title: "Healthcare & Compliance", stat: "80%", desc: "Reduction in documentation time with audit-ready compliance evidence. One prevented hospital-acquired infection saves $140K–$450K — and the system catches risks before they escalate.", iconKey: "healthcare" },
    ],
  },
  mathSection: {
    eyebrow: "THREE-TIER VALUE MODEL",
    title: "Start Simple. Scale Into Full Predictive Intelligence.",
    body: "Tier 1 — Smart Display alone: cleaning logs, service requests, satisfaction feedback — instant transparency and accountability.\n\nTier 2 — Add 7 embedded sensors + Merlin AI: operations shift from fixed schedules to demand-driven dispatch.\n\nTier 3 — Add external BLE sensors: full predictive capability — leak detection in seconds, equipment failure forecasting, and audit-ready compliance evidence.",
    cta: { label: "Calculate Your Savings", href: "/contact" },
    tableTitle: "Savings by Vertical",
    rows: [
      { label: "Large office (200 ppl, 30 rooms)", value: "$150K–$250K", sub: "Ghost booking recovery + 40–55% labor reduction" },
      { label: "Airport terminal", value: "$50K–$200K", sub: "50–70% SLA breach reduction, penalty savings" },
      { label: "Healthcare facility", value: "$140K–$450K", sub: "Per prevented infection + 80% doc-time reduction" },
      { label: "University campus", value: "$1M–$5M", sub: "Deferred new construction via space optimisation" },
    ],
    summaryLabel: "Annual savings per large facility",
    summaryValue: "$200K–$1M+",
  },
  finalCta: {
    title: "Ready to See Your Numbers?",
    body: "Tell us about your facility and we'll model your savings across all three tiers — no obligation. Join 6,000+ buildings already on the platform.",
    primaryCta: { label: "Get Your ROI Estimate", href: "/contact" },
    secondaryCta: { label: "Explore Solutions →", href: "/solutions" },
  },
};
