import type { Metadata } from "next";
import { ExternalLink, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies from Atharva.",
};

const projects = [
  {
    title: "Barspell Shop Floor SaaS & App",
    description:
      "A shop floor SaaS and companion mobile application designed as an in-house product for inventory management at Barspell, optimizing real-time tracking.",
    tags: ["Next.js", "TypeScript", "React Native", "Node.js", "Database"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Machrent Platform",
    description:
      "A fully-featured rental management product that was copyrighted as my final year diploma project.",
    tags: ["React", "TypeScript", "Tailwind CSS", "IP / Copyright"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Git Lite",
    description:
      "A lightweight, custom local version control system (VCS) implementing core version tracking, staging, commits, and filesystem management.",
    tags: ["Node.js", "TypeScript", "VCS", "Systems Programming"],
    links: { live: "#", github: "#" },
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Featured projects
          </h1>
          <p className="text-muted text-lg mt-4">
            A selection of products and platforms I&apos;ve built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-surface p-6 hover:bg-surface-hover hover:border-border-light transition-all duration-300"
            >
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-accent-soft text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
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
                <Globe size={14} />
                Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
