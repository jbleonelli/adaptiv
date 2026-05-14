import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "../objects/trait";

export const companyPage = defineType({
  name: "companyPage",
  title: "Company",
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
        { name: "eyebrow", title: "Badge eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "gradientLine", title: "Gradient (pink) closing line", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 5 },
      ],
    }),

    defineField({
      name: "storySection",
      title: "Section: Our story",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
        },
        { name: "closingLine", title: "Bold closing line", type: "string" },
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [{ type: "metric" }],
        },
      ],
    }),

    defineField({
      name: "founderSection",
      title: "Section: Founder",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "name", title: "Name", type: "string" },
        { name: "role", title: "Role", type: "string" },
        { name: "initials", title: "Initials", type: "string" },
        {
          name: "credentials",
          title: "Credentials",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "paragraphs",
          title: "Bio paragraphs",
          type: "array",
          of: [{ type: "text" }],
        },
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "quoteAttribution", title: "Quote attribution", type: "string" },
      ],
    }),

    defineField({
      name: "teamSection",
      title: "Section: Team",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "members",
          title: "Members",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "role", title: "Role", type: "string" },
                { name: "bio", title: "Bio", type: "text", rows: 4 },
                { name: "initials", title: "Initials", type: "string" },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                { name: "isFounder", title: "Mark as founder", type: "boolean" },
              ],
              preview: { select: { title: "name", subtitle: "role" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "designStudioSection",
      title: "Section: Design studio",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 4 },
        {
          name: "strengths",
          title: "Strengths",
          type: "array",
          of: [{ type: "trait" }],
        },
      ],
    }),

    defineField({
      name: "valuesSection",
      title: "Section: Values",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "values",
          title: "Values",
          type: "array",
          of: [{ type: "trait" }],
        },
      ],
    }),

    defineField({
      name: "investorsSection",
      title: "Section: Investors",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
        },
        { name: "closingLine", title: "Bold closing line", type: "string" },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA link", type: "string" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Company page" }) },
});
