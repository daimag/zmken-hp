"use client"

import { useState } from "react"

const SUBJECTS = [
  "店舗・住宅のご相談",
  "採用・インターンシップ",
  "取材・メディア",
  "その他のお問い合わせ",
]

// 送信先。
// ★本番方針＝サーバー送信フォーム（メール送信形式）に移行予定。
//   実装方式・宛先・自動返信・差出人ドメイン(SPF/DKIM)は先方確認後に確定。
//   詳細: docs/お問い合わせフォーム_検討事項_20260722.md
//   現状は暫定でメーラー起動（mailto）方式。
const TO = "info@zmken.co.jp"

export default function V4ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get("name") ?? "")
    const company = String(f.get("company") ?? "")
    const email = String(f.get("email") ?? "")
    const tel = String(f.get("tel") ?? "")
    const subject = String(f.get("subject") ?? "")
    const body = String(f.get("body") ?? "")

    const mailBody = [
      `お名前：${name}`,
      `会社名：${company}`,
      `メール：${email}`,
      `電話：${tel}`,
      `種別：${subject}`,
      "",
      "――― お問い合わせ内容 ―――",
      body,
    ].join("\n")

    // 現状はメーラー起動方式（バックエンド不要）。本番はフォームAPIに接続予定。
    window.location.href =
      `mailto:${TO}?subject=` +
      encodeURIComponent(`【HP問い合わせ】${subject}（${name}様）`) +
      `&body=` +
      encodeURIComponent(mailBody)

    setSent(true)
  }

  return (
    <form className="v4-form" onSubmit={handleSubmit}>
      <div className="v4-form__row">
        <label className="v4-field">
          <span>お名前 <em>必須</em></span>
          <input type="text" name="name" required placeholder="山田 花子" />
        </label>
        <label className="v4-field">
          <span>会社名・団体名</span>
          <input type="text" name="company" placeholder="株式会社◯◯" />
        </label>
      </div>

      <div className="v4-form__row">
        <label className="v4-field">
          <span>メールアドレス <em>必須</em></span>
          <input type="email" name="email" required placeholder="example@mail.com" />
        </label>
        <label className="v4-field">
          <span>電話番号</span>
          <input type="tel" name="tel" placeholder="093-000-0000" />
        </label>
      </div>

      <label className="v4-field">
        <span>お問い合わせ種別</span>
        <select name="subject" defaultValue={SUBJECTS[0]}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="v4-field">
        <span>お問い合わせ内容 <em>必須</em></span>
        <textarea name="body" required rows={7} placeholder="ご相談内容をご記入ください。" />
      </label>

      <label className="v4-check">
        <input type="checkbox" required />
        <span>個人情報の取り扱いに同意します。</span>
      </label>

      <div className="center" style={{ marginTop: "8px" }}>
        <button className="v4-btn v4-btn--fill v4-btn--lg" type="submit">
          この内容で送信する
        </button>
      </div>

      {sent ? (
        <p className="v4-form__note" role="status">
          メールソフトが起動します。起動しない場合は、お手数ですが{" "}
          <a href={`mailto:${TO}`}>{TO}</a> 宛に直接ご連絡ください。
        </p>
      ) : (
        <p className="v4-form__note">
          お急ぎの場合はお電話（<a href="tel:0939310301">093-931-0301</a>／平日 9:00–18:00）でも承ります。
        </p>
      )}
    </form>
  )
}
