import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Physical AI Insights",
  description: "Ideas, research, and stories from the team building Physical AI for buildings and industrial operations.",
};

const posts = [
  {
    slug: "introducing-merlin",
    category: "Product Updates",
    title: "Introducing Merlin: Your New AI Co-Worker",
    excerpt: "Merlin is not another AI platform. It is the first AI designed to act in the physical world — always present, always working, always reliable. Here's how we built it and why.",
    readTime: "6 min read",
    date: "March 2026",
    color: "#6D28D9",
  },
  {
    slug: "smart-display-why-ai-on-wall",
    category: "Product Updates",
    title: "The Smart Display: Why We Put AI on the Wall",
    excerpt: "Every decision about the Smart Display came back to one question: where does AI need to be for people to actually use it? The answer was on the wall, in the room, where the work happens.",
    readTime: "5 min read",
    date: "March 2026",
    color: "#FF00B2",
  },
  {
    slug: "what-is-physical-ai",
    category: "Industry Insights",
    title: "What Is Physical AI?",
    excerpt: "There is a category of AI that doesn't live on a screen. It lives in buildings, machines, and infrastructure. It doesn't wait to be asked. It acts. We call it Physical AI — and it changes everything.",
    readTime: "7 min read",
    date: "March 2026",
    color: "#0F2044",
  },
  {
    slug: "intelligent-bathroom-merlin-facilities",
    category: "Customer Stories",
    title: "The Intelligent Bathroom: How Merlin Changed Facilities Management",
    excerpt: "Nobody talks about the bathroom. We think it is the most important room in any Merlin deployment. Here's why, and what happened when a major office complex deployed Merlin across 40 bathrooms.",
    readTime: "4 min read",
    date: "February 2026",
    color: "#14b8a6",
  },
  {
    slug: "lte-vs-lora-engineering-decision",
    category: "Technical Deep Dives",
    title: "Why We Use LTE Instead of LoRa: The Engineering Decision Explained",
    excerpt: "LoRa is the default choice for IoT sensors. We chose LTE instead. Not because it was easier — it wasn't — but because it was right for Physical AI. Here's the full engineering rationale.",
    readTime: "8 min read",
    date: "February 2026",
    color: "#FF00B2",
  },
  {
    slug: "3-year-battery-how-we-did-it",
    category: "Technical Deep Dives",
    title: "3-Year Battery Life: How Adaptiv's Firmware Team Did It",
    excerpt: "Shipping hardware that runs for three years without a charge is not a marketing claim — it is the result of thousands of engineering decisions. Our firmware lead explains the most important ones.",
    readTime: "9 min read",
    date: "January 2026",
    color: "#14b8a6",
  },
  {
    slug: "facilities-team-new-coworker",
    category: "Building Intelligence",
    title: "The Facilities Team's New Best Co-Worker",
    excerpt: "A facilities manager's job is to react — to complaints, to failures, to messes that should have been caught earlier. Merlin changes the job from reactive to proactive. Here's what that looks like in practice.",
    readTime: "5 min read",
    date: "January 2026",
    color: "#6D28D9",
  },
  {
    slug: "smart-display-to-action-60-seconds",
    category: "Building Intelligence",
    title: "From Smart Display to Autonomous Action: 60 Seconds in a Merlin-Powered Building",
    excerpt: "It's 08:47 on a Tuesday. A sensor detects that a meeting room has been occupied for four hours. Here is what happens in the next 60 seconds — and why it matters.",
    readTime: "3 min read",
    date: "December 2025",
    color: "#FF00B2",
  },
];

const categories = ["All", "Product Updates", "Building Intelligence", "Industry Insights", "Customer Stories", "Technical Deep Dives"];

const badgeColors: Record<string, "blue" | "green" | "pink" | "white" | "dim"> = {
  "Product Updates": "blue",
  "Building Intelligence": "green",
  "Industry Insights": "dim",
  "Customer Stories": "pink",
  "Technical Deep Dives": "white",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-[#07090f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
        <div className="container-site relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-h1 text-white mb-4">Physical AI Insights</h1>
          <p className="text-body-lg text-white/65">Ideas, research, and stories from the team building Physical AI for buildings and industrial operations.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-[#0d1120] sticky top-16 z-30">
        <div className="container-site">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors bg-[#07090f] text-white/50 hover:bg-[rgba(26,111,212,0.08)] hover:text-[#FF00B2]">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 bg-[#0d1120]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full flex flex-col overflow-hidden group-hover:shadow-[0_8px_32px_rgba(15,32,68,0.1)]">
                    {/* Colour bar */}
                    <div className="h-1 w-full" style={{ background: post.color }} />
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <Badge variant={badgeColors[post.category] ?? "dim"}>{post.category}</Badge>
                      <h2 className="text-h4 text-white group-hover:text-[#FF00B2] transition-colors leading-snug">{post.title}</h2>
                      <p className="text-sm text-white/50 leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-[rgba(255,255,255,0.07)]">
                        <span className="text-xs text-white/30">{post.date}</span>
                        <span className="text-xs text-white/30">{post.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#07090f]">
        <div className="container-site max-w-xl text-center">
          <Reveal>
            <h2 className="text-h3 text-white mb-3">Stay ahead of Physical AI.</h2>
            <p className="text-body text-white/50 mb-6">Monthly insights from the Adaptiv team.</p>
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
