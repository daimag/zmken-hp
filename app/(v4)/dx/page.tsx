import type { Metadata } from "next"
import { DX_TOOLS_FULL, DX_STEPS, DX_SECI } from "@/components/v4/data"
import V4PageHero from "@/components/v4/V4PageHero"

export const metadata: Metadata = {
  title: "DX×ダイバーシティ",
  description:
    "建設業を民主化する。現場を支える自社開発ツール PomPon・CoCREA・AIAR と、SECIモデルに基づく独自のナレッジスパイラル。",
}

export default function DxPage() {
  return (
    <>
      <V4PageHero
        idx="03"
        en="DX × Diversity"
        title="建設業を、民主化する。"
        lead="誰もが建設業で活躍できるように。ゼムケンサービスは、現場を支える3つのデジタルツールを自社開発しています。"
        img="/studio/recruit-bim.jpg"
      />

      {/* 私たちの考え（DX×ダイバーシティの理由）＝編集的2カラム＋写真 */}
      <section className="v4-sec">
        <div className="wrap4 v4-editorial">
          <div className="v4-editorial__body">
            <p className="v4-eyebrow">Our Belief</p>
            <h2 className="v4-h2">テクノロジーで、誰もが輝ける現場へ。</h2>
            <p className="v4-lead" style={{ maxWidth: "34em" }}>
              棟梁の娘として、建築士として、そして経営者として。私たちは伝統ある建設業を、もっとオープンで革新的な産業に変えていきます。デジタルの力で、性別・国籍・年齢・経験の有無を問わず、誰もが自分らしく活躍できる現場をつくる——それが私たちの考える「建設業の民主化」です。
            </p>
            <p className="v4-dx-statement" style={{ textAlign: "left", marginInline: 0, fontSize: "clamp(1.1rem,2vw,1.6rem)" }}>
              DEMOCRATIZING CONSTRUCTION FOR ALL
            </p>
          </div>
          <div className="v4-editorial__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/recruit-group.jpg" alt="デジタルの力で誰もが活躍できる現場へ｜多様なメンバー" />
            <span className="v4-editorial__tag">Belief</span>
          </div>
        </div>
      </section>

      {/* 3ツール詳細 */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">DX Tools</p>
          <h2 className="v4-h2">現場を支える、3つの開発ツール</h2>
        </div>
        <div className="wrap4 v4-dxgrid">
          {DX_TOOLS_FULL.map((t) => (
            <div className="v4-dxcard" key={t.en}>
              <span className="v4-dxcard__en">{t.en}</span>
              <span className="v4-dxcard__ja">{t.ja}</span>
              <p className="v4-dxcard__lead">{t.lead}</p>
              <ul>
                {t.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              {t.site ? (
                <a className="v4-dxcard__site" href={t.site} target="_blank" rel="noopener noreferrer">
                  製品サイトへ
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* 各ツールの図解 */}
        <div className="wrap4 v4-figures">
          <figure className="v4-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/dx-pompon.jpg" alt="PomPon＝建設現場の働き方を変える遠隔管理ツールの図解" loading="lazy" />
            <figcaption>PomPon｜現場と事務所をつなぐ遠隔管理ツール</figcaption>
          </figure>
          <figure className="v4-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/dx-cocrea.jpg" alt="CoCREA＝現場の知恵をポケットに、AIアシスタントの図解" loading="lazy" />
            <figcaption>CoCREA｜現場の知恵をポケットに、AIアシスタント</figcaption>
          </figure>
          <figure className="v4-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/dx-aiar.jpg" alt="AIAR＝AI＋AR 愛あるマネジメントツールの図解" loading="lazy" />
            <figcaption>AIAR｜AI＋AR “愛あるマネジメントツール”</figcaption>
          </figure>
        </div>
      </section>

      {/* 3Dスキャナー×BIM×AI+AR */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Future</p>
          <h2 className="v4-h2">
            3Dスキャナー × BIM × AI＋AR で
            <br />
            実現する、建設DXの未来
          </h2>
        </div>
        <div className="wrap4 v4-values">
          {DX_STEPS.map((s, i) => (
            <div className="v4-value" key={s.step} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="v4-value__num">{s.step}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="v4-value__line" />
            </div>
          ))}
        </div>
        <div className="wrap4 v4-figures">
          <figure className="v4-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/dx-future.jpg" alt="3Dスキャナー×BIM×AI＋ARで実現する建設DXの未来の図解" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ナレッジスパイラル */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Knowledge Spiral</p>
          <h2 className="v4-h2">知恵を循環させる、独自のナレッジスパイラル</h2>
          <p className="v4-lead">
            野中郁次郎氏の SECI モデルを基にした、ゼムケンサービスの DX エコシステム。現場の知恵が組織に蓄積され、また現場へ還る。
          </p>
        </div>
        <div className="wrap4 v4-values v4-values--4">
          {DX_SECI.map((v, i) => {
            const [ja, ...rest] = v.t.split(" ")
            return (
              <div className="v4-value" key={v.n} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="v4-value__num">{v.n}</span>
                <h3>
                  {ja}
                  {rest.length ? <span className="v4-value__ensub">{rest.join(" ")}</span> : null}
                </h3>
                <p>{v.d}</p>
                <span className="v4-value__line" />
              </div>
            )
          })}
        </div>
        <p className="center mt40 v4-lead" style={{ maxWidth: "42em", marginInline: "auto" }}>
          これらのツールは、早稲田大学 吉江修教授をCTOに迎えた <strong>株式会社DXB</strong> と共に開発しています。
        </p>
      </section>
    </>
  )
}
