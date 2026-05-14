"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { ContactPageData } from "@/lib/content/contact";

type Props = {
  form: ContactPageData["form"];
  successPanel: ContactPageData["successPanel"];
};

export function ContactForm({ form: formCopy, successPanel }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: "",
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
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSubmitted(true);
  };

  const field = (name: keyof typeof form, label: string, required = false, type = "text") => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#111827]">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => {
          setForm({ ...form, [name]: e.target.value });
          setErrors({ ...errors, [name]: "" });
        }}
        className={`px-4 py-3 rounded-xl bg-[#f8f9fb] border text-[#111827] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#1A6FD4] transition-colors ${
          errors[name] ? "border-red-400" : "border-[rgba(0,0,0,0.1)]"
        }`}
      />
      {errors[name] && <span className="text-xs text-red-500">{errors[name]}</span>}
    </div>
  );

  if (submitted) {
    return (
      <Reveal>
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-[rgba(10,124,89,0.1)] flex items-center justify-center text-3xl mx-auto mb-5">
            ✅
          </div>
          <h2 className="text-h2 text-[#111827] mb-4">{successPanel.title}</h2>
          <p className="text-body text-[#4b5563] mb-8">{successPanel.body}</p>
          <Button asChild>
            <Link href={successPanel.backHref}>{successPanel.backLabel}</Link>
          </Button>
        </div>
      </Reveal>
    );
  }

  return (
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
          <label className="text-sm font-medium text-[#111827]">{formCopy.interestLabel}</label>
          <select
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className="px-4 py-3 rounded-xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] text-[#111827] text-sm focus:outline-none focus:border-[#1A6FD4] transition-colors"
          >
            <option value="">Select an option</option>
            {formCopy.interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111827]">{formCopy.messageLabel}</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={formCopy.messagePlaceholder}
            className="px-4 py-3 rounded-xl bg-[#f8f9fb] border border-[rgba(0,0,0,0.1)] text-[#111827] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#1A6FD4] transition-colors resize-none"
          />
        </div>

        <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
          {loading ? formCopy.submitLoadingLabel : formCopy.submitLabel}
        </Button>
      </form>
    </Reveal>
  );
}
