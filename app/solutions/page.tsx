import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions — Merlin Works in Every Building. Every Operation.",
  description: "From smart offices and building management to industrial manufacturing and energy infrastructure — Merlin brings Physical AI to the real world.",
};

const personas = [
  {
    role: "Building Owner",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="14" width="24" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5"/>
        <path d="M4 14L20 4l16 10" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="24" width="8" height="10" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        <line x1="12" y1="19" x2="12" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="20" y1="19" x2="20" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="28" y1="19" x2="28" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    color: "#FF00B2",
    pain: "Your buildings are a cost centre, not an asset. Energy bills are unpredictable, maintenance is reactive, and you have no visibility into how your spaces are actually being used.",
    value: "Merlin turns your buildings into self-optimising assets. Energy is managed in real time. Maintenance issues are flagged before they become failures. Every space is used to its potential — and you have the data to prove it to tenants.",
    benefits: ["Lower energy & operating costs", "Higher tenant retention", "Asset-level ROI visibility", "Predictive maintenance savings"],
  },
  {
    role: "Facility Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="13" stroke="#14b8a6" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" stroke="#14b8a6" strokeWidth="1.5"/>
        <line x1="20" y1="7" x2="20" y2="12" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="20" y2="33" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="20" x2="12" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="20" x2="33" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="26" y1="26" x2="29.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="29.5" y1="10.5" x2="26" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="14" y1="26" x2="10.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    color: "#14b8a6",
    pain: "Your day is a constant stream of reactive requests — a broken AC here, a complaint about air quality there, meeting rooms that won't release. Your team spends their time on things that should happen automatically.",
    value: "Merlin handles the routine so you can focus on the complex. Occupancy, air quality, temperature, and energy are managed automatically. You get alerts only when something genuinely needs human attention — with full context already gathered.",
    benefits: ["Fewer reactive calls & tickets", "Automated compliance records", "Real-time building dashboard", "Proof of service delivery"],
  },
  {
    role: "Factory Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="20" width="28" height="14" rx="1.5" stroke="#6366f1" strokeWidth="1.5"/>
        <path d="M6 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M17 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M28 20l6-10v10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="11" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2"/>
        <rect x="24" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2"/>
        <circle cx="20" cy="27" r="2" stroke="#6366f1" strokeWidth="1.2"/>
      </svg>
    ),
    color: "#6366f1",
    pain: "Unplanned downtime destroys your throughput targets. You find out about equipment failures when lines stop, not before. Quality deviations are caught too late. Your operators react — they can't anticipate.",
    value: "Merlin monitors your machines continuously, not periodically. Vibration patterns, thermal signatures, and cycle anomalies are detected before failure. Smart Displays on the floor give operators real-time KPIs and Merlin-driven alerts — so your team acts before the line stops.",
    benefits: ["Fewer unplanned stoppages", "Condition-based maintenance", "Automated quality checks", "OEE visibility in real time"],
  },
  {
    role: "Sustainability Officer",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 32C20 32 8 25 8 16a12 12 0 0 1 24 0c0 9-12 16-12 16z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 16v8M16 20l4-4 4 4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14c1.5-3 4-5 6-6" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#22c55e",
    pain: "ESG reporting is manual and retrospective. You don't have granular consumption data by space or asset. Your sustainability targets are aspirational — you can't link them to specific operational changes.",
    value: "Merlin provides continuous, granular energy and carbon data across every zone and asset. Automated reports align with BREEAM, LEED, and regulatory frameworks. When you reduce consumption, you can show exactly where, when, and by how much.",
    benefits: ["Granular energy & carbon data", "Automated ESG reporting", "BREEAM / LEED evidence", "Space-level consumption breakdown"],
  },
  {
    role: "Head of Security",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6l12 5v10c0 7-5.5 12.5-12 14C13.5 33.5 8 28 8 21V11l12-5z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15 20l3.5 3.5 6.5-6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#f59e0b",
    pain: "Your access control, cameras, and alarm systems are disconnected. Incidents are logged after the fact. Unusual occupancy patterns go unnoticed. Compliance documentation is assembled manually.",
    value: "Merlin correlates data across access systems, occupancy sensors, and cameras to detect anomalies in real time. Unusual patterns trigger automated alerts. Every access and occupancy event is logged — making compliance reporting instant and audit-ready.",
    benefits: ["Real-time anomaly detection", "Cross-system correlation", "Instant audit-ready logs", "Automated incident escalation"],
  },
  {
    role: "IT & OT Manager",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="10" width="24" height="16" rx="2" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="8" y1="22" x2="32" y2="22" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="12" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="20" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <circle cx="28" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2"/>
        <path d="M14 30h12M20 26v4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="15" cy="16" r="2" stroke="#a855f7" strokeWidth="1.2"/>
        <path d="M19 14h6M19 17h4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#a855f7",
    pain: "You manage a patchwork of legacy systems, proprietary protocols, and vendor lock-in. Adding AI means adding another integration project. Security is a concern every time a new IoT device touches your network.",
    value: "Adaptiv devices are built with security from the silicon up. Merlin integrates with your existing SCADA, BMS, ERP, and CMMS systems via secure APIs. No protocol patchwork — one platform that talks to everything, with enterprise-grade security and on-premise deployment options.",
    benefits: ["Secure by design — chip to cloud", "Open API & SCADA / BMS integration", "On-premise deployment available", "Single platform, no protocol sprawl"],
  },
];

