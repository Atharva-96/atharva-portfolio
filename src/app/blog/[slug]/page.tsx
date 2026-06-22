import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const posts = {
  "building-saas-products": {
    title: "How I Build SaaS Products from Scratch",
    date: "2025-12-15",
    content: `
      Building a SaaS product from scratch is both an art and a science. Over the years, I've developed a process that helps me move from idea to launch efficiently while maintaining quality.

      ## The Process

      ### 1. Validate the Idea
      Before writing any code, I spend time understanding the problem. This means talking to potential users, analyzing competitors, and defining the core value proposition.

      ### 2. Choose the Right Stack
      I typically start with Next.js, TypeScript, and PostgreSQL. This stack gives me the flexibility to build fast while ensuring scalability.

      ### 3. Build the MVP
      Focus on the core feature that solves the main problem. Everything else can wait.

      ### 4. Launch and Iterate
      Ship fast, listen to feedback, and improve continuously.
    `,
  },
  "ai-automation-future": {
    title: "The Future of AI-Powered Automation",
    date: "2025-11-28",
    content: `
      AI-powered automation is transforming how businesses operate. From customer service to data analysis, AI agents are becoming an integral part of the modern tech stack.

      ## Key Trends

      - **Agentic Workflows**: AI agents that can plan and execute complex tasks autonomously
      - **LLM Integration**: Large language models are becoming the backbone of intelligent automation
      - **Edge AI**: Running AI models on edge devices for real-time processing

      At SINXCE Labs, we're building automation systems that leverage these technologies to create real business value.
    `,
  },
  "startup-tech-stack": {
    title: "Choosing the Right Tech Stack for Your Startup",
    date: "2025-10-10",
    content: `
      One of the most important decisions a founder makes is choosing the right technology stack. The wrong choice can slow you down, while the right one can accelerate your growth.

      ## My Recommendations

      - **Frontend**: Next.js + TypeScript + Tailwind CSS
      - **Backend**: Node.js or Python
      - **Database**: PostgreSQL
      - **Cloud**: AWS or Vercel
      - **AI/ML**: OpenAI API + LangChain

      The key is to choose technologies that your team knows well and that scale with your business.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) return {};

  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = posts[slug as keyof typeof posts];

  if (!post) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <article>
          <header className="mb-12">
            <time className="text-sm text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-12 mb-4">
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                if (match) {
                  return (
                    <p key={i} className="text-muted leading-relaxed mb-2">
                      <strong className="text-foreground">{match[1]}</strong>:{" "}
                      {match[2]}
                    </p>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-muted ml-4 mb-1">
                    {line.slice(2)}
                  </li>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="text-muted leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
