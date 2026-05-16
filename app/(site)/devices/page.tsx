import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { devicesDefaults, type DevicesPageData } from "@/lib/content/devices";
import { imageSrc, imageAlt, imageObjectPosition } from "@/sanity/imageSrc";
import { imageOverrideStyleFromStrings } from "@/lib/image-style";

const devicesPageQuery = groq`*[_type == "devicesPage"][0]`;

async function getData(): Promise<DevicesPageData> {
  const remote = await sanityFetch<DevicesPageData>({
    query: devicesPageQuery,
    tags: ["devicesPage"],
  });
  return remote ?? devicesDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Showcase — Apple-style alternating big-image tiles. Uses the existing
// Smart Display photography on disk so we ship real imagery today, with copy
// pulled from advantagesSection so the CMS still owns the words.
// ─────────────────────────────────────────────────────────────────────────────
const PRODUCT_SHOWCASE_IMAGES: { src: string; alt: string; align: "left" | "right" | "full" }[] = [
  { src: "/smart-displays-hero.png", alt: "Adaptiv Smart Display on a wall, eye level", align: "right" },
  { src: "/smart-display-side.png", alt: "Adaptiv Smart Display, side view showing the slim profile", align: "left" },
  { src: "/smart-display-wall.png", alt: "Adaptiv Smart Display installed in a building corridor", align: "right" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sensor library — placeholder slots. Each sensor in deviceRangeSection.devices
// is rendered as a gray box with a centered SVG icon hint, until real product
// photography is commissioned.
// ─────────────────────────────────────────────────────────────────────────────
const SENSOR_ICON_BY_NAME: Record<string, ReactElement> = {
  "People counters": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="17" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 38 C8 30 26 30 26 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M23 38 C23 30 41 30 41 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  ),
  "Dispenser level monitors": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="14" y="8" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="22" width="14" height="14" rx="1.5" fill="currentColor" opacity="0.18" />
      <rect x="17" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="14" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  ),
  "Leak detectors": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 7 Q34 21 34 28 A10 10 0 0 1 14 28 Q14 21 24 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 28 Q21 24 24 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M6 40 Q14 36 24 40 Q34 44 42 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
    </svg>
  ),
  "Door and stall occupancy sensors": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="10" y="6" width="16" height="34" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M26 9 L38 13 L38 36 L26 39" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.55" />
      <rect x="13" y="22" width="4" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.2" />
      <line x1="17" y1="25" x2="26" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  "Bin level sensors": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M11 16 L37 16 L34 41 L14 41 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 27 L34 27" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
      <rect x="14" y="29" width="20" height="12" fill="currentColor" opacity="0.18" />
      <rect x="8" y="12" width="32" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="19" y1="8" x2="29" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Radar sensing devices": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <circle cx="24" cy="24" r="4.5" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
      <path d="M24 24 L36 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "Machine vision devices": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="6" y="14" width="36" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="25" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="25" r="3" fill="currentColor" opacity="0.45" />
      <circle cx="36" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
      <path d="M18 14 L20 10 L28 10 L30 14" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  ),
  "Smart lighting": (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 7 C16 7 12 13 12 19 C12 24 16 27 16 32 L32 32 C32 27 36 24 36 19 C36 13 32 7 24 7 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="18" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 18 L24 26 M20 22 L28 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
};

