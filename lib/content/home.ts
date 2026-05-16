/**
 * Default content for the Home page. Used as the rendering fallback when
 * Sanity has no `homePage` document yet, and as the source-of-truth that
 * the seed script writes into Sanity on first run.
 *
 * Editing copy here directly is fine until Sanity is wired up — once it
 * is, edits should happen in /studio (which writes to Sanity) and these
 * defaults stay only as a safety net.
 */

export type CtaButton = { label: string; href: string };
export type FeatureBadge = { label: string; dotColor: string };
export type Trait = {
  num?: string;
  title: string;
  body: string;
  color: string;
  icon: string;
};
export type UseCase = {
  num: string;
  title: string;
  color: string;
  body: string;
  points: string[];
};
export type SensorSpec = { label: string; value: string };

export type HomePageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    gradientWord: string;
    bodyPrimary: string;
    bodySecondary: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    chips: FeatureBadge[];
    heroImagePrimary: string;
    heroImagePrimaryAlt: string;
    heroImageSecondary: string;
    heroImageSecondaryAlt: string;
    heroComposite?: string;
    heroCompositeAlt?: string;
    heroCompositeMaxWidthPx?: number;
    heroCompositeRoundedOverride?: "inherit" | "on" | "off";
    heroCompositeShadowOverride?: "inherit" | "on" | "off";
  };
  physicalAI: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    definition: string;
  };
  deviceShowcase: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    imageRoundedOverride?: "inherit" | "on" | "off";
    imageShadowOverride?: "inherit" | "on" | "off";
    sensorStrip: SensorSpec[];
  };
  merlinIntro: {
    sectionNumber: string;
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  traits: Trait[];
  useCasesIntro: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
  };
  useCases: UseCase[];
  differencesSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
  };
  differences: { text: string }[];
  finalCta: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const homeDefaults: HomePageData = {
  metaTitle: "Adaptiv Systems — Physical AI for the buildings of the world",
  metaDescription:
    "Merlin is a new kind of operating layer for physical spaces — a fleet of specialized AI agents reasoning continuously over real-world signals from the buildings of the world. Deployed in 6,000+ buildings worldwide over the past five years.",
  hero: {
    eyebrow: "AN ADAPTIV SYSTEMS PRODUCT",
    titleLines: ["Physical AI for", "the Buildings"],
    gradientWord: "of the World.",
    bodyPrimary:
      "Merlin is a new kind of operating layer for physical spaces — a fleet of specialized AI agents reasoning continuously over the real-world signals coming from your buildings, and closing the loop between what's happening and what should be done about it.",
    bodySecondary:
      "Adaptiv designs and builds the devices that capture those signals — Smart Displays, sensors, and connected hardware deployed in more than 6,000 buildings worldwide over the past five years. Merlin is the AI layer built on top of that foundation.",
    primaryCta: { label: "Meet Merlin", href: "/merlin" },
    secondaryCta: { label: "See the Smart Display →", href: "/devices" },
    chips: [
      { label: "6,000+ buildings", dotColor: "#FF00B2" },
      { label: "5+ years of telemetry", dotColor: "#14b8a6" },
      { label: "Global coverage", dotColor: "#3b82f6" },
      { label: "Full stack ownership", dotColor: "#a855f7" },
    ],
    heroImagePrimary: "/merlin-dashboard-hero.png",
    heroImagePrimaryAlt:
      "Merlin dashboard — occupancy, battery level and building analytics",
    heroImageSecondary: "/merlin-chat-hero.png",
    heroImageSecondaryAlt:
      "Merlin AI co-worker — conversation and building intelligence interface",
  },
  physicalAI: {
    sectionNumber: "// 01",
    eyebrow: "THE SHIFT WE'RE BETTING ON",
    titleLines: ["AI is moving into", "the physical world."],
    body: "AI has spent its first decade living in software. The next decade is different. Physical AI isn't about smarter chatbots — it's about agents that perceive real-world signals, reason about them in context, and take action that affects the physical environment. Buildings are where this shift starts. They generate continuous telemetry, they require continuous decisions, and they are the perfect domain for AI that doesn't just observe but operates.",
    definition: "Smart Display · Sensor Library · Agent Library · Chat Layer",
  },
  deviceShowcase: {
    sectionNumber: "// 02",
    eyebrow: "THE FACE OF PHYSICAL AI",
    title: "The Adaptiv Smart Display",
    body: "Most AI systems are invisible. Physical AI has to be different. The Smart Display is where Merlin's intelligence becomes visible — at eye level, in the corridor, in the restroom, in the lobby. It is uniquely a sensor (7 embedded sensors + NFC), a gateway (aggregating wireless peripherals over its own LTE), and an interface (showing occupants what's happening and enabling one-tap service) — all at once. Because it runs on battery and e-ink, it installs anywhere without power infrastructure.",
    image: "/smart-displays-hero.png",
    imageAlt: "Adaptiv Smart Display — the face of Merlin on the wall",
    sensorStrip: [
      { label: "Sensor", value: "7 embedded · NFC verification" },
      { label: "Gateway", value: "Wireless peripheral mesh · LTE uplink" },
      { label: "Interface", value: "Merlin in real time · one-tap service" },
      { label: "Install", value: "Battery + e-ink · no infrastructure" },
    ],
  },
  merlinIntro: {
    sectionNumber: "// 03",
    eyebrow: "MERLIN — A FLEET OF SPECIALIZED AGENTS",
    titleMain: "Not one giant model.",
    titleHighlight: "A coordinated fleet of specialists.",
    body: "Specialized agents are scoped tightly to a single operational concern — Cleaning, HVAC, Cold-chain, Pharmacy temperature, Security, Parking — each carrying the domain knowledge, regulatory constraints, and action vocabulary of its area. The HVAC agent thinks about HVAC. The cold-chain agent thinks about cold-chain. They don't try to be each other. The whole system gets smarter agent by agent, domain by domain, rather than as one big bet that has to be right about everything at once.",
    ctaLabel: "Inside an agent's loop →",
    ctaHref: "/merlin",
  },
  traits: [
    {
      num: "01",
      title: "Sense",
      body: "The agent reads the world. Telemetry from sensors, status from devices, recent events, the building's schedule. Not a snapshot — a continuous stream.",
      color: "#FF00B2",
      icon: "circle-filled",
    },
    {
      num: "02",
      title: "Reason",
      body: "The agent applies its domain knowledge. Is this normal? Is this drifting? Is this an emergency? It carries the vertical's constraints — what's acceptable in a warehouse is not acceptable in a clinic.",
      color: "#a855f7",
      icon: "diamond",
    },
    {
      num: "03",
      title: "Decide & Act",
      body: "Sometimes that's nothing — keep watching. Sometimes it's alert a human. Sometimes it's dispatch the contractor responsible. Sometimes it's auto-execute, log it, move on. The action is real and recorded.",
      color: "#14b8a6",
      icon: "target",
    },
    {
      num: "04",
      title: "Measure",
      body: "The agent watches what happens next. Did the contractor respond? Did the issue resolve? The outcome feeds back into the agent's understanding of its domain — and into the accountability of the people who executed.",
      color: "#3b82f6",
      icon: "square-diamond",
    },
  ],
  useCasesIntro: {
    sectionNumber: "// 04",
    eyebrow: "THE MERLIN AGENT LIBRARY",
    titleLines: ["Specialized agents.", "Each one expert.", "Coordinating."],
  },
  useCases: [
    {
      num: "// 01",
      title: "Cleaning agent",
      color: "#FF00B2",
      body: "Reads cleaning telemetry, missed-check sensors, occupancy patterns, and SLA terms. Decides when human dispatch is warranted, when the situation can wait, and when a recurring pattern suggests a deeper accountability problem.",
      points: [
        "Demand-driven dispatch, not fixed schedules",
        "Missed-check pattern detection",
        "SLA-aware decision making",
        "Closes the loop with contractor execution",
      ],
    },
    {
      num: "// 02",
      title: "HVAC agent",
      color: "#14b8a6",
      body: "Watches comfort-band drift, equipment behavior, and energy patterns. Flags anomalies before they become failures. Distinguishes seasonal variation from equipment degradation. Schedules predictive maintenance.",
      points: [
        "Early anomaly detection",
        "Seasonal variation vs equipment degradation",
        "Predictive maintenance scheduling",
        "Energy pattern awareness",
      ],
    },
    {
      num: "// 03",
      title: "Cold-chain agent",
      color: "#22c55e",
      body: "Monitors temperature-controlled storage end-to-end. Catches deviations the moment they cross compliance thresholds. Knows the regulatory regime — pharmaceutical, food, biological — for whatever's being stored.",
      points: [
        "Threshold-crossing detection in seconds",
        "Pharma · food · biological regimes",
        "Transient vs actual failure recognition",
        "Audit-grade event trail",
      ],
    },
    {
      num: "// 04",
      title: "Pharmacy temperature agent",
      color: "#6366f1",
      body: "Purpose-built for clinical refrigeration. Continuous compliance with the regulatory standards governing medication storage. Audit-grade traceability for every reading and every action.",
      points: [
        "Clinical refrigeration specialization",
        "Continuous compliance monitoring",
        "Audit-grade traceability",
        "Per-reading, per-action records",
      ],
    },
    {
      num: "// 05",
      title: "Security agent",
      color: "#3b82f6",
      body: "Watches access patterns, anomalies, and incident signals. Distinguishes routine from suspicious. Coordinates response when something requires it, with the full event trail attached.",
      points: [
        "Pattern-based anomaly detection",
        "Routine vs suspicious classification",
        "Coordinated incident response",
        "Full audit trail by default",
      ],
    },
    {
      num: "// 06",
      title: "Parking agent",
      color: "#f59e0b",
      body: "Tracks occupancy across lots and garages, identifies underutilized zones, detects violations and reserved-spot misuse. Surfaces capacity intelligence in real time and feeds live availability back to the Smart Displays at entrances so drivers know where to go before they circle.",
      points: [
        "Live occupancy across lots and garages",
        "Underutilized zone identification",
        "Reserved-spot misuse detection",
        "Wayfinding via entrance Smart Displays",
      ],
    },
  ],
  differencesSection: {
    sectionNumber: "// 05",
    eyebrow: "THE FOUNDATION",
    titleLines: ["The hardware came first.", "The AI is built on the data."],
  },
  differences: [
    {
      text: "Adaptiv designs, manufactures, and operates its own devices — Smart Displays, sensors, and connected hardware purpose-built for the physical environments they serve",
    },
    {
      text: "Deployed in more than 6,000 buildings worldwide over the past five years — corporate headquarters, warehouses, healthcare, banking branches, government and institutional spaces",
    },
    {
      text: "A continuous real-world data foundation: five-plus years, global coverage across climates, building stocks, regulatory regimes, and how spaces are actually used",
    },
    {
      text: "Every specialized agent in Merlin is grounded in that foundation — credible from day one, applying years of physical-world judgment to the specific operational picture you give it",
    },
    {
      text: "The full stack is ours — hardware, devices, data, AI. Software-only competitors can build agents. They can't ground them in telemetry from hardware they own and operate",
    },
  ],
  finalCta: {
    eyebrow: "THE BET",
    titleLines: [
      "Buildings are the first place we proved it.",
      "Buildings are not the limit.",
    ],
    body: "The companies that figure out physical AI will be the companies that built the operating layer for the physical world — the equivalent of what the cloud-computing platforms became for software in the last era. Merlin is one of the early reference implementations of that layer.",
    primaryCta: { label: "Read the full thesis →", href: "/merlin" },
    secondaryCta: { label: "Talk to us", href: "/contact" },
  },
};
