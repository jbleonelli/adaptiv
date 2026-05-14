import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    brandName,
    tagline,
    logo,
    navItems[]{ label, href },
    footerColumns[]{
      title,
      links[]{ label, href }
    },
    socialLinks[]{ label, href },
    contactEmail
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    metaTitle,
    metaDescription,
    hero{
      eyebrow,
      titleLines,
      gradientWord,
      bodyPrimary,
      bodySecondary,
      primaryCta{ label, href },
      secondaryCta{ label, href },
      chips[]{ label, dotColor },
      heroImagePrimary{ asset->, alt },
      heroImageSecondary{ asset->, alt },
      heroComposite{ asset->, alt },
      heroCompositeMaxWidthPx
    },
    physicalAI{
      sectionNumber,
      eyebrow,
      titleLines,
      body,
      definition
    },
    deviceShowcase{
      sectionNumber,
      eyebrow,
      title,
      body,
      image{ asset->, alt },
      sensorStrip[]{ label, value },
      featureBadges[]{ label }
    },
    merlinIntro{
      sectionNumber,
      eyebrow,
      titleMain,
      titleHighlight,
      body,
      ctaLabel,
      ctaHref
    },
    traits[]{
      num,
      title,
      body,
      color,
      icon
    },
    useCasesIntro{
      sectionNumber,
      eyebrow,
      titleLines
    },
    useCases[]{
      num,
      title,
      color,
      body,
      points
    },
    differencesSection{
      sectionNumber,
      eyebrow,
      titleLines
    },
    differences[]{ text },
    finalCta{
      eyebrow,
      titleLines,
      body,
      primaryCta{ label, href },
      secondaryCta{ label, href }
    }
  }
`;
