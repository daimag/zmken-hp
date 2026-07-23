"use client"

import { useEffect } from "react"

// [data-rise] 要素をスクロールでフェードアップ表示
export default function V2Reveal() {
  useEffect(() => {
    // JSが有効なときだけ「初期非表示→リビール」を有効化（未実行時は常に表示＝空白事故を防止）
    const root = document.documentElement
    root.classList.add("v4-reveal")

    const els = Array.from(document.querySelectorAll("[data-rise], .v4-clip"))
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))

    // 保険：1.5秒後、ビューポート内で未リビールの要素は強制表示（初回描画の取りこぼし対策）
    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (el.classList.contains("in")) return
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in")
      })
    }, 1500)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])
  return null
}
