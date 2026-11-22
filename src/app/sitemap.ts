import { MetadataRoute } from "next";

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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
