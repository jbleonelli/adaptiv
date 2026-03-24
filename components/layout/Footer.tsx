"use client";
import Link from "next/link";
import { TritonLogo } from "@/components/ui/TritonLogo";

const links = {
  Product: [
    { label: "Merlin", href: "/merlin" },
    { label: "Devices", href: "/devices" },
    { label: "Platform", href: "/platform" },
  ],
  Solutions: [
    { label: "Building Intelligence", href: "/solutions#building" },
    { label: "Manufacturing", href: "/solutions#manufacturing" },
    { label: "Energy & Utilities", href: "/solutions#energy" },
    { label: "Logistics", href: "/solutions#logistics" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "ROI", href: "/roi" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.07)] bg-[#f8f9fb]">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="text-[#111827] opacity-80 hover:opacity-100 transition-opacity">
              <TritonLogo size={26} dark />
            </Link>
            <p className="text-sm text-[#4b5563] leading-relaxed max-w-xs">
              The AI That Shows Up. Physical AI for buildings and industrial operations — powered by Merlin.
            </p>
            <p className="text-xs text-[#64748b] tracking-widest uppercase">United States (HQ) · Europe</p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/adaptiv-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#64748b] hover:text-[#FF00B2] hover:border-[rgba(255,0,178,0.2)] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-[#64748b] uppercase tracking-widest">{group}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-[#4b5563] hover:text-[#111827] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(0,0,0,0.07)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} Adaptiv AI Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-[#64748b]">
            <a href="mailto:contact@adaptiv.company" className="hover:text-[#4b5563] transition-colors">
              contact@adaptiv.company
            </a>
            <span className="gradient-text-pink font-semibold">The AI That Shows Up</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
