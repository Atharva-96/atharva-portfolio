import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { FounderStory } from "@/components/sections/founder-story";
import { Metrics } from "@/components/sections/metrics";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Skills } from "@/components/sections/skills";
import { GitHubActivity } from "@/components/sections/github-activity";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Mission />
      <FounderStory />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <GitHubActivity />
      <BlogPreview />
      <Contact />
    </>
  );
}
