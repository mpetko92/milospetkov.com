import { about } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title="A builder shaped by the factory floor and the roadmap." />
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-5 md:col-span-2">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Personal note
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {about.personalNote}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
