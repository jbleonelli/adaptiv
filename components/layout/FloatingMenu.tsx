"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/content/siteSettings";

type Props = {
  navItems: NavLink[];
  ctaButton: NavLink;
};

export function FloatingMenu({ navItems, ctaButton }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={cn(
          "fixed top-5 right-5 md:top-6 md:right-6 z-50",
          "w-12 h-12 rounded-full overflow-hidden",
          "flex items-center justify-center",
          "transition-all duration-300 ease-out",
          "hover:scale-105 active:scale-95",
          "border",
          open
            ? "bg-transparent p-0 border-transparent shadow-[0_6px_22px_rgba(255,0,178,0.25)]"
            : "bg-white/85 backdrop-blur-md border-[rgba(255,0,178,0.55)] shadow-[0_2px_10px_rgba(255,0,178,0.15)]"
        )}
      >
        <span
          className="absolute inset-0 flex items-center justify-center transition-opacity ease-out"
          style={{
            opacity: open ? 0 : 1,
            transitionDuration: open ? "120ms" : "240ms",
            transitionDelay: open ? "0ms" : "180ms",
          }}
          aria-hidden={open}
        >
          <span className="relative w-5 h-5 block">
            <span
              className="absolute left-0 right-0 h-[1.5px] rounded-full bg-[#FF00B2]"
              style={{ top: "calc(50% - 4px)" }}
            />
            <span
              className="absolute left-0 right-0 h-[1.5px] rounded-full bg-[#FF00B2]"
              style={{ top: "calc(50% + 3px)" }}
            />
          </span>
        </span>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/adaptiv-a-icon.png"
          alt=""
          draggable={false}
          aria-hidden={!open}
          className="absolute inset-0 w-full h-full block transition-all duration-500 ease-out"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "rotate(0deg) scale(1.12)" : "rotate(-180deg) scale(0.5)",
            clipPath: "circle(46% at 50% 50%)",
          }}
        />
      </button>

      <div
        ref={panelRef}
        className={cn(
          "fixed top-20 md:top-24 right-5 md:right-6 z-40",
          "w-[min(86vw,340px)]",
          "rounded-2xl bg-white/96 backdrop-blur-xl",
          "border border-[rgba(0,0,0,0.06)]",
          "shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.02)]",
          "transition-all duration-300 ease-out origin-top-right",
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="px-5 pt-4 pb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium tracking-[0.18em] text-[rgba(0,0,0,0.4)] uppercase tabular-nums">
            // Navigation
          </span>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[rgba(0,0,0,0.3)] tabular-nums">
            ESC
          </span>
        </div>

        <nav className="flex flex-col px-2 pb-2">
          {navItems.map((link, i) => {
            const isActive = pathname === link.href;
            const number = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative flex items-center gap-4 px-3 py-2.5 rounded-md transition-colors duration-150",
                  "hover:bg-[rgba(0,0,0,0.035)]"
                )}
                style={{
                  transitionDelay: open ? `${i * 24}ms` : "0ms",
                }}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[#FF00B2]"
                  />
                )}
                <span
                  className={cn(
                    "text-[11px] font-medium tabular-nums tracking-wider transition-colors",
                    isActive ? "text-[#FF00B2]" : "text-[rgba(0,0,0,0.35)] group-hover:text-[rgba(0,0,0,0.55)]"
                  )}
                >
                  {number}
                </span>
                <span
                  className={cn(
                    "flex-1 text-[14px] tracking-tight transition-colors",
                    isActive
                      ? "text-[#111827] font-semibold"
                      : "text-[rgba(0,0,0,0.7)] font-medium group-hover:text-[#111827]"
                  )}
                >
                  {link.label}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "transition-all duration-200",
                    isActive
                      ? "text-[#FF00B2] opacity-100 translate-x-0"
                      : "text-[rgba(0,0,0,0.35)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            );
          })}
        </nav>

        <div className="mx-5 border-t border-[rgba(0,0,0,0.06)]" />

        <div className="p-3">
          <Link
            href={ctaButton.href}
            className={cn(
              "group flex items-center justify-between w-full px-4 py-3 rounded-lg",
              "bg-[#111827] text-white text-[13px] font-semibold tracking-tight",
              "hover:bg-[#FF00B2] transition-colors duration-200"
            )}
          >
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B2] group-hover:bg-white transition-colors" />
              {ctaButton.label}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
