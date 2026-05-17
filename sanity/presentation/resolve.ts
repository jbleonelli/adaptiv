import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

// Two-way mapping: document type ↔ live URL.
// `documentTypeToPath` powers the "Used on" links (locations.resolve below)
// and `pathToDocument` powers main-document resolution so navigating to
// /devices in the Presentation iframe automatically loads devicesPage in
// the right-hand editor pane.
const documentTypeToPath: Record<string, { title: string; href: string }> = {
  homePage: { title: "Home", href: "/" },
  merlinPage: { title: "Merlin", href: "/merlin" },
  devicesPage: { title: "Devices", href: "/devices" },
  platformPage: { title: "Platform", href: "/platform" },
  solutionsPage: { title: "Solutions", href: "/solutions" },
  roiPage: { title: "ROI", href: "/roi" },
  companyPage: { title: "Company", href: "/company" },
  contactPage: { title: "Contact", href: "/contact" },
  agentsPage: { title: "Agents", href: "/agents" },
  statusPage: { title: "Status", href: "/status" },
  siteSettings: { title: "Site (header & footer)", href: "/" },
};

const pathToDocument: Array<{ route: string; type: string; id: string }> = [
  { route: "/", type: "homePage", id: "homePage" },
  { route: "/merlin", type: "merlinPage", id: "merlinPage" },
  { route: "/devices", type: "devicesPage", id: "devicesPage" },
  { route: "/platform", type: "platformPage", id: "platformPage" },
  { route: "/solutions", type: "solutionsPage", id: "solutionsPage" },
  { route: "/roi", type: "roiPage", id: "roiPage" },
  { route: "/company", type: "companyPage", id: "companyPage" },
  { route: "/contact", type: "contactPage", id: "contactPage" },
  { route: "/agents", type: "agentsPage", id: "agentsPage" },
  { route: "/status", type: "statusPage", id: "statusPage" },
];

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
  mainDocuments: defineDocuments(
    pathToDocument.map(({ route, type, id }) => ({
      route,
      filter: `_type == "${type}" && _id == "${id}"`,
    }))
  ),
};
