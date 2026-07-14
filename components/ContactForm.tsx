"use client"

export default function ContactForm() {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        alert("サンプルのため送信は行いません")
      }}
    >
      <input type="text" placeholder="お名前" required />
      <input type="email" placeholder="メールアドレス" required />
      <input type="text" placeholder="件名" />
      <textarea placeholder="お問い合わせ内容" rows={5} required />
      <button className="btn" type="submit" style={{ justifyContent: "center" }}>
        送信する
      </button>
    </form>
  )
}
