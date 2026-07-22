"use client"

import Link from "next/link"
import { useState } from "react"

const NAV = [
  { href: "/v1", en: "Home", label: "TOP" },
  { href: "/v1/works", en: "Works", label: "施工実績" },
  { href: "/v1/branding", en: "Branding", label: "空間プロデュース" },
  { href: "/v1/consulting", en: "Consulting", label: "建築何でも相談" },
  { href: "/v1/recruit", en: "Recruit", label: "採用情報" },
  { href: "/v1/about", en: "Company", label: "会社概要" },
  { href: "/v1/contact", en: "Contact", label: "お問い合わせ", cta: true },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/v1">
          {/* 実ロゴ（Zm'ken 赤ワードマーク）を再現。実画像を差し込む場合は public/logo.svg に置換 */}
          <span className="brand__mark">Zm&apos;ken</span>
          <span className="brand__name">
            有限会社ゼムケンサービス<small>Zm&apos;ken Service Co., Ltd.</small>
          </span>
        </Link>
        <button
          className="hamburger"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`menu${open ? " is-open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.href} className={n.cta ? "is-cta" : undefined}>
              <Link href={n.href} onClick={() => setOpen(false)}>
                <span className="menu__en">{n.en}</span>
                <span className="menu__jp">{n.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
