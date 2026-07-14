const SVC = [
  { no: "01", img: "/works/k_20.jpg", t: "空間プロデュース", d: "お店の価値を引き出し、魅力的にカタチにする。コンセプトから内装・サインまで一貫したブランディング。" },
  { no: "02", img: "/works/k_8.jpg", t: "デザイン設計・施工", d: "店舗・住宅の設計から施工まで一貫対応。女性視点で、使う人に心地よい空間を実現します。" },
  { no: "03", img: "/works/k_18.jpg", t: "建築何でも相談", d: "新規出店・間取り・リフォーム・内覧会同行まで。女性スタッフが親身にお応えします。" },
]

const MOSAIC = [
  { src: "/works/k_9.jpg", cls: "big" },
  { src: "/works/k_11.jpg", cls: "" },
  { src: "/works/k_10.jpg", cls: "" },
  { src: "/works/k_7.jpg", cls: "tall" },
  { src: "/works/k_6.jpg", cls: "" },
  { src: "/works/k_5.jpg", cls: "" },
  { src: "/works/k_16.jpg", cls: "wide" },
  { src: "/works/k_21.jpg", cls: "" },
  { src: "/works/k_15.jpg", cls: "" },
]

const NUMS = [
  { b: "1993", s: "創業" },
  { b: "25+", s: "店舗・空間デザイン実績" },
  { b: "10+", s: "受賞・メディア掲載" },
  { b: "北九州", s: "地域密着" },
]

export default function V2Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="v2-hero">
        <div className="v2-hero__blob" />
        <div className="v2-hero__inner">
          <div>
            <span className="v2-hero__kicker">WOMEN&apos;S DESIGN ／ KITAKYUSHU</span>
            <h1>
              <span className="en">Beyond</span>
              感性で、
              <br />
              空間を<span className="hl">彩る</span>。
            </h1>
            <p className="v2-hero__lead">
              女性の感性で、店舗・住宅・空間をデザインする。
              <br />
              オモイをカタチに ―― 建築は、統合芸術です。
            </p>
            <div className="v2-hero__cta">
              <a className="v2-btn" href="#works">施工実績を見る</a>
              <a className="v2-btn v2-btn--ghost" href="#service">事業内容</a>
            </div>
          </div>
          <div className="v2-hero__visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_9.jpg" alt="ゼムケンサービスの空間デザイン" />
            <div className="v2-hero__badge">
              <b>30+</b>
              <small>YEARS ／ since 1993</small>
            </div>
          </div>
        </div>
        <svg className="v2-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,42 C360,92 1080,4 1440,48 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* ============ INTRO ============ */}
      <section className="v2-intro">
        <div className="v2-wrap" data-rise>
          <span className="v2-kicker">OUR MESSAGE</span>
          <h2 className="v2-h">
            女性力で、建設業界を<span className="hl">ぱーっと明るく</span>。
            <br />
            使う人のオモイに寄り添う、空間づくりを。
          </h2>
          <p className="v2-lead">
            デザイン・設計・施工、そして「そこで過ごす人の想い」まで。すべてを一つに束ねてこそ、
            心に残る空間が生まれると私たちは考えます。
          </p>
        </div>
      </section>

      {/* ============ SERVICE ============ */}
      <section className="v2-sec" id="service">
        <div className="v2-wrap v2-center" data-rise>
          <span className="v2-kicker">SERVICE</span>
          <h2 className="v2-h">事業内容</h2>
          <div className="v2-svc">
            {SVC.map((s) => (
              <div className="v2-card" key={s.no}>
                <div className="v2-card__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.t} loading="lazy" />
                </div>
                <div className="v2-card__body">
                  <span className="v2-card__no">{s.no}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORKS ============ */}
      <section className="v2-sec" id="works" style={{ background: "var(--blush)" }}>
        <div className="v2-wrap v2-center" data-rise>
          <span className="v2-kicker">WORKS</span>
          <h2 className="v2-h">施工実績</h2>
          <p className="v2-lead">店舗・住宅・オフィス。女性ならではの視点で仕上げた空間の数々。</p>
          <div className="v2-mosaic">
            {MOSAIC.map((m, i) => (
              <div className={`v2-mi ${m.cls}`} key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={`施工実績 ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="v2-sec" id="about">
        <div className="v2-wrap v2-center" data-rise>
          <span className="v2-kicker">ABOUT</span>
          <h2 className="v2-h">数字で見るゼムケンサービス</h2>
          <div className="v2-nums">
            {NUMS.map((n) => (
              <div className="v2-num" key={n.s}>
                <b>{n.b}</b>
                <span>{n.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECRUIT / CTA ============ */}
      <section className="v2-ctaband" id="recruit">
        <div className="v2-wrap" data-rise>
          <span className="v2-kicker v2-kicker--w">RECRUIT ＆ CONTACT</span>
          <h2>建設業界を、いっしょに明るく。</h2>
          <p className="v2-lead" style={{ color: "rgba(255,255,255,.85)", margin: "16px auto 0" }}>
            採用のご応募、店舗づくり・空間デザインのご相談、お気軽にどうぞ。
          </p>
          <a className="v2-btn" href="#contact">お問い合わせ・ご応募</a>
        </div>
      </section>
    </>
  )
}
