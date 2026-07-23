"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NAV = [
  { label: "会社情報", en: "Company", href: "/company" },
  { label: "事業内容", en: "Service", href: "/service" },
  { label: "施工実績", en: "Works", href: "/works" },
  { label: "DX×多様性", en: "DX", href: "/dx" },
  { label: "採用情報", en: "Recruit", href: "/recruit" },
  { label: "お知らせ", en: "News", href: "/news" },
]

export default function V4Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // メニューを開いている間は背面スクロールを固定
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // 下層ページ（ヒーローが無い）は常にソリッド表示
  const isSolid = solid || !isHome

  return (
    <header className={`v4-head ${isSolid ? "is-solid" : ""} ${open ? "is-open" : ""}`}>
      <div className="v4-head__inner">
        <Link href="/" className="v4-logo" onClick={() => setOpen(false)}>
          <span className="v4-logo__mark">Zm&apos;ken</span>
          <span className="v4-logo__sub">ゼムケンサービス</span>
        </Link>

        <nav className="v4-nav" aria-label="グローバルナビゲーション">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              <span className="v4-nav__ja">{n.label}</span>
              <span className="v4-nav__en">{n.en}</span>
            </Link>
          ))}
          <Link href="/contact" className="v4-nav__cta" onClick={() => setOpen(false)}>
            お問い合わせ
          </Link>
        </nav>

        <button
          className="v4-burger"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
