import { skillGroups } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeader
        eyebrow="Skills"
        title="What I bring to a product team."
        description="Grouped by where I add the most value — from strategy to delivery to the data that proves it worked."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <Card className="h-full p-6 transition-colors hover:border-accent/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
