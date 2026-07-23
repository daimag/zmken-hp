import type { Metadata } from "next"
import Link from "next/link"
import V4PageHero from "@/components/v4/V4PageHero"
import V4WorkCatalog from "@/components/v4/V4WorkCatalog"
import { FEATURED, WORKS_ALL, SEMINARS } from "@/components/v4/data"

export const metadata: Metadata = {
  title: "施工実績",
  description:
    "北九州・福岡の店舗・住宅・オフィスの施工実績。女性視点の空間デザインで手がけた事例をご紹介します。",
}

export default function WorksPage() {
  return (
    <>
      <V4PageHero
        idx="02"
        en="Works"
        title="施工実績"
        lead="店舗・住宅・オフィス。女性ならではの視点で仕上げた空間の数々をご覧ください。"
      />

      {/* カテゴリ */}
      <section className="v4-sec v4-works">
        {/* 特集 */}
        <div className="wrap4 v4-feat">
          {FEATURED.map((w, i) => (
            <article className={`v4-featitem ${i % 2 ? "is-rev" : ""}`} key={w.title}>
              <div className="v4-featitem__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.img} alt={w.title} />
              </div>
              <div className="v4-featitem__body">
                <p className="v4-featitem__meta">
                  <span className="v4-featitem__cat">{w.cat}</span>
                  <span>
                    {w.catJa}｜{w.loc}｜{w.year}
                  </span>
                </p>
                <h2 className="v4-featitem__title">{w.title}</h2>
                <p className="v4-featitem__text">{w.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 事例カタログ */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <span className="v4-shead__idx">List</span>
          <p className="v4-eyebrow">Project List</p>
          <h2 className="v4-h2">施工事例</h2>
          <p className="v4-lead">
            近年の主な施工事例です。カードをクリックすると、写真と詳細をご覧いただけます。
          </p>
        </div>
        <div className="wrap4">
          <V4WorkCatalog items={WORKS_ALL} />
          <p className="v4-compare">
            <Link href="/works2">別レイアウト（タイル型・案件名オーバーレイ）で見る →</Link>
          </p>
        </div>
      </section>

      {/* セミナー・WORKSHOP／まちづくり */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Seminar / Machizukuri</p>
          <h2 className="v4-h2">セミナー・まちづくり</h2>
          <p className="v4-lead">
            建築の枠を超えて、人とまちを元気にする活動にも取り組んでいます。
          </p>
        </div>
        <div className="wrap4 v4-feat">
          {SEMINARS.map((s, i) => (
            <article className={`v4-featitem ${i % 2 ? "is-rev" : ""}`} key={s.title}>
              <div className="v4-featitem__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="v4-featitem__body">
                <p className="v4-featitem__meta">
                  <span className="v4-featitem__cat">{s.period}</span>
                </p>
                <h3 className="v4-featitem__title">{s.title}</h3>
                <p className="v4-featitem__text">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="center mt40">
          <Link className="v4-btn v4-btn--fill" href="/contact">
            お問い合わせ
          </Link>
        </p>
      </section>
    </>
  )
}
