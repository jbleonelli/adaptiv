import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { roiDefaults, type ROIPageData } from "@/lib/content/roi";

const roiPageQuery = groq`*[_type == "roiPage"][0]`;

async function getData(): Promise<ROIPageData> {
  const remote = await sanityFetch<ROIPageData>({
    query: roiPageQuery,
    tags: ["roiPage"],
  });
  return remote ?? roiDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

const SAVINGS_ICONS: Record<string, ReactElement> = {
  energy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 6L14 26h8l-2 16 12-20h-8l2-16z" fill="#FF00B2" fillOpacity="0.08" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M18 30l-6 6a3 3 0 004.24 4.24L22 34" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 18l6-6a3 3 0 00-4.24-4.24L26 14" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="16" y="16" width="16" height="16" rx="3" stroke="#FF00B2" strokeWidth="1.5" transform="rotate(45 24 24)" />
      <rect x="16" y="16" width="16" height="16" rx="3" fill="#FF00B2" fillOpacity="0.08" transform="rotate(45 24 24)" />
    </svg>
  ),
  operations: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="14" r="6" stroke="#FF00B2" strokeWidth="1.5" />
      <circle cx="24" cy="14" r="6" fill="#FF00B2" fillOpacity="0.08" />
      <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke="#FF00B2" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M24 12v12l8 4" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2.5" fill="#FF00B2" />
    </svg>
  ),
};

export default async function ROIPage() {
  const data = await getData();
  const { hero, headlineStats, savingsSection, mathSection, finalCta } = data;

  return (
    <div>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          aria-hidden="true" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 70% 30%, rgba(255,0,178,0.06) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="pink" className="mb-6">{hero.eyebrow}</Badge>
              <h1 className="text-display text-[#111827] mb-6">
                {hero.titleLines.map((line, i) => (
                  <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
                ))}
              </h1>
              <p className="text-body-lg text-[#4b5563] mb-10 max-w-2xl leading-relaxed">{hero.body}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild><Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link></Button>
                <Button variant="secondary" size="lg" asChild><Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link></Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HEADLINE NUMBERS */}
      <section className="py-16 bg-[#f8f9fb] border-y border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {headlineStats.map((item) => (
              <Reveal key={item.label}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#FF00B2] mb-2">{item.stat}</div>
                  <p className="text-sm text-[#4b5563]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE THE SAVINGS COME FROM */}
      <section id="savings" className="py-24 lg:py-28 bg-white">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{savingsSection.eyebrow}</p>
            <h2 className="text-h1 text-[#111827] mb-16 max-w-2xl">{savingsSection.title}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsSection.areas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.05}>
                <Card className="p-7 h-full flex flex-col">
                  <div className="mb-4">{SAVINGS_ICONS[area.iconKey] ?? SAVINGS_ICONS.operations}</div>
                  <h3 className="text-h4 text-[#111827] mb-1">{area.title}</h3>
                  <span className="text-2xl font-bold text-[#FF00B2] mb-3">{area.stat}</span>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{area.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* THE MATH */}
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{mathSection.eyebrow}</p>
                <h2 className="text-h1 text-[#111827] mb-6">{mathSection.title}</h2>
                <div className="text-body text-[#4b5563] mb-8 leading-relaxed whitespace-pre-line">{mathSection.body}</div>
                <Button size="lg" asChild><Link href={mathSection.cta.href}>{mathSection.cta.label}</Link></Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-10" glow>
                <h3 className="text-h3 text-[#111827] mb-6">{mathSection.tableTitle}</h3>
                <div className="flex flex-col gap-5">
                  {mathSection.rows.map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-[#111827]">{row.label}</div>
                        <div className="text-xs text-[#64748b]">{row.sub}</div>
                      </div>
                      <div className="text-lg font-bold text-[#111827] whitespace-nowrap">{row.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[rgba(0,0,0,0.07)] flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4b5563]">{mathSection.summaryLabel}</span>
                  <span className="text-2xl font-bold text-[#FF00B2]">{mathSection.summaryValue}</span>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-h1 text-[#111827] mb-5">{finalCta.title}</h2>
            <p className="text-body text-[#4b5563] mb-10 max-w-lg mx-auto">{finalCta.body}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild><Link href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Link></Button>
              <Button variant="secondary" size="lg" asChild><Link href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
