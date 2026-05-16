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
    members: {
      name: string;
      role: string;
      bio: string;
      initials: string;
      color: string;
      isFounder?: boolean;
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
      { value: "Global", label: "Coverage" },
      { value: "End-to-end", label: "Stack ownership" },
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
    eyebrow: "EXPERIENCED LEADERSHIP",
    titleLines: ["Builders of devices,", "operators of buildings,", "engineers of agents."],
    members: [
      { name: "Jean-Baptiste Leonelli", role: "Founder & CEO", bio: "Jean-Baptiste founded Adaptiv Systems on the conviction that the operating layer for the physical world had to be built end-to-end. A renowned disruptor in IoT, he also co-founded Temboo, Inc. in New York in 2002, and is an investor and board member of several technology companies.", initials: "JBL", color: "#FF00B2", isFounder: true },
      { name: "Harold Stowe", role: "Chairman", bio: "Harold serves as Chairman of Adaptiv Systems, bringing decades of strategic and operational leadership to guide the company's growth as a full physical-AI platform.", initials: "HS", color: "#a0b0d0" },
      { name: "Jason Loup", role: "COO", bio: "Jason oversees Adaptiv's day-to-day operations from New York, leading the growth of Adaptiv Systems Inc. across North America through new client acquisitions and strategic partnerships.", initials: "JL", color: "#94a3b8" },
      { name: "Nick Tau", role: "EVP Software", bio: "Nick leads the software engineering organisation — from the Merlin platform and the agent fleet to the developer APIs. He joins Adaptiv from Meta (formerly Amazon, Atlassian) and previously led engineering with Adaptiv founder Jean-Baptiste Leonelli at Temboo.", initials: "NT", color: "#14b8a6" },
      { name: "Arnaud Sené", role: "Operations", bio: "Arnaud leads operational excellence across deployments and supply chain — making sure every device that ships is on time, on spec, and ready to deploy.", initials: "AS", color: "#3b82f6" },
      { name: "Jean-Baptiste Lucas", role: "Business Development & Communications", bio: "Jean-Baptiste Lucas leads Adaptiv's go-to-market strategy, business development, and external communications — opening the conversation with operators, partners, and the curious.", initials: "JBL", color: "#a855f7" },
      { name: "Laurent Maleysson", role: "Manufacturing", bio: "Laurent runs manufacturing — building tailor-made products through exclusive techniques that guarantee quality, affordability, and limited environmental impact.", initials: "LM", color: "#f59e0b" },
      { name: "Luc Quéau", role: "Smart Building", bio: "Luc leads Adaptiv's smart-building practice — translating the realities of how buildings actually run into the sensors, agents, and workflows that make them intelligent.", initials: "LQ", color: "#22c55e" },
      { name: "Frédéric Kerroux", role: "Industrial Design", bio: "Frédéric leads industrial design across the Adaptiv device portfolio — turning hardware engineering into objects that people are happy to live and work with every day.", initials: "FK", color: "#6366f1" },
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
    cta: { label: "contact@adaptiv.company →", href: "mailto:contact@adaptiv.company" },
  },
};
