"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TritonLogo } from "@/components/ui/TritonLogo";
import { imageSrc } from "@/sanity/imageSrc";
import type { NavLink } from "@/lib/content/siteSettings";

type Props = {
  brandName: string;
  navItems: NavLink[];
  ctaButton: NavLink;
  logo?: unknown;
  logoAlt?: string;
  logoHeightPx?: number;
};

export function Navbar({
  brandName,
  navItems,
  ctaButton,
  logo,
  logoAlt,
  logoHeightPx,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        "bg-white/90 backdrop-blur-lg border-b border-[rgba(0,0,0,0.06)]",
        scrolled && "shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
      )}>
        <nav className="container-site flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="text-[#111827] flex items-center" aria-label={brandName}>
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc(logo as never)}
                alt={logoAlt || brandName}
                style={{ height: `${logoHeightPx ?? 28}px`, width: "auto" }}
                className="block"
              />
            ) : (
              <TritonLogo size={28} dark />
            )}
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname === link.href
                    ? "text-[#111827]"
                    : "text-[rgba(0,0,0,0.55)] hover:text-[#111827]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={ctaButton.href}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#FF00B2] text-white hover:bg-[#e000a0] shadow-[0_4px_20px_rgba(255,0,178,0.25)] hover:shadow-[0_6px_28px_rgba(255,0,178,0.35)] transition-all active:scale-[0.98]"
            >
              {ctaButton.label}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#111827]/70 hover:text-[#111827]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen
                ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
                : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
            </svg>
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-16 bg-white md:hidden overflow-y-auto">
          <div className="container-site py-8 flex flex-col gap-1 border-t border-[rgba(0,0,0,0.06)]">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-4 text-base font-medium border-b border-[rgba(0,0,0,0.05)] transition-colors",
                  pathname === link.href ? "text-[#111827]" : "text-[#111827]/60 hover:text-[#111827]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link href={ctaButton.href} className="block w-full text-center px-6 py-3.5 rounded-full bg-[#FF00B2] text-white font-semibold">
                {ctaButton.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
