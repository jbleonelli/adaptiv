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
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});
