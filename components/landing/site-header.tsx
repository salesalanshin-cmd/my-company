import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const nav = [
  { href: "/about", label: "회사소개" },
  { href: "/#services", label: "서비스" },
  { href: "/#testimonials", label: "고객 후기" },
  { href: "/#pricing", label: "요금제" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "문의" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {siteConfig.shortName}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <Button size="sm" className="shrink-0" asChild>
          <Link href="/#contact">상담 요청</Link>
        </Button>
      </div>
    </header>
  )
}
