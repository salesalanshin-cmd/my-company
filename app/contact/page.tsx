import type { Metadata } from "next"

import { SiteHeader } from "@/components/landing/site-header"
import { ContactSection } from "@/components/landing/contact-section"
import { SiteFooter } from "@/components/landing/site-footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "문의",
  description: `${siteConfig.name}에 프로젝트·상담 문의를 남겨 주세요.`,
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
