import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow / badge", type: "string" },
        {
          name: "titleLines",
          title: "Title lines (one per line)",
          type: "array",
          of: [{ type: "string" }],
          description: 'e.g. ["Meet Your", "New", "Co-Worker."]',
        },
        {
          name: "gradientWord",
          title: "Highlighted (gradient) word",
          type: "string",
        },
        { name: "bodyPrimary", title: "Body — primary", type: "text", rows: 3 },
        { name: "bodySecondary", title: "Body — secondary", type: "text", rows: 2 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
        {
          name: "chips",
          title: "Stat chips",
          type: "array",
          of: [{ type: "featureBadge" }],
        },
        {
          name: "heroImagePrimary",
          title: "Hero image — top",
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt text", type: "string" },
          ],
        },
        {
          name: "heroImageSecondary",
          title: "Hero image — bottom",
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt text", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "physicalAI",
      title: "Section: Physical AI",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "body", title: "Body", type: "text", rows: 5 },
        {
          name: "definition",
          title: "Definition strip",
          type: "string",
          description: 'e.g. "Smart Displays · Sensors · Cameras · Merlin AI"',
        },
      ],
    }),

    defineField({
      name: "deviceShowcase",
      title: "Section: Device showcase",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 4 },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
          name: "sensorStrip",
          title: "Sensor info strip",
          type: "array",
          of: [{ type: "sensorSpec" }],
        },
        {
          name: "featureBadges",
          title: "Feature badges",
          type: "array",
          of: [{ type: "featureBadge" }],
        },
      ],
    }),

    defineField({
      name: "merlinIntro",
      title: "Section: Merlin intro",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleMain", title: "Title — main", type: "string" },
        { name: "titleHighlight", title: "Title — highlight (pink)", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 5 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA link", type: "string" },
      ],
    }),

    defineField({
      name: "traits",
      title: "Section: Merlin traits (4 cards)",
      type: "array",
      of: [{ type: "trait" }],
    }),

    defineField({
      name: "useCasesIntro",
      title: "Section: Use cases header",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    defineField({
      name: "useCases",
      title: "Section: Use cases (cards)",
      type: "array",
      of: [{ type: "useCase" }],
    }),

    defineField({
      name: "differencesSection",
      title: "Section: Adaptiv difference (header)",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    defineField({
      name: "differences",
      title: "Section: Differences (numbered list)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [{ name: "text", title: "Text", type: "text", rows: 2 }],
          preview: { select: { title: "text" } },
        },
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Section: Final CTA",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home page" }),
  },
});
