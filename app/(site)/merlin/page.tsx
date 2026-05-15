import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
  const { hero, coWorker, fiveTraitsHeading, traits, dayWithMerlin, differentTraitsHeading, differentTraits, howItWorksHeading, howItWorksSteps, capabilitiesHeading, capabilities, deploymentHeading, deployments, impactSection, finalCta } = data;

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

      {/* 2.2 Co-Worker Framing */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{coWorker.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-8 max-w-2xl">
              {coWorker.titleLines.map((line, i) => (
                <span key={i}>{line}{i < coWorker.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="flex flex-col gap-5">
                {coWorker.paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-body-lg text-[#4b5563] leading-relaxed" : "text-body text-[#4b5563] leading-relaxed"}>
                    {p}
                  </p>
                ))}
                <p className="text-body font-semibold text-[#111827] mt-2">
                  {coWorker.closingLine}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">{coWorker.comparisonHeading}</p>
                {coWorker.comparison.map((row) => (
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

      {/* 2.3b A Day With Merlin */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="container-site relative z-10">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">{dayWithMerlin.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-5">{dayWithMerlin.title}</h2>
            <p className="text-body text-[#64748b] mb-14 max-w-xl">{dayWithMerlin.body}</p>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF00B2]/40 via-[#FF00B2]/15 to-transparent" aria-hidden="true" />

            {dayWithMerlin.events.map((event, i) => (
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
                <p className="text-sm font-semibold text-[#374151]">{dayWithMerlin.footerLine}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2.3c Different Traits */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-4">{differentTraitsHeading.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-14">{differentTraitsHeading.title}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentTraits.map((trait, i) => (
              <Reveal key={trait.title} delay={i * 0.06}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0" style={{ background: `${trait.color}10`, border: `1px solid ${trait.color}28` }}>
                    <TraitIcon name={trait.icon} color={trait.color} />
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
            <h2 className="text-h1 text-[#111827] text-center mb-14">{howItWorksHeading}</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {howItWorksSteps.map((s) => (
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
            <h2 className="text-h1 text-[#111827] text-center mb-14">{capabilitiesHeading}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card className="p-6 h-full flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                    style={{ background: `${c.color}10`, border: `1px solid ${c.color}28` }}>
                    <TraitIcon name={c.icon} color={c.color} />
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
      <section className="py-20 bg-white">
        <div className="container-site">
          <Reveal>
            <h2 className="text-h2 text-[#111827] text-center mb-10">{deploymentHeading}</h2>
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
