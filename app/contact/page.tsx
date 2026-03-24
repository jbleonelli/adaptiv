"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const conversationPaths = [
  {
    title: "See the Smart Display",
    desc: "A 30-minute demonstration of the Smart Display and Merlin in a real building environment. Bring your facilities team.",
    icon: "📱",
    value: "Smart Display Demo",
  },
  {
    title: "Full Platform Demo",
    desc: "A tailored walkthrough of the complete Adaptiv stack for your specific use case — building intelligence, industrial, or both.",
    icon: "🖥",
    value: "Full Platform Demo — Building Intelligence",
  },
  {
    title: "Talk to a Specialist",
    desc: "Technical questions, custom requirements, partnership or investment discussions — speak directly with an Adaptiv specialist.",
    icon: "💬",
    value: "Technical Questions",
  },
];

const interestOptions = [
  "Smart Display Demo",
  "Full Platform Demo — Building Intelligence",
  "Full Platform Demo — Industrial",
  "Technical Questions",
  "Partnership",
  "Investment",
  "Press & Media",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", jobTitle: "",
    email: "", phone: "", country: "", interest: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setLoading(false);
    setSubmitted(true);
  };

  const field = (name: keyof typeof form, label: string, required = false, type = "text") => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#111827]">{label}{required && " *"}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: "" }); }}
        className={`px-4 py-3 rounded-xl bg-[#f8f9fb] border text-[#111827] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#1A6FD4] transition-colors ${errors[name] ? "border-red-400" : "border-[rgba(0,0,0,0.1)]"}`}
      />
      {errors[name] && <span className="text-xs text-red-500">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="container-site relative z-10 max-w-2xl">
          <h1 className="text-display text-[#111827] mb-5">Introduce Merlin to Your Building.</h1>
          <p className="text-body-lg text-[#4b5563]">
            Whether you&apos;re a facilities manager, a CTO, or a head of operations — our team will show you exactly how Merlin and the Smart Display work in your environment.
          </p>
        </div>
      </section>

      {/* Conversation paths */}
      <section className="py-16 bg-white border-b border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {conversationPaths.map((p) => (
                <Card key={p.title} className="p-6 flex flex-col gap-4">
                  <span className="text-3xl">{p.icon}</span>
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
          {submitted ? (
            <Reveal>
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(10,124,89,0.1)] flex items-center justify-center text-3xl mx-auto mb-5">✅</div>
                <h2 className="text-h2 text-[#111827] mb-4">We'll be in touch shortly.</h2>
                <p className="text-body text-[#4b5563] mb-8">Thank you for reaching out. One of our team will contact you within one business day.</p>
                <Button asChild><Link href="/">Back to home</Link></Button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  {field("firstName", "First Name", true)}
                  {field("lastName", "Last Name", true)}
                </div>
                {field("company", "Company Name", true)}
                {field("jobTitle", "Job Title")}
                {field("email", "Email Address", true, "email")}
                {field("phone", "Phone Number")}
                {field("country", "Country / Region")}

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#111827]">I am interested in...</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] text-[#111827] text-sm focus:outline-none focus:border-[#1A6FD4] transition-colors"
                  >
                    <option value="">Select an option</option>
                    {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#111827]">Tell us about your building or operation</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Helps us personalise the demo for your specific context."
                    className="px-4 py-3 rounded-xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] text-[#111827] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#1A6FD4] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
                  {loading ? "Sending..." : "Request a Demo"}
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      {/* Contact details */}
      <section className="py-12 bg-white border-t border-[rgba(0,0,0,0.07)]">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-wrap gap-8 justify-center text-sm text-[#4b5563]">
              <a href="mailto:contact@adaptiv.company" className="hover:text-[#FF00B2] transition-colors">contact@adaptiv.company</a>
              <a href="https://linkedin.com/company/adaptiv-systems" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF00B2] transition-colors">LinkedIn</a>
              <a href="https://adaptiv.company" className="hover:text-[#FF00B2] transition-colors">www.adaptiv.company</a>
              <span>United States (HQ) · Europe</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
