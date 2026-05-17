import type { CtaButton } from "./home";

export type AgentStatus = "active" | "coming-online";

export type Agent = {
  num: number;
  name: string;
  status: AgentStatus;
  /** Optional scope qualifier — e.g. "for distribution centers, cold storage, food + pharma" */
  scope?: string;
  /** The main descriptive paragraph(s). Use \n\n between paragraphs. */
  body: string;
  reads: string;
  livesIn: string;
  color: string;
};

export type AgentShapeAttribute = {
  name: string;
  body: string;
};

export type WhatItIsNotItem = {
  title: string;
  body: string;
};

export type DeviceAgentPairing = {
  device: string;
  brought: string;
};

export type VerticalAgentMap = {
  vertical: string;
  agents: string[];
};

export type AgentsPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    subBody: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  whyFleet: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    contrasts: { title: string; body: string }[];
    closingLine: string;
  };
  shape: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    attributes: AgentShapeAttribute[];
    closingLine: string;
  };
  howAgentsTalk: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    paragraphs: string[];
  };
  catalog: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    agents: Agent[];
  };
  byVertical: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    rows: VerticalAgentMap[];
    closingNote: string;
  };
  growsWithDevices: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    pairings: DeviceAgentPairing[];
    closingLine: string;
  };
  whatItIsNot: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
    items: WhatItIsNotItem[];
  };
  inOneLine: {
    eyebrow: string;
    body: string;
    closingNote: string;
  };
  finalCta: {
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
};

