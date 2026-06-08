"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/content";
import { SectionLink } from "@/components/section-link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <SectionLink
          href="/#top"
          className="text-base font-semibold tracking-tight"
          aria-label={`${site.name} — home`}
        >
          {initials}
          <span className="text-accent">.</span>
        </SectionLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <SectionLink
              key={item.href}
              href={`/${item.href}`}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </SectionLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-2">
            {navItems.map((item) => (
              <SectionLink
                key={item.href}
                href={`/${item.href}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </SectionLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
