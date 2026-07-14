import { NextRequest, NextResponse } from "next/server"

/**
 * 公開前のプレビュー保護用ベーシック認証ミドルウェア。
 *
 * 環境変数 SITE_AUTH_USER と SITE_AUTH_PASS の両方を設定すると、
 * サイト全体にブラウザ標準の id/pw 認証ダイアログがかかる。
 * どちらか一方でも未設定なら素通り（ローカル開発・本番公開後はこちら）。
 */
export function middleware(req: NextRequest) {
  const expectedUser = process.env.SITE_AUTH_USER
  const expectedPass = process.env.SITE_AUTH_PASS

  // 両方設定されていなければ認証なし（公開モード）
  if (!expectedUser || !expectedPass) {
    return NextResponse.next()
  }

  const auth = req.headers.get("authorization")

  if (!auth || !auth.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Preview"' },
    })
  }

  try {
    const decoded = atob(auth.slice(6))
    const idx = decoded.indexOf(":")
    if (idx < 0) {
      throw new Error("Invalid format")
    }
    const providedUser = decoded.slice(0, idx)
    const providedPass = decoded.slice(idx + 1)

    if (providedUser !== expectedUser || providedPass !== expectedPass) {
      return new NextResponse("Authentication failed", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Preview"' },
      })
    }
  } catch {
    return new NextResponse("Authentication failed", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Preview"' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 認証対象外: Next.js内部アセット・favicon等のメタアイコン
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image.png).*)",
  ],
}
