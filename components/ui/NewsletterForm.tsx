"use client";
export function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@company.com"
        className="flex-1 px-4 py-3 rounded-full bg-white border border-[rgba(15,32,68,0.12)] text-[#0F2044] text-sm placeholder:text-[#4b5563] focus:outline-none focus:border-[#1A6FD4] transition-colors"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-[#1A6FD4] text-white text-sm font-semibold hover:bg-[#1559b0] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