export const agentsDefaults: AgentsPageData = {
  metaTitle: "Agent Library — Merlin's coordinated fleet of specialized AI agents",
  metaDescription:
    "Merlin runs on a coordinated fleet of specialized AI agents — each one expert in a single operational concern, each one reasoning continuously over its own slice of real-world signal, each one accountable for its own outcomes. Eleven agents today, growing.",
  hero: {
    eyebrow: "// AGENT LIBRARY",
    titleLines: ["A coordinated fleet of", "specialized AI agents."],
    body: "Merlin doesn't run on one giant model trying to do everything at once. It runs on a coordinated fleet of specialized agents — each one expert in a single operational concern, each one reasoning continuously over its own slice of real-world signal, each one accountable for its own outcomes.",
    subBody:
      "Eleven agents today, growing as new domains and new device classes come online. This page is the catalog.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Inside Merlin →", href: "/merlin" },
  },
  whyFleet: {
    sectionNumber: "// 01",
    eyebrow: "WHY A FLEET, NOT A SINGLE MODEL",
    titleLines: ["A building is not one thing."],
    body: "It's a layered set of operational concerns that each have their own physics, their own tolerances, their own stakeholders, and their own consequences when they fail.",
    contrasts: [
      {
        title: "Different signals",
        body: "The signals that matter to cleaning are nothing like the signals that matter to HVAC.",
      },
      {
        title: "Different judgement",
        body: "The judgement an energy decision requires is nothing like the judgement a security decision requires.",
      },
      {
        title: "Different pace",
        body: "The pace of a cold-chain breach is measured in minutes; the pace of a predictive-maintenance trend is measured in days.",
      },
      {
        title: "Different stakes",
        body: "A single general-purpose model trying to handle all of it ends up shallow on every dimension — competent at nothing, plausible at everything, accountable for none of it.",
      },
    ],
    closingLine:
      "A fleet of specialists is the opposite. Each agent goes deep on its own domain. Each one's prompt, data sources, and confidence thresholds are tuned to the consequences of its mistakes. When an agent decides to act — or to ask — the reasoning is auditable, attributable, and traceable to the specific signal it was watching. The result is an operating layer that understands the building, instead of an assistant that talks about it.",
  },
  shape: {
    sectionNumber: "// 02",
    eyebrow: "THE SHAPE OF EVERY AGENT",
    titleLines: ["One skeleton.", "Eleven specialists."],
    body: "Every agent in the library shares the same skeleton. This is the part that doesn't change — it's what makes the fleet feel like one product, not a pile of disconnected scripts.",
    attributes: [
      {
        name: "A purpose",
        body: "One sentence. The cleaning agent dispatches crews and verifies completions. The HVAC agent balances zones and holds setbacks. The asset-tracking agent locates things. No agent tries to do two jobs.",
      },
      {
        name: "A trigger set",
        body: "The specific patterns in the data that wake the agent up. Air quality threshold crossed. NFC check-in overdue. Occupancy peak. Setpoint drift sustained. If the trigger doesn't fire, the agent doesn't run. No noise.",
      },
      {
        name: "A data-source list",
        body: "The specific signals the agent is allowed to read — VOC sensors, badge events, BACnet setpoints, asset trackers, work-order systems. Each source is registered in Merlin's data-source catalog so the operator always knows what each agent is plugged into.",
      },
      {
        name: "An autonomy policy",
        body: "Four levels: Propose only · Auto low-risk · Approve critical · Full autonomy. Each agent has a default; the operator can change it per-agent at any time.",
      },
      {
        name: "A confidence floor",
        body: "Below this confidence percentage, the agent never acts on its own — even if its autonomy policy would otherwise allow it. The floor is the safety net.",
      },
      {
        name: "A playbook",
        body: "A short, editable list of trigger → condition → action steps the agent walks. Operators can tune the playbook to their building's specific procedures, quiet hours, excluded zones, and rate limits without touching code.",
      },
      {
        name: "A reasoning trail",
        body: "Every decision the agent makes — act, ask, skip, or error — writes a row to the audit log with the inputs it saw, the model output it produced, the autonomy gate that approved or downgraded the decision, and the human resolution (if a human was involved). Nothing is invisible.",
      },
    ],
    closingLine: "The agent fleet is the product. The skeleton is what makes it operable at scale.",
  },
  howAgentsTalk: {
    sectionNumber: "// 03",
    eyebrow: "HOW AGENTS TALK TO HUMANS",
    titleLines: ["When the agent needs", "human judgement."],
    paragraphs: [
      "When an agent decides it needs human judgement, it doesn't send an email. It pushes an ask into Merlin chat — a single message with three buttons: Approve · Hold · Dismiss.",
      "The ask is structured. It carries the agent that produced it, the priority, the reasoning, the proposed action, and a link back to the originating reasoning trail. The chat is shared across the workspace, so whoever's on shift sees it; whoever resolves it is recorded.",
      "This is the loop. Agents watch, agents decide, asks surface when needed, humans resolve them, and the next tick the agent reads its own history and adjusts. Approval makes the agent bolder on similar items; dismissal cools it down. The library learns in motion.",
    ],
  },
  catalog: {
    sectionNumber: "// 04",
    eyebrow: "THE AGENTS",
    titleLines: ["Eleven today.", "Growing."],
    body: "Each agent is a specialist with a single concern, a tuned signal set, and a defined autonomy policy. Agents that don't have signal stay quiet at zero cost. Agents that do start producing decisions on day one.",
    agents: [
      {
        num: 1,
        name: "Cleaning & Hygiene",
        status: "active",
        body: "Watches air quality, NFC cleaner check-ins, occupancy thresholds, and waste-bin fill levels. Dispatches crews to rooms that just crossed a hygiene SLA threshold, reroutes routes when a higher-priority space opens up, verifies that cleanings actually happened (NFC tap trail must close), and pushes asks when an SLA is at risk without a free crew member.",
        reads: "VOC sensors · NFC tap log · occupancy · work orders · waste-bin sensors",
        livesIn: "Every workspace where people walk through spaces",
        color: "#FF00B2",
      },
      {
        num: 2,
        name: "HVAC & Comfort",
        status: "active",
        body: "Holds zones within their comfort band. Adjusts setpoints on sustained drift, holds setbacks when zones are empty, increases fresh-air intake on CO₂ exceedances, and queues maintenance when a unit faults repeatedly. Quiet-hours and excluded-zone guardrails keep the agent out of server rooms and executive suites overnight by default.",
        reads: "Zone temperature · CO₂ sensors · BACnet setpoints · occupancy",
        livesIn: "Every workspace with conditioned air",
        color: "#14b8a6",
      },
      {
        num: 3,
        name: "Space Management",
        status: "active",
        body: "Releases ghost bookings (rooms reserved but never occupied), flags double-bookings, and suggests consolidation when adjacent rooms are running far below capacity. The agent that quietly recovers 15–25 % of the conference-room calendar most weeks without anyone noticing.",
        reads: "Room calendar (MS Graph / Google Calendar) · occupancy · badge events",
        livesIn: "Every workspace with meeting rooms",
        color: "#a855f7",
      },
      {
        num: 4,
        name: "Supplies & Stock",
        status: "active",
        body: "Watches inventory levels against consumption rate. Places reorders when stock-out is imminent, flags supplier price changes for review, and requests quotes when an SKU's lead time is creeping. Routes through whatever supplier API the workspace has registered.",
        reads: "Inventory levels · supplier API · work orders",
        livesIn: "Every workspace with consumables",
        color: "#3b82f6",
      },
      {
        num: 5,
        name: "Compliance",
        status: "active",
        body: "Surfaces audit gaps before an auditor does. Watches firmware drift across the device fleet, NFC-trail breaks, certificate expiries, and audit-log completeness. When something slips, the agent queues structured evidence to the audit trail — not a note to a human, but an actual artifact ready for a compliance review.",
        reads: "Device fleet · audit log · NFC tap log · certificates",
        livesIn:
          "Every workspace with regulatory exposure — healthcare, banking, government, public infrastructure",
        color: "#f59e0b",
      },
      {
        num: 6,
        name: "Energy",
        status: "active",
        body: "Identifies savings the building is leaving on the table. Compares kWh draw against weather-adjusted baselines, proposes setback schedules during utility peak-demand windows, and requests audits when sustained anomalies appear. Reads the weather forecast so its proposals account for heatwaves and cold snaps before they land.",
        reads: "Utility meter · weather API · zone temperature",
        livesIn: "Every workspace where the bill matters",
        color: "#22c55e",
      },
      {
        num: 7,
        name: "Security & Safety",
        status: "active",
        body: "Escalates the events a human guard would escalate. After-hours badge swipes by non-allowlisted people. Doors held open beyond their threshold at the loading dock or lobby. Tailgate patterns. Bursts of badge denies suggesting a card-cloning attempt. Pulls the relevant camera clip and routes the alert to the on-shift supervisor with everything they need in one message.",
        reads: "Badge events · cameras · door contacts",
        livesIn: "Every workspace where someone is physically in the building",
        color: "#ef4444",
      },
      {
        num: 8,
        name: "Cold-Chain",
        status: "active",
        scope: "For distribution centers, cold storage, food + pharma",
        body: "Watches the temperature probes in cold-storage bays against the HACCP cold-chain spec. Stale probes (no reading inside the tolerance window) and sustained drift both trigger asks before the breach window closes. The agent that buys an operator the 22 minutes between temperature drift detected and stock at risk.",
        reads: "Zone temperature · cold-storage probes",
        livesIn:
          "Workspaces with kind='warehouse' zones — distribution centers, 3PL facilities, food-and-beverage processing, refrigerated logistics",
        color: "#06b6d4",
      },
      {
        num: 9,
        name: "Pharmacy Temperature",
        status: "active",
        scope: "For clinics, hospitals, pharmacies",
        body: "Same shape as cold-chain, stricter tolerance. Monitors pharmacy and medication-storage probes against the narrower windows pharma cold-chain requires. Stale probes, sustained drift, vaccine-fridge excursions, and USP 800 compounding-room deviations all flow into asks — because a pharma excursion doesn't just risk product, it can invalidate stock and trigger reportable-event obligations.",
        reads: "Zone temperature · pharmacy and med-room probes",
        livesIn:
          "Clinics, hospitals, ambulatory pharmacies, vaccine-storage facilities, compounding pharmacies",
        color: "#8b5cf6",
      },
      {
        num: 10,
        name: "Predictive Maintenance",
        status: "active",
        scope: "Cross-vertical",
        body: "Reads slow signals. Vibration RMS climbing on a fan motor. Current draw drifting up on a compressor. Runtime hours past the scheduled bearing-replacement window. Repeated VFD fault resets. The patterns a human would only catch by sitting down with weeks of telemetry — the agent watches every machine continuously and surfaces the trends before the failure lands.\n\nThis is the difference between corrective and preventive maintenance, run by an agent instead of a spreadsheet. The HVAC agent owns real-time comfort drift. The predictive-maintenance agent owns the trajectory of every piece of equipment toward its next failure.",
        reads: "Device fleet · work orders · BACnet setpoints",
        livesIn:
          "Every workspace with mechanical equipment — which is every workspace",
        color: "#6366f1",
      },
      {
        num: 11,
        name: "Asset Tracking",
        status: "active",
        scope: "Cross-vertical",
        body: "Locates things. People who own assets they can't afford to lose — wheelchairs, infusion pumps, ventilators, pallets, forklifts, ground-support equipment, AV carts, laptops — deploy Adaptiv Smart Asset Trackers alongside the asset. Each tracker fuses 5G/LTE, GPS, Wi-Fi, and Bluetooth into a single position estimate — accurate outdoors via GPS, accurate indoors via Wi-Fi anchors or BLE proximity, with cellular backhaul as the always-on safety net.\n\nThe agent watches every tracker continuously. Stale beacons trigger a dispatch-to-locate ask. Geofence breaches trigger a security notification. Off-hours unauthorized movement triggers an escalation. Patterns across an asset class (two wheelchairs missing in 6 hours) trigger an inventory audit. Works the same way in a hospital, a 3PL warehouse, an airport apron, or a multi-floor office.",
        reads: "Smart Asset Trackers",
        livesIn:
          "Hospitals · clinics · warehouses · distribution centers · airports · campuses · offices · anywhere assets move",
        color: "#ec4899",
      },
      {
        num: 12,
        name: "Parking",
        status: "coming-online",
        body: "In standby today. The infrastructure (parking-spot sensors, EV chargers, ANPR cameras) is registered in the data-source catalog; the agent itself activates when the first parking deck wires in. When it does, it'll watch deck capacity, EV-charger uptime, idle-EV sessions, and accessible-spot dwell compliance.",
        reads: "Parking spot sensors · EV chargers · ANPR cameras",
        livesIn: "Workspaces with parking infrastructure",
        color: "#94a3b8",
      },
    ],
  },
  byVertical: {
    sectionNumber: "// 05",
    eyebrow: "THE AGENTS BY VERTICAL",
    titleLines: ["Which agents do meaningful", "work for your operation."],
    rows: [
      {
        vertical: "Corporate HQ / office tower",
        agents: [
          "Cleaning",
          "HVAC",
          "Space",
          "Supplies",
          "Security",
          "Energy",
          "Compliance",
          "Predictive Maintenance",
          "Asset Tracking",
        ],
      },
      {
        vertical: "Distribution center / warehouse",
        agents: ["Cold-Chain", "Predictive Maintenance", "Asset Tracking", "Security", "Cleaning", "Energy"],
      },
      {
        vertical: "Clinic / hospital / pharmacy",
        agents: [
          "Pharmacy Temperature",
          "Cleaning",
          "Compliance",
          "Asset Tracking",
          "HVAC",
          "Security",
          "Predictive Maintenance",
        ],
      },
      {
        vertical: "Banking branch network",
        agents: ["Cleaning", "Compliance", "Security", "Energy", "Asset Tracking"],
      },
      {
        vertical: "Airport / transport hub",
        agents: ["Asset Tracking", "Cleaning", "Security", "HVAC", "Predictive Maintenance", "Energy"],
      },
      {
        vertical: "University / campus",
        agents: ["Cleaning", "HVAC", "Space", "Energy", "Security", "Asset Tracking", "Parking"],
      },
    ],
    closingNote:
      "Every workspace gets every agent — that's not the question. The question is which ones do meaningful work for your operation. Agents that don't have signal stay quiet at zero cost. Agents that do start producing decisions on day one.",
  },
  growsWithDevices: {
    sectionNumber: "// 06",
    eyebrow: "THE LIBRARY GROWS WITH THE DEVICE LIBRARY",
    titleLines: ["Every new device", "extends the library."],
    body: "Every new device class Adaptiv brings to market is paired with the agent that knows what to do with its signal.",
    pairings: [
      { device: "The Smart Display", brought: "the cleaning, compliance, and space agents" },
      {
        device: "The People Counter",
        brought: "the occupancy half of cleaning, HVAC, and space",
      },
      {
        device: "The Smart Logger",
        brought: "the NFC-trail half of cleaning and the security crew-loop",
      },
      { device: "The cold-storage Smart Logger", brought: "the cold-chain agent" },
      { device: "The Smart Asset Tracker", brought: "the asset-tracking agent" },
      {
        device: "The parking-spot sensor + EV charger pair",
        brought: "the parking agent (coming online)",
      },
    ],
    closingLine:
      "The hardware is the foundation. The data is the substrate. The agents are how the data becomes action. Every new device extends the library; every new agent extends what the building can do without anyone having to think about it.",
  },
  whatItIsNot: {
    sectionNumber: "// 07",
    eyebrow: "WHAT THE AGENT LIBRARY IS NOT",
    titleLines: ["Worth saying out loud."],
    body: "A few things to clear up, so there's no ambiguity.",
    items: [
      {
        title: "Not a chatbot",
        body: "A chatbot waits for you to ask. The agents library acts on its own, on its own schedule, against its own signals. Merlin chat is the interface where asks surface — it's not the engine.",
      },
      {
        title: "Not a generic AI assistant",
        body: "Each agent has a single concern, a tuned set of inputs, and a defined autonomy policy. There is no 'the AI' — there's the cleaning agent, the HVAC agent, the asset-tracking agent. Specificity is the point.",
      },
      {
        title: "Not a black box",
        body: "Every decision an agent makes is recorded with its inputs, its reasoning, its confidence, its autonomy gate, and its outcome. The reasoning trail is queryable. Audit and accountability are built in, not bolted on.",
      },
      {
        title: "Not optional infrastructure",
        body: "The agents library is the product. The dashboards, the device fleet, the Merlin chat — those are the surfaces. The agents are what's actually doing the work.",
      },
    ],
  },
  inOneLine: {
    eyebrow: "// IN ONE LINE",
    body: "A coordinated fleet of specialized AI agents, grounded in five-plus years of physical-world telemetry across six thousand-plus buildings, running continuously inside every workspace Adaptiv serves — operating the building so the humans don't have to.",
    closingNote:
      "That's the library. It already does the work of an entire operations team across most of our customers' buildings. The library grows. The work compounds.",
  },
  finalCta: {
    titleLines: ["Eleven agents today.", "Growing."],
    body: "Talk to us about which agents would do meaningful work in your operation — or about the device classes that would bring a new one online.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Inside Merlin →", href: "/merlin" },
  },
};
