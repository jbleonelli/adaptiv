import { defineType, defineField } from "sanity";

export const COLOR_PRESETS = [
  { title: "Pink (brand)", value: "#FF00B2" },
  { title: "Purple", value: "#a855f7" },
  { title: "Teal", value: "#14b8a6" },
  { title: "Blue", value: "#3b82f6" },
  { title: "Green", value: "#22c55e" },
  { title: "Indigo", value: "#6366f1" },
  { title: "Amber", value: "#f59e0b" },
];

export const ICON_PRESETS = [
  { title: "Radar (concentric rings)", value: "radar" },
  { title: "Neural graph", value: "neural" },
  { title: "Cycle / always-on", value: "cycle" },
  { title: "Shield / receipts", value: "shield" },
  { title: "Action vectors", value: "action" },
  { title: "Network hub", value: "hub" },
  { title: "Waveform", value: "waveform" },
  { title: "Workflow boxes", value: "workflow" },
  { title: "Studio canvas", value: "studio" },
  { title: "Code brackets", value: "code" },
  { title: "Audit document", value: "audit" },
  { title: "Filled circle (◉)", value: "circle-filled" },
  { title: "Diamond (◈)", value: "diamond" },
  { title: "Target (◎)", value: "target" },
  { title: "Square diamond (◆)", value: "square-diamond" },
];

export const trait = defineType({
  name: "trait",
  title: "Trait card",
  type: "object",
  fields: [
    defineField({
      name: "num",
      title: "Number label",
      type: "string",
      description: 'e.g. "01", "02"',
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({
      name: "example",
      title: "Example / In practice",
      type: "text",
      rows: 4,
      description: "Optional second paragraph used on Merlin page",
    }),
    defineField({
      name: "color",
      title: "Accent color",
      type: "string",
      options: { list: COLOR_PRESETS },
      initialValue: "#FF00B2",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: { list: ICON_PRESETS },
      initialValue: "circle-filled",
    }),
  ],
  preview: { select: { title: "title", subtitle: "num" } },
});
