"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Product Developer",
    company: "Barspell",
    period: "Mid 2024 - April 2025",
    description:
      "Designed and delivered a shop floor SaaS in-house product for inventory management. Following the success of the SaaS product, built and launched an in-house companion app as a mobile extension of the platform.",
    tags: ["SaaS", "Next.js", "React Native", "Node.js", "Inventory Management"],
  },
  {
    title: "Project Lead & Creator",
    company: "Machrent (Diploma Final Year Project)",
    period: "May 2025",
    description:
      "Engineered and copyrighted 'Machrent', a specialized rental management platform built for my final year diploma project.",
    tags: ["React", "TypeScript", "Database Design", "Copyright / IP Protection"],
  },
  {
    title: "Creator / Systems Developer",
    company: "Git Lite (Open Source)",
    period: "Jan - Feb 2026",
    description:
      "Built 'Git Lite', a fully functional local version control system (VCS) from scratch, implementing core mechanics like file tracking, commits, and local repository management.",
    tags: ["TypeScript", "Node.js", "VCS", "Systems Programming"],
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Experience
          </span>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            Professional journey
          </h2>
        </AnimatedElement>

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative pl-0 md:pl-12"
              >
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-border items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </div>

                <div className="rounded-xl border border-border bg-surface p-6 hover:bg-surface-hover hover:border-border-light transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
