import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SideLogo } from "@/components/layout/SideLogo";
import { FloatingMenu } from "@/components/layout/FloatingMenu";
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
  const sideLogo = settings.sideLogo;
  const showSideLogo = sideLogo?.enabled !== false;
  return (
    <>
      {showSideLogo && (
        <SideLogo
          brandName={settings.brandName}
          wordmarkImage={sideLogo?.wordmark}
          gradientStart={sideLogo?.gradientStart}
          gradientEnd={sideLogo?.gradientEnd}
          thickness={
            sideLogo?.thicknessPx
              ? `${sideLogo.thicknessPx}px`
              : undefined
          }
          insetLeftPx={sideLogo?.insetLeftPx}
          insetBottomPx={sideLogo?.insetBottomPx}
          mobileHeightPx={sideLogo?.mobileHeightPx}
        />
      )}
      <FloatingMenu
        navItems={settings.navItems}
        ctaButton={settings.ctaButton}
      />
      <main>{children}</main>
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
