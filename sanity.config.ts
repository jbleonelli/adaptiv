"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { media } from "sanity-plugin-media";

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
    // The media() plugin auto-registers its asset source on every image
    // and file field, so no extra `form.image.assetSources` wiring is
    // needed (and adding it manually causes "Media" to appear twice in
    // the Select submenu).
    media(),
  ],
});
