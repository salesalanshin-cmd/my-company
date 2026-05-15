import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

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
    "창업·정부지원사업·R&D·수출 컨설팅을 통해 단순 자문이 아닌 실행 파트너로서 기업 곁에 함께합니다. 보육형 PM 컨설팅으로 대표님의 핵심 의사결정에만 집중하세요.",
  keywords:
    "순한연구소, 정부지원사업, 정부지원과제, 정부사업, 정부과제, R&D, 연구개발, 창업, 청년창업사관학교, 청창사, 초기창업패키지, 초창패, 예비창업패키지, 예창패, 바우처, 혁신바우처, 수출바우처, 로컬크리에이터, 소상공인, 자금지원, 정책자금, 컨설팅, 보육형컨설팅, 수출컨설팅, 수출입컨설팅, 스마트공장, 자동화, AI, 인증, 앱개발, 홈페이지제작, 홈피, 모두의창업, 창업지원, 패키지, 기술개발, 사업화",
  authors: [{ name: "주식회사 순한연구소" }],
  creator: "주식회사 순한연구소",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://project-5qfhf.vercel.app",
    siteName: "주식회사 순한연구소",
    title: "주식회사 순한연구소 | 보육형 PM 컨설팅",
    description:
      "창업·정부지원사업·R&D·수출 컨설팅을 통해 단순 자문이 아닌 실행 파트너로서 기업 곁에 함께합니다.",
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
      "창업·정부지원사업·R&D·수출 컨설팅을 통해 단순 자문이 아닌 실행 파트너로서 기업 곁에 함께합니다.",
    images: ["/images/hero/slide1.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${noto.variable} h-full antialiased`}>
      <body className={`${noto.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  )
}
