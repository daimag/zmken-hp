import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = { title: "私たちについて" }

export default function About() {
  return (
    <>
      <PageHero title="私たちについて" subtitle="ゼムケンサービスの歩みと、大切にしていること。" current="私たちについて" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="feature" style={{ marginBottom: 56 }}>
            <div className="feature__media"><div className="ph">代表 籠田淳子<br />プロフィール写真</div></div>
            <div className="feature__body">
              <p className="eyebrow">MESSAGE</p>
              <h2>代表挨拶</h2>
              <p>「女性力で、建設業界をぱーっと明るく変えたい」。その想いで、女性の視点を活かした空間づくりに取り組んでいます。使う人の暮らしに寄り添い、オモイをカタチにしてまいります。</p>
              <p style={{ marginTop: 12, color: "var(--muted)" }}>代表取締役　籠田 淳子</p>
            </div>
          </div>

          <h2 className="h-sec center">沿革</h2>
          <div className="news mt-32">
            <div className="news__item"><span className="news__date">1993</span><span className="news__ttl">創業。北九州にて建築サービスを開始</span></div>
            <div className="news__item"><span className="news__date">2002</span><span className="news__ttl">ドメイン zmken.co.jp を開設、Web発信を強化</span></div>
            <div className="news__item"><span className="news__date">2023</span><span className="news__ttl">DIY FRIENDS プロジェクト始動</span></div>
            <div className="news__item"><span className="news__date">2025</span><span className="news__ttl">日建連『けんせつ小町活躍推進表彰』優秀賞 受賞</span></div>
          </div>

          <div className="grid grid-3" style={{ marginTop: 48 }}>
            <div className="card"><div className="card__body"><h3>理念体系</h3><p>オモイをカタチに、建築は統合芸術。</p></div></div>
            <div className="card"><div className="card__body"><h3>スタッフ紹介</h3><p>女性を中心とした多彩なメンバー。</p></div></div>
            <div className="card"><div className="card__body"><h3>CSR・まちづくり</h3><p>地域とともに歩む取り組み。</p></div></div>
          </div>

          <p className="center mt-32"><Link className="btn" href="/v1/contact">お問い合わせ</Link></p>
        </div>
      </main>
    </>
  )
}
