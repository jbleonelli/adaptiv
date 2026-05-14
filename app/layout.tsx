import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisableDraftModeBanner } from "@/components/preview/DisableDraftModeBanner";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import {
  siteSettingsDefaults,
  type SiteSettingsData,
} from "@/lib/content/siteSettings";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adaptiv.company"),
  title: {
    default: "Adaptiv AI Technologies — The AI That Shows Up",
    template: "%s | Adaptiv AI Technologies",
  },
  description:
    "Merlin is the AI that runs alongside your team — watching every sensor, understanding every space, responding to every situation. Physical AI for buildings and industrial operations.",
  keywords: [
    "Physical AI",
    "Merlin AI",
    "Smart Display",
    "building intelligence",
    "industrial IoT",
    "facility management",
    "Adaptiv AI Technologies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptiv.company",
    siteName: "Adaptiv AI Technologies",
    title: "Adaptiv AI Technologies — The AI That Shows Up",
    description: "Physical AI for buildings and industrial operations. Meet Merlin.",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptiv AI Technologies — The AI That Shows Up",
    description: "Physical AI for buildings and industrial operations. Meet Merlin.",
  },
  icons: { icon: "/brand/favicon.ico", shortcut: "/brand/favicon.ico" },
};

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

async function getSiteSettings(): Promise<SiteSettingsData> {
  const remote = await sanityFetch<SiteSettingsData>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
  return remote ?? siteSettingsDefaults;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, draft] = await Promise.all([
    getSiteSettings(),
    draftMode(),
  ]);
  const isDraft = draft.isEnabled;
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#111827]`}>
        <Navbar
          brandName={settings.brandName}
          navItems={settings.navItems}
          ctaButton={settings.ctaButton}
        />
        <main className="pt-[72px]">{children}</main>
        <Footer
          brandName={settings.brandName}
          footerTagline={settings.footerTagline}
          footerLocations={settings.footerLocations}
          footerSlogan={settings.footerSlogan}
          contactEmail={settings.contactEmail}
          socialLinks={settings.socialLinks}
          footerColumns={settings.footerColumns}
        />
        {isDraft && (
          <>
            <VisualEditing />
            <DisableDraftModeBanner />
          </>
        )}
      </body>
    </html>
  );
}
