import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
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
