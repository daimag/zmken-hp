import "./v4.css"
import V4Header from "@/components/v4/V4Header"
import V4Footer from "@/components/v4/V4Footer"
import V2Reveal from "@/components/v2/V2Reveal"

// ※ このレイアウトが本番ルート「/」を担う（旧v4を昇格）。
//   メタデータ・SEOは親の app/layout.tsx が管理（indexable）。

export default function V4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="v4" id="top">
      <V4Header />
      <main>{children}</main>
      <V4Footer />
      <V2Reveal />
    </div>
  )
}
