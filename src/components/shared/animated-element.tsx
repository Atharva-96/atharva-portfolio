"use client";

import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedElement({ children, className, delay = 0 }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
