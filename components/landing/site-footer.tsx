import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const footerLinkClass =
  "text-sm text-[#222] transition-colors hover:text-[#0066cc]"

const contactLinkClass =
  "flex items-center gap-3 text-sm text-[#222] transition-colors hover:text-[#0066cc]"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const telHref = siteConfig.contact.phone.replace(/\s|-/g, "")

  return (
    <footer className="border-t border-gray-200 bg-white text-[#222]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          <div className="md:max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="순한연구소"
                width={160}
                height={48}
                style={{ width: "auto", height: "40px", objectFit: "contain" }}
                priority
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#222]">
              {siteConfig.description}
            </p>
          </div>
          <nav
            className="flex flex-col gap-3 md:items-center"
            aria-label="푸터 링크"
          >
            <Link className={cn(footerLinkClass)} href="/about">
              회사소개
            </Link>
            <Link className={cn(footerLinkClass)} href="/services">
              서비스/솔루션
            </Link>
            <Link className={cn(footerLinkClass)} href="/reference">
              레퍼런스
            </Link>
            <Link className={cn(footerLinkClass)} href="/notice">
              공지사항
            </Link>
            <Link className={cn(footerLinkClass)} href="/#contact">
              문의
            </Link>
          </nav>
          <div className="space-y-5 md:justify-self-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className={contactLinkClass}
            >
              <Mail className="size-4 shrink-0 text-[#0066cc]" aria-hidden />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a href={`tel:${telHref}`} className={contactLinkClass}>
              <Phone className="size-4 shrink-0 text-[#0066cc]" aria-hidden />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
        <Separator className="mt-20 bg-gray-200" />
        <p className="mt-10 text-center text-xs text-gray-500">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
