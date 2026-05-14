import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisableDraftModeBanner } from "@/components/preview/DisableDraftModeBanner";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import {
  siteSettingsDefaults,
  type SiteSettingsData,
} from "@/lib/content/siteSettings";

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

async function getSiteSettings(): Promise<SiteSettingsData> {
  const remote = await sanityFetch<SiteSettingsData>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
  return remote ?? siteSettingsDefaults;
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, draft] = await Promise.all([
    getSiteSettings(),
    draftMode(),
  ]);
  const isDraft = draft.isEnabled;
  return (
    <>
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
    </>
  );
}
