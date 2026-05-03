import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "스타터",
    desc: "단기 과제·1회성 진단",
    price: "협의",
    badge: null as string | null,
    features: [
      "현황 진단·우선순위 워크숍",
      "지원사업·과제 방향 1차 제안",
      "문서 템플릿·체크리스트 제공",
    ],
    cta: "견적 문의",
    emphasized: false,
  },
  {
    name: "프로 매니징",
    desc: "보육형 매니징 핵심 패키지",
    price: "월 협의",
    badge: "인기",
    features: [
      "기획·실무·수행·정산 전담 지원",
      "정부지원·R&D 일정·산출물 관리",
      "주간 스탠드업·이슈 대응",
      "대표·실무진과 직접 커뮤니케이션",
    ],
    cta: "상담 예약",
    emphasized: true,
  },
  {
    name: "엔터프라이즈",
    desc: "AX·데이터·AI 로드맵 포함",
    price: "별도 제안",
    badge: null,
    features: [
      "다부서·다공장 스코프 정리",
      "데이터 거버넌스·수집 설계",
      "AI·비전 PoC 및 확장 로드맵",
      "전담 PM·기술 자문 옵션",
    ],
    cta: "제안 요청",
    emphasized: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t bg-[#f8fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            요금 플랜
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-base">
            프로젝트 규모와 기간에 따라 맞춤 견적을 드립니다. 아래는 참고용 구성 예시입니다.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:gap-10 lg:grid-cols-3 lg:items-center lg:gap-10 xl:gap-12">
          {plans.map((plan) => {
            const isPro = plan.emphasized
            return (
              <Card
                key={plan.name}
                className={cn(
                  "flex flex-col overflow-hidden rounded-xl transition-shadow",
                  isPro
                    ? "z-10 gap-0 border-0 bg-[#0c2348] p-0 text-white shadow-xl ring-0 lg:scale-105"
                    : "border border-slate-200/80 bg-white shadow-md ring-0",
                )}
              >
                {isPro ? (
                  <div className="h-1.5 w-full shrink-0 bg-blue-500" aria-hidden />
                ) : null}
                <CardHeader
                  className={cn(
                    "gap-2",
                    isPro ? "px-4 pt-5 pb-0 text-white" : "",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle
                      className={cn("text-lg", isPro && "text-white")}
                    >
                      {plan.name}
                    </CardTitle>
                    {plan.badge ? (
                      <Badge
                        className={cn(
                          "shrink-0",
                          isPro &&
                            "border-white/35 bg-white/15 text-white hover:bg-white/20",
                        )}
                      >
                        {plan.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <CardDescription
                    className={cn(isPro && "text-white/75")}
                  >
                    {plan.desc}
                  </CardDescription>
                  <p
                    className={cn(
                      "text-2xl font-semibold tracking-tight",
                      isPro ? "text-white" : "",
                    )}
                  >
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent
                  className={cn("flex flex-1 flex-col gap-4", isPro && "px-4")}
                >
                  <Separator className={isPro ? "bg-white/20" : undefined} />
                  <ul
                    className={cn(
                      "flex flex-1 flex-col gap-3 text-sm",
                      isPro ? "text-white/90" : "text-muted-foreground",
                    )}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            isPro ? "text-blue-400" : "text-blue-600",
                          )}
                          aria-hidden
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter
                  className={cn(
                    isPro &&
                      "border-white/15 bg-white/5 px-4 py-4 backdrop-blur-[2px]",
                  )}
                >
                  {isPro ? (
                    <Button
                      className="w-full border-white/40 bg-white text-[#0c2348] hover:bg-white/90"
                      variant="outline"
                      asChild
                    >
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
