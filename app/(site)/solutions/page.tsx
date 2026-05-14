import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { solutionsDefaults, type SolutionsPageData } from "@/lib/content/solutions";

const solutionsPageQuery = groq`*[_type == "solutionsPage"][0]`;

async function getData(): Promise<SolutionsPageData> {
  const remote = await sanityFetch<SolutionsPageData>({
    query: solutionsPageQuery,
    tags: ["solutionsPage"],
  });
  return remote ?? solutionsDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

// Persona icons keyed by string
const PERSONA_ICONS: Record<string, ReactElement> = {
  owner: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="8" y="14" width="24" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5" />
      <path d="M4 14L20 4l16 10" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="24" width="8" height="10" rx="1" stroke="#FF00B2" strokeWidth="1.3" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="20" y1="19" x2="20" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="28" y1="19" x2="28" y2="22" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  facility: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="13" stroke="#14b8a6" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" stroke="#14b8a6" strokeWidth="1.5" />
      <line x1="20" y1="7" x2="20" y2="12" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="28" x2="20" y2="33" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="20" x2="12" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="20" x2="33" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="26" y1="26" x2="29.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="29.5" y1="10.5" x2="26" y2="14" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="14" y1="26" x2="10.5" y2="29.5" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="6" y="20" width="28" height="14" rx="1.5" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M6 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M17 20l7-10h4l-4 10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 20l6-10v10" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="11" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2" />
      <rect x="24" y="25" width="5" height="9" rx="0.5" stroke="#6366f1" strokeWidth="1.2" />
      <circle cx="20" cy="27" r="2" stroke="#6366f1" strokeWidth="1.2" />
    </svg>
  ),
  sustainability: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <path d="M20 32C20 32 8 25 8 16a12 12 0 0 1 24 0c0 9-12 16-12 16z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 16v8M16 20l4-4 4 4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14c1.5-3 4-5 6-6" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <path d="M20 6l12 5v10c0 7-5.5 12.5-12 14C13.5 33.5 8 28 8 21V11l12-5z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 20l3.5 3.5 6.5-6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  itot: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <rect x="8" y="10" width="24" height="16" rx="2" stroke="#a855f7" strokeWidth="1.5" />
      <line x1="8" y1="22" x2="32" y2="22" stroke="#a855f7" strokeWidth="1.2" />
      <circle cx="12" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2" />
      <circle cx="20" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2" />
      <circle cx="28" cy="26" r="1" stroke="#a855f7" strokeWidth="1.2" />
      <path d="M14 30h12M20 26v4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="15" cy="16" r="2" stroke="#a855f7" strokeWidth="1.2" />
      <path d="M19 14h6M19 17h4" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

// Solution icons keyed by string
const SOLUTION_ICONS: Record<string, ReactElement> = {
  building: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="8" y="18" width="32" height="26" rx="2" stroke="#FF00B2" strokeWidth="1.5" />
      <path d="M4 18L24 5l20 13" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="32" width="8" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3" />
      <rect x="12" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2" />
      <rect x="30" y="23" width="6" height="5" rx="0.8" stroke="#FF00B2" strokeWidth="1.2" />
      <path d="M37 12a6 6 0 0 1 0 8" stroke="#FF00B2" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      <path d="M39.5 9.5a10 10 0 0 1 0 13" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <circle cx="35.5" cy="16" r="1.2" fill="#FF00B2" />
    </svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="20" cy="26" r="9" stroke="#14b8a6" strokeWidth="1.5" />
      <circle cx="20" cy="26" r="3.5" stroke="#14b8a6" strokeWidth="1.3" />
      <rect x="18.5" y="14" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2" />
      <rect x="18.5" y="34" width="3" height="4" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2" />
      <rect x="8" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2" />
      <rect x="28" y="24.5" width="4" height="3" rx="0.8" fill="none" stroke="#14b8a6" strokeWidth="1.2" />
      <rect x="10.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 10.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1" />
      <rect x="26.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(-45 26.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1" />
      <rect x="26.5" y="17" width="3.5" height="3.5" rx="0.8" transform="rotate(45 26.5 17)" fill="none" stroke="#14b8a6" strokeWidth="1.1" />
      <rect x="10.5" y="33" width="3.5" height="3.5" rx="0.8" transform="rotate(45 10.5 33)" fill="none" stroke="#14b8a6" strokeWidth="1.1" />
      <circle cx="33" cy="15" r="5.5" stroke="#14b8a6" strokeWidth="1.3" />
      <circle cx="33" cy="15" r="2" stroke="#14b8a6" strokeWidth="1.1" />
      <rect x="31.8" y="8" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1" />
      <rect x="31.8" y="19" width="2.4" height="3" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1" />
      <rect x="26.5" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1" />
      <rect x="37" y="13.8" width="3" height="2.4" rx="0.5" fill="none" stroke="#14b8a6" strokeWidth="1" />
      <path d="M36 24h2l1.5-4 2 8 1.5-4H45" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 6v36" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 14h20M12 22h24" stroke="#6D28D9" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 14l-6 8M30 14l6 8" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 22 Q6 28 4 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M36 22 Q42 28 44 26" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M26 8l-5 9h5l-5 9" stroke="#6D28D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="12" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2" />
      <circle cx="36" cy="22" r="2" stroke="#6D28D9" strokeWidth="1.2" />
      <circle cx="24" cy="42" r="2" stroke="#6D28D9" strokeWidth="1.2" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M4 20l20-12 20 12v22H4V20z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 20h40" stroke="#FF00B2" strokeWidth="1.2" opacity="0.4" />
      <rect x="18" y="30" width="12" height="12" rx="1" stroke="#FF00B2" strokeWidth="1.3" />
      <line x1="24" y1="30" x2="24" y2="42" stroke="#FF00B2" strokeWidth="1" opacity="0.5" />
      <path d="M6 28h7M6 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 28h7M35 33h7" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M39 26l3 2-3 2" stroke="#FF00B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="8" x2="24" y2="20" stroke="#FF00B2" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  cities: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="4" y="24" width="8" height="18" rx="1" stroke="#14b8a6" strokeWidth="1.3" />
      <rect x="14" y="18" width="7" height="24" rx="1" stroke="#14b8a6" strokeWidth="1.3" />
      <rect x="23" y="12" width="9" height="30" rx="1" stroke="#14b8a6" strokeWidth="1.5" />
      <rect x="34" y="20" width="7" height="22" rx="1" stroke="#14b8a6" strokeWidth="1.3" />
      <line x1="27.5" y1="12" x2="27.5" y2="7" stroke="#14b8a6" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="27.5" cy="6" r="1.2" fill="#14b8a6" />
      <path d="M8 22 Q16 14 17.5 18" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2" />
      <path d="M37 18 Q34 10 27.5 12" stroke="#14b8a6" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2" />
      <circle cx="8" cy="22" r="1.5" stroke="#14b8a6" strokeWidth="1.1" />
      <circle cx="37" cy="18" r="1.5" stroke="#14b8a6" strokeWidth="1.1" />
      <line x1="3" y1="42" x2="45" y2="42" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
    </svg>
  ),
};

