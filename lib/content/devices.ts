import type { CtaButton, SensorSpec, UseCase } from "./home";

export type DevicesPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    subBody: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    image: string;
    imageAlt: string;
    imageSize?: "custom" | "matchTextHeight";
    imageObjectFit?: "cover" | "contain";
    imageMaxWidthPx?: number;
    imageMaxHeightPx?: number;
    imageRoundedOverride?: "inherit" | "on" | "off";
    imageShadowOverride?: "inherit" | "on" | "off";
  };
  advantagesSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    advantages: UseCase[];
  };
  manufacturingSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    subBody: string;
    ctaLabel: string;
    ctaHref: string;
    videoUrl: string;
  };
  specsSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    image: string;
    imageAlt: string;
    imageRoundedOverride?: "inherit" | "on" | "off";
    imageShadowOverride?: "inherit" | "on" | "off";
    specs: SensorSpec[];
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  useCasesBySpaceSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    spaces: { space: string; color: string; cases: string[] }[];
  };
  deviceRangeSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    devices: {
      name: string;
      desc: string;
      badge: string;
      badgeColor: string;
      image: string;
      imageAlt: string;
      imageRoundedOverride?: "inherit" | "on" | "off";
      imageShadowOverride?: "inherit" | "on" | "off";
      highlights: string[];
    }[];
  };
  ultraSection: {
    sectionNumber: string;
    eyebrow: string;
    subEyebrow: string;
    titleLines: string[];
    body: string;
    sensorsHeading: string;
    sensors: { label: string; detail: string }[];
    compareHeading: string;
    compareRows: { feature: string; classic: string; sd26: string; ultra: string }[];
    bestForHeading: string;
    bestFor: string[];
  };
  sensorEcosystemSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    calloutBadges: string[];
    footnoteTitle: string;
    footnoteBody: string;
  };
  finalCta: {
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const devicesDefaults: DevicesPageData = {
  metaTitle: "Smart Display & Sensor Library — Adaptiv Systems",
  metaDescription:
    "The Smart Display is the hub. Around it, a growing library of independent wireless sensors. Together, they give Merlin eyes and ears at every point in a managed space.",
  hero: {
    eyebrow: "ADAPTIV SMART DISPLAY",
    titleLines: ["The face of", "physical AI."],
    body: "Most AI systems are invisible. Physical AI has to be different. The Smart Display is where Merlin's intelligence becomes visible — at eye level, in the corridor, in the restroom, in the lobby. It turns abstract backend reasoning into something occupants can see, touch, and trust.",
    subBody:
      "Sensor · Gateway · Interface — all at once. Battery and e-ink. No power infrastructure. Deployed in 6,000+ buildings worldwide over the past five years.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Sensor library →", href: "#sensor-library" },
    image: "/smart-display-wall.png",
    imageAlt: "Adaptiv Smart Display mounted at eye level in a building corridor",
  },
  advantagesSection: {
    sectionNumber: "// 01",
    eyebrow: "SENSOR, GATEWAY, AND INTERFACE — ALL AT ONCE",
    titleLines: ["Three roles.", "One device on the wall."],
    advantages: [
      {
        num: "01",
        title: "It is a sensor",
        body: "Seven embedded sensors capture environmental conditions, register occupant feedback, and verify staff identity via NFC for service-confirmation flows.",
        color: "#FF00B2",
        points: [],
      },
      {
        num: "02",
        title: "It is a gateway",
        body: "Each Smart Display aggregates data from nearby wireless peripheral sensors and relays it to the cloud — no SIM card, no separate gateway hardware, no additional network infrastructure.",
        color: "#14b8a6",
        points: [],
      },
      {
        num: "03",
        title: "It is an interface",
        body: "Merlin's intelligence is presented back to occupants in real time, and occupants interact with it directly through the display. The handshake between the building and the people inside it.",
        color: "#a855f7",
        points: [],
      },
      {
        num: "04",
        title: "Battery and e-ink, no infrastructure",
        body: "A hidden sensor can measure but cannot communicate. A traditional screen can display but cannot sense. The Smart Display does both — and because it runs on battery and e-ink, it installs anywhere without power infrastructure. Every wall in every corridor, restroom, lobby, and stairwell becomes an intelligent node.",
        color: "#3b82f6",
        points: [],
      },
    ],
  },
  manufacturingSection: {
    sectionNumber: "// 02",
    eyebrow: "OUR DEVICES, OUR DATA, OUR BUILDINGS",
    titleLines: ["Designed,", "manufactured,", "and operated", "in-house."],
    body: "Most companies trying to build AI for physical spaces start from scratch — software layered on top of whatever third-party sensors happen to be installed. They don't own the hardware. They don't control the data quality. They're guessing what the world looks like, based on signals they didn't design.",
    subBody:
      "Adaptiv is different. We design, manufacture, and operate our own devices — purpose-built for the physical environments they serve. The hardware came first. The data came from the hardware. The AI is built on the data.",
    ctaLabel: "About Adaptiv Systems →",
    ctaHref: "/company",
    videoUrl: "https://adaptiv.company/assets/home_why_adaptiv.mp4",
  },
  specsSection: {
    sectionNumber: "// 03",
    eyebrow: "WHAT IT SHOWS",
    titleLines: ["The handshake", "between the building", "and the people."],
    image: "/brand/smart-display.png",
    imageAlt: "Adaptiv Smart Display — what it shows on the wall",
    specs: [
      { label: "In a restroom", value: "When it was last cleaned and by whom · current air quality · room temperature" },
      { label: "In a corridor or lobby", value: "Occupancy patterns · environmental conditions · status of the spaces around it" },
      { label: "Everywhere", value: "A single tap to request service, report a problem, or send feedback to the team responsible" },
      { label: "Sensor (embedded)", value: "Environmental conditions · occupant feedback · NFC staff verification" },
      { label: "Gateway", value: "Aggregates wireless peripherals · own LTE uplink · no SIM in the room" },
      { label: "Interface", value: "Merlin in real time · one-tap service from anyone in the room" },
      { label: "Power", value: "Battery — multi-year autonomy. No power infrastructure required" },
      { label: "Display", value: "E-ink for low power and at-a-glance legibility" },
    ],
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "See the Platform →", href: "/platform" },
  },
  useCasesBySpaceSection: {
    sectionNumber: "// 04",
    eyebrow: "WHAT IT SHOWS, WHERE",
    titleLines: ["Different space.", "Same handshake."],
    spaces: [
      { space: "Restroom", color: "#FF00B2", cases: ["When it was last cleaned and by whom", "Current air quality and temperature", "One-tap service request", "Dispenser and consumable status", "Cleaning team accountability surfaced to occupants"] },
      { space: "Corridor & lobby", color: "#14b8a6", cases: ["Occupancy patterns in real time", "Environmental conditions for the area", "Status of the spaces around it", "Wayfinding and announcements", "Service requests routed to the right team"] },
      { space: "Meeting rooms & offices", color: "#a855f7", cases: ["Real-time occupancy and air quality", "One-tap report-a-problem", "Room-level environmental confirmation", "Hand-off to facility and HVAC agents", "Quiet, glanceable surface — no screens that nag"] },
      { space: "Operational spaces — pharmacy, freezer, plant floor", color: "#f59e0b", cases: ["Continuous compliance state visible to staff", "Audit-grade events surfaced where work happens", "One-tap acknowledgment and follow-up", "Handover-ready summaries for shift transitions", "Direct line to the specialized agent on duty"] },
    ],
  },
  deviceRangeSection: {
    sectionNumber: "// 05",
    eyebrow: "THE SENSOR LIBRARY",
    titleLines: ["Eyes and ears", "at every point."],
    body: "The Smart Display is the hub. Around it, Adaptiv has designed and manufactures a growing library of independent wireless sensors. Each one operates entirely on battery, communicates with the nearest Smart Display over short-range wireless protocols, and relies on the display as its sole gateway to the cloud. No SIM cards. No wiring. No separate network infrastructure. The display is the hub. The sensors are the nodes. Together they give Merlin eyes and ears at every location that matters.",
    devices: [
      { name: "People counters", desc: "Measure foot traffic at entrances, corridors, and zones where occupancy patterns drive operational decisions.", badge: "Wireless · battery", badgeColor: "#FF00B2", image: "/brand/smart-display.png", imageAlt: "Adaptiv people counter", highlights: ["Entrance and corridor coverage", "Privacy-respecting counting", "Meshes through nearest Smart Display"] },
      { name: "Dispenser level monitors", desc: "Track soap, paper towel, and sanitizer fill levels in real time, so cleaning agents dispatch before anyone runs out.", badge: "Wireless · battery", badgeColor: "#14b8a6", image: "/brand/smart-display.png", imageAlt: "Adaptiv dispenser level monitor", highlights: ["Per-fixture visibility", "Predictive restock signals", "No retrofit plumbing"] },
      { name: "Leak detectors", desc: "Alert within seconds of water presence. The cold-chain and HVAC agents reason over the event the moment it's reported.", badge: "Wireless · battery", badgeColor: "#a855f7", image: "/brand/smart-display.png", imageAlt: "Adaptiv leak detector", highlights: ["Seconds-to-alert", "Place anywhere on a floor", "Battery autonomy in years"] },
      { name: "Door and stall occupancy sensors", desc: "Detect open and closed states for stalls, doors, and gates. The cleaning agent uses this to schedule around real occupancy.", badge: "Wireless · battery", badgeColor: "#3b82f6", image: "/brand/smart-display.png", imageAlt: "Adaptiv door and stall sensor", highlights: ["Open/closed state", "Stall-level cleaning intelligence", "Adhesive-mount, no wiring"] },
      { name: "Bin level sensors", desc: "Measure waste container fill levels so collection routes match reality, not a fixed schedule.", badge: "Wireless · battery", badgeColor: "#22c55e", image: "/brand/smart-display.png", imageAlt: "Adaptiv bin level sensor", highlights: ["Fill-level visibility", "Demand-driven collection", "Indoor and outdoor models"] },
      { name: "Radar sensing devices", desc: "Privacy-safe millimetre-wave occupancy detection. Where cameras are not appropriate, radar carries the load.", badge: "Privacy-safe", badgeColor: "#6366f1", image: "/brand/smart-display.png", imageAlt: "Adaptiv radar sensor", highlights: ["Millimetre-wave", "No image capture", "Robust through partitions"] },
      { name: "Machine vision devices", desc: "Visual anomaly detection in demanding environments — manufacturing floors, critical infrastructure, hazardous areas.", badge: "Edge inference", badgeColor: "#f59e0b", image: "/brand/smart-display.png", imageAlt: "Adaptiv machine vision device", highlights: ["On-device inference", "Visual anomaly flags", "Built for demanding environments"] },
      { name: "Smart lighting", desc: "Illumination combined with embedded occupancy and energy sensing — the HVAC and energy agents use it as additional ground truth.", badge: "Illumination + sensing", badgeColor: "#FF00B2", image: "/brand/smart-display.png", imageAlt: "Adaptiv smart lighting", highlights: ["Occupancy + energy sensing", "Built-in dimming + scenes", "Coordinates with the agent fleet"] },
    ],
  },
  ultraSection: {
    sectionNumber: "// 06",
    eyebrow: "HOW THE LIBRARY GROWS",
    subEyebrow: "Three criteria, every addition",
    titleLines: ["Discipline over", "proliferation."],
    body: "Adaptiv continuously evaluates new sensing technologies to add to the library. The ecosystem grows with intention rather than proliferation — each addition strengthens Merlin's model of the building rather than adding noise. For customers, the implication is straightforward: the platform you deploy today becomes more capable over time as new sensor types are added to the library, without any change required to the Smart Display infrastructure already on your walls.",
    sensorsHeading: "Each addition has to pass three tests",
    sensors: [
      { label: "Unique signal", detail: "Does the sensor capture a signal Merlin cannot already infer from existing data?" },
      { label: "New coverage", detail: "Does it extend coverage to a location or modality the Smart Display cannot reach?" },
      { label: "Cost-justified", detail: "Is the hardware and deployment cost justified by the operational intelligence it provides?" },
      { label: "Wireless by default", detail: "Battery-powered, meshing through the nearest Smart Display — no SIM, no wiring, no separate hub." },
      { label: "No re-installation", detail: "New sensor types deploy into existing Smart Display networks. Nothing on the wall has to change." },
      { label: "Curated, not catalog-driven", detail: "We add a sensor when it makes Merlin more capable. We don't add a sensor because we can." },
    ],
    compareHeading: "What this means for a customer",
    compareRows: [
      { feature: "Roadmap", classic: "Adaptiv decides which sensor classes graduate into the library", sd26: "—", ultra: "—" },
      { feature: "Existing deployments", classic: "—", sd26: "Inherit new sensor types without re-installing or recertifying the wall", ultra: "—" },
      { feature: "Agent fleet", classic: "—", sd26: "—", ultra: "Specialized agents extend their reasoning as new modalities arrive" },
    ],
    bestForHeading: "Why discipline matters",
    bestFor: [
      "More sensors isn't more intelligence — more well-chosen sensors is",
      "Every addition has to earn its place in the building, not just the catalog",
      "Operators don't pay an integration tax every time the library grows",
      "Merlin's model of the building deepens with each addition, rather than fragmenting",
    ],
  },
  sensorEcosystemSection: {
    sectionNumber: "// 07",
    eyebrow: "ONE MESH, ONE PLATFORM",
    titleLines: ["No SIM cards.", "No wiring.", "No separate hub."],
    body: "The Smart Display and its peripheral sensors form a mesh. The display is the hub. The sensors are the nodes. They route everything through the display's own LTE connection, so there's no SIM card in the sensor, no shared Wi-Fi to negotiate, no separate gateway hardware to maintain. One physical layer for the whole agent fleet to reason on top of.",
    calloutBadges: [
      "Battery autonomy in years",
      "Wireless mesh through the nearest display",
      "Smart Display owns the LTE uplink",
      "No IT credentials required",
      "Curated library, growing on schedule",
    ],
    footnoteTitle: "The platform you deploy today becomes more capable over time — without any change required to the Smart Display infrastructure already on your walls.",
    footnoteBody: "Every sensor in the Adaptiv library connects to the nearest Smart Display over short-range wireless. The Smart Display handles the LTE uplink, edge pre-processing, and data forwarding to Merlin. New sensor classes are added as they meet the three-criteria test. Existing walls inherit them without re-installation.",
  },
  finalCta: {
    titleLines: ["The hub and the mesh.", "Ready when you are."],
    body: "Whether the deployment is a single meeting room or a portfolio of buildings, the architecture is the same: Smart Display on the wall, sensor library in the mesh, agent fleet reasoning on top.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Inside the agent fleet →", href: "/merlin" },
  },
};
