import { defineType, defineField } from "sanity";

export const simpleSection = defineType({
  name: "simpleSection",
  title: "Simple section",
  type: "object",
  fields: [
    defineField({
      name: "sectionNumber",
      title: "Section number",
      type: "string",
      description: 'e.g. "// 01"',
    }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 6 }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
    }),
    defineField({ name: "ctaHref", title: "CTA link", type: "string" }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});
