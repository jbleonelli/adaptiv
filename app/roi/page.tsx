import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "ROI — The Financial Case for Physical AI",
  description: "Adaptiv delivers 40\u201360% operational cost reduction and $200K\u2013$1M+ annual savings per large facility. Deployed across 12,000 devices in 6,000+ buildings.",
};

const headlineStats = [
  { stat: "40–60%", label: "Operational cost reduction across scenarios" },
  { stat: "$200K–$1M+", label: "Annual savings per large facility" },
  { stat: "12,000", label: "Devices across 6,000+ buildings" },
  { stat: "15–20%", label: "Occupant satisfaction improvement" },
];

const savingsAreas = [
  {
    title: "Energy",
    stat: "10–30%",
    desc: "Merlin adjusts HVAC and lighting in real time based on occupancy and weather. Universities have deferred $1M\u2013$5M in new construction through smarter space utilisation alone.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" fill="#FF00B2" fillOpacity="0.08" />
      </svg>
    ),
  },
  {
    title: "Maintenance",
    stat: "40–60%",
    desc: "Predictive alerts catch leaks in seconds and forecast equipment failures before they happen. A 2,000-space parking structure saves ~1.5 FTE ($45K/yr) and avoids $5K+ per emergency repair.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M18 30l-6 6a3 3 0 004.24 4.24L22 34" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 18l6-6a3 3 0 00-4.24-4.24L26 14" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="16" width="16" height="16" rx="3" stroke="#FF00B2" strokeWidth="1.5" transform="rotate(45 24 24)" />
        <rect x="16" y="16" width="16" height="16" rx="3" fill="#FF00B2" fillOpacity="0.08" transform="rotate(45 24 24)" />
      </svg>
    ),
  },
  {
    title: "Operations",
    stat: "40–55%",
    desc: "Demand-driven dispatch replaces fixed schedules. A 200-person office with 30 meeting rooms recovers $150K\u2013$250K from ghost bookings alone. Airport terminals cut SLA breaches 50\u201370%, saving $50K\u2013$200K in contract penalties.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="14" r="6" stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="6" fill="#FF00B2" fillOpacity="0.08" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Healthcare & Compliance",
    stat: "80%",
    desc: "Reduction in documentation time with audit-ready compliance evidence. One prevented hospital-acquired infection saves $140K\u2013$450K \u2014 and the system catches risks before they escalate.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="#FF00B2" strokeWidth="1.5" strokeOpacity="0.3" />
        <path d="M24 12v12l8 4" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" fill="#FF00B2" />
      </svg>
    ),
  },
];

export default function ROIPage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          aria-hidden="true" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 70% 30%, rgba(255,0,178,0.06) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="pink" className="mb-6">RETURN ON INVESTMENT</Badge>
              <h1 className="text-display text-[#111827] mb-6">It Pays for Itself.<br />Then Keeps Paying.</h1>
              <p className="text-body-lg text-[#4b5563] mb-10 max-w-2xl leading-relaxed">
                Deployed across 12,000 devices in 6,000+ buildings \u2014 including Charles de Gaulle Airport and nuclear power plants \u2014 Adaptiv delivers 40\u201360% operational cost reduction. Partners like ABM ($8B+ revenue) and Samsic trust the platform at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild><Link href="/contact">Get Your ROI Estimate</Link></Button>
                <Button variant="secondary" size="lg" asChild><Link href="#savings">See the Numbers →</Link></Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HEADLINE NUMBERS ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f9fb] border-y border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {headlineStats.map((item) => (
              <Reveal key={item.label}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#FF00B2] mb-2">{item.stat}</div>
                  <p className="text-sm text-[#4b5563]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE THE SAVINGS COME FROM ──────────────────────────── */}
      <section id="savings" className="py-24 lg:py-28 bg-white">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">WHERE IT ADDS UP</p>
            <h2 className="text-h1 text-[#111827] mb-16 max-w-2xl">Four Cost Centres. One Platform Cutting All of Them.</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.05}>
                <Card className="p-7 h-full flex flex-col">
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-h4 text-[#111827] mb-1">{area.title}</h3>
                  <span className="text-2xl font-bold text-[#FF00B2] mb-3">{area.stat}</span>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{area.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── THE MATH ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">THREE-TIER VALUE MODEL</p>
                <h2 className="text-h1 text-[#111827] mb-6">Start Simple. Scale Into Full Predictive Intelligence.</h2>
                <p className="text-body text-[#4b5563] mb-8 leading-relaxed">
                  <strong>Tier 1 \u2014 Smart Display alone:</strong> cleaning logs, service requests, satisfaction feedback \u2014 instant transparency and accountability.<br /><br />
                  <strong>Tier 2 \u2014 Add 7 embedded sensors + Merlin AI:</strong> operations shift from fixed schedules to demand-driven dispatch.<br /><br />
                  <strong>Tier 3 \u2014 Add external BLE sensors:</strong> full predictive capability \u2014 leak detection in seconds, equipment failure forecasting, and audit-ready compliance evidence.
                </p>
                <Button size="lg" asChild><Link href="/contact">Calculate Your Savings</Link></Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-10" glow>
                <h3 className="text-h3 text-[#111827] mb-6">Savings by Vertical</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Large office (200 ppl, 30 rooms)", value: "$150K–$250K", sub: "Ghost booking recovery + 40\u201355% labor reduction" },
                    { label: "Airport terminal", value: "$50K–$200K", sub: "50\u201370% SLA breach reduction, penalty savings" },
                    { label: "Healthcare facility", value: "$140K–$450K", sub: "Per prevented infection + 80% doc-time reduction" },
                    { label: "University campus", value: "$1M–$5M", sub: "Deferred new construction via space optimisation" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-[#111827]">{row.label}</div>
                        <div className="text-xs text-[#64748b]">{row.sub}</div>
                      </div>
                      <div className="text-lg font-bold text-[#111827] whitespace-nowrap">{row.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[rgba(0,0,0,0.07)] flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4b5563]">Annual savings per large facility</span>
                  <span className="text-2xl font-bold text-[#FF00B2]">$200K–$1M+</span>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-h1 text-[#111827] mb-5">Ready to See Your Numbers?</h2>
            <p className="text-body text-[#4b5563] mb-10 max-w-lg mx-auto">
              Tell us about your facility and we&apos;ll model your savings across all three tiers — no obligation. Join 6,000+ buildings already on the platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild><Link href="/contact">Get Your ROI Estimate</Link></Button>
              <Button variant="secondary" size="lg" asChild><Link href="/solutions">Explore Solutions →</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
