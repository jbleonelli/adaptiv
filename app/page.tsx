import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The AI That Shows Up",
  description: "Merlin sees everything in your building. It understands every situation. It acts — automatically.",
};

const traits = [
  { num: "01", title: "Sees Everything", body: "Every sensor. Every camera. Every device. Merlin receives real-time data from across your environment — temperature, occupancy, air quality, vibration, video — processed and contextualised at the edge.", color: "#FF00B2", icon: "◉" },
  { num: "02", title: "Understands Every Situation", body: "A meeting room occupied for three hours. A bathroom that hasn't been cleaned since the morning rush. A machine running 2° hotter than usual. Merlin knows the difference.", color: "#a855f7", icon: "◈" },
  { num: "03", title: "Always Working", body: "100% of the time. No sick days. No context-switching. No missed alerts. Merlin monitors, analyses, and acts around the clock, every day.", color: "#14b8a6", icon: "◎" },
  { num: "04", title: "Acts Without Being Asked", body: "When a condition is met, it acts: adjusts the HVAC, dispatches cleaning, triggers a maintenance alert, dims the lights in an empty room. Your operations run themselves.", color: "#3b82f6", icon: "◆" },
];

const useCases = [
  {
    num: "// 01", title: "Building Intelligence", color: "#FF00B2",
    body: "Merlin runs your building automatically — HVAC, lighting, cleaning, meeting rooms, air quality — so your facilities team focuses on what needs human judgement.",
    points: ["Occupancy-based HVAC & lighting", "Auto cleaning dispatch", "Meeting room release & rebooking", "Real-time air quality management"],
  },
  {
    num: "// 02", title: "Predictive Maintenance", color: "#14b8a6",
    body: "Vibration, temperature, and pressure sensors detect equipment anomalies before failures happen. Merlin schedules maintenance at the right time — not too early, never too late.",
    points: ["Bearing wear & thermal anomaly detection", "Condition-based maintenance scheduling", "Automated work order creation", "Zero unplanned stoppages"],
  },
  {
    num: "// 03", title: "Energy & Sustainability", color: "#22c55e",
    body: "Circuit-level energy monitoring across every zone and asset. Merlin adjusts loads in real time, automates ESG reporting, and provides the data your sustainability targets need.",
    points: ["Real-time kW & kWh by zone", "Demand response automation", "BREEAM & LEED evidence", "Carbon footprint tracking"],
  },
  {
    num: "// 04", title: "Manufacturing & OEE", color: "#6366f1",
    body: "Smart Displays on the factory floor give operators live KPIs. Merlin monitors machines, enforces quality standards, and optimises production scheduling automatically.",
    points: ["OEE visibility in real time", "Automated quality inspection", "Production scheduling adjustments", "Compliance documentation"],
  },
  {
    num: "// 05", title: "Smart Parking", color: "#3b82f6",
    body: "Per-space sensors, entry counters, and CO monitors give Merlin full visibility of your parking estate. Availability updates in real time. Ventilation runs only when needed.",
    points: ["Per-space occupancy detection", "Live capacity guidance", "EV charger monitoring", "Automatic garage ventilation control"],
  },
  {
    num: "// 06", title: "Safety & Security", color: "#f59e0b",
    body: "Merlin correlates data across access control, occupancy sensors, and cameras to detect anomalies in real time. Every event is logged and audit-ready.",
    points: ["Real-time anomaly & intrusion detection", "Lone worker protection", "Automated incident escalation", "Instant audit-ready compliance logs"],
  },
  {
    num: "// 07", title: "Logistics & Warehousing", color: "#FF00B2",
    body: "Smart Displays in warehouse zones deliver real-time instructions and KPIs to operators. Merlin automates inventory management, exception handling, and WMS coordination.",
    points: ["Live inventory & stock visibility", "Workflow orchestration across WMS & ERP", "Automatic exception escalation", "Temperature & humidity zone monitoring"],
  },
  {
    num: "// 08", title: "Smart Cities & Infrastructure", color: "#14b8a6",
    body: "LTE-connected sensors monitor pipes, pumps, bridges, and public spaces 24/7 — no municipal network required. Merlin triggers incident response the moment anomalies are detected.",
    points: ["Water, waste & transport asset monitoring", "Automated incident response workflows", "Regulatory compliance reporting", "Condition-based asset maintenance"],
  },
  {
    num: "// 09", title: "Healthcare & Education", color: "#a855f7",
    body: "Environments where air quality, temperature, and occupancy directly impact outcomes. Merlin maintains standards automatically and provides the compliance records regulators require.",
    points: ["Air quality & infection risk monitoring", "Occupancy-based HVAC & ventilation", "Noise & light environment control", "Automated hygiene compliance records"],
  },
];

