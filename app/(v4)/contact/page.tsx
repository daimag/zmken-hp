import type { Metadata } from "next"
import V4PageHero from "@/components/v4/V4PageHero"
import V4ContactForm from "@/components/v4/V4ContactForm"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "有限会社ゼムケンサービスへのお問い合わせ。店舗・住まいのご相談、採用・取材のお問い合わせはこちらから。",
}

export default function ContactPage() {
  return (
    <>
      <V4PageHero
        idx="06"
        en="Contact"
        title="お問い合わせ"
        lead="店舗づくり・住まいのご相談、採用・取材のお問い合わせまで。どんなことでもお気軽にどうぞ。"
        img="/studio/oasis1.jpg"
      />

      <section className="v4-sec">
        <div className="wrap4 v4-contactwrap">
          <div className="v4-contactinfo">
            <p className="v4-eyebrow">Direct</p>
            <p className="v4-contactinfo__tel">
              <a href="tel:0939310301">093-931-0301</a>
            </p>
            <p className="v4-contactinfo__hours">受付時間 9:00 – 18:00（土日祝を除く）</p>
            <dl className="v4-contactinfo__dl">
              <div>
                <dt>Mail</dt>
                <dd>
                  <a href="mailto:info@zmken.co.jp">info@zmken.co.jp</a>
                </dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>〒802-0064 福岡県北九州市小倉北区片野3-7-4</dd>
              </div>
            </dl>
          </div>

          <div className="v4-contactform">
            <V4ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
