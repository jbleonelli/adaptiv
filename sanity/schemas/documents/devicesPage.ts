import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "../objects/trait";

export const devicesPage = defineType({
  name: "devicesPage",
  title: "Devices",
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
        { name: "subBody", title: "Sub body / stat line", type: "text", rows: 2 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
        {
          name: "image",
          title: "Hero image",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
          name: "imageSize",
          title: "Hero image — sizing mode",
          type: "string",
          description:
            "How should the hero image be sized? Pick a preset, or choose Custom to use the width/height fields below.",
          initialValue: "custom",
          options: {
            list: [
              {
                title: "Custom (use max width / height below)",
                value: "custom",
              },
              {
                title:
                  "Match text column height (stretch from headline to bottom of buttons)",
                value: "matchTextHeight",
              },
            ],
            layout: "radio",
          },
        },
        {
          name: "imageObjectFit",
          title: "Hero image — fit mode",
          type: "string",
          description:
            "How the image fills its box. 'Contain' = whole image visible, may letterbox. 'Cover' = image fills the box, parts may be cropped (use the image's hotspot to choose what stays visible — double-click the image above and click 'Edit hotspot').",
          initialValue: "cover",
          options: {
            list: [
              { title: "Cover — fill box, crop edges (recommended)", value: "cover" },
              { title: "Contain — fit whole image, letterbox if needed", value: "contain" },
            ],
            layout: "radio",
          },
        },
        {
          name: "imageMaxWidthPx",
          title: "Hero image — max width (px)",
          type: "number",
          description:
            "Only used in Custom mode. Maximum width of the hero image in pixels. Default 512. Try 400 (smaller), 640, or 800 (larger).",
          validation: (Rule) => Rule.min(120).max(1600),
          hidden: ({ parent }) =>
            parent?.imageSize && parent.imageSize !== "custom",
        },
        {
          name: "imageMaxHeightPx",
          title: "Hero image — max height (px)",
          type: "number",
          description:
            "Only used in Custom mode. Leave empty for no constraint. Set e.g. 320 to make it shorter, 600 to make it taller.",
          validation: (Rule) => Rule.min(120).max(1200),
          hidden: ({ parent }) =>
            parent?.imageSize && parent.imageSize !== "custom",
        },
      ],
    }),

    defineField({
      name: "advantagesSection",
      title: "Section: Four Advantages",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "advantages",
          title: "Advantages",
          type: "array",
          of: [{ type: "useCase" }],
        },
      ],
    }),

    defineField({
      name: "manufacturingSection",
      title: "Section: Manufacturing video",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "subBody", title: "Sub body", type: "text", rows: 3 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA link", type: "string" },
        { name: "videoUrl", title: "Video URL", type: "url" },
      ],
    }),

    defineField({
      name: "specsSection",
      title: "Section: Technical specifications",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
          name: "specs",
          title: "Specs",
          type: "array",
          of: [{ type: "sensorSpec" }],
        },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),

    defineField({
      name: "useCasesBySpaceSection",
      title: "Section: Use cases by space",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        {
          name: "spaces",
          title: "Spaces",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "space", title: "Space name", type: "string" },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                {
                  name: "cases",
                  title: "Use cases",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: { select: { title: "space" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "deviceRangeSection",
      title: "Section: Three device gallery",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 3 },
        {
          name: "devices",
          title: "Devices",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "desc", title: "Description", type: "text", rows: 3 },
                { name: "badge", title: "Badge label", type: "string" },
                {
                  name: "badgeColor",
                  title: "Badge color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [{ name: "alt", title: "Alt text", type: "string" }],
                },
                {
                  name: "highlights",
                  title: "Highlights",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: { select: { title: "name", subtitle: "badge" } },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "ultraSection",
      title: "Section: Smart Display Ultra",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "subEyebrow", title: "Pill label", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "sensorsHeading", title: "Embedded sensors heading", type: "string" },
        {
          name: "sensors",
          title: "Embedded sensors",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "detail", title: "Detail", type: "string" },
              ],
              preview: { select: { title: "label", subtitle: "detail" } },
            },
          ],
        },
        { name: "compareHeading", title: "How it compares heading", type: "string" },
        {
          name: "compareRows",
          title: "Comparison rows",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "feature", title: "Feature", type: "string" },
                { name: "classic", title: "Classic value", type: "string" },
                { name: "sd26", title: "SD26 value", type: "string" },
                { name: "ultra", title: "Ultra value", type: "string" },
              ],
              preview: { select: { title: "feature" } },
            },
          ],
        },
        { name: "bestForHeading", title: "Best for heading", type: "string" },
        {
          name: "bestFor",
          title: "Best for items",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    defineField({
      name: "sensorEcosystemSection",
      title: "Section: Sensor ecosystem",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sectionNumber", title: "Section number", type: "string" },
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 4 },
        {
          name: "calloutBadges",
          title: "Gateway callout badges",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "groups",
          title: "Sensor groups",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "category", title: "Category", type: "string" },
                {
                  name: "color",
                  title: "Color",
                  type: "string",
                  options: { list: COLOR_PRESETS },
                },
                {
                  name: "sensors",
                  title: "Sensors",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "name", title: "Name", type: "string" },
                        { name: "specs", title: "Specs", type: "string" },
                        { name: "use", title: "Use", type: "text", rows: 3 },
                      ],
                      preview: { select: { title: "name", subtitle: "specs" } },
                    },
                  ],
                },
              ],
              preview: { select: { title: "category" } },
            },
          ],
        },
        { name: "footnoteTitle", title: "Footnote title", type: "string" },
        { name: "footnoteBody", title: "Footnote body", type: "text", rows: 3 },
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Section: Final CTA",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "titleLines", title: "Title lines", type: "array", of: [{ type: "string" }] },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Devices page" }) },
});
