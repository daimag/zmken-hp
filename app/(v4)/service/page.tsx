import type { Metadata } from "next"
import Link from "next/link"
import V4PageHero from "@/components/v4/V4PageHero"
import { SERVICE_INTRO, SERVICES, BRANDING } from "@/components/v4/data"

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "空間ブランディングから設計・施工、VMD・サイン計画まで一貫。女性視点で“その人らしさ”をカタチにするゼムケンサービスの事業内容。",
}

export default function ServicePage() {
  return (
    <>
      <V4PageHero
        idx="02"
        en="Service"
        title="事業内容"
        lead="企画・設計から施工、ブランディングまで。女性視点の空間づくりを一貫して手がけます。"
      />

      {/* ARCHITECTURE / 空間ブランディング */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead" data-rise>
          <span className="v4-shead__idx">Architecture</span>
          <p className="v4-eyebrow">Space Branding</p>
          <h2 className="v4-h2">空間ブランディング</h2>
        </div>
        <div className="wrap4">
          <p className="v4-lead" style={{ maxWidth: "48em" }}>
            {SERVICE_INTRO}
          </p>
          <div className="v4-chips" style={{ justifyContent: "flex-start", marginTop: "clamp(24px,3vw,40px)" }}>
            {SERVICES.map((s) => (
              <span className="v4-chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 空間ブランディング事例（La Chic） */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Branding — La Chic</p>
          <h2 className="v4-h2">ブランディング事例</h2>
          <p className="v4-lead">
            お客さまの歴史や想いを読み解き、五感で心地よさを設計する。&ldquo;その人らしさ&rdquo;をカタチにした事例です。
          </p>
        </div>
        <div className="wrap4 v4-feat">
          {BRANDING.map((b, i) => (
            <article className={`v4-featitem ${i % 2 ? "is-rev" : ""}`} key={b.title}>
              <div className="v4-featitem__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.title} loading="lazy" />
              </div>
              <div className="v4-featitem__body">
                <p className="v4-featitem__meta">
                  <span className="v4-featitem__cat">{b.en}</span>
                </p>
                <h3 className="v4-featitem__title">{b.title}</h3>
                <p className="v4-featitem__text">{b.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="center mt40">
          <Link className="v4-btn v4-btn--fill" href="/works">
            施工実績を見る
          </Link>
        </p>
      </section>
    </>
  )
}
