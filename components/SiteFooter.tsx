import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <div className="brand">
            <span className="brand__logo">Zm</span>
            <span className="brand__name">
              有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
            </span>
          </div>
          <p>
            福岡県北九州市小倉北区片野3-7-4
            <br />
            女性力で、建設業界をぱーっと明るく。
          </p>
          <div className="sns">
            <a href="#">f</a>
            <a href="#">IG</a>
            <a href="#">X</a>
            <a href="#">DIY</a>
          </div>
        </div>
        <nav className="fnav">
          <div>
            <h4>サービス</h4>
            <ul>
              <li><Link href="/branding">空間プロデュース</Link></li>
              <li><Link href="/consulting">建築なんでも相談</Link></li>
              <li><Link href="/works">施工実績</Link></li>
            </ul>
          </div>
          <div>
            <h4>会社案内</h4>
            <ul>
              <li><Link href="/about">私たちについて</Link></li>
              <li><Link href="/recruit">求人募集中</Link></li>
              <li><Link href="/contact">お問合せ</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="wrap footer__btm">
        <span>© 2026 有限会社ゼムケンサービス（サンプル）</span>
        <span>プライバシーポリシー ｜ サイトマップ</span>
      </div>
    </footer>
  )
}
