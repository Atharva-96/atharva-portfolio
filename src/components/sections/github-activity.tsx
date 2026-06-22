"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Users, Code2 } from "lucide-react";

// GitHub Octocat SVG
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";

interface GitHubStats {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://api.github.com/users/Atharva-96");
        if (res.ok) {
          const data = await res.json();
          setStats({
            repos: data.public_repos,
            stars: 0,
            forks: 0,
            followers: data.followers,
          });

          const reposRes = await fetch(
            "https://api.github.com/users/Atharva-96/repos?per_page=100&sort=updated"
          );
          if (reposRes.ok) {
            const repos = await reposRes.json();
            const totalStars = repos.reduce(
              (acc: number, repo: { stargazers_count: number }) =>
                acc + repo.stargazers_count,
              0
            );
            const totalForks = repos.reduce(
              (acc: number, repo: { forks_count: number }) =>
                acc + repo.forks_count,
              0
            );
            setStats((prev) =>
              prev
                ? { ...prev, stars: totalStars, forks: totalForks }
                : prev
            );
          }
        }
      } catch {
        // fallback silently
      }
    }
    fetchStats();
  }, []);

  const items = [
    { icon: Code2, value: stats?.repos ?? 0, label: "Repositories" },
    { icon: Star, value: stats?.stars ?? 0, label: "Stars" },
    { icon: GitFork, value: stats?.forks ?? 0, label: "Forks" },
    { icon: Users, value: stats?.followers ?? 0, label: "Followers" },
  ];

  return (
    <SectionWrapper id="github">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Open Source
          </span>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            GitHub activity
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-surface p-6 text-center hover:bg-surface-hover transition-colors"
              >
                <Icon size={20} className="text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold">
                  {item.value}
                </div>
                <p className="text-xs text-muted mt-1">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <AnimatedElement delay={0.3}>
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/Atharva-96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <GitHubIcon size={16} />
              View GitHub Profile
            </a>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
