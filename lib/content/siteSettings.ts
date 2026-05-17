export type NavLink = { label: string; href: string };
export type FooterColumn = { title: string; links: NavLink[] };

export type SideLogoSettings = {
  enabled?: boolean;
  wordmark?: unknown;
  gradientStart?: string;
  gradientEnd?: string;
  thicknessPx?: number;
  insetLeftPx?: number;
  insetBottomPx?: number;
  mobileHeightPx?: number;
};

export type ImageShadowIntensity = "soft" | "medium" | "strong";

export type ImageDefaultsSettings = {
  rounded?: boolean;
  radiusPx?: number;
  shadow?: boolean;
  shadowIntensity?: ImageShadowIntensity;
  maxWidthPx?: number;
};

export type SiteSettingsData = {
  brandName: string;
  tagline: string;
  logo?: unknown;
  logoAlt?: string;
  logoHeightPx?: number;
  sideLogo?: SideLogoSettings;
  imageDefaults?: ImageDefaultsSettings;
  navItems: NavLink[];
  ctaButton: NavLink;
  footerColumns: FooterColumn[];
  /** Small links rendered next to the copyright (Privacy, Terms, Status…). */
  legalLinks?: NavLink[];
  socialLinks: NavLink[];
  contactEmail: string;
  footerTagline: string;
  footerLocations: string;
  footerSlogan: string;
};

export const siteSettingsDefaults: SiteSettingsData = {
  brandName: "Adaptiv Systems",
  tagline:
    "Physical AI for the buildings of the world. A fleet of specialized agents reasoning continuously over the real-world signals from your buildings.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Merlin", href: "/merlin" },
    { label: "Agents", href: "/agents" },
    { label: "Devices", href: "/devices" },
    { label: "Solutions", href: "/solutions" },
    { label: "Company", href: "/company" },
  ],
  ctaButton: { label: "Talk to us", href: "/contact" },
  footerColumns: [
    {
      title: "Product",
      links: [
        { label: "Merlin", href: "/merlin" },
        { label: "Smart Display & Sensor Library", href: "/devices" },
      ],
    },
    {
      title: "Where it goes",
      links: [
        { label: "Cold-chain logistics", href: "/solutions#cold-chain" },
        { label: "Industrial & manufacturing", href: "/solutions#industrial" },
        { label: "Data centers & critical infrastructure", href: "/solutions#data-centers" },
        { label: "Hospitality & care", href: "/solutions#hospitality-care" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Adaptiv Systems", href: "/company" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "System Status", href: "/status" },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/company/adaptiv-systems" },
  ],
  contactEmail: "contact@adaptiv.company",
  footerTagline:
    "Physical AI for the buildings of the world. The hardware came first. The data came from the hardware. The AI is built on the data.",
  footerLocations: "United States · Europe",
  footerSlogan: "Physical AI for the buildings of the world.",
};
