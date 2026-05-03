import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

import "./globals.css"

import { siteConfig } from "@/lib/site-config"

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
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
