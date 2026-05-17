export type Office = {
  city: string;
  country: string;
  addressLines: string[];
  /** Optional: mark one office as HQ. */
  isHq?: boolean;
};

export type ContactPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    body: string;
  };
  conversationPaths: { title: string; desc: string; icon: string; value: string }[];
  form: {
    interestOptions: string[];
    interestLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submitLoadingLabel: string;
  };
  successPanel: {
    title: string;
    body: string;
    backLabel: string;
    backHref: string;
  };
  /** Office addresses, rendered as a 3-up grid above the link strip. */
  offices?: Office[];
  /** Primary inbound email rendered alongside the offices. */
  primaryEmail?: string;
  contactDetails: { label: string; href?: string }[];
};

export const contactDefaults: ContactPageData = {
  metaTitle: "Contact — Introduce Merlin to Your Building",
  metaDescription:
    "Talk to the Adaptiv team. Whether you're a facilities manager, a CTO, or a head of operations — we'll show you exactly how Merlin and the Smart Display work in your environment.",
  hero: {
    title: "Introduce Merlin to Your Building.",
    body: "Whether you're a facilities manager, a CTO, or a head of operations — our team will show you exactly how Merlin and the Smart Display work in your environment.",
  },
  conversationPaths: [
    { title: "See the Smart Display", desc: "A 30-minute demonstration of the Smart Display and Merlin in a real building environment. Bring your facilities team.", icon: "📱", value: "Smart Display Demo" },
    { title: "Full Platform Demo", desc: "A tailored walkthrough of the complete Adaptiv stack for your specific use case — building intelligence, industrial, or both.", icon: "🖥", value: "Full Platform Demo — Building Intelligence" },
    { title: "Talk to a Specialist", desc: "Technical questions, custom requirements, partnership or investment discussions — speak directly with an Adaptiv specialist.", icon: "💬", value: "Technical Questions" },
  ],
  form: {
    interestOptions: [
      "Smart Display Demo",
      "Full Platform Demo — Building Intelligence",
      "Full Platform Demo — Industrial",
      "Technical Questions",
      "Partnership",
      "Investment",
      "Press & Media",
      "Other",
    ],
    interestLabel: "I am interested in...",
    messageLabel: "Tell us about your building or operation",
    messagePlaceholder: "Helps us personalise the demo for your specific context.",
    submitLabel: "Request a Demo",
    submitLoadingLabel: "Sending...",
  },
  successPanel: {
    title: "We'll be in touch shortly.",
    body: "Thank you for reaching out. One of our team will contact you within one business day.",
    backLabel: "Back to home",
    backHref: "/",
  },
  offices: [
    {
      city: "New York",
      country: "United States",
      addressLines: ["85 Broad Street, 17th Floor", "New York, NY 10004"],
      isHq: true,
    },
    {
      city: "Paris",
      country: "France",
      addressLines: ["41 Avenue Georges Pompidou", "92300 Levallois-Perret"],
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      addressLines: ["Strawinskylaan 411", "1077XX Amsterdam"],
    },
  ],
  primaryEmail: "contact@adaptiv.systems",
  contactDetails: [
    { label: "contact@adaptiv.systems", href: "mailto:contact@adaptiv.systems" },
    { label: "LinkedIn", href: "https://linkedin.com/company/adaptiv-systems" },
    { label: "www.adaptiv.company", href: "https://adaptiv.company" },
  ],
};
