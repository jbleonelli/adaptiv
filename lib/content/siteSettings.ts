export type NavLink = { label: string; href: string };
export type FooterColumn = { title: string; links: NavLink[] };

export type SiteSettingsData = {
  brandName: string;
  tagline: string;
  navItems: NavLink[];
  ctaButton: NavLink;
  footerColumns: FooterColumn[];
  socialLinks: NavLink[];
  contactEmail: string;
  footerTagline: string;
  footerLocations: string;
  footerSlogan: string;
};

export const siteSettingsDefaults: SiteSettingsData = {
  brandName: "Adaptiv AI Technologies",
  tagline:
    "The AI That Shows Up. Physical AI for buildings and industrial operations — powered by Merlin.",
  navItems: [
    { label: "Merlin", href: "/merlin" },
    { label: "Devices", href: "/devices" },
    { label: "Platform", href: "/platform" },
    { label: "Solutions", href: "/solutions" },
    { label: "ROI", href: "/roi" },
    { label: "Company", href: "/company" },
    { label: "Blog", href: "/blog" },
  ],
  ctaButton: { label: "Login", href: "/login" },
  footerColumns: [
    {
      title: "Product",
      links: [
        { label: "Merlin", href: "/merlin" },
        { label: "Devices", href: "/devices" },
        { label: "Platform", href: "/platform" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Building Intelligence", href: "/solutions#building" },
        { label: "Manufacturing", href: "/solutions#manufacturing" },
        { label: "Energy & Utilities", href: "/solutions#energy" },
        { label: "Logistics", href: "/solutions#logistics" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "ROI", href: "/roi" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/company/adaptiv-systems" },
  ],
  contactEmail: "contact@adaptiv.company",
  footerTagline:
    "The AI That Shows Up. Physical AI for buildings and industrial operations — powered by Merlin.",
  footerLocations: "United States (HQ) · Europe",
  footerSlogan: "The AI That Shows Up",
};
