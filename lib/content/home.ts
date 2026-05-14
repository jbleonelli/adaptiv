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
  metaTitle: "The AI That Shows Up",
  metaDescription:
    "Merlin sees everything in your building. It understands every situation. It acts — automatically.",
  hero: {
    eyebrow: "Physical AI · Built by Adaptiv",
    titleLines: ["Meet Your", "New"],
    gradientWord: "Co-Worker.",
    bodyPrimary:
      "Merlin monitors every space continuously — air quality, occupancy, supply levels, cleaning history — and acts before anyone notices something needs doing.",
    bodySecondary:
      "Deployed across 6,000+ buildings. Powered by the Adaptiv Smart Display — designed, manufactured, and connected by us.",
    primaryCta: { label: "Meet Merlin", href: "/merlin" },
    secondaryCta: { label: "See the Smart Display →", href: "/devices" },
    chips: [
      { label: "LTE built-in", dotColor: "#FF00B2" },
      { label: "3-year battery", dotColor: "#14b8a6" },
      { label: "Built in US & Europe", dotColor: "#3b82f6" },
      { label: "64-sensor gateway", dotColor: "#a855f7" },
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
    eyebrow: "A New Kind of AI",
    titleLines: ["AI That Lives in", "the Real World"],
    body: "Buildings are where 90% of humanity spends 90% of its time — complex physical systems with thousands of variables managed by intuition and fixed schedules. Merlin is the intelligence layer that perceives every space, reasons about what needs to happen next, and acts — dispatching teams, reordering supplies, generating compliance evidence.",
    definition: "Smart Displays · Sensors · Cameras · Merlin AI",
  },
  deviceShowcase: {
    sectionNumber: "// 02",
    eyebrow: "The Face of Merlin",
    title: "The Adaptiv Smart Display",
    body: "Simultaneously a sensor (7 embedded sensors + NFC verification), a gateway (aggregating up to 64 BLE sensors over LTE), and an interface (showing occupants real-time air quality, cleaning status, and enabling one-tap service requests). No other device in the built environment plays all three roles at once.",
    image: "/smart-displays-hero.png",
    imageAlt: "Adaptiv Smart Display Classic, 26 and 26 Ultra",
    sensorStrip: [
      { label: "Air Quality", value: "CO₂ · VOC · PM2.5" },
      { label: "Temperature & Humidity", value: "±0.1°C · ±1% RH" },
      { label: "Luminosity", value: "0–100,000 lux" },
      { label: "Cleaning log", value: "Auto-dispatched by Merlin" },
    ],
  },
  merlinIntro: {
    sectionNumber: "// 03",
    eyebrow: "Your Most Dedicated Team Member",
    titleMain: "Merlin Is Not Software.",
    titleHighlight: "Merlin Is a Co-Worker.",
    body: "A facility manager checks thirty spaces in a shift. Merlin monitors every space simultaneously — cleaning history, air quality, foot traffic, supply levels, satisfaction trends — and acts in real time. When VOC readings spike, it reroutes the nearest team. When a room sits empty despite a booking, it releases it. The co-worker who handles the thousand small decisions that keep a building running.",
    ctaLabel: "Explore Merlin →",
    ctaHref: "/merlin",
  },
  traits: [
    {
      num: "01",
      title: "Sees Everything",
      body: "VOC levels spike in a restroom after lunch rush. CO₂ rises in an unbooked conference room. A soap dispenser drops below 20%. Merlin sees it all — across every space, every floor, simultaneously.",
      color: "#FF00B2",
      icon: "circle-filled",
    },
    {
      num: "02",
      title: "Understands Context",
      body: "CO₂ rising + noise detected + no booking = an unscheduled meeting. Merlin combines signals from 7 embedded sensors to understand what's actually happening — not just what a single reading says.",
      color: "#a855f7",
      icon: "diamond",
    },
    {
      num: "03",
      title: "Always Working",
      body: "Monitoring every space continuously. No sick days. No missed alerts. When your facility manager checks 30 rooms per shift, Merlin is watching all of them at once — 24/7, 365.",
      color: "#14b8a6",
      icon: "target",
    },
    {
      num: "04",
      title: "Acts Without Being Asked",
      body: "Reroutes the nearest cleaning team when VOC readings spike. Releases ghost bookings when rooms sit empty. Reorders supplies before anyone notices they're low. Your operations run themselves.",
      color: "#3b82f6",
      icon: "square-diamond",
    },
  ],
  useCasesIntro: {
    sectionNumber: "// 04",
    eyebrow: "Use Cases",
    titleLines: ["One Co-Worker.", "Every Space.", "Every Operation."],
  },
  useCases: [
    {
      num: "// 01",
      title: "Cleaning & Hygiene",
      color: "#FF00B2",
      body: "Merlin replaces fixed cleaning schedules with demand-driven dispatch. VOC spikes, foot traffic, and dispenser levels tell Merlin exactly which spaces need attention — and when.",
      points: [
        "40–55% labor cost reduction",
        "NFC badge-verified cleaning events",
        "Predictive supply management — zero stockouts",
        "15–20% occupant satisfaction improvement",
      ],
    },
    {
      num: "// 02",
      title: "Space Management",
      color: "#14b8a6",
      body: "CO₂ and noise sensors detect actual occupancy — no cameras needed. Merlin identifies ghost bookings within minutes and releases unused rooms automatically.",
      points: [
        "30–40% of booked rooms go unused — Merlin recovers them",
        "Hot desk & study room real-time availability",
        "$150K–$250K saved in avoided lease expansion",
        "Data-driven real estate decisions",
      ],
    },
    {
      num: "// 03",
      title: "Energy & Sustainability",
      color: "#22c55e",
      body: "CO₂, lux, and temperature sensors in every display create a distributed energy monitoring grid. Merlin spots waste invisible to traditional BMS — room by room.",
      points: [
        "10–30% energy savings on lighting & HVAC",
        "Empty rooms with lights on? Merlin flags it",
        "ESG target contribution",
        "Room-level monitoring, not just mechanical-level",
      ],
    },
    {
      num: "// 04",
      title: "Asset Tracking",
      color: "#6366f1",
      body: "Smart Displays act as BLE gateways, tracking wheelchairs, defibrillators, cleaning carts, and equipment across your entire building — no dedicated tracking infrastructure needed.",
      points: [
        "78% reduction in wheelchair search time (CDG Airport)",
        "BLE beacon triangulation across display network",
        "30–60 min saved per staff member per shift",
        "Works across hospitals, airports, campuses",
      ],
    },
    {
      num: "// 05",
      title: "Smart Parking",
      color: "#3b82f6",
      body: "Radar and Smart Displays bring Physical AI to every parking level. CO/CO₂ monitoring for safety, vehicle impact detection, and AI-driven maintenance routing based on actual conditions.",
      points: [
        "~1.5 FTE savings per 2,000-space structure",
        "$5K+ avoided per emergency repair",
        "Predictive EV charger maintenance",
        "Privacy-safe radar — no cameras needed",
      ],
    },
    {
      num: "// 06",
      title: "Security & Safety",
      color: "#f59e0b",
      body: "Every Smart Display doubles as a security monitoring point. Lux sensors detect lighting failures, accelerometers catch vandalism, noise sensors flag after-hours disturbances.",
      points: [
        "NFC-verified security patrol logs",
        "Real-time missed checkpoint alerts",
        "Tamper and vandalism detection",
        "Insurance liability reduction with continuous compliance records",
      ],
    },
    {
      num: "// 07",
      title: "Airports & Aviation",
      color: "#FF00B2",
      body: "Flight-correlated pre-positioning of cleaning teams. PRM wheelchair tracking. Terminal-wide air quality monitoring. Merlin runs airport operations at the pace of the flight schedule.",
      points: [
        "50–70% reduction in SLA breaches",
        "$50K–$200K saved in annual contract penalties",
        "Deployed at Paris Charles de Gaulle",
        "Flight-schedule-aware team dispatch",
      ],
    },
    {
      num: "// 08",
      title: "Healthcare",
      color: "#14b8a6",
      body: "Verified sanitization logs with environmental sensor confirmation create audit-ready compliance trails. Merlin helps prevent hospital-acquired infections through continuous monitoring.",
      points: [
        "80% reduction in documentation time",
        "$140K–$450K saved per prevented infection",
        "Sensor-validated compliance evidence",
        "Automatic hygiene standard enforcement",
      ],
    },
    {
      num: "// 09",
      title: "Machine Vision",
      color: "#a855f7",
      body: "Already deployed in nuclear power plants for equipment monitoring under the strictest regulatory standards. Visual AI extends to restrooms, food courts, and lobbies for commercial use.",
      points: [
        "Anonymized occupancy counting",
        "Dirty table and overcrowding detection",
        "Multi-signal fusion with VOC, CO₂, and NFC",
        "Edge processing for real-time anomaly detection",
      ],
    },
  ],
  differencesSection: {
    sectionNumber: "// 05",
    eyebrow: "The Adaptiv Difference",
    titleLines: ["The Only End-to-End", "Physical AI Platform"],
  },
  differences: [
    {
      text: "Designs and manufactures its own hardware — 12,000 devices deployed across 6,000+ buildings worldwide",
    },
    {
      text: "Smart Display: sensor, gateway, and interface in one device — 7 embedded sensors, NFC verification, BLE gateway, LTE radio",
    },
    {
      text: "LTE built-in — data never touches a landlord's network. End-to-end encryption from sensor to cloud",
    },
    {
      text: "Zero-infrastructure deployment — a technician mounts it, powers it on, done. No IT coordination needed",
    },
    {
      text: "SOC 2 Type 2 certified — the entire vertically integrated stack, from manufactured hardware through AI processing",
    },
  ],
  finalCta: {
    eyebrow: "Get started",
    titleLines: ["Merlin is ready", "to join your team."],
    body: "40–55% labor cost reduction. 15–20% satisfaction improvement. $200K–$1M+ annual savings per facility. See what Physical AI delivers — from the first Smart Display to the first automated action.",
    primaryCta: { label: "Meet Merlin", href: "/merlin" },
    secondaryCta: { label: "See the Smart Display →", href: "/devices" },
  },
};
