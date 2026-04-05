import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Company — The Only Complete Physical AI Stack",
  description: "Founded in 2019. 12,000 devices across 6,000+ buildings. The only company that owns the complete Physical AI stack: proprietary hardware, connectivity, AI engine, and occupant interface.",
};

const team: { name: string; role: string; bio: string; initials: string; color: string; isFounder?: boolean }[] = [
  {
    name: "Jean-Baptiste Leonelli",
    role: "Founder & President",
    bio: "Jean-Baptiste founded Adaptiv AI Technologies in 2019 with the conviction that connected devices could fundamentally change how buildings and operations are managed. A renowned disruptor in IoT, he also co-founded Temboo, Inc. in New York in 2002, and is an investor and board member of several technology companies.",
    initials: "JBL",
    color: "#FF00B2",
    isFounder: true,
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
    role: "EVP Software",
    bio: "Nick leads the software engineering organisation — from the Merlin AI platform and edge runtime to the developer APIs and Merlin Studio no-code agent builder.",
    initials: "NT",
    color: "#14b8a6",
  },
  {
    name: "Philippe Garnier",
    role: "EVP Operations",
    bio: "Philippe leads operational excellence across US and European manufacturing facilities, ensuring quality, delivery, and responsible production standards at every stage.",
    initials: "PG",
    color: "#3b82f6",
  },
  {
    name: "Patrice Cucchi",
    role: "CFO",
    bio: "Patrice leads the group's financial strategy — from fundraising and investor relations to financial planning, risk management, and the operational controls that support Adaptiv's dual-continent growth.",
    initials: "PC",
    color: "#22c55e",
  },
  {
    name: "Harold Stowe",
    role: "Chairman of the Board",
    bio: "Harold serves as Chairman of the Board, bringing decades of strategic and operational leadership to guide the company's growth as a full Physical AI platform.",
    initials: "HS",
    color: "#a0b0d0",
  },
  {
    name: "Ludovic Letellier",
    role: "Board Member",
    bio: "Ludovic brings deep expertise in hardware product development and go-to-market strategy. His experience spans embedded systems, industrial technology, and building high-performance engineering teams.",
    initials: "LL",
    color: "#6366f1",
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
    body: "IP-rated enclosures. Glove-operable interfaces. Wide-temperature-range electronics. Zero-infrastructure deployment: no wiring, no Wi-Fi, no IT coordination. Deployed at Paris Charles de Gaulle Airport and in nuclear power plants.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="22" width="36" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M6 22 L6 14 L14 22 L14 14 L22 22 L22 14 L30 22" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="33" y="14" width="5" height="8" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
        <path d="M35.5 13 Q34 10 35.5 8 Q37 6 35.5 4" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
        <rect x="21" y="32" width="6" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
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
        <circle cx="16" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M6 38 C6 30 26 30 26 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5" opacity="0.55"/>
        <path d="M20 38 C20 30 42 30 42 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
        <path d="M20 10 Q23 6 26 10" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "In-House Advantage",
    body: "Design, engineering, and manufacturing under one roof. We design and manufacture our own hardware — competitors assemble third-party components. 10+ patents identified and in process. Full IP ownership and the ability to develop custom device variants for specific customer needs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="20" width="32" height="22" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M4 20 L24 6 L44 20" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="20" y="32" width="8" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3"/>
        <rect x="11" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
        <rect x="30" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2"/>
        <path d="M22 15 L24 12 L26 15" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <circle cx="36" cy="10" r="4" stroke="#FF00B2" strokeWidth="1.1" opacity="0.6"/>
        <circle cx="36" cy="10" r="1.3" fill="#FF00B2" opacity="0.4"/>
        <path d="M36 5.5 L36 4.5 M36 14.5 L36 15.5 M40.5 10 L41.5 10 M31.5 10 L30.5 10" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Physical AI Aesthetic",
    body: "Adaptiv devices cross-validate cleaning events through badge tap + VOC change + vibration pattern. Data is signed with cryptographic keys at manufacturing. The device communicates intelligence because it is intelligent.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 8 L26.5 21.5 L40 24 L26.5 26.5 L24 40 L21.5 26.5 L8 24 L21.5 21.5 Z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M38 10 L38.8 13 L42 13.8 L38.8 14.6 L38 17.6 L37.2 14.6 L34 13.8 L37.2 13 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.6"/>
        <path d="M10 33 L10.6 35.4 L13 36 L10.6 36.6 L10 39 L9.4 36.6 L7 36 L9.4 35.4 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.45"/>
        <circle cx="24" cy="24" r="2" fill="#FF00B2" opacity="0.25"/>
      </svg>
    ),
  },
];

