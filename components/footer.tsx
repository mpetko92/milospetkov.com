import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand";
import { contact, navItems, site } from "@/data/content";
import { Container } from "@/components/section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-semibold">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {site.role} · {contact.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
