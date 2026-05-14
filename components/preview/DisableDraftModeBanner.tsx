import Link from "next/link";

/**
 * Renders a small bottom-right pill while the site is being viewed inside
 * Sanity Presentation's iframe. Clicking it exits Draft Mode so the next
 * page load shows the published cache again.
 */
export function DisableDraftModeBanner() {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full bg-black/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur">
      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
      Draft preview
      <Link
        href="/api/draft-mode/disable"
        className="ml-1 rounded-full bg-white/15 px-2 py-0.5 text-[11px] hover:bg-white/30"
      >
        Exit
      </Link>
    </div>
  );
}
