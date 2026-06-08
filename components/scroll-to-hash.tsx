"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll-to-section";

/** Scrolls to the URL hash after navigating to the home page (e.g. from a case study). */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      scrollToSection(hash, { updateHash: false });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
