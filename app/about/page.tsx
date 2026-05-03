import type { Metadata } from "next"
import Link from "next/link"
import { Eye, Target } from "lucide-react"

import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "회사소개",
  description: `${siteConfig.name}의 미션·비전, 연혁, 팀을 소개합니다.`,
}

const milestones = [
  {
    year: "2020",
    title: "법인 설립",
    body: "컨설팅 전문 조직으로 출발하며 창업·정부지원사업 지원에 집중했습니다.",
  },
  {
    year: "2021",
    title: "보육형 매니징 체계 구축",
    body: "기획부터 정산까지 일괄 대행하는 매니징 모델을 정립하고 핵심 인력을 확장했습니다.",
  },
  {
    year: "2022",
    title: "R&D·수출입 라인 강화",
    body: "중소 제조·무역 고객사의 과제 수행과 해외 진출 프로젝트를 본격적으로 수행했습니다.",
  },
  {
    year: "2023",
    title: "데이터·AX 자문 라인",
    body: "제조 현장의 데이터 가시화와 스마트팩토리 도입을 위한 사전 진단 서비스를 도입했습니다.",
  },
  {
    year: "2024",
    title: "AI·비전 PoC",
    body: "현장 영상·품질 데이터를 활용한 PoC와 에이전트형 업무 보조 구상을 시작했습니다.",
  },
  {
    year: "2025",
    title: "지능형 공장 로드맵",
    body: "제조·업무 데이터 연계와 에이전트 설계를 중심으로 중장기 제품 전략을 수립했습니다.",
  },
  {
    year: "2026",
    title: "성장 단계",
    body: "고객사와 함께 AX·AI 실행 과제를 확대하며 조직 역량을 강화하고 있습니다.",
  },
]

function MilestoneBody({ m, className }: { m: (typeof milestones)[0]; className?: string }) {
  return (
    <div className={cn("min-w-0 max-w-md", className)}>
      <time className="text-lg font-bold tabular-nums text-blue-600 sm:text-xl">{m.year}</time>
      <h3 className="mt-1 text-base font-semibold text-foreground">{m.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a] py-20 text-center text-white sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1a]/40 to-[#060d1a]/80" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              주식회사 순한연구소 소개
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              보육형 매니징과 데이터·AI 전략으로 기업의 실행력과 제조 경쟁력을 함께 키워 가는
              파트너입니다.
            </p>
          </div>
        </section>

        {/* 미션 / 비전 */}
        <section className="border-t bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                미션 · 비전
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-base">
                우리가 지향하는 방향과 그 이유를 한눈에 담았습니다.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              <Card className="min-w-0 border border-slate-200/80 bg-white shadow-md ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                <CardHeader className="gap-3 p-4 sm:p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#0c2348] text-white shadow-sm">
                    <Target className="size-5" aria-hidden />
                  </div>
                  <CardTitle className="text-base sm:text-lg">우리의 미션</CardTitle>
                  <CardDescription className="text-pretty text-xs leading-relaxed text-muted-foreground sm:text-base">
                    창업·정부지원·R&D·수출입 현장에서 말이 아닌 실행으로 책임지며, 기업이 집중해야
                    할 본업에 에너지를 돌릴 수 있도록 기획·실무·정산까지 매니징합니다.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="min-w-0 border border-slate-200/80 bg-white shadow-md ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                <CardHeader className="gap-3 p-4 sm:p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#0c2348] text-white shadow-sm">
                    <Eye className="size-5" aria-hidden />
                  </div>
                  <CardTitle className="text-base sm:text-lg">우리의 비전</CardTitle>
                  <CardDescription className="text-pretty text-xs leading-relaxed text-muted-foreground sm:text-base">
                    산재한 제조·업무 데이터를 연결하고, AX·AI 비전과 지능형 공장 에이전트로
                    스마트팩토리와 완성도 높은 업무 보조 환경을 구현하는 기술·컨설팅 기업이
                    되겠습니다.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* 연혁 타임라인 */}
        <section className="border-t bg-[#f8fafc] py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
              연혁
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground sm:text-base">
              순한연구소의 주요 이정표입니다. (예시 연혁)
            </p>

            <div className="relative mx-auto mt-16 max-w-4xl">
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-1 -translate-x-1/2 bg-blue-600 sm:block"
                aria-hidden
              />
              <ul className="relative z-10 space-y-0">
                {milestones.map((m, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <li key={m.year} className="relative pb-14 last:pb-0 sm:pb-20 sm:last:pb-8">
                      <span
                        className="absolute top-2 left-1/2 z-20 hidden size-4 -translate-x-1/2 rounded-full border-4 border-[#f8fafc] bg-blue-600 ring-2 ring-blue-600/40 sm:block"
                        aria-hidden
                      />
                      <div className="relative border-l-4 border-blue-600 pl-8 sm:hidden">
                        <span
                          className="absolute top-2 left-0 z-10 size-3.5 -translate-x-[calc(50%+2px)] rounded-full border-[3px] border-[#f8fafc] bg-blue-600"
                          aria-hidden
                        />
                        <MilestoneBody m={m} />
                      </div>
                      <div className="relative hidden min-h-[5.5rem] sm:grid sm:grid-cols-2 sm:gap-8">
                        {isEven ? (
                          <>
                            <div className="flex justify-end pr-4">
                              <MilestoneBody m={m} className="text-right" />
                            </div>
                            <div aria-hidden className="min-w-0" />
                          </>
                        ) : (
                          <>
                            <div aria-hidden className="min-w-0" />
                            <div className="flex justify-start pl-4">
                              <MilestoneBody m={m} className="text-left" />
                            </div>
                          </>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* 팀 소개 */}
        <section className="border-t bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">팀 소개</h2>
              <p className="mt-3 text-muted-foreground sm:text-base">
                리드를 맡고 있는 대표를 소개합니다.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-sm">
              <Card className="border border-slate-200/80 bg-white shadow-md ring-0">
                <CardContent className="flex flex-col items-center gap-6 px-6 pt-10 pb-10 text-center">
                  <Avatar className="size-32 border border-slate-200 shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-3xl font-semibold text-white">
                      대
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-foreground">김○○</p>
                    <p className="text-sm font-medium text-blue-600">대표이사</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    정부지원사업과 제조 현장 컨설팅을 두루 거치며, &ldquo;말 대신 결과&rdquo;를
                    우선하는 보육형 매니징 문화를 만들어 왔습니다. 데이터와 AI가 비즈니스에
                    닿는 지점을 함께 찾는 것을 즐깁니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-b from-[#060d1a] via-[#0a1a32] to-[#0c2348] py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              프로젝트를 함께 논의해 보세요
            </h2>
            <p className="mt-3 text-white/75 sm:text-base">
              범위와 일정을 남겨 주시면 검토 후 연락드립니다.
            </p>
            <Button
              size="lg"
              className="mt-8 border border-white/40 bg-white text-[#0c2348] hover:bg-white/90"
              variant="outline"
              asChild
            >
              <Link href="/#contact">함께 시작하기</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
