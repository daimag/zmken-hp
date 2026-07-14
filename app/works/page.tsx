import type { Metadata } from "next"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = { title: "施工実績" }

export default function Works() {
  return (
    <>
      <PageHero title="施工実績" subtitle="女性の視点で仕上げた、店舗・住宅・オフィスの実例。" current="施工実績" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="gallery">
            {Array.from({ length: 12 }, (_, i) => (
              <div className="g-item" key={i}>
                <div className="ph">{`Works ${String(i + 1).padStart(2, "0")}`}</div>
                <div className="g-cap"><small>Project</small>施工事例 {String(i + 1).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
          <p className="center mt-32" style={{ color: "var(--muted)" }}>
            ※ 画像はサンプル用プレースホルダーです。実際の施工写真に差し替えます。
          </p>
        </div>
      </main>
    </>
  )
}
