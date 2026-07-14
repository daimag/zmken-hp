import type { Metadata } from "next"
import "./v3.css"
import V3Header from "@/components/v3/V3Header"
import V3Footer from "@/components/v3/V3Footer"
import V2Reveal from "@/components/v2/V2Reveal"

export const metadata: Metadata = {
  title: "ゼムケンサービス｜v3 デザイン案（ミニマル / キネティック）",
  description: "白基調×極細巨大タイポ×グリッド線×ティールのv3デザイン案。",
}

export default function V3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="v3" id="top">
      <div className="v3-note">
        ★ 新デザイン案（v3 / ミニマル・キネティック）― 現行「/」・別案「/v2」もご覧いただけます
      </div>
      <V3Header />
      {children}
      <V3Footer />
      <V2Reveal />
    </div>
  )
}
