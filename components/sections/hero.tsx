"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/brand";
import { contact, hero, site } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      {/* decorative grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 60%)",
        }}
        aria-hidden
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium leading-snug text-foreground/90 sm:text-2xl"
          >
            {hero.headline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" />
            {contact.location}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/#work">
                View work <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={contact.cv} download={contact.cvDownloadName}>
                <Download className="size-4" /> Download CV
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
