import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zmken.co.jp"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // 旧版・検討版は検索インデックスから除外（重複コンテンツ対策）
        // /v1=旧デザイン(現行踏襲) / v2・v3=過去のデザイン案
        disallow: ["/v1", "/v2", "/v3", "/works2"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
