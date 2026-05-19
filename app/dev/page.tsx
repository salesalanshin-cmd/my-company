import type { Metadata } from "next"

import { DevPageContent } from "@/components/landing/dev-page"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export const metadata: Metadata = {
  title: {
    absolute: "개발 서비스 | 주식회사 순한연구소",
  },
  description:
    "홈페이지 제작, 앱 개발, MES 시스템, SI·자동화 시스템까지 코드 기반 맞춤 개발 서비스를 제공합니다.",
}

export default function DevPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <DevPageContent />
      </main>
      <SiteFooter />
    </>
  )
}
