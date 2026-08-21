import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/tours";

const lastModified = new Date("2026-08-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/images/hero.jpg`],
    },
    {
      url: `${site.url}/self-drive-or-passenger`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...categories.map((category) => ({
      url: `${site.url}${category.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${site.url}${category.heroImage}`],
    })),
    {
      url: `${site.url}/operators`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${site.url}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
