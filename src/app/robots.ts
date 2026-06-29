import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rayslaser.in";
  return {
    rules: [
      {
        userAgent: [
          "*",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended"
        ],
        allow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
