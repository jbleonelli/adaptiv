import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "ROI — The Financial Case for Physical AI",
  description: "Adaptiv products and Merlin AI deliver measurable savings in energy, maintenance, operations, and labour. See the numbers behind Physical AI.",
};

const savingsAreas = [
  {
    title: "Energy Costs",
    stat: "25–40%",
    statLabel: "reduction in energy spend",
    body: "Merlin monitors HVAC, lighting, and power consumption in real time across every zone. It adjusts set points based on actual occupancy and weather, shuts down systems in empty areas, and identifies equipment running outside optimal parameters. Savings compound across every building and every floor — automatically, 24/7.",
    examples: [
      "HVAC schedules dynamically adjusted to real occupancy, not static calendars",
      "Lights and ventilation automatically reduced in unoccupied zones",
      "Peak demand management to avoid utility surcharges",
      "Energy waste flagged before it becomes a monthly line item",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" fill="#FF00B2" fillOpacity="0.08" />
        <circle cx="24" cy="24" r="20" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Maintenance",
    stat: "40–60%",
    statLabel: "fewer reactive maintenance calls",
    body: "Merlin detects anomalies — vibration patterns, temperature drift, pressure drops, unusual power draw — before they become failures. Maintenance shifts from reactive to predictive. You fix things on your schedule, not when they break on a Friday night.",
    examples: [
      "Vibration monitoring on motors, compressors, and fans flags degradation weeks early",
      "Temperature and humidity drift detected before it causes damage or complaints",
      "Filter change reminders based on actual airflow data, not arbitrary schedules",
      "Full maintenance history logged automatically for every asset",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M18 30l-6 6a3 3 0 004.24 4.24L22 34" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 18l6-6a3 3 0 00-4.24-4.24L26 14" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="16" width="16" height="16" rx="3" stroke="#FF00B2" strokeWidth="1.5" transform="rotate(45 24 24)" />
        <rect x="16" y="16" width="16" height="16" rx="3" fill="#FF00B2" fillOpacity="0.08" transform="rotate(45 24 24)" />
        <circle cx="24" cy="24" r="4" stroke="#FF00B2" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Labour & Operations",
    stat: "20–35%",
    statLabel: "reduction in operational overhead",
    body: "Merlin automates the tasks your team currently does manually — dispatching cleaning crews based on actual usage, generating compliance reports, monitoring building conditions overnight, coordinating between systems. Your people focus on decisions and exceptions, not routine checks.",
    examples: [
      "Cleaning dispatched by occupancy data, not fixed schedules",
      "Compliance and audit reports generated automatically from sensor data",
      "Night and weekend monitoring handled entirely by Merlin",
      "Fewer on-site staff hours required for routine inspections",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="14" r="6" stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="6" fill="#FF00B2" fillOpacity="0.08" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 26l4 4 4-4" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Equipment Lifespan",
    stat: "15–25%",
    statLabel: "longer asset lifespan",
    body: "When equipment runs within optimal parameters and maintenance is performed proactively, assets last longer. Merlin ensures HVAC units, motors, pumps, and building systems operate within spec — extending replacement cycles and reducing capital expenditure.",
    examples: [
      "HVAC units run at optimal loads instead of constant full-power cycles",
      "Motors and pumps serviced before bearing wear causes cascading damage",
      "Reduced thermal stress on electrical systems through balanced load management",
      "Historical performance data informs smarter replacement decisions",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="16" stroke="#FF00B2" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="24" cy="24" r="16" fill="#FF00B2" fillOpacity="0.04" />
        <path d="M24 12v12l8 4" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" fill="#FF00B2" />
        <path d="M16 8l-2-4M32 8l2-4" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Tenant Satisfaction & Retention",
    stat: "Up to 90%",
    statLabel: "tenant retention rate",
    body: "Buildings managed by Merlin are more comfortable, more responsive, and better maintained. Tenants notice. Complaints drop, lease renewals increase, and the building's reputation improves — directly protecting your rental income.",
    examples: [
      "Temperature and air quality maintained to precise comfort standards",
      "Issues addressed before tenants need to report them",
      "Smart Displays in common areas show building status and Merlin activity",
      "Data-backed sustainability reports strengthen ESG positioning for tenants",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 8l4 8 9 1.3-6.5 6.3 1.5 9L24 28.5 15.9 32.6l1.5-9L11 17.3l9-1.3z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 8l4 8 9 1.3-6.5 6.3 1.5 9L24 28.5 15.9 32.6l1.5-9L11 17.3l9-1.3z" fill="#FF00B2" fillOpacity="0.08" />
        <path d="M14 38h20" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" />
        <path d="M17 42h14" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Compliance & Risk",
    stat: "80%",
    statLabel: "reduction in compliance preparation time",
    body: "Merlin continuously logs every environmental condition, every action taken, and every decision made — with full traceability. When an audit arrives, reports are generated in seconds, not days. Insurance risk profiles improve with documented predictive maintenance and continuous monitoring.",
    examples: [
      "Automatic environmental condition logging for health & safety compliance",
      "Audit-ready reports generated on demand from real sensor data",
      "Incident timelines with full sensor context for insurance claims",
      "Documented predictive maintenance history reduces insurance premiums",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 6L38 13v11c0 9.5-6 17.5-14 20-8-2.5-14-10.5-14-20V13L24 6z" stroke="#FF00B2" strokeWidth="1.5" />
        <path d="M24 6L38 13v11c0 9.5-6 17.5-14 20-8-2.5-14-10.5-14-20V13L24 6z" fill="#FF00B2" fillOpacity="0.06" />
        <path d="M18 24l4 4 8-8" stroke="#FF00B2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const roiTimeline = [
  { month: "Month 1–2", title: "Deploy & Baseline", desc: "Smart Displays and sensors installed. Merlin begins ingesting data and establishing operational baselines for your building or facility." },
  { month: "Month 3", title: "First Insights", desc: "Merlin identifies energy waste patterns, underused spaces, and equipment operating outside optimal ranges. First savings start appearing on utility bills." },
  { month: "Month 6", title: "Predictive Maintenance Active", desc: "Merlin has enough historical data to predict failures. Reactive maintenance calls begin dropping. Cleaning and operations are now dispatched by real data." },
  { month: "Month 12", title: "Full ROI Realised", desc: "Most customers see full payback within 12 months. Ongoing savings compound year-over-year as Merlin continuously optimises across all building systems." },
];

const caseNumbers = [
  { stat: "€2.4M", label: "Average annual savings per 100,000 sqft commercial building" },
  { stat: "8 months", label: "Average time to full payback on Adaptiv deployment" },
  { stat: "10,000+", label: "Sites deployed across Europe and the United States" },
  { stat: "3.2x", label: "Average 3-year ROI multiple on Adaptiv investment" },
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
              <h1 className="text-display text-[#111827] mb-6">Physical AI<br />Pays for Itself.</h1>
              <p className="text-body-lg text-[#4b5563] mb-10 max-w-2xl leading-relaxed">
                Adaptiv products and Merlin deliver measurable, compounding savings from day one.
                Energy costs drop. Maintenance becomes predictive. Operations run leaner.
                Most customers see full payback in under 12 months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild><Link href="/contact">Calculate Your ROI</Link></Button>
                <Button variant="secondary" size="lg" asChild><Link href="#savings">See the Numbers →</Link></Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HEADLINE NUMBERS ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f9fb] border-y border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseNumbers.map((item) => (
              <Reveal key={item.label}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#FF00B2] mb-3">{item.stat}</div>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE THE SAVINGS COME FROM ──────────────────────────── */}
      <section id="savings" className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">WHERE THE SAVINGS COME FROM</p>
            <h2 className="text-h1 text-[#111827] mb-6 max-w-2xl">Six Areas Where Adaptiv Reduces Your Costs</h2>
            <p className="text-body text-[#4b5563] mb-16 max-w-2xl">
              Every Adaptiv deployment touches multiple cost centres simultaneously. Merlin doesn&apos;t just monitor — it acts, and every action translates into measurable savings.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savingsAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.05}>
                <Card className="p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0">{area.icon}</div>
                    <div>
                      <h3 className="text-h4 text-[#111827] mb-1">{area.title}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#FF00B2]">{area.stat}</span>
                        <span className="text-xs text-[#64748b]">{area.statLabel}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-5">{area.body}</p>
                  <ul className="mt-auto flex flex-col gap-2">
                    {area.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-[#64748b]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B2] mt-1.5 flex-shrink-0 opacity-50" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── HOW FAST YOU SEE RESULTS ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">TIME TO VALUE</p>
            <h2 className="text-h1 text-[#111827] mb-6 max-w-2xl">From Installation to Full Payback in Under 12 Months</h2>
            <p className="text-body text-[#4b5563] mb-16 max-w-xl">
              Adaptiv deployments start delivering value immediately. Here&apos;s the typical path to full ROI.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiTimeline.map((step, i) => (
              <Reveal key={step.month} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,0,178,0.08)] border border-[rgba(255,0,178,0.2)] flex items-center justify-center text-sm font-bold text-[#FF00B2]">
                      {i + 1}
                    </div>
                    <span className="text-xs font-semibold text-[#FF00B2] uppercase tracking-wider">{step.month}</span>
                  </div>
                  <h3 className="text-h4 text-[#111827] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── THE COST OF DOING NOTHING ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">THE COST OF WAITING</p>
                <h2 className="text-h1 text-[#111827] mb-6">Every Month Without Merlin Is Money Lost</h2>
                <p className="text-body text-[#4b5563] mb-6 leading-relaxed">
                  The savings Merlin delivers are not speculative. They come from eliminating waste that is happening right now in your building — energy running in empty rooms, equipment degrading without warning, staff performing checks that a sensor could handle.
                </p>
                <p className="text-body text-[#4b5563] mb-8 leading-relaxed">
                  For a typical 50,000 sqft commercial building, delaying by just six months means an estimated €120,000–€200,000 in avoidable costs — costs that never come back.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Energy wasted in unoccupied zones", cost: "€3,500–€6,000 / month" },
                    { label: "Reactive maintenance vs. predictive", cost: "€2,000–€4,500 / month" },
                    { label: "Manual compliance preparation", cost: "40+ hours / audit" },
                    { label: "Tenant complaints leading to churn", cost: "€15,000–€50,000 / vacancy" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.06)]">
                      <span className="text-sm text-[#4b5563]">{item.label}</span>
                      <span className="text-sm font-semibold text-[#FF00B2] whitespace-nowrap ml-4">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-10" glow>
                <h3 className="text-h3 text-[#111827] mb-3">Quick ROI Estimate</h3>
                <p className="text-sm text-[#4b5563] mb-8">For a typical commercial building deployment:</p>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Adaptiv deployment cost", value: "€80,000–€150,000", sub: "Hardware + installation + first year" },
                    { label: "Year 1 savings", value: "€120,000–€240,000", sub: "Energy + maintenance + operations" },
                    { label: "Year 2+ savings", value: "€150,000–€300,000", sub: "Compounding as Merlin optimises further" },
                    { label: "3-year net return", value: "€340,000–€690,000", sub: "After all costs, net positive" },
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
                <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.07)] flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4b5563]">Typical payback period</span>
                  <span className="text-2xl font-bold text-[#FF00B2]">8–12 months</span>
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
            <h2 className="text-h1 text-[#111827] mb-5">See What Adaptiv Can Save You</h2>
            <p className="text-body text-[#4b5563] mb-10 max-w-lg mx-auto">
              Tell us about your building or operation and we&apos;ll build a custom ROI projection with real numbers for your specific situation.
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
