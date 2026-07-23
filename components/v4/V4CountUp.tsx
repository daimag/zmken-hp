"use client"

import { useEffect, useRef, useState } from "react"

/**
 * 数値カウントアップ。画面に入ったら 0→目標値へ。
 * ・純粋な整数（72, 1993）のみアニメ。それ以外（"9–18"等）はそのまま表示。
 * ・SSR/初期表示は最終値＝空白や"0"固定の事故を防止。JS有効かつ表示領域に入った時だけ演出。
 */
export default function V4CountUp({ value }: { value: string }) {
  const target = /^\d+$/.test(value) ? parseInt(value, 10) : null
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return

    let ran = false
    const run = () => {
      if (ran) return
      ran = true
      const dur = 1300
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur)
        const eased = 1 - Math.pow(1 - t, 3)
        const n = Math.min(target, Math.max(0, Math.round(eased * target)))
        setDisplay(String(n))
        if (t < 1) requestAnimationFrame(tick)
        else setDisplay(String(target))
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDisplay("0")
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)

    // 保険：発火しなくても必ず最終値を表示
    const fb = window.setTimeout(() => {
      if (!ran) setDisplay(String(target))
    }, 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(fb)
    }
  }, [target, value])

  return <span ref={ref}>{display}</span>
}
