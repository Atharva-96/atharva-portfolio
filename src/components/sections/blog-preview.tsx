"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

export function BlogPreview() {
  return (
    <SectionWrapper id="blog">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Blog
          </span>
        </AnimatedElement>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-6">
          <AnimatedElement delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Thoughts & insights
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <Link
              href="/blog"
              className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              View all posts
              <ArrowUpRight size={14} />
            </Link>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 hover:bg-surface-hover hover:border-border-light transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mt-3 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatedElement delay={0.4}>
          <div className="flex justify-center mt-12">
            <Button variant="secondary" asChild>
              <Link href="/blog">
                Read All Articles
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
