# FloatingMenu

A self-contained floating circular button that opens a popup navigation
panel. Hamburger lines (closed) cross-fade with a rotating branded icon
(open). The panel cascades each item in with a per-item delay.

Built from the Adaptiv Systems site (May 2026), packaged here so you can
copy-paste it into any React project.

## What you get

- **One file:** `FloatingMenu.tsx` (~370 lines, fully typed)
- **Zero CSS:** no Tailwind, no styled-components, no CSS file. All
  styling is inline + one tiny scoped `<style>` block for `:hover` states.
- **Zero router lock-in:** ships with a plain `<a>` renderer; plug in
  `next/link`, `react-router`, etc. via the `renderLink` prop.
- **Zero assets:** bring your own icon as either a URL string or any
  React node (inline SVG works great).

## Install

1. Copy `FloatingMenu.tsx` into your project (e.g. `src/components/`).
2. That's it. The only peer dependency is **React 18+**.

## Basic usage

```tsx
import { FloatingMenu } from "./FloatingMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingMenu
        icon="/brand/my-icon.png"
        iconAlt=""
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Talk to us", href: "/contact" }}
      />
      {children}
    </>
  );
}
```

## With Next.js (App Router)

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FloatingMenu } from "@/components/FloatingMenu";

export function SiteNav() {
  const pathname = usePathname();
  return (
    <FloatingMenu
      icon="/brand/my-icon.png"
      currentPath={pathname}
      items={[
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
      ]}
      cta={{ label: "Get started", href: "/contact" }}
      renderLink={({ href, className, style, children }) => (
        <Link href={href} className={className} style={style}>
          {children}
        </Link>
      )}
    />
  );
}
```

## With React Router

```tsx
import { Link, useLocation } from "react-router-dom";
import { FloatingMenu } from "./components/FloatingMenu";

export function SiteNav() {
  const location = useLocation();
  return (
    <FloatingMenu
      icon="/brand/my-icon.png"
      currentPath={location.pathname}
      items={[
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
      ]}
      renderLink={({ href, className, style, children }) => (
        <Link to={href} className={className} style={style}>
          {children}
        </Link>
      )}
    />
  );
}
```

## With an inline SVG icon (no image asset)

```tsx
<FloatingMenu
  items={[/* ... */]}
  icon={
    <svg viewBox="0 0 48 48" width={48} height={48}>
      <path d="M12 38 L24 8 L36 38" stroke="white" strokeWidth="4" fill="none" />
      <path d="M16 30 L32 30" stroke="white" strokeWidth="4" />
    </svg>
  }
/>
```

When you pass a React node instead of a URL, it's centered inside the
button and gets the same rotate-from-180° + scale-from-0.5 animation.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `items` | `{ label, href }[]` | **required** | The nav rows. |
| `icon` | `string \| ReactNode` | **required** | Image URL or any JSX. |
| `iconAlt` | `string` | `""` | Only applied when `icon` is a URL. |
| `cta` | `{ label, href }` | — | Optional dark pinned button at the bottom. |
| `currentPath` | `string` | — | Item whose `href` matches gets the accent treatment. |
| `accentColor` | `string` | `"#FF00B2"` | Hex (`#RRGGBB` or `#RGB`) or any CSS color string. |
| `renderLink` | function | plain `<a>` | Plug in `next/link`, `Link to`, etc. |
| `positionStyle` | `CSSProperties` | — | Overrides for the button position (e.g. `{ top: 40, left: 20, right: 'auto' }`). |
| `panelPositionStyle` | `CSSProperties` | — | Overrides for the panel position. |
| `eyebrow` | `string` | `"// Navigation"` | Empty string to hide. |
| `closeHint` | `string` | `"ESC"` | Empty string to hide. |
| `closeOnPathChange` | `boolean` | `true` | Auto-close when `currentPath` changes. |

## Customizing the brand color

```tsx
<FloatingMenu accentColor="#10B981" items={items} icon={icon} />
```

`accentColor` cascades to: the hamburger lines, the button border ring,
the box-shadow tint, the active-item indicator bar + number color, the
chevron stroke on the active item, the CTA dot, and the CTA hover state.

## Move it to a different corner

```tsx
<FloatingMenu
  items={items}
  icon={icon}
  positionStyle={{ top: "auto", bottom: 24, right: 24 }}
  panelPositionStyle={{ top: "auto", bottom: 88, right: 24, transformOrigin: "bottom right" }}
/>
```

## Notes

- **`"use client"`**: the directive at the top is harmless in non-Next
  projects — it's just a comment to Next.js. Strip it if your linter
  complains.
- **Focus trap**: the popup is intentionally NOT a focus-trapping modal.
  It behaves like a popover. Tab order leaves the panel naturally and
  ESC closes it. If you need a full modal, wrap with a focus-trap library.
- **Hover styles**: a single scoped `<style>` block at the top of the
  rendered tree handles `:hover` on the button, rows, chevrons, and CTA.
  Class names are prefixed `_fm_*` to minimize collision risk.
- **No portal**: the component renders in place. Because everything is
  `position: fixed` with high `z-index`, this is fine in 99% of cases.
  If you have a stacking-context parent (a `transform: translate3d`,
  `filter`, or `opacity < 1` on an ancestor), wrap in `createPortal` to
  document.body yourself.

## File

Just one: [`FloatingMenu.tsx`](./FloatingMenu.tsx).
