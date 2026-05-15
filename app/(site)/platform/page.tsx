import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { StackDiagram } from "@/components/illustrations/StackDiagram";
import { SecurityShield } from "@/components/illustrations/SecurityShield";
import { PlatformDiagram } from "@/components/illustrations/PlatformDiagram";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { platformDefaults, type PlatformPageData } from "@/lib/content/platform";

const platformPageQuery = groq`*[_type == "platformPage"][0]`;

async function getData(): Promise<PlatformPageData> {
  const remote = await sanityFetch<PlatformPageData>({
    query: platformPageQuery,
    tags: ["platformPage"],
  });
  return remote ?? platformDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

// Decorative icons for ownership benefits — keyed by index
const OWNERSHIP_ICONS: ReactElement[] = [
  <svg key="0" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" fill="#FF00B210" />
    <rect x="8" y="17" width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.7" fill="#FF00B20A" />
    <rect x="8" y="26" width="24" height="6" rx="1.5" stroke="#FF00B2" strokeWidth="1.2" strokeOpacity="0.45" fill="#FF00B207" />
    <line x1="20" y1="14" x2="20" y2="17" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.55" />
    <line x1="20" y1="23" x2="20" y2="26" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.55" />
    <circle cx="20" cy="15.5" r="1.3" fill="#FF00B2" opacity="0.85" />
    <circle cx="20" cy="24.5" r="1.3" fill="#FF00B2" opacity="0.85" />
  </svg>,
  <svg key="1" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <path d="M23 7 L13 22 H20 L17 33 L27 18 H20 L23 7Z" stroke="#FF00B2" strokeWidth="1.2" strokeLinejoin="round" fill="#FF00B210" />
  </svg>,
  <svg key="2" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <path d="M12 20 A10 10 0 0 1 28 13" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M26 10 L29 13 L25 15" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 20 A10 10 0 0 1 12 27" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M14 30 L11 27 L15 25" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <circle cx="20" cy="20" r="13" stroke="#FF00B2" strokeWidth="1" strokeOpacity="0.3" />
    <circle cx="20" cy="20" r="8" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.6" />
    <circle cx="20" cy="20" r="3.5" stroke="#FF00B2" strokeWidth="1.2" />
    <circle cx="20" cy="20" r="1.6" fill="#FF00B2" opacity="0.95" />
  </svg>,
];

const REGION_ICONS: ReactElement[] = [
  <svg key="us" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <rect x="7" y="9" width="26" height="22" rx="1.5" stroke="#3b82f6" strokeWidth="1.2" fill="#3b82f610" />
    {[13, 16.4, 19.7, 23, 26.4, 29.7].map((y) => (
      <line key={y} x1="7" y1={y} x2="33" y2={y} stroke="#3b82f6" strokeWidth="0.7" strokeOpacity="0.35" />
    ))}
    <rect x="7" y="9" width="11" height="11" rx="1" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.9" strokeOpacity="0.6" />
    {[9.5, 12, 14.5].map((cx) =>
      [11, 13.5, 16].map((cy) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.9" fill="#3b82f6" opacity="0.85" />
      ))
    )}
    <line x1="7" y1="7" x2="7" y2="33" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>,
  <svg key="eu" viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <rect x="7" y="9" width="26" height="22" rx="1.5" stroke="#f59e0b" strokeWidth="1.2" fill="#f59e0b0e" />
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
    <line x1="7" y1="7" x2="7" y2="33" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>,
];

const REGION_COLORS = ["#3b82f6", "#f59e0b"];

