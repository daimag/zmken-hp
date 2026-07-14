import type { Metadata } from "next"
import "./v2.css"
import V2Header from "@/components/v2/V2Header"
import V2Footer from "@/components/v2/V2Footer"
import V2Reveal from "@/components/v2/V2Reveal"

export const metadata: Metadata = {
  title: "ゼムケンサービス｜v2 デザイン案（ハイブリッド）",
  description: "白基調×特大タイポ×曲線×写真主役のv2デザイン案。",
}

export default function V2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="v2" id="top">
      <div className="v2-note">
        ★ 新デザイン案（v2 / ハイブリッド）― 現行デザインは「/」でご覧いただけます
      </div>
      <V2Header />
      {children}
      <V2Footer />
      <V2Reveal />
    </div>
  )
}
