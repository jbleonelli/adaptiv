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
  metaTitle: "Merlin — Always Present. Always Acting.",
  metaDescription:
    "Merlin is the AI that runs alongside your team — watching every sensor, understanding every space, responding to every situation.",
  hero: {
    eyebrow: "MEET YOUR NEW CO-WORKER",
    titleLines: ["Merlin. Always Present.", "Always Acting."],
    body: "Think of Merlin not as software, but as a co-worker — one who never sleeps, never misses a detail, and has eyes and ears in every room simultaneously. It monitors every space continuously, knows the cleaning history, the air quality, the foot traffic, the supply levels — and acts on that knowledge in real time.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "View Capabilities →", href: "#capabilities" },
    profileCard: {
      statusLabel: "Active — 24/7",
      version: "v3.2",
      photo: "/brand/merlin-smart-display.png",
      photoAlt: "Merlin Smart Display",
      name: "Merlin",
      role: "AI Co-Worker · Physical AI",
      description:
        "Monitors your building and operations 24/7. Understands context. Acts autonomously. Reports only when you need to know.",
      stats: [
        { label: "Availability", value: "24/7/365" },
        { label: "Response", value: "< 1 sec" },
        { label: "Sensors Monitored", value: "Unlimited" },
        { label: "Sick Days Taken", value: "0" },
      ],
      tags: ["HVAC Control", "Cleaning Dispatch", "Maintenance Alerts", "Energy Mgmt", "Compliance Logs", "Occupancy"],
    },
  },
  coWorker: {
    eyebrow: "YOUR DIGITAL CO-WORKER",
    titleLines: ["Not another platform.", "A new member of your team."],
    paragraphs: [
      "A facility manager walking the floors can check thirty spaces in a shift and rely on memory and intuition to prioritize what needs attention. Merlin monitors every space continuously — and acts on that knowledge in real time.",
      "When a restroom's VOC readings spike after a busy lunch hour, Merlin doesn't wait for a complaint — it reroutes the nearest cleaning team. When a conference room has been booked but its CO₂ levels remain flat, Merlin releases the ghost booking and makes the room available. When a soap dispenser drops below 20%, Merlin adds it to the next restocking route before anyone notices.",
      "At its core, Merlin runs a closed loop: sense (dense mesh of environmental sensors), reason (AI that learns the behavioral signature of every space), and act (dispatch teams, reorder supplies, generate compliance evidence). The loop closes when results flow back through the sensors, and Merlin learns whether its intervention worked.",
    ],
    closingLine: "Your team's attention is valuable. Merlin's job is to protect it.",
    comparisonHeading: "Merlin vs. Traditional AI Platforms",
    comparison: [
      { old: "Dashboards you have to check", merlin: "Autonomous actions you don't have to manage" },
      { old: "Alerts that require your decision", merlin: "Decisions made and executed automatically" },
      { old: "Reports delivered after the fact", merlin: "Real-time response as events happen" },
      { old: "Months of integration work", merlin: "Onboard in days, active in hours" },
      { old: "Per-seat software licensing", merlin: "One co-worker that scales to every site" },
    ],
  },
  fiveTraitsHeading: "The Five Traits That Make Merlin Your Best Co-Worker",
  traits: [
    {
      title: "Sees Everything",
      body: "Merlin ingests continuous data from every Smart Display (7 embedded sensors each), every BLE peripheral (dispensers, people counters, leak detectors), every radar module, and every machine vision camera — processing millions of data points into a real-time picture of your entire built environment.",
      color: "#FF00B2",
      icon: "radar",
    },
    {
      title: "Understands Context",
      body: "A traditional sensor reports a number. Merlin combines that reading with noise levels, light state, calendar data, badge records, and historical patterns to understand what's actually happening. Multi-signal reasoning, applied continuously across hundreds of spaces simultaneously — something no human co-worker could do alone.",
      color: "#FF00B2",
      icon: "neural",
    },
    {
      title: "Always Working",
      body: "Merlin monitors 24 hours a day, 7 days a week, 365 days a year. Night shift, weekends, bank holidays, peak season — Merlin is always at their desk. No shift handover. No morning catch-up. No missed alerts.",
      color: "#FF00B2",
      icon: "cycle",
    },
    {
      title: "Keeps the Receipts",
      body: "Merlin shifts facility management from trust-based to evidence-based. Every cleaning event is verified by badge tap and confirmed by environmental sensor changes. Every SLA commitment is backed by timestamped, sensor-validated evidence. Every operational decision is traceable to the data that informed it.",
      color: "#FF00B2",
      icon: "shield",
    },
    {
      title: "Acts Without Being Asked",
      body: "Merlin handles the thousand small decisions that keep a building running smoothly. It doesn't send a report and wait. When a condition is met, it dispatches teams, reorders supplies, adjusts ventilation, and generates compliance records — freeing your human team to focus on work that requires judgment, empathy, and expertise.",
      color: "#FF00B2",
      icon: "action",
    },
  ],
  dayWithMerlin: {
    eyebrow: "24/7 OPERATIONS",
    title: "A Day With Merlin",
    body: "While your team sleeps, commutes, and focuses on high-value work — Merlin is running your building. Here's what a typical 24 hours looks like.",
    events: [
      { time: "02:30", label: "Night", body: "Merlin detects an anomalous vibration pattern in a production line motor. It logs the event, flags the specific bearing, and schedules a maintenance inspection for Monday morning.", color: "#a855f7" },
      { time: "05:45", label: "Pre-dawn", body: "Energy consumption in Building B is 18% above baseline for an unoccupied period. Merlin identifies an HVAC unit running on manual override, resets it, and logs the correction.", color: "#3b82f6" },
      { time: "07:15", label: "Morning Arrival", body: "Occupancy sensors detect early arrivals on Floor 3. Merlin pre-heats the meeting rooms booked for 08:00, adjusts lighting to morning mode, and confirms the catering order.", color: "#14b8a6" },
      { time: "09:00", label: "Peak Morning", body: "Bathroom entrance sensors detect 3x normal traffic. Merlin increases cleaning frequency for that zone and notifies the facilities team — before anyone complains.", color: "#FF00B2" },
      { time: "12:30", label: "Midday", body: "CO2 levels in the open-plan area exceed 800 ppm. Merlin increases fresh air intake and dims the nearest Smart Display to signal a break. Levels return to normal in 12 minutes.", color: "#22c55e" },
      { time: "15:00", label: "Afternoon", body: "Meeting Room 7 has been booked but unoccupied for 20 minutes. Merlin releases it back to the pool, notifies the organiser, and turns off AV and lighting.", color: "#f59e0b" },
      { time: "18:45", label: "Evening Departure", body: "Occupancy drops below 5%. Merlin transitions the building to evening mode: reduces HVAC, switches to security lighting, and arms the perimeter sensors.", color: "#6366f1" },
      { time: "23:00", label: "Night Watch", body: "All quiet. Merlin continues monitoring every sensor, every camera, every access point. At 23:47, a water leak sensor triggers in the basement. Merlin shuts the valve remotely and dispatches an emergency maintenance notification.", color: "#a855f7" },
    ],
    footerLine: "Tomorrow, Merlin does it again. And the day after. And every day after that.",
  },
  differentTraitsHeading: {
    eyebrow: "WHAT YOUR CO-WORKER BRINGS",
    title: "Built Different. Works Different.",
  },
  differentTraits: [
    { title: "Always Learning", body: "Merlin learns from every event, every outcome, every correction. The longer it runs, the better it understands your building. Platform updates reach every deployed instance automatically.", color: "#FF00B2", icon: "cycle" },
    { title: "Customised to You", body: "Merlin isn't generic. It learns your building layout, your operational rhythms, your escalation preferences. Every deployment is unique — because every operation is.", color: "#FF00B2", icon: "target" },
    { title: "Deeply Integrated", body: "BACnet, KNX, Modbus, MQTT, OPC-UA, REST — Merlin speaks every protocol your building uses. It orchestrates actions across your entire tech ecosystem, not just one system.", color: "#FF00B2", icon: "hub" },
    { title: "Autonomous Intelligence", body: "Merlin doesn't wait for instructions. It perceives, reasons, decides, and acts — independently. The situations that need a human are escalated. Everything else is handled.", color: "#FF00B2", icon: "action" },
    { title: "Enterprise-Ready", body: "SOC-2 standards, end-to-end AES-256 encryption, zero-trust device authentication, full audit logging. Merlin is built for the most demanding compliance environments.", color: "#FF00B2", icon: "shield" },
    { title: "Scales to Every Site", body: "One Merlin instance manages one building. Or fifty. Deploy across your entire portfolio — same standards, same logic, same quality of operations at every site.", color: "#FF00B2", icon: "workflow" },
  ],
  howItWorksHeading: "How Merlin Works",
  howItWorksSteps: [
    { step: "01", label: "CONNECT", title: "Connect everything.", body: "Merlin connects to every Adaptiv device in your environment via LTE, and to your existing infrastructure via REST API, MQTT, and OPC-UA. Data arrives pre-processed from the edge — clean, contextualised, and ready to act on." },
    { step: "02", label: "CONFIGURE", title: "Configure your agents.", body: "Use Merlin Studio (no-code visual builder) to define your agents: which spaces and assets Merlin monitors, which conditions trigger action, and which workflows it executes. Build your first agent in hours." },
    { step: "03", label: "AUTOMATE", title: "Let Merlin run.", body: "Merlin runs. Continuously. It monitors, decides, and acts in real time — escalating only the exceptions that genuinely need a human. Everything else, it handles." },
  ],
  capabilitiesHeading: "Key Capabilities",
  capabilities: [
    { title: "Autonomous Agents", body: "Agents that monitor conditions, make decisions, and execute actions without human instruction. Define them in plain language using Merlin Studio.", color: "#FF00B2", icon: "hub" },
    { title: "Real-Time Intelligence", body: "Sub-second response to events. Merlin acts on situations as they unfold — powered by edge-pre-processed data from Adaptiv devices.", color: "#FF00B2", icon: "waveform" },
    { title: "Workflow Automation", body: "Connect to building management systems, CMMS, ERP, SCADA, and MES. Merlin triggers the right workflow in the right system the moment a condition is met.", color: "#FF00B2", icon: "workflow" },
    { title: "Merlin Studio", body: "No-code visual agent builder. Design logic visually, test against live building and operational data, deploy in one click. No machine learning expertise needed.", color: "#FF00B2", icon: "studio" },
    { title: "Developer APIs", body: "Full REST and Python APIs for custom integrations, advanced agent logic, and building system connectivity.", color: "#FF00B2", icon: "code" },
    { title: "Explainable Actions", body: "Full audit trail of every decision. What Merlin observed, what it decided, what it did. Essential for compliance, operations review, and continuous improvement.", color: "#FF00B2", icon: "audit" },
  ],
  deploymentHeading: "Deployment Options",
  deployments: [
    { type: "Cloud (Managed)", desc: "Fully managed by Adaptiv. Fastest time to first action. Merlin agents live in the cloud, informed by real-time data from your Adaptiv devices." },
    { type: "On-Premises", desc: "Full deployment within your infrastructure. Data never leaves your building. Ideal for regulated environments and data sovereignty requirements." },
    { type: "Edge", desc: "Merlin agent logic deployed directly to Adaptiv edge nodes or Smart Displays. Acts locally, with or without cloud connectivity. Sub-millisecond response." },
    { type: "Hybrid", desc: "Cloud management, on-premises or edge execution. Full flexibility, full control." },
  ],
  impactSection: {
    eyebrow: "MEASURABLE IMPACT",
    title: "What Happens When You Hire Merlin",
    metrics: [
      { value: "40%", label: "Reduction in reactive maintenance tickets", color: "#FF00B2" },
      { value: "25%", label: "Energy savings from automated HVAC control", color: "#14b8a6" },
      { value: "90%", label: "Faster compliance report generation", color: "#3b82f6" },
      { value: "0", label: "Missed events — Merlin never sleeps", color: "#a855f7" },
    ],
    footnote: "Typical results from Merlin deployments across commercial and industrial environments.",
  },
  finalCta: {
    eyebrow: "READY?",
    title: "Hire Merlin for Your Team.",
    body: "Merlin onboards in days, not months. It learns your building, adapts to your operations, and starts delivering results from week one.",
    subBody: "No integration project. No months of configuration. Just a new co-worker who never stops working.",
    primaryCta: { label: "Hire Merlin →", href: "/contact" },
    secondaryCta: { label: "See Merlin in Action", href: "/solutions" },
  },
};
