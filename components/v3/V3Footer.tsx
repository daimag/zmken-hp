export default function V3Footer() {
  return (
    <footer className="v3-footer" id="contact">
      <div className="v3-footer__top">
        <div className="v3-footer__brand">
          <div className="v3-brand">
            <span className="v3-brand__mark">Zm&apos;ken</span>
            <span className="v3-brand__name">
              有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
            </span>
          </div>
          <p>
            〒802-0000　福岡県北九州市小倉北区片野3-7-4
            <br />
            TEL 093-931-0301（受付 9:00-18:00／土日祝を除く）
          </p>
        </div>
        <nav className="v3-fnav">
          <div>
            <h4>Service</h4>
            <ul>
              <li><a href="#service">空間プロデュース</a></li>
              <li><a href="#works">施工実績</a></li>
              <li><a href="#service">建築何でも相談</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">会社情報</a></li>
              <li><a href="#recruit">採用情報</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="v3-footer__btm">
        <span>© 2026 有限会社ゼムケンサービス（v3サンプル）</span>
        <span>プライバシーポリシー ｜ サイトマップ</span>
      </div>
    </footer>
  )
}
