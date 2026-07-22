import type { Metadata } from "next"

// 本番ドメイン（DNS移行後は www.zmken.co.jp を向ける）。
// プレビュー環境では NEXT_PUBLIC_SITE_URL で上書き可能。
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zmken.co.jp"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "有限会社ゼムケンサービス｜女性力で、建設業界をぱーっと明るく",
    template: "%s｜有限会社ゼムケンサービス",
  },
  description:
    "福岡県北九州市の有限会社ゼムケンサービス。女性視点の空間ブランディング・店舗デザイン・住宅の設計・施工。「オモイをカタチに、建築は統合芸術」。採用・施工実績はこちら。",
  keywords: [
    "ゼムケンサービス",
    "北九州 建築",
    "北九州 設計事務所",
    "小倉 店舗デザイン",
    "福岡 空間ブランディング",
    "女性建築士",
    "住宅 設計 施工",
    "リノベーション 北九州",
    "建設業 採用 福岡",
  ],
  authors: [{ name: "有限会社ゼムケンサービス" }],
  creator: "有限会社ゼムケンサービス",
  publisher: "有限会社ゼムケンサービス",
  applicationName: "ゼムケンサービス",
  category: "建築・建設",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "有限会社ゼムケンサービス",
    title: "有限会社ゼムケンサービス｜女性力で、建設業界をぱーっと明るく",
    description:
      "福岡県北九州市の建築事務所。女性視点で店舗・住宅・オフィスをデザイン。オモイをカタチに、建築は統合芸術。",
  },
  twitter: {
    card: "summary_large_image",
    title: "有限会社ゼムケンサービス｜女性力で、建設業界をぱーっと明るく",
    description:
      "福岡県北九州市の建築事務所。女性視点で店舗・住宅・オフィスをデザイン。オモイをカタチに、建築は統合芸術。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // 公開後、Google Search Console の確認コードをここに追加：
  // verification: { google: "xxxxxxxx" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
