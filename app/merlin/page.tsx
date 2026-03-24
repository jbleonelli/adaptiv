import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Merlin — Always Present. Always Acting.",
  description: "Merlin is the AI that runs alongside your team — watching every sensor, understanding every space, responding to every situation.",
};

const traits = [
  {
    title: "Sees Everything",
    example: "Merlin knows that Meeting Room 3 has been occupied for four hours, that the temperature has risen to 24°C, and that the last cleaning was at 08:00. It has already adjusted the HVAC and queued the cleaning team.",
    body: "Merlin is connected to every Adaptiv device in your environment — Smart Displays, sensors, cameras, energy monitors, vibration nodes. Every data point arrives pre-processed from the edge, contextualised by device location and type, and made available to Merlin's agents in real time.",
    color: "#FF00B2",
    icon: (
      /* Radar / sonar: concentric rings + scan line + blip */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="15" stroke="#FF00B2" strokeWidth="0.8" strokeOpacity="0.18" />
        <circle cx="20" cy="20" r="10" stroke="#FF00B2" strokeWidth="0.9" strokeOpacity="0.28" />
        <circle cx="20" cy="20" r="5"  stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5"  fill="#FF00B2"   fillOpacity="0.1" />
        <line   x1="20" y1="20" x2="31" y2="7" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="31" cy="7"  r="2.2" fill="#FF00B2" fillOpacity="0.65" />
        <circle cx="31" cy="7"  r="4"   fill="#FF00B2" fillOpacity="0.1" />
        <circle cx="20" cy="20" r="2"   fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Understands Every Situation",
    example: "On a busy conference day, Merlin detects above-average footfall through the bathroom entrance sensor. Without being asked, it increases the cleaning frequency for that area and notifies the facilities team.",
    body: "Merlin doesn't just aggregate data — it understands context. It knows the difference between a bathroom that is frequently occupied and one that simply hasn't been detected as needing cleaning. It knows that a machine running at elevated temperature after a long production run is different from the same reading after an idle period.",
    color: "#FF00B2",
    icon: (
      /* Neural graph: 5 nodes connected in a comprehension network */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="6"  r="3"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="9"  cy="19" r="3"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="31" cy="19" r="3"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="13" cy="33" r="3"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="27" cy="33" r="3"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="20" y1="9"  x2="11"  y2="16"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="20" y1="9"  x2="29"  y2="16"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="11" y1="22" x2="14"  y2="30"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="29" y1="22" x2="26"  y2="30"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="12" y1="22" x2="25"  y2="30"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.18" />
        <line x1="28" y1="22" x2="15"  y2="30"  stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="20" cy="6"  r="1.5" fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Always Working",
    example: "At 02:30 on a Saturday, Merlin detects an anomalous vibration pattern in a production line motor. It logs the event, schedules a maintenance inspection for Monday morning, and sends a notification to the on-call engineer. The team arrives Monday knowing exactly what to look at.",
    body: "Merlin monitors 24 hours a day, 7 days a week, 365 days a year. Night shift, weekends, bank holidays, peak season — Merlin is always at their desk. No shift handover. No morning catch-up. No missed alerts.",
    color: "#FF00B2",
    icon: (
      /* Continuous cycle: open arc + arrowhead + interval dots */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 5 A15 15 0 1 1 5.5 26" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
        <path d="M3.5 24 L5.5 27 L8.5 25.5" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="5"  r="1.8" fill="#FF00B2" fillOpacity="0.65" />
        <circle cx="35" cy="20" r="1.8" fill="#FF00B2" fillOpacity="0.45" />
        <circle cx="28" cy="33" r="1.8" fill="#FF00B2" fillOpacity="0.3" />
        <circle cx="20" cy="20" r="4"   stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="20" cy="20" r="4"   fill="#FF00B2"   fillOpacity="0.08" />
        <circle cx="20" cy="20" r="2"   fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Always Reliable",
    example: "Your compliance audit requires a complete record of every environmental condition in the production area over the past six months. Merlin generates it in 30 seconds, with full traceability to the individual sensor readings.",
    body: "Merlin doesn't have bad days. Every action is logged with a full audit trail: what it observed, what rule or model it applied, what it decided, and what it did. Every decision is explainable. Every outcome is traceable.",
    color: "#FF00B2",
    icon: (
      /* Shield: outline + inner ring + center fill */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M20 4 L34 10 L34 22 C34 30 27.5 36 20 38 C12.5 36 6 30 6 22 L6 10 Z"
          stroke="#FF00B2" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M20 4 L34 10 L34 22 C34 30 27.5 36 20 38 C12.5 36 6 30 6 22 L6 10 Z"
          fill="#FF00B2" fillOpacity="0.07" />
        <circle cx="20" cy="21" r="7"  stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="20" cy="21" r="3.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="20" cy="21" r="3.5" fill="#FF00B2"   fillOpacity="0.12" />
        <circle cx="20" cy="21" r="1.8" fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Acts Without Being Asked",
    example: "A sensor at the building entrance detects that occupancy is 40% higher than the forecast for today. Merlin automatically adjusts HVAC capacity building-wide, increases the catering order for the cafeteria, and adds a cleaning cycle to the shared bathrooms at midday.",
    body: "Merlin does not send you a report and wait for your decision. When the condition is right, it acts. It adjusts the HVAC before the meeting room gets uncomfortable. It dispatches the cleaning team when the bathroom needs attention. It triggers the maintenance workflow before the machine fails.",
    color: "#FF00B2",
    icon: (
      /* Action vectors: source node → diverging paths → forward arrow */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="8"  cy="20" r="4.5" stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="8"  cy="20" r="4.5" fill="#FF00B2"   fillOpacity="0.1" />
        <circle cx="8"  cy="20" r="2"   fill="#FF00B2" />
        <line x1="12.5" y1="18" x2="24" y2="12" stroke="#FF00B2" strokeWidth="1"   strokeOpacity="0.4" />
        <line x1="12.5" y1="20" x2="24" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.55" />
        <line x1="12.5" y1="22" x2="24" y2="28" stroke="#FF00B2" strokeWidth="1"   strokeOpacity="0.4" />
        <circle cx="26" cy="12" r="2.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="26" cy="20" r="3.5" stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="26" cy="20" r="3.5" fill="#FF00B2"   fillOpacity="0.1" />
        <circle cx="26" cy="28" r="2.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="29.5" y1="20" x2="36" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.55" />
        <path  d="M34 17 L37 20 L34 23"  stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: "Autonomous Agents",
    body: "Agents that monitor conditions, make decisions, and execute actions without human instruction. Define them in plain language using Merlin Studio.",
    color: "#FF00B2",
    icon: (
      /* Network hub: central node + 3 satellite nodes */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="5"  stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5"  fill="#FF00B2"   fillOpacity="0.12" />
        <circle cx="8"  cy="10" r="3"  stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="32" cy="10" r="3"  stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="20" cy="34" r="3"  stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="11"  y1="12"  x2="16" y2="17" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="29"  y1="12"  x2="24" y2="17" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="20"  y1="25"  x2="20" y2="31" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="20" cy="20" r="2"  fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Real-Time Intelligence",
    body: "Sub-second response to events. Merlin acts on situations as they unfold — powered by edge-pre-processed data from Adaptiv devices.",
    color: "#FF00B2",
    icon: (
      /* Oscilloscope waveform with data-point dots */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <line x1="4"  y1="20" x2="11" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
        <polyline points="11,20 15,10 18,28 21,13 25,20" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <line x1="25" y1="20" x2="36" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
        <circle cx="15" cy="10" r="1.8" fill="#FF00B2" />
        <circle cx="21" cy="13" r="1.4" fill="#FF00B2" fillOpacity="0.55" />
        <circle cx="36" cy="20" r="2.2" fill="#FF00B2" fillOpacity="0.85" />
        <circle cx="36" cy="20" r="4.5" fill="#FF00B2" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    body: "Connect to building management systems, CMMS, ERP, SCADA, and MES. Merlin triggers the right workflow in the right system the moment a condition is met.",
    color: "#FF00B2",
    icon: (
      /* Three process boxes connected left-to-right */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="2"  y="15" width="10" height="10" rx="2" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <rect x="15" y="13" width="10" height="14" rx="2" stroke="#FF00B2" strokeWidth="1.5" />
        <rect x="15" y="13" width="10" height="14" rx="2" fill="#FF00B2" fillOpacity="0.1" />
        <rect x="28" y="15" width="10" height="10" rx="2" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="12" y1="20" x2="15" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="25" y1="20" x2="28" y2="20" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="7"  cy="20" r="1.5" fill="#FF00B2" fillOpacity="0.4" />
        <circle cx="20" cy="20" r="2"   fill="#FF00B2" />
        <circle cx="33" cy="20" r="1.5" fill="#FF00B2" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Merlin Studio",
    body: "No-code visual agent builder. Design logic visually, test against live building and operational data, deploy in one click. No machine learning expertise needed.",
    color: "#FF00B2",
    icon: (
      /* Dot-grid canvas with three connected nodes */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        {[8,16,24,32].flatMap(x => [8,16,24,32].map(y =>
          <circle key={`d${x}${y}`} cx={x} cy={y} r="0.7" fill="#FF00B2" fillOpacity="0.18" />
        ))}
        <circle cx="12" cy="28" r="3.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="24" cy="14" r="4"   stroke="#FF00B2" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="4"   fill="#FF00B2"   fillOpacity="0.12" />
        <circle cx="32" cy="28" r="3.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="14.5" y1="25.5" x2="21.5" y2="17"   stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="27"   y1="17"   x2="30"   y2="25.5" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.35" />
        <circle cx="24" cy="14" r="2" fill="#FF00B2" />
      </svg>
    ),
  },
  {
    title: "Developer APIs",
    body: "Full REST and Python APIs for custom integrations, advanced agent logic, and building system connectivity.",
    color: "#FF00B2",
    icon: (
      /* Code brackets < / > with endpoint connector dots */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M15 12 L9 20 L15 28"  stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
        <path d="M25 12 L31 20 L25 28" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
        <line x1="22" y1="10" x2="18" y2="30" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="5"  cy="20" r="2"   fill="#FF00B2" />
        <circle cx="35" cy="20" r="2"   fill="#FF00B2" />
        <line x1="5"  y1="20" x2="9"  y2="20" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="31" y1="20" x2="35" y2="20" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Explainable Actions",
    body: "Full audit trail of every decision. What Merlin observed, what it decided, what it did. Essential for compliance, operations review, and continuous improvement.",
    color: "#FF00B2",
    icon: (
      /* Audit document with a vertical timeline trace */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.35" />
        <line x1="14" y1="13" x2="14" y2="30" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="14" cy="13" r="2.2" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.5"  fill="#FF00B2" fillOpacity="0.1" />
        <circle cx="14" cy="21" r="2"   stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.5"  fill="#FF00B2" fillOpacity="0.15" />
        <circle cx="14" cy="29" r="2.5" fill="#FF00B2" />
        <line x1="19" y1="13" x2="27" y2="13" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="19" y1="17" x2="25" y2="17" stroke="#FF00B2" strokeWidth="1"   strokeOpacity="0.22" />
        <line x1="19" y1="21" x2="27" y2="21" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="19" y1="25" x2="24" y2="25" stroke="#FF00B2" strokeWidth="1"   strokeOpacity="0.22" />
        <line x1="19" y1="29" x2="27" y2="29" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.6" />
      </svg>
    ),
  },
];

const deployments = [
  { type: "Cloud (Managed)", desc: "Fully managed by Adaptiv. Fastest time to first action. Merlin agents live in the cloud, informed by real-time data from your Adaptiv devices." },
  { type: "On-Premises", desc: "Full deployment within your infrastructure. Data never leaves your building. Ideal for regulated environments and data sovereignty requirements." },
  { type: "Edge", desc: "Merlin agent logic deployed directly to Adaptiv edge nodes or Smart Displays. Acts locally, with or without cloud connectivity. Sub-millisecond response." },
  { type: "Hybrid", desc: "Cloud management, on-premises or edge execution. Full flexibility, full control." },
];

export default function MerlinPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-center bg-white overflow-hidden py-20">
        {/* Dot matrix */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(109,40,217,0.18) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 20% 70%, rgba(255,0,178,0.08) 0%, transparent 60%)" }} aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="dim" className="mb-6">MEET YOUR NEW CO-WORKER</Badge>
              <h1 className="text-display text-[#111827] mb-5">Merlin. Always Present.<br />Always Acting.</h1>
              <p className="text-body-lg text-[#4b5563] mb-10">
                Merlin is the AI that runs alongside your team — watching every sensor, understanding every space,
                responding to every situation. Not a dashboard you check. Not a report you read.
                A co-worker who handles it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild><Link href="/contact">Request a Demo</Link></Button>
                <Button variant="secondary" size="lg" asChild><Link href="#capabilities">View Capabilities →</Link></Button>
              </div>
            </div>
            {/* Merlin profile card — 11x-inspired digital co-worker identity */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm">
                {/* Profile card */}
                <div className="rounded-3xl border border-[rgba(255,0,178,0.15)] bg-white p-8 shadow-[0_8px_48px_rgba(255,0,178,0.12)]">
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.25)] text-xs font-semibold text-[#14b8a6]">
                      <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
                      Active — 24/7
                    </span>
                    <span className="text-xs text-[#64748b]">v3.2</span>
                  </div>

                  {/* Avatar + identity */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#f0f2f5]">
                      <Image
                        src="/brand/merlin-smart-display.png"
                        alt="Merlin Smart Display"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">Merlin</h3>
                      <p className="text-sm text-[#FF00B2] font-medium">AI Co-Worker · Physical AI</p>
                    </div>
                  </div>

                  {/* Role description */}
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-6">
                    Monitors your building and operations 24/7. Understands context. Acts autonomously. Reports only when you need to know.
                  </p>

                  {/* Skills / stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: "Availability", value: "24/7/365" },
                      { label: "Response", value: "< 1 sec" },
                      { label: "Sensors Monitored", value: "Unlimited" },
                      { label: "Sick Days Taken", value: "0" },
                    ].map((s) => (
                      <div key={s.label} className="p-3 rounded-xl bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.05)]">
                        <div className="text-xs text-[#64748b] mb-1">{s.label}</div>
                        <div className="text-sm font-semibold text-[#111827]">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Core abilities */}
                  <div className="flex flex-wrap gap-2">
                    {["HVAC Control", "Cleaning Dispatch", "Maintenance Alerts", "Energy Mgmt", "Compliance Logs", "Occupancy"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-[rgba(255,0,178,0.06)] border border-[rgba(255,0,178,0.15)] text-[10px] font-medium text-[#FF00B2]/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Co-Worker Framing — 11x-inspired positioning */}
      <section className="py-24 bg-white border-b border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">YOUR DIGITAL CO-WORKER</p>
            <h2 className="text-h1 text-[#111827] mb-8 max-w-2xl">Not another platform.<br />A new member of your team.</h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="flex flex-col gap-5">
                <p className="text-body-lg text-[#4b5563] leading-relaxed">
                  Every AI platform promises intelligence. Most deliver dashboards. You still have to look at them.
                  You still have to decide what to do. You still have to act.
                </p>
                <p className="text-body text-[#4b5563] leading-relaxed">
                  Merlin is different. Merlin is a digital co-worker — an autonomous AI agent that joins your operations
                  team, learns your building, and handles the work that should never require human attention. Like the
                  best colleague you've ever had, Merlin shows up every day, understands the context, and takes care
                  of things before you need to ask.
                </p>
                <p className="text-body text-[#4b5563] leading-relaxed">
                  You don't configure Merlin like software. You onboard Merlin like a new hire. You tell it what
                  matters, it learns how your building operates, and then it works — 24 hours a day, every day,
                  without supervision.
                </p>
                <p className="text-body font-semibold text-[#111827] mt-2">
                  Your team's attention is valuable. Merlin's job is to protect it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">Merlin vs. Traditional AI Platforms</p>
                {[
                  { old: "Dashboards you have to check", merlin: "Autonomous actions you don't have to manage" },
                  { old: "Alerts that require your decision", merlin: "Decisions made and executed automatically" },
                  { old: "Reports delivered after the fact", merlin: "Real-time response as events happen" },
                  { old: "Months of integration work", merlin: "Onboard in days, active in hours" },
                  { old: "Per-seat software licensing", merlin: "One co-worker that scales to every site" },
                ].map((row) => (
                  <div key={row.old} className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.05)]">
                      <span className="text-xs text-[#64748b] line-through">{row.old}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[rgba(255,0,178,0.05)] border border-[rgba(255,0,178,0.15)]">
                      <span className="text-xs text-[#FF00B2]/80 font-medium">{row.merlin}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2.3 Five Traits */}
      <section className="py-24 md:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-14">The Five Traits That Make Merlin Your Best Co-Worker</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {traits.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] hover:shadow-[0_4px_24px_rgba(15,32,68,0.08)] transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                        style={{ background: `${t.color}10`, border: `1px solid ${t.color}28` }}
                      >
                        {t.icon}
                      </div>
                      <h3 className="text-h3 text-[#111827]">{t.title}</h3>
                    </div>
                    <p className="text-[#4b5563] leading-relaxed">{t.body}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white border border-[rgba(15,32,68,0.06)]">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: t.color }}>In practice</p>
                    <p className="text-sm text-[#4b5563] leading-relaxed italic">{t.example}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.3b A Day With Merlin — 24h timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">24/7 OPERATIONS</p>
            <h2 className="text-h1 text-[#111827] mb-5">A Day With Merlin</h2>
            <p className="text-body text-[#64748b] mb-14 max-w-xl">
              While your team sleeps, commutes, and focuses on high-value work — Merlin is running your building. Here's what a typical 24 hours looks like.
            </p>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF00B2]/40 via-[#FF00B2]/15 to-transparent" aria-hidden="true" />

            {[
              { time: "02:30", label: "Night", body: "Merlin detects an anomalous vibration pattern in a production line motor. It logs the event, flags the specific bearing, and schedules a maintenance inspection for Monday morning.", color: "#a855f7" },
              { time: "05:45", label: "Pre-dawn", body: "Energy consumption in Building B is 18% above baseline for an unoccupied period. Merlin identifies an HVAC unit running on manual override, resets it, and logs the correction.", color: "#3b82f6" },
              { time: "07:15", label: "Morning Arrival", body: "Occupancy sensors detect early arrivals on Floor 3. Merlin pre-heats the meeting rooms booked for 08:00, adjusts lighting to morning mode, and confirms the catering order.", color: "#14b8a6" },
              { time: "09:00", label: "Peak Morning", body: "Bathroom entrance sensors detect 3x normal traffic. Merlin increases cleaning frequency for that zone and notifies the facilities team — before anyone complains.", color: "#FF00B2" },
              { time: "12:30", label: "Midday", body: "CO2 levels in the open-plan area exceed 800 ppm. Merlin increases fresh air intake and dims the nearest Smart Display to signal a break. Levels return to normal in 12 minutes.", color: "#22c55e" },
              { time: "15:00", label: "Afternoon", body: "Meeting Room 7 has been booked but unoccupied for 20 minutes. Merlin releases it back to the pool, notifies the organiser, and turns off AV and lighting.", color: "#f59e0b" },
              { time: "18:45", label: "Evening Departure", body: "Occupancy drops below 5%. Merlin transitions the building to evening mode: reduces HVAC, switches to security lighting, and arms the perimeter sensors.", color: "#6366f1" },
              { time: "23:00", label: "Night Watch", body: "All quiet. Merlin continues monitoring every sensor, every camera, every access point. At 23:47, a water leak sensor triggers in the basement. Merlin shuts the valve remotely and dispatches an emergency maintenance notification.", color: "#a855f7" },
            ].map((event, i) => (
              <Reveal key={event.time} delay={i * 0.06}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white z-10"
                      style={{ background: `linear-gradient(135deg, ${event.color}cc, ${event.color}66)` }}>
                      {event.time}
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest mb-1 block" style={{ color: event.color }}>{event.label}</span>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{event.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
                  style={{ background: "linear-gradient(135deg, #FF00B2, #6D28D9)" }}>
                  <span className="text-xs font-bold text-white">∞</span>
                </div>
                <p className="text-sm font-semibold text-[#374151]">Tomorrow, Merlin does it again. And the day after. And every day after that.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2.3c Digital Co-Worker Traits — 11x-inspired */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">WHAT YOUR CO-WORKER BRINGS</p>
            <h2 className="text-h1 text-[#111827] mb-14">Built Different. Works Different.</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Always Learning",
                body: "Merlin learns from every event, every outcome, every correction. The longer it runs, the better it understands your building. Platform updates reach every deployed instance automatically.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <path d="M8 30 C14 24 18 26 22 20 C26 14 30 16 34 10" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
                    <circle cx="34" cy="10" r="2.5" stroke="#FF00B2" strokeWidth="1.2" />
                    <circle cx="34" cy="10" r="1" fill="#FF00B2" />
                    <path d="M31 8 L34 6 L36 9" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                    <line x1="8" y1="34" x2="8" y2="8" stroke="#FF00B2" strokeWidth="0.8" strokeOpacity="0.2" />
                    <line x1="6" y1="34" x2="36" y2="34" stroke="#FF00B2" strokeWidth="0.8" strokeOpacity="0.2" />
                  </svg>
                ),
              },
              {
                title: "Customised to You",
                body: "Merlin isn't generic. It learns your building layout, your operational rhythms, your escalation preferences. Every deployment is unique — because every operation is.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <circle cx="20" cy="20" r="12" stroke="#FF00B2" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.3" />
                    <circle cx="20" cy="20" r="6" stroke="#FF00B2" strokeWidth="1.3" />
                    <path d="M14 20 L18 24 L26 16" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Deeply Integrated",
                body: "BACnet, KNX, Modbus, MQTT, OPC-UA, REST — Merlin speaks every protocol your building uses. It orchestrates actions across your entire tech ecosystem, not just one system.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <circle cx="20" cy="20" r="4" stroke="#FF00B2" strokeWidth="1.5" />
                    <circle cx="20" cy="20" r="2" fill="#FF00B2" />
                    {[0,60,120,180,240,300].map((deg) => {
                      const rad = (deg * Math.PI) / 180;
                      const x = 20 + Math.cos(rad) * 12;
                      const y = 20 + Math.sin(rad) * 12;
                      return (
                        <g key={deg}>
                          <line x1={20 + Math.cos(rad) * 5} y1={20 + Math.sin(rad) * 5} x2={x} y2={y} stroke="#FF00B2" strokeWidth="0.8" strokeOpacity="0.3" />
                          <circle cx={x} cy={y} r="2.5" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.5" />
                        </g>
                      );
                    })}
                  </svg>
                ),
              },
              {
                title: "Autonomous Intelligence",
                body: "Merlin doesn't wait for instructions. It perceives, reasons, decides, and acts — independently. The situations that need a human are escalated. Everything else is handled.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <path d="M10 30 L10 20 L20 10 L30 20 L30 30" stroke="#FF00B2" strokeWidth="1.2" strokeLinejoin="round" />
                    <circle cx="20" cy="22" r="5" stroke="#FF00B2" strokeWidth="1.3" />
                    <circle cx="20" cy="22" r="2" fill="#FF00B2" />
                    <line x1="20" y1="10" x2="20" y2="6" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M17 8 L20 5 L23 8" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
                  </svg>
                ),
              },
              {
                title: "Enterprise-Ready",
                body: "SOC-2 standards, end-to-end AES-256 encryption, zero-trust device authentication, full audit logging. Merlin is built for the most demanding compliance environments.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <path d="M20 5 L33 11 V22 C33 29 27 35 20 37 C13 35 7 29 7 22 V11 Z" stroke="#FF00B2" strokeWidth="1.2" />
                    <path d="M20 5 L33 11 V22 C33 29 27 35 20 37 C13 35 7 29 7 22 V11 Z" fill="#FF00B2" fillOpacity="0.06" />
                    <path d="M14 21 L18 25 L26 17" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Scales to Every Site",
                body: "One Merlin instance manages one building. Or fifty. Deploy across your entire portfolio — same standards, same logic, same quality of operations at every site.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    <rect x="4" y="18" width="10" height="16" rx="1.5" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.4" />
                    <rect x="15" y="12" width="10" height="22" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" />
                    <rect x="15" y="12" width="10" height="22" rx="1.5" fill="#FF00B2" fillOpacity="0.08" />
                    <rect x="26" y="8" width="10" height="26" rx="1.5" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.4" />
                    <path d="M5 17 L20 6 L35 17" stroke="#FF00B2" strokeWidth="0.8" strokeOpacity="0.2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((trait, i) => (
              <Reveal key={trait.title} delay={i * 0.06}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0" style={{ background: "#FF00B210", border: "1px solid #FF00B228" }}>
                    {trait.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{trait.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{trait.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 How Merlin Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-14">How Merlin Works</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", label: "CONNECT", title: "Connect everything.", body: "Merlin connects to every Adaptiv device in your environment via LTE, and to your existing infrastructure via REST API, MQTT, and OPC-UA. Data arrives pre-processed from the edge — clean, contextualised, and ready to act on." },
              { step: "02", label: "CONFIGURE", title: "Configure your agents.", body: "Use Merlin Studio (no-code visual builder) to define your agents: which spaces and assets Merlin monitors, which conditions trigger action, and which workflows it executes. Build your first agent in hours." },
              { step: "03", label: "AUTOMATE", title: "Let Merlin run.", body: "Merlin runs. Continuously. It monitors, decides, and acts in real time — escalating only the exceptions that genuinely need a human. Everything else, it handles." },
            ].map((s) => (
              <Reveal key={s.step}>
                <div className="flex flex-col gap-4 p-6 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#FF00B2] opacity-40">{s.step}</span>
                    <span className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest">{s.label}</span>
                  </div>
                  <h3 className="text-h4 text-[#111827]">{s.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Capabilities */}
      <section id="capabilities" className="py-24 md:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-14">Key Capabilities</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                    style={{ background: `${c.color}10`, border: `1px solid ${c.color}28` }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{c.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 Deployment */}
      <section className="py-20 bg-white border-y border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h2 text-[#111827] text-center mb-10">Deployment Options</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {deployments.map((d, i) => (
              <Reveal key={d.type} delay={i * 0.07}>
                <div className="p-5 rounded-2xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.07)] flex flex-col gap-3 h-full">
                  <h3 className="text-sm font-bold text-[#111827]">{d.type}</h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2.7 Impact */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">MEASURABLE IMPACT</p>
            <h2 className="text-h1 text-[#111827] mb-14">What Happens When You Hire Merlin</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "40%", label: "Reduction in reactive maintenance tickets", color: "#FF00B2" },
              { value: "25%", label: "Energy savings from automated HVAC control", color: "#14b8a6" },
              { value: "90%", label: "Faster compliance report generation", color: "#3b82f6" },
              { value: "0", label: "Missed events — Merlin never sleeps", color: "#a855f7" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div className="p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.07)] text-center flex flex-col gap-3">
                  <div className="text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-[#64748b] leading-relaxed">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-sm text-[#64748b] text-center mt-6 italic">
              Typical results from Merlin deployments across commercial and industrial environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2.8 CTA — Hire Merlin */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">READY?</p>
            <h2 className="text-h1 text-[#111827] mb-5">Hire Merlin for Your Team.</h2>
            <p className="text-body-lg text-[#4b5563] max-w-xl mx-auto mb-4">
              Merlin onboards in days, not months. It learns your building, adapts to your operations,
              and starts delivering results from week one.
            </p>
            <p className="text-body text-[#64748b] max-w-md mx-auto mb-10">
              No integration project. No months of configuration. Just a new co-worker who never stops working.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild><Link href="/contact">Hire Merlin →</Link></Button>
              <Button variant="secondary" size="lg" asChild><Link href="/solutions">See Merlin in Action</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