const differences = [
  "Designs, manufactures, and connects its own devices — then runs its own AI on top",
  "Smart Display: building intelligence hub — gateway, interface, and sensor node in one device",
  "LTE built-in — deploy anywhere, no network infrastructure required",
  "3-year battery life — truly autonomous sensor deployment at scale",
  "Built Local — manufactured in the US for North America, in Europe for Europe",
];

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-16">
        {/* Dot-matrix background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        {/* Pink ambient glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] pointer-events-none opacity-10"
          style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }}
          aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,0,178,0.2)] bg-[rgba(255,0,178,0.06)] text-xs font-semibold text-[#FF00B2] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B2] animate-pulse" />
                  Physical AI · Built by Adaptiv
                </span>
              </div>
              <h1 className="text-display text-[#111827] mb-6 leading-none">
                Meet Your<br />New<br />
                <span className="gradient-text-pink">Co-Worker.</span>
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-3 leading-relaxed max-w-sm">
                Merlin sees everything happening in your building. It understands every situation.
                It works 100% of the time. And it acts — automatically.
              </p>
              <p className="text-sm text-[#64748b] mb-10">
                Powered by the Adaptiv Smart Display — designed and built locally.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link href="/merlin" className="px-8 py-4 rounded-full bg-[#FF00B2] text-[#111827] text-base font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] hover:shadow-[0_8px_40px_rgba(255,0,178,0.5)] transition-all active:scale-[0.98]">
                  Meet Merlin
                </Link>
                <Link href="/devices" className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.1)] text-[#4b5563] text-base font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.03)] transition-all">
                  See the Smart Display →
                </Link>
              </div>

              {/* Live stat chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "LTE built-in",         dot: "#FF00B2" },
                  { label: "3-year battery",        dot: "#14b8a6" },
                  { label: "Built in US & Europe",  dot: "#3b82f6" },
                  { label: "64-sensor gateway",     dot: "#a855f7" },
                ].map((chip) => (
                  <span key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] text-xs text-[#64748b] font-medium">
                    <span className="w-1 h-1 rounded-full" style={{ background: chip.dot, opacity: 0.8 }} />
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — two stacked screenshots */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.07)]">
                <Image
                  src="/merlin-dashboard-hero.png"
                  alt="Merlin dashboard — occupancy, battery level and building analytics"
                  width={1024} height={640}
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.07)]">
                <Image
                  src="/merlin-chat-hero.png"
                  alt="Merlin AI co-worker — conversation and building intelligence interface"
                  width={1024} height={640}
                  className="w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PHYSICAL AI ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <div>
                <span className="section-number block mb-4">// 01</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">A New Kind of AI</p>
                <h2 className="text-h1 text-[#111827] mb-6">AI That Lives in<br />the Real World</h2>
                <p className="text-body-lg text-[#4b5563] mb-8 leading-relaxed">
                  Most AI lives on a screen. Merlin lives in your building — through the Smart Display,
                  through sensors, through cameras — and it acts on your HVAC, cleaning schedules,
                  security systems, and production lines without waiting to be asked.
                </p>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-[rgba(255,0,178,0.2)] bg-[rgba(255,0,178,0.05)] w-fit">
                  <span className="text-[#64748b] text-sm">Physical AI</span>
                  <span className="text-[#FF00B2] font-bold">=</span>
                  <span className="text-[#1f2937] text-sm font-medium">Smart Displays · Sensors · Cameras · Merlin AI</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DEVICE SHOWCASE ──────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 50%, #FF00B2, transparent 55%)" }} aria-hidden="true" />

        <div className="container-site relative z-10">
          <Reveal>
            <div className="flex items-start gap-12 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">// 02</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">The Face of Merlin</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827] mb-4">The Adaptiv Smart Display</h2>
                <p className="text-body text-[#4b5563] max-w-xl leading-relaxed">
                  More than a screen. The Smart Display shows what Merlin sees — air quality, temperature,
                  occupancy, cleaning history, sensor readings — and lets anyone on your team communicate
                  with Merlin directly.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.06)]">
              <div>
                <Image
                  src="/smart-displays-hero.png"
                  alt="Adaptiv Smart Display Classic, 26 and 26 Ultra"
                  width={1920} height={1080}
                  className="w-full object-cover"
                />
              </div>
              <div className="relative z-30 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(0,0,0,0.03)] border-t border-[rgba(0,0,0,0.06)] -mt-1">
                {[
                  { label: "Air Quality",            value: "CO₂ · VOC · PM2.5" },
                  { label: "Temperature & Humidity", value: "±0.1°C · ±1% RH" },
                  { label: "Luminosity",             value: "0–100,000 lux" },
                  { label: "Cleaning log",           value: "Auto-dispatched by Merlin" },
                ].map((s) => (
                  <div key={s.label} className="bg-white px-6 py-4">
                    <p className="text-xs text-[#64748b] mb-1">{s.label}</p>
                    <p className="text-sm font-medium text-[#374151]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {[
                {
                  label: "LTE built-in — no Wi-Fi needed",
                  icon: (
                    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0">
                      <path d="M9 3 Q5 7 5 9 Q5 13 9 15 Q13 13 13 9 Q13 7 9 3Z" stroke="#FF00B2" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M3 7 Q1 9 3 11" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
                      <path d="M15 7 Q17 9 15 11" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
                      <circle cx="9" cy="9" r="1.5" fill="#FF00B2"/>
                    </svg>
                  ),
                },
                {
                  label: "3-year battery life",
                  icon: (
                    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0">
                      <rect x="2" y="5" width="13" height="8" rx="1.5" stroke="#FF00B2" strokeWidth="1.2"/>
                      <path d="M15 7.5 L16.5 7.5 L16.5 10.5 L15 10.5" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3.5" y="6.5" width="7" height="5" rx="0.8" fill="#FF00B2" opacity="0.35"/>
                    </svg>
                  ),
                },
                {
                  label: "Built locally in US & Europe",
                  icon: (
                    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0">
                      <path d="M9 2 Q11 6 11 9 A2 2 0 0 1 7 9 Q7 6 9 2Z" stroke="#FF00B2" strokeWidth="1.2" strokeLinejoin="round"/>
                      <circle cx="9" cy="9" r="1.2" fill="#FF00B2" opacity="0.5"/>
                      <path d="M3 14 Q9 11 15 14" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
                      <circle cx="9" cy="15.5" r="0.8" fill="#FF00B2" opacity="0.3"/>
                    </svg>
                  ),
                },
                {
                  label: "Gateway for up to 64 sensors",
                  icon: (
                    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0">
                      <circle cx="9" cy="9" r="3" stroke="#FF00B2" strokeWidth="1.2"/>
                      <circle cx="9" cy="9" r="1.2" fill="#FF00B2"/>
                      <path d="M3 4 L6.5 7" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                      <path d="M15 4 L11.5 7" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                      <path d="M3 14 L6.5 11" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                      <path d="M15 14 L11.5 11" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                      <circle cx="3" cy="4" r="1.2" stroke="#FF00B2" strokeWidth="1" opacity="0.6"/>
                      <circle cx="15" cy="4" r="1.2" stroke="#FF00B2" strokeWidth="1" opacity="0.6"/>
                      <circle cx="3" cy="14" r="1.2" stroke="#FF00B2" strokeWidth="1" opacity="0.6"/>
                      <circle cx="15" cy="14" r="1.2" stroke="#FF00B2" strokeWidth="1" opacity="0.6"/>
                    </svg>
                  ),
                },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  {f.icon}
                  <span className="text-sm text-[#4b5563]">{f.label}</span>
                </div>
              ))}
              <Link href="/devices" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#FF00B2] hover:text-[#ff6fe8] transition-colors">
                Full specifications →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── MERLIN — DATA FLOW ────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <div>
                <span className="section-number block mb-4">// 03</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">Your Most Dedicated Team Member</p>
                <h2 className="text-h1 text-[#111827] mb-6">
                  Merlin Is Not Software.<br />
                  <span className="gradient-text-pink">Merlin Is a Co-Worker.</span>
                </h2>
                <p className="text-body text-[#64748b] leading-relaxed mb-8">
                  Every data stream from every sensor flows through Merlin — continuously,
                  in real time, across every floor of your building. Merlin sees it all,
                  understands it all, and acts before you even know something needs doing.
                </p>
                <Link href="/merlin" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF00B2] hover:text-[#ff6fe8] transition-colors">
                  Explore Merlin →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── MERLIN TRAITS ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="border-t border-[rgba(0,0,0,0.06)]">
            {traits.map((t, i) => (
              <Reveal key={t.num} delay={i * 0.06}>
                <div className="flex items-start gap-8 py-8 border-b border-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.02)] transition-colors px-2 -mx-2 rounded-xl group">
                  <div className="flex items-center gap-4 w-20 flex-shrink-0">
                    <span className="text-xl mt-0.5" style={{ color: t.color, opacity: 0.6 }}>{t.icon}</span>
                    <span className="text-xs font-bold tabular-nums" style={{ color: t.color, opacity: 0.35 }}>{t.num}</span>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <h3 className="text-h4 text-[#111827]">{t.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{t.body}</p>
                  </div>
                  <div className="hidden lg:flex w-3 h-3 rounded-full flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: t.color }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">// 04</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">Use Cases</p>
              </div>
              <div>
                <h2 className="text-h1 text-[#111827]">One Co-Worker.<br />Every Space.<br />Every Operation.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <Reveal key={uc.num} delay={i * 0.05}>
                <div className="p-7 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f8f9fb] hover:border-[rgba(0,0,0,0.08)] transition-all h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: uc.color }} />
                    <span className="section-number">{uc.num}</span>
                  </div>
                  <h3 className="text-h4 text-[#111827]">{uc.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1">{uc.body}</p>
                  <ul className="flex flex-col gap-1.5 pt-3 border-t border-[rgba(0,0,0,0.05)]">
                    {uc.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#64748b]">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: uc.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── END-TO-END PLATFORM ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <div>
                <span className="section-number block mb-4">// 05</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">The Adaptiv Difference</p>
                <h2 className="text-h2 text-[#111827] mb-10">The Only End-to-End<br />Physical AI Platform</h2>
                <ul className="flex flex-col border-t border-[rgba(0,0,0,0.07)]">
                  {differences.map((d, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-b border-[rgba(0,0,0,0.05)]">
                      <span className="text-[#FF00B2] text-xs font-bold tabular-nums mt-0.5 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[#4b5563] text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Dot matrix */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          aria-hidden="true" />
        {/* Pink glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }} />
        </div>
        <div className="container-site relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="section-number mb-6 uppercase tracking-[0.2em]">Get started</p>
            <h2 className="text-h1 text-[#111827] mb-5">Merlin is ready<br />to join your team.</h2>
            <p className="text-body text-[#64748b] mb-12 leading-relaxed">
              See how Physical AI transforms building management and industrial operations —
              from the first Smart Display to the first automated action.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/merlin" className="px-8 py-4 rounded-full bg-[#FF00B2] text-[#111827] font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all">
                Meet Merlin
              </Link>
              <Link href="/devices" className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.1)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.12)] transition-all">
                See the Smart Display →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
