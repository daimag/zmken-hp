import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "有限会社ゼムケンサービス｜女性力で、建設業界をぱーっと明るく",
    template: "%s｜有限会社ゼムケンサービス",
  },
  description:
    "福岡県北九州市の有限会社ゼムケンサービス。女性視点の空間ブランディング・店舗デザイン・設計・施工。「オモイをカタチに、建築は統合芸術」",
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
