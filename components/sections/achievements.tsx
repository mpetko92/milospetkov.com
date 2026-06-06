import { achievements } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="Achievements"
        title="A few things I'm proud of."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.06}>
            <Card className="flex h-full items-start gap-5 p-6">
              {a.stat ? (
                <div className="shrink-0">
                  <span className="block text-2xl font-semibold tracking-tight text-accent">
                    {a.stat}
                  </span>
                </div>
              ) : null}
              <div>
                <h3 className="text-base font-semibold leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.detail}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
