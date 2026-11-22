import { MetadataRoute } from "next";
import { getJsonData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aayamadhikari.com";
  const routes = [
    "",
    "/projects",
    "/research",
    "/experience",
    "/skills",
    "/writing",
    "/resume",
    "/contact",
    "/now",
    "/reading",
    "/roadmap",
    "/uses",
  ];

  const projects = getJsonData("projects.json") || [];
  const projectRoutes = projects.map((p: any) => `/projects/${p.id}`);
  const allRoutes = [...routes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/projects/") ? 0.7 : 0.8,
  }));
}
