import { defineType, defineField } from "sanity";

const statusToneOptions = {
  list: [
    { title: "Operational (green)", value: "operational" },
    { title: "Degraded performance (amber)", value: "degraded" },
    { title: "Active incident (red)", value: "incident" },
  ],
  layout: "radio" as const,
};

const componentStatusOptions = {
  list: [
    { title: "Operational", value: "operational" },
    { title: "Degraded", value: "degraded" },
    { title: "Down", value: "down" },
  ],
  layout: "radio" as const,
};

export const statusPage = defineType({
  name: "statusPage",
  title: "Status — system status page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 2 }),

    defineField({
      name: "hero",
      title: "Hero / status banner",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow (e.g. // SYSTEM STATUS)", type: "string" },
        {
          name: "statusLabel",
          title: "Banner label",
          type: "string",
          description: "Big rounded badge text. e.g. 'All Systems Operational'.",
        },
        {
          name: "statusTone",
          title: "Banner tone",
          type: "string",
          description: "Drives the banner color (green / amber / red).",
          options: statusToneOptions,
          initialValue: "operational",
        },
        { name: "title", title: "Headline", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 4 },
      ],
    }),

    defineField({
      name: "componentSection",
      title: "Component status list",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "heading", title: "Section heading", type: "string" },
        {
          name: "components",
          title: "Components",
          description:
            "One row per platform component. Use 'Operational' unless an incident is in progress.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Component name", type: "string" },
                {
                  name: "note",
                  title: "Status note",
                  type: "string",
                  description: "Short human-readable summary of the current state.",
                },
                {
                  name: "status",
                  title: "Status",
                  type: "string",
                  options: componentStatusOptions,
                  initialValue: "operational",
                },
              ],
              preview: {
                select: { title: "name", subtitle: "status" },
              },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "pastIncidentsSection",
      title: "Past incidents",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "heading", title: "Section heading", type: "string" },
        {
          name: "note",
          title: "Note",
          type: "text",
          rows: 4,
          description: "When there are no incidents, this renders as a soft callout card.",
        },
      ],
    }),

    defineField({
      name: "reportCta",
      title: "Footer CTA",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "body", title: "Body text above the button", type: "text", rows: 3 },
        { name: "label", title: "Button label", type: "string" },
        { name: "href", title: "Button link", type: "string" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Status — system status page" }) },
});
