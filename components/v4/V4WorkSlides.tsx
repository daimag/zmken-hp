"use client"

import { useEffect, useState } from "react"

/** 施工事例カードの写真クロスフェード（複数枚を約3.6秒ごとに切替） */
export default function V4WorkSlides({ imgs, alt }: { imgs: string[]; alt: string }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (imgs.length < 2) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((v) => (v + 1) % imgs.length), 3600)
    return () => clearInterval(t)
  }, [imgs.length])

  return (
    <div className="v4-slides">
      {imgs.map((src, idx) => (
        <img
          /* eslint-disable-next-line @next/next/no-img-element */
          key={src}
          src={src}
          alt={idx === 0 ? alt : ""}
          className={idx === i ? "is-on" : ""}
          loading="lazy"
        />
      ))}
    </div>
  )
}