export default async function SolutionsPage() {
  const data = await getData();
  const { hero, personasSection, solutions, finalCta } = data;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,111,212,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="dim" className="mb-6">{hero.eyebrow}</Badge>
          <h1 className="text-display text-[#111827] mb-5">
            {hero.titleLines.map((line, i) => (
              <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="text-body-lg text-[#4b5563]">{hero.body}</p>
        </div>
      </section>

      {/* WHO MERLIN WORKS FOR */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">{personasSection.eyebrow}</p>
              <h2 className="text-h1 text-[#111827] mb-5">{personasSection.title}</h2>
              <p className="text-body-lg text-[#64748b] max-w-2xl mx-auto">{personasSection.body}</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personasSection.personas.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.06}>
                <div className="group flex flex-col gap-5 p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white hover:border-[rgba(0,0,0,0.13)] transition-all duration-300 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                      {PERSONA_ICONS[p.iconKey] ?? PERSONA_ICONS.owner}
                    </div>
                    <h3 className="text-h4 text-[#111827]">{p.role}</h3>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748b] mb-2">The challenge</p>
                    <p className="text-sm text-[#64748b] leading-relaxed">{p.pain}</p>
                  </div>

                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>How Merlin helps</p>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{p.value}</p>
                  </div>

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
                    {SOLUTION_ICONS[sol.iconKey] ?? SOLUTION_ICONS.building}
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
                            <path d="M3 8l3.5 3.5 6.5-7" stroke={sol.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-h2 text-[#111827] mb-4">{finalCta.title}</h2>
            <p className="text-body text-[#4b5563] max-w-lg mx-auto mb-8">{finalCta.body}</p>
            <Button size="lg" asChild><Link href={finalCta.cta.href}>{finalCta.cta.label}</Link></Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
