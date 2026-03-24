import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Company — We Build Physical AI. End to End.",
  description: "Adaptiv AI Technologies is a group of companies specialized in Physical AI, founded in 2026 by Jean-Baptiste Leonelli, Nick Tau, Philippe Garnier, Ludovic Letellier, Patrice Cucchi, and Harold Stowe.",
};

const team: { name: string; role: string; bio: string; initials: string; color: string; highlight?: boolean; isNew?: boolean }[] = [
  {
    name: "Jean-Baptiste Leonelli",
    role: "Co-Founder & President",
    bio: "Jean-Baptiste founded Adaptiv Systems in 2019 for industrial IoT, then expanded the vision into Adaptiv AI Technologies in 2026 as AI became central to what IoT could deliver. A renowned disruptor in IoT, he also co-founded Temboo, Inc. in New York in 2002, and is an investor and board member of several technology companies.",
    initials: "JBL",
    color: "#FF00B2",
    highlight: true,
  },
  {
    name: "Matthieu Garnier",
    role: "CEO",
    bio: "Matthieu leads the day-to-day execution of Adaptiv AI Technologies' strategy, driving growth across commercial and enterprise markets. He brings operational leadership and a track record of scaling deep-tech businesses in complex, regulated environments.",
    initials: "MG",
    color: "#f59e0b",
  },
  {
    name: "Nick Tau",
    role: "Co-Founder & EVP Software",
    bio: "Nick co-founded Adaptiv AI Technologies in 2026 and leads the software engineering organisation — from the Merlin AI platform and edge runtime to the developer APIs and Merlin Studio no-code agent builder.",
    initials: "NT",
    color: "#14b8a6",
    highlight: true,
  },
  {
    name: "Philippe Garnier",
    role: "Co-Founder & EVP Operations",
    bio: "Philippe co-founded Adaptiv AI Technologies in 2026 and leads operational excellence across US and European manufacturing facilities, ensuring quality, delivery, and responsible production standards at every stage.",
    initials: "PG",
    color: "#3b82f6",
    highlight: true,
  },
  {
    name: "Ludovic Letellier",
    role: "Co-Founder",
    bio: "Ludovic co-founded Adaptiv AI Technologies in 2026, bringing deep expertise in hardware product development and go-to-market strategy. His experience spans embedded systems, industrial technology, and building high-performance engineering teams.",
    initials: "LL",
    color: "#6366f1",
    highlight: true,
  },
  {
    name: "Patrice Cucchi",
    role: "Co-Founder & CFO",
    bio: "Patrice co-founded Adaptiv AI Technologies in 2026 and leads the group's financial strategy — from fundraising and investor relations to financial planning, risk management, and the operational controls that support Adaptiv's dual-continent growth.",
    initials: "PC",
    color: "#22c55e",
    highlight: true,
  },
  {
    name: "Harold Stowe",
    role: "Co-Founder & Chairman",
    bio: "Harold co-founded Adaptiv AI Technologies in 2026 and serves as Chairman of the Board, bringing decades of strategic and operational leadership to guide the company's growth from hardware-first IIoT startup to full Physical AI platform.",
    initials: "HS",
    color: "#a0b0d0",
    highlight: true,
  },
  {
    name: "Jason Loup",
    role: "COO",
    bio: "Jason oversees Adaptiv AI Technologies' day-to-day operations, from manufacturing and supply chain to customer deployments and partnerships across North America and Europe.",
    initials: "JL",
    color: "#94a3b8",
  },
  {
    name: "Jean-Baptiste Lucas",
    role: "Business Development & Communications",
    bio: "Jean-Baptiste Lucas leads Adaptiv AI Technologies' go-to-market strategy, business development, and external communications — expanding the company's footprint across enterprise and institutional customers.",
    initials: "JBL",
    color: "#a855f7",
  },
];

