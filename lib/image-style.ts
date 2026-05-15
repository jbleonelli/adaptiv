import type { CSSProperties } from "react";
import type {
  ImageDefaultsSettings,
  ImageShadowIntensity,
} from "@/lib/content/siteSettings";

export type ImageStyleOverride = {
  rounded?: boolean | null;
  shadow?: boolean | null;
  radiusPx?: number | null;
  shadowIntensity?: ImageShadowIntensity | null;
  maxWidthPx?: number | null;
};

/**
 * String values returned by the Sanity radio override fields:
 *   "inherit" → use the global default (returns undefined)
 *   "on"      → force on
 *   "off"     → force off
 */
export function overrideStringToBool(
  value: string | null | undefined
): boolean | null | undefined {
  if (value === "on") return true;
  if (value === "off") return false;
  return undefined;
}

/**
 * Convenience: build a CSSProperties override directly from the string fields
 * that come back from Sanity (e.g. `imageRoundedOverride`, `imageShadowOverride`).
 */
export function imageOverrideStyleFromStrings(
  roundedOverride: string | null | undefined,
  shadowOverride: string | null | undefined,
  extra: Pick<ImageStyleOverride, "maxWidthPx" | "radiusPx" | "shadowIntensity"> = {}
): CSSProperties {
  return resolveImageStyle({
    rounded: overrideStringToBool(roundedOverride),
    shadow: overrideStringToBool(shadowOverride),
    ...extra,
  });
}

const SHADOW_PRESETS: Record<ImageShadowIntensity, string> = {
  soft: "0 8px 24px -8px rgba(15, 23, 42, 0.12)",
  medium: "0 18px 50px -12px rgba(15, 23, 42, 0.20)",
  strong: "0 30px 80px -20px rgba(15, 23, 42, 0.30)",
};

export const DEFAULT_IMAGE_DEFAULTS: Required<ImageDefaultsSettings> = {
  rounded: true,
  radiusPx: 16,
  shadow: false,
  shadowIntensity: "medium",
  maxWidthPx: 720,
};

export function imageShadowCss(intensity: ImageShadowIntensity = "medium"): string {
  return SHADOW_PRESETS[intensity] ?? SHADOW_PRESETS.medium;
}

/**
 * Returns the CSS custom properties to set on a layout wrapper based on the
 * site-wide image defaults from CMS. The .cms-image utility class in
 * globals.css consumes these variables.
 */
export function imageDefaultsToCssVars(
  defaults: ImageDefaultsSettings | undefined | null
): CSSProperties {
  const merged = {
    ...DEFAULT_IMAGE_DEFAULTS,
    ...(defaults ?? {}),
  } as Required<ImageDefaultsSettings>;

  return {
    "--cms-image-radius": merged.rounded ? `${merged.radiusPx}px` : "0px",
    "--cms-image-shadow": merged.shadow
      ? imageShadowCss(merged.shadowIntensity)
      : "none",
    "--cms-image-max-width": merged.maxWidthPx
      ? `${merged.maxWidthPx}px`
      : "none",
  } as CSSProperties;
}

/**
 * Resolves a per-image override against site-wide defaults and returns inline
 * style overrides ready to spread onto an <img>. Only properties that DIFFER
 * from the global defaults are returned, so the .cms-image class still does
 * the heavy lifting and we keep the DOM minimal.
 *
 * Pass `defaults` only when you have it (e.g. inside the layout). Pages don't
 * need it — they just spread the resulting style and rely on cascade.
 */
export function resolveImageStyle(
  override: ImageStyleOverride | undefined | null,
  defaults?: ImageDefaultsSettings | null
): CSSProperties {
  if (!override) return {};
  const merged = {
    ...DEFAULT_IMAGE_DEFAULTS,
    ...(defaults ?? {}),
  } as Required<ImageDefaultsSettings>;

  const style: CSSProperties = {};

  if (override.rounded === false) {
    style.borderRadius = "0px";
  } else if (override.rounded === true) {
    const r = override.radiusPx ?? merged.radiusPx;
    style.borderRadius = `${r}px`;
  } else if (override.radiusPx != null) {
    style.borderRadius = `${override.radiusPx}px`;
  }

  if (override.shadow === false) {
    style.boxShadow = "none";
  } else if (override.shadow === true) {
    const intensity = override.shadowIntensity ?? merged.shadowIntensity;
    style.boxShadow = imageShadowCss(intensity);
  } else if (override.shadowIntensity != null) {
    style.boxShadow = imageShadowCss(override.shadowIntensity);
  }

  if (override.maxWidthPx != null) {
    style.maxWidth = `${override.maxWidthPx}px`;
  }

  return style;
}
