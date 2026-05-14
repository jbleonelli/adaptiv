import { createClient, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import { apiVersion, dataset, projectId, readToken } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    studioUrl: "/studio",
  },
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = (await draftMode()).isEnabled;

  return client
    .withConfig({
      token: isDraftMode ? readToken : undefined,
      perspective: isDraftMode ? "drafts" : "published",
      useCdn: !isDraftMode,
      stega: { studioUrl: "/studio", enabled: isDraftMode },
    })
    .fetch<QueryResponse>(query, params, {
      next: {
        revalidate: isDraftMode ? 0 : 60,
        tags,
      },
    });
}
