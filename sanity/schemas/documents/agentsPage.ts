import { defineType, defineField } from "sanity";

/**
 * Reusable inline object for a section that follows the standard
 * "left rail / right content" pattern: sectionNumber + eyebrow + titleLines + body.
 *
 * Defined inline rather than as a global object type because each parent
 * section adds its own extra fields (contrasts, attributes, items, etc.).
 */
const sectionHeaderFields = [
  { name: "sectionNumber", title: "Section number (e.g. // 01)", type: "string" as const },
  { name: "eyebrow", title: "Eyebrow", type: "string" as const },
  {
    name: "titleLines",
    title: "Title lines (one per line)",
    type: "array" as const,
    of: [{ type: "string" as const }],
  },
];

export const agentsPage = defineType({
  name: "agentsPage",
  title: "Agents — the AI Agent Library",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 2 }),

    // ── HERO ─────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: { collapsible: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow badge", type: "string" },
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "body", title: "Body (main paragraph)", type: "text", rows: 4 },
        { name: "subBody", title: "Sub-body (smaller, below)", type: "text", rows: 2 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),

    // ── 01 · WHY A FLEET ────────────────────────────────────────────
    defineField({
      name: "whyFleet",
      title: "Section 01 — Why a fleet, not a single model",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        { name: "body", title: "Lead paragraph", type: "text", rows: 3 },
        {
          name: "contrasts",
          title: "Contrast cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title (small pink eyebrow)", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            },
          ],
        },
        { name: "closingLine", title: "Closing paragraph", type: "text", rows: 5 },
      ],
    }),

    // ── 02 · THE SHAPE OF EVERY AGENT ───────────────────────────────
    defineField({
      name: "shape",
      title: "Section 02 — The shape of every agent",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        { name: "body", title: "Lead paragraph", type: "text", rows: 3 },
        {
          name: "attributes",
          title: "Attribute tiles",
          description: "Numbered in the order they appear (01, 02, …).",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
              ],
              preview: { select: { title: "name", subtitle: "body" } },
            },
          ],
        },
        { name: "closingLine", title: "Closing line (centered, bold)", type: "string" },
      ],
    }),

    // ── 03 · HOW AGENTS TALK TO HUMANS ──────────────────────────────
    defineField({
      name: "howAgentsTalk",
      title: "Section 03 — How agents talk to humans",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        {
          name: "paragraphs",
          title: "Paragraphs",
          description:
            "First paragraph renders larger. The stylised 'ask' chat mockup on the right is rendered from code (cleaning-agent example) and is not editable here.",
          type: "array",
          of: [{ type: "text", rows: 4 }],
        },
      ],
    }),

    // ── 04 · THE CATALOG ────────────────────────────────────────────
    defineField({
      name: "catalog",
      title: "Section 04 — The agent catalog",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        { name: "body", title: "Lead paragraph", type: "text", rows: 3 },
        {
          name: "agents",
          title: "Agents",
          description: "Order here drives display order in the 2-up grid.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "num",
                  title: "Number",
                  type: "number",
                  description: "Shown as a two-digit badge (01, 02, …).",
                },
                { name: "name", title: "Name", type: "string" },
                {
                  name: "status",
                  title: "Status",
                  type: "string",
                  options: {
                    list: [
                      { title: "Active", value: "active" },
                      { title: "Coming online", value: "coming-online" },
                    ],
                    layout: "radio",
                  },
                  initialValue: "active",
                },
                {
                  name: "scope",
                  title: "Scope qualifier (optional)",
                  type: "string",
                  description: "e.g. 'For clinics, hospitals, pharmacies'. Shown italic under the name.",
                },
                {
                  name: "body",
                  title: "Body",
                  description: "Use blank lines to separate paragraphs.",
                  type: "text",
                  rows: 6,
                },
                { name: "reads", title: "Reads (signals · sources)", type: "text", rows: 2 },
                { name: "livesIn", title: "Lives in (deployment scope)", type: "text", rows: 2 },
                {
                  name: "color",
                  title: "Brand color (hex)",
                  type: "string",
                  description: "Used for the number badge and the status pill border.",
                },
              ],
              preview: {
                select: { title: "name", subtitle: "scope", num: "num" },
                prepare({ title, subtitle, num }) {
                  const n = typeof num === "number" ? String(num).padStart(2, "0") : "??";
                  return {
                    title: `${n} · ${title ?? "(untitled)"}`,
                    subtitle: subtitle ?? "",
                  };
                },
              },
            },
          ],
        },
      ],
    }),

    // ── 05 · BY VERTICAL ────────────────────────────────────────────
    defineField({
      name: "byVertical",
      title: "Section 05 — The agents by vertical",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        {
          name: "rows",
          title: "Vertical rows",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "vertical", title: "Vertical", type: "string" },
                {
                  name: "agents",
                  title: "Agents that matter most",
                  type: "array",
                  of: [{ type: "string" }],
                  description: "Each entry renders as a pill.",
                },
              ],
              preview: { select: { title: "vertical" } },
            },
          ],
        },
        { name: "closingNote", title: "Closing note", type: "text", rows: 4 },
      ],
    }),

    // ── 06 · WHAT IT IS NOT ─────────────────────────────────────────
    defineField({
      name: "whatItIsNot",
      title: "Section 06 — What the agent library is NOT",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        ...sectionHeaderFields,
        { name: "body", title: "Lead paragraph", type: "text", rows: 2 },
        {
          name: "items",
          title: "Callout cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            },
          ],
        },
      ],
    }),

    // ── IN ONE LINE ─────────────────────────────────────────────────
    defineField({
      name: "inOneLine",
      title: "Centerpiece — 'In one line'",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "body", title: "Main statement (one paragraph)", type: "text", rows: 4 },
        { name: "closingNote", title: "Closing italic note", type: "text", rows: 3 },
      ],
    }),

    // ── FINAL CTA ───────────────────────────────────────────────────
    defineField({
      name: "finalCta",
      title: "Final CTA",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "titleLines",
          title: "Title lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA", type: "ctaButton" },
        { name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Agents — the AI Agent Library" }) },
});
