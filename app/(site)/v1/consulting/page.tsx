import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = { title: "建築なんでも相談" }

export default function Consulting() {
  return (
    <>
      <PageHero title="建築なんでも相談室" subtitle="「何から始めれば？」も大歓迎。女性スタッフが親身に対応します。" current="建築なんでも相談" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="grid grid-3 mb-48">
            <div className="card"><div className="card__body"><h3>新規出店・開業</h3><p>物件選びから開業までトータルでサポート。</p></div></div>
            <div className="card"><div className="card__body"><h3>リフォーム・間取り</h3><p>暮らしに合わせた住まいのご提案。</p></div></div>
            <div className="card"><div className="card__body"><h3>内覧会同行・第三者監理</h3><p>専門家の目で、安心のチェックを。</p></div></div>
          </div>
          <div className="contact-box">
            <h2>まずはお気軽にご相談を</h2>
            <p>相談は無料です。お電話またはフォームからどうぞ。</p>
            <p className="tel">093-931-0301</p>
            <Link className="btn" href="/v1/contact">相談フォームへ</Link>
          </div>
        </div>
      </main>
    </>
  )
}
