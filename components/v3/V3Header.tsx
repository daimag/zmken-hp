"use client"

import { useState } from "react"

const NAV = [
  { href: "#top", label: "トップ" },
  { href: "#service", label: "サービス" },
  { href: "#works", label: "施工実績" },
  { href: "#about", label: "会社情報" },
  { href: "#recruit", label: "採用" },
]

export default function V3Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="v3-header">
      <div className="v3-nav">
        <a className="v3-brand" href="#top">
          <span className="v3-brand__mark">Zm&apos;ken</span>
          <span className="v3-brand__name">
            有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
          </span>
        </a>
        <ul className="v3-menu">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="v3-actions">
          <a className="v3-req" href="#contact">資料請求 →</a>
          <a className="v3-contact" href="#contact">お問い合わせ</a>
          <button className="v3-burger" aria-label="メニュー" onClick={() => setOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
