import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { homePageQuery } from "@/sanity/queries";
import { homeDefaults, type HomePageData } from "@/lib/content/home";
import { imageSrc, imageAlt } from "@/sanity/imageSrc";

const TRAIT_GLYPHS: Record<string, string> = {
  "circle-filled": "◉",
  diamond: "◈",
  target: "◎",
  "square-diamond": "◆",
  radar: "◉",
  neural: "◈",
  cycle: "◎",
  shield: "◆",
  action: "▶",
};

async function getData(): Promise<HomePageData> {
  const remote = await sanityFetch<HomePageData>({
    query: homePageQuery,
    tags: ["homePage"],
  });
  return remote ?? homeDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function HomePage() {
  const data = await getData();
  const { hero, physicalAI, deviceShowcase, merlinIntro, traits, useCasesIntro, useCases, differencesSection, differences, finalCta } = data;

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-16">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] pointer-events-none opacity-10"
          style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }}
          aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,0,178,0.2)] bg-[rgba(255,0,178,0.06)] text-xs font-semibold text-[#FF00B2] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B2] animate-pulse" />
                  {hero.eyebrow}
                </span>
              </div>
              <h1 className="text-display text-[#111827] mb-6 leading-none">
                {hero.titleLines.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
                <span className="gradient-text-pink">{hero.gradientWord}</span>
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-3 leading-relaxed max-w-sm">
                {hero.bodyPrimary}
              </p>
              <p className="text-sm text-[#64748b] mb-10">
                {hero.bodySecondary}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link href={hero.primaryCta.href} className="px-8 py-4 rounded-full bg-[#FF00B2] text-white text-base font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] hover:shadow-[0_8px_40px_rgba(255,0,178,0.5)] transition-all active:scale-[0.98]">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.1)] text-[#4b5563] text-base font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.03)] transition-all">
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {hero.chips.map((chip) => (
                  <span key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] text-xs text-[#64748b] font-medium">
                    <span className="w-1 h-1 rounded-full" style={{ background: chip.dotColor, opacity: 0.8 }} />
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={imageSrc(hero.heroImagePrimary, { width: 1024 })}
                  alt={imageAlt(hero.heroImagePrimary, hero.heroImagePrimaryAlt)}
                  width={1024} height={640}
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={imageSrc(hero.heroImageSecondary, { width: 1024 })}
                  alt={imageAlt(hero.heroImageSecondary, hero.heroImageSecondaryAlt)}
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
                <span className="section-number block mb-4">{physicalAI.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">{physicalAI.eyebrow}</p>
                <h2 className="text-h1 text-[#111827] mb-6">
                  {physicalAI.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < physicalAI.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body-lg text-[#4b5563] mb-8 leading-relaxed">
                  {physicalAI.body}
                </p>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-[rgba(255,0,178,0.2)] bg-[rgba(255,0,178,0.05)] w-fit">
                  <span className="text-[#64748b] text-sm">Physical AI</span>
                  <span className="text-[#FF00B2] font-bold">=</span>
                  <span className="text-[#1f2937] text-sm font-medium">{physicalAI.definition}</span>
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
                <span className="section-number block mb-4">{deviceShowcase.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{deviceShowcase.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827] mb-4">{deviceShowcase.title}</h2>
                <p className="text-body text-[#4b5563] max-w-xl leading-relaxed">
                  {deviceShowcase.body}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden">
              <div>
                <Image
                  src={imageSrc(deviceShowcase.image, { width: 1920 })}
                  alt={imageAlt(deviceShowcase.image, deviceShowcase.imageAlt)}
                  width={1920} height={1080}
                  className="w-full object-cover"
                />
              </div>
              <div className="relative z-30 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(0,0,0,0.03)] border-t border-[rgba(0,0,0,0.06)] -mt-1">
                {deviceShowcase.sensorStrip.map((s) => (
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
                <span className="section-number block mb-4">{merlinIntro.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">{merlinIntro.eyebrow}</p>
                <h2 className="text-h1 text-[#111827] mb-6">
                  {merlinIntro.titleMain}<br />
                  <span className="gradient-text-pink">{merlinIntro.titleHighlight}</span>
                </h2>
                <p className="text-body text-[#64748b] leading-relaxed mb-8">
                  {merlinIntro.body}
                </p>
                <Link href={merlinIntro.ctaHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF00B2] hover:text-[#ff6fe8] transition-colors">
                  {merlinIntro.ctaLabel}
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
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="flex items-start gap-8 py-8 border-b border-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.02)] transition-colors px-2 -mx-2 rounded-xl group">
                  <div className="flex items-center gap-4 w-20 flex-shrink-0">
                    <span className="text-xl mt-0.5" style={{ color: t.color, opacity: 0.6 }}>{TRAIT_GLYPHS[t.icon] ?? "◉"}</span>
                    {t.num && <span className="text-xs font-bold tabular-nums" style={{ color: t.color, opacity: 0.35 }}>{t.num}</span>}
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
                <span className="section-number block mb-4">{useCasesIntro.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{useCasesIntro.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h1 text-[#111827]">
                  {useCasesIntro.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < useCasesIntro.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 0.05}>
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
                <span className="section-number block mb-4">{differencesSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-8">{differencesSection.eyebrow}</p>
                <h2 className="text-h2 text-[#111827] mb-10">
                  {differencesSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < differencesSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <ul className="flex flex-col border-t border-[rgba(0,0,0,0.07)]">
                  {differences.map((d, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-b border-[rgba(0,0,0,0.05)]">
                      <span className="text-[#FF00B2] text-xs font-bold tabular-nums mt-0.5 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[#4b5563] text-sm leading-relaxed">{d.text}</span>
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
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }} />
        </div>
        <div className="container-site relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="section-number mb-6 uppercase tracking-[0.2em]">{finalCta.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-5">
              {finalCta.titleLines.map((line, i) => (
                <span key={i}>{line}{i < finalCta.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-body text-[#64748b] mb-12 leading-relaxed">
              {finalCta.body}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={finalCta.primaryCta.href} className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all">
                {finalCta.primaryCta.label}
              </Link>
              <Link href={finalCta.secondaryCta.href} className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.1)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.12)] transition-all">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
