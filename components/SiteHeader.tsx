"use client"

import Link from "next/link"
import { useState } from "react"

const NAV = [
  { href: "/", label: "TOP" },
  { href: "/recruit", label: "求人募集中" },
  { href: "/about", label: "私たちについて" },
  { href: "/works", label: "施工実績" },
  { href: "/consulting", label: "建築なんでも相談" },
  { href: "/branding", label: "空間プロデュース" },
  { href: "/contact", label: "お問合せ", cta: true },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          <span className="brand__logo">Zm</span>
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
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
