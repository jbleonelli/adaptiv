import type { CtaButton } from "./home";

export type PlatformPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  whatIsSection: {
    eyebrow: string;
    bodyParagraphs: string[];
    equationLabel: string;
  };
  architectureSection: {
    title: string;
    intro: string;
    layers: { label: string; title: string; body: string; color: string }[];
  };
  diagramSection: {
    sectionNumber: string;
    eyebrow: string;
    titleLines: string[];
    body: string;
  };
  ownershipSection: {
    title: string;
    benefits: { title: string; body: string }[];
  };
  securitySection: {
    titleLines: string[];
    items: string[];
  };
  apiSection: {
    titleLines: string[];
    body: string;
    items: string[];
  };
  builtLocalSection: {
    badge: string;
    title: string;
    body: string;
    regions: { title: string; body: string }[];
    closingNote: string;
  };
};

export const platformDefaults: PlatformPageData = {
  metaTitle: "Platform — The agent fleet, the loop, the chat layer",
  metaDescription: "Specialized agents, each scoped tightly to a single operational concern, each running the same loop — sense, reason, decide, act, measure. Operators talk to the fleet through Merlin chat.",
  hero: {
    eyebrow: "THE MERLIN PLATFORM",
    titleLines: ["A coordinated fleet.", "One operating loop.", "Two interfaces."],
    body: "Specialized agents are scoped tightly to a single operational concern. Each one carries the domain knowledge, the regulatory constraints, the vertical-specific judgment, and the action vocabulary of its area. They don't try to be each other. The whole system gets smarter agent by agent, domain by domain.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "Inside an agent's loop →", href: "#loop" },
  },
  whatIsSection: {
    eyebrow: "WHAT 'SPECIALIZED AGENT' MEANS",
    bodyParagraphs: [
      "A general-purpose AI doesn't know what good cleaning looks like in a pharmacy. It doesn't know the regulatory constraints on cold-chain storage. It doesn't know when a comfort-band drift in HVAC is normal seasonal variation versus a failing compressor. It can be told, but it doesn't carry the domain. A specialized agent does.",
      "Specialization beats generality where stakes are real. A pharmacy refrigeration deviation is a regulatory event, not a tip. An HVAC anomaly in a hospital is a patient-safety question, not a maintenance ticket. The judgment required is domain-specific. Specialized agents bring that judgment by design.",
      "Specialization mirrors how the world actually organizes expertise. Nobody hires one person to do plumbing, refrigeration, fire safety, and access control. You hire specialists, and they coordinate. Merlin's agent fleet mirrors that structure — specialists, coordinating.",
    ],
    equationLabel: "The Agent Loop",
  },
  architectureSection: {
    title: "Inside an Agent's Loop",
    intro: "Every specialized agent in Merlin runs the same fundamental loop, continuously. The shape of it is what makes physical AI different from the AI that has come before.",
    layers: [
      {
        label: "Sense",
        title: "Read the world, continuously",
        body: "Telemetry from sensors, status from devices, recent events, the building's schedule, the conditions of the spaces the agent cares about. Not a snapshot — a continuous stream.",
        color: "#FF00B2",
      },
      {
        label: "Reason",
        title: "Apply domain knowledge",
        body: "Is this normal? Is this drifting? Is this an emergency? The agent carries the vertical's constraints — what's acceptable in a warehouse is not acceptable in a clinic — and the building's specific operating context.",
        color: "#a855f7",
      },
      {
        label: "Decide",
        title: "Form an opinion",
        body: "Sometimes that's nothing — keep watching. Sometimes it's alert a human. Sometimes it's dispatch the contractor responsible. Sometimes it's auto-execute, log it, move on.",
        color: "#14b8a6",
      },
      {
        label: "Act",
        title: "Do the thing",
        body: "File the work order. Notify the responsible party. Draft the message. Update the schedule. Trigger the device. The action is real and recorded.",
        color: "#3b82f6",
      },
      {
        label: "Measure",
        title: "Watch what happens next",
        body: "Did the contractor respond? Did the issue resolve? How long did it take? The outcome feeds back into the agent's understanding of its domain — and into the accountability of the people who executed.",
        color: "#6D28D9",
      },
    ],
  },
  diagramSection: {
    sectionNumber: "// 02",
    eyebrow: "THE CHAT LAYER",
    titleLines: ["Merlin for the people", "who run the buildings."],
    body: "If the Smart Display is how occupants see Merlin, the chat layer is how operators talk to it. A conversational interface — also called Merlin — that knows the building it's serving and the work the agent fleet is doing inside it. Ask it what's happening, why a metric moved, to draft a message or summarize a week — answered from the building's actual data. The chat isn't a separate product. It's the operator-facing surface for everything the agent fleet and the device network are doing under the hood.",
  },
  ownershipSection: {
    title: "Why specialization matters",
    benefits: [
      { title: "Stakes are real — judgment has to be specific", body: "A pharmacy refrigeration deviation is a regulatory event, not a tip. An HVAC anomaly in a hospital is a patient-safety question, not a maintenance ticket. Specialized agents bring vertical-specific judgment by design." },
      { title: "Improvable one agent at a time", body: "When the cleaning agent gets better, cleaning operations get better — without disturbing HVAC, cold-chain, or anything else. The whole system gets smarter agent by agent, rather than as one big bet that has to be right about everything at once." },
      { title: "Mirrors how the real world organizes expertise", body: "Nobody hires one person to do plumbing, refrigeration, fire safety, and access control. You hire specialists, and they coordinate. Merlin's agent fleet mirrors that structure — specialists, coordinating." },
      { title: "Grounded in the data foundation", body: "Every agent is grounded in five-plus years of telemetry from devices Adaptiv designs, manufactures, and operates across 6,000+ buildings. Agents are credible from day one — not learning a customer's building from a cold start." },
    ],
  },
  securitySection: {
    titleLines: ["Same fleet.", "Two interfaces.", "Different audiences."],
    items: [
      "The Smart Display speaks to the people inside the building — occupants, visitors, the public",
      "The chat layer speaks to the people running it — operators, facility teams, regional managers, ownership",
      "Same intelligence, presented differently for each audience",
      "Ask the chat what's happening in a specific space — it answers from the building's actual data",
      "Ask why a particular metric moved last month — it pulls the agent activity, contractor reports, and relevant telemetry to explain what really happened",
      "Ask it to draft a message, summarize a week, or surface a risk — it does, in the right tone and with the right context",
      "Every action the fleet takes is logged, attributable, and reviewable through the chat",
      "The Smart Display surfaces the moment. The chat surfaces the pattern. Together they close the loop between buildings and the people responsible for them",
    ],
  },
  apiSection: {
    titleLines: ["The library grows", "continuously."],
    body: "As the data foundation deepens and as new operational concerns become learnable, new agents are trained and added to the library. Each new agent is grounded in the same real-world telemetry that makes the existing roster credible from the first day a customer turns it on.",
    items: [
      "Cleaning agent — telemetry, missed-check sensors, occupancy, SLA terms",
      "HVAC agent — comfort-band drift, equipment behavior, energy patterns",
      "Cold-chain agent — temperature-controlled storage end-to-end, by regulatory regime",
      "Pharmacy temperature agent — purpose-built for clinical refrigeration, audit-grade",
      "Security agent — access patterns, anomalies, incident response",
      "Parking agent — occupancy, underutilized zones, violations, wayfinding",
      "More agents in development as operational concerns become learnable",
      "Each addition strengthens Merlin's model of the building, rather than fragmenting it",
    ],
  },
  builtLocalSection: {
    badge: "OUR DEVICES, OUR DATA, OUR BUILDINGS",
    title: "The hardware came first.",
    body: "Most companies trying to build AI for physical spaces start from scratch — software layered on top of whatever third-party sensors happen to be installed. They don't own the hardware. They don't control the data quality. They're guessing what the world looks like, based on signals they didn't design. Adaptiv is different.",
    regions: [
      { title: "We design and manufacture our own devices", body: "Smart Displays, sensors, and connected hardware purpose-built for the physical environments they serve. Designed, manufactured, and operated by Adaptiv. The hardware came first — and that's the moat software-only competitors cannot replicate." },
      { title: "We've operated them at scale for five years", body: "Deployed in more than 6,000 buildings worldwide. Corporate headquarters, warehouses, healthcare, banking branches, government and institutional spaces. Global coverage — climates, building stocks, regulatory regimes, how spaces are actually used. A continuous, real-world data foundation no software-only competitor can match." },
    ],
    closingNote: "The hardware came first. The data came from the hardware. The AI is built on the data. The full stack is ours.",
  },
};
