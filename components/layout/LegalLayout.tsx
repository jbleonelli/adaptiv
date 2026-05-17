import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  updated?: string;
  children: ReactNode;
};

/**
 * Shared chrome for long-form legal pages (Privacy, Terms, etc.).
 * Centered narrow column, generous line-height, subdued tone — designed
 * for readability rather than marketing flair.
 */
export function LegalLayout({ eyebrow, title, updated, children }: Props) {
  return (
    <div>
      <section className="relative bg-white pt-20 lg:pt-28 pb-10 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[260px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 25%, rgba(255,0,178,0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold text-[#FF00B2] uppercase tracking-[0.2em] mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-h1 text-[#111827] leading-tight mb-4">{title}</h1>
          {updated && (
            <p className="text-sm text-[#64748b]">{updated}</p>
          )}
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-site max-w-3xl">
          <article className="prose-legal text-[#374151] text-[15px] leading-[1.75]">
            {children}
          </article>
        </div>
      </section>
    </div>
  );
}
