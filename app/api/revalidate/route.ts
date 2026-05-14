import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidateSecret } from "@/sanity/env";

/**
 * Webhook called by Sanity whenever a document is published / unpublished.
 *
 * Configure in Sanity Studio Manage:
 *   API → Webhooks → Add new
 *   - URL:        https://<your-vercel-domain>/api/revalidate
 *   - Trigger:    Create / Update / Delete
 *   - Filter:     _type in ["siteSettings", "homePage", "merlinPage", "devicesPage",
 *                            "platformPage", "solutionsPage", "roiPage",
 *                            "companyPage", "contactPage"]
 *   - Projection: { "_type": _type }
 *   - Secret:     value of SANITY_REVALIDATE_SECRET in your env
 *
 * The webhook fires only when relevant documents change, and we
 * revalidate by tag so the affected page is rebuilt on the next request.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      revalidateSecret
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { ok: false, error: "Invalid signature" },
        { status: 401 }
      );
    }
    if (!body?._type) {
      return NextResponse.json(
        { ok: false, error: "Missing _type in webhook body" },
        { status: 400 }
      );
    }

    // Next.js 16 requires a CacheLife profile; "max" means "purge as soon
    // as possible" — exactly what we want when the editor publishes new copy.
    revalidateTag(body._type, "max");
    return NextResponse.json({ ok: true, revalidatedTag: body._type });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
