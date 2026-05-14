import { defineType, defineField } from "sanity";

export const roiPage = defineType({
  name: "roiPage",
  title: "ROI",
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
        { name: "body", title: "Body", type: "text", rows: 4 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),

    defineField({
      name: "headlineStats",
      title: "Section: Headline numbers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stat", title: "Stat (e.g. 40-60%)", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "stat", subtitle: "label" } },
        },
      ],
    }),

    defineField({
      name: "savingsSection",
      title: "Section: Where the savings come from",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "areas",
          title: "Savings areas",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "stat", title: "Stat", type: "string" },
                { name: "desc", title: "Description", type: "text", rows: 4 },
                {
                  name: "iconKey",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "Lightning / energy", value: "energy" },
                      { title: "Wrench / maintenance", value: "maintenance" },
                      { title: "User / operations", value: "operations" },
                      { title: "Clock / compliance", value: "compliance" },
                    ],
                  },
                },
              ],
              preview: { select: { title: "title", subtitle: "stat" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "tiersSection",
      title: "Section: Three-tier value model",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body (supports newlines)", type: "text", rows: 8 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA link", type: "string" },
        { name: "tableHeading", title: "Table heading", type: "string" },
        {
          name: "rows",
          title: "Savings by vertical",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "value", title: "Value", type: "string" },
                { name: "sub", title: "Sub-label", type: "string" },
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            },
          ],
        },
        { name: "summaryLabel", title: "Summary label", type: "string" },
        { name: "summaryValue", title: "Summary value", type: "string" },
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Section: Final CTA",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "ROI page" }) },
});
