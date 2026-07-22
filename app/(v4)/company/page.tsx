import type { Metadata } from "next"
import V4PageHero from "@/components/v4/V4PageHero"
import {
  PHILOSOPHY,
  MESSAGE,
  HISTORY,
  COMPANY_ROWS,
  MAP_SRC,
  SERVICES,
  QUALIFICATIONS,
} from "@/components/v4/data"

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "有限会社ゼムケンサービスの理念・代表あいさつ・沿革・会社概要。北九州で女性視点の設計・施工・空間ブランディングを手がける建築事務所です。",
}

export default function CompanyPage() {
  return (
    <>
      <V4PageHero
        idx="01"
        en="About us"
        title="会社情報"
        lead="オモイをカタチに、建築は統合芸術。北九州から、女性の感性でまちに元気を。"
      />

      {/* 理念 */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Philosophy</p>
          <h2 className="v4-h2">理念</h2>
        </div>
        <div className="wrap4 v4-rinen">
          <p className="v4-rinen__title">{PHILOSOPHY.rinen}</p>
          <p className="v4-rinen__body">{PHILOSOPHY.rinenBody}</p>
          <p className="v4-rinen__body">{PHILOSOPHY.visionBody}</p>
          <figure className="v4-poster">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/rinen.jpg" alt="ゼムケンサービス 理念ポスター「オモイをカタチに 建築は統合芸術」" />
          </figure>
        </div>
      </section>

      {/* 代表あいさつ */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Message</p>
          <h2 className="v4-h2">代表あいさつ</h2>
        </div>
        <div className="wrap4">
          <div className="v4-msgsplit">
            <div>
              <div className="v4-portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/studio/komorita.jpg" alt="代表取締役 籠田淳子" />
              </div>
            </div>
            <div className="v4-message">
              <p className="v4-message__catch">{MESSAGE.catch}</p>
              {MESSAGE.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="v4-message__slogan">「{MESSAGE.slogan}」</p>
              <p className="v4-message__sign">
                {MESSAGE.role}　<b>{MESSAGE.name}</b>
                <small>{MESSAGE.titles}</small>
              </p>

              <div className="v4-quals">
                <p className="v4-quals__head">保有資格</p>
                <div className="v4-chips v4-chips--sm" style={{ justifyContent: "flex-start" }}>
                  {QUALIFICATIONS.map((q) => (
                    <span className="v4-chip" key={q}>
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* チーム */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Our Team</p>
          <h2 className="v4-h2">多様な視点が、強みになる。</h2>
          <p className="v4-lead">
            社員の約7割（72%）は、女性・未経験者・シニア・障がいのあるメンバー。柔軟であたたかいチームで、心に残る空間をつくります。
          </p>
        </div>
        <div className="wrap4">
          <figure className="v4-teamband">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/staff.jpg" alt="有限会社ゼムケンサービスのスタッフ" />
          </figure>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Service</p>
          <h2 className="v4-h2">事業内容</h2>
          <p className="v4-lead">
            企画・設計から施工、ブランディングまで。女性視点の空間づくりを一貫して手がけます。
          </p>
        </div>
        <div className="wrap4">
          <div className="v4-chips">
            {SERVICES.map((s) => (
              <span className="v4-chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="v4-sec v4-history">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">History</p>
          <h2 className="v4-h2">沿革</h2>
          <p className="v4-lead">1965年の創業から、まちとともに歩んできた歩み。</p>
        </div>
        <ol className="wrap4 v4-timeline">
          {HISTORY.map((h) => (
            <li className="v4-tl" key={h.year}>
              <span className="v4-tl__year">{h.year}</span>
              <span className="v4-tl__dot" />
              <p className="v4-tl__text">{h.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 会社概要 */}
      <section className="v4-sec v4-sec--cream v4-company">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Company</p>
          <h2 className="v4-h2">会社概要</h2>
        </div>
        <div className="wrap4 v4-company__grid">
          <table className="v4-table">
            <tbody>
              {COMPANY_ROWS.map((r) => (
                <tr key={r.th}>
                  <th>{r.th}</th>
                  <td>{r.td}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="v4-map">
            <iframe
              className="v4-map__frame"
              src={MAP_SRC}
              title="有限会社ゼムケンサービス 所在地マップ"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
