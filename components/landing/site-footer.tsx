import Link from "next/link"
import { ExternalLink, Mail, Phone, Share2 } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const footerLinkClass =
  "text-sm text-slate-400 transition-colors hover:text-white"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const telHref = siteConfig.contact.phone.replace(/\s|-/g, "")

  return (
    <footer className="border-t border-slate-800/90 bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          <div className="md:max-w-sm">
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
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
              서비스
            </Link>
            <Link className={cn(footerLinkClass)} href="/#pricing">
              요금제
            </Link>
            <Link className={cn(footerLinkClass)} href="/#contact">
              문의
            </Link>
            <Link className={cn(footerLinkClass)} href="/#faq">
              FAQ
            </Link>
          </nav>
          <div className="space-y-5 md:justify-self-end">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-sky-400" aria-hidden />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${telHref}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0 text-sky-400" aria-hidden />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <div className="flex items-center gap-4 border-t border-slate-700/80 pt-5">
              <Link
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="공유 · 소식"
              >
                <Share2 className="size-5" aria-hidden />
              </Link>
              <Link
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="외부 링크"
              >
                <ExternalLink className="size-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="mt-20 bg-slate-700/80" />
        <p className="mt-10 text-center text-xs text-slate-500">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
