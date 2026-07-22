"use client"

import { useCallback, useEffect, useState } from "react"
import { WORK_FILTERS, workCat, type WorkRow } from "@/components/v4/data"
import V4WorkSlides from "./V4WorkSlides"

type Variant = "card" | "tile"

export default function V4WorkCatalog({
  items,
  variant = "card",
}: {
  items: WorkRow[]
  variant?: Variant
}) {
  const [filter, setFilter] = useState<string>("すべて")
  const [cur, setCur] = useState<WorkRow | null>(null)
  const [idx, setIdx] = useState(0)

  const imgs = cur?.imgs ?? []
  const close = useCallback(() => setCur(null), [])

  useEffect(() => {
    if (!cur) return
    setIdx(0)
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") setIdx((i) => (i + 1) % imgs.length)
      else if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + imgs.length) % imgs.length)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [cur, close, imgs.length])

  const list = filter === "すべて" ? items : items.filter((w) => workCat(w.name) === filter)

  const clickProps = (w: WorkRow, has: boolean) =>
    has
      ? {
          onClick: () => setCur(w),
          role: "button" as const,
          tabIndex: 0,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              setCur(w)
            }
          },
        }
      : {}

  return (
    <>
      {/* カテゴリフィルタ */}
      <div className="v4-filters">
        {WORK_FILTERS.map((f) => (
          <button key={f} className={`v4-filter ${filter === f ? "is-on" : ""}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {variant === "tile" ? (
        <div className="v4-tiles">
          {list.map((w) => {
            const has = !!(w.imgs && w.imgs.length > 0)
            return (
              <article className={`v4-tile ${has ? "is-clickable" : ""}`} key={`${w.name}-${w.year}`} {...clickProps(w, has)}>
                {has ? <V4WorkSlides imgs={w.imgs!} alt={w.name} /> : <span className="v4-tile__ph">photo</span>}
                {has && w.imgs!.length > 1 ? <span className="v4-pcard__count">＋{w.imgs!.length}枚</span> : null}
                <div className="v4-tile__cap">
                  <p className="v4-tile__name">{w.name}</p>
                  <p className="v4-tile__meta">
                    {w.year}｜{w.type}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="v4-pcards">
          {list.map((w) => {
            const has = !!(w.imgs && w.imgs.length > 0)
            return (
              <article className={`v4-pcard ${has ? "is-clickable" : ""}`} key={`${w.name}-${w.year}`} {...clickProps(w, has)}>
                <div className="v4-pcard__ph">
                  {has ? <V4WorkSlides imgs={w.imgs!} alt={w.name} /> : <span>photo</span>}
                  {has && w.imgs!.length > 1 ? <span className="v4-pcard__count">＋{w.imgs!.length}枚</span> : null}
                </div>
                <div className="v4-pcard__body">
                  <h3 className="v4-pcard__name">{w.name}</h3>
                  <p className="v4-pcard__meta">
                    {w.year}｜{w.type}
                  </p>
                  {w.note ? <p className="v4-pcard__note">{w.note}</p> : null}
                </div>
              </article>
            )
          })}
        </div>
      )}

      {cur ? (
        <div className="v4-modal" onClick={close} role="dialog" aria-modal="true" aria-label={cur.name}>
          <div className="v4-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="v4-modal__close" onClick={close} aria-label="閉じる">
              ×
            </button>
            <div className="v4-modal__media">
              {imgs.length > 0 ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={imgs[idx]} alt={`${cur.name} ${idx + 1}`} />
              ) : null}
              {imgs.length > 1 ? (
                <>
                  <button className="v4-modal__nav v4-modal__nav--prev" onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)} aria-label="前の写真">
                    ‹
                  </button>
                  <button className="v4-modal__nav v4-modal__nav--next" onClick={() => setIdx((i) => (i + 1) % imgs.length)} aria-label="次の写真">
                    ›
                  </button>
                </>
              ) : null}
            </div>
            <div className="v4-modal__body">
              <p className="v4-modal__cat">{workCat(cur.name)}</p>
              <h3 className="v4-modal__name">{cur.name}</h3>
              <p className="v4-modal__meta">
                {cur.year}｜{cur.type}
              </p>
              {cur.note ? <p className="v4-modal__note">{cur.note}</p> : null}
              {imgs.length > 1 ? (
                <div className="v4-modal__thumbs">
                  {imgs.map((src, i) => (
                    <button key={src} className={`v4-modal__thumb ${i === idx ? "is-on" : ""}`} onClick={() => setIdx(i)} aria-label={`写真 ${i + 1}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              ) : null}
              <p className="v4-modal__hint">
                {imgs.length > 1 ? `${idx + 1} / ${imgs.length}　` : ""}
                ※写真・詳細は順次追加してまいります。
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
