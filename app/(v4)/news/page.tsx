import type { Metadata } from "next"
import V4PageHero from "@/components/v4/V4PageHero"
import { NEWS } from "@/components/v4/data"

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "有限会社ゼムケンサービスのお知らせ・メディア掲載情報。受賞歴・講演・取材などの最新情報をお届けします。",
}

export default function NewsPage() {
  return (
    <>
      <V4PageHero
        idx="05"
        en="News"
        title="お知らせ"
        lead="受賞・メディア掲載・講演など、ゼムケンサービスの最新情報。"
      />

      <section className="v4-sec v4-news">
        <div className="wrap4 v4-newslist">
          {NEWS.map((n, i) => (
            <a
              className="v4-newsitem"
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
            >
              <span className="v4-newsitem__date">{n.date}</span>
              <span className={`v4-newsitem__tag${n.tag === "メディア掲載" ? " v4-newsitem__tag--media" : ""}`}>
                {n.tag}
              </span>
              <span className="v4-newsitem__text">{n.text}</span>
              <span className="v4-newsitem__arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
