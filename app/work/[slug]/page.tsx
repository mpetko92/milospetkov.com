import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, site } from "@/data/content";
import { Container } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
    },
  };
}

function CaseBlock({
  index,
  heading,
  items,
}: {
  index: string;
  heading: string;
  items: string[];
}) {
  return (
    <Reveal as="section" className="border-t border-border py-10">
      <div className="grid gap-6 md:grid-cols-[160px_1fr]">
        <div>
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="mt-1 text-xl font-semibold">{heading}</h2>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="relative pl-5 text-base leading-relaxed text-muted-foreground"
            >
              <span className="absolute left-0 top-2.5 size-1.5 rounded-full bg-accent/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="pt-28 pb-20 sm:pt-36">
      <Container className="max-w-4xl">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to work
          </Link>

          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-accent">
            {project.context} · {project.period}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* Metrics */}
        {project.metrics?.length ? (
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-card p-6">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight text-accent">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}

        <div className="mt-6">
          <CaseBlock index="01" heading="Problem" items={project.problem} />
          <CaseBlock index="02" heading="Research & Discovery" items={project.discovery} />
          <CaseBlock index="03" heading="Solution" items={project.solution} />
          <CaseBlock index="04" heading="Impact & Metrics" items={project.impact} />

          {/* Trade-offs — decisions made by choosing one path over another */}
          <Reveal as="section" className="border-t border-border py-10">
            <div className="grid gap-6 md:grid-cols-[160px_1fr]">
              <div>
                <span className="font-mono text-sm text-accent">05</span>
                <h2 className="mt-1 text-xl font-semibold">Trade-offs</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every project involves choices. Here I explain what I{" "}
                  <em>didn&apos;t</em> do, what I chose instead, and why that
                  was the better call for the business.
                </p>
              </div>
              <ul className="space-y-3">
                {project.tradeoffs.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border bg-muted/40 p-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <CaseBlock index="06" heading="What I Learned" items={project.learnings} />
        </div>

        <Reveal>
          <div className="mt-12 border-t border-border pt-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to all work
            </Link>
          </div>
        </Reveal>
      </Container>
    </article>
  );
}
