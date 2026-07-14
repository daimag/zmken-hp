const SVC = [
  { no: "01", t: "空間プロデュース", d: "コンセプト設計から内装・サイン・VMDまで、一貫した世界観でブランドを空間に落とし込む。" },
  { no: "02", t: "デザイン設計・施工", d: "店舗・住宅の設計から施工まで一貫対応。女性視点で、使う人に心地よい空間を実現する。" },
  { no: "03", t: "建築何でも相談", d: "新規出店・間取り・リフォーム・内覧会同行まで。女性スタッフが親身に伴走する相談窓口。" },
  { no: "04", t: "パースデザイン", d: "完成イメージを見える化。認識のズレをなくし、安心して計画を進められる。" },
]

const WORKS = [
  { src: "/works/k_9.jpg", en: "Bakery", ja: "店舗デザイン" },
  { src: "/works/k_8.jpg", en: "Bridal", ja: "空間演出" },
  { src: "/works/k_16.jpg", en: "Clinic", ja: "クリニック" },
  { src: "/works/k_20.jpg", en: "Retail", ja: "物販店舗" },
  { src: "/works/k_7.jpg", en: "Salon", ja: "美容サロン" },
  { src: "/works/k_11.jpg", en: "Interior", ja: "内装設計" },
]

const NUMS = [
  { b: "1993", s: "創業" },
  { b: "25", u: "+", s: "店舗・空間デザイン実績" },
  { b: "10", u: "+", s: "受賞・メディア掲載" },
  { b: "100", u: "%", s: "女性視点の設計" },
]

export default function V3Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="v3-hero">
        <div className="v3-hero__grid" />
        <div className="v3-hero__inner">
          <div className="v3-hero__circle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_9.jpg" alt="" />
          </div>
          <h1 className="v3-hero__big w1">SPACE</h1>
          <h1 className="v3-hero__big w2">
            DE<span className="tl">SIGN</span>
          </h1>
          <p className="v3-hero__en">
            Zm&apos;ken Service designs spaces that move people,
            <br />
            with a woman&apos;s sensibility. Kitakyushu, since 1993.
          </p>
          <p className="v3-hero__msg">
            店舗デザインから空間ブランディングまで
            <br />
            <b>女性の感性</b>で、建築の課題を解決する。
          </p>
          <div className="v3-hero__lead">
            <p>
              私たちは、女性視点の空間デザインに特化し、店舗・住宅の設計から
              ブランディングまでを一貫して手がけています。オモイをカタチに ―
              建築は、統合芸術です。
            </p>
            <div className="v3-hero__cta">
              <a className="v3-btn" href="#works">施工実績を見る</a>
              <a className="v3-btn v3-btn--ghost" href="#service">サービス紹介</a>
            </div>
          </div>
          <div className="v3-hero__stats">
            <div className="v3-badge">
              <small>SINCE</small>
              <b>1993</b>
            </div>
            <div className="v3-badge">
              <small>実績</small>
              <b>25<span>+</span></b>
              <small>店舗・空間</small>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MESSAGE ============ */}
      <section className="v3-sec v3-center">
        <div className="v3-wrap" data-rise>
          <span className="v3-kicker v3-kicker--line">Message</span>
          <h2 className="v3-h">
            女性力で、建設業界を<span className="tl">ぱーっと明るく</span>。
            <br />
            使う人の<b>オモイ</b>に寄り添う、空間づくりを。
          </h2>
          <p className="v3-lead">
            デザイン・設計・施工、そして「そこで過ごす人の想い」まで。すべてを一つに束ねてこそ、
            心に残る空間が生まれると私たちは考えます。
          </p>
        </div>
      </section>

      {/* ============ SERVICE ============ */}
      <section className="v3-sec" id="service" style={{ background: "var(--paper)" }}>
        <div className="v3-wrap" data-rise>
          <span className="v3-kicker v3-kicker--line">Service</span>
          <h2 className="v3-h">事業内容</h2>
          <div className="v3-svc">
            {SVC.map((s) => (
              <div className="v3-svc__row" key={s.no}>
                <span className="v3-svc__no">{s.no}</span>
                <span className="v3-svc__t">{s.t}</span>
                <span className="v3-svc__d">{s.d}</span>
                <span className="v3-svc__arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORKS ============ */}
      <section className="v3-sec" id="works">
        <div className="v3-wrap" data-rise>
          <span className="v3-kicker v3-kicker--line">Works</span>
          <h2 className="v3-h">施工実績</h2>
          <div className="v3-works">
            {WORKS.map((w, i) => (
              <div className="v3-wi" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.src} alt={w.ja} loading="lazy" />
                <div className="v3-wi__cap">
                  <small>{w.en}</small>
                  <span>{w.ja}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="v3-sec" id="about" style={{ background: "var(--paper)" }}>
        <div className="v3-wrap v3-center" data-rise>
          <span className="v3-kicker v3-kicker--line">About</span>
          <h2 className="v3-h">数字で見るゼムケンサービス</h2>
          <div className="v3-nums">
            {NUMS.map((n) => (
              <div className="v3-num" key={n.s}>
                <b>
                  {n.b}
                  {n.u && <span>{n.u}</span>}
                </b>
                <small>{n.s}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="v3-cta" id="recruit">
        <div className="v3-cta__grid" />
        <div className="v3-wrap" data-rise>
          <span className="v3-kicker v3-kicker--line" style={{ color: "#7fd3c8" }}>Recruit ＆ Contact</span>
          <h2>
            建設業界を、いっしょに<b>明るく</b>。
          </h2>
          <p className="v3-lead" style={{ color: "rgba(255,255,255,.8)" }}>
            採用のご応募、店舗づくり・空間デザインのご相談、お気軽にどうぞ。
          </p>
          <a className="v3-btn" href="#contact">お問い合わせ・ご応募 →</a>
        </div>
      </section>
    </>
  )
}
