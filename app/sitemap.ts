import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/self-drive-or-passenger`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...categories.map((category) => ({
      url: `${site.url}${category.path}`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${site.url}/operators`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${site.url}/cookies`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
