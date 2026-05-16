import type { CtaButton, Trait, SensorSpec } from "./home";

export type TimelineEvent = {
  time: string;
  label: string;
  body: string;
  color: string;
};

export type ComparisonRow = { old: string; merlin: string };

export type MerlinPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    image?: string;
    imageAlt?: string;
    imageSize?: "custom" | "matchTextHeight";
    imageObjectFit?: "cover" | "contain";
    imageMaxWidthPx?: number;
    imageMaxHeightPx?: number;
    imageRoundedOverride?: "inherit" | "on" | "off";
    imageShadowOverride?: "inherit" | "on" | "off";
    profileCard: {
      statusLabel: string;
      version: string;
      photo: string;
      photoAlt: string;
      name: string;
      role: string;
      description: string;
      stats: SensorSpec[];
      tags: string[];
    };
  };
  coWorker: {
    eyebrow: string;
    titleLines: string[];
    paragraphs: string[];
    closingLine: string;
    comparisonHeading: string;
    comparison: ComparisonRow[];
  };
  fiveTraitsHeading: string;
  traits: Trait[];
  dayWithMerlin: {
    eyebrow: string;
    title: string;
    body: string;
    events: TimelineEvent[];
    footerLine: string;
  };
  differentTraitsHeading: { eyebrow: string; title: string };
  differentTraits: Trait[];
  howItWorksHeading: string;
  howItWorksSteps: { step: string; label: string; title: string; body: string }[];
  capabilitiesHeading: string;
  capabilities: Trait[];
  deploymentHeading: string;
  deployments: { type: string; desc: string }[];
  impactSection: {
    eyebrow: string;
    title: string;
    metrics: { value: string; label: string; color: string }[];
    footnote: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    subBody: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const merlinDefaults: MerlinPageData = {
  metaTitle: "Merlin — Physical AI for the Buildings of the World",
  metaDescription:
    "Merlin is a new kind of operating layer for physical spaces — a fleet of specialized AI agents reasoning continuously over real-world signals from the buildings of the world. An Adaptiv Systems product.",
  hero: {
    eyebrow: "AN ADAPTIV SYSTEMS PRODUCT",
    titleLines: ["Physical AI for the", "Buildings of the World."],
    body: "Merlin is a new kind of operating layer for physical spaces. Instead of one general-purpose dashboard, it deploys a fleet of specialized AI agents — each one purpose-built for a single operational concern, each one reasoning continuously over the real-world signals coming from your buildings, and each one closing the loop between what's happening and what should be done about it.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Inside an agent's loop →", href: "#loop" },
    profileCard: {
      statusLabel: "Active across 6,000+ buildings",
      version: "Adaptiv Systems",
      photo: "/brand/merlin-smart-display.png",
      photoAlt: "Adaptiv Smart Display — the face of Merlin",
      name: "Merlin",
      role: "A fleet of specialized agents · Physical AI",
      description:
        "Reasons continuously over real-world signals. Acts in coordination with the people and contractors who keep buildings running. Grounded in five-plus years of telemetry from devices Adaptiv designs, manufactures, and operates.",
      stats: [
        { label: "Buildings deployed", value: "6,000+" },
        { label: "Years of telemetry", value: "5+" },
        { label: "Coverage", value: "Global" },
        { label: "Stack ownership", value: "End to end" },
      ],
      tags: [
        "Cleaning",
        "HVAC",
        "Cold-chain",
        "Pharmacy temperature",
        "Security",
        "Parking",
      ],
    },
  },
  coWorker: {
    eyebrow: "THE SHIFT WE'RE BETTING ON",
    titleLines: ["AI is moving into the", "physical world."],
    paragraphs: [
      "AI has spent its first decade living in software. It writes, it summarizes, it answers questions, it generates images. Useful, but abstract — confined to screens, text, and pixels.",
      "The next decade is different. AI is moving into the physical world — into the buildings, the spaces, the operations where things actually happen. Physical AI isn't about smarter chatbots. It's about agents that perceive real-world signals, reason about them in context, and take action that affects the physical environment.",
      "Buildings are where this shift starts. They generate continuous streams of telemetry — temperature, occupancy, cleanliness, security, equipment health — and they require continuous decisions and actions. They're the perfect domain for AI that doesn't just observe but operates.",
    ],
    closingLine:
      "Merlin is the bet that the right way to build physical AI isn't one giant model trying to do everything, but a coordinated fleet of specialized agents — each one expert in its concern, each one accountable for its outcomes, each one part of a larger intelligence working on the building together.",
    comparisonHeading: "Generic AI vs Specialized Agents",
    comparison: [
      {
        old: "One general-purpose model trying to do everything",
        merlin:
          "A coordinated fleet of specialized agents, each expert in its concern",
      },
      {
        old: "Doesn't know the regulatory regime for what it's reasoning about",
        merlin:
          "Carries the domain knowledge, constraints, and action vocabulary of its area",
      },
      {
        old: "Trusted with everything at once, or nothing at all",
        merlin:
          "Earns authority one domain at a time, measurable and improvable one agent at a time",
      },
      {
        old: "Confined to screens, text, and pixels",
        merlin: "Senses, reasons, and acts in the physical environment",
      },
      {
        old: "Black-box reasoning, no traceable outcome",
        merlin:
          "Closed loops between perception, decision, execution, and measurement",
      },
    ],
  },
  fiveTraitsHeading: "Inside an Agent's Loop",
  traits: [
    {
      title: "Sense",
      body: "The agent reads the world. Telemetry from sensors, status from devices, recent events, the building's schedule, the conditions of the spaces it cares about. Not a snapshot — a continuous stream.",
      color: "#FF00B2",
      icon: "radar",
    },
    {
      title: "Reason",
      body: "The agent applies its domain knowledge to what it's reading. Is this normal? Is this drifting? Is this an emergency? It carries the vertical's constraints — what's acceptable in a warehouse is not acceptable in a clinic — and the building's specific operating context.",
      color: "#FF00B2",
      icon: "neural",
    },
    {
      title: "Decide",
      body: "The agent forms an opinion about what should happen. Sometimes that's nothing — keep watching. Sometimes it's alert a human. Sometimes it's dispatch the contractor responsible. Sometimes it's auto-execute, log it, move on.",
      color: "#FF00B2",
      icon: "target",
    },
    {
      title: "Act",
      body: "The agent does the thing. Files the work order. Notifies the responsible party. Drafts the message. Updates the schedule. Triggers the device. The action is real and recorded.",
      color: "#FF00B2",
      icon: "action",
    },
    {
      title: "Measure",
      body: "The agent watches what happens next. Did the contractor respond? Did the issue resolve? How long did it take? Was the action effective? The outcome feeds back into the agent's understanding of its domain — and into the accountability of the people who executed.",
      color: "#FF00B2",
      icon: "cycle",
    },
  ],
  dayWithMerlin: {
    eyebrow: "A DAY IN THE LIFE OF THE FLEET",
    title: "Specialists, coordinating.",
    body: "Six specialized agents, each one expert in its concern, working on the building together. Here's a slice of a day across the fleet.",
    events: [
      {
        time: "02:30",
        label: "Pharmacy temperature agent",
        body: "A medication-storage refrigerator drifts toward the upper compliance threshold. The agent recognizes the regulatory regime — pharmaceutical — opens a compliance-grade event, alerts the responsible pharmacist, and stages the audit-grade reading for the next inspection.",
        color: "#FF00B2",
      },
      {
        time: "05:45",
        label: "HVAC agent",
        body: "Comfort-band drift on a rooftop unit ahead of morning occupancy. The agent distinguishes seasonal variation from equipment degradation, schedules a predictive-maintenance visit, and adjusts setpoints so the morning arrives at the right temperature anyway.",
        color: "#3b82f6",
      },
      {
        time: "07:15",
        label: "Cleaning agent",
        body: "Missed-check pattern at the early shift in a corridor restroom. Telemetry says the area is busier than the SLA assumes. The agent dispatches a human, logs the gap, and adjusts the recurring schedule for the room.",
        color: "#14b8a6",
      },
      {
        time: "10:00",
        label: "Cold-chain agent",
        body: "A storage zone briefly crosses its threshold during a delivery cycle. The agent recognizes a transient versus an actual failure, records the event end-to-end, and confirms compliance is maintained.",
        color: "#a855f7",
      },
      {
        time: "13:30",
        label: "Parking agent",
        body: "Underutilized zone identified on the lower level; a reserved spot misuse on the executive level is flagged with evidence. The agent coordinates enforcement, surfaces live availability to the Smart Display at the entrance, and drivers stop circling.",
        color: "#f59e0b",
      },
      {
        time: "23:00",
        label: "Security agent",
        body: "An access pattern at a side entrance falls outside the routine. The agent distinguishes routine from suspicious, escalates to the on-call responder, and coordinates the response — with the full event trail attached.",
        color: "#6366f1",
      },
    ],
    footerLine:
      "Tomorrow, the fleet does it again. The roster grows as new operational concerns become learnable. The loop is always the same.",
  },
  differentTraitsHeading: {
    eyebrow: "THE MERLIN AGENT LIBRARY",
    title: "Specialists. Coordinating.",
  },
  differentTraits: [
    {
      title: "Cleaning agent",
      body: "Reads cleaning telemetry, missed-check sensors, occupancy patterns, and SLA terms. Decides when human dispatch is warranted, when the situation can wait, and when a recurring pattern suggests a deeper accountability problem.",
      color: "#FF00B2",
      icon: "cycle",
    },
    {
      title: "HVAC agent",
      body: "Watches comfort-band drift, equipment behavior, and energy patterns. Flags anomalies before they become failures. Distinguishes seasonal variation from equipment degradation. Schedules predictive maintenance.",
      color: "#FF00B2",
      icon: "waveform",
    },
    {
      title: "Cold-chain agent",
      body: "Monitors temperature-controlled storage end-to-end. Catches deviations the moment they cross compliance thresholds. Knows the regulatory regime — pharmaceutical, food, biological — for whatever's being stored.",
      color: "#FF00B2",
      icon: "shield",
    },
    {
      title: "Pharmacy temperature agent",
      body: "Purpose-built for clinical refrigeration. Continuous compliance with the regulatory standards governing medication storage. Audit-grade traceability for every reading and every action.",
      color: "#FF00B2",
      icon: "audit",
    },
    {
      title: "Security agent",
      body: "Watches access patterns, anomalies, and incident signals. Distinguishes routine from suspicious. Coordinates response when something requires it.",
      color: "#FF00B2",
      icon: "radar",
    },
    {
      title: "Parking agent",
      body: "Tracks occupancy across lots and garages, identifies underutilized zones, and detects violations and reserved-spot misuse. Surfaces capacity intelligence to operators in real time and feeds live availability back to the Smart Displays at entrances — so drivers know where to go before they circle.",
      color: "#FF00B2",
      icon: "target",
    },
  ],
  howItWorksHeading: "The Foundation: Our Devices, Our Data, Our Buildings",
  howItWorksSteps: [
    {
      step: "01",
      label: "HARDWARE",
      title: "We design, manufacture, and operate our own devices.",
      body: "Smart Displays, sensors, and connected hardware purpose-built for the physical environments they serve. Most companies trying to build AI for physical spaces start from scratch — software layered on whatever third-party sensors happen to be installed. Adaptiv is different. The hardware came first.",
    },
    {
      step: "02",
      label: "DATA",
      title: "Five-plus years. Six thousand-plus buildings. Global coverage.",
      body: "A continuous, real-world data foundation. Corporate headquarters, warehouses, healthcare facilities, banking branches, government and institutional spaces. Climates, building stocks, regulatory regimes, occupancy patterns, cultural norms of how spaces are actually used. The data came from the hardware.",
    },
    {
      step: "03",
      label: "AI",
      title: "Every specialized agent is grounded in that foundation.",
      body: "Merlin's agents are credible from day one in a customer's environment. They're not learning your building from a cold start — they're applying years of physical-world judgment, refined across thousands of buildings before yours, to the specific operational picture you give them. The AI is built on the data.",
    },
  ],
  capabilitiesHeading:
    "The Smart Display, the Sensor Library, the Chat Layer",
  capabilities: [
    {
      title: "Smart Display: sensor",
      body: "Seven embedded sensors capture environmental conditions, register occupant feedback, and verify staff identity via NFC for service-confirmation flows.",
      color: "#FF00B2",
      icon: "radar",
    },
    {
      title: "Smart Display: gateway",
      body: "Each Smart Display aggregates data from nearby wireless peripheral sensors and relays it to the cloud — no SIM card, no separate gateway hardware, no additional network infrastructure.",
      color: "#FF00B2",
      icon: "hub",
    },
    {
      title: "Smart Display: interface",
      body: "Merlin's intelligence is presented back to occupants in real time, and occupants interact with it directly through the display. The handshake between the building and the people inside it.",
      color: "#FF00B2",
      icon: "studio",
    },
    {
      title: "Sensor library",
      body: "People counters, dispenser monitors, leak detectors, door and stall sensors, bin level sensors, radar, machine vision, smart lighting. Each operates entirely on battery and meshes through the nearest Smart Display.",
      color: "#FF00B2",
      icon: "workflow",
    },
    {
      title: "Chat layer — Merlin for operators",
      body: "A conversational interface that knows the building it's serving and the work the agent fleet is doing inside it. Ask it what's happening, why a metric moved, to draft a message or summarize a week — answered from the building's actual data.",
      color: "#FF00B2",
      icon: "neural",
    },
    {
      title: "Battery and e-ink, no infrastructure",
      body: "Battery and e-ink mean the Smart Display installs anywhere without power infrastructure. Every wall in every corridor, restroom, lobby, and stairwell becomes an intelligent node in a building-wide AI network.",
      color: "#FF00B2",
      icon: "action",
    },
  ],
  deploymentHeading: "Where this technology goes",
  deployments: [
    {
      type: "Cold-chain logistics",
      desc: "The same temperature-compliance intelligence that protects a clinical refrigerator extends across warehouses, distribution centers, transport fleets, and last-mile delivery. End-to-end traceability for pharma, food, biologics, and reagents.",
    },
    {
      type: "Industrial and manufacturing",
      desc: "Production-floor cleanliness, machine telemetry, safety incident response, regulatory compliance. The Smart Display becomes the shift handover point, the safety reporting interface, and the operator's window into the agent fleet's work.",
    },
    {
      type: "Data centers and critical infrastructure",
      desc: "Power, cooling, security, and environmental compliance at rack-level granularity. Radar occupancy in aisles, leak detectors on cooling infrastructure, Smart Displays at zone entrances. Specialized agents per concern.",
    },
    {
      type: "Hospitality and care environments",
      desc: "Hotels, senior living facilities, and care homes — where the operational concerns are guest experience, housekeeping accountability, environmental compliance, and resident safety. Each gets its own specialized agent.",
    },
  ],
  impactSection: {
    eyebrow: "THE FOUNDATION",
    title: "The full stack is ours.",
    metrics: [
      { value: "6,000+", label: "Buildings worldwide", color: "#FF00B2" },
      { value: "5+", label: "Years of telemetry", color: "#14b8a6" },
      { value: "Global", label: "Climates and regulatory regimes", color: "#3b82f6" },
      { value: "End-to-end", label: "Hardware, devices, data, AI", color: "#a855f7" },
    ],
    footnote:
      "The hardware came first. The data came from the hardware. The AI is built on the data. Software-only competitors can build agents. They can't ground those agents in years of physical-world telemetry from hardware they own and operate.",
  },
  finalCta: {
    eyebrow: "THE BET",
    title: "Buildings are the first place we proved it. Buildings are not the limit.",
    body: "The companies that figure out physical AI will be the companies that built the operating layer for the physical world — the equivalent of what the cloud-computing platforms became for software in the last era. Merlin is one of the early reference implementations of that layer.",
    subBody:
      "Operators, contractors, technology and hardware partners, investors and the curious — the conversation is open.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Explore the agent library →", href: "#agents" },
  },
};
