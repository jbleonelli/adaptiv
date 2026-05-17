import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { statusPageQuery } from "@/sanity/queries";
import {
  statusDefaults,
  type ComponentStatusLevel,
  type StatusPageData,
} from "@/lib/content/status";

async function getData(): Promise<StatusPageData> {
  const remote = await sanityFetch<StatusPageData>({
    query: statusPageQuery,
    tags: ["statusPage"],
  });
  return remote ?? statusDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

type ToneClasses = {
  /** Pink-dot wrapper / pill border + tint */
  pill: string;
  /** Text color for the pill label */
  text: string;
  /** Solid dot bg */
  dot: string;
  /** Hero radial wash color */
  wash: string;
  /** Capitalised label rendered inside the pill */
  label: string;
};

const HERO_TONE: Record<StatusPageData["hero"]["statusTone"], ToneClasses> = {
  operational: {
    pill: "border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.06)]",
    text: "text-[#15803d]",
    dot: "bg-[#22c55e]",
    wash: "rgba(34,197,94,0.08)",
    label: "Operational",
  },
  degraded: {
    pill: "border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)]",
    text: "text-[#b45309]",
    dot: "bg-[#f59e0b]",
    wash: "rgba(245,158,11,0.12)",
    label: "Degraded",
  },
  incident: {
    pill: "border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.08)]",
    text: "text-[#b91c1c]",
    dot: "bg-[#ef4444]",
    wash: "rgba(239,68,68,0.12)",
    label: "Active incident",
  },
};

const COMPONENT_TONE: Record<ComponentStatusLevel, ToneClasses> = {
  operational: HERO_TONE.operational,
  degraded: HERO_TONE.degraded,
  down: HERO_TONE.incident,
};

export default async function StatusPage() {
  const { hero, componentSection, pastIncidentsSection, reportCta } = await getData();
  const heroTone = HERO_TONE[hero.statusTone] ?? HERO_TONE.operational;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-white pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[360px] pointer-events-none opacity-90"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 25%, ${heroTone.wash} 0%, transparent 65%)`,
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-3xl text-center">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-5">
            {hero.eyebrow}
          </p>

          <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border ${heroTone.pill} mb-8`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${heroTone.dot}`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${heroTone.dot}`} />
            </span>
            <span className={`text-sm font-semibold ${heroTone.text}`}>
              {hero.statusLabel}
            </span>
          </div>

          <h1 className="text-h1 text-[#111827] leading-tight mb-5">{hero.title}</h1>
          <p className="text-body-lg text-[#4b5563] leading-relaxed">{hero.body}</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Component status */}
      <section className="py-16 lg:py-20 bg-[#f8f9fb]">
        <div className="container-site max-w-3xl">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">
            {componentSection.heading}
          </p>
          <div className="border-t border-[rgba(0,0,0,0.07)]">
            {componentSection.components.map((component) => {
              const tone = COMPONENT_TONE[component.status] ?? COMPONENT_TONE.operational;
              return (
                <div
                  key={component.name}
                  className="grid sm:grid-cols-12 gap-3 py-5 border-b border-[rgba(0,0,0,0.06)] items-center"
                >
                  <p className="sm:col-span-5 text-sm font-semibold text-[#111827]">
                    {component.name}
                  </p>
                  <p className="sm:col-span-5 text-xs text-[#64748b] leading-relaxed">
                    {component.note}
                  </p>
                  <div className="sm:col-span-2 flex sm:justify-end">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tone.pill} text-[11px] font-semibold ${tone.text} uppercase tracking-wider`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
                      {tone.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Past incidents */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-site max-w-3xl">
          <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-6">
            {pastIncidentsSection.heading}
          </p>
          <div className="p-6 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f8f9fb] text-sm text-[#4b5563] leading-relaxed whitespace-pre-line">
            {pastIncidentsSection.note}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer CTA */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="container-site max-w-2xl text-center">
          <p className="text-sm text-[#64748b] mb-5">{reportCta.body}</p>
          <Link
            href={reportCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(0,0,0,0.12)] text-[#111827] text-sm font-medium hover:bg-[rgba(255,0,178,0.05)] hover:border-[rgba(255,0,178,0.3)] transition-all"
          >
            {reportCta.label}
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
