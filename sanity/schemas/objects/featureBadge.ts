import { defineType, defineField } from "sanity";
import { COLOR_PRESETS } from "./trait";

export const featureBadge = defineType({
  name: "featureBadge",
  title: "Feature badge / chip",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "dotColor",
      title: "Dot color",
      type: "string",
      options: { list: COLOR_PRESETS },
      initialValue: "#FF00B2",
    }),
  ],
  preview: { select: { title: "label" } },
});
