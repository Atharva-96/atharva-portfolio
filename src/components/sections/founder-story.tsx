"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";

const timeline = [
  {
    year: "Mid 2024",
    title: "First Project Delivery (Barspell)",
    description: "Launched my software development journey with the delivery of an in-house shop floor SaaS product for inventory management at Barspell.",
  },
  {
    year: "April 2025",
    title: "SaaS Companion App",
    description: "Built and delivered an in-house companion app for Barspell, extending the functionality of the core SaaS inventory system.",
  },
  {
    year: "May 2025",
    title: "Machrent Product",
    description: "Successfully developed and copyrighted 'Machrent' as part of my final year diploma project.",
  },
  {
    year: "Jan / Feb 2026",
    title: "Git Lite VCS",
    description: "Created Git Lite, a custom local version control system implementing key git-like tracking mechanics.",
  },
];

export function FounderStory() {
  return (
    <SectionWrapper id="story">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Founder Story
          </span>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            The journey so far
          </h2>
        </AnimatedElement>

        <div className="relative mt-16">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />

                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 mt-1.5" />

                <div className="flex-1 pl-16 md:pl-0">
                  <span className="text-sm font-semibold text-accent">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
