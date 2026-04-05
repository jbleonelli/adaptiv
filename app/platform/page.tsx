import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { StackDiagram } from "@/components/illustrations/StackDiagram";
import { SecurityShield } from "@/components/illustrations/SecurityShield";
import { PlatformDiagram } from "@/components/illustrations/PlatformDiagram";

export const metadata: Metadata = {
  title: "Platform — Physical AI: Intelligence at Every Layer",
  description: "Adaptiv's platform is the only fully integrated Physical AI stack — designed, built, and owned end to end.",
};

const ownershipBenefits = [
  {
    title: "No Integration Risk",
    body: "One company owns every layer. A restroom Smart Display collects VOC from its sensor, aggregates dispenser levels from a BLE sensor, receives a badge tap, and forwards all in a single encrypted LTE burst. No API mismatches, no vendor blame, no fragile integrations.",
    color: "#FF00B2",
    icon: (
      /* Three stacked layers connected by a spine — unified stack */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="8"  y="8"  width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" fill="#FF00B210" />
        <rect x="8"  y="17" width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.7" fill="#FF00B20A" />
        <rect x="8"  y="26" width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" fill="#FF00B207" />
        <line x1="20" y1="14" x2="20" y2="17" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.55" />
        <line x1="20" y1="23" x2="20" y2="26" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.55" />
        <circle cx="20" cy="15.5" r="1.3" fill="#FF00B2" opacity="0.85" />
        <circle cx="20" cy="24.5" r="1.3" fill="#FF00B2" opacity="0.85" />
      </svg>
    ),
  },
  {
    title: "Faster Time to Value",
    body: "Devices, software, and AI are pre-integrated. Wireless sensors connect via BLE — no SIM cards, no power wiring. Data never touches the landlord's network, never transits shared Wi-Fi. Merlin starts working the moment the first Smart Display is on the wall.",
    color: "#FF00B2",
    icon: (
      /* Lightning bolt */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M23 7 L13 22 H20 L17 33 L27 18 H20 L23 7Z"
          stroke="#FF00B2" strokeWidth="1.2" strokeLinejoin="round" fill="#FF00B210" />
      </svg>
    ),
  },
  {
    title: "Continuous Optimisation",
    body: "Firmware updates that improve Smart Display sensor calibration also improve Merlin data quality. Radar counts vehicles in parking without cameras. Machine vision in nuclear plants processes at the edge. The whole stack moves together.",
    color: "#FF00B2",
    icon: (
      /* Two curved arrows forming a refresh cycle */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M12 20 A10 10 0 0 1 28 13" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M26 10 L29 13 L25 15"      stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 20 A10 10 0 0 1 12 27" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M14 30 L11 27 L15 25"      stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Complete Network Independence",
    body: "Each device is a fully autonomous node with its own LTE radio. No single point of failure, no cascading outage risk. One contract, one support team, one product roadmap — complete independence from building infrastructure.",
    color: "#FF00B2",
    icon: (
      /* Bullseye / target — single point of ownership */
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#FF00B2" strokeWidth="1"   strokeOpacity="0.3" />
        <circle cx="20" cy="20" r="8"  stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.6" />
        <circle cx="20" cy="20" r="3.5" stroke="#FF00B2" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="1.6" fill="#FF00B2" opacity="0.95" />
      </svg>
    ),
  },
];

const securityItems = [
  "Data signed at device level with cryptographic keys embedded during manufacturing — keys cannot be extracted, copied, or overridden in the field",
  "End-to-end encryption from sensor to cloud: every data point encrypted in transit and at rest, from the Smart Display to the Merlin AI layer",
  "Complete network independence: data never touches the landlord's network, never transits shared Wi-Fi. Each device is a fully autonomous LTE node",
  "No point in the pipeline where third-party firmware could introduce a vulnerability — Adaptiv owns every layer of the stack",
  "SOC 2 Type 2 certified — covers the full data lifecycle from sensor capture to AI processing",
  "No single point of failure, no cascading outage risk: every device operates independently on its own LTE connection",
  "European data centres, GDPR-compliant, EU data residency available",
  "Role-based access control with full activity and agent decision logging, zero-trust device authentication",
];

const apiItems = [
  "Smart Display API: control display content, read sensor gateway data, trigger local agent actions",
  "Merlin REST API: agent management, workflow triggers, decision audit logs, real-time event streams",
  "Python SDK: native library for custom agent logic, building system integrations, and analytics",
  "Webhooks and event streaming: real-time event delivery to BMS, CMMS, ERP, and SCADA systems",
  "Building protocols: BACnet, KNX, Modbus, MQTT, and OPC-UA for integration with existing infrastructure",
  "OpenAPI documentation: interactive, always current",
];

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Dot matrix */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,111,212,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="dim" className="mb-6">THE ADAPTIV PLATFORM</Badge>
              <h1 className="text-display text-[#111827] mb-5">Physical AI:<br />Intelligence at<br />Every Layer</h1>
              <p className="text-body-lg text-[#4b5563] mb-8">
                Physical AI is what happens when Smart Displays with 7 embedded sensors, wireless sensor
                constellations, machine vision, radar, smart lighting, and autonomous AI agents converge
                in the real world. One platform, one AI engine, one data model spanning every device
                and use case — designed, built, and owned end to end.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all">
                  Request a Demo
                </Link>
                <a href="#architecture" className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all">
                  See the Architecture →
                </a>
              </div>
            </div>
            {/* Stack diagram illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <StackDiagram className="w-full max-w-[460px]" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Physical AI */}
      <section className="py-20 bg-white border-b border-[rgba(0,0,0,0.06)]">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">WHAT IS PHYSICAL AI?</p>
            <p className="text-body-lg text-[#4b5563] mb-6 leading-relaxed">
              Physical AI is intelligence that exists in the real world — not in a cloud dashboard, not on a
              separate analytics platform, but embedded in the spaces and machines where work actually
              happens. It sees through air quality, temperature, humidity, lux, and noise sensors. It counts
              people with radar and machine vision. It acts through devices. It responds in the moment.
            </p>
            <p className="text-body-lg text-[#4b5563] mb-8 leading-relaxed">
              Merlin is the AI engine. The Smart Display hub — with its e-ink touchscreen, BLE gateway,
              and LTE radio — and the constellation of wireless sensors are the body. Every device feeds
              into the same AI engine through the same secure data pipeline. Together, they make buildings
              and operations intelligent.
            </p>
            {/* Equation — Merlin + Smart Displays + Sensors = Physical AI */}
            <div className="mt-10 p-8 rounded-3xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,0,178,0.06) 0%, transparent 70%)" }} aria-hidden="true" />
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-8 relative z-10">The Physical AI Equation</p>
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 lg:gap-8">

                {/* Merlin */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.3)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      {/* Brain / neural net */}
                      <circle cx="20" cy="20" r="11" stroke="#6D28D9" strokeWidth="1.1" strokeOpacity="0.4" />
                      <circle cx="20" cy="14" r="2.5" stroke="#6D28D9" strokeWidth="1.2" />
                      <circle cx="13" cy="23" r="2.5" stroke="#6D28D9" strokeWidth="1.2" />
                      <circle cx="27" cy="23" r="2.5" stroke="#6D28D9" strokeWidth="1.2" />
                      <line x1="20" y1="16.5" x2="14.2" y2="20.7" stroke="#6D28D9" strokeWidth="1" strokeOpacity="0.6" />
                      <line x1="20" y1="16.5" x2="25.8" y2="20.7" stroke="#6D28D9" strokeWidth="1" strokeOpacity="0.6" />
                      <line x1="15.5" y1="23" x2="24.5" y2="23" stroke="#6D28D9" strokeWidth="1" strokeOpacity="0.6" />
                      <circle cx="20" cy="14" r="1" fill="#6D28D9" opacity="0.9" />
                      <circle cx="13" cy="23" r="1" fill="#6D28D9" opacity="0.9" />
                      <circle cx="27" cy="23" r="1" fill="#6D28D9" opacity="0.9" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#1f2937]">Merlin AI</span>
                </div>

                <span className="text-2xl font-thin text-[#64748b] select-none">+</span>

                {/* Smart Displays */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,0,178,0.1)", border: "1px solid rgba(255,0,178,0.25)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      {/* Display / screen */}
                      <rect x="7" y="10" width="26" height="17" rx="2.5" stroke="#FF00B2" strokeWidth="1.2" fill="#FF00B208" />
                      <line x1="16" y1="27" x2="14" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round" />
                      <line x1="24" y1="27" x2="26" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round" />
                      <line x1="12" y1="32" x2="28" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.4" strokeLinecap="round" />
                      {/* Signal bars on screen */}
                      <rect x="12" y="20" width="3" height="4" rx="0.8" fill="#FF00B2" opacity="0.5" />
                      <rect x="16.5" y="18" width="3" height="6" rx="0.8" fill="#FF00B2" opacity="0.7" />
                      <rect x="21" y="16" width="3" height="8" rx="0.8" fill="#FF00B2" opacity="0.9" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#1f2937]">Smart Displays</span>
                </div>

                <span className="text-2xl font-thin text-[#64748b] select-none">+</span>

                {/* Sensors */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      {/* Radar / sensor waves */}
                      <circle cx="20" cy="22" r="3" stroke="#14b8a6" strokeWidth="1.3" />
                      <circle cx="20" cy="22" r="7" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.55" />
                      <circle cx="20" cy="22" r="11.5" stroke="#14b8a6" strokeWidth="0.9" strokeOpacity="0.25" />
                      <circle cx="20" cy="22" r="1.4" fill="#14b8a6" opacity="0.95" />
                      {/* Antenna */}
                      <line x1="20" y1="11" x2="20" y2="8" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="20" cy="7" r="1.3" stroke="#14b8a6" strokeWidth="1" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#1f2937]">Sensors</span>
                </div>

                <span className="text-2xl font-thin text-[#64748b] select-none">=</span>

                {/* Physical AI result */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,0,178,0.15), rgba(109,40,217,0.15))", border: "1px solid rgba(255,0,178,0.35)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      {/* Lightning bolt — result / output */}
                      <path d="M23 7 L12 22 H19.5 L17 33 L28 18 H20.5 L23 7Z"
                        stroke="url(#phyGrad)" strokeWidth="1.3" strokeLinejoin="round" fill="url(#phyGradFill)" />
                      <defs>
                        <linearGradient id="phyGrad" x1="12" y1="7" x2="28" y2="33" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF00B2" />
                          <stop offset="1" stopColor="#6D28D9" />
                        </linearGradient>
                        <linearGradient id="phyGradFill" x1="12" y1="7" x2="28" y2="33" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF00B2" stopOpacity="0.15" />
                          <stop offset="1" stopColor="#6D28D9" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold" style={{ background: "linear-gradient(90deg, #FF00B2, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Physical AI</span>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three-Layer Architecture */}
      <section id="architecture" className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-4">Three-Layer Architecture</h2>
            <p className="text-body text-[#4b5563] text-center max-w-xl mx-auto mb-14">
              Adaptiv's platform spans three fully integrated layers. Every layer is designed, built, and owned by Adaptiv.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {[
              {
                label: "Physical AI Layer",
                title: "Merlin — Your Always-On AI Co-Worker",
                body: "Autonomous AI agents that perceive, reason, and act in real time. One AI engine, one data model spanning every device type — Smart Displays, radar, machine vision, smart lighting. Merlin Studio, REST/Python APIs, workflow automation, audit logging.",
                color: "#6D28D9",
                bg: "rgba(109,40,217,0.06)",
                border: "rgba(109,40,217,0.2)",
              },
              {
                label: "IIoT Software Layer",
                title: "Secure IIoT Software Stack",
                body: "Real-time data pipelines, device management, LTE session orchestration, event streaming, and edge-to-cloud synchronisation. Data signed at device level with cryptographic keys embedded during manufacturing. End-to-end encrypted, SOC 2 Type 2 certified.",
                color: "#FF00B2",
                bg: "rgba(26,111,212,0.06)",
                border: "rgba(26,111,212,0.2)",
              },
              {
                label: "Physical Device Layer",
                title: "Adaptiv Devices — The Eyes and Ears of Merlin",
                body: "Smart Display hubs with 7 embedded sensors (air quality, temperature, humidity, lux, noise, accelerometer, NFC), e-ink touchscreen, and BLE gateway. Wireless sensor constellation — people counters, dispenser monitors, leak detectors, door/stall sensors, bin level sensors — connected via BLE, no SIM cards or power wiring. Millimeter-wave radar, machine vision, smart lighting. Each device is a fully autonomous LTE node.",
                color: "#14b8a6",
                bg: "rgba(10,124,89,0.06)",
                border: "rgba(10,124,89,0.2)",
              },
            ].map((layer, i) => (
              <Reveal key={layer.label} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl border" style={{ background: layer.bg, borderColor: layer.border }}>
                  <div className="w-1.5 rounded-full self-stretch" style={{ background: layer.color }} />
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: layer.color }}>{layer.label}</span>
                    <h3 className="text-h4 text-[#111827] mt-1 mb-2">{layer.title}</h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{layer.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM DIAGRAM ─────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        {/* Heading */}
        <div className="container-site mb-12">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <span className="section-number block mb-4">// 02</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">Platform Overview</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">End-to-End<br />Platform Architecture</h2>
                <p className="text-body text-[#64748b] mt-4 max-w-lg leading-relaxed">
                  From Smart Display hubs and wireless BLE sensors to millimeter-wave radar, machine vision,
                  smart lighting, and the Merlin AI engine — every component designed, built, and owned by Adaptiv.
                  One platform, one data model, one secure pipeline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Diagram */}
        <Reveal>
          <div className="relative mx-auto px-4" style={{ maxWidth: "900px" }}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,0,178,0.05) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <PlatformDiagram className="w-full h-auto relative z-10" />
          </div>
        </Reveal>
      </section>

      <div className="section-divider" />

      {/* Full-Stack Ownership */}
      <section className="py-20 bg-white border-y border-[rgba(0,0,0,0.06)]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h2 text-[#111827] text-center mb-12">Why Full-Stack Ownership Matters</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ownershipBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                    style={{ background: `${b.color}10`, border: `1px solid ${b.color}28` }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{b.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{b.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Shield illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <SecurityShield className="w-full max-w-[380px] aspect-square" />
            </div>
            <Reveal>
              <h2 className="text-h2 text-[#111827] mb-8">Physical AI,<br />Secured End to End</h2>
              <ul className="flex flex-col gap-3">
                {securityItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0 mt-2" />
                    <span className="text-[#4b5563] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APIs */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl">
          <Reveal>
            <h2 className="text-h2 text-[#111827] mb-3">Build on the<br />Physical AI Stack</h2>
            <p className="text-body text-[#4b5563] mb-10">Full REST and Python APIs for custom integrations and advanced agent logic.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {apiItems.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 py-3 border-b border-[rgba(0,0,0,0.05)]">
                  <span className="text-[#FF00B2] text-xs font-bold flex-shrink-0 mt-1">→</span>
                  <span className="text-[#4b5563] text-sm leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built Local */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-12">
              <Badge variant="green" className="mb-5">BUILT LOCAL</Badge>
              <h2 className="text-h2 text-[#111827] mb-5">We Build Where You Are</h2>
              <p className="text-body-lg text-[#4b5563] max-w-2xl mx-auto">
                Adaptiv is headquartered in the United States. We design every device in-house — and we
                manufacture locally: in the United States for our North American customers, and in Europe for
                our European customers. We do not ship hardware across oceans and call it a global business.
                We build where we sell.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                color: "#3b82f6",
                icon: (
                  /* US — thin-line icon: flag outline + 7 stripes + star cluster in canton */
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    {/* Flag body */}
                    <rect x="7" y="9" width="26" height="22" rx="1.5" stroke="#3b82f6" strokeWidth="1.2" fill="#3b82f610" />
                    {/* 6 horizontal stripe lines */}
                    {[13, 16.4, 19.7, 23, 26.4, 29.7].map((y) => (
                      <line key={y} x1="7" y1={y} x2="33" y2={y} stroke="#3b82f6" strokeWidth="0.7" strokeOpacity="0.35" />
                    ))}
                    {/* Canton block */}
                    <rect x="7" y="9" width="11" height="11" rx="1" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.9" strokeOpacity="0.6" />
                    {/* 9 star dots in canton */}
                    {[9.5, 12, 14.5].map((cx) =>
                      [11, 13.5, 16].map((cy) => (
                        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.9" fill="#3b82f6" opacity="0.85" />
                      ))
                    )}
                    {/* Flag pole */}
                    <line x1="7" y1="7" x2="7" y2="33" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
                  </svg>
                ),
                title: "Built in the US — for North America",
                body: "Adaptiv devices sold in the United States and North America are manufactured domestically. Local supply chain, US compliance standards, American manufacturing quality. For customers in regulated industries and government procurement, domestic manufacturing is not a preference — it is a requirement. We meet it.",
              },
              {
                color: "#f59e0b",
                icon: (
                  /* EU — thin-line icon: flag outline + 12 stars in a circle */
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                    {/* Flag body */}
                    <rect x="7" y="9" width="26" height="22" rx="1.5" stroke="#f59e0b" strokeWidth="1.2" fill="#f59e0b0e" />
                    {/* 12 small stars in a circle */}
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
                      const cx = 20 + Math.cos(angle) * 7;
                      const cy = 20 + Math.sin(angle) * 6;
                      return (
                        <polygon key={i}
                          transform={`translate(${cx},${cy})`}
                          points="0,-1.5 0.44,-0.55 1.43,-0.46 0.71,0.21 0.88,1.21 0,0.7 -0.88,1.21 -0.71,0.21 -1.43,-0.46 -0.44,-0.55"
                          fill="#f59e0b" opacity="0.85" />
                      );
                    })}
                    {/* Flag pole */}
                    <line x1="7" y1="7" x2="7" y2="33" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
                  </svg>
                ),
                title: "Built in Europe — for Europe",
                body: "Adaptiv devices sold in Europe are manufactured in Europe. EU product regulations, CE marking, GDPR-compliant data infrastructure, and European supply chain traceability. For customers with data sovereignty and supply chain requirements, European manufacturing is the only option. We deliver it.",
              },
            ].map((region) => (
              <Reveal key={region.title}>
                <Card className="p-7 h-full flex flex-col gap-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center p-2 flex-shrink-0"
                    style={{ background: `${region.color}10`, border: `1px solid ${region.color}28` }}
                  >
                    {region.icon}
                  </div>
                  <h3 className="text-h4 text-[#111827]">{region.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{region.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] max-w-3xl mx-auto">
              <p className="text-sm text-[#4b5563] leading-relaxed italic">
                The devices that run Merlin are embedded in your buildings and operations for years. They should be
                built to the standards of the country they operate in, supported by teams in your timezone, and
                sourced from supply chains you can verify. Built Local is not a marketing claim — it is how we think
                a hardware company should operate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
