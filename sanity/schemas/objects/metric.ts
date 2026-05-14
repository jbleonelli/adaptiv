import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "./trait";

export const metric = defineType({
  name: "metric",
  title: "Metric card",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "color",
      title: "Accent color",
      type: "string",
      options: { list: COLOR_PRESETS },
      initialValue: "#FF00B2",
    }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
});