const studioStrengths = [
  {
    title: "Designed for Real Environments",
    body: "IP-rated enclosures. Glove-operable interfaces. Wide-temperature-range electronics. Every form factor is designed for the real industrial and commercial environment it will live in — not a lab.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Factory building body */}
        <rect x="6" y="22" width="36" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Roof with sawtooth / industrial profile */}
        <path d="M6 22 L6 14 L14 22 L14 14 L22 22 L22 14 L30 22" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Chimney */}
        <rect x="33" y="14" width="5" height="8" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
        {/* Smoke wisps */}
        <path d="M35.5 13 Q34 10 35.5 8 Q37 6 35.5 4" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
        {/* Door */}
        <rect x="21" y="32" width="6" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
        {/* Windows */}
        <rect x="9" y="27" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
        <rect x="32" y="27" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Designed for Real People",
    body: "The Smart Display is designed to be understood at a glance, operated without instruction, and trusted by the people who see it every day. Design that drives adoption.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Left person */}
        <circle cx="16" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M6 38 C6 30 26 30 26 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Right person (slightly overlapping, slightly dimmer) */}
        <circle cx="30" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5" opacity="0.55"/>
        <path d="M20 38 C20 30 42 30 42 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
        {/* Connection arc between heads */}
        <path d="M20 10 Q23 6 26 10" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "In-House Advantage",
    body: "Design, engineering, and manufacturing under one roof means faster iteration, full IP ownership, and the ability to develop custom device variants for specific customer needs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Building */}
        <rect x="8" y="20" width="32" height="22" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Roof */}
        <path d="M4 20 L24 6 L44 20" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Door */}
        <rect x="20" y="32" width="8" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
        {/* Window left */}
        <rect x="11" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
        {/* Window right */}
        <rect x="30" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
        {/* Roof accent – gable vent */}
        <path d="M22 15 L24 12 L26 15" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        {/* Interlocking gear inside – small, top-right corner */}
        <circle cx="36" cy="10" r="4" stroke="#FF00B2" strokeWidth="1.1" opacity="0.6"/>
        <circle cx="36" cy="10" r="1.3" fill="#FF00B2" opacity="0.4"/>
        <path d="M36 5.5 L36 4.5 M36 14.5 L36 15.5 M40.5 10 L41.5 10 M31.5 10 L30.5 10" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Physical AI Aesthetic",
    body: "Adaptiv devices have a design language that communicates intelligence and precision. In a building, the Smart Display should feel like it belongs there — and signal that the building is smarter for it.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Central sparkle / diamond */}
        <path d="M24 8 L26.5 21.5 L40 24 L26.5 26.5 L24 40 L21.5 26.5 L8 24 L21.5 21.5 Z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Smaller satellite sparkles */}
        <path d="M38 10 L38.8 13 L42 13.8 L38.8 14.6 L38 17.6 L37.2 14.6 L34 13.8 L37.2 13 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.6"/>
        <path d="M10 33 L10.6 35.4 L13 36 L10.6 36.6 L10 39 L9.4 36.6 L7 36 L9.4 35.4 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.45"/>
        {/* Subtle centre dot */}
        <circle cx="24" cy="24" r="2" fill="#FF00B2" opacity="0.25"/>
      </svg>
    ),
  },
];

