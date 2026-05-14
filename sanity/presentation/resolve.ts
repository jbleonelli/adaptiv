import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

const documentTypeToPath: Record<string, { title: string; href: string }> = {
  homePage: { title: "Home", href: "/" },
  merlinPage: { title: "Merlin", href: "/merlin" },
  devicesPage: { title: "Devices", href: "/devices" },
  platformPage: { title: "Platform", href: "/platform" },
  solutionsPage: { title: "Solutions", href: "/solutions" },
  roiPage: { title: "ROI", href: "/roi" },
  companyPage: { title: "Company", href: "/company" },
  contactPage: { title: "Contact", href: "/contact" },
  siteSettings: { title: "Site (header & footer)", href: "/" },
};

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: Object.fromEntries(
    Object.entries(documentTypeToPath).map(([type, { title, href }]) => [
      type,
      defineLocations({
        select: { title: "title" },
        resolve: () => ({
          locations: [{ title, href }],
        }),
      }),
    ])
  ),
};
