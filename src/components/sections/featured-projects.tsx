"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

// GitHub Octocat SVG
function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Barspell Shop Floor SaaS & App",
    description:
      "A shop floor SaaS and companion mobile application designed as an in-house product for inventory management at Barspell, optimizing real-time tracking.",
    tags: ["Next.js", "TypeScript", "React Native", "Node.js", "Database"],
    links: {
      live: "#",
      github: "#",
    },
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    title: "Machrent Platform",
    description:
      "A fully-featured rental management product that was copyrighted as my final year diploma project.",
    tags: ["React", "TypeScript", "Tailwind CSS", "IP / Copyright"],
    links: {
      live: "#",
      github: "#",
    },
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Git Lite",
    description:
      "A lightweight, custom local version control system (VCS) implementing core version tracking, staging, commits, and filesystem management.",
    tags: ["Node.js", "TypeScript", "VCS", "Systems Programming"],
    links: {
      live: "#",
      github: "#",
    },
    gradient: "from-orange-600/20 to-rose-600/20",
  },
];

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Featured Work
          </span>
        </AnimatedElement>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-6">
          <AnimatedElement delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Selected projects
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <a
              href="https://github.com/Atharva-96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              View all on GitHub
              <ArrowUpRight size={14} />
            </a>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative rounded-xl border border-border bg-surface overflow-hidden hover:border-border-light transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                  <GitHubIcon size={14} />
                  Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedElement delay={0.3}>
          <div className="flex justify-center mt-12">
            <Button variant="secondary" asChild>
              <a href="https://github.com/Atharva-96" target="_blank" rel="noopener noreferrer">
                Explore All Projects
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
