import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "./image";

/**
 * Accepts either a static path string (e.g. "/brand/logo.png") or a Sanity
 * image source. Returns a URL safe to use as an <img>/<Image> src.
 */
export function imageSrc(
  source: string | SanityImageSource | null | undefined,
  options?: { width?: number; height?: number }
): string {
  if (!source) return "";
  if (typeof source === "string") return source;

  let builder = urlFor(source);
  if (options?.width) builder = builder.width(options.width);
  if (options?.height) builder = builder.height(options.height);
  return builder.url();
}

/**
 * Try to read an `alt` field from a Sanity image, otherwise return fallback.
 */
export function imageAlt(
  source: string | (SanityImageSource & { alt?: string }) | null | undefined,
  fallback = ""
): string {
  if (!source || typeof source === "string") return fallback;
  return (source as { alt?: string }).alt || fallback;
}

/**
 * Returns a CSS `object-position` value (e.g. "30% 70%") computed from the
 * Sanity image's hotspot. Falls back to the natural center when no hotspot
 * is set or when the source is a static string path.
 *
 * Use this when rendering with `object-fit: cover` so the editor-chosen
 * focal point stays visible after cropping.
 */
export function imageObjectPosition(
  source: string | SanityImageSource | null | undefined
): string {
  if (!source || typeof source === "string") return "50% 50%";
  const hotspot = (source as { hotspot?: { x?: number; y?: number } })
    ?.hotspot;
  if (!hotspot || typeof hotspot.x !== "number" || typeof hotspot.y !== "number") {
    return "50% 50%";
  }
  const x = Math.max(0, Math.min(1, hotspot.x)) * 100;
  const y = Math.max(0, Math.min(1, hotspot.y)) * 100;
  return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
}
