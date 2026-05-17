import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TraitIcon } from "@/components/icons/TraitIcon";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { merlinDefaults, type MerlinPageData } from "@/lib/content/merlin";
import { imageSrc, imageAlt, imageObjectPosition } from "@/sanity/imageSrc";
import { imageOverrideStyleFromStrings } from "@/lib/image-style";

const merlinPageQuery = groq`*[_type == "merlinPage"][0]`;

async function getData(): Promise<MerlinPageData> {
  const remote = await sanityFetch<MerlinPageData>({
    query: merlinPageQuery,
    tags: ["merlinPage"],
  });
  return remote ?? merlinDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function MerlinPage() {
  const data = await getData();
  const { hero, fiveTraitsHeading, traits, impactSection, finalCta } = data;

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-center bg-white overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(109,40,217,0.18) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 20% 70%, rgba(255,0,178,0.08) 0%, transparent 60%)" }} aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="dim" className="mb-6">{hero.eyebrow}</Badge>
              <h1 className="text-display text-[#111827] mb-5">
                {hero.titleLines.map((line, i) => (
                  <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
                ))}
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-10">{hero.body}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild><Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link></Button>
                <Button variant="secondary" size="lg" asChild><Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link></Button>
              </div>
            </div>
            {/*
              Hero visual — if hero.image is set in Sanity, render the image
              with the same controls as the Devices hero (size mode, fit,
              hotspot-aware focal point). Otherwise fall back to the legacy
              profile card so existing data keeps rendering.
            */}
            {hero.image ? (
              (() => {
                const fit = hero.imageObjectFit ?? "cover";
                const objectPosition = imageObjectPosition(hero.image);
                const overrideStyle = imageOverrideStyleFromStrings(
                  hero.imageRoundedOverride,
                  hero.imageShadowOverride
                );
                if (hero.imageSize === "matchTextHeight") {
                  return (
                    <div className="hidden lg:block self-stretch relative w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageSrc(hero.image)}
                        alt={imageAlt(hero.image, hero.imageAlt)}
                        className="cms-image absolute inset-0 w-full h-full"
                        style={{
                          objectFit: fit,
                          objectPosition,
                          ...overrideStyle,
                        }}
                      />
                    </div>
                  );
                }
                return (
                  <div className="hidden lg:flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc(hero.image)}
                      alt={imageAlt(hero.image, hero.imageAlt)}
                      className="cms-image w-full"
                      style={{
                        objectFit: fit,
                        objectPosition,
                        maxWidth: `${hero.imageMaxWidthPx ?? 384}px`,
                        maxHeight: hero.imageMaxHeightPx
                          ? `${hero.imageMaxHeightPx}px`
                          : undefined,
                        ...overrideStyle,
                      }}
                    />
                  </div>
                );
              })()
            ) : (
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="rounded-3xl border border-[rgba(255,0,178,0.15)] bg-white p-8 shadow-[0_8px_48px_rgba(255,0,178,0.12)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.25)] text-xs font-semibold text-[#14b8a6]">
                        <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
                        {hero.profileCard.statusLabel}
                      </span>
                      <span className="text-xs text-[#64748b]">{hero.profileCard.version}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#f0f2f5]">
                        <Image
                          src={imageSrc(hero.profileCard.photo, { width: 128 })}
                          alt={imageAlt(hero.profileCard.photo, hero.profileCard.photoAlt)}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#111827]">{hero.profileCard.name}</h3>
                        <p className="text-sm text-[#FF00B2] font-medium">{hero.profileCard.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#4b5563] leading-relaxed mb-6">
                      {hero.profileCard.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {hero.profileCard.stats.map((s) => (
                        <div key={s.label} className="p-3 rounded-xl bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.05)]">
                          <div className="text-xs text-[#64748b] mb-1">{s.label}</div>
                          <div className="text-sm font-semibold text-[#111827]">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hero.profileCard.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-[rgba(255,0,178,0.06)] border border-[rgba(255,0,178,0.15)] text-[10px] font-medium text-[#FF00B2]/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2.3 Five Traits */}
      <section className="py-24 md:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h1 text-[#111827] text-center mb-14">{fiveTraitsHeading}</h2>
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
                        <TraitIcon name={t.icon} color={t.color} />
                      </div>
                      <h3 className="text-h3 text-[#111827]">{t.title}</h3>
                    </div>
                    <p className="text-[#4b5563] leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Bridge → the agent library */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 70%)" }}
          />
        </div>
        <div className="container-site relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">
                // THE ENGINE
              </p>
              <h2 className="text-h2 text-[#111827] mb-5 leading-tight">
                Merlin doesn&rsquo;t run on one giant model.
                <br />
                It runs on a fleet of specialists.
              </h2>
              <p className="text-body-lg text-[#4b5563] leading-relaxed mb-8 max-w-2xl mx-auto">
                Eleven specialized agents &mdash; one for cleaning, one for HVAC, one for
                cold-chain, one for asset tracking, and so on &mdash; each reasoning
                continuously over its own slice of real-world signal, each accountable for
                its own outcomes.
              </p>
              <Link
                href="/agents"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#111827] font-medium hover:bg-[rgba(255,0,178,0.05)] hover:border-[rgba(255,0,178,0.3)] transition-all"
              >
                Explore the agent library
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2.7 Impact */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">{impactSection.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-14">{impactSection.title}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactSection.metrics.map((stat, i) => (
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
              {impactSection.footnote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2.8 CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{finalCta.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-5">{finalCta.title}</h2>
            <p className="text-body-lg text-[#4b5563] max-w-xl mx-auto mb-4">
              {finalCta.body}
            </p>
            <p className="text-body text-[#64748b] max-w-md mx-auto mb-10">
              {finalCta.subBody}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild><Link href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Link></Button>
              <Button variant="secondary" size="lg" asChild><Link href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
