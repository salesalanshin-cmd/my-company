"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type RefObject } from "react"
import { Mail, MessageSquare, Phone, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type QuickMenuItem = {
  href: string
  label: string
  icon: LucideIcon
  external?: boolean
}

const items: QuickMenuItem[] = [
  {
    href: "tel:010-5920-8487",
    label: "전화문의",
    icon: Phone,
    external: true,
  },
  {
    href: "mailto:info@soonanlabs.com",
    label: "메일문의",
    icon: Mail,
    external: true,
  },
  {
    href: "/#contact",
    label: "문의하기",
    icon: MessageSquare,
  },
]

function getBackgroundColor(element: Element): string {
  let node: Element | null = element
  while (node && node !== document.documentElement) {
    const { backgroundColor } = getComputedStyle(node)
    if (
      backgroundColor &&
      backgroundColor !== "transparent" &&
      backgroundColor !== "rgba(0, 0, 0, 0)"
    ) {
      return backgroundColor
    }
    node = node.parentElement
  }

  return getComputedStyle(document.body).backgroundColor || "rgb(255, 255, 255)"
}

function isLightBackground(color: string): boolean {
  const oklch = color.match(/oklch\(\s*([\d.]+)/)
  if (oklch) {
    return parseFloat(oklch[1]) > 0.55
  }

  const rgb = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/)
  if (rgb) {
    const r = Number(rgb[1]) / 255
    const g = Number(rgb[2]) / 255
    const b = Number(rgb[3]) / 255
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luminance > 0.55
  }

  return true
}

function useLightBackgroundBehind(ref: RefObject<HTMLButtonElement | null>) {
  const [onLightBg, setOnLightBg] = useState(false)

  useEffect(() => {
    const button = ref.current
    if (!button) return

    let raf = 0

    const update = () => {
      const rect = button.getBoundingClientRect()
      const x = Math.min(window.innerWidth - 1, Math.max(0, rect.left + rect.width / 2))
      const y = Math.min(window.innerHeight - 1, Math.max(0, rect.top + rect.height / 2))

      button.style.pointerEvents = "none"
      const element = document.elementFromPoint(x, y)
      button.style.pointerEvents = ""

      if (element) {
        setOnLightBg(isLightBackground(getBackgroundColor(element)))
      }
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [ref])

  return onLightBg
}

function QuickMenuButton({
  item,
  showDivider,
}: {
  item: QuickMenuItem
  showDivider: boolean
}) {
  const Icon = item.icon
  const className = cn(
    "flex flex-col items-center gap-2 border border-white/30 px-3 py-4 text-white transition-colors hover:bg-[rgba(0,102,204,0.8)]",
    showDivider && "mt-1"
  )

  const content = (
    <>
      <Icon className="size-5 shrink-0" aria-hidden />
      <span className="text-xs font-medium tracking-wide [writing-mode:vertical-rl]">
        {item.label}
      </span>
    </>
  )

  if (item.external) {
    return (
      <a href={item.href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  )
}

function MobileQuickMenuLink({
  item,
  onNavigate,
}: {
  item: QuickMenuItem
  onNavigate: () => void
}) {
  const Icon = item.icon
  const className =
    "flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"

  const content = (
    <>
      <Icon className="size-5 shrink-0" aria-hidden />
      <span className="text-sm font-medium">{item.label}</span>
    </>
  )

  if (item.external) {
    return (
      <a href={item.href} className={className} onClick={onNavigate}>
        {content}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {content}
    </Link>
  )
}

export function QuickMenu() {
  const [open, setOpen] = useState(false)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)
  const onLightBg = useLightBackgroundBehind(mobileButtonRef)

  return (
    <>
      <nav
        aria-label="빠른 문의"
        className="fixed top-1/2 left-0 z-40 hidden -translate-y-1/2 flex-col gap-1 overflow-hidden rounded-r-xl border border-white/20 bg-[rgba(10,31,60,0.7)] p-1 shadow-lg backdrop-blur-sm md:flex"
      >
        {items.map((item, index) => (
          <QuickMenuButton key={item.href} item={item} showDivider={index > 0} />
        ))}
      </nav>

      <button
        ref={mobileButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed right-4 bottom-4 z-40 rounded-full border bg-transparent px-8 py-3 text-sm font-medium shadow-[0_2px_12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.12)] transition-colors md:hidden",
          onLightBg
            ? "border-foreground/25 text-foreground"
            : "border-white/30 text-white"
        )}
      >
        문의하기
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="문의하기"
        >
          <button
            type="button"
            aria-label="닫기"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 bottom-0 left-0 rounded-t-2xl border-t border-border bg-background/90 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <MobileQuickMenuLink
                  key={item.href}
                  item={item}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
