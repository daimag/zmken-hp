"use client"

import { useState } from "react"

const NAV = [
  { href: "#works", en: "Works", jp: "施工実績" },
  { href: "#service", en: "Service", jp: "事業内容" },
  { href: "#about", en: "Company", jp: "会社概要" },
  { href: "#recruit", en: "Recruit", jp: "採用情報" },
]

export default function V2Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="v2-header">
      <div className="v2-nav">
        <a className="v2-brand" href="#top">
          <span className="v2-brand__mark">Zm&apos;ken</span>
          <span className="v2-brand__name">
            有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
          </span>
        </a>
        <button className="v2-burger" aria-label="メニュー" onClick={() => setOpen((v) => !v)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={`v2-menu${open ? " open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)}>
                <span className="en">{n.en}</span>
                <span className="jp">{n.jp}</span>
              </a>
            </li>
          ))}
          <li className="v2-cta"><a href="#contact">お問い合わせ</a></li>
        </ul>
      </div>
    </header>
  )
}
