const FOOT_NAV = [
  { label: "会社情報", href: "/company" },
  { label: "事業内容", href: "/service" },
  { label: "施工実績", href: "/works" },
  { label: "DX×多様性", href: "/dx" },
  { label: "採用情報", href: "/recruit" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
]

export default function V4Footer() {
  return (
    <footer className="v4-foot">
      <div className="v4-foot__top wrap4">
        <div className="v4-foot__brand">
          <span className="v4-logo__mark">Zm&apos;ken</span>
          <p>
            オモイを、カタチに。
            <br />
            女性の感性で、まちに元気を。
          </p>
        </div>

        <nav className="v4-foot__nav" aria-label="フッターナビゲーション">
          {FOOT_NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="v4-foot__info">
          <p className="v4-foot__name">有限会社ゼムケンサービス</p>
          <p>〒802-0064 福岡県北九州市小倉北区片野3-7-4</p>
          <p>
            TEL <a href="tel:0939310301">093-931-0301</a>（平日 9:00–18:00）
          </p>
        </div>
      </div>

      <div className="v4-foot__bottom wrap4">
        <small>© {2026} Zm&apos;ken Service Co., Ltd.</small>
        <small className="v4-foot__note">
          ※本ページはデザイン確認用のモックアップです。写真・文言は仮のものを含みます。
        </small>
      </div>
    </footer>
  )
}
