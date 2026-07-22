/** 下層ページ共通のページヘッダー（固定ヘッダー分の余白を確保） */
export default function V4PageHero({
  idx,
  en,
  title,
  lead,
}: {
  idx: string
  en: string
  title: string
  lead?: string
}) {
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
