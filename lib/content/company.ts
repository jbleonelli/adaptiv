import type { CtaButton } from "./home";

export type CompanyPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    gradientLine: string;
    body: string;
  };
  storySection: {
    eyebrow: string;
    paragraphs: string[];
    closingLine: string;
    stats: { value: string; label: string }[];
  };
  founderSection: {
    sectionLabel: string;
    eyebrow: string;
    titleLines: string[];
    name: string;
    initials: string;
    role: string;
    chips: string[];
    intro: string;
    body: string;
    quote: string;
    quoteAuthor: string;
  };
  teamSection: {
    sectionLabel: string;
    eyebrow: string;
    titleLines: string[];
    principalsIntro?: string;
    operatingTeamHeading?: string;
    members: {
      name: string;
      role: string;
      bio: string;
      initials: string;
      color: string;
      isFounder?: boolean;
      isPrincipal?: boolean;
      credential?: string;
    }[];
  };
  studioSection: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    strengths: { title: string; body: string; iconKey: string }[];
  };
  valuesSection: {
    title: string;
    values: { title: string; body: string; color: string; iconKey: string }[];
  };
  investorsSection: {
    badge: string;
    titleLines: string[];
    paragraphs: string[];
    closingLine: string;
    cta: CtaButton;
  };
};