export default async function PlatformPage() {
  const data = await getData();
  const { hero, whatIsSection, architectureSection, diagramSection, ownershipSection, securitySection, apiSection, builtLocalSection } = data;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,111,212,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="dim" className="mb-6">{hero.eyebrow}</Badge>
              <h1 className="text-display text-[#111827] mb-5">
                {hero.titleLines.map((line, i) => (
                  <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
                ))}
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-8">{hero.body}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={hero.primaryCta.href} className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all">
                  {hero.primaryCta.label}
                </Link>
                <a href={hero.secondaryCta.href} className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <StackDiagram className="w-full max-w-[460px]" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Physical AI */}
      <section className="py-20 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{whatIsSection.eyebrow}</p>
            {whatIsSection.bodyParagraphs.map((para, i) => (
              <p key={i} className={`text-body-lg text-[#4b5563] leading-relaxed ${i === whatIsSection.bodyParagraphs.length - 1 ? "mb-8" : "mb-6"}`}>
                {para}
              </p>
            ))}
            <div className="mt-10 p-8 rounded-3xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,0,178,0.06) 0%, transparent 70%)" }} aria-hidden="true" />
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-8 relative z-10">{whatIsSection.equationLabel}</p>
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.3)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
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
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,0,178,0.1)", border: "1px solid rgba(255,0,178,0.25)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      <rect x="7" y="10" width="26" height="17" rx="2.5" stroke="#FF00B2" strokeWidth="1.2" fill="#FF00B208" />
                      <line x1="16" y1="27" x2="14" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round" />
                      <line x1="24" y1="27" x2="26" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round" />
                      <line x1="12" y1="32" x2="28" y2="32" stroke="#FF00B2" strokeWidth="1.1" strokeOpacity="0.4" strokeLinecap="round" />
                      <rect x="12" y="20" width="3" height="4" rx="0.8" fill="#FF00B2" opacity="0.5" />
                      <rect x="16.5" y="18" width="3" height="6" rx="0.8" fill="#FF00B2" opacity="0.7" />
                      <rect x="21" y="16" width="3" height="8" rx="0.8" fill="#FF00B2" opacity="0.9" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#1f2937]">Smart Displays</span>
                </div>
                <span className="text-2xl font-thin text-[#64748b] select-none">+</span>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                      <circle cx="20" cy="22" r="3" stroke="#14b8a6" strokeWidth="1.3" />
                      <circle cx="20" cy="22" r="7" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.55" />
                      <circle cx="20" cy="22" r="11.5" stroke="#14b8a6" strokeWidth="0.9" strokeOpacity="0.25" />
                      <circle cx="20" cy="22" r="1.4" fill="#14b8a6" opacity="0.95" />
                      <line x1="20" y1="11" x2="20" y2="8" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="20" cy="7" r="1.3" stroke="#14b8a6" strokeWidth="1" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#1f2937]">Sensors</span>
                </div>
                <span className="text-2xl font-thin text-[#64748b] select-none">=</span>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,0,178,0.15), rgba(109,40,217,0.15))", border: "1px solid rgba(255,0,178,0.35)" }}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
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
            <h2 className="text-h1 text-[#111827] text-center mb-4">{architectureSection.title}</h2>
            <p className="text-body text-[#4b5563] text-center max-w-xl mx-auto mb-14">{architectureSection.intro}</p>
          </Reveal>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {architectureSection.layers.map((layer, i) => (
              <Reveal key={layer.label} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl border" style={{ background: `${layer.color}10`, borderColor: `${layer.color}33` }}>
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

      {/* PLATFORM DIAGRAM */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-site mb-12">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <span className="section-number block mb-4">{diagramSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{diagramSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {diagramSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < diagramSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] mt-4 max-w-lg leading-relaxed">{diagramSection.body}</p>
              </div>
            </div>
          </Reveal>
        </div>

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
      <section className="py-20 bg-white">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h2 text-[#111827] text-center mb-12">{ownershipSection.title}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ownershipSection.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                    style={{ background: "#FF00B210", border: "1px solid #FF00B228" }}
                  >
                    {OWNERSHIP_ICONS[i % OWNERSHIP_ICONS.length]}
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
            <div className="hidden lg:flex items-center justify-center">
              <SecurityShield className="w-full max-w-[380px] aspect-square" />
            </div>
            <Reveal>
              <h2 className="text-h2 text-[#111827] mb-8">
                {securitySection.titleLines.map((line, i) => (
                  <span key={i}>{line}{i < securitySection.titleLines.length - 1 && <br />}</span>
                ))}
              </h2>
              <ul className="flex flex-col gap-3">
                {securitySection.items.map((item) => (
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
            <h2 className="text-h2 text-[#111827] mb-3">
              {apiSection.titleLines.map((line, i) => (
                <span key={i}>{line}{i < apiSection.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-body text-[#4b5563] mb-10">{apiSection.body}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {apiSection.items.map((item, i) => (
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
              <Badge variant="green" className="mb-5">{builtLocalSection.badge}</Badge>
              <h2 className="text-h2 text-[#111827] mb-5">{builtLocalSection.title}</h2>
              <p className="text-body-lg text-[#4b5563] max-w-2xl mx-auto">{builtLocalSection.body}</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {builtLocalSection.regions.map((region, i) => {
              const color = REGION_COLORS[i % REGION_COLORS.length];
              return (
                <Reveal key={region.title}>
                  <Card className="p-7 h-full flex flex-col gap-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center p-2 flex-shrink-0"
                      style={{ background: `${color}10`, border: `1px solid ${color}28` }}
                    >
                      {REGION_ICONS[i % REGION_ICONS.length]}
                    </div>
                    <h3 className="text-h4 text-[#111827]">{region.title}</h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{region.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] max-w-3xl mx-auto">
              <p className="text-sm text-[#4b5563] leading-relaxed italic">{builtLocalSection.closingNote}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
