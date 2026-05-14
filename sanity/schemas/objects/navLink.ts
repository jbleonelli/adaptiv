import { defineType, defineField } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Nav link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Link", type: "string" }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});