export const companyDefaults: CompanyPageData = {
  metaTitle: "Adaptiv Systems — Physical AI for the buildings of the world",
  metaDescription: "Adaptiv Systems designs, manufactures, and operates the devices that capture real-world signals — deployed in 6,000+ buildings worldwide over the past five years. Merlin is the Physical AI layer built on that foundation.",
  hero: {
    eyebrow: "ABOUT ADAPTIV SYSTEMS",
    titleLines: ["The hardware came first.", "The AI is built on the data."],
    gradientLine: "The full stack is ours.",
    body: "Adaptiv Systems designs, manufactures, and operates its own devices — Smart Displays, sensors, and connected hardware purpose-built for the physical environments they serve. Over the past five years, those devices have been deployed in more than 6,000 buildings worldwide. Merlin is the Physical AI layer built on that foundation.",
  },
  storySection: {
    eyebrow: "OUR DEVICES, OUR DATA, OUR BUILDINGS",
    paragraphs: [
      "Most companies trying to build AI for physical spaces start from scratch — software layered on top of whatever third-party sensors happen to be installed. They don't own the hardware. They don't control the data quality. They're guessing what the world looks like, based on signals they didn't design.",
      "Adaptiv is different. We design, manufacture, and operate our own devices — Smart Displays, sensors, and connected hardware purpose-built for the physical environments they serve. Over the past five years, our devices have been deployed in more than six thousand buildings across the world — corporate headquarters, warehouses, healthcare facilities, banking branches, government and institutional spaces, and more.",
      "That deployment isn't just a customer base. It's a continuous, real-world data foundation. Five-plus years of datasets. Six thousand-plus buildings worth of operational patterns — what normal looks like, what failure looks like, what intervention works. Global coverage — climates, building stocks, regulatory regimes, occupancy patterns, cultural norms of how spaces are actually used. Every specialized agent in Merlin is grounded in this foundation.",
    ],
    closingLine: "The hardware came first. The data came from the hardware. The AI is built on the data. The full stack is ours.",
    stats: [
      { value: "6,000+", label: "Buildings deployed" },
      { value: "5+", label: "Years of telemetry" },
      { value: "12", label: "Patent portfolio, USPTO" },
      { value: "Global", label: "Coverage" },
    ],
  },
  founderSection: {
    sectionLabel: "// Founder",
    eyebrow: "THE VISION BEHIND ADAPTIV SYSTEMS",
    titleLines: ["The hardware came first.", "The AI is built on the data."],
    name: "Jean-Baptiste Leonelli",
    initials: "JBL",
    role: "Founder & CEO",
    chips: [
      "Founded Adaptiv Systems",
      "Co-founded Temboo, Inc., New York, 2002",
      "Investor & board member, multiple tech companies",
    ],
    intro: "Jean-Baptiste Leonelli is a renowned disruptor and opinion leader in the technology sector, and especially in IoT. He founded Adaptiv Systems with a vision to build a company that would own the full stack of Physical AI — from the devices on the wall to the specialized agents acting on what they sense.",
    body: "Under his leadership, Adaptiv has spent five years quietly building the hardware, the deployments, and the data substrate that physical AI requires — and is now bringing the AI layer to market on top of that foundation. Jean-Baptiste also co-founded Temboo, Inc. in New York in 2002 — an early pioneer in connected technology, whose successive inventions have been widely recognized and adopted in American academia. An avid designer, inventor, and advocate of technology as a way to make daily lives better, he has spent over two decades at the intersection of hardware, software, and user experience.",
    quote: "The companies that figure out physical AI will be the companies that built the operating layer for the physical world. What makes the bet credible isn't ambition — it's foundation.",
    quoteAuthor: "— Jean-Baptiste Leonelli",
  },
  teamSection: {
    sectionLabel: "// Leadership",
    eyebrow: "THE PRINCIPAL ARCHITECTS",
    titleLines: ["Three disciplines that rarely", "coexist in a single company."],
    principalsIntro:
      "Hardware invention and manufacturing. Enterprise software and AI architecture. Physical operations at global scale. Adaptiv's three principal architects of the platform have each spent a career mastering one of these domains — and each is a named inventor on the company's patent portfolio. A signal that the platform was built with the leadership team's own hands, not delegated.",
    operatingTeamHeading: "And the operating team behind them",
    members: [
      {
        name: "Jean-Baptiste Leonelli",
        role: "Founder & CEO",
        credential: "Patents granted in 6 jurisdictions",
        bio: "Serial entrepreneur and inventor with granted patents across the US, Europe, Canada, Japan, China, and Hong Kong. In 2002, he co-founded Temboo in New York — a pioneer in connected technology adopted in university curricula and by thousands of developers. He founded Adaptiv in 2019 on the thesis that buildings are the largest Physical AI opportunity venture capital has systematically ignored. Five years later, Adaptiv's devices run in more than 6,000 buildings worldwide. The twelve-patent portfolio filed with the USPTO wasn't drafted to defend what's been built — it was drafted to define the territory every serious competitor will have to enter.",
        initials: "JBL",
        color: "#FF00B2",
        isFounder: true,
        isPrincipal: true,
      },
      {
        name: "Philippe Garnier",
        role: "EVP Operations",
        credential: "Apple-grade hardware operations",
        bio: "Philippe leads field operations, hardware deployment, and manufacturing — the functions that translate Adaptiv's technology into the physical world at scale. His formative years were spent at Apple, where hardware operations are widely regarded as the most disciplined in consumer electronics. That philosophy is visible in every Adaptiv device: manufacturing consistency across thousands of units, field-replaceability, battery management, enclosure quality. In a company whose moat rests on owning its full hardware stack, having an operations leader with Apple-grade experience is not a biographical footnote — it's a structural advantage. Named inventor on the Adaptiv patent portfolio.",
        initials: "PG",
        color: "#3b82f6",
        isPrincipal: true,
      },
      {
        name: "Nick Tau",
        role: "EVP Software",
        credential: "Architect of Alexa's signal pipeline",
        bio: "Nick leads all software engineering — the Merlin AI engine, the cloud IIoT platform, device firmware, and the data pipeline connecting sensors across 6,000+ buildings to the intelligence layer that acts on them. He was Engineering Lead at Temboo alongside Jean-Baptiste during its critical hardware-partnerships phase (Arduino, Samsung, Texas Instruments). He then built his leadership credentials at Atlassian, Amazon, and Meta. At Amazon, he led the Alexa signal processing team — the inference pipeline behind hundreds of millions of deployed Alexa devices, one of the largest real-time IoT systems ever built. Named inventor on the Adaptiv patent portfolio.",
        initials: "NT",
        color: "#14b8a6",
        isPrincipal: true,
      },
      {
        name: "Jason Loup",
        role: "COO, North America",
        bio: "Jason runs Adaptiv's North American operations — the deployment pipeline, the partner channels, and the customer relationships that turn a device order into thousands of sensors actually installed and running across the continent. The COO function in a hardware-first company is where commercial momentum meets manufacturing reality, and Jason owns both sides of that interface for the region: forecasting demand against production capacity, sequencing rollouts across customer sites, and managing the field teams that handle installations. The result is the operating cadence that keeps Adaptiv shipping at scale.",
        initials: "JL",
        color: "#0ea5e9",
      },
      {
        name: "Jean-Baptiste Lucas",
        role: "Business Development & Communications",
        bio: "Jean-Baptiste leads Adaptiv's go-to-market function and the external voice of the company — opening conversations with enterprise and institutional customers, building the partner network, and shaping how the platform is positioned in a market that's still catching up to what Physical AI means. Business development at Adaptiv is a technical sale: customers want to understand the agent fleet, the device library, and the operating loop before they sign. Jean-Baptiste is the person who translates the depth of the platform into the language each buyer needs to hear, and then carries the relationship through to deployment.",
        initials: "JBL",
        color: "#a855f7",
      },
    ],
  },
  studioSection: {
    eyebrow: "WHERE THE DEVICES COME FROM",
    titleLines: ["Designed, built,", "and operated", "in-house."],
    body: "Every Adaptiv device starts inside the company — designed by Adaptiv, built by Adaptiv, operated by Adaptiv across thousands of buildings. The discipline is the same as the discipline that governs the sensor library: each device has to earn its place in the building, not just in the catalog.",
    strengths: [
      { title: "Designed for real environments", body: "Smart Displays at eye level. Sensors that work without wiring. Battery and e-ink that install anywhere. The devices were designed in service of the loop the agent fleet runs — not as standalone gadgets.", iconKey: "environment" },
      { title: "Designed for real people", body: "The Smart Display is designed to be understood at a glance, operated without instruction, and trusted by the people who see it every day. Physical AI only works if its surface in the room respects the people in the room.", iconKey: "people" },
      { title: "In-house, end-to-end", body: "Design, engineering, manufacturing under one organization. The hardware came first. The data came from the hardware. The AI is built on the data. Software-only competitors can build agents — they can't ground them in telemetry from hardware they own and operate.", iconKey: "inhouse" },
      { title: "Discipline over proliferation", body: "Three criteria gate every new device or sensor: does it capture a signal Merlin cannot already infer, does it extend coverage the Smart Display cannot reach, is its cost justified by the operational intelligence it provides. The ecosystem grows with intention.", iconKey: "aesthetic" },
    ],
  },
  valuesSection: {
    title: "What we believe",
    values: [
      { title: "Physical AI, not screen AI", body: "AI has spent its first decade living in software. The next decade is different. AI is moving into the physical world — into the buildings, the spaces, the operations where things actually happen. We build for that world.", color: "#FF00B2", iconKey: "physical" },
      { title: "Specialists, coordinating", body: "Specialization beats generality where stakes are real. The whole system gets smarter agent by agent, domain by domain — rather than as one big bet that has to be right about everything at once.", color: "#3b82f6", iconKey: "security" },
      { title: "Closed loops, not dashboards", body: "Sense, reason, decide, act, measure. The loop is what makes physical AI different from monitoring. A dashboard tells you something is wrong. A specialized agent does something about it, and then verifies the result.", color: "#14b8a6", iconKey: "local" },
      { title: "Hardware grounds the AI", body: "Every specialized agent in Merlin is grounded in five-plus years of real-world telemetry from devices we own and operate. They're applying physical-world judgment from day one — not learning your building from a cold start.", color: "#FF00B2", iconKey: "human" },
      { title: "End-to-end ownership", body: "We design and manufacture the devices. We operate them across thousands of buildings. We build the AI on top. No black boxes, no integration risk, no guessing about what the signals mean — because we designed the signals.", color: "#a855f7", iconKey: "stack" },
      { title: "Discipline over catalog", body: "The sensor library and the agent library grow with intention. Each addition strengthens Merlin's model of the building rather than fragmenting it. More sensors isn't more intelligence — more well-chosen sensors is.", color: "#14b8a6", iconKey: "responsible" },
    ],
  },
  investorsSection: {
    badge: "THE BET",
    titleLines: ["Buildings are the first place we proved it.", "Buildings are not the limit."],
    paragraphs: [
      "The companies that figure out physical AI will be the companies that built the operating layer for the physical world — the equivalent of what the cloud-computing platforms became for software in the last era. Merlin is one of the early reference implementations of that layer. Specialized agents, not one big model. Real action in the real world, not just observation. Closed loops between perception, decision, execution, and measurement.",
      "What makes the bet credible isn't ambition — it's foundation. Adaptiv has spent the past five years quietly building the hardware, the deployments, and the data substrate that physical AI requires. Six thousand-plus buildings already run on our devices. The AI layer is the natural next step on infrastructure we've already built.",
      "The same architecture — sensors generate telemetry, specialized agents reason over it, agents act in coordination with humans and contractors, every action is measured — generalizes to any physical-world operation. So does the hardware. The Smart Display that lives in a corridor or restroom belongs equally on a refinery floor, beside a cold-storage door, at a hospital nurse station, in a data center aisle, or in a metro station concourse.",
    ],
    closingLine: "Operators, contractors, technology and hardware partners, investors and the curious — the conversation is open.",
    cta: { label: "contact@adaptiv.systems →", href: "mailto:contact@adaptiv.systems" },
  },
};
