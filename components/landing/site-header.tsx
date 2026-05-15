"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const nav = [
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스·솔루션" },
  { href: "/reference", label: "레퍼런스" },
  { href: "/notice", label: "공지사항" },
  { href: "/#contact", label: "문의" },
] as const

function useHash() {
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const read = () => setHash(window.location.hash)
    read()
    window.addEventListener("hashchange", read)
    window.addEventListener("popstate", read)
    return () => {
      window.removeEventListener("hashchange", read)
      window.removeEventListener("popstate", read)
    }
  }, [pathname])

  return hash
}

function isNavActive(href: string, pathname: string, hash: string) {
  if (href === "/about") return pathname === "/about"
  if (href === "/services") return pathname === "/services"
  if (href === "/reference") return pathname === "/reference"
  if (href === "/notice") return pathname === "/notice"
  if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1)
  return false
}

export function SiteHeader() {
  const pathname = usePathname()
  const hash = useHash()

  return (
    <header className="sticky top-0 z-50 h-28 overflow-visible border-b border-gray-200 bg-white">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 overflow-visible px-4 sm:px-6">
        <Link href="/" className="shrink-0 justify-self-start overflow-visible">
          <Image
            src="/logo.png"
            alt="순한연구소"
            width={400}
            height={120}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {nav.map((item) => {
            const active = isNavActive(item.href, pathname, hash)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-base text-[#222] transition-colors hover:text-[#0066cc]",
                  active &&
                    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#0066cc]"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/#contact"
          className="justify-self-end whitespace-nowrap rounded-md bg-[#0066cc] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0052a3] sm:text-base"
        >
          상담 요청
        </Link>
      </div>
    </header>
  )
}