// Fallback icon for any sensor name not in the map above
const SENSOR_FALLBACK_ICON: ReactElement = (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

export default async function DevicesPage() {
  const data = await getData();
  const {
    hero,
    advantagesSection,
    specsSection,
    deviceRangeSection,
    finalCta,
  } = data;

  const heroOverrideStyle = imageOverrideStyleFromStrings(
    hero.imageRoundedOverride,
    hero.imageShadowOverride
  );
  const heroObjectPosition = imageObjectPosition(hero.image);
  const heroFit = hero.imageObjectFit ?? "contain";

  // Pair the first three advantages with the three showcase product photos.
  // Falls back to PRODUCT_SHOWCASE_IMAGES order if there are fewer advantages.
  const showcaseTiles = PRODUCT_SHOWCASE_IMAGES.map((img, i) => ({
    ...img,
    advantage: advantagesSection.advantages[i],
  })).filter((t) => t.advantage);

  return (
    <div>
      {/* ── HERO — Apple-style centered stack ───────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 lg:pt-28 pb-12 lg:pb-16">
        <div
          className="absolute inset-x-0 top-0 h-[520px] pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 25%, rgba(255,0,178,0.10) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <Badge variant="pink" className="mb-6 mx-auto">{hero.eyebrow}</Badge>
            <h1 className="text-display text-[#111827] mb-5 leading-none">
              {hero.titleLines.map((line, i) => (
                <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-body-lg text-[#4b5563] max-w-2xl mx-auto mb-6 leading-relaxed">
              {hero.body}
            </p>
            <p className="text-sm text-[#64748b] max-w-xl mx-auto mb-10">{hero.subBody}</p>
            <div className="flex flex-wrap gap-4 justify-center mb-16 lg:mb-20">
              <Link
                href={hero.primaryCta.href}
                className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.4)] hover:shadow-[0_8px_40px_rgba(255,0,178,0.55)] transition-all active:scale-[0.98]"
              >
                {hero.primaryCta.label}
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.15)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.04)] transition-all"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Massive centered product image */}
        <Reveal delay={0.15}>
          <div className="container-site relative z-10">
            <div className="relative mx-auto w-full max-w-5xl">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] opacity-30 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(255,0,178,0.35), transparent 65%)" }}
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc(hero.image)}
                alt={imageAlt(hero.image, hero.imageAlt)}
                className="cms-image relative z-10 w-full h-auto"
                style={{
                  objectFit: heroFit,
                  objectPosition: heroObjectPosition,
                  maxHeight: hero.imageMaxHeightPx ? `${hero.imageMaxHeightPx}px` : undefined,
                  ...heroOverrideStyle,
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <div className="section-divider" />

      {/* ── PRODUCT SHOWCASE — alternating oversized image tiles ────────── */}
      <section className="py-20 lg:py-32 bg-[#f8f9fb]">
        <div className="container-site flex flex-col gap-24 lg:gap-40">
          {showcaseTiles.map((tile, i) => {
            const imageOnRight = tile.align === "right";
            return (
              <Reveal key={tile.src} delay={0.05}>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  <div className={`lg:col-span-5 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.22em] mb-4 block"
                      style={{ color: tile.advantage.color }}
                    >
                      // {String(i + 1).padStart(2, "0")} · {tile.advantage.title}
                    </span>
                    <h2 className="text-h2 text-[#111827] mb-5 leading-tight">
                      {tile.advantage.title}.
                    </h2>
                    <p className="text-body-lg text-[#4b5563] leading-relaxed">
                      {tile.advantage.body}
                    </p>
                  </div>
                  <div className={`lg:col-span-7 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[55%] opacity-25 blur-3xl pointer-events-none"
                        style={{ background: `radial-gradient(ellipse, ${tile.advantage.color}, transparent 70%)` }}
                        aria-hidden="true"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tile.src}
                        alt={tile.alt}
                        className="cms-image relative z-10 w-full h-auto"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SPECS + SENSOR LIBRARY (combined section) ───────────────────── */}
      <section id="specs" className="py-20 lg:py-32 bg-white">
        <div className="container-site">
          {/* TOP — specs (image left, table + CTAs right) */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <Reveal direction="left">
              <div className="sticky top-28">
                <div
                  className="cms-image relative overflow-hidden"
                  style={imageOverrideStyleFromStrings(
                    specsSection.imageRoundedOverride,
                    specsSection.imageShadowOverride
                  )}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-15 blur-3xl pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <Image
                    src={imageSrc(specsSection.image, { width: 1024, height: 576 })}
                    alt={imageAlt(specsSection.image, specsSection.imageAlt)}
                    width={1024}
                    height={576}
                    className="w-full object-contain relative z-10"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <span className="section-number block mb-4">{specsSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">
                  {specsSection.eyebrow}
                </p>
                <h2 className="text-h2 text-[#111827] mb-8">
                  {specsSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < specsSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <div className="border-t border-[rgba(0,0,0,0.08)]">
                  {specsSection.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-8 py-4 border-b border-[rgba(0,0,0,0.06)]">
                      <span className="text-sm text-[#64748b] flex-shrink-0 w-36">{s.label}</span>
                      <span className="text-sm text-[#1f2937] font-medium text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex gap-4">
                  <Link
                    href={specsSection.primaryCta.href}
                    className="px-6 py-3 rounded-full bg-[#FF00B2] text-white text-sm font-semibold hover:bg-[#e000a0] shadow-[0_4px_24px_rgba(255,0,178,0.3)] transition-all"
                  >
                    {specsSection.primaryCta.label}
                  </Link>
                  <Link
                    href={specsSection.secondaryCta.href}
                    className="px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] text-sm font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all"
                  >
                    {specsSection.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* BOTTOM — Sensor library: placeholder slots */}
          <div id="sensor-library" className="mt-24 lg:mt-40">
            <Reveal>
              <div className="text-center mb-12 lg:mb-16">
                <span className="section-number block mb-3">{deviceRangeSection.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-4">
                  {deviceRangeSection.eyebrow}
                </p>
                <h2 className="text-h2 text-[#111827] max-w-2xl mx-auto leading-tight">
                  {deviceRangeSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < deviceRangeSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#64748b] mt-5 max-w-2xl mx-auto leading-relaxed">
                  {deviceRangeSection.body}
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {deviceRangeSection.devices.map((device, i) => {
                const icon = SENSOR_ICON_BY_NAME[device.name] ?? SENSOR_FALLBACK_ICON;
                return (
                  <Reveal key={device.name} delay={i * 0.04}>
                    <div className="group rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white overflow-hidden hover:border-[rgba(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
                      {/* Placeholder product photo slot */}
                      <div
                        className="relative aspect-square flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)`,
                          color: device.badgeColor,
                        }}
                      >
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-15 blur-2xl pointer-events-none"
                          style={{ background: `radial-gradient(ellipse, ${device.badgeColor}, transparent 70%)` }}
                          aria-hidden="true"
                        />
                        <div className="relative z-10 opacity-70 group-hover:opacity-90 transition-opacity">
                          {icon}
                        </div>
                        <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-[#9ca3af]">
                          // photo soon
                        </span>
                      </div>
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <span
                          className="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                          style={{
                            color: device.badgeColor,
                            borderColor: `${device.badgeColor}40`,
                            background: `${device.badgeColor}10`,
                          }}
                        >
                          {device.badge}
                        </span>
                        <h3 className="text-base font-semibold text-[#111827] leading-tight">{device.name}</h3>
                        <p className="text-xs text-[#64748b] leading-relaxed flex-1">{device.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <p className="text-xs text-[#9ca3af] mt-10 text-center italic">
                Product photography in production — placeholder slots above will be replaced as each sensor ships.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-12"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }}
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-h1 text-[#111827] mb-5">
              {finalCta.titleLines.map((line, i) => (
                <span key={i}>{line}{i < finalCta.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-body text-[#64748b] mb-12 leading-relaxed">{finalCta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={finalCta.primaryCta.href}
                className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.35)] transition-all"
              >
                {finalCta.primaryCta.label}
              </Link>
              <Link
                href={finalCta.secondaryCta.href}
                className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.12)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.25)] transition-all"
              >
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
