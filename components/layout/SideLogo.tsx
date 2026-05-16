"use client";

import Link from "next/link";
import { imageSrc } from "@/sanity/imageSrc";

const DEFAULT_WORDMARK_W = 1024;
const DEFAULT_WORDMARK_H = 307;
const DEFAULT_WORDMARK_URL = "/brand/adaptiv-wordmark.png";

type Props = {
  brandName: string;
  /** CSS value — visual thickness of the rotated wordmark on desktop. */
  thickness?: string;
  /** Distance from the left edge of the viewport, in px (desktop). */
  insetLeftPx?: number;
  /** Distance from the bottom edge of the viewport, in px (desktop). */
  insetBottomPx?: number;
  /** Visual height of the small mobile wordmark, in px. */
  mobileHeightPx?: number;
  /** Color at the bottom of the rotated wordmark (where the "A" sits). */
  gradientStart?: string;
  /** Color at the top of the rotated wordmark (where the "V" sits). */
  gradientEnd?: string;
  /** Optional Sanity image reference overriding the default wordmark. */
  wordmarkImage?: unknown;
  /**
   * Optional aspect ratio override (width / height) for a custom wordmark.
   * Defaults to the bundled wordmark's natural ratio.
   */
  wordmarkAspect?: number;
};

function gradientStyle(
  start: string,
  end: string,
  url: string,
  direction: "to left" | "to right"
): React.CSSProperties {
  return {
    background: `linear-gradient(${direction}, ${end} 0%, ${start} 100%)`,
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };
}

/**
 * ADAPTIV wordmark, rendered in two variants:
 *   • Desktop (md+): rotated -90deg and anchored to the bottom-left of the
 *     viewport. Sized to the wordmark's natural aspect ratio so the masked
 *     image fills edge-to-edge with no internal padding.
 *   • Mobile (< md): a small horizontal wordmark anchored to the top-left,
 *     mirroring the floating menu button on the right.
 *
 * Both variants share the same gradient and source image so the CMS controls
 * a single visual identity across breakpoints.
 */
export function SideLogo({
  brandName,
  thickness = "clamp(64px, 7vw, 96px)",
  insetLeftPx = 28,
  insetBottomPx = 80,
  mobileHeightPx = 22,
  gradientStart = "#FF00B2",
  gradientEnd = "#2C3680",
  wordmarkImage,
  wordmarkAspect,
}: Props) {
  const wordmarkUrl = wordmarkImage
    ? imageSrc(wordmarkImage as never)
    : DEFAULT_WORDMARK_URL;
  const aspect =
    wordmarkAspect && wordmarkAspect > 0
      ? wordmarkAspect
      : DEFAULT_WORDMARK_W / DEFAULT_WORDMARK_H;
  const desktopLength = `calc(${thickness} * ${aspect})`;

  return (
    <>
      {/* Desktop — rotated vertical wordmark, bottom-left */}
      <Link
        href="/"
        aria-label={brandName}
        className="fixed z-40 hidden md:block select-none"
        style={{
          bottom: `${insetBottomPx}px`,
          left: `${insetLeftPx}px`,
          width: thickness,
          height: desktopLength,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: desktopLength,
            height: thickness,
            transformOrigin: "center center",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            display: "block",
            ...gradientStyle(gradientStart, gradientEnd, wordmarkUrl, "to left"),
          }}
        />
      </Link>

      {/* Mobile — small horizontal wordmark, top-left */}
      <Link
        href="/"
        aria-label={brandName}
        className="fixed top-5 left-5 z-40 md:hidden select-none block"
        style={{
          width: `${Math.round(mobileHeightPx * aspect)}px`,
          height: `${mobileHeightPx}px`,
        }}
      >
        <span
          aria-hidden="true"
          className="block w-full h-full"
          style={gradientStyle(
            gradientStart,
            gradientEnd,
            wordmarkUrl,
            "to right"
          )}
        />
      </Link>
    </>
  );
}
