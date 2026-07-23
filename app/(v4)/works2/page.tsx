import type { Metadata } from "next"
import Link from "next/link"
import V4PageHero from "@/components/v4/V4PageHero"
import V4WorkCatalog from "@/components/v4/V4WorkCatalog"
import { WORKS_ALL } from "@/components/v4/data"

export const metadata: Metadata = {
  title: "施工実績（WORK2・タイル型）",
  description: "施工実績の別レイアウト案（タイル内に案件名を重ね、写真をクロスフェード）。比較検討用。",
  robots: { index: false, follow: false },
}

export default function Works2Page() {
  return (
    <>
      <V4PageHero
        idx="02"
        en="Works — Layout B"
        title="施工実績"
        lead="案件名をタイルに重ね、写真がフェードで切り替わるレイアウト案（WORK2・比較用）。カテゴリで絞り込み、タイルをクリックで拡大できます。"
        img="/studio/nakasu-1.jpg"
      />

      <section className="v4-sec v4-works">
        <div className="wrap4">
          <V4WorkCatalog items={WORKS_ALL} variant="tile" />
          <p className="v4-compare">
            <Link href="/works">通常レイアウト（カード型・/works）で見る →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
