import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { QuickMenu } from "@/components/ui/quick-menu"

import "./globals.css"

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://project-5qfhf.vercel.app"),
  title: "주식회사 순한연구소 | 보육형 PM 컨설팅",
  description:
    "홈페이지·앱개발·스마트공장·정부지원사업 전문. 창업패키지·R&D·청창사 컨설팅, 실행 파트너 순한연구소",
  keywords: [
    "홈페이지 제작",
    "웹개발",
    "앱개발",
    "웹사이트 제작",
    "반응형 웹",
    "스마트공장",
    "스마트 제조",
    "스마트 공방",
    "제조 디지털화",
    "정부지원사업",
    "정부지원과제",
    "R&D",
    "청창사",
    "창업사관학교",
    "창업패키지",
    "초기창업패키지",
    "사업화지원",
    "창업지원사업",
    "중소기업 지원",
    "기술개발사업",
    "컨설팅",
    "창업컨설팅",
    "PM컨설팅",
    "보육형컨설팅",
    "사업계획서",
    "IR피칭",
    "투자유치",
    "순한연구소",
    "soonanlabs",
    "주식회사 순한연구소",
  ],
  authors: [{ name: "주식회사 순한연구소" }],
  creator: "주식회사 순한연구소",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    NaverBot: "index, follow",
    "geo.region": "KR",
    "geo.placename": "대한민국",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://project-5qfhf.vercel.app",
    siteName: "주식회사 순한연구소",
    title: "주식회사 순한연구소 | 보육형 PM 컨설팅",
    description:
      "홈페이지·앱개발·스마트공장·정부지원사업 전문. 창업패키지·R&D·청창사 컨설팅, 실행 파트너 순한연구소",
    images: [
      {
        url: "/images/hero/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "주식회사 순한연구소",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "주식회사 순한연구소 | 보육형 PM 컨설팅",
    description:
      "홈페이지 제작·앱개발·스마트공장·정부지원사업 전문. 창업부터 R&D까지 실행 파트너 순한연구소",
    images: ["/images/hero/slide1.jpg"],
  },
  verification: {
    other: {
      "naver-site-verification": "c78749fa6fc4f357bd352e7cdfcd077ad5e1e402",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${noto.variable} h-full antialiased`}>
      <body suppressHydrationWarning className={`${noto.className} min-h-full flex flex-col`}>
        <QuickMenu />
        {children}
      </body>
    </html>
  )
}
