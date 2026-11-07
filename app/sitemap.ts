import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const baseUrl = "https://udp.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...projectEntries,
  ];
}
