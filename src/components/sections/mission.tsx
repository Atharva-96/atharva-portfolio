"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Blocks, Rocket } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";

const pillars = [
  {
    icon: Cpu,
    title: "Technology",
    description: "Building scalable infrastructure and platforms that power the next generation of digital products.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Integrating intelligent systems that automate workflows, enhance decision-making, and drive efficiency.",
  },
  {
    icon: Blocks,
    title: "Software Products",
    description: "Crafting end-to-end SaaS solutions that solve real problems with clean architecture and great UX.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing boundaries with modern tech stacks, cloud-native architectures, and forward-thinking design.",
  },
];

export function Mission() {
  return (
    <SectionWrapper id="mission">
      <div className="container">
        <div className="max-w-2xl">
          <AnimatedElement>
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              Philosophy
            </span>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-6">
              Building the future of
              <br />
              <span className="text-muted">digital infrastructure</span>
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <p className="text-muted text-base sm:text-lg leading-relaxed mt-6">
              At SINXCE Labs, we believe technology should be invisible, powerful, and accessible.
              Every product we build is designed to scale, automate, and transform how businesses
              operate in the digital age.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="group rounded-xl border border-border bg-surface p-6 hover:bg-surface-hover hover:border-border-light transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
