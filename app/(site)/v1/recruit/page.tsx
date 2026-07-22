import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = { title: "求人募集中" }

export default function Recruit() {
  return (
    <>
      <PageHero title="採用情報" subtitle="建設業界を、いっしょに明るく変えていく仲間を募集しています。" current="求人募集中" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="feature mb-48">
            <div className="feature__media"><div className="ph">スタッフ集合写真</div></div>
            <div className="feature__body">
              <h2>「好き」を仕事に。</h2>
              <p>未経験からでも大丈夫。女性が働きやすい環境づくりに力を入れています。あなたの感性を、空間づくりに活かしてみませんか。</p>
            </div>
          </div>
          <table className="table">
            <tbody>
              <tr><th>募集職種</th><td>設計・施工管理／デザイン／プランナー</td></tr>
              <tr><th>雇用形態</th><td>正社員／パート（応相談）</td></tr>
              <tr><th>勤務地</th><td>福岡県北九州市小倉北区片野3-7-4</td></tr>
              <tr><th>応募方法</th><td>お問い合わせフォームよりご連絡ください</td></tr>
            </tbody>
          </table>
          <p className="center mt-32"><Link className="btn" href="/v1/contact">応募・お問い合わせ</Link></p>
        </div>
      </main>
    </>
  )
}
