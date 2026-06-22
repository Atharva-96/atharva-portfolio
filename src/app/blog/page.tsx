import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on building software products, AI systems, automation, and the startup journey.",
};

const posts = [
  {
    slug: "building-saas-products",
    title: "How I Build SaaS Products from Scratch",
    excerpt:
      "A practical guide to my process for taking a SaaS product from concept to launch, covering architecture, tech decisions, and lessons learned.",
    date: "2025-12-15",
    tags: ["SaaS", "Product"],
  },
  {
    slug: "ai-automation-future",
    title: "The Future of AI-Powered Automation",
    excerpt:
      "Exploring how AI and automation are reshaping business operations and what founders need to know to stay ahead.",
    date: "2025-11-28",
    tags: ["AI", "Automation"],
  },
  {
    slug: "startup-tech-stack",
    title: "Choosing the Right Tech Stack for Your Startup",
    excerpt:
      "A founder's perspective on selecting technologies that balance speed, scalability, and team productivity.",
    date: "2025-10-10",
    tags: ["Startup", "Engineering"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Thoughts & insights
          </h1>
          <p className="text-muted text-lg mt-4">
            Articles on building software products, AI systems, automation, and the startup journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border bg-surface p-6 hover:bg-surface-hover hover:border-border-light transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-muted mb-3">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h2 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-3 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1 text-sm text-accent mt-4">
                Read more <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
        {/* Experience anchor */}
        <div id="experience" className="mt-12">
          <h2 className="text-2xl font-bold">Experience</h2>
          <p className="text-muted">Add your timeline or milestones here.</p>
        </div>
      </div>
    </div>
  );
}
