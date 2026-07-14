import "../globals.css"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="sample-note">
        ★ これは現HPと同じ構成で作成した「サンプル（現行デザイン）」です（画像・文言・配色は仮）
      </div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
