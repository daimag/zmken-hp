import type { Metadata } from "next"
import Link from "next/link"
import V4PageHero from "@/components/v4/V4PageHero"
import V4CountUp from "@/components/v4/V4CountUp"
import {
  RECRUIT_STATS,
  RECRUIT_VOICES,
  RECRUIT_POINTS,
  RECRUIT_ROLES,
} from "@/components/v4/data"

export const metadata: Metadata = {
  title: "採用・インターンシップ",
  description:
    "ゼムケンサービスの採用情報。未経験からでも安心して成長でき、女性が長く活躍できる環境。ミャンマーUIT大学との国際インターンシップも実施しています。",
}

export default function RecruitPage() {
  return (
    <>
      <V4PageHero
        idx="04"
        en="Recruit"
        title="建築業界を、女性の力でぱーっと明るく。"
        lead="「好き」を仕事にしたい方へ。未経験からでも安心して成長できる環境と、長く活躍できる働き方があります。"
        img="/studio/recruit-group.jpg"
      />

      {/* 数字 */}
      <section className="v4-sec">
        <div className="wrap4 v4-stats">
          {RECRUIT_STATS.map((s, i) => (
            <div className="v4-stat" key={s.label} style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="v4-stat__num">
                <V4CountUp value={s.num} />
                <span>{s.unit}</span>
              </p>
              <p className="v4-stat__label">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 働く環境・魅力 */}
        <div className="wrap4 v4-shead v4-shead--center" style={{ marginTop: "clamp(60px,8vw,110px)" }}>
          <p className="v4-eyebrow">Our Environment</p>
          <h2 className="v4-h2">ゼムケンで働く、4つの魅力</h2>
        </div>
        <div className="wrap4 v4-values">
          {RECRUIT_POINTS.map((v, i) => (
            <div className="v4-value" key={v.n} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="v4-value__num">{v.n}</span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
              <span className="v4-value__line" />
            </div>
          ))}
        </div>
      </section>

      {/* 社員の声 */}
      <section className="v4-sec v4-sec--dark">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow v4-eyebrow--light">Voice</p>
          <h2 className="v4-h2 v4-h2--light">先輩スタッフの声</h2>
        </div>
        <div className="wrap4 v4-voices">
          {RECRUIT_VOICES.map((v, i) => (
            <figure className="v4-voice" key={v.role} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="v4-voice__media">
                <div className="v4-voice__ph">photo</div>
              </div>
              <figcaption>
                <span className="v4-voice__quote" aria-hidden>
                  &ldquo;
                </span>
                <p className="v4-voice__text">{v.text}</p>
                <p className="v4-voice__role">{v.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 募集職種 */}
      <section className="v4-sec v4-sec--cream">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Positions</p>
          <h2 className="v4-h2">募集職種</h2>
        </div>
        <div className="wrap4 v4-worktags">
          {RECRUIT_ROLES.map((c) => (
            <div className="v4-worktag" key={c.en}>
              <span className="v4-worktag__en">{c.en}</span>
              <span className="v4-worktag__ja">{c.ja}</span>
              <span className="v4-worktag__note">{c.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 国際インターンシップ */}
      <section className="v4-sec">
        <div className="wrap4 v4-shead v4-shead--center">
          <p className="v4-eyebrow">Internship</p>
          <h2 className="v4-h2">国境を越えた「共創」を。</h2>
          <p className="v4-lead">言葉の壁を超える、情熱とデジタルの力。</p>
        </div>
        <div className="wrap4 v4-message">
          <p>
            「建設業を、もっとオープンに」。その想いは、国内だけでなく世界へも向けられています。弊社では2024年からミャンマーのトップIT大学である UIT と提携し、グローバルインターンシップを実施しています。
          </p>
        </div>

        {/* 現場＆BIM の写真 */}
        <div className="wrap4 v4-intern-photos">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/recruit-work.jpg" alt="現場でものづくりを学ぶインターン生" loading="lazy" />
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/recruit-bim.jpg" alt="BIMを学ぶミャンマーUITのインターン生" loading="lazy" />
          </figure>
        </div>

        <div className="wrap4 v4-message">
          <h3 className="v4-intern-sub">違いを強みに変える、2ヶ月間</h3>
          <p>
            インターン生たちは約2ヶ月間、日本で生活しながら建築と最先端の BIM 技術を学びます。文化や言葉の壁に直面することもありますが、彼らの「学びたい」という強い意欲と、チーム全員でのサポートがあれば、その壁は乗り越えられます。むしろそのプロセスこそが、多様な価値観を認め合う私たちの強みとなっています。
          </p>
          <h3 className="v4-intern-sub">インターンから、かけがえのない仲間へ</h3>
          <p>
            2024年にインターンシップに参加した1名が、2025年に正式にゼムケンサービスの社員として入社しました。2025年には UIT の学生4名、北九州市立大学の留学生1名がインターンシップに参加。国籍やバックグラウンドに関わらず、意欲ある人材がプロフェッショナルとして輝けるフィールドがあります。
          </p>
        </div>

        {/* 集合写真 */}
        <div className="wrap4 v4-intern-group">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/recruit-group.jpg" alt="ゼムケンサービスのインターン生と代表・スタッフ" loading="lazy" />
          </figure>
        </div>

        {/* メディア掲載 */}
        <div className="wrap4 v4-intern-media">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/studio/recruit-media.jpg" alt="「商業施設」2024年10月号 インターンシップ紹介" loading="lazy" />
            <figcaption>「商業施設」2024.10 にて、弊社インターンシップの取り組みが紹介されました。</figcaption>
          </figure>
        </div>

        <p className="center mt40">
          <Link className="v4-btn v4-btn--fill" href="/contact">
            募集要項・エントリー
          </Link>
        </p>
      </section>
    </>
  )
}
