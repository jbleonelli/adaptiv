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
  metaDescription: "Founded in 2019. 12,000 devices across 6,000+ buildings. The only company that owns the complete Physical AI stack: proprietary hardware, connectivity, AI engine, and occupant interface.",
  hero: {
    eyebrow: "About Us",
    titleLines: ["The Only Complete", "Physical AI Stack."],
    gradientLine: "No One Else Has It.",
    body: "Adaptiv is the only company that owns all four layers of the Physical AI stack: proprietary hardware, connectivity infrastructure, the Merlin AI engine, and the occupant-facing interface. Competitors raised over $1 billion combined — none built a complete stack. We did it with a lean team of 8 and over $5M in recurring revenue.",
  },
  storySection: {
    eyebrow: "Our Story",
    paragraphs: [
      "In 2019, Jean-Baptiste Leonelli founded Adaptiv AI Technologies with a clear conviction: the built environment — where 90% of humanity spends 90% of its time — needed its own AI platform, not another dashboard. But only if someone owned the entire stack, from hardware to AI.",
      "From the beginning, Adaptiv designed its own hardware, wrote its own firmware, and built its own platform. Data is signed with cryptographic keys at manufacturing — creating a tamper-proof chain of custody. Devices deploy with zero infrastructure: no wiring, no Wi-Fi, no IT coordination. Data never touches the landlord's network.",
      "Today, Adaptiv has 12,000 devices deployed across 6,000+ buildings, partnerships with ABM (an $8B+ global FM company) and Samsic, deployments at Paris Charles de Gaulle Airport, and machine vision running in nuclear power plants. The entire vertically integrated stack is SOC 2 Type 2 certified, with 10+ patents identified and in process.",
    ],
    closingLine: "The AI That Shows Up is not just our tagline. It is how we build.",
    stats: [
      { value: "2019", label: "Founded" },
      { value: "12,000", label: "Devices deployed" },
      { value: "6,000+", label: "Buildings worldwide" },
      { value: "$5M+", label: "Recurring revenue" },
    ],
  },
  founderSection: {
    sectionLabel: "// Founder",
    eyebrow: "The Vision Behind Adaptiv AI Technologies",
    titleLines: ["Value creation", "comes from differentiation."],
    name: "Jean-Baptiste Leonelli",
    initials: "JBL",
    role: "Founder & President",
    chips: [
      "Founded Adaptiv AI Technologies, 2019",
      "Co-founded Temboo, Inc., New York, 2002",
      "Investor & board member, multiple tech companies",
    ],
    intro: "Jean-Baptiste Leonelli is a renowned disruptor and opinion leader in the technology sector, and especially in IoT. In 2019, he founded Adaptiv AI Technologies with a vision to build a company that would own the full stack of Physical AI — from the devices on the wall to the AI agent acting on what they sense.",
    body: "Under his leadership, Adaptiv has grown to 12,000 devices across 6,000+ buildings, secured partnerships with ABM and Samsic, and deployed at Paris Charles de Gaulle Airport and in nuclear power plants. Jean-Baptiste also co-founded Temboo, Inc. in New York in 2002 — an early pioneer in connected technology. An avid designer, inventor, and advocate of technology as a way to make daily lives better, he has spent over two decades at the intersection of hardware, software, and user experience.",
    quote: "Value creation comes from differentiation. We design exclusive, innovative and scalable solutions — an ecosystem that can evolve over time according to your needs.",
    quoteAuthor: "— Jean-Baptiste Leonelli",
  },
  teamSection: {
    sectionLabel: "// Leadership",
    eyebrow: "Highly Experienced",
    titleLines: ["Seasoned entrepreneurs,", "engineers, and designers."],
    members: [
      { name: "Jean-Baptiste Leonelli", role: "Founder & President", bio: "Jean-Baptiste founded Adaptiv AI Technologies in 2019 with the conviction that connected devices could fundamentally change how buildings and operations are managed. A renowned disruptor in IoT, he also co-founded Temboo, Inc. in New York in 2002, and is an investor and board member of several technology companies.", initials: "JBL", color: "#FF00B2", isFounder: true },
      { name: "Matthieu Garnier", role: "CEO", bio: "Matthieu leads the day-to-day execution of Adaptiv AI Technologies' strategy, driving growth across commercial and enterprise markets. He brings operational leadership and a track record of scaling deep-tech businesses in complex, regulated environments.", initials: "MG", color: "#f59e0b" },
      { name: "Nick Tau", role: "EVP Software", bio: "Nick leads the software engineering organisation — from the Merlin AI platform and edge runtime to the developer APIs and Merlin Studio no-code agent builder.", initials: "NT", color: "#14b8a6" },
      { name: "Philippe Garnier", role: "EVP Operations", bio: "Philippe leads operational excellence across US and European manufacturing facilities, ensuring quality, delivery, and responsible production standards at every stage.", initials: "PG", color: "#3b82f6" },
      { name: "Patrice Cucchi", role: "CFO", bio: "Patrice leads the group's financial strategy — from fundraising and investor relations to financial planning, risk management, and the operational controls that support Adaptiv's dual-continent growth.", initials: "PC", color: "#22c55e" },
      { name: "Harold Stowe", role: "Chairman of the Board", bio: "Harold serves as Chairman of the Board, bringing decades of strategic and operational leadership to guide the company's growth as a full Physical AI platform.", initials: "HS", color: "#a0b0d0" },
      { name: "Ludovic Letellier", role: "Board Member", bio: "Ludovic brings deep expertise in hardware product development and go-to-market strategy. His experience spans embedded systems, industrial technology, and building high-performance engineering teams.", initials: "LL", color: "#6366f1" },
      { name: "Jason Loup", role: "COO", bio: "Jason oversees Adaptiv AI Technologies' day-to-day operations, from manufacturing and supply chain to customer deployments and partnerships across North America and Europe.", initials: "JL", color: "#94a3b8" },
      { name: "Jean-Baptiste Lucas", role: "Business Development & Communications", bio: "Jean-Baptiste Lucas leads Adaptiv AI Technologies' go-to-market strategy, business development, and external communications — expanding the company's footprint across enterprise and institutional customers.", initials: "JBL", color: "#a855f7" },
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
      "Adaptiv is the only company that owns the complete Physical AI stack: proprietary hardware, connectivity infrastructure, the Merlin AI engine, and the occupant-facing interface. No competitor owns all four layers. Competitors raised over $1 billion combined and none built a complete stack — Density ($225M raised, sensors only), VergeSense ($83M, no operational workflow), Vayyar ($300M+, no building-level AI), Infogrid ($148M+, third-party hardware), OfficeSpace ($150M, no sensors, no AI agent).",
      "With 12,000 devices across 6,000+ buildings, over $5M in recurring revenue, and partnerships with ABM ($8B+ global FM company) and Samsic, Adaptiv has proven commercial traction. Deployments include Paris Charles de Gaulle Airport and machine vision in nuclear power plants. The entire stack is SOC 2 Type 2 certified. Zero-infrastructure deployment means no wiring, no Wi-Fi, no IT coordination — data never touches the landlord's network.",
      "Physical AI scaleups raised $16B+ in the first 9 months of 2025, yet nearly all investment flowed to robotics and autonomous vehicles. The built environment — where 90% of humanity spends 90% of its time — remains the most underfunded frontier in AI. Each building deployment generates operational intelligence that makes Merlin more capable in every subsequent deployment.",
    ],
    closingLine: "A lean team of 8 people. Over $5M ARR. 10+ patents in process. Physical AI is a new product category. Adaptiv is the platform built to define it.",
    cta: { label: "contact@adaptiv.company →", href: "mailto:contact@adaptiv.company" },
  },
};
