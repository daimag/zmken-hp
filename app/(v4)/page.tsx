import Link from "next/link"
import V4HeroSlides from "@/components/v4/V4HeroSlides"
import V4JsonLd from "@/components/v4/V4JsonLd"
import V4CountUp from "@/components/v4/V4CountUp"
import {
  NEWS,
  FEATURED,
  GRID_WORKS,
  WORKS_CATS,
  DX_TOOLS,
  RECRUIT_STATS,
  COMPANY_ROWS,
  MAP_SRC,
} from "@/components/v4/data"

export default function V4Home() {
  const news = NEWS.slice(0, 4)

  return (
    <>
      <V4JsonLd />

      {/* ============ HERO ============ */}
      <section className="v4-hero">
        <V4HeroSlides />

        <span className="v4-vlabel v4-hero__vlabel">EST. 1993 ― Kitakyushu</span>

        <div className="v4-hero__copy wrap4">
          <p className="v4-hero__eyebrow">
            <span>Space Design Studio</span>
          </p>
          <h1 className="v4-hero__title">
            <span className="v4-line">
              <span>このまちから、</span>
            </span>
            <span className="v4-line">
              <span>
                オモイを<em>カタチに。</em>
              </span>
            </span>
          </h1>
          <p className="v4-hero__lead">
            女性の感性で、店舗・住宅・オフィスをデザインする建築事務所。
            <br />
            ― 建築は、統合芸術。―
          </p>
          <div className="v4-hero__cta">
            <Link className="v4-btn v4-btn--fill" href="/works">
              施工実績を見る
            </Link>
            <Link className="v4-btn v4-btn--line" href="/recruit">
              採用情報
            </Link>
          </div>
        </div>

        <a className="v4-hero__scroll" href="#about" aria-label="下へスクロール">
          <span>SCROLL</span>
        </a>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="v4-sec v4-about">
        <span className="v4-ring v4-ring--about" aria-hidden />
        <div className="wrap4 v4-about__grid">
          <div className="v4-about__head">
            <div className="v4-shead" data-rise>
              <span className="v4-shead__idx">01</span>
              <p className="v4-eyebrow">About us</p>
              <h2 className="v4-h2">
                使う人の目線で、
                <br />
                心地よい空間を。
              </h2>
            </div>
          </div>
          <div className="v4-about__body" data-rise>
            <p className="v4-lead">
              ゼムケンサービスは、北九州で店舗・住宅の設計から施工までを一貫して手がける建築事務所です。
            </p>
            <p>
              デザイン・設計・施工、そして「そこで過ごす人の想い」まで。すべてを一つに束ねてこそ、心に残る空間が生まれると私たちは考えます。女性ならではの視点で細部まで気を配り、お客さまの&ldquo;らしさ&rdquo;を空間に描きます。
            </p>
            <p>
              社員の約7割（72%）は、女性・未経験者・シニア・障がいのあるメンバー。多様な視点と発想を活かし、柔軟であたたかいチームで、&ldquo;建設業の民主化&rdquo;を進めています。
            </p>
            <Link className="v4-textlink" href="/company">
              会社情報を見る
            </Link>
          </div>
        </div>

        {/* 3つの価値 */}
        <div className="wrap4 v4-values">
          {[
            { n: "01", t: "女性の視点", d: "使う人の目線で、細やかに心地よい空間を設計します。" },
            { n: "02", t: "統合芸術", d: "デザインから施工まで一貫。ブレのない世界観をカタチに。" },
            { n: "03", t: "地域とともに", d: "北九州・福岡から、まちを元気にするものづくりを。" },
          ].map((v, i) => (
            <div className="v4-value" key={v.n} data-rise style={{ transitionDelay: `${i * 110}ms` }}>
              <span className="v4-value__num">{v.n}</span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
              <span className="v4-value__line" />
            </div>
          ))}
        </div>
      </section>

      {/* ============ WORKS（プレビュー） ============ */}
      <section id="works" className="v4-sec v4-sec--cream v4-works">
        <div className="wrap4 v4-shead v4-shead--center" data-rise>
          <span className="v4-shead__idx">02</span>
          <p className="v4-eyebrow">Works</p>
          <h2 className="v4-h2">施工実績</h2>
          <p className="v4-lead">
            店舗・住宅・オフィス。女性ならではの視点で仕上げた空間の数々をご覧ください。
          </p>
        </div>

        <div className="wrap4 v4-worktags">
          {WORKS_CATS.map((c) => (
            <Link className="v4-worktag v4-worktag--link" key={c.en} href={`/works#cat=${encodeURIComponent(c.filter)}`}>
              <span className="v4-worktag__en">{c.en}</span>
              <span className="v4-worktag__ja">{c.ja}</span>
              <span className="v4-worktag__note">{c.note}</span>
            </Link>
          ))}
        </div>

        <div className="wrap4 v4-feat">
          {FEATURED.map((w, i) => (
            <article className={`v4-featitem ${i % 2 ? "is-rev" : ""}`} key={w.title} data-rise>
              <Link className="v4-featitem__media" href="/works">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.img} alt={w.title} />
              </Link>
              <div className="v4-featitem__body">
                <p className="v4-featitem__meta">
                  <span className="v4-featitem__cat">{w.cat}</span>
                  <span>
                    {w.catJa}｜{w.loc}｜{w.year}
                  </span>
                </p>
                <h3 className="v4-featitem__title">{w.title}</h3>
                <p className="v4-featitem__text">{w.text}</p>
                <Link className="v4-textlink" href="/works">
                  この事例を見る
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="wrap4 v4-grid8">
          {GRID_WORKS.map((src, i) => (
            <Link className="v4-gitem" href="/works" key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`ゼムケンサービスの施工実績 ${String(i + 1).padStart(2, "0")}｜北九州の店舗・住宅デザイン`} loading="lazy" />
              <span className="v4-gitem__cap">Works {String(i + 3).padStart(2, "0")}</span>
            </Link>
          ))}
        </div>

        <p className="center mt40" data-rise>
          <Link className="v4-btn v4-btn--line" href="/works">
            施工実績をすべて見る
          </Link>
        </p>
      </section>

      {/* ============ DX × DIVERSITY（プレビュー） ============ */}
      <section id="dx" className="v4-sec v4-dx">
        <div className="wrap4 v4-shead v4-shead--center" data-rise>
          <span className="v4-shead__idx">03</span>
          <p className="v4-eyebrow">DX &times; Diversity</p>
          <h2 className="v4-h2">建設業を、民主化する。</h2>
          <p className="v4-lead">
            誰もが建設業で活躍できるように。現場を支える3つのデジタルツールを自社開発しています。
            <br />
            <em>DEMOCRATIZING CONSTRUCTION FOR ALL</em>
          </p>
        </div>

        <div className="wrap4 v4-worktags">
          {DX_TOOLS.map((c, i) => (
            <div className="v4-worktag" key={c.en} data-rise style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="v4-worktag__en">{c.en}</span>
              <span className="v4-worktag__ja">{c.ja}</span>
              <span className="v4-worktag__note">{c.note}</span>
            </div>
          ))}
        </div>

        <p className="center mt40" data-rise>
          <Link className="v4-btn v4-btn--line" href="/dx">
            DX×ダイバーシティを詳しく
          </Link>
        </p>
      </section>

      {/* ============ RECRUIT（プレビュー） ============ */}
      <section id="recruit" className="v4-sec v4-recruit">
        <div className="v4-recruit__hero">
          <div className="v4-recruit__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_11.jpg" alt="ゼムケンサービスで働く" />
          </div>
          <div className="v4-recruit__intro wrap4">
            <div className="v4-shead" data-rise>
              <span className="v4-shead__idx v4-shead__idx--light">04</span>
              <p className="v4-eyebrow v4-eyebrow--light">Recruit</p>
              <h2 className="v4-h2 v4-h2--light">
                建築業界を、
                <br />
                女性の力でぱーっと明るく。
              </h2>
            </div>
            <p className="v4-recruit__text" data-rise>
              「好き」を仕事にしたい学生のみなさんへ。ゼムケンサービスは、未経験からでも安心して成長できる環境と、女性が長く活躍できる働き方があります。
            </p>
          </div>
        </div>

        <div className="wrap4 v4-stats">
          {RECRUIT_STATS.map((s, i) => (
            <div className="v4-stat" key={s.label} data-rise style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="v4-stat__num">
                <V4CountUp value={s.num} />
                <span>{s.unit}</span>
              </p>
              <p className="v4-stat__label">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="center mt40" data-rise>
          <Link className="v4-btn v4-btn--fill" href="/recruit">
            採用情報・インターンシップ
          </Link>
        </p>
      </section>

      {/* ============ NEWS（プレビュー） ============ */}
      <section id="news" className="v4-sec v4-sec--cream v4-news">
        <div className="wrap4 v4-shead v4-shead--center" data-rise>
          <span className="v4-shead__idx">05</span>
          <p className="v4-eyebrow">News</p>
          <h2 className="v4-h2">お知らせ</h2>
        </div>
        <div className="wrap4 v4-newslist">
          {news.map((n, i) => (
            <a className="v4-newsitem" href={n.href} target="_blank" rel="noopener noreferrer" key={i} data-rise style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="v4-newsitem__date">{n.date}</span>
              <span className={`v4-newsitem__tag${n.tag === "メディア掲載" ? " v4-newsitem__tag--media" : ""}`}>
                {n.tag}
              </span>
              <span className="v4-newsitem__text">{n.text}</span>
              <span className="v4-newsitem__arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className="center mt40" data-rise>
          <Link className="v4-btn v4-btn--line" href="/news">
            お知らせ一覧
          </Link>
        </p>
      </section>

      {/* ============ COMPANY（概要） ============ */}
      <section id="company" className="v4-sec v4-company">
        <div className="wrap4 v4-shead v4-shead--center" data-rise>
          <span className="v4-shead__idx">06</span>
          <p className="v4-eyebrow">Company</p>
          <h2 className="v4-h2">会社概要</h2>
        </div>
        <div className="wrap4 v4-company__grid" data-rise>
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
        <p className="center mt40" data-rise>
          <Link className="v4-textlink" href="/company">
            会社情報を詳しく見る
          </Link>
        </p>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="v4-sec v4-contact">
        <span className="v4-ring v4-ring--contact" aria-hidden />
        <div className="wrap4 v4-contact__box" data-rise>
          <p className="v4-eyebrow v4-eyebrow--light v4-eyebrow--center">Contact</p>
          <h2 className="v4-h2 v4-h2--light">
            まずは、お話を
            <br />
            聞かせてください。
          </h2>
          <p className="v4-contact__lead">
            店舗づくり・住まいのご相談、採用のお問い合わせまで。どんなことでもお気軽にどうぞ。
          </p>
          <p className="v4-contact__tel">
            <a href="tel:0939310301">093-931-0301</a>
          </p>
          <p className="v4-contact__hours">受付時間 9:00 – 18:00（土日祝を除く）</p>
          <Link className="v4-btn v4-btn--fill v4-btn--lg" href="/contact">
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </>
  )
}
