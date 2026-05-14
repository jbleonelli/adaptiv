import { createClient, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import {
  apiVersion,
  dataset,
  isSanityConfigured,
  projectId,
  readToken,
} from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: { studioUrl: "/studio" },
});

/**
 * Fetch a document from Sanity. Returns `null` if Sanity is not yet
 * configured or the fetch fails for any reason — callers should treat
 * `null` as a signal to fall back to their default content.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse | null> {
  if (!isSanityConfigured) return null;

  let isDraftMode = false;
  try {
    isDraftMode = (await draftMode()).isEnabled;
  } catch {
    isDraftMode = false;
  }

  try {
    const result = await client
      .withConfig({
        token: isDraftMode ? readToken : undefined,
        perspective: isDraftMode ? "drafts" : "published",
        useCdn: !isDraftMode,
        stega: { studioUrl: "/studio", enabled: isDraftMode },
      })
      .fetch<QueryResponse>(query, params, {
        next: { revalidate: isDraftMode ? 0 : 60, tags },
      });
    return result ?? null;
  } catch (error) {
    console.warn("[sanityFetch] returning null fallback —", (error as Error).message);
    return null;
  }
}
