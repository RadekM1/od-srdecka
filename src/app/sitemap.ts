import { wpFetchBlogArticlesSweets } from "@/lib/fetch/articles-sweets-fetch";
import { wpFetchBlogArticlesOther } from "@/lib/fetch/articles-others-fetch";
const ROOT = "https://www.odsrdecka.cz/";

export const dynamic = "force-dynamic";

import type { MetadataRoute } from "next";

const articlesSlugSweet = await wpFetchBlogArticlesSweets();
const articlesSlugOther = await wpFetchBlogArticlesOther();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ROOT,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${ROOT}o-nas`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${ROOT}nabidka`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${ROOT}nabidka/dorty`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${ROOT}nabidka/dezerty`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${ROOT}nabidka/galerie`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${ROOT}blog/bezlepkove-recepty-sladke`,
      lastModified: "2025-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${ROOT}blog/bezlepkove-recepty-ostatni`,
      lastModified: "2025-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...articlesSlugSweet.map((item) => ({
      url: `${ROOT}blog/bezlepkove-recepty-sladke/${item.slug}`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...articlesSlugOther.map((item) => ({
      url: `${ROOT}blog/bezlepkove-recepty-ostatni/${item.slug}`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),

    {
      url: `${ROOT}aktuality`,
      lastModified: "2025-04-01",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${ROOT}dotazy`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${ROOT}kontakt`,
      lastModified: "2025-04-01",
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
