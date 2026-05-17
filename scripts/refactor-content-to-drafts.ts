/**
 * Pushes the latest content for refactored marketing pages into Sanity as
 * DRAFTS (drafts.<id>) — the published documents are left untouched, so
 * production keeps showing the current site to visitors. The drafts can be
 * reviewed via the preview deploy with draft mode enabled, then published
 * from Sanity Studio when approved.
 *
 * Image references are preserved from the existing published documents
 * whenever possible — if a published doc already has a Sanity image asset
 * for a given field, that asset reference is carried into the draft. New
 * default-only image fields fall back to uploading the matching file from
 * /public.
 *
 * Run:
 *   npm run refactor:drafts              # write drafts (production untouched)
 *   npm run refactor:drafts -- --publish # promote drafts to production
 *   npm run refactor:drafts -- --discard # delete drafts (production untouched)
 */

import { createClient, type SanityDocument } from "@sanity/client";
import { config as loadEnv } from "dotenv";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { homeDefaults } from "../lib/content/home";
import { companyDefaults } from "../lib/content/company";
import { solutionsDefaults } from "../lib/content/solutions";
import { merlinDefaults } from "../lib/content/merlin";
import { devicesDefaults } from "../lib/content/devices";
import { platformDefaults } from "../lib/content/platform";
import { siteSettingsDefaults } from "../lib/content/siteSettings";
import { contactDefaults } from "../lib/content/contact";

loadEnv({ path: ".env.local" });
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "placeholder") {
  console.error("\n[refactor-drafts] NEXT_PUBLIC_SANITY_PROJECT_ID is not set.");
  process.exit(1);
}
if (!token) {
  console.error("\n[refactor-drafts] SANITY_API_WRITE_TOKEN is not set.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const wantDiscard = process.argv.includes("--discard");
const wantPublish = process.argv.includes("--publish");

// ── Image upload helpers (mirrored from seed-sanity.ts) ────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const uploadCache = new Map<string, string>();

async function uploadImageFromPublic(relativePath: string): Promise<string | null> {
  if (!relativePath || !relativePath.startsWith("/")) return null;
  if (uploadCache.has(relativePath)) return uploadCache.get(relativePath)!;

  const absolutePath = path.join(publicDir, relativePath.replace(/^\//, ""));
  try {
    const buffer = await fs.readFile(absolutePath);
    const filename = path.basename(absolutePath);
    const asset = await client.assets.upload("image", buffer, { filename });
    uploadCache.set(relativePath, asset._id);
    console.log(`    ↑ uploaded ${relativePath} → ${asset._id}`);
    return asset._id;
  } catch (err) {
    console.warn(`    ! could not upload ${relativePath}: ${(err as Error).message}`);
    return null;
  }
}

const NON_IMAGE_KEYS = new Set([
  "href", "videoUrl", "ctaHref", "color", "badgeColor", "dotColor", "icon", "iconKey",
]);

function isImagePath(k: string, v: unknown): v is string {
  return (
    typeof v === "string" &&
    !NON_IMAGE_KEYS.has(k) &&
    v.startsWith("/") &&
    /\.(png|jpe?g|webp|gif|svg)$/i.test(v)
  );
}

/**
 * Walk the new defaults and turn every "/public/foo.png" string into a Sanity
 * image reference. Where the existing published doc already has an image at
 * the same field path, prefer THAT reference (preserves any asset the editor
 * uploaded via Sanity Studio).
 */
async function mergeImagesPreservingPublished(
  next: unknown,
  published: unknown,
  pathStack: string[] = []
): Promise<unknown> {
  if (Array.isArray(next)) {
    const out: unknown[] = [];
    for (let i = 0; i < next.length; i++) {
      const pubItem = Array.isArray(published) ? published[i] : undefined;
      out.push(await mergeImagesPreservingPublished(next[i], pubItem, [...pathStack, String(i)]));
    }
    return out;
  }
  if (next && typeof next === "object") {
    const out: Record<string, unknown> = {};
    const pubObj = (published && typeof published === "object" ? published : {}) as Record<string, unknown>;
    for (const [k, v] of Object.entries(next as Record<string, unknown>)) {
      if (isImagePath(k, v)) {
        // prefer existing published image ref
        const existing = pubObj[k];
        if (existing && typeof existing === "object" && (existing as Record<string, unknown>)._type === "image") {
          out[k] = existing;
          continue;
        }
        const altKey = `${k}Alt`;
        const alt = (next as Record<string, unknown>)[altKey];
        const assetId = await uploadImageFromPublic(v);
        if (assetId) {
          out[k] = {
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
            ...(typeof alt === "string" ? { alt } : {}),
          };
        } else {
          out[k] = v; // fallback: leave the string path so the renderer can use it
        }
      } else {
        out[k] = await mergeImagesPreservingPublished(v, pubObj[k], [...pathStack, k]);
      }
    }
    return out;
  }
  return next;
}

function withKeysAndIds<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item, idx) => {
      const transformed = withKeysAndIds(item);
      if (transformed && typeof transformed === "object" && !Array.isArray(transformed)) {
        return { _key: `k${idx}_${Math.random().toString(36).slice(2, 8)}`, ...(transformed as object) };
      }
      return transformed;
    }) as unknown as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = withKeysAndIds(v);
    }
    return out as T;
  }
  return value;
}

