import { ExternalLink } from "lucide-react";
import { experience } from "@/data/content";
import { Section, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { HighlightedText } from "@/components/highlighted-text";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked."
        description="9+ years spanning digital product, manufacturing quality, and production systems."
      />

      <div className="relative">
        {/* vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
          aria-hidden
        />
        <ol className="space-y-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} delay={(i % 2) * 0.05}>
              <div className="relative pl-9 sm:pl-12">
                <span
                  className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 border-accent bg-background sm:size-[19px]"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-accent sm:size-2" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">
                    {job.role}
                    <span className="text-muted-foreground"> · </span>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        {job.company}
                        <ExternalLink className="size-3.5" />
                      </a>
                    ) : (
                      <span className="text-accent">{job.company}</span>
                    )}
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>

                <ul className="mt-3 space-y-2">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <span className="absolute left-0 top-2.5 size-1.5 rounded-full bg-accent/60" />
                      <HighlightedText text={point} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