const values = [
  {
    title: "Physical AI, Not Screen AI",
    body: "We build intelligence into the real world, not another dashboard. Merlin acts in your building, not in a browser tab.",
    color: "#FF00B2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Globe */}
        <circle cx="24" cy="24" r="16" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Latitude lines */}
        <ellipse cx="24" cy="24" rx="9" ry="16" stroke="#FF00B2" strokeWidth="1.2" opacity="0.5"/>
        <path d="M8 24 Q16 20 24 24 Q32 28 40 24" stroke="#FF00B2" strokeWidth="1.1" opacity="0.5"/>
        <path d="M10 17 Q17 14 24 17 Q31 20 38 17" stroke="#FF00B2" strokeWidth="1" opacity="0.35"/>
        <path d="M10 31 Q17 28 24 31 Q31 34 38 31" stroke="#FF00B2" strokeWidth="1" opacity="0.35"/>
        {/* AI pulse dot */}
        <circle cx="24" cy="24" r="3" fill="#FF00B2" opacity="0.35"/>
        <circle cx="24" cy="24" r="5.5" stroke="#FF00B2" strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
  },
  {
    title: "Security-First",
    body: "From silicon to AI agent, security is the foundation. Never an afterthought, never a layer added later.",
    color: "#3b82f6",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Shield */}
        <path d="M24 6 L38 11 L38 24 C38 33 24 42 24 42 C24 42 10 33 10 24 L10 11 Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Lock body */}
        <rect x="18" y="24" width="12" height="9" rx="1.5" stroke="#3b82f6" strokeWidth="1.3"/>
        {/* Lock shackle */}
        <path d="M19.5 24 L19.5 20 A4.5 4.5 0 0 1 28.5 20 L28.5 24" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
        {/* Keyhole */}
        <circle cx="24" cy="28" r="1.5" fill="#3b82f6" opacity="0.5"/>
        <path d="M24 29.5 L24 31.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Built Local",
    body: "We build in the US for North America and in Europe for Europe. Local manufacturing, local compliance, local supply chain accountability.",
    color: "#14b8a6",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Map pin */}
        <path d="M24 6 C17 6 12 11.5 12 18 C12 27 24 42 24 42 C24 42 36 27 36 18 C36 11.5 31 6 24 6 Z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Inner circle */}
        <circle cx="24" cy="18" r="5" stroke="#14b8a6" strokeWidth="1.3"/>
        {/* Centre dot */}
        <circle cx="24" cy="18" r="1.8" fill="#14b8a6" opacity="0.4"/>
        {/* Horizon line suggesting ground / locality */}
        <path d="M10 43 Q24 40 38 43" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
  },
  {
    title: "Human-Centred",
    body: "The Smart Display is designed to be used by the people who see it every day. Technology that is not used is technology that does not work.",
    color: "#FF00B2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Head */}
        <circle cx="24" cy="14" r="7" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Shoulders / body */}
        <path d="M10 42 C10 32 38 32 38 42" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Heart on chest */}
        <path d="M21 36 C21 33.5 24 32 24 34 C24 32 27 33.5 27 36 C27 38.5 24 41 24 41 C24 41 21 38.5 21 36 Z" stroke="#FF00B2" strokeWidth="1.1" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "End-to-End Ownership",
    body: "We own every layer from device to AI. No black boxes. No integration risk. No divided accountability.",
    color: "#a855f7",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Left node */}
        <rect x="4" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        {/* Middle node */}
        <rect x="19" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        {/* Right node */}
        <rect x="34" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        {/* Connecting links */}
        <path d="M14 24 L19 24" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M29 24 L34 24" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Vertical bracket above — showing "owned top to bottom" */}
        <path d="M8 19 L8 13 L40 13 L40 19" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        {/* Vertical bracket below */}
        <path d="M8 29 L8 35 L40 35 L40 29" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Responsible AI",
    body: "AI that acts in the physical world carries real responsibility. Explainability and human oversight are built in from the start.",
    color: "#14b8a6",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Scale beam */}
        <path d="M24 12 L24 36" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 14 L36 14" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Base */}
        <path d="M18 36 L30 36" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 36 L21 40 M27 36 L27 40" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <path d="M18 40 L30 40" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
        {/* Left pan */}
        <path d="M12 14 L9 22 L15 22 Z" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M9 22 Q12 24 15 22" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Right pan (slightly lower = weight of responsibility) */}
        <path d="M36 14 L33 23 L39 23 Z" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M33 23 Q36 25 39 23" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Top pivot dot */}
        <circle cx="24" cy="12" r="1.5" fill="#14b8a6" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function CompanyPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-0 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-60"
          style={{ background: "radial-gradient(ellipse, rgba(255,0,178,0.12), transparent 65%)" }}
          aria-hidden="true" />
        <div className="container-site relative z-10 py-20 max-w-3xl">
          <Badge variant="dim" className="mb-6">About Us</Badge>
          <h1 className="text-display text-[#111827] mb-5 leading-none">
            We Build<br />Physical AI.<br />
            <span className="gradient-text-pink">End to End.</span>
          </h1>
          <p className="text-body-lg text-[#4b5563] leading-relaxed">
            Adaptiv AI Technologies designs the devices, writes the firmware, builds the platform, and runs the AI.
            From the Smart Display on your wall to the Merlin agent acting on what it senses — we own every
            layer, so our customers never have to wonder what happens between them.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── OUR STORY ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">Our Story</p>
                <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
                  The story starts in 2019, when Jean-Baptiste Leonelli founded <span className="text-[#374151] font-medium">Adaptiv Systems</span> — an industrial IoT company built on the conviction that connected devices could fundamentally change how buildings and operations are managed. Over the next few years, Adaptiv Systems deployed hardware and software across thousands of sites in Europe and North America.
                </p>
                <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
                  As AI became an increasingly central part of what IoT could do, it became clear that the next step wasn't just another product update — it was a new company, built from the ground up for the Physical AI era. In 2026, Jean-Baptiste brought together Nick Tau, Philippe Garnier, Ludovic Letellier, Patrice Cucchi, and Harold Stowe to co-found <span className="text-[#374151] font-medium">Adaptiv AI Technologies</span> — a group of companies dedicated to making Physical AI real.
                </p>
                <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
                  Adaptiv Systems evolved into Adaptiv AI Technologies, bringing its deployed customer base, operational expertise, and hardware heritage into the new entity. Adaptiv AI Technologies is headquartered in the United States, with operations and manufacturing on both sides of the Atlantic.
                </p>
                <p className="text-body font-semibold text-[#111827]">
                  The AI That Shows Up is not just our tagline. It is how we build.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2019", label: "Adaptiv Systems founded" },
                  { value: "2026", label: "Adaptiv AI Technologies founded" },
                  { value: "6", label: "Co-Founders" },
                  { value: "US + EU", label: "Operations & Manufacturing" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.07)] flex flex-col gap-2">
                    <div className="text-2xl font-bold text-[#FF00B2]">{stat.value}</div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FOUNDER ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">// Founders</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">The Vision Behind Adaptiv AI Technologies</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">Value creation<br />comes from differentiation.</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
              {/* Founder avatar */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6"
                    style={{ background: "linear-gradient(135deg, #FF00B2 0%, #cc0090 100%)" }}>
                    JBL
                  </div>
                  <h3 className="text-h3 text-[#111827] mb-1">Jean-Baptiste Leonelli</h3>
                  <p className="text-sm font-semibold text-[#FF00B2] mb-4">Co-Founder & President</p>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                      <span className="w-1 h-1 rounded-full bg-[#FF00B2] opacity-60" />
                      Co-founded Adaptiv AI Technologies, 2026
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                      <span className="w-1 h-1 rounded-full bg-[#FF00B2] opacity-60" />
                      Founded Adaptiv Systems, 2019
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                      <span className="w-1 h-1 rounded-full bg-[#FF00B2] opacity-60" />
                      Co-founded Temboo, Inc., New York, 2002
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                      <span className="w-1 h-1 rounded-full bg-[#FF00B2] opacity-60" />
                      Investor & board member, multiple tech companies
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder bio */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                <p className="text-body-lg text-[#4b5563] leading-relaxed">
                  Jean-Baptiste Leonelli is a renowned disruptor and opinion leader in the technology sector,
                  and especially in IoT. In 2019, he founded Adaptiv Systems — an industrial IoT company that
                  grew to deploy hardware and software across thousands of sites in Europe and North America. As
                  AI became central to what IoT could deliver, Jean-Baptiste saw an opportunity to build something
                  larger: a full Physical AI group, purpose-built for the AI era.
                </p>
                <p className="text-body text-[#64748b] leading-relaxed">
                  In 2026, he co-founded Adaptiv AI Technologies with Nick Tau, Philippe Garnier, Ludovic Letellier,
                  Patrice Cucchi, and Harold Stowe. Adaptiv Systems joined the group as a founding member,
                  bringing its operational track record and customer base into the new entity. Jean-Baptiste
                  also co-founded Temboo, Inc. in New York in 2002 — an early pioneer in connected technology.
                  An avid designer, inventor, and advocate of technology as a way to make daily lives better,
                  he has spent over two decades at the intersection of hardware, software, and user experience.
                </p>
                <p className="text-body text-[#64748b] leading-relaxed">
                  At Adaptiv AI Technologies, Jean-Baptiste works alongside his co-founders and a team of seasoned
                  entrepreneurs, engineers, and designers who share the conviction that the right answer for
                  Physical AI is never off the shelf — it is always custom-built, operated, and evolved for the
                  specific needs of each customer.
                </p>
                <blockquote className="border-l-2 border-[#FF00B2] pl-5 py-1">
                  <p className="text-body font-medium text-[#4b5563] italic leading-relaxed">
                    "Value creation comes from differentiation. We design exclusive, innovative and scalable solutions —
                    an ecosystem that can evolve over time according to your needs."
                  </p>
                  <footer className="mt-2 text-sm text-[#64748b]">— Jean-Baptiste Leonelli</footer>
                </blockquote>
              </div>
            </div>

            {/* Co-founders row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  initials: "NT", name: "Nick Tau", role: "Co-Founder & EVP Software", color: "#14b8a6",
                  bio: "Nick leads the engineering of the Merlin AI platform, edge runtimes, and developer APIs that turn physical data into autonomous action.",
                  facts: ["Co-founded Adaptiv AI Technologies, 2026", "Leads AI & software engineering"],
                },
                {
                  initials: "PG", name: "Philippe Garnier", role: "Co-Founder & EVP Operations", color: "#3b82f6",
                  bio: "Philippe oversees the full production lifecycle across US and European facilities — from component sourcing to deployment.",
                  facts: ["Co-founded Adaptiv AI Technologies, 2026", "Leads US & EU manufacturing operations"],
                },
                {
                  initials: "LL", name: "Ludovic Letellier", role: "Co-Founder", color: "#6366f1",
                  bio: "Ludovic brings deep expertise in hardware product development and go-to-market strategy across embedded systems and industrial technology.",
                  facts: ["Co-founded Adaptiv AI Technologies, 2026", "Hardware & product development"],
                },
                {
                  initials: "PC", name: "Patrice Cucchi", role: "Co-Founder & CFO", color: "#22c55e",
                  bio: "Patrice leads the group's financial strategy — from fundraising and investor relations to financial planning and risk management.",
                  facts: ["Co-founded Adaptiv AI Technologies, 2026", "Finance & investor relations"],
                },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-4 p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb]">
                  {/* Avatar + name header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${f.color} 0%, ${f.color}99 100%)` }}>
                      {f.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111827] leading-tight">{f.name}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: f.color }}>{f.role}</p>
                    </div>
                  </div>
                  {/* Bio */}
                  <p className="text-sm text-[#64748b] leading-relaxed">{f.bio}</p>
                  {/* Facts */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-[rgba(0,0,0,0.06)] mt-auto">
                    {f.facts.map((fact) => (
                      <span key={fact} className="inline-flex items-start gap-2 text-xs text-[#64748b] leading-snug">
                        <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: f.color, opacity: 0.6 }} />
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── BOARD OF DIRECTORS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">// Board</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">Governance</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">Board of Directors</h2>
                <p className="text-body text-[#64748b] mt-3 max-w-lg leading-relaxed">
                  Strategic oversight and long-term guidance for Adaptiv AI Technologies' growth across North America and Europe.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              {
                initials: "HS",
                name: "Harold Stowe",
                role: "Co-Founder & Chairman",
                color: "#a0b0d0",
                bio: "Harold co-founded Adaptiv AI Technologies in 2026 and serves as Chairman of the Board, bringing decades of strategic and operational leadership to guide the company's growth from hardware-first IIoT startup to full Physical AI platform.",
              },
              {
                initials: "LL",
                name: "Ludovic Letellier",
                role: "Board Member & Co-Founder",
                color: "#6366f1",
                bio: "Ludovic brings deep expertise in hardware product development and go-to-market strategy. His experience spans embedded systems, industrial technology, and building high-performance engineering teams.",
              },
            ].map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="p-6 flex flex-col gap-4 h-full rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] hover:border-[rgba(0,0,0,0.12)] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}99 100%)` }}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-h4 text-[#111827] leading-tight">{member.name}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: member.color }}>{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">// Leadership</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">Highly Experienced</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">Seasoned entrepreneurs,<br />engineers, and designers.</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className={`p-6 flex flex-col gap-4 h-full rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 ${member.highlight ? "border-[rgba(255,0,178,0.2)] shadow-[0_4px_24px_rgba(255,0,178,0.12)]" : "border-[rgba(0,0,0,0.07)] hover:border-[rgba(0,0,0,0.12)]"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)` }}>
                      {member.initials}
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      {member.highlight && (
                        <span className="text-[10px] font-semibold text-[#FF00B2] uppercase tracking-wider border border-[rgba(255,0,178,0.25)] bg-[rgba(255,0,178,0.08)] px-2 py-0.5 rounded-full">
                          Co-Founder
                        </span>
                      )}
                      {member.isNew && (
                        <span className="text-[10px] font-semibold text-[#14b8a6] uppercase tracking-wider border border-[rgba(20,184,166,0.25)] bg-[rgba(20,184,166,0.08)] px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h4 text-[#111827] leading-tight">{member.name}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: member.color }}>{member.role}</p>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DESIGN STUDIO ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">Where Physical AI Is Born</p>
              <h2 className="text-h1 text-[#111827] mb-5">The Design Studio<br />Behind Every Device</h2>
              <p className="text-body-lg text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
                Every Adaptiv device starts in our Design Studio — a multidisciplinary team of industrial
                designers, hardware engineers, embedded systems specialists, and UX designers who share
                a single brief: build devices that make Physical AI real.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studioStrengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="p-6 flex flex-col gap-4 h-full rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] hover:border-[rgba(255,0,178,0.18)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,0,178,0.08)", border: "1px solid rgba(255,0,178,0.18)" }}>
                    {s.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{s.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-14">Our Values</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="p-6 h-full flex flex-col gap-4 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white hover:border-[rgba(0,0,0,0.12)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${v.color}12`, border: `1px solid ${v.color}28` }}>
                    {v.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{v.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── INVESTORS ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <Badge variant="dim" className="mb-5">For Investors & Partners</Badge>
            <h2 className="text-h2 text-[#111827] mb-6">A Platform Company<br />With Hardware Defensibility</h2>
            <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
              Adaptiv AI Technologies is a US-headquartered group of companies with a global footprint and a rare
              combination of assets: in-house hardware design, dual-region manufacturing (US and Europe),
              a proprietary IIoT platform, and an AI agent layer — all owned and integrated end to end.
            </p>
            <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
              Founded in 2026 by Jean-Baptiste Leonelli, Nick Tau, Philippe Garnier, Ludovic Letellier, Patrice Cucchi, and Harold Stowe, the group brings
              together expertise across hardware, AI software, and operations. The Built Local strategy
              is a competitive and commercial advantage: shorter lead times, domestic content compliance
              for government and regulated customers, and a supply chain that does not depend on long-haul logistics.
            </p>
            <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
              The Smart Display creates a network effect: each building deployment generates operational
              intelligence that makes Merlin more capable in every subsequent deployment. The physical
              device network and the AI platform are mutually reinforcing assets that grow stronger as the
              customer base grows.
            </p>
            <p className="text-body font-semibold text-[#111827] mb-8">
              Physical AI is a new product category. Adaptiv AI Technologies is building the platform to define it.
            </p>
            <Button asChild>
              <Link href="mailto:contact@adaptiv.company">contact@adaptiv.company →</Link>
            </Button>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
