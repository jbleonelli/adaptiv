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
  metaTitle: "Company — The Only Complete Physical AI Stack",
  metaDescription: "Founded in 2019. Deployed at 5,000+ sites in France & Europe. The only company that owns the complete Physical AI stack: proprietary hardware manufactured in France & Europe, connectivity, AI engine, and occupant interface.",
  hero: {
    eyebrow: "About Us",
    titleLines: ["The Only Complete", "Physical AI Stack."],
    gradientLine: "No One Else Has It.",
    body: "Adaptiv is the only company that owns all four layers of the Physical AI stack: proprietary hardware manufactured in France & Europe, LTE connectivity, the Merlin AI engine, and the occupant-facing interface. Founded in 2019, deployed at 5,000+ sites — including Paris Charles de Gaulle Airport — and partnered with ABM ($8B+ global FM company) and Samsic.",
  },
  storySection: {
    eyebrow: "Our Story",
    paragraphs: [
      "In 2019, Jean-Baptiste Leonelli founded Adaptiv with a clear conviction: the built environment — where 90% of humanity spends 90% of its time — needed its own AI platform, not another dashboard. But only if someone owned the entire stack, from hardware to AI.",
      "From the beginning, Adaptiv designed its own hardware, wrote its own firmware, and built its own platform — manufactured and assembled in France and Europe using a different approach to responsible production. Data is signed with cryptographic keys at manufacturing — creating a tamper-proof chain of custody. Devices deploy with zero infrastructure: no wiring, no Wi-Fi, no IT coordination. Data never touches the landlord's network.",
      "Today, Adaptiv is deployed at 5,000+ sites across France and Europe, with partnerships including ABM (an $8B+ global FM company in the United States) and Samsic, the launch of Adaptiv Systems Inc. in New York, deployments at Paris Charles de Gaulle Airport, and machine vision running in nuclear power plants. The entire vertically integrated stack is SOC 2 Type 2 certified, with 10+ patents identified and in process.",
    ],
    closingLine: "The AI That Shows Up is not just our tagline. It is how we build.",
    stats: [
      { value: "2019", label: "Founded" },
      { value: "5,000+", label: "Sites deployed" },
      { value: "France & EU", label: "Manufactured" },
      { value: "ABM · Samsic", label: "Partners" },
    ],
  },
  founderSection: {
    sectionLabel: "// Founder",
    eyebrow: "The Vision Behind Adaptiv",
    titleLines: ["Value creation", "comes from differentiation."],
    name: "Jean-Baptiste Leonelli",
    initials: "JBL",
    role: "Founder & CEO",
    chips: [
      "Founded Adaptiv, 2019",
      "Co-founded Temboo, Inc., New York, 2002",
      "Investor & board member, multiple tech companies",
    ],
    intro: "Jean-Baptiste Leonelli is a renowned disruptor and opinion leader in the technology sector, and especially in IoT. In 2019, he founded Adaptiv with a vision to build a company that would own the full stack of Physical AI — from the devices on the wall to the AI agent acting on what they sense.",
    body: "Under his leadership, Adaptiv has grown to 5,000+ sites deployed across France and Europe, secured partnerships with ABM and Samsic, opened Adaptiv Systems Inc. in New York, and deployed at Paris Charles de Gaulle Airport and in nuclear power plants. Jean-Baptiste also co-founded Temboo, Inc. in New York in 2002 — an early pioneer in connected technology, whose successive inventions have been widely recognized and adopted in American academia. An avid designer, inventor, and advocate of technology as a way to make daily lives better, he has spent over two decades at the intersection of hardware, software, and user experience.",
    quote: "Value creation comes from differentiation. We design exclusive, innovative and scalable solutions — an ecosystem that can evolve over time according to your needs.",
    quoteAuthor: "— Jean-Baptiste Leonelli",
  },
  teamSection: {
    sectionLabel: "// Leadership",
    eyebrow: "Highly Experienced Leadership",
    titleLines: ["Seasoned entrepreneurs,", "engineers, and designers."],
    members: [
      { name: "Jean-Baptiste Leonelli", role: "Founder & CEO", bio: "Jean-Baptiste founded Adaptiv in 2019 with the conviction that connected devices could fundamentally change how buildings and operations are managed. A renowned disruptor in IoT, he also co-founded Temboo, Inc. in New York in 2002, and is an investor and board member of several technology companies.", initials: "JBL", color: "#FF00B2", isFounder: true },
      { name: "Harold Stowe", role: "Chairman", bio: "Harold serves as Chairman, bringing decades of strategic and operational leadership to guide the company's growth as a full Physical AI platform.", initials: "HS", color: "#a0b0d0" },
      { name: "Jason Loup", role: "COO", bio: "Jason oversees Adaptiv's day-to-day operations from New York, leading the growth of Adaptiv Systems Inc. across North America through new client acquisitions and strategic partnerships.", initials: "JL", color: "#94a3b8" },
      { name: "Nick Tau", role: "EVP Software", bio: "Nick leads the software engineering organisation — from the Merlin AI platform and edge runtime to the developer APIs. He joins Adaptiv from Meta (formerly Amazon, Atlassian) and previously led engineering with Adaptiv founder Jean-Baptiste Leonelli at Temboo.", initials: "NT", color: "#14b8a6" },
      { name: "Arnaud Sené", role: "Operations", bio: "Arnaud leads operational excellence across deployments and supply chain — making sure every device that ships is on time, on spec, and ready to deploy.", initials: "AS", color: "#3b82f6" },
      { name: "Jean-Baptiste Lucas", role: "Business Development & Communications", bio: "Jean-Baptiste Lucas leads Adaptiv's go-to-market strategy, business development, and external communications — expanding the company's footprint across enterprise and institutional customers.", initials: "JBL", color: "#a855f7" },
      { name: "Laurent Maleysson", role: "Manufacturing", bio: "Laurent runs manufacturing — building tailor-made products at the price of large series through exclusive techniques that guarantee quality, affordability, and limited environmental impact, in France and Europe.", initials: "LM", color: "#f59e0b" },
      { name: "Luc Quéau", role: "Smart Building", bio: "Luc leads Adaptiv's smart-building practice — translating the realities of how buildings actually run into the sensors, agents, and workflows that make them intelligent.", initials: "LQ", color: "#22c55e" },
      { name: "Frédéric Kerroux", role: "Industrial Design", bio: "Frédéric leads industrial design across the Adaptiv device portfolio — turning hardware engineering into objects that people are happy to live and work with every day.", initials: "FK", color: "#6366f1" },
    ],
  },
  studioSection: {
    eyebrow: "Where Physical AI Is Born",
    titleLines: ["The Design Studio", "Behind Every Device"],
    body: "Every Adaptiv device starts in our Design Studio — a multidisciplinary team of industrial designers, hardware engineers, embedded systems specialists, and UX designers who share a single brief: build devices that make Physical AI real.",
    strengths: [
      { title: "Designed for Real Environments", body: "IP-rated enclosures. Glove-operable interfaces. Wide-temperature-range electronics. Zero-infrastructure deployment: no wiring, no Wi-Fi, no IT coordination. Deployed at Paris Charles de Gaulle Airport and in nuclear power plants.", iconKey: "environment" },
      { title: "Designed for Real People", body: "The Smart Display is designed to be understood at a glance, operated without instruction, and trusted by the people who see it every day. Design that drives adoption.", iconKey: "people" },
      { title: "In-House Advantage", body: "Design, engineering, and manufacturing under one roof. We design and manufacture our own hardware — competitors assemble third-party components. 10+ patents identified and in process. Full IP ownership and the ability to develop custom device variants for specific customer needs.", iconKey: "inhouse" },
      { title: "Physical AI Aesthetic", body: "Adaptiv devices cross-validate cleaning events through badge tap + VOC change + vibration pattern. Data is signed with cryptographic keys at manufacturing. The device communicates intelligence because it is intelligent.", iconKey: "aesthetic" },
    ],
  },
  valuesSection: {
    title: "Our Values",
    values: [
      { title: "Physical AI, Not Screen AI", body: "AI venture funding reached $211B in 2025, yet nearly all investment flowed to robotics and autonomous vehicles. The built environment — where 90% of humanity spends 90% of its time — remains underfunded. We build intelligence into that world.", color: "#FF00B2", iconKey: "physical" },
      { title: "Security-First", body: "SOC 2 Type 2 certified across the entire vertically integrated stack. Data signed with cryptographic keys at manufacturing — tamper-proof chain of custody. Complete network independence: data never touches the landlord's network.", color: "#3b82f6", iconKey: "security" },
      { title: "Built Local", body: "We build in the US for North America and in Europe for Europe. Local manufacturing, local compliance, local supply chain accountability.", color: "#14b8a6", iconKey: "local" },
      { title: "Human-Centred", body: "The Smart Display is designed to be used by the people who see it every day. Technology that is not used is technology that does not work.", color: "#FF00B2", iconKey: "human" },
      { title: "End-to-End Ownership", body: "The only company with the complete Physical AI stack: proprietary hardware + connectivity infrastructure + Merlin AI engine + occupant-facing interface. No competitor owns all four layers. No black boxes. No integration risk.", color: "#a855f7", iconKey: "stack" },
      { title: "Responsible AI", body: "AI that acts in the physical world carries real responsibility. Explainability and human oversight are built in from the start.", color: "#14b8a6", iconKey: "responsible" },
    ],
  },
  investorsSection: {
    badge: "For Investors & Partners",
    titleLines: ["A Platform Company", "With Hardware Defensibility"],
    paragraphs: [
      "Adaptiv is the only company that owns the complete Physical AI stack: proprietary hardware manufactured in France & Europe, connectivity infrastructure, the Merlin AI engine, and the occupant-facing interface. No competitor owns all four layers. Competitors raised over $1 billion combined and none built a complete stack — Density ($225M raised, sensors only), VergeSense ($83M, no operational workflow), Vayyar ($300M+, no building-level AI), Infogrid ($148M+, third-party hardware), OfficeSpace ($150M, no sensors, no AI agent).",
      "With 5,000+ sites deployed since 2019 and partnerships with ABM ($8B+ global FM company in the United States) and Samsic, Adaptiv has proven commercial traction at scale. Deployments include Paris Charles de Gaulle Airport (PRM wheelchair tracking — 78% reduction in search time) and machine vision in nuclear power plants. The entire stack is SOC 2 Type 2 certified. Zero-infrastructure deployment means no wiring, no Wi-Fi, no IT coordination — data never touches the landlord's network.",
      "Physical AI scaleups raised $16B+ in the first 9 months of 2025, yet nearly all investment flowed to robotics and autonomous vehicles. The built environment — where 90% of humanity spends 90% of its time — remains the most underfunded frontier in AI. Each site deployment generates operational intelligence that makes Merlin more capable in every subsequent deployment.",
    ],
    closingLine: "A lean team. 5,000+ sites. 10+ patents in process. Physical AI is a new product category. Adaptiv is the platform built to define it.",
    cta: { label: "contact@adaptiv.company →", href: "mailto:contact@adaptiv.company" },
  },
};
