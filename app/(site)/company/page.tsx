import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { companyDefaults, type CompanyPageData } from "@/lib/content/company";

const companyPageQuery = groq`*[_type == "companyPage"][0]`;

async function getData(): Promise<CompanyPageData> {
  const remote = await sanityFetch<CompanyPageData>({
    query: companyPageQuery,
    tags: ["companyPage"],
  });
  return remote ?? companyDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

const STUDIO_ICONS: Record<string, ReactElement> = {
  environment: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="22" width="36" height="20" rx="1.5" stroke="#FF00B2" strokeWidth="1.5" />
      <path d="M6 22 L6 14 L14 22 L14 14 L22 22 L22 14 L30 22" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="33" y="14" width="5" height="8" rx="0.8" stroke="#FF00B2" strokeWidth="1.3" />
      <path d="M35.5 13 Q34 10 35.5 8 Q37 6 35.5 4" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <rect x="21" y="32" width="6" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3" />
      <rect x="9" y="27" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2" />
      <rect x="32" y="27" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="16" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5" />
      <path d="M6 38 C6 30 26 30 26 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="14" r="5" stroke="#FF00B2" strokeWidth="1.5" opacity="0.55" />
      <path d="M20 38 C20 30 42 30 42 38" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M20 10 Q23 6 26 10" stroke="#FF00B2" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  inhouse: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="8" y="20" width="32" height="22" rx="1.5" stroke="#FF00B2" strokeWidth="1.5" />
      <path d="M4 20 L24 6 L44 20" stroke="#FF00B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="32" width="8" height="10" rx="0.8" stroke="#FF00B2" strokeWidth="1.3" />
      <rect x="11" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2" />
      <rect x="30" y="25" width="7" height="5" rx="0.7" stroke="#FF00B2" strokeWidth="1.2" />
      <path d="M22 15 L24 12 L26 15" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="36" cy="10" r="4" stroke="#FF00B2" strokeWidth="1.1" opacity="0.6" />
      <circle cx="36" cy="10" r="1.3" fill="#FF00B2" opacity="0.4" />
      <path d="M36 5.5 L36 4.5 M36 14.5 L36 15.5 M40.5 10 L41.5 10 M31.5 10 L30.5 10" stroke="#FF00B2" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  aesthetic: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 8 L26.5 21.5 L40 24 L26.5 26.5 L24 40 L21.5 26.5 L8 24 L21.5 21.5 Z" stroke="#FF00B2" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M38 10 L38.8 13 L42 13.8 L38.8 14.6 L38 17.6 L37.2 14.6 L34 13.8 L37.2 13 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.6" />
      <path d="M10 33 L10.6 35.4 L13 36 L10.6 36.6 L10 39 L9.4 36.6 L7 36 L9.4 35.4 Z" stroke="#FF00B2" strokeWidth="1" strokeLinejoin="round" opacity="0.45" />
      <circle cx="24" cy="24" r="2" fill="#FF00B2" opacity="0.25" />
    </svg>
  ),
};

const VALUE_ICONS: Record<string, (color: string) => ReactElement> = {
  physical: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="9" ry="16" stroke={c} strokeWidth="1.2" opacity="0.5" />
      <path d="M8 24 Q16 20 24 24 Q32 28 40 24" stroke={c} strokeWidth="1.1" opacity="0.5" />
      <path d="M10 17 Q17 14 24 17 Q31 20 38 17" stroke={c} strokeWidth="1" opacity="0.35" />
      <path d="M10 31 Q17 28 24 31 Q31 34 38 31" stroke={c} strokeWidth="1" opacity="0.35" />
      <circle cx="24" cy="24" r="3" fill={c} opacity="0.35" />
      <circle cx="24" cy="24" r="5.5" stroke={c} strokeWidth="1" opacity="0.2" />
    </svg>
  ),
  security: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 6 L38 11 L38 24 C38 33 24 42 24 42 C24 42 10 33 10 24 L10 11 Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="18" y="24" width="12" height="9" rx="1.5" stroke={c} strokeWidth="1.3" />
      <path d="M19.5 24 L19.5 20 A4.5 4.5 0 0 1 28.5 20 L28.5 24" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="24" cy="28" r="1.5" fill={c} opacity="0.5" />
      <path d="M24 29.5 L24 31.5" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  local: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 6 C17 6 12 11.5 12 18 C12 27 24 42 24 42 C24 42 36 27 36 18 C36 11.5 31 6 24 6 Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="5" stroke={c} strokeWidth="1.3" />
      <circle cx="24" cy="18" r="1.8" fill={c} opacity="0.4" />
      <path d="M10 43 Q24 40 38 43" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
    </svg>
  ),
  human: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="14" r="7" stroke={c} strokeWidth="1.5" />
      <path d="M10 42 C10 32 38 32 38 42" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 36 C21 33.5 24 32 24 34 C24 32 27 33.5 27 36 C27 38.5 24 41 24 41 C24 41 21 38.5 21 36 Z" stroke={c} strokeWidth="1.1" strokeLinejoin="round" opacity="0.6" />
    </svg>
  ),
  stack: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="4" y="19" width="10" height="10" rx="2.5" stroke={c} strokeWidth="1.5" />
      <rect x="19" y="19" width="10" height="10" rx="2.5" stroke={c} strokeWidth="1.5" />
      <rect x="34" y="19" width="10" height="10" rx="2.5" stroke={c} strokeWidth="1.5" />
      <path d="M14 24 L19 24" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 24 L34 24" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 19 L8 13 L40 13 L40 19" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M8 29 L8 35 L40 35 L40 29" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  ),
  responsible: (c) => (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 12 L24 36" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 14 L36 14" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 36 L30 36" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 36 L21 40 M27 36 L27 40" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M18 40 L30 40" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <path d="M12 14 L9 22 L15 22 Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 22 Q12 24 15 22" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M36 14 L33 23 L39 23 Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M33 23 Q36 25 39 23" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="12" r="1.5" fill={c} opacity="0.5" />
    </svg>
  ),
};