// ── Documents to refactor ──────────────────────────────────────────────────
type DraftDoc = { id: string; type: string; data: Record<string, unknown> };

const documents: DraftDoc[] = [
  { id: "siteSettings", type: "siteSettings", data: siteSettingsDefaults as unknown as Record<string, unknown> },
  { id: "homePage", type: "homePage", data: homeDefaults as unknown as Record<string, unknown> },
  { id: "merlinPage", type: "merlinPage", data: merlinDefaults as unknown as Record<string, unknown> },
  { id: "devicesPage", type: "devicesPage", data: devicesDefaults as unknown as Record<string, unknown> },
  { id: "platformPage", type: "platformPage", data: platformDefaults as unknown as Record<string, unknown> },
  { id: "solutionsPage", type: "solutionsPage", data: solutionsDefaults as unknown as Record<string, unknown> },
  { id: "companyPage", type: "companyPage", data: companyDefaults as unknown as Record<string, unknown> },
  { id: "contactPage", type: "contactPage", data: contactDefaults as unknown as Record<string, unknown> },
];

async function discardDrafts() {
  console.log(`\n[refactor-drafts] discarding drafts in project=${projectId} dataset=${dataset}\n`);
  for (const doc of documents) {
    const draftId = `drafts.${doc.id}`;
    try {
      await client.delete(draftId);
      console.log(`  ✓ deleted ${draftId}`);
    } catch (err) {
      const msg = (err as Error).message ?? "";
      if (msg.includes("Document not found") || msg.includes("not found")) {
        console.log(`  · no draft to delete for ${doc.id}`);
      } else {
        console.warn(`  ! failed to delete ${draftId}:`, msg);
      }
    }
  }
  console.log("\n[refactor-drafts] discard complete.\n");
}

async function publishDrafts() {
  console.log(`\n[refactor-drafts] writing drafts in project=${projectId} dataset=${dataset}\n`);

  for (const doc of documents) {
    const draftId = `drafts.${doc.id}`;
    console.log(`→ ${doc.type} (drafts.${doc.id})`);

    const published = await client.getDocument<SanityDocument>(doc.id);
    if (!published) {
      console.warn(`    ! no published doc for ${doc.id}, skipping image-merge step`);
    }

    const merged = await mergeImagesPreservingPublished(doc.data, published);
    const withKeys = withKeysAndIds(merged);

    await client.createOrReplace({
      _id: draftId,
      _type: doc.type,
      ...(withKeys as Record<string, unknown>),
    });
    console.log(`  ✓ wrote draft ${draftId}`);
  }

  console.log(`\n[refactor-drafts] done.`);
  console.log(`To preview: enable draft mode on the preview deploy, then visit /, /company, /solutions.`);
  console.log(`To publish (per-page): open /studio, switch to the document, click Publish.`);
  console.log(`To roll back drafts: npm run refactor:drafts -- --discard\n`);
}

async function publishToProduction() {
  console.log(
    `\n[refactor-drafts] PUBLISHING drafts to production in project=${projectId} dataset=${dataset}\n`
  );

  const tx = client.transaction();
  let queued = 0;

  for (const doc of documents) {
    const draftId = `drafts.${doc.id}`;
    const draft = await client.getDocument<SanityDocument>(draftId);
    if (!draft) {
      console.log(`  · no draft for ${doc.id}, skipping`);
      continue;
    }

    // Strip Sanity-managed system fields so we can re-stamp them on the
    // published document. We re-supply _type explicitly from the registry
    // entry below to keep TypeScript happy under strict mode.
    const { _id, _rev, _createdAt, _updatedAt, _type, ...rest } = draft as Record<
      string,
      unknown
    > & {
      _id: string;
      _type: string;
      _rev?: string;
      _createdAt?: string;
      _updatedAt?: string;
    };
    void _id;
    void _rev;
    void _createdAt;
    void _updatedAt;
    void _type;

    tx.createOrReplace({
      _id: doc.id,
      _type: doc.type,
      ...(rest as Record<string, unknown>),
    });
    tx.delete(draftId);
    queued++;
    console.log(`  ✓ queued publish: drafts.${doc.id} → ${doc.id}`);
  }

  if (queued === 0) {
    console.log("\n[refactor-drafts] nothing to publish.\n");
    return;
  }

  await tx.commit();
  console.log(`\n[refactor-drafts] published ${queued} document(s) to production.`);
  console.log(`Production site: https://adaptiv1.vercel.app\n`);
  console.log(`Note: a CDN revalidation may take up to ~60 seconds to surface.\n`);
}

const action = wantPublish
  ? publishToProduction()
  : wantDiscard
    ? discardDrafts()
    : publishDrafts();

action.catch((err) => {
  console.error("\n[refactor-drafts] failed:", err);
  process.exit(1);
});
