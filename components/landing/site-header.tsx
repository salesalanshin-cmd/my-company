"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const aboutLinks = [
  { href: "/about#mission", label: "미션·비전" },
  { href: "/about#history", label: "연혁" },
  { href: "/about#ceo", label: "대표 인사말" },
  { href: "/about#organization", label: "조직도" },
  { href: "/about#certification", label: "기술·특허·인증 현황" },
  { href: "/about#business", label: "사업분야" },
] as const

const servicesMenu = {
  development: {
    title: "개발",
    items: [
      { href: "/dev#website", label: "홈페이지 제작" },
      { href: "/dev#app", label: "애플리케이션(앱) 개발" },
      { href: "/dev#mes", label: "MES 시스템" },
      { href: "/dev#automation", label: "SI/자동화 시스템" },
    ],
  },
  ai: {
    title: "AI",
    items: [
      { href: "/ai#ai-agent", label: "AI Agent 개발" },
      { href: "/ai#ai-pipeline", label: "AI 파이프라인 구축" },
      { href: "/ai#ml-infra", label: "머신러닝 인프라 구축" },
    ],
  },
  consulting: {
    title: "컨설팅",
    items: [
      { href: "/consulting#startup", label: "창업 컨설팅" },
      { href: "/consulting#rd", label: "정부지원과제·R&D 컨설팅" },
      { href: "/consulting#export", label: "수출입 컨설팅" },
    ],
  },
} as const

const simpleNav = [
  { href: "/reference", label: "레퍼런스" },
  { href: "/notice", label: "공지사항" },
  { href: "/#contact", label: "문의" },
] as const

type ActiveMenu = "about" | "services" | null

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
  if (href === "/services")
    return (
      pathname === "/services" ||
      pathname === "/dev" ||
      pathname === "/ai" ||
      pathname === "/consulting"
    )
  if (href === "/dev") return pathname === "/dev"
  if (href === "/reference") return pathname === "/reference"
  if (href === "/notice") return pathname === "/notice"
  if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1)
  return false
}

function isSubLinkActive(href: string, pathname: string, hash: string) {
  const [path, fragment] = href.split("#")
  if (pathname !== path) return false
  if (!fragment) return !hash
  return hash === `#${fragment}`
}

function DropdownLink({
  href,
  label,
  pathname,
  hash,
  onNavigate,
}: {
  href: string
  label: string
  pathname: string
  hash: string
  onNavigate: () => void
}) {
  const active = isSubLinkActive(href, pathname, hash)
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "block rounded-md px-3 py-2 text-sm text-[#222] transition-colors",
        "hover:bg-[#0066cc]/10 hover:text-[#0066cc]",
        active && "bg-[#0066cc]/10 font-medium text-[#0066cc]"
      )}
    >
      {label}
    </Link>
  )
}

function CategoryBlock({
  title,
  items,
  pathname,
  hash,
  onNavigate,
}: {
  title: string
  items: readonly { href: string; label: string }[]
  pathname: string
  hash: string
  onNavigate: () => void
}) {
  return (
    <div>
      <p className="mb-1 px-3 pt-2 text-sm font-bold text-[#0066cc]">{title}</p>
      <ul className="space-y-0.5 pb-2">
        {items.map((item) => (
          <li key={item.href}>
            <DropdownLink
              href={item.href}
              label={item.label}
              pathname={pathname}
              hash={hash}
              onNavigate={onNavigate}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavDropdown({
  menuId,
  label,
  href,
  pathname,
  hash,
  activeMenu,
  onActivate,
  onDeactivate,
  children,
  panelClassName,
}: {
  menuId: "about" | "services"
  label: string
  href: string
  pathname: string
  hash: string
  activeMenu: ActiveMenu
  onActivate: (menu: "about" | "services") => void
  onDeactivate: () => void
  children: React.ReactNode
  panelClassName?: string
}) {
  const isOpen = activeMenu === menuId
  const active = isNavActive(href, pathname, hash)

  return (
    <div
      className="relative"
      onMouseEnter={() => onActivate(menuId)}
      onMouseLeave={onDeactivate}
    >
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center gap-1 py-2 text-base text-[#222] transition-colors hover:text-[#0066cc]",
          active &&
            "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#0066cc]"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </Link>

      {isOpen ? (
        <div
          className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2"
          onMouseEnter={() => onActivate(menuId)}
          onMouseLeave={onDeactivate}
        >
          <div
            className={cn(
              "rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-out",
              panelClassName
            )}
          >
            {children}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const hash = useHash()
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null)

  const activateMenu = (menu: "about" | "services") => setActiveMenu(menu)
  const deactivateMenu = () => setActiveMenu(null)

  return (
    <header className="sticky top-0 z-50 h-28 overflow-visible border-b border-gray-200 bg-white">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 overflow-visible px-4 sm:px-6">
        <Link href="/" className="shrink-0 justify-self-start overflow-visible">
          <Image
            src="/logo.png"
            alt="순한연구소"
            width={400}
            height={120}
            style={{ width: "auto", height: "40px", objectFit: "contain" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <NavDropdown
            menuId="about"
            label="회사소개"
            href="/about"
            pathname={pathname}
            hash={hash}
            activeMenu={activeMenu}
            onActivate={activateMenu}
            onDeactivate={deactivateMenu}
            panelClassName="min-w-[15rem] p-2"
          >
            <ul className="py-1">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <DropdownLink
                    href={item.href}
                    label={item.label}
                    pathname={pathname}
                    hash={hash}
                    onNavigate={deactivateMenu}
                  />
                </li>
              ))}
            </ul>
          </NavDropdown>

          <NavDropdown
            menuId="services"
            label="서비스·솔루션"
            href="/services"
            pathname={pathname}
            hash={hash}
            activeMenu={activeMenu}
            onActivate={activateMenu}
            onDeactivate={deactivateMenu}
            panelClassName="w-[38rem] max-w-[calc(100vw-2rem)] p-4"
          >
            <div className="grid grid-cols-2 gap-x-10">
              <div className="min-w-0 space-y-4">
                <CategoryBlock
                  title={servicesMenu.development.title}
                  items={servicesMenu.development.items}
                  pathname={pathname}
                  hash={hash}
                  onNavigate={deactivateMenu}
                />
                <CategoryBlock
                  title={servicesMenu.ai.title}
                  items={servicesMenu.ai.items}
                  pathname={pathname}
                  hash={hash}
                  onNavigate={deactivateMenu}
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center border-l border-slate-100 pl-8">
                <CategoryBlock
                  title={servicesMenu.consulting.title}
                  items={servicesMenu.consulting.items}
                  pathname={pathname}
                  hash={hash}
                  onNavigate={deactivateMenu}
                />
              </div>
            </div>
          </NavDropdown>

          {simpleNav.map((item) => {
            const active = isNavActive(item.href, pathname, hash)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={deactivateMenu}
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
