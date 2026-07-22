import Link from "next/link"

const COLS = [
  {
    head: "事業・サービス",
    links: [
      { href: "/v1/branding", label: "空間プロデュース" },
      { href: "/v1/works", label: "施工実績" },
      { href: "/v1/consulting", label: "建築何でも相談" },
      { href: "/v1/branding", label: "ブランディング講座" },
      { href: "/v1", label: "DIY FRIENDS" },
    ],
  },
  {
    head: "会社案内",
    links: [
      { href: "/v1/about", label: "会社概要" },
      { href: "/v1/about#message", label: "代表あいさつ・プロフィール" },
      { href: "/v1/about#philosophy", label: "理念体系" },
      { href: "/v1/about#history", label: "沿革" },
      { href: "/v1/about#staff", label: "スタッフ紹介" },
      { href: "/v1/recruit", label: "採用情報" },
    ],
  },
  {
    head: "取り組み",
    links: [
      { href: "/v1/about#sdgs", label: "SDGsへの取り組み" },
      { href: "/v1/about#csr", label: "CSR" },
      { href: "/v1/about#machi", label: "まちづくりへの取り組み" },
      { href: "/v1/about#public", label: "公共事業（北九州市・福岡県）" },
      { href: "/v1/about#media", label: "講演・メディア掲載実績" },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <div className="brand">
            <span className="brand__mark">Zm&apos;ken</span>
            <span className="brand__name">
              有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
            </span>
          </div>
          <p>
            〒802-0000　福岡県北九州市小倉北区片野3-7-4
            <br />
            TEL 093-931-0301（受付 9:00-18:00／土日祝を除く）
            <br />
            女性力で、建設業界をぱーっと明るく。
          </p>
          <div className="sns">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="DIY FRIENDS">DIY</a>
          </div>
        </div>
        <nav className="fnav">
          {COLS.map((col) => (
            <div key={col.head}>
              <h4>{col.head}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="wrap footer__btm">
        <span>© 2026 有限会社ゼムケンサービス（サンプル）</span>
        <span>
          <Link href="/v1/contact">お問い合わせ</Link>　｜　プライバシーポリシー　｜　サイトマップ
        </span>
      </div>
    </footer>
  )
}
