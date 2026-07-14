export default function V2Footer() {
  return (
    <footer className="v2-footer" id="contact">
      <div className="v2-footer__top">
        <div className="v2-footer__brand">
          <div className="v2-brand">
            <span className="v2-brand__mark">Zm&apos;ken</span>
            <span className="v2-brand__name">
              有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
            </span>
          </div>
          <p>
            〒802-0000　福岡県北九州市小倉北区片野3-7-4
            <br />
            TEL 093-931-0301（受付 9:00-18:00／土日祝を除く）
          </p>
        </div>
        <nav className="v2-fnav">
          <div>
            <h4>SERVICE</h4>
            <ul>
              <li><a href="#service">空間プロデュース</a></li>
              <li><a href="#works">施工実績</a></li>
              <li><a href="#service">建築何でも相談</a></li>
            </ul>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">会社概要</a></li>
              <li><a href="#recruit">採用情報</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="v2-footer__btm">
        <span>© 2026 有限会社ゼムケンサービス（v2サンプル）</span>
        <span>プライバシーポリシー ｜ サイトマップ</span>
      </div>
    </footer>
  )
}
