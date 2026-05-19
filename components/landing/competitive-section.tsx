import { Building2, Cpu, Globe, Users, type LucideIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Advantage = {
  icon: LucideIcon
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: Users,
    title: "보육형 PM 컨설팅",
    description:
      "기획부터 실무·수행·사후정산까지 내부 직원처럼 함께 책임집니다.",
  },
  {
    icon: Building2,
    title: "정부지원 전문성",
    description:
      "매년 35조원 규모 정부지원사업을 전략적으로 설계하고 선정까지 이끕니다.",
  },
  {
    icon: Globe,
    title: "글로벌 수출 네트워크",
    description:
      "10년 이상 해외영업 경험과 30여 개국 바이어 네트워크를 보유합니다.",
  },
  {
    icon: Cpu,
    title: "AI·디지털 전환",
    description:
      "AI 에이전트·자동화·스마트공장까지 기술 기반의 실질적 디지털 전환을 지원합니다.",
  },
]

const comparison = {
  hire: {
    title: "신규직원 고용",
    items: [
      "월 급여 400~500만원",
      "사대보험·퇴직금·식대 등 높은 부대비용",
      "성과 없어도보내기 힘듦",
      "적극성·전문성 보장 X",
      "담당 업무 외 확장 어려움",
    ],
  },
  soonan: {
    title: "순한연구소",
    items: [
      "전문가 수준 인력을 200~400만원으로 활용",
      "세금계산서 비용처리 외 부대비용 없음",
      "성과 없으면 언제든 계약 종료 가능",
      "계약 지속을 위한 적극적 노력",
      "창업·R&D·수출·IT 멀티 전문가 활용",
    ],
  },
} as const

function ComparisonList({
  items,
  variant,
}: {
  items: readonly string[]
  variant: "light" | "dark"
}) {
  const bulletClass =
    variant === "light" ? "bg-slate-400" : "bg-sky-400"
  const textClass =
    variant === "light"
      ? "text-neutral-600"
      : "text-white/90"

  return (
    <ul className={`space-y-3 text-sm leading-relaxed sm:text-base ${textClass}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            className={`mt-2 size-1.5 shrink-0 rounded-full ${bulletClass}`}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function CompetitiveSection() {
  return (
    <section id="competitive" className="border-t bg-[#f8fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#0066cc] uppercase">
            WHY SOONAN LABS
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            왜 순한연구소인가
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-base">
            단순 컨설팅을 넘어 실행까지 책임지는 파트너
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {advantages.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="rounded-xl border border-slate-200/80 bg-white shadow-md ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader className="gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-sm">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
            신규직원 고용 vs 순한연구소
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="rounded-xl border border-slate-200 bg-slate-100/90 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  {comparison.hire.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComparisonList items={comparison.hire.items} variant="light" />
              </CardContent>
            </Card>

            <Card className="relative rounded-xl border border-[#0a1f3c] bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] text-white shadow-lg">
              <span className="absolute top-4 right-4 rounded-full bg-[#0066cc] px-3 py-1 text-xs font-semibold text-white">
                추천
              </span>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white">
                  {comparison.soonan.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComparisonList items={comparison.soonan.items} variant="dark" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
