import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "ROI — The Financial Case for Physical AI",
  description: "Adaptiv and Merlin AI deliver measurable savings in energy, maintenance, and operations. Full payback in under 12 months.",
};

const headlineStats = [
  { stat: "€2.4M", label: "Avg. annual savings per 100k sqft" },
  { stat: "<8 mo", label: "Average payback period" },
  { stat: "3.2x", label: "3-year ROI multiple" },
  { stat: "10,000+", label: "Sites deployed" },
];

const savingsAreas = [
  {
    title: "Energy",
    stat: "25–40%",
    desc: "Merlin adjusts HVAC, lighting, and power in real time based on occupancy and weather. Empty rooms stop costing you money.",
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
    desc: "Predictive alerts on vibration, temperature drift, and pressure drops. Fix on your schedule — not when things break at midnight.",
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
    stat: "20–35%",
    desc: "Automated dispatch, compliance reports, and overnight monitoring. Your team focuses on decisions, not routine checks.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="14" r="6" stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="6" fill="#FF00B2" fillOpacity="0.08" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Asset Lifespan",
    stat: "+15–25%",
    desc: "Equipment running within optimal parameters lasts longer. Fewer replacements, lower capex.",
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
                Most customers hit full payback in under 8 months. After that, every dollar Merlin saves goes straight to your bottom line — compounding, year after year.
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
            <h2 className="text-h1 text-[#111827] mb-16 max-w-2xl">Four Cost Centres. One System Cutting All of Them.</h2>
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
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">THE MATH</p>
                <h2 className="text-h1 text-[#111827] mb-6">Every Month You Wait Costs More Than Deploying</h2>
                <p className="text-body text-[#4b5563] mb-8 leading-relaxed">
                  For a typical 50,000 sqft building, delaying six months means €120k–€200k in avoidable waste — energy in empty rooms, surprise repairs, manual compliance prep, and tenant churn. That money never comes back.
                </p>
                <Button size="lg" asChild><Link href="/contact">Calculate Your Savings</Link></Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-10" glow>
                <h3 className="text-h3 text-[#111827] mb-6">Typical Commercial Building</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Deployment cost", value: "€80k–€150k", sub: "Hardware + install + year 1" },
                    { label: "Year 1 savings", value: "€120k–€240k", sub: "Energy + maintenance + ops" },
                    { label: "Year 2+ savings", value: "€150k–€300k", sub: "Compounding optimisation" },
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
                  <span className="text-sm font-medium text-[#4b5563]">Payback period</span>
                  <span className="text-2xl font-bold text-[#FF00B2]">&lt; 8 months</span>
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
              Tell us about your building and we&apos;ll send you a custom ROI projection — no obligation.
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
