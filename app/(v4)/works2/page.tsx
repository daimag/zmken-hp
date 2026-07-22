import type { Metadata } from "next"
import Link from "next/link"
import V4PageHero from "@/components/v4/V4PageHero"
import V4WorkSlides from "@/components/v4/V4WorkSlides"
import { WORKS_CATS, WORKS_ALL } from "@/components/v4/data"

export const metadata: Metadata = {
  title: "施工実績（WORK2・案件名オーバーレイ版）",
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
        lead="案件名をタイルに重ね、写真がフェードで切り替わるレイアウト案（WORK2・比較用）。"
      />

      <section className="v4-sec v4-works">
        <div className="wrap4 v4-worktags">
          {WORKS_CATS.map((c) => (
            <div className="v4-worktag" key={c.en}>
              <span className="v4-worktag__en">{c.en}</span>
              <span className="v4-worktag__ja">{c.ja}</span>
              <span className="v4-worktag__note">{c.note}</span>
            </div>
          ))}
        </div>

        <div className="wrap4">
          <div className="v4-tiles">
            {WORKS_ALL.map((w) => (
              <article className="v4-tile" key={`${w.name}-${w.year}`}>
                {w.imgs && w.imgs.length > 0 ? (
                  <V4WorkSlides imgs={w.imgs} alt={w.name} />
                ) : (
                  <span className="v4-tile__ph">photo</span>
                )}
                <div className="v4-tile__cap">
                  <p className="v4-tile__name">{w.name}</p>
                  <p className="v4-tile__meta">
                    {w.year}｜{w.type}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="center mt40">
          <Link className="v4-btn v4-btn--line" href="/works">
            通常レイアウト（/works）を見る
          </Link>
        </p>
      </section>
    </>
  )
}
