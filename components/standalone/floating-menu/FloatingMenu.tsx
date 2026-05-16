"use client";

/**
 * FloatingMenu — a self-contained floating circular button that opens a
 * popup navigation panel. Hamburger lines (closed) cross-fade with a
 * rotating branded icon (open). The panel cascades each item in with a
 * staggered delay.
 *
 * Designed to be copy-pasted into ANY React project:
 *   - No Tailwind, no styled-components, no CSS file required.
 *   - No router required — pass `renderLink` to wire up next/link,
 *     react-router, etc. Defaults to plain <a>.
 *   - No external assets — pass your icon as either an image URL (string)
 *     or any React node (inline <svg>, etc.).
 *
 * Peer dep: React 18+. That's it.
 *
 * Author: built from the Adaptiv Systems site (May 2026).
 */
import {
  Fragment,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type FloatingMenuItem = {
  label: string;
  href: string;
};

export type FloatingMenuLinkRenderProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export type FloatingMenuProps = {
  /** Items shown in the popup panel. */
  items: FloatingMenuItem[];
  /** Optional pinned CTA at the bottom of the panel. */
  cta?: FloatingMenuItem;
  /** Pass your active path (e.g. router.pathname) to highlight the matching item. */
  currentPath?: string;
  /** Image URL or React node shown inside the button when open. */
  icon: string | ReactNode;
  /** Alt text — only applied when `icon` is a string. */
  iconAlt?: string;
  /** Accent color for hamburger lines, button border, active item, CTA dot. */
  accentColor?: string;
  /** Custom link renderer for client-side routing. Defaults to <a>. */
  renderLink?: (props: FloatingMenuLinkRenderProps) => ReactNode;
  /** Override the floating-button position. Default: fixed top:20, right:20. */
  positionStyle?: CSSProperties;
  /** Override the panel position. Default: fixed top:80, right:20. */
  panelPositionStyle?: CSSProperties;
  /** Eyebrow text shown in the popup header. Empty string to hide. */
  eyebrow?: string;
  /** Small ESC hint in the header. Empty string to hide. */
  closeHint?: string;
  /** Close the panel automatically when `currentPath` changes. Default true. */
  closeOnPathChange?: boolean;
};

function defaultRenderLink({
  href,
  className,
  style,
  children,
}: FloatingMenuLinkRenderProps) {
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}

export function FloatingMenu({
  items,
  cta,
  currentPath,
  icon,
  iconAlt = "",
  accentColor = "#FF00B2",
  renderLink = defaultRenderLink,
  positionStyle,
  panelPositionStyle,
  eyebrow = "// Navigation",
  closeHint = "ESC",
  closeOnPathChange = true,
}: FloatingMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on path change
  useEffect(() => {
    if (!closeOnPathChange) return;
    setOpen(false);
  }, [currentPath, closeOnPathChange]);

  // ESC + click-outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const accent = accentColor;
  const accentBorder = withAlpha(accent, 0.55);
  const accentShadowOpen = withAlpha(accent, 0.25);
  const accentShadowClosed = withAlpha(accent, 0.15);

  // Class names used by the scoped <style> block below.
  const BTN = "_fm_btn";
  const ROW = "_fm_row";
  const CHEV = "_fm_chev";
  const CTA = "_fm_cta";
  const DOT = "_fm_cta_dot";

  const iconNode: ReactNode =
    typeof icon === "string" ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon}
        alt={iconAlt}
        draggable={false}
        aria-hidden={!open}
        style={iconAnimStyle(open)}
      />
    ) : (
      <span aria-hidden={!open} style={{ ...iconAnimStyle(open), display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </span>
    );

  return (
    <>
      <style>{`
        .${BTN}:hover { transform: scale(1.05); }
        .${BTN}:active { transform: scale(0.95); }
        .${ROW} { transition: background-color 150ms ease-out; }
        .${ROW}:hover { background: rgba(0,0,0,0.035); }
        .${ROW} .${CHEV} {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 200ms ease-out, transform 200ms ease-out;
        }
        .${ROW}:hover .${CHEV} { opacity: 1; transform: translateX(0); }
        .${CTA} { transition: background-color 200ms ease-out; }
        .${CTA}:hover { background: ${accent}; }
        .${CTA}:hover .${DOT} { background: #fff; }
      `}</style>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={BTN}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 50,
          width: 48,
          height: 48,
          borderRadius: 999,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          cursor: "pointer",
          transition:
            "transform 300ms ease-out, background-color 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
          background: open ? "transparent" : "rgba(255,255,255,0.85)",
          backdropFilter: open ? undefined : "blur(12px)",
          WebkitBackdropFilter: open ? undefined : "blur(12px)",
          border: `1px solid ${open ? "transparent" : accentBorder}`,
          boxShadow: open
            ? `0 6px 22px ${accentShadowOpen}`
            : `0 2px 10px ${accentShadowClosed}`,
          ...positionStyle,
        }}
      >
        {/* Hamburger lines (closed state) */}
        <span
          aria-hidden={open}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: open ? 0 : 1,
            transition: open
              ? "opacity 120ms ease-out 0ms"
              : "opacity 240ms ease-out 180ms",
          }}
        >
          <span style={{ position: "relative", width: 20, height: 20, display: "block" }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "calc(50% - 4px)",
                height: 1.5,
                borderRadius: 999,
                background: accent,
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "calc(50% + 3px)",
                height: 1.5,
                borderRadius: 999,
                background: accent,
              }}
            />
          </span>
        </span>

        {iconNode}
      </button>

      <div
        ref={panelRef}
        role="dialog"
        aria-hidden={!open}
        style={{
          position: "fixed",
          top: 80,
          right: 20,
          zIndex: 40,
          width: "min(86vw, 340px)",
          borderRadius: 16,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow:
            "0 24px 60px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.02)",
          transformOrigin: "top right",
          transition: "opacity 300ms ease-out, transform 300ms ease-out",
          opacity: open ? 1 : 0,
          transform: open
            ? "scale(1) translateY(0)"
            : "scale(0.95) translateY(-8px)",
          pointerEvents: open ? "auto" : "none",
          ...panelPositionStyle,
        }}
      >
        {(eyebrow || closeHint) && (
          <div
            style={{
              padding: "16px 20px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {eyebrow ? (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.4)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {eyebrow}
              </span>
            ) : <span />}
            {closeHint ? (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: "rgba(0,0,0,0.3)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {closeHint}
              </span>
            ) : null}
          </div>
        )}

        <nav style={{ display: "flex", flexDirection: "column", padding: "0 8px 8px" }}>
          {items.map((item, i) => {
            const active = currentPath === item.href;
            const number = String(i + 1).padStart(2, "0");

            const rowContent = (
              <>
                {active && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 3,
                      height: 20,
                      borderRadius: 999,
                      background: accent,
                    }}
                  />
                )}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "0.05em",
                    color: active ? accent : "rgba(0,0,0,0.35)",
                  }}
                >
                  {number}
                </span>
                <span
                  style={{
                    flex: 1,
                    fontSize: 14,
                    letterSpacing: "-0.01em",
                    color: active ? "#111827" : "rgba(0,0,0,0.7)",
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {item.label}
                </span>
                <svg
                  className={CHEV}
                  width={12}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={active ? accent : "rgba(0,0,0,0.35)"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={active ? { opacity: 1, transform: "translateX(0)" } : undefined}
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </>
            );

            const linkStyle: CSSProperties = {
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 12px",
              borderRadius: 6,
              textDecoration: "none",
              color: "inherit",
              transitionDelay: open ? `${i * 24}ms` : "0ms",
            };

            return (
              <Fragment key={item.href}>
                {renderLink({
                  href: item.href,
                  className: ROW,
                  style: linkStyle,
                  children: rowContent,
                })}
              </Fragment>
            );
          })}
        </nav>

        {cta && (
          <>
            <div style={{ margin: "0 20px", borderTop: "1px solid rgba(0,0,0,0.06)" }} />
            <div style={{ padding: 12 }}>
              {renderLink({
                href: cta.href,
                className: CTA,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 8,
                  background: "#111827",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                },
                children: (
                  <>
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        className={DOT}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 999,
                          background: accent,
                          display: "inline-block",
                        }}
                      />
                      {cta.label}
                    </span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </>
                ),
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// AdaptivAIcon — the Adaptiv "A" mark, inlined as a square SVG with the
// brand gradient (deep indigo → magenta, diagonal). Optional companion
// component — drop it into FloatingMenu's `icon` prop and the floating
// button's circular clipPath hides the square corners, leaving just the
// gradient circle with the white "A" inside.
//
//   <FloatingMenu items={...} icon={<AdaptivAIcon />} />
//
// Uses useId() so multiple instances on the same page don't collide on
// the gradient id.

export type AdaptivAIconProps = {
  /** Rendered width/height. Default 128. */
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  /** Accessible label. When set, the icon is announced; otherwise it is hidden from AT. */
  title?: string;
};

export function AdaptivAIcon({
  size = 128,
  className,
  style,
  title,
}: AdaptivAIconProps) {
  const gradientId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient
          id={gradientId}
          x1="11.32"
          y1="116.68"
          x2="114.76"
          y2="13.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#000064" />
          <stop offset="0.37" stopColor="#60006d" />
          <stop offset="0.59" stopColor="#a71992" />
          <stop offset="0.77" stopColor="#d011a0" />
          <stop offset="0.91" stopColor="#ed09ab" />
          <stop offset="1" stopColor="#ff00b2" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" fill={`url(#${gradientId})`} />
      <path
        fill="#fff"
        d="m103.97,90.19l-24.74-64.46c-3-7.81-10.63-13.05-18.99-13.05s-15.99,5.24-18.99,13.05l-17.21,44.84c-4.65,12.11,4.29,25.13,17.27,25.13h0c7.66,0,14.53-4.72,17.27-11.87l1.66-4.32,9.19,23.95c2.73,7.1,9.67,11.87,17.27,11.87,6.09,0,11.79-3,15.25-8.02,3.45-5.02,4.21-11.42,2.02-17.11Zm-17.27,9.92h0c-1.36,0-2.59-.84-3.07-2.11l-23.39-60.93-16.66,43.41h-7.06l18.93-49.31c.76-1.98,2.67-3.29,4.79-3.29h0c2.13,0,4.03,1.31,4.79,3.29l24.74,64.46c.83,2.16-.76,4.47-3.07,4.47Z"
      />
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// internals

function iconAnimStyle(open: boolean): CSSProperties {
  return {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    display: "block",
    transition: "opacity 500ms ease-out, transform 500ms ease-out",
    opacity: open ? 1 : 0,
    transform: open
      ? "rotate(0deg) scale(1.12)"
      : "rotate(-180deg) scale(0.5)",
    clipPath: "circle(46% at 50% 50%)",
  };
}

/** Convert "#RRGGBB" or "#RGB" to rgba() with the given alpha. Passes through other formats unchanged. */
function withAlpha(color: string, alpha: number): string {
  const hex = color.trim();
  if (!hex.startsWith("#")) return color;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    return color;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
