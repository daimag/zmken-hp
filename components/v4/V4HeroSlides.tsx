"use client"

import { useEffect, useState } from "react"

// TOPヒーローの背景スライド。既存のv4写真(k_9)＋新規2枚を交互にクロスフェード。
// dim: 色が濃い写真は薄いフィルタ＋白ベールで今のトーンに馴染ませる。
const SLIDES = [
  { src: "/works/k_9.jpg", dim: false, pos: "center" },
  { src: "/hero/ai-hero.jpg", dim: true, pos: "center 42%" },
  { src: "/hero/ai-hero2.jpg", dim: true, pos: "center 38%" },
]

const INTERVAL = 6000 // 1枚あたりの表示時間(ms)

export default function V4HeroSlides() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      setActive((v) => (v + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="v4-hero__media">
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`v4-hero__slide ${i === active ? "is-active" : ""} ${s.dim ? "is-dim" : ""}`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={i === 0 ? "ゼムケンサービスが手がけた店舗空間" : ""} style={{ objectPosition: s.pos }} />
        </div>
      ))}
      <span className="v4-hero__veil" />
    </div>
  )
}
