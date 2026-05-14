import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "../objects/trait";

export const solutionsPage = defineType({
  name: "solutionsPage",
  title: "Solutions",
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
      ],
    }),

    defineField({
      name: "personasSection",
      title: "Section: Personas",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        {
          name: "personas",
          title: "Persona cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "role", title: "Role", type: "string" },
                {
                  name: "color",
                  title: "Accent color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                {
                  name: "iconKey",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "Building owner", value: "building-owner" },
                      { title: "Facility manager", value: "facility-manager" },
                      { title: "Factory manager", value: "factory-manager" },
                      { title: "Sustainability officer", value: "sustainability" },
                      { title: "Head of security", value: "security" },
                      { title: "IT/OT manager", value: "it-ot" },
                    ],
                  },
                },
                { name: "pain", title: "Pain point", type: "text", rows: 4 },
                { name: "value", title: "How Merlin helps", type: "text", rows: 4 },
                {
                  name: "benefits",
                  title: "Benefits",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: { select: { title: "role" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "solutions",
      title: "Section: Solutions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "Anchor ID", type: "string" },
            { name: "badge", title: "Badge label", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "challenge", title: "The challenge", type: "text", rows: 5 },
            { name: "solution", title: "The Adaptiv solution", type: "text", rows: 5 },
            {
              name: "capabilities",
              title: "Key capabilities",
              type: "array",
              of: [{ type: "text" }],
            },
            {
              name: "outcomes",
              title: "Key outcomes",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "color",
              title: "Accent color",
              type: "string",
              options: { list: COLOR_PRESETS },
            },
            {
              name: "iconKey",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Building", value: "building" },
                  { title: "Factory / gear", value: "factory" },
                  { title: "Energy / grid", value: "energy" },
                  { title: "Warehouse", value: "warehouse" },
                  { title: "Smart city", value: "city" },
                ],
              },
            },
          ],
          preview: { select: { title: "title", subtitle: "badge" } },
        },
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
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA link", type: "string" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Solutions page" }) },
});
