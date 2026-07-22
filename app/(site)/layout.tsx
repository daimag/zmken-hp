import type { Metadata } from "next"
import "../globals.css"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export const metadata: Metadata = {
  title: "ゼムケンサービス｜v1（旧現行デザイン踏襲版・アーカイブ）",
  description: "現行HPと同じ構成で作成した旧デザイン踏襲版（アーカイブ）。本番は「/」。",
  robots: { index: false, follow: false },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="sample-note">
        ★ v1／旧デザイン踏襲版（アーカイブ・現行HPと同じ構成）― 本番デザインは「/」でご覧いただけます
      </div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
