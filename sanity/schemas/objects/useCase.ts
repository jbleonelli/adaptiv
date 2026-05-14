import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "./trait";

export const useCase = defineType({
  name: "useCase",
  title: "Use case card",
  type: "object",
  fields: [
    defineField({ name: "num", title: "Number label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({
      name: "points",
      title: "Bullet points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "color",
      title: "Accent color",
      type: "string",
      options: { list: COLOR_PRESETS },
      initialValue: "#FF00B2",
    }),
  ],
  preview: { select: { title: "title", subtitle: "num" } },
});
