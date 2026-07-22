/**
 * 構造化データ（Schema.org / JSON-LD）
 * ローカルビジネス（建設業）としてGoogleに正しく認識させ、
 * ローカルパック・ナレッジパネル・リッチリザルトの対象にする。
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zmken.co.jp"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "有限会社ゼムケンサービス",
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      // 建設業のローカルビジネス
      "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "有限会社ゼムケンサービス",
      alternateName: "Zm'ken Service Co., Ltd.",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image.png`,
      description:
        "福岡県北九州市の建築事務所。女性視点で店舗・住宅・オフィスの空間ブランディング・設計・施工を手がける。",
      slogan: "オモイをカタチに、建築は統合芸術",
      telephone: "+81-93-931-0301",
      email: "info@zmken.co.jp",
      foundingDate: "1993",
      founder: {
        "@type": "Person",
        name: "籠田 淳子",
        jobTitle: "代表取締役",
      },
      address: {
        "@type": "PostalAddress",
        postalCode: "802-0064",
        addressCountry: "JP",
        addressRegion: "福岡県",
        addressLocality: "北九州市小倉北区",
        streetAddress: "片野3-7-4",
      },
      // ※ 緯度経度は概算。公開前にGoogleマップで正確な値に差し替え推奨。
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.8776,
        longitude: 130.8859,
      },
      areaServed: [
        { "@type": "City", name: "北九州市" },
        { "@type": "AdministrativeArea", name: "福岡県" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        "店舗デザイン",
        "住宅設計",
        "空間ブランディング",
        "リノベーション",
        "建築設計・施工",
      ],
      // 公開後、公式SNS・関連サイトのURLを追加すると信頼性が上がる：
      // sameAs: ["https://www.instagram.com/...", "https://diyfriends.jp/"],
    },
  ],
}

export default function V4JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
