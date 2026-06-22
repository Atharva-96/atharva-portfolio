"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs text-muted">Available for projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Atharva
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted mt-4 max-w-2xl"
          >
            Founder, CEO & CTO @ <GradientText>SINXCE Labs</GradientText>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
          >
            Building software products, AI systems, automation tools, and scalable digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                Work With Me
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#mission"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
