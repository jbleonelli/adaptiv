import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 2 }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
      ],
    }),

    defineField({
      name: "conversationPaths",
      title: "Section: Conversation paths",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
            { name: "icon", title: "Emoji icon", type: "string" },
            { name: "value", title: "Form value when chosen", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        },
      ],
    }),

    defineField({
      name: "interestOptions",
      title: "Form: Interest options",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "successMessage",
      title: "Form: Success message",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 2 },
      ],
    }),

    defineField({
      name: "contactDetails",
      title: "Section: Contact details (footer strip)",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "linkedinUrl", title: "LinkedIn URL", type: "url" },
        { name: "websiteUrl", title: "Website URL", type: "url" },
        { name: "locations", title: "Locations text", type: "string" },
      ],
    }),

    defineField({
      name: "primaryEmail",
      title: "Primary inbound email",
      description: "Rendered alongside the offices block (e.g. contact@adaptiv.systems).",
      type: "string",
    }),

    defineField({
      name: "offices",
      title: "Section: Offices",
      description: "Physical office addresses rendered as a card grid below the form.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "city", title: "City", type: "string" },
            { name: "country", title: "Country", type: "string" },
            {
              name: "addressLines",
              title: "Address lines",
              type: "array",
              of: [{ type: "string" }],
              description: "One street/postcode line per entry. Renders stacked.",
            },
            {
              name: "isHq",
              title: "Mark as HQ",
              type: "boolean",
              description: "Adds an 'HQ' badge to the office card.",
            },
          ],
          preview: {
            select: { title: "city", subtitle: "country" },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});
