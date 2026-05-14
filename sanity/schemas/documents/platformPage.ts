import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "../objects/trait";

export const platformPage = defineType({
  name: "platformPage",
  title: "Platform",
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
        { name: "body", title: "Body", type: "text", rows: 5 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),

    defineField({
      name: "physicalAISection",
      title: "Section: What is Physical AI",
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
        { name: "equationLabel", title: "Equation strip label", type: "string" },
      ],
    }),

    defineField({
      name: "architectureSection",
      title: "Section: Three-layer architecture",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        {
          name: "layers",
          title: "Layers",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
              ],
              preview: { select: { title: "title", subtitle: "label" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "platformOverviewSection",
      title: "Section: Platform overview / diagram",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 4 },
      ],
    }),

    defineField({
      name: "ownershipHeading",
      title: "Section: Full-stack ownership — heading",
      type: "string",
    }),

    defineField({
      name: "ownershipBenefits",
      title: "Section: Full-stack ownership — benefits",
      type: "array",
      of: [{ type: "trait" }],
    }),

    defineField({
      name: "securitySection",
      title: "Section: Security",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "items",
          title: "Items",
          type: "array",
          of: [{ type: "text" }],
        },
      ],
    }),

    defineField({
      name: "apisSection",
      title: "Section: APIs",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 3 },
        {
          name: "items",
          title: "Items",
          type: "array",
          of: [{ type: "text" }],
        },
      ],
    }),

    defineField({
      name: "builtLocalSection",
      title: "Section: Built local",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 4 },
        {
          name: "regions",
          title: "Regions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "US flag", value: "us-flag" },
                      { title: "EU flag", value: "eu-flag" },
                    ],
                  },
                },
              ],
              preview: { select: { title: "title" } },
            },
          ],
        },
        { name: "footnote", title: "Italic footnote", type: "text", rows: 4 },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Platform page" }) },
});
