export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Placeholder until a real project ID is set in .env.local. When the
// placeholder is in use, sanityFetch returns null and pages fall back
// to their built-in default content — the site keeps rendering.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

export const isSanityConfigured = projectId !== "placeholder";

export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";

export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

export const readToken = process.env.SANITY_API_READ_TOKEN;
