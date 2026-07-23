/** 下層ページ共通のページヘッダー（固定ヘッダー分の余白を確保）
 *  img を渡すと写真背景＋濃いオーバーレイの骨太ヒーローになる（未指定はクリーム地）。 */
export default function V4PageHero({
  idx,
  en,
  title,
  lead,
  img,
}: {
  idx: string
  en: string
  title: string
  lead?: string
  img?: string
}) {
  if (img) {
    return (
      <section
        className="v4-page-hero v4-page-hero--photo"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="v4-page-hero__scrim" />
        <div className="wrap4 v4-shead v4-shead--center v4-page-hero__inner">
          <span className="v4-shead__idx">{idx}</span>
          <p className="v4-eyebrow">{en}</p>
          <h1 className="v4-h2">{title}</h1>
          {lead ? <p className="v4-lead">{lead}</p> : null}
        </div>
      </section>
    )
  }

  return (
    <section className="v4-page-hero">
      <div className="wrap4 v4-shead v4-shead--center">
        <span className="v4-shead__idx">{idx}</span>
        <p className="v4-eyebrow">{en}</p>
        <h1 className="v4-h2">{title}</h1>
        {lead ? <p className="v4-lead">{lead}</p> : null}
      </div>
    </section>
  )
}
