import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import WorksMosaic from "@/components/WorksMosaic"

export const metadata: Metadata = { title: "施工実績" }

export default function Works() {
  return (
    <>
      <PageHero title="施工実績" subtitle="女性の視点で仕上げた、店舗・住宅・オフィスの実例。" current="施工実績" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <WorksMosaic />
          <p className="center mt-32" style={{ color: "var(--muted)" }}>
            ※ 現ホームページの施工実績写真を掲載しています。掲載可否・並び順はご相談のうえ調整します。
          </p>
        </div>
      </main>
    </>
  )
}
