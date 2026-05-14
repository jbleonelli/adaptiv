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
      title: "Logo (optional override)",
      type: "image",
    }),
    defineField({
      name: "navItems",
      title: "Top navigation",
      type: "array",
      of: [{ type: "navLink" }],
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
