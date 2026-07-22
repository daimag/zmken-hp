import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zmken.co.jp"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const paths: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/works", priority: 0.9, freq: "weekly" },
    { path: "/company", priority: 0.8, freq: "monthly" },
    { path: "/dx", priority: 0.8, freq: "monthly" },
    { path: "/recruit", priority: 0.8, freq: "monthly" },
    { path: "/news", priority: 0.7, freq: "weekly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
  ]
  return paths.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))
  // ※ 施工実績・お知らせを個別記事（CMS）化した際は、
  //   ここに動的にURL（例: `${SITE_URL}/works/[slug]`）を追加する。
}
