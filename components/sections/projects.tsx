import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function Projects() {
  return (
    <Section id="work" className="bg-muted/30">
      <SectionHeader
        eyebrow="Selected Work"
        title="Case studies — evidence of how I think."
        description="A few projects, each told as Problem → Discovery → Solution → Impact → Learnings, with the trade-offs I made along the way."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <Link href={`/work/${project.slug}`} className="group block h-full">
              <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">
                      {project.context} · {project.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
