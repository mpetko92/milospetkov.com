import type { MetadataRoute } from "next";
import { projects, site } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
