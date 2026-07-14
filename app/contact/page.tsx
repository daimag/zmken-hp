import type { Metadata } from "next"
import PageHero from "@/components/PageHero"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = { title: "お問合せ" }

export default function Contact() {
  return (
    <>
      <PageHero title="お問い合わせ" subtitle="ご相談・ご依頼・採用のご応募など、お気軽にどうぞ。" current="お問合せ" />
      <main className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="feature">
            <div className="feature__body">
              <h2>お電話でのお問い合わせ</h2>
              <p className="tel" style={{ color: "var(--pink-d)", fontSize: "2rem", fontWeight: 900 }}>
                093-000-0000
              </p>
              <p style={{ color: "var(--muted)" }}>受付時間 9:00 - 18:00（土日祝を除く）</p>
              <p style={{ marginTop: 20 }}>
                〒000-0000
                <br />
                福岡県北九州市小倉北区片野3-7-4
              </p>
            </div>
            <div className="feature__media">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
