/**
 * One-shot seed script: pushes the canonical default content from
 * lib/content/*.ts into the configured Sanity dataset, uploading every
 * referenced /public image as a Sanity image asset along the way.
 *
 * Run once after creating a fresh Sanity project:
 *
 *   1. Copy .env.local.example to .env.local
 *   2. Set NEXT_PUBLIC_SANITY_PROJECT_ID + NEXT_PUBLIC_SANITY_DATASET
 *   3. Set SANITY_API_WRITE_TOKEN to a token with Editor role
 *   4. npm run seed:sanity
 *
 * The script is idempotent — it uses createOrReplace + deterministic
 * document IDs, so re-running it overwrites previous content with the
 * latest defaults from the .ts files.
 */

import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { homeDefaults } from "../lib/content/home";
import { merlinDefaults } from "../lib/content/merlin";
import { devicesDefaults } from "../lib/content/devices";
import { platformDefaults } from "../lib/content/platform";
import { solutionsDefaults } from "../lib/content/solutions";
import { roiDefaults } from "../lib/content/roi";
import { companyDefaults } from "../lib/content/company";
import { contactDefaults } from "../lib/content/contact";
import { siteSettingsDefaults } from "../lib/content/siteSettings";

loadEnv({ path: ".env.local" });
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "placeholder") {
  console.error("\n[seed-sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set.");
  console.error("Add it to .env.local and try again.\n");
  process.exit(1);
}

if (!token) {
  console.error("\n[seed-sanity] SANITY_API_WRITE_TOKEN is not set.");
  console.error("Generate an Editor token at https://www.sanity.io/manage and add it to .env.local.\n");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// ── Image upload helpers ───────────────────────────────────────────────────
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
    console.log(`  ✓ uploaded ${relativePath} → ${asset._id}`);
    return asset._id;
  } catch (err) {
    console.warn(`  ! could not upload ${relativePath}: ${(err as Error).message}`);
    return null;
  }
}

async function imageRefFromPath(p: string | undefined, alt?: string) {
  if (!p) return undefined;
  const assetId = await uploadImageFromPublic(p);
  if (!assetId) return undefined;
  return {
    _type: "image",
    asset: { _type: "reference", _ref: assetId },
    ...(alt ? { alt } : {}),
  };
}

// Walk an arbitrary defaults object and replace every `image: "/path.png"` /
// `heroImagePrimary: "/foo.png"` style string with a Sanity image reference
// pointing to the freshly-uploaded asset. Keys we never want to convert.
const NON_IMAGE_KEYS = new Set([
  "href",
  "videoUrl",
  "ctaHref",
  "color",
  "badgeColor",
  "dotColor",
  "icon",
  "iconKey",
]);

async function transformImages<T>(value: T): Promise<T> {
  if (Array.isArray(value)) {
    const out: unknown[] = [];
    for (const item of value) out.push(await transformImages(item));
    return out as unknown as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (
        typeof v === "string" &&
        !NON_IMAGE_KEYS.has(k) &&
        v.startsWith("/") &&
        /\.(png|jpe?g|webp|gif|svg)$/i.test(v)
      ) {
        const altKey = `${k}Alt`;
        const alt = (value as Record<string, unknown>)[altKey];
        const ref = await imageRefFromPath(v, typeof alt === "string" ? alt : undefined);
        out[k] = ref ?? v;
      } else {
        out[k] = await transformImages(v);
      }
    }
    return out as T;
  }
  return value;
}

// ── Document writes ────────────────────────────────────────────────────────
type SeedDoc = { id: string; type: string; data: Record<string, unknown> };

const documents: SeedDoc[] = [
  { id: "siteSettings", type: "siteSettings", data: siteSettingsDefaults as unknown as Record<string, unknown> },
  { id: "homePage", type: "homePage", data: homeDefaults as unknown as Record<string, unknown> },
  { id: "merlinPage", type: "merlinPage", data: merlinDefaults as unknown as Record<string, unknown> },
  { id: "devicesPage", type: "devicesPage", data: devicesDefaults as unknown as Record<string, unknown> },
  { id: "platformPage", type: "platformPage", data: platformDefaults as unknown as Record<string, unknown> },
  { id: "solutionsPage", type: "solutionsPage", data: solutionsDefaults as unknown as Record<string, unknown> },
  { id: "roiPage", type: "roiPage", data: roiDefaults as unknown as Record<string, unknown> },
  { id: "companyPage", type: "companyPage", data: companyDefaults as unknown as Record<string, unknown> },
  { id: "contactPage", type: "contactPage", data: contactDefaults as unknown as Record<string, unknown> },
];

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
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = withKeysAndIds(v);
    return out as T;
  }
  return value;
}

async function seed() {
  console.log(`\n[seed-sanity] writing to project=${projectId} dataset=${dataset}\n`);

  for (const doc of documents) {
    console.log(`→ ${doc.type} (${doc.id})`);
    const withImages = await transformImages(doc.data);
    const withKeys = withKeysAndIds(withImages);

    await client.createOrReplace({
      _id: doc.id,
      _type: doc.type,
      ...(withKeys as Record<string, unknown>),
    });
    console.log(`  ✓ wrote document _id=${doc.id}`);
  }

  console.log(`\n[seed-sanity] done. Open https://${projectId}.sanity.studio or your local /studio to edit.\n`);
}

seed().catch((err) => {
  console.error("\n[seed-sanity] failed:", err);
  process.exit(1);
});
