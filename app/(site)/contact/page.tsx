import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { contactDefaults, type ContactPageData } from "@/lib/content/contact";
import { ContactForm } from "./ContactForm";

const contactPageQuery = groq`*[_type == "contactPage"][0]`;

async function getData(): Promise<ContactPageData> {
  const remote = await sanityFetch<ContactPageData>({
    query: contactPageQuery,
    tags: ["contactPage"],
  });
  return remote ?? contactDefaults;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function ContactPage() {
  const data = await getData();
  const { hero, conversationPaths, form, successPanel, contactDetails, offices, primaryEmail } = data;

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="container-site relative z-10 max-w-2xl">
          <h1 className="text-display text-[#111827] mb-5">{hero.title}</h1>
          <p className="text-body-lg text-[#4b5563]">{hero.body}</p>
        </div>
      </section>

      {/* Conversation paths */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {conversationPaths.map((p) => (
                <Card key={p.title} className="p-6 flex flex-col gap-4">
                  <h3 className="text-h4 text-[#111827]">{p.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed flex-1">{p.desc}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="container-site max-w-2xl">
          <ContactForm form={form} successPanel={successPanel} />
        </div>
      </section>

      {/* Offices */}
      {offices && offices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-site">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-4">
                  // OFFICES
                </p>
                <h2 className="text-h2 text-[#111827] mb-3 leading-tight">
                  Three offices.<br />Two continents.
                </h2>
                {primaryEmail && (
                  <p className="text-body text-[#4b5563]">
                    Or reach the team at{" "}
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="text-[#FF00B2] font-medium hover:underline"
                    >
                      {primaryEmail}
                    </a>
                    .
                  </p>
                )}
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {offices.map((office, i) => (
                <Reveal key={office.city} delay={i * 0.06}>
                  <div className="p-6 rounded-2xl border border-[rgba(0,0,0,0.07)] bg-[#f8f9fb] h-full hover:border-[rgba(0,0,0,0.14)] hover:bg-white hover:shadow-[0_4px_24px_rgba(15,32,68,0.06)] transition-all">
                    <div className="flex items-baseline gap-2 mb-3">
                      <h3 className="text-h4 text-[#111827] leading-tight">{office.city}</h3>
                      {office.isHq && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF00B2] border border-[rgba(255,0,178,0.25)] bg-[rgba(255,0,178,0.05)] px-2 py-0.5 rounded-full">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-4">
                      {office.country}
                    </p>
                    <address className="not-italic text-sm text-[#4b5563] leading-relaxed">
                      {office.addressLines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </address>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact details */}
      <section className="py-12 bg-[#f8f9fb]">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-wrap gap-8 justify-center text-sm text-[#4b5563]">
              {contactDetails.map((item) => {
                if (item.href) {
                  const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="hover:text-[#FF00B2] transition-colors"
                    >
                      {item.label}
                    </a>
                  );
                }
                return <span key={item.label}>{item.label}</span>;
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
