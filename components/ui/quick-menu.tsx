import Link from "next/link"
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

export function QuickMenu() {
  return (
    <nav
      aria-label="빠른 문의"
      className="fixed top-1/2 left-0 z-40 flex -translate-y-1/2 flex-col gap-1 overflow-hidden rounded-r-xl border border-white/20 bg-[rgba(10,31,60,0.7)] p-1 shadow-lg backdrop-blur-sm"
    >
      {items.map((item, index) => (
        <QuickMenuButton key={item.href} item={item} showDivider={index > 0} />
      ))}
    </nav>
  )
}
