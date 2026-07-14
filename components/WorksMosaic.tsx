// 施工実績のタイル状（モザイク）ギャラリー。実写真は public/works/ に配置。
export const WORKS_IMAGES = [
  "k_9", "k_4", "k_11", "k_10", "k_8", "k_7", "k_6", "k_5",
  "k_13", "k_14", "k_15", "k_16", "k_17", "k_18", "k_19", "k_20",
  "k_21", "k_12", "k_42", "k_47", "k_48", "k_49",
].map((f) => `/works/${f}.jpg`)

// 大小タイルの配置パターン（散りばめ）
const SPANS = [
  "m-big", "", "", "m-tall",
  "", "m-wide", "", "",
  "m-tall", "", "m-wide", "",
  "m-big", "", "", "m-wide",
  "", "m-tall", "", "",
  "m-wide", "",
]

export default function WorksMosaic({
  images = WORKS_IMAGES,
  limit,
}: {
  images?: string[]
  limit?: number
}) {
  const list = limit ? images.slice(0, limit) : images
  return (
    <div className="mosaic">
      {list.map((src, i) => (
        <div className={`m-item ${SPANS[i % SPANS.length]}`} key={src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`施工実績 ${String(i + 1).padStart(2, "0")}`} loading="lazy" />
          <div className="m-cap">
            <small>Works {String(i + 1).padStart(2, "0")}</small>
            <span>施工事例</span>
          </div>
        </div>
      ))}
    </div>
  )
}
