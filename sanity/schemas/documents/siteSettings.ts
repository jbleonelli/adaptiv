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
      name: "sideLogo",
      title: "Side logo (vertical wordmark)",
      type: "object",
      description:
        "Controls the rotated ADAPTIV wordmark fixed to the bottom-left on desktop and the small horizontal version in the top-left on mobile.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "enabled",
          title: "Show side logo",
          type: "boolean",
          initialValue: true,
          description: "Turn off to hide the side logo entirely (both desktop and mobile).",
        }),
        defineField({
          name: "wordmark",
          title: "Wordmark image (optional override)",
          type: "image",
          description:
            "Upload a transparent PNG of your wordmark to override the default. The image is used as a CSS mask, so the visible color comes from the gradient below — only the SHAPE of the image matters.",
          options: { hotspot: false },
        }),
        defineField({
          name: "gradientStart",
          title: "Gradient start color (bottom / leading edge)",
          type: "string",
          description:
            "Hex or any CSS color. Bottom of the rotated wordmark on desktop / left edge on mobile. Default: #FF00B2",
          initialValue: "#FF00B2",
        }),
        defineField({
          name: "gradientEnd",
          title: "Gradient end color (top / trailing edge)",
          type: "string",
          description:
            "Hex or any CSS color. Top of the rotated wordmark on desktop / right edge on mobile. Default: #A6228A",
          initialValue: "#A6228A",
        }),
        defineField({
          name: "thicknessPx",
          title: "Desktop thickness (px)",
          type: "number",
          description:
            "Visual width of the rotated wordmark on desktop. Length auto-scales to preserve aspect ratio. Default 96.",
          validation: (Rule) => Rule.min(40).max(240),
          initialValue: 96,
        }),
        defineField({
          name: "insetLeftPx",
          title: "Desktop — distance from left edge (px)",
          type: "number",
          validation: (Rule) => Rule.min(0).max(200),
          initialValue: 28,
        }),
        defineField({
          name: "insetBottomPx",
          title: "Desktop — distance from bottom edge (px)",
          type: "number",
          validation: (Rule) => Rule.min(0).max(300),
          initialValue: 80,
        }),
        defineField({
          name: "mobileHeightPx",
          title: "Mobile wordmark — height (px)",
          type: "number",
          description:
            "Height of the small horizontal wordmark in the top-left on mobile. Default 22.",
          validation: (Rule) => Rule.min(12).max(64),
          initialValue: 22,
        }),
      ],
    }),
    defineField({
      name: "imageDefaults",
      title: "Default image styling (site-wide)",
      type: "object",
      description:
        "Defaults applied to every CMS-uploaded image across the site. Individual images can override these.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "rounded",
          title: "Rounded corners by default",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "radiusPx",
          title: "Corner radius (px)",
          type: "number",
          description:
            "Used when rounded corners are enabled (globally or per-image). Default 16.",
          initialValue: 16,
          validation: (Rule) => Rule.min(0).max(64),
        }),
        defineField({
          name: "shadow",
          title: "Drop shadow by default",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "shadowIntensity",
          title: "Shadow intensity",
          type: "string",
          description:
            "Used when drop shadow is enabled (globally or per-image). Default Medium.",
          options: {
            list: [
              { title: "Soft", value: "soft" },
              { title: "Medium", value: "medium" },
              { title: "Strong", value: "strong" },
            ],
            layout: "radio",
          },
          initialValue: "medium",
        }),
        defineField({
          name: "maxWidthPx",
          title: "Default maximum width (px)",
          type: "number",
          description:
            "Caps how large any CMS image can render in its container. Prevents oversized photos. Leave empty for no cap. Default 720.",
          validation: (Rule) => Rule.min(120).max(2400),
          initialValue: 720,
        }),
      ],
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