export default async function CompanyPage() {
  const data = await getData();
  const { hero, storySection, teamSection, investorsSection } = data;

  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-24 pb-0 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-60"
          style={{ background: "radial-gradient(ellipse, rgba(255,0,178,0.12), transparent 65%)" }}
          aria-hidden="true" />
        <div className="container-site relative z-10 py-20 max-w-3xl">
          <Badge variant="dim" className="mb-6">{hero.eyebrow}</Badge>
          <h1 className="text-display text-[#111827] mb-5 leading-none">
            {hero.titleLines.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
            <span className="gradient-text-pink">{hero.gradientLine}</span>
          </h1>
          <p className="text-body-lg text-[#4b5563] leading-relaxed">{hero.body}</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* OUR STORY */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-widest mb-5">{storySection.eyebrow}</p>
                {storySection.paragraphs.map((para, i) => (
                  <p key={i} className="text-body text-[#4b5563] mb-5 leading-relaxed">{para}</p>
                ))}
                <p className="text-body font-semibold text-[#111827]">{storySection.closingLine}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {storySection.stats.map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.07)] flex flex-col gap-2">
                    <div className="text-2xl font-bold text-[#FF00B2]">{stat.value}</div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TEAM */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-16 flex-col lg:flex-row mb-16">
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="section-number block mb-4">{teamSection.sectionLabel}</span>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em]">{teamSection.eyebrow}</p>
              </div>
              <div>
                <h2 className="text-h2 text-[#111827]">
                  {teamSection.titleLines.map((line, i) => (
                    <span key={i}>{line}{i < teamSection.titleLines.length - 1 && <br />}</span>
                  ))}
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamSection.members.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className={`p-6 flex flex-col gap-4 h-full rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 ${member.isFounder ? "border-[rgba(255,0,178,0.2)] shadow-[0_4px_24px_rgba(255,0,178,0.12)]" : "border-[rgba(0,0,0,0.07)] hover:border-[rgba(0,0,0,0.12)]"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)` }}>
                      {member.initials}
                    </div>
                    {member.isFounder && (
                      <span className="text-[10px] font-semibold text-[#FF00B2] uppercase tracking-wider border border-[rgba(255,0,178,0.25)] bg-[rgba(255,0,178,0.08)] px-2 py-0.5 rounded-full">
                        Founder
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-h4 text-[#111827] leading-tight">{member.name}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: member.color }}>{member.role}</p>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed flex-1">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />



      {/* INVESTORS */}
      <section className="py-24 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <Badge variant="dim" className="mb-5">{investorsSection.badge}</Badge>
            <h2 className="text-h2 text-[#111827] mb-6">
              {investorsSection.titleLines.map((line, i) => (
                <span key={i}>{line}{i < investorsSection.titleLines.length - 1 && <br />}</span>
              ))}
            </h2>
            {investorsSection.paragraphs.map((para, i) => (
              <p key={i} className="text-body text-[#4b5563] mb-5 leading-relaxed">{para}</p>
            ))}
            <p className="text-body font-semibold text-[#111827] mb-8">{investorsSection.closingLine}</p>
            <Button asChild>
              <Link href={investorsSection.cta.href}>{investorsSection.cta.label}</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
