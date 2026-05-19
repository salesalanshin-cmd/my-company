import type { Metadata } from "next"

import { ConsultingPageContent } from "@/components/landing/consulting-page"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export const metadata: Metadata = {
  title: {
    absolute: "컨설팅 서비스 | 주식회사 순한연구소",
  },
  description:
    "창업 컨설팅, 정부지원과제·R&D 컨설팅, 수출입 컨설팅까지 실행까지 책임지는 컨설팅 파트너입니다.",
}

export default function ConsultingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ConsultingPageContent />
      </main>
      <SiteFooter />
    </>
  )
}