const values = [
  {
    title: "Physical AI, Not Screen AI",
    body: "AI venture funding reached $211B in 2025, yet nearly all investment flowed to robotics and autonomous vehicles. The built environment — where 90% of humanity spends 90% of its time — remains underfunded. We build intelligence into that world.",
    color: "#FF00B2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="#FF00B2" strokeWidth="1.5"/>
        <ellipse cx="24" cy="24" rx="9" ry="16" stroke="#FF00B2" strokeWidth="1.2" opacity="0.5"/>
        <path d="M8 24 Q16 20 24 24 Q32 28 40 24" stroke="#FF00B2" strokeWidth="1.1" opacity="0.5"/>
        <path d="M10 17 Q17 14 24 17 Q31 20 38 17" stroke="#FF00B2" strokeWidth="1" opacity="0.35"/>
        <path d="M10 31 Q17 28 24 31 Q31 34 38 31" stroke="#FF00B2" strokeWidth="1" opacity="0.35"/>
        <circle cx="24" cy="24" r="3" fill="#FF00B2" opacity="0.35"/>
        <circle cx="24" cy="24" r="5.5" stroke="#FF00B2" strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
  },
  {
    title: "Security-First",
    body: "SOC 2 Type 2 certified across the entire vertically integrated stack. Data signed with cryptographic keys at manufacturing — tamper-proof chain of custody. Complete network independence: data never touches the landlord's network.",
    color: "#3b82f6",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6 L38 11 L38 24 C38 33 24 42 24 42 C24 42 10 33 10 24 L10 11 Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="18" y="24" width="12" height="9" rx="1.5" stroke="#3b82f6" strokeWidth="1.3"/>
        <path d="M19.5 24 L19.5 20 A4.5 4.5 0 0 1 28.5 20 L28.5 24" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
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
        <path d="M24 6 C17 6 12 11.5 12 18 C12 27 24 42 24 42 C24 42 36 27 36 18 C36 11.5 31 6 24 6 Z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="24" cy="18" r="5" stroke="#14b8a6" strokeWidth="1.3"/>
        <circle cx="24" cy="18" r="1.8" fill="#14b8a6" opacity="0.4"/>
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
        <circle cx="24" cy="14" r="7" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M10 42 C10 32 38 32 38 42" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 36 C21 33.5 24 32 24 34 C24 32 27 33.5 27 36 C27 38.5 24 41 24 41 C24 41 21 38.5 21 36 Z" stroke="#FF00B2" strokeWidth="1.1" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "End-to-End Ownership",
    body: "The only company with the complete Physical AI stack: proprietary hardware + connectivity infrastructure + Merlin AI engine + occupant-facing interface. No competitor owns all four layers. No black boxes. No integration risk.",
    color: "#a855f7",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="19" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="34" y="19" width="10" height="10" rx="2.5" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M14 24 L19 24" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M29 24 L34 24" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 19 L8 13 L40 13 L40 19" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
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
        <path d="M24 12 L24 36" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 14 L36 14" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 36 L30 36" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 36 L21 40 M27 36 L27 40" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <path d="M18 40 L30 40" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
        <path d="M12 14 L9 22 L15 22 Z" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M9 22 Q12 24 15 22" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M36 14 L33 23 L39 23 Z" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M33 23 Q36 25 39 23" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round"/>
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
            The Only Complete<br />Physical AI Stack.<br />
            <span className="gradient-text-pink">No One Else Has It.</span>
          </h1>
          <p className="text-body-lg text-[#4b5563] leading-relaxed">
            Adaptiv is the only company that owns all four layers of the Physical AI stack: proprietary hardware,
            connectivity infrastructure, the Merlin AI engine, and the occupant-facing interface. Competitors
            raised over $1 billion combined — none built a complete stack. We did it with a lean team of 8
            and over $5M in recurring revenue.
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
                  In 2019, Jean-Baptiste Leonelli founded <span className="text-[#374151] font-medium">Adaptiv AI Technologies</span> with a clear conviction: the built environment — where 90% of humanity spends 90% of its time — needed its own AI platform, not another dashboard. But only if someone owned the entire stack, from hardware to AI.
                </p>
                <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
                  From the beginning, Adaptiv designed its own hardware, wrote its own firmware, and built its own platform. Data is signed with cryptographic keys at manufacturing — creating a tamper-proof chain of custody. Devices deploy with zero infrastructure: no wiring, no Wi-Fi, no IT coordination. Data never touches the landlord's network.
                </p>
                <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
                  Today, Adaptiv has 12,000 devices deployed across 6,000+ buildings, partnerships with ABM (an $8B+ global FM company) and Samsic, deployments at Paris Charles de Gaulle Airport, and machine vision running in nuclear power plants. The entire vertically integrated stack is SOC 2 Type 2 certified, with 10+ patents identified and in process.
                </p>
                <p className="text-body font-semibold text-[#111827]">
                  The AI That Shows Up is not just our tagline. It is how we build.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "12,000", label: "Devices deployed" },
                  { value: "6,000+", label: "Buildings worldwide" },
                  { value: "$5M+", label: "Recurring revenue" },
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
                <span className="section-number block mb-4">// Founder</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">The Vision Behind Adaptiv AI Technologies</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">Value creation<br />comes from differentiation.</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6"
                    style={{ background: "linear-gradient(135deg, #FF00B2 0%, #cc0090 100%)" }}>
                    JBL
                  </div>
                  <h3 className="text-h3 text-[#111827] mb-1">Jean-Baptiste Leonelli</h3>
                  <p className="text-sm font-semibold text-[#FF00B2] mb-4">Founder & President</p>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                      <span className="w-1 h-1 rounded-full bg-[#FF00B2] opacity-60" />
                      Founded Adaptiv AI Technologies, 2019
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

              <div className="lg:col-span-2 flex flex-col gap-5">
                <p className="text-body-lg text-[#4b5563] leading-relaxed">
                  Jean-Baptiste Leonelli is a renowned disruptor and opinion leader in the technology sector,
                  and especially in IoT. In 2019, he founded Adaptiv AI Technologies with a vision to build
                  a company that would own the full stack of Physical AI — from the devices on the wall to
                  the AI agent acting on what they sense.
                </p>
                <p className="text-body text-[#64748b] leading-relaxed">
                  Under his leadership, Adaptiv has grown to 12,000 devices across 6,000+ buildings, secured
                  partnerships with ABM and Samsic, and deployed at Paris Charles de Gaulle Airport and in nuclear
                  power plants. Jean-Baptiste also co-founded Temboo, Inc. in New York in 2002 — an early pioneer
                  in connected technology. An avid designer, inventor, and advocate of technology as a way to
                  make daily lives better, he has spent over two decades at the intersection of hardware,
                  software, and user experience.
                </p>
                <blockquote className="border-l-2 border-[#FF00B2] pl-5 py-1">
                  <p className="text-body font-medium text-[#4b5563] italic leading-relaxed">
                    &ldquo;Value creation comes from differentiation. We design exclusive, innovative and scalable solutions —
                    an ecosystem that can evolve over time according to your needs.&rdquo;
                  </p>
                  <footer className="mt-2 text-sm text-[#64748b]">— Jean-Baptiste Leonelli</footer>
                </blockquote>
              </div>
            </div>
          </Reveal>
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
                <div className={`p-6 flex flex-col gap-4 h-full rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 ${member.isFounder ? "border-[rgba(255,0,178,0.2)] shadow-[0_4px_24px_rgba(255,0,178,0.12)]" : "border-[rgba(0,0,0,0.07)] hover:border-[rgba(0,0,0,0.12)]"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)` }}>
                      {member.initials}
                    </div>
                    {member.isFounder && (
                      <span className="text-[10px] font-semibold text-[#FF00B2] uppercase tracking-wider border border-[rgba(255,0,178,0.25)] bg-[rgba(255,0,178,0.08)] px-2 py-0.5 rounded-full">
                        Founder
                      </span>
                    )}
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
              Adaptiv is the only company that owns the complete Physical AI stack: proprietary hardware,
              connectivity infrastructure, the Merlin AI engine, and the occupant-facing interface. No
              competitor owns all four layers. Competitors raised over $1 billion combined and none built
              a complete stack — Density ($225M raised, sensors only), VergeSense ($83M, no operational
              workflow), Vayyar ($300M+, no building-level AI), Infogrid ($148M+, third-party hardware),
              OfficeSpace ($150M, no sensors, no AI agent).
            </p>
            <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
              With 12,000 devices across 6,000+ buildings, over $5M in recurring revenue, and partnerships
              with ABM ($8B+ global FM company) and Samsic, Adaptiv has proven commercial traction.
              Deployments include Paris Charles de Gaulle Airport and machine vision in nuclear power plants.
              The entire stack is SOC 2 Type 2 certified. Zero-infrastructure deployment means no wiring,
              no Wi-Fi, no IT coordination — data never touches the landlord's network.
            </p>
            <p className="text-body text-[#4b5563] mb-5 leading-relaxed">
              Physical AI scaleups raised $16B+ in the first 9 months of 2025, yet nearly all investment
              flowed to robotics and autonomous vehicles. The built environment — where 90% of humanity
              spends 90% of its time — remains the most underfunded frontier in AI. Each building deployment
              generates operational intelligence that makes Merlin more capable in every subsequent deployment.
            </p>
            <p className="text-body font-semibold text-[#111827] mb-8">
              A lean team of 8 people. Over $5M ARR. 10+ patents in process. Physical AI is a new product category. Adaptiv is the platform built to define it.
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
