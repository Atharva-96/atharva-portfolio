"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "REST APIs", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "AI & Data",
    skills: ["OpenAI", "LangChain", "TensorFlow", "LLMs", "Vector DB", "Data Pipelines"],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Technology Stack
          </span>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            Tools & technologies
          </h2>
        </AnimatedElement>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold text-accent mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
