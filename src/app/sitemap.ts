import type { MetadataRoute } from "next";
import { SITE_URL, categories, subServices, cities } from "@/data/siteConfig";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/reviews", "/services", "/service-areas", "/blog", "/contact", "/privacy-policy", "/terms"];

  const categoryRoutes = categories.map((c) => `/${c.slug}`);
  const subServiceRoutes = subServices.map((s) => `/${s.categorySlug}/${s.slug}`);
  const cityRoutes = cities.map((c) => `/service-areas/${c.slug}`);
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...subServiceRoutes, ...cityRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
