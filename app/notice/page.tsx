import type { Metadata } from "next"

import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "공지사항",
  description: `${siteConfig.name} 공지사항`,
}

export default function NoticePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 border-t bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">공지사항</h1>
          <p className="mt-4 text-muted-foreground">페이지를 준비 중입니다.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
