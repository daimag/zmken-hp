import Link from "next/link"

export default function PageHero({
  title,
  subtitle,
  current,
}: {
  title: string
  subtitle: string
  current: string
}) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
      <div className="wrap breadcrumb">
        <Link href="/">TOP</Link> ／ {current}
      </div>
    </>
  )
}
