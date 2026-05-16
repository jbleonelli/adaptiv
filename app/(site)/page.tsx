import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { homePageQuery } from "@/sanity/queries";
import { homeDefaults, type HomePageData } from "@/lib/content/home";
import { imageSrc, imageAlt } from "@/sanity/imageSrc";
import { imageOverrideStyleFromStrings } from "@/lib/image-style";

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
  const { hero, physicalAI, merlinIntro, finalCta } = data;

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

            {hero.heroComposite ? (
              <div className="hidden lg:flex items-center justify-center">
                {/*
                  Soft-fade the top AND left edges of the composite image into
                  the pink halo behind it. The PNG has white padding on its
                  top and left, which would otherwise punch a white block out
                  of the gradient. Two linear gradients composited with
                  `intersect` produce an L-shaped fade along the two edges
                  closest to the halo. (`-webkit-mask-composite: source-in`
                  is the Safari fallback for `intersect`.)
                */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc(hero.heroComposite, { width: 1600 })}
                  alt={imageAlt(hero.heroComposite, hero.heroCompositeAlt)}
                  className="cms-image w-full h-auto"
                  style={{
                    maxWidth: `${hero.heroCompositeMaxWidthPx ?? 720}px`,
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 7%, black 100%), linear-gradient(to right, transparent 0%, black 7%, black 100%)",
                    maskComposite: "intersect",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 7%, black 100%), linear-gradient(to right, transparent 0%, black 7%, black 100%)",
                    WebkitMaskComposite: "source-in",
                    ...imageOverrideStyleFromStrings(
                      hero.heroCompositeRoundedOverride,
                      hero.heroCompositeShadowOverride
                    ),
                  }}
                />
              </div>
            ) : (
              <div className="hidden lg:flex flex-col gap-4">
                <div className="cms-image overflow-hidden">
                  <Image
                    src={imageSrc(hero.heroImagePrimary, { width: 1024 })}
                    alt={imageAlt(hero.heroImagePrimary, hero.heroImagePrimaryAlt)}
                    width={1024} height={640}
                    className="w-full object-cover"
                  />
                </div>
                <div className="cms-image overflow-hidden">
                  <Image
                    src={imageSrc(hero.heroImageSecondary, { width: 1024 })}
                    alt={imageAlt(hero.heroImageSecondary, hero.heroImageSecondaryAlt)}
                    width={1024} height={640}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            )}

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
