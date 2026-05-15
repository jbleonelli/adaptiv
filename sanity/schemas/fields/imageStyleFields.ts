import { defineField } from "sanity";

/**
 * Returns the standard set of per-image style override fields.
 * These let editors override the site-wide defaults (set in Site settings →
 * Default image styling) for a single image — toggling rounded corners,
 * drop shadow, and capping max width.
 *
 * Spread the returned array into any object schema that holds an `image`
 * field (heroes, content sections, etc.).
 *
 * Example:
 *   defineField({
 *     name: "hero",
 *     type: "object",
 *     fields: [
 *       defineField({ name: "image", type: "image" }),
 *       ...imageStyleFields(),
 *     ],
 *   })
 */
export function imageStyleFields(prefix: string = "image") {
  return [
    defineField({
      name: `${prefix}RoundedOverride`,
      title: "Rounded corners",
      type: "string",
      description:
        "Override the site-wide default for this image only. 'Inherit' uses the global setting in Site settings.",
      options: {
        list: [
          { title: "Inherit (use global default)", value: "inherit" },
          { title: "On", value: "on" },
          { title: "Off", value: "off" },
        ],
        layout: "radio",
      },
      initialValue: "inherit",
    }),
    defineField({
      name: `${prefix}ShadowOverride`,
      title: "Drop shadow",
      type: "string",
      description:
        "Override the site-wide default for this image only. 'Inherit' uses the global setting in Site settings.",
      options: {
        list: [
          { title: "Inherit (use global default)", value: "inherit" },
          { title: "On", value: "on" },
          { title: "Off", value: "off" },
        ],
        layout: "radio",
      },
      initialValue: "inherit",
    }),
  ];
}

/**
 * Helper: convert a string override ("inherit" | "on" | "off" | undefined)
 * to the boolean | null shape consumed by `resolveImageStyle`.
 */
export type RoundedShadowOverride = "inherit" | "on" | "off" | null | undefined;

export function overrideToBool(
  value: RoundedShadowOverride
): boolean | null | undefined {
  if (value === "on") return true;
  if (value === "off") return false;
  return undefined; // inherit
}
