import { Hero } from "@/components/sections/hero";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Recommendations } from "@/components/sections/recommendations";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Recommendations />
      <Contact />
    </>
  );
}
