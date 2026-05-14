import { defineType, defineField } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "Call-to-action button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "Internal path (/contact) or full URL (https://…)",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
