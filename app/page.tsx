import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { FeaturedProjects } from "@/components/featured-projects";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <FeaturedProjects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </>
  );
}
