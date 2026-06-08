/** Scroll to a page section by id. Works even when the URL hash is already set. */
export function scrollToSection(
  id: string,
  options?: { updateHash?: boolean }
): boolean {
  const { updateHash = true } = options ?? {};
  const el = document.getElementById(id);
  if (!el) return false;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  if (updateHash) {
    window.history.pushState(null, "", `#${id}`);
  }

  return true;
}

export function hashFromHref(href: string): string | null {
  const i = href.indexOf("#");
  if (i === -1) return null;
  const hash = href.slice(i + 1);
  return hash || null;
}
