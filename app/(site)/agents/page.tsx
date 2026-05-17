import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { agentsDefaults, type AgentsPageData } from "@/lib/content/agents";

// Code-only for v1 — no Sanity schema yet. Add later if non-engineers need
// to edit the catalog from Studio.
async function getData(): Promise<AgentsPageData> {
  return agentsDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function AgentsPage() {
  const data = await getData();
  const {
    hero,
    whyFleet,
    shape,
    howAgentsTalk,
    catalog,
    byVertical,
    growsWithDevices,
    whatItIsNot,
    inOneLine,
    finalCta,
  } = data;

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div
          className="absolute inset-x-0 top-0 h-[520px] pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 25%, rgba(255,0,178,0.10) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <Badge variant="pink" className="mb-6 mx-auto">{hero.eyebrow}</Badge>
            <h1 className="text-display text-[#111827] mb-6 leading-none">
              {hero.titleLines.map((line, i) => (
                <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-body-lg text-[#4b5563] max-w-2xl mx-auto mb-6 leading-relaxed">
              {hero.body}
            </p>
            <p className="text-sm text-[#64748b] max-w-xl mx-auto mb-10">{hero.subBody}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={hero.primaryCta.href}
                className="px-8 py-4 rounded-full bg-[#FF00B2] text-white font-semibold hover:bg-[#e000a0] shadow-[0_4px_32px_rgba(255,0,178,0.4)] hover:shadow-[0_8px_40px_rgba(255,0,178,0.55)] transition-all active:scale-[0.98]"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="px-8 py-4 rounded-full border border-[rgba(0,0,0,0.15)] text-[#4b5563] font-medium hover:text-[#111827] hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.04)] transition-all"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 01 · WHY A FLEET ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{whyFleet.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{whyFleet.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h1 text-[#111827] mb-5 leading-tight">
                  {whyFleet.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < whyFleet.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body-lg text-[#4b5563] leading-relaxed max-w-2xl">{whyFleet.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {whyFleet.contrasts.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] h-full">
                  <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-[0.18em] mb-3">{c.title}</p>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-body text-[#4b5563] leading-relaxed max-w-3xl">
              {whyFleet.closingLine}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 02 · THE SHAPE OF EVERY AGENT ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-14">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{shape.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{shape.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h1 text-[#111827] mb-5 leading-tight">
                  {shape.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < shape.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body-lg text-[#4b5563] leading-relaxed max-w-2xl">{shape.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {shape.attributes.map((attr, i) => (
              <Reveal key={attr.name} delay={i * 0.04}>
                <div className="p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-white h-full flex flex-col gap-3">
                  <span className="text-xs font-mono font-semibold text-[#FF00B2] uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-[#111827] leading-tight">{attr.name}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed flex-1">{attr.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-body font-semibold text-[#111827] text-center mt-12 max-w-2xl mx-auto">
              {shape.closingLine}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 03 · HOW AGENTS TALK TO HUMANS ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="section-number block mb-4">{howAgentsTalk.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-5">{howAgentsTalk.eyebrow}</p>
                <h2 className="text-h1 text-[#111827] mb-6 leading-tight">
                  {howAgentsTalk.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < howAgentsTalk.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <div className="flex flex-col gap-4">
                  {howAgentsTalk.paragraphs.map((p, i) => (
                    <p key={i} className={i === 0 ? "text-body-lg text-[#4b5563] leading-relaxed" : "text-body text-[#4b5563] leading-relaxed"}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} direction="right">
              {/* Stylised "ask" message mockup */}
              <div className="relative">
                <div
                  className="absolute -top-8 -right-8 w-72 h-72 opacity-30 blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(255,0,178,0.35), transparent 70%)" }}
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(15,32,68,0.10)]">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF00B2] animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
                        Merlin · Cleaning agent
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ef4444] border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.06)] px-2 py-0.5 rounded-full">
                      High priority
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#111827] leading-snug mb-2">
                    Lobby restroom hygiene SLA at risk
                  </p>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                    VOC reading climbed past 800 ppb (12 min sustained). Occupancy peak of 142 in the last hour. NFC tap from cleaning crew overdue by 38 min.
                  </p>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-5">
                    <span className="text-[#111827] font-semibold">Proposed action:</span> Dispatch nearest crew member (Maria, 4 min away). Confidence 87 %.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-[#FF00B2] text-white text-xs font-semibold hover:bg-[#e000a0] transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.1)] text-[#4b5563] text-xs font-semibold hover:bg-[rgba(0,0,0,0.04)] transition-colors"
                    >
                      Hold
                    </button>
                    <button
                      type="button"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.1)] text-[#64748b] text-xs font-semibold hover:bg-[rgba(0,0,0,0.04)] transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                  <p className="text-[10px] text-[#94a3b8] mt-3 font-mono">
                    reasoning trail · #ask-2049
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 04 · THE AGENT CATALOG ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-14">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{catalog.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{catalog.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h1 text-[#111827] mb-5 leading-tight">
                  {catalog.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < catalog.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body-lg text-[#4b5563] leading-relaxed max-w-2xl">{catalog.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {catalog.agents.map((agent, i) => {
              const isComingOnline = agent.status === "coming-online";
              return (
                <Reveal key={agent.num} delay={(i % 6) * 0.05}>
                  <div
                    className={`p-7 rounded-2xl border bg-white h-full flex flex-col gap-4 transition-all ${
                      isComingOnline ? "opacity-75 border-[rgba(0,0,0,0.06)]" : "border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.14)] hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Header — number + status */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold tabular-nums text-white flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${agent.color}, ${agent.color}cc)` }}
                        >
                          {String(agent.num).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-h4 text-[#111827] leading-tight">{agent.name}</h3>
                          {agent.scope && (
                            <p className="text-[11px] text-[#64748b] mt-0.5 italic">{agent.scope}</p>
                          )}
                        </div>
                      </div>
                      {isComingOnline ? (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748b] border border-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.03)] px-2 py-0.5 rounded-full flex-shrink-0">
                          Coming online
                        </span>
                      ) : (
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 border"
                          style={{
                            color: agent.color,
                            borderColor: `${agent.color}40`,
                            background: `${agent.color}10`,
                          }}
                        >
                          Active
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="text-sm text-[#4b5563] leading-relaxed flex-1 flex flex-col gap-3">
                      {agent.body.split("\n\n").map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>

                    {/* Metadata */}
                    <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9ca3af] w-16 flex-shrink-0 pt-0.5">
                          Reads
                        </span>
                        <span className="text-xs text-[#4b5563] leading-snug">{agent.reads}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9ca3af] w-16 flex-shrink-0 pt-0.5">
                          Lives in
                        </span>
                        <span className="text-xs text-[#4b5563] leading-snug">{agent.livesIn}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 05 · BY VERTICAL ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{byVertical.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{byVertical.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827] leading-tight">
                  {byVertical.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < byVertical.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-[rgba(0,0,0,0.08)]">
            {byVertical.rows.map((row, i) => (
              <Reveal key={row.vertical} delay={i * 0.05}>
                <div className="grid lg:grid-cols-12 gap-6 py-6 border-b border-[rgba(0,0,0,0.06)] items-start">
                  <p className="lg:col-span-4 text-sm font-semibold text-[#111827] leading-snug">{row.vertical}</p>
                  <div className="lg:col-span-8 flex flex-wrap gap-2">
                    {row.agents.map((agent) => (
                      <span
                        key={agent}
                        className="px-3 py-1 rounded-full text-xs font-medium text-[#4b5563] border border-[rgba(0,0,0,0.1)] bg-[#f8f9fb] hover:bg-white hover:border-[#FF00B2]/30 hover:text-[#111827] transition-colors"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-body text-[#4b5563] leading-relaxed mt-10 max-w-3xl">
              {byVertical.closingNote}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 06 · GROWS WITH DEVICE LIBRARY ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{growsWithDevices.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{growsWithDevices.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827] mb-5 leading-tight">
                  {growsWithDevices.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < growsWithDevices.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body-lg text-[#4b5563] leading-relaxed max-w-2xl">{growsWithDevices.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {growsWithDevices.pairings.map((pair, i) => (
              <Reveal key={pair.device} delay={i * 0.04}>
                <div className="grid sm:grid-cols-12 gap-3 sm:gap-6 py-4 border-b border-[rgba(0,0,0,0.06)]">
                  <p className="sm:col-span-5 text-sm font-semibold text-[#111827] leading-snug">
                    {pair.device}
                  </p>
                  <div className="sm:col-span-1 hidden sm:flex items-center text-[#FF00B2] text-lg">
                    →
                  </div>
                  <p className="sm:col-span-6 text-sm text-[#4b5563] leading-relaxed">
                    brought {pair.brought}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-body text-[#4b5563] leading-relaxed mt-10 max-w-3xl italic">
              {growsWithDevices.closingLine}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 07 · WHAT IT IS NOT ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{whatItIsNot.sectionNumber}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{whatItIsNot.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827] mb-5 leading-tight">
                  {whatItIsNot.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < whatItIsNot.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-body text-[#4b5563] leading-relaxed max-w-2xl">{whatItIsNot.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {whatItIsNot.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="p-7 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B2]" />
                    <h3 className="text-base font-semibold text-[#111827] leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── IN ONE LINE ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #FF00B2, transparent 65%)" }}
          />
        </div>
        <div className="container-site relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-number mb-6 uppercase tracking-[0.2em]">{inOneLine.eyebrow}</p>
              <p className="text-h3 text-[#111827] leading-snug mb-6">
                {inOneLine.body}
              </p>
              <p className="text-body text-[#64748b] leading-relaxed italic">
                {inOneLine.closingNote}
              </p>
            </div>
          </Reveal>
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
