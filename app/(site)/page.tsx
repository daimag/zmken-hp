import Link from "next/link"
import WorksMosaic from "@/components/WorksMosaic"

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/works/k_9.jpg" alt="ゼムケンサービスの施工実績" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__copy">
          <p className="label label--line">Space Design ／ Kitakyushu</p>
          <h1>
            オモイを、
            <br />
            <em>カタチに。</em>
          </h1>
          <p className="hero__lead">
            女性の感性で、店舗・住宅・空間をデザインする。
            <br />
            ― 建築は統合芸術 ―
          </p>
          <div className="hero__cta">
            <Link className="btn btn--light" href="/works">施工実績を見る</Link>
            <Link className="btn btn--light" href="/branding">空間プロデュース</Link>
          </div>
        </div>
        <span className="hero__scroll">SCROLL</span>
      </section>

      {/* ============ DIY FRIENDS ============ */}
      <section className="section">
        <div className="wrap feature">
          <div className="feature__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_15.jpg" alt="DIY FRIENDS" />
          </div>
          <div className="feature__body">
            <p className="eyebrow">PROJECT</p>
            <h2>DIY FRIENDS プロジェクト</h2>
            <p>DIYユーザーと女性サポーターをつなぐプラットフォーム。「つくる楽しさ」をみんなでシェアし、暮らしと街を自分たちの手で彩ります。（2023年4月始動）</p>
            <ul>
              <li>DIYキット・ワークショップ</li>
              <li>女性サポーターによる相談・サポート</li>
              <li>専用SNSでのコミュニティづくり</li>
            </ul>
            <p className="mt-20"><a className="btn" href="#">プロジェクトを見る</a></p>
          </div>
        </div>
      </section>

      {/* ============ SDGs ============ */}
      <section className="section section--soft center">
        <div className="wrap">
          <p className="eyebrow">SDGs</p>
          <h2 className="h-sec">建築業における「女性活躍」を発信</h2>
          <p className="lead">北九州市の企業として、建設現場で活躍する女性の姿を社会に届け、業界のイメージを明るく変えていきます。</p>
          <div className="pills">
            <div className="pill"><span>5</span> ジェンダー平等</div>
            <div className="pill"><span>8</span> 働きがい</div>
            <div className="pill"><span>11</span> 住み続けられるまちづくり</div>
            <div className="pill"><span>17</span> パートナーシップ</div>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="section center">
        <div className="wrap">
          <p className="eyebrow">PHILOSOPHY</p>
          <h2 className="h-sec">オモイをカタチに、<br />建築は統合芸術。</h2>
          <p className="lead">デザイン・設計・施工、そして「そこで過ごす人の想い」まで。すべてを一つに束ねてこそ、心に残る空間が生まれると私たちは考えます。</p>
          <div className="grid grid-3 mt-32" style={{ textAlign: "left" }}>
            <div className="card"><div className="card__body"><h3>女性の視点</h3><p>使う人の目線で、細やかに心地よい空間を設計します。</p></div></div>
            <div className="card"><div className="card__body"><h3>統合芸術</h3><p>デザインから施工まで一貫。ブレのない世界観をカタチに。</p></div></div>
            <div className="card"><div className="card__body"><h3>地域とともに</h3><p>北九州・福岡から、まちを元気にするものづくりを。</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="section section--soft">
        <div className="wrap center">
          <p className="eyebrow">LATEST NEWS</p>
          <h2 className="h-sec">最新のお知らせ</h2>
        </div>
        <div className="wrap news">
          <div className="news__item"><span className="news__date">2025.11.20</span><span className="news__tag">受賞</span><span className="news__ttl">日建連『けんせつ小町活躍推進表彰』にて優秀賞を受賞しました</span></div>
          <div className="news__item"><span className="news__date">2025.09.03</span><span className="news__tag">講演</span><span className="news__ttl">女性活躍推進セミナーに代表・籠田が登壇しました</span></div>
          <div className="news__item"><span className="news__date">2025.07.15</span><span className="news__tag">実績</span><span className="news__ttl">北九州市内 店舗リノベーション事例を施工実績に追加しました</span></div>
        </div>
      </section>

      {/* ============ PHOTO ============ */}
      <section className="section">
        <div className="wrap center">
          <p className="eyebrow">PHOTO</p>
          <h2 className="h-sec">施工実績</h2>
          <p className="lead">店舗・住宅・オフィス。女性ならではの視点で仕上げた空間の数々。</p>
        </div>
        <div className="wrap mt-32">
          <WorksMosaic limit={8} />
          <p className="center mt-32"><Link className="btn btn--ghost" href="/works">施工実績をすべて見る</Link></p>
        </div>
      </section>

      {/* ============ BRANDING ============ */}
      <section className="section section--soft">
        <div className="wrap feature feature--rev">
          <div className="feature__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_20.jpg" alt="空間ブランディング" />
          </div>
          <div className="feature__body">
            <p className="eyebrow">ARCHITECTURAL BRANDING</p>
            <h2>空間プロデュース</h2>
            <p>お店の価値を引き出し、魅力的にカタチにする。コンセプト設計から内装・サインまで、一貫した世界観でブランドを空間に落とし込みます。</p>
            <ul>
              <li>パースデザイン（イメージの見える化）</li>
              <li>CI・VIデザイン／サイン計画</li>
              <li>VMD（ヴィジュアルマーチャンダイジング）</li>
            </ul>
            <p className="mt-20"><Link className="btn" href="/branding">詳しく見る</Link></p>
          </div>
        </div>
      </section>

      {/* ============ SEMINAR ============ */}
      <section className="section center">
        <div className="wrap">
          <p className="eyebrow">SEMINAR</p>
          <h2 className="h-sec">ブランディング講座</h2>
          <p className="lead">「自分のお店をもっと魅力的に見せたい」方へ。空間づくりの考え方を学べる講座を開催しています。</p>
          <p className="mt-32"><a className="btn" href="#">講座の案内を見る</a></p>
        </div>
      </section>

      {/* ============ CONSULTING ============ */}
      <section className="section section--soft">
        <div className="wrap feature">
          <div className="feature__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/works/k_18.jpg" alt="建築なんでも相談室" />
          </div>
          <div className="feature__body">
            <p className="eyebrow">CONSULTING SERVICE</p>
            <h2>建築なんでも相談室</h2>
            <p>「何から始めればいい？」も大歓迎。新規出店から住まいのお悩みまで、女性スタッフが親身にお応えします。</p>
            <ul>
              <li>新規出店・開業のプランニング</li>
              <li>間取り・リフォームのご相談</li>
              <li>内覧会同行・第三者監理</li>
            </ul>
            <p className="mt-20"><Link className="btn" href="/consulting">相談してみる</Link></p>
          </div>
        </div>
      </section>

      {/* ============ STORE ============ */}
      <section className="section center">
        <div className="wrap">
          <p className="eyebrow">STORE</p>
          <h2 className="h-sec">オンラインストア</h2>
          <p className="lead">DIYキットや、まちづくりの冊子などを販売しています。</p>
          <div className="grid grid-3 mt-32" style={{ textAlign: "left" }}>
            {["DIYキット", "まちづくり冊子", "オリジナルグッズ"].map((name, i) => (
              <div className="card" key={i}>
                <div className="ph" style={{ aspectRatio: "16/10", border: 0, borderRadius: 0 }}>商品画像</div>
                <div className="card__body"><h3>{name}</h3><p>ゼムケンらしさを詰め込んだ商品です。</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPANY ============ */}
      <section className="section section--soft">
        <div className="wrap center">
          <p className="eyebrow">COMPANY</p>
          <h2 className="h-sec">会社概要</h2>
        </div>
        <div className="wrap mt-32">
          <table className="table">
            <tbody>
              <tr><th>社名</th><td>有限会社ゼムケンサービス（Zm&apos;ken Service Co., Ltd.）</td></tr>
              <tr><th>設立</th><td>1993年</td></tr>
              <tr><th>代表取締役</th><td>籠田 淳子</td></tr>
              <tr><th>所在地</th><td>福岡県北九州市小倉北区片野3-7-4</td></tr>
              <tr><th>事業内容</th><td>店舗デザイン・設計・施工／空間ブランディング／建築相談</td></tr>
              <tr><th>経営理念</th><td>オモイをカタチに、建築は統合芸術</td></tr>
            </tbody>
          </table>
          <p className="center mt-32"><Link className="btn btn--ghost" href="/about">私たちについて</Link></p>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section">
        <div className="wrap">
          <div className="contact-box">
            <p className="eyebrow" style={{ color: "var(--sun)" }}>CONTACT</p>
            <h2>お気軽にご相談ください</h2>
            <p>店舗づくり・空間ブランディング・建築のお悩み、まずはお話をお聞かせください。</p>
            <p className="tel">093-931-0301</p>
            <p style={{ fontSize: ".85rem", opacity: 0.85 }}>受付時間 9:00 - 18:00（土日祝を除く）</p>
            <Link className="btn" href="/contact">お問い合わせフォーム</Link>
          </div>
        </div>
      </section>
    </>
  )
}
