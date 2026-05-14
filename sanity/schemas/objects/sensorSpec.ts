import { defineType, defineField } from "sanity";

export const sensorSpec = defineType({
  name: "sensorSpec",
  title: "Spec row",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
  ],
  preview: { select: { title: "label", subtitle: "value" } },
});
