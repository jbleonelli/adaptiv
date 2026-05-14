import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand name",
      type: "string",
      initialValue: "Adaptiv AI Technologies",
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "logo",
      title: "Header logo (optional — replaces the default SVG logo)",
      type: "image",
      description:
        "Upload a logo image (transparent PNG or SVG recommended). Leave empty to keep the default Adaptiv SVG logo.",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt text", type: "string" },
      ],
    }),
    defineField({
      name: "logoHeightPx",
      title: "Header logo — height (px)",
      type: "number",
      description:
        "Rendered height of the uploaded logo in pixels. Width auto-scales to keep aspect ratio. Default 28.",
      validation: (Rule) => Rule.min(12).max(80),
      hidden: ({ parent }) => !parent?.logo,
    }),
    defineField({
      name: "navItems",
      title: "Top navigation",
      type: "array",
      of: [{ type: "navLink" }],
    }),
    defineField({
      name: "ctaButton",
      title: "Header CTA button",
      type: "navLink",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "footerLocations",
      title: "Footer locations line",
      type: "string",
      description: "e.g. 'United States (HQ) · Europe'",
    }),
    defineField({
      name: "footerSlogan",
      title: "Footer slogan (right side)",
      type: "string",
    }),
    defineField({
      name: "footerColumns",
      title: "Footer columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Column title", type: "string" },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [{ type: "navLink" }],
            },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [{ type: "navLink" }],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
