import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "../objects/trait";
import { imageStyleFields } from "../fields/imageStyleFields";

export const merlinPage = defineType({
  name: "merlinPage",
  title: "Merlin",
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
        {
          name: "image",
          title: "Hero image (optional — replaces the profile card on the right)",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
          name: "imageSize",
          title: "Hero image — sizing mode",
          type: "string",
          description:
            "Only applies when an image is uploaded above. Pick a preset, or choose Custom to use the width/height fields below.",
          initialValue: "custom",
          options: {
            list: [
              { title: "Custom (use max width / height below)", value: "custom" },
              {
                title: "Match text column height (stretch from headline to bottom of buttons)",
                value: "matchTextHeight",
              },
            ],
            layout: "radio",
          },
          hidden: ({ parent }) => !parent?.image,
        },
        {
          name: "imageObjectFit",
          title: "Hero image — fit mode",
          type: "string",
          description:
            "How the image fills its box. 'Cover' = fills the box, edges may crop (use the image's hotspot to choose what stays visible — double-click the image and click 'Edit hotspot'). 'Contain' = whole image visible, may letterbox.",
          initialValue: "cover",
          options: {
            list: [
              { title: "Cover — fill box, crop edges (recommended)", value: "cover" },
              { title: "Contain — fit whole image, letterbox if needed", value: "contain" },
            ],
            layout: "radio",
          },
          hidden: ({ parent }) => !parent?.image,
        },
        {
          name: "imageMaxWidthPx",
          title: "Hero image — max width (px)",
          type: "number",
          description: "Only used in Custom sizing mode. Default 384.",
          validation: (Rule) => Rule.min(120).max(1600),
          hidden: ({ parent }) =>
            !parent?.image ||
            (parent?.imageSize && parent.imageSize !== "custom"),
        },
        {
          name: "imageMaxHeightPx",
          title: "Hero image — max height (px)",
          type: "number",
          description:
            "Only used in Custom sizing mode. Leave empty for no constraint.",
          validation: (Rule) => Rule.min(120).max(1200),
          hidden: ({ parent }) =>
            !parent?.image ||
            (parent?.imageSize && parent.imageSize !== "custom"),
        },
        ...imageStyleFields(),
        {
          name: "profileCard",
          title: "Profile card (used only if no Hero image is uploaded)",
          type: "object",
          fields: [
            { name: "statusLabel", title: "Status label", type: "string" },
            { name: "version", title: "Version label", type: "string" },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt text", type: "string" }],
            },
            ...imageStyleFields("photo"),
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            {
              name: "stats",
              title: "Stat blocks (4)",
              type: "array",
              of: [{ type: "sensorSpec" }],
            },
            {
              name: "tags",
              title: "Ability tags",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),

    defineField({
      name: "coWorker",
      title: "Section: Co-worker framing",
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
        { name: "comparisonHeading", title: "Comparison heading", type: "string" },
        {
          name: "comparison",
          title: "Comparison rows (Old vs Merlin)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "old", title: "Old", type: "string" },
                { name: "merlin", title: "Merlin", type: "string" },
              ],
              preview: { select: { title: "old", subtitle: "merlin" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "fiveTraitsHeading",
      title: "Section: Five Traits — heading",
      type: "string",
    }),

    defineField({
      name: "traits",
      title: "Section: Five Traits cards",
      type: "array",
      of: [{ type: "trait" }],
    }),

    defineField({
      name: "dayWithMerlin",
      title: "Section: A Day With Merlin",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        {
          name: "events",
          title: "Timeline events",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "time", title: "Time (e.g. 02:30)", type: "string" },
                { name: "label", title: "Label (e.g. Night)", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
              ],
              preview: { select: { title: "time", subtitle: "label" } },
            },
          ],
        },
        { name: "footerLine", title: "Footer line", type: "string" },
      ],
    }),

    defineField({
      name: "differentTraitsHeading",
      title: "Section: Built different — heading",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
      ],
    }),

    defineField({
      name: "differentTraits",
      title: "Section: Built different — cards",
      type: "array",
      of: [{ type: "trait" }],
    }),

    defineField({
      name: "howItWorksHeading",
      title: "Section: How Merlin Works — heading",
      type: "string",
    }),

    defineField({
      name: "howItWorksSteps",
      title: "Section: How Merlin Works — steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step number", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
          preview: { select: { title: "title", subtitle: "label" } },
        },
      ],
    }),

    defineField({
      name: "capabilitiesHeading",
      title: "Section: Capabilities — heading",
      type: "string",
    }),

    defineField({
      name: "capabilities",
      title: "Section: Capabilities — cards",
      type: "array",
      of: [{ type: "trait" }],
    }),

    defineField({
      name: "deploymentHeading",
      title: "Section: Deployment options — heading",
      type: "string",
    }),

    defineField({
      name: "deployments",
      title: "Section: Deployment options — items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "type", title: "Type", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "type", subtitle: "desc" } },
        },
      ],
    }),

    defineField({
      name: "impactSection",
      title: "Section: Impact",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        {
          name: "metrics",
          title: "Metrics",
          type: "array",
          of: [{ type: "metric" }],
        },
        { name: "footnote", title: "Footnote", type: "string" },
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Section: Final CTA",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "subBody", title: "Sub body", type: "text", rows: 2 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Merlin page" }) },
});
