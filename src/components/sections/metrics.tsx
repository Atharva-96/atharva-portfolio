"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const metrics = [
  { value: 7, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "SaaS Products" },
  { value: 5, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <SectionWrapper>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">
                <Counter target={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-muted mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
