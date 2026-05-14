"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { media, mediaAssetSource } from "sanity-plugin-media";

import { apiVersion, dataset, projectId, studioUrl } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";
import { resolve } from "./sanity/presentation/resolve";

export default defineConfig({
  name: "adaptiv-cms",
  title: "Adaptiv CMS",
  basePath: studioUrl,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    presentationTool({
      resolve,
      previewUrl: {
        origin: typeof location === "undefined" ? undefined : location.origin,
        previewMode: { enable: "/api/draft-mode/enable" },
      },
    }),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Home")
              .child(
                S.document().schemaType("homePage").documentId("homePage")
              ),
            S.listItem()
              .title("Merlin")
              .child(
                S.document().schemaType("merlinPage").documentId("merlinPage")
              ),
            S.listItem()
              .title("Devices")
              .child(
                S.document().schemaType("devicesPage").documentId("devicesPage")
              ),
            S.listItem()
              .title("Platform")
              .child(
                S.document()
                  .schemaType("platformPage")
                  .documentId("platformPage")
              ),
            S.listItem()
              .title("Solutions")
              .child(
                S.document()
                  .schemaType("solutionsPage")
                  .documentId("solutionsPage")
              ),
            S.listItem()
              .title("ROI")
              .child(
                S.document().schemaType("roiPage").documentId("roiPage")
              ),
            S.listItem()
              .title("Company")
              .child(
                S.document().schemaType("companyPage").documentId("companyPage")
              ),
            S.listItem()
              .title("Contact")
              .child(
                S.document().schemaType("contactPage").documentId("contactPage")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
  // Wire the Media plugin into every image/file picker so the editor can
  // browse the centralized asset library instead of only uploading per-field.
  form: {
    file: {
      assetSources: (previousAssetSources) => [
        mediaAssetSource,
        ...previousAssetSources,
      ],
    },
    image: {
      assetSources: (previousAssetSources) => [
        mediaAssetSource,
        ...previousAssetSources,
      ],
    },
  },
});
