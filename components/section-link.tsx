"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hashFromHref, scrollToSection } from "@/lib/scroll-to-section";

type SectionLinkProps = React.ComponentProps<typeof Link>;

/** In-page section link that always scrolls, even when the hash is unchanged. */
export function SectionLink({ href, onClick, ...props }: SectionLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const hrefStr = typeof href === "string" ? href : href.pathname ?? "";
    const hash = hashFromHref(hrefStr);
    if (!hash || pathname !== "/") return;

    e.preventDefault();
    scrollToSection(hash);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
