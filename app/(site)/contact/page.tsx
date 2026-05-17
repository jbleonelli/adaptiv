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
  const { hero, conversationPaths, form, successPanel, contactDetails } = data;

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

      {/* Contact details */}
      <section className="py-12 bg-white">
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
