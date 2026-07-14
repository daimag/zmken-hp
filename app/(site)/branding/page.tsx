import type { Metadata } from "next"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = { title: "空間プロデュース" }

export default function Branding() {
  return (
    <>
      <PageHero title="空間プロデュース" subtitle="お店の価値を引き出し、魅力的にカタチにする。" current="空間プロデュース" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="feature mb-48">
            <div className="feature__media"><div className="ph">ブランディング事例</div></div>
            <div className="feature__body">
              <h2>コンセプトから、空間へ。</h2>
              <p>「誰に、何を、どう届けるか」。ブランドの核を定義し、内装・サイン・什器まで一貫した世界観でカタチにします。</p>
            </div>
          </div>
          <div className="grid grid-3">
            <div className="card"><div className="card__body"><h3>パースデザイン</h3><p>完成イメージを見える化し、認識のズレをなくします。</p></div></div>
            <div className="card"><div className="card__body"><h3>CI・VI／サイン計画</h3><p>ロゴから看板まで、統一感のあるブランド表現。</p></div></div>
            <div className="card"><div className="card__body"><h3>VMD</h3><p>商品が映える売場づくりで、来店を購入につなげます。</p></div></div>
          </div>
        </div>
      </main>
    </>
  )
}
