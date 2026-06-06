"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import type { Recommendation } from "@/data/content";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import * as React from "react";

function RecommendationCard({ item }: { item: Recommendation }) {
  return (
    <Card className="flex h-full flex-col p-6 transition-colors hover:border-accent/40">
      <Quote className="size-8 shrink-0 text-accent/40" aria-hidden />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 border-t border-border pt-4">
        {item.linkedinUrl ? (
          <Link
            href={item.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <cite className="not-italic">
              <span className="block font-semibold text-foreground group-hover:text-accent">
                {item.author}
              </span>
            </cite>
          </Link>
        ) : (
          <cite className="not-italic">
            <span className="block font-semibold text-foreground">
              {item.author}
            </span>
          </cite>
        )}
        <p className="mt-1 text-sm text-muted-foreground">
          {item.role}
          <span className="text-muted-foreground/60"> · </span>
          {item.company}
        </p>
        {item.context ? (
          <p className="mt-1 text-xs text-muted-foreground">{item.context}</p>
        ) : null}
      </footer>
    </Card>
  );
}

function CarouselNav({ api }: { api: CarouselApi | undefined }) {
  const [canScroll, setCanScroll] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScroll(api.canScrollPrev() || api.canScrollNext());
    };

    update();
    api.on("reInit", update);
    api.on("select", update);
    api.on("resize", update);
    return () => {
      api.off("select", update);
      api.off("resize", update);
    };
  }, [api]);

  if (!canScroll) return null;

  return (
    <>
      <CarouselPrevious className="-left-2 sm:-left-4" />
      <CarouselNext className="-right-2 sm:-right-4" />
      <CarouselDots />
    </>
  );
}

export function RecommendationsSlider({ items }: { items: Recommendation[] }) {
  const [api, setApi] = React.useState<CarouselApi>();

  if (items.length === 1) {
    return (
      <Reveal>
        <div className="max-w-lg">
          <RecommendationCard item={items[0]} />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
          dragFree: false,
        }}
        className="relative w-full px-8 sm:px-10"
      >
        {/*
          Same visual as the original grid (1 → 2 → 3 columns).
          Slides only when more cards exist than fit the current breakpoint.
        */}
        <CarouselContent className="-ml-5">
          {items.map((item, i) => (
            <CarouselItem
              key={`${item.author}-${i}`}
              className={cn(
                "pl-5",
                "basis-full md:basis-1/2 lg:basis-1/3"
              )}
            >
              <RecommendationCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNav api={api} />
      </Carousel>
    </Reveal>
  );
}