const solutions = [
  {
    id: "building",
    badge: "BUILDING INTELLIGENCE",
    title: "The Intelligent Building That Runs Itself",
    challenge: "Buildings are full of systems — HVAC, lighting, security, cleaning, access control, meeting room management — that operate in silos, are managed manually, and respond to schedules rather than reality. Facilities teams spend their days reacting. Occupants live in spaces that don't respond to how they actually use them.",
    solution: "Merlin + Smart Displays + Sensors create a building that senses, thinks, and responds in real time. Smart Displays installed across the building give Merlin eyes, ears, and a presence in every room. Merlin acts on what it senses — automatically — so facilities teams can focus on the work that needs human judgement.",
    capabilities: [
      "Offices: Occupancy-based HVAC and lighting, air quality management, energy optimisation, employee experience interface",
      "Meeting rooms: Demand-based booking management, automatic room release, pre-conditioning, usage analytics",
      "Bathrooms: Usage-based cleaning dispatch, consumable monitoring, air quality management, compliance logging",
      "Corridors and access: Occupancy flow, access control, security alerts, visitor experience, wayfinding",
      "Building-wide: Real-time energy monitoring, predictive maintenance of building plant, sustainability reporting",
    ],
    outcomes: ["Lower facilities management overhead", "Reduced energy consumption", "Higher occupant satisfaction", "Full compliance audit trails", "Buildings that improve themselves"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Building body */}
        <rect x="8" y="18" width="32" height="26" rx="2" stroke="#FF00B2" strokeWidth="1.5"/>
        {/* Roof */}
        <path d="M4 18L24 5l20 13" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Door */}
        <rect x="20" y="32" width="8" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        {/* Windows */}
        <rect x="12" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2"/>
        <rect x="30" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2"/>
        {/* Wireless signal arcs */}
        <path d="M37 12a6 6 0 0 1 0 8" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
        <path d="M39.5 9.5a10 10 0 0 1 0 13" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
        <circle cx="35.5" cy="16" r="1.2" fill="#FF00B2"/>
      </svg>
    ),
    color: "#FF00B2",
  },
  {
    id: "manufacturing",
    badge: "MANUFACTURING",
    title: "Keep Your Lines Running. Automatically.",
    challenge: "Unplanned downtime costs manufacturers millions per hour. Manual quality inspection is slow, inconsistent, and expensive. Production data sits in silos — visible only to operators who have to act on it.",
    solution: "Adaptiv vibration and temperature sensors monitor critical machinery. Industrial cameras inspect production quality in real time. Smart Displays on the factory floor give operators live production KPIs and Merlin agent status. Merlin agents detect anomalies, trigger maintenance workflows, halt lines when quality deviates, and optimise scheduling automatically.",
    capabilities: [
      "Predictive maintenance — detect bearing wear, thermal anomalies, and vibration patterns before failure",
      "Real-time quality assurance — cameras and sensors enforce quality standards automatically",
      "OEE optimisation — continuous visibility into availability, performance, and quality metrics",
      "Production scheduling — Merlin adjusts plans based on real-time asset status",
      "Compliance logging — automated production records for quality certifications",
    ],
    outcomes: ["Reduced unplanned downtime", "Lower maintenance costs", "Improved quality yield", "Automated compliance documentation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Large gear */}
        <circle cx="20" cy="26" r="9" stroke="#14b8a6" strokeWidth="1.5"/>
        <circle cx="20" cy="26" r="3.5" stroke="#14b8a6" strokeWidth="1.3"/>
        {/* Gear teeth */}
        <rect x="18.5" y="14" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="18.5" y="34" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="8" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="28" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2"/>
        <rect x="10.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 10.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="26.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 26.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="26.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(45 26.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="10.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(45 10.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1"/>
        {/* Small gear */}
        <circle cx="33" cy="15" r="5.5" stroke="#14b8a6" strokeWidth="1.3"/>
        <circle cx="33" cy="15" r="2" stroke="#14b8a6" strokeWidth="1.1"/>
        <rect x="31.8" y="8" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="31.8" y="19" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="26.5" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        <rect x="37" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1"/>
        {/* Pulse signal */}
        <path d="M36 24h2l1.5-4 2 8 1.5-4H45" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#14b8a6",
  },
  {
    id: "energy",
    badge: "ENERGY & UTILITIES",
    title: "Operate Your Grid Smarter. In Real Time.",
    challenge: "Energy infrastructure is monitored by legacy systems that raise alerts after events, not before. Maintenance schedules are calendar-based, not condition-based. Operational teams are reactive by necessity.",
    solution: "Adaptiv energy monitoring devices and environmental sensors provide continuous visibility across grid assets. Merlin agents monitor conditions, adjust loads, schedule preventive maintenance, and escalate developing issues before they cascade.",
    capabilities: [
      "Grid condition monitoring — continuous sensor coverage across generation, transmission, and distribution assets",
      "Predictive maintenance — condition-based scheduling replaces calendar-based maintenance",
      "Demand response automation — Merlin adjusts loads in real time based on grid conditions",
      "Consumption optimisation — identify and eliminate energy waste automatically",
      "Regulatory compliance reporting — automated documentation for grid operators",
    ],
    outcomes: ["Improved grid reliability", "Reduced operational costs", "Proactive asset maintenance", "Automated compliance reporting"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Pylon tower */}
        <path d="M24 6v36" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 14h20M12 22h24" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 14l-6 8M30 14l6 8" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Wires */}
        <path d="M12 22 Q6 28 4 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        <path d="M36 22 Q42 28 44 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        {/* Lightning bolt */}
        <path d="M26 8l-5 9h5l-5 9" stroke="#6D28D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        {/* Ground nodes */}
        <circle cx="12" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
        <circle cx="36" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
        <circle cx="24" cy="42" r="2" stroke="#6D28D9" strokeWidth="1.2"/>
      </svg>
    ),
    color: "#6D28D9",
  },
  {
    id: "logistics",
    badge: "LOGISTICS & SUPPLY CHAIN",
    title: "Orchestrate Without Manual Intervention.",
    challenge: "Warehouses rely on manual processes, periodic counts, and reactive exception handling. Operational visibility is retrospective. Exceptions consume disproportionate management time.",
    solution: "Smart Displays in warehouse zones provide real-time workflow instructions and KPIs to operators. Environmental and occupancy sensors monitor warehouse conditions and asset flows. Merlin automates inventory management, exception escalation, and workflow coordination across WMS and ERP systems.",
    capabilities: [
      "Inventory automation — real-time stock visibility and automatic replenishment triggers",
      "Workflow orchestration — Merlin coordinates picking, packing, and dispatch workflows across systems",
      "Exception management — anomalies escalated automatically, before they compound",
      "Real-time operational visibility — live dashboards for warehouse managers and operators",
    ],
    outcomes: ["Reduced manual handling errors", "Faster exception resolution", "Improved inventory accuracy", "Better throughput visibility"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Warehouse building */}
        <path d="M4 20l20-12 20 12v22H4V20z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 20h40" stroke="#FF00B2" strokeWidth="1.2" opacity="0.4"/>
        {/* Loading door */}
        <rect x="18" y="30" width="12" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3"/>
        <line x1="24" y1="30" x2="24" y2="42" stroke="#FF00B2" strokeWidth="1" opacity="0.5"/>
        {/* Flow arrows */}
        <path d="M6 28h7M6 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M10 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 28h7M35 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M39 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Roof ridge */}
        <line x1="24" y1="8" x2="24" y2="20" stroke="#FF00B2" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    color: "#FF00B2",
  },
  {
    id: "cities",
    badge: "SMART CITIES & INFRASTRUCTURE",
    title: "Protect the Infrastructure Your Communities Depend On.",
    challenge: "Critical infrastructure assets — pipes, pumps, bridges, public spaces — are monitored intermittently or not at all. Incidents are discovered late, after impact. Maintenance is reactive and expensive.",
    solution: "Adaptiv environmental, flow, and pressure sensors monitor critical infrastructure assets 24/7 via LTE, with no municipal network dependency. Merlin agents detect anomalies, trigger incident response workflows, generate compliance reports, and escalate critical events instantly.",
    capabilities: [
      "Infrastructure monitoring — continuous sensor coverage across water, waste, transport, and public space assets",
      "Incident response automation — Merlin triggers workflows the moment anomalies are detected",
      "Compliance reporting — automated documentation for municipal and regulatory requirements",
      "Asset lifecycle management — condition-based maintenance scheduling across the full asset portfolio",
    ],
    outcomes: ["Earlier incident detection", "Faster emergency response", "Reduced infrastructure failure costs", "Automated regulatory compliance"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* Skyline buildings */}
        <rect x="4" y="24" width="8" height="18" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        <rect x="14" y="18" width="7" height="24" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        <rect x="23" y="12" width="9" height="30" rx="1" stroke="#14b8a6" strokeWidth="1.5"/>
        <rect x="34" y="20" width="7" height="22" rx="1" stroke="#14b8a6" strokeWidth="1.3"/>
        {/* Antenna on tallest */}
        <line x1="27.5" y1="12" x2="27.5" y2="7" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="27.5" cy="6" r="1.2" fill="#14b8a6"/>
        {/* Network connection arcs */}
        <path d="M8 22 Q16 14 17.5 18" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2"/>
        <path d="M37 18 Q34 10 27.5 12" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2"/>
        {/* Node dots */}
        <circle cx="8" cy="22" r="1.5" stroke="#14b8a6" strokeWidth="1.1"/>
        <circle cx="37" cy="18" r="1.5" stroke="#14b8a6" strokeWidth="1.1"/>
        {/* Ground line */}
        <line x1="3" y1="42" x2="45" y2="42" stroke="#14b8a6" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    color: "#14b8a6",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* 5.1 Hero */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,111,212,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="dim" className="mb-6">SOLUTIONS</Badge>
          <h1 className="text-display text-[#111827] mb-5">Merlin Works in Every Building.<br />Every Operation.</h1>
          <p className="text-body-lg text-[#4b5563]">
            From smart offices and building management to industrial manufacturing and energy infrastructure —
            Merlin and Adaptiv devices bring Physical AI to the real-world environments where it matters most.
          </p>
        </div>
      </section>

      {/* ── WHO MERLIN WORKS FOR ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">Built for the People Who Run Real Operations</p>
              <h2 className="text-h1 text-[#111827] mb-5">Who Physical AI Is For</h2>
              <p className="text-body-lg text-[#64748b] max-w-2xl mx-auto">
                Merlin is not a dashboard for analysts. It is an AI co-worker for the people responsible for
                buildings, factories, and operations — who need intelligence that acts, not just reports.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personas.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.06}>
                <div className="group flex flex-col gap-5 p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white hover:border-[rgba(0,0,0,0.13)] transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                      {p.icon}
                    </div>
                    <h3 className="text-h4 text-[#111827]">{p.role}</h3>
                  </div>

                  {/* Pain point */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748b] mb-2">The challenge</p>
                    <p className="text-sm text-[#64748b] leading-relaxed">{p.pain}</p>
                  </div>

                  {/* Value prop */}
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>How Merlin helps</p>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{p.value}</p>
                  </div>

                  {/* Benefits */}
                  <ul className="flex flex-col gap-1.5 pt-3 border-t border-[rgba(0,0,0,0.06)]">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs font-medium text-[#4b5563]">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <div className="bg-[#f8f9fb]">
        {solutions.map((sol, idx) => (
          <section key={sol.id} id={sol.id} className={`py-24 ${idx % 2 === 1 ? "bg-white" : "bg-[#f8f9fb]"} border-t border-[rgba(0,0,0,0.07)]`}>
            <div className="container-site">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${sol.color}10`, border: `1px solid ${sol.color}28` }}>
                    {sol.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border" style={{ background: `${sol.color}12`, color: sol.color, borderColor: `${sol.color}30` }}>{sol.badge}</span>
                </div>
                <h2 className="text-h1 text-[#111827] mb-10">{sol.title}</h2>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <Reveal>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-3">The Challenge</p>
                    <p className="text-[#4b5563] leading-relaxed">{sol.challenge}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div>
                    <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-3">The Adaptiv Solution</p>
                    <p className="text-[#4b5563] leading-relaxed">{sol.solution}</p>
                  </div>
                </Reveal>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Reveal delay={0.1}>
                  <div className="p-6 rounded-2xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: sol.color }}>Key capabilities</p>
                    <ul className="flex flex-col gap-2.5">
                      {sol.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-[#4b5563]">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5 6.5-7" stroke={sol.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="p-6 rounded-2xl border" style={{ background: `${sol.color}06`, borderColor: `${sol.color}20` }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: sol.color }}>Key outcomes</p>
                    <ul className="flex flex-col gap-2.5">
                      {sol.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-sm font-medium text-[#111827]">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sol.color }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5.7 CTA */}
      <section className="py-20 bg-white">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-h2 text-[#111827] mb-4">Every environment is different. Merlin adapts.</h2>
            <p className="text-body text-[#4b5563] max-w-lg mx-auto mb-8">
              Tell us about your building or operation and we'll show you exactly how Merlin and Adaptiv devices work in your context.
            </p>
            <Button size="lg" asChild><Link href="/contact">Talk to Our Solutions Team</Link></Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
