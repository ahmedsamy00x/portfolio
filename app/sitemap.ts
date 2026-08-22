import type { MetadataRoute } from "next";

const SITE = "https://ahmedsamy.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/blog`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
