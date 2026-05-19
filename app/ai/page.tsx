import type { Metadata } from "next"

import { AiPageContent } from "@/components/landing/ai-page"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export const metadata: Metadata = {
  title: {
    absolute: "AI 솔루션 | 주식회사 순한연구소",
  },
  description:
    "AI Agent 개발, AI 파이프라인 구축, 머신러닝 인프라 구축까지 기업 맞춤형 AI 솔루션을 제공합니다.",
}

export default function AiPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AiPageContent />
      </main>
      <SiteFooter />
    </>
  )
}
