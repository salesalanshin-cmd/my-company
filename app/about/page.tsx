import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Eye, Target } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "회사소개",
  description: `${siteConfig.name}의 미션·비전, 연혁, 팀을 소개합니다.`,
}

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
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

const orgTeams = ["구매영업", "인사총무", "과제전략팀", "IT팀", "무역팀"] as const

function MilestoneBody({
  m,
  className,
  variant = "light",
}: {
  m: (typeof milestones)[0]
  className?: string
  variant?: "light" | "dark"
}) {
  if (variant === "dark") {
    return (
      <div className={cn("min-w-0 max-w-md", className)}>
        <time className="text-lg font-bold tabular-nums text-sky-300 sm:text-xl">{m.year}</time>
        <h3 className="mt-1 text-base font-semibold text-white">{m.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/85">{m.body}</p>
      </div>
    )
  }
  return (
    <div className={cn("min-w-0 max-w-md", className)}>
      <time className="text-lg font-bold tabular-nums text-blue-600 sm:text-xl">{m.year}</time>
      <h3 className="mt-1 text-base font-semibold text-foreground">{m.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
    </div>
  )
}

const missionVisionItems = [
  {
    label: "OUR MISSION" as const,
    body: "창업·정부지원·R&D·수출입 현장에서 말이 아닌 실행으로 책임지며, 기업이 집중해야 할 본업에 에너지를 돌릴 수 있도록 기획·실무·정산까지 매니징합니다.",
    icon: Target,
  },
  {
    label: "OUR VISION" as const,
    body: "산재한 제조·업무 데이터를 연결하고, AX·AI 비전과 지능형 공장 에이전트로 스마트팩토리와 완성도 높은 업무 보조 환경을 구현하는 기술·컨설팅 기업이 되겠습니다.",
    icon: Eye,
  },
]

function MissionVisionCard({
  label,
  body,
  icon: Icon,
}: {
  label: string
  body: string
  icon: LucideIcon
}) {
  return (
    <div
      className={cn(
        "group flex w-full rounded-xl border border-blue-200 bg-white px-8 py-6 shadow-md",
        "transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      )}
    >
      <div
        className="mr-5 w-1 shrink-0 self-stretch rounded-full bg-blue-600 transition-colors duration-300 group-hover:bg-blue-700"
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold tracking-wide text-blue-600 uppercase">{label}</h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-gray-600 sm:text-base">
            {body}
          </p>
        </div>
        <Icon
          className="size-12 shrink-0 text-blue-600 sm:size-14"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
    </div>
  )
}

function OrgConnector({ className }: { className?: string }) {
  return <div className={cn("w-0.5 bg-[#0066cc]", className)} aria-hidden />
}

function OrgChart() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      <div className="rounded-lg bg-[#0c2348] px-10 py-4 text-center text-base font-semibold text-white shadow-md sm:px-14 sm:text-lg">
        대표이사
      </div>

      <OrgConnector className="h-10" />

      <div className="rounded-lg bg-[#0066cc] px-10 py-4 text-center text-base font-semibold text-white shadow-md sm:px-14 sm:text-lg">
        R&D 전담부서
      </div>

      <OrgConnector className="h-10" />

      <div className="relative w-full px-2 sm:px-4">
        <div
          className="absolute top-0 left-[10%] right-[10%] hidden h-0.5 bg-[#0066cc] lg:block"
          aria-hidden
        />
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5 lg:gap-y-0">
          {orgTeams.map((team) => (
            <div key={team} className="flex flex-col items-center">
              <OrgConnector className="mb-0 h-8 lg:h-10" />
              <div className="w-full rounded-lg border-2 border-[#0066cc] bg-white px-2 py-3 text-center text-sm font-semibold text-[#0066cc] shadow-sm sm:px-3 sm:text-base">
                {team}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const aboutHeroUrl = publicFileUrl("images", "about-hero.jpg")
  const historyBgUrl = publicFileUrl("images", "history-bg.jpg")
  const ceoUrl =
    publicFileUrl("images", "ceo.jpg") ?? publicFileUrl("images", "ceo.png")
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[22rem] overflow-hidden border-b py-20 text-center text-white sm:min-h-[26rem] sm:py-28">
          {aboutHeroUrl ? (
            <>
              <Image
                src={aboutHeroUrl}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden />
            </>
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a]"
              aria-hidden
            />
          )}
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              주식회사 순한연구소 소개
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              보육형 매니징과 데이터, AI 전략으로 기업의 실행력과
              <br />
              제조 경쟁력을 함께 키워가는 파트너입니다.
            </p>
          </div>
        </section>

        {/* 미션 / 비전 */}
        <section className="border-t bg-white py-16 pb-24 sm:py-24 sm:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                미션 · 비전
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-base">
                우리가 지향하는 방향과 그 이유를 한눈에 담았습니다.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {missionVisionItems.map((item) => (
                <MissionVisionCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* 연혁 타임라인 */}
        <section className="relative overflow-hidden border-t pt-24 pb-16 sm:pt-28 sm:pb-24">
          {historyBgUrl ? (
            <>
              <Image
                src={historyBgUrl}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/75" aria-hidden />
            </>
          ) : (
            <div className="absolute inset-0 bg-[#0a1628]" aria-hidden />
          )}
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              연혁
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/80 sm:text-base">
              순한연구소의 주요 이정표입니다.
            </p>

            <div className="relative mx-auto mt-16 max-w-4xl">
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-1 -translate-x-1/2 bg-white/25 sm:block"
                aria-hidden
              />
              <ul className="relative z-10 space-y-0">
                {milestones.map((m, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <li key={m.year} className="relative pb-14 last:pb-0 sm:pb-20 sm:last:pb-8">
                      <span
                        className="absolute top-2 left-1/2 z-20 hidden size-4 -translate-x-1/2 rounded-full border-4 border-slate-900 bg-sky-400 ring-2 ring-white/30 sm:block"
                        aria-hidden
                      />
                      <div className="relative border-l-4 border-sky-400/90 pl-8 sm:hidden">
                        <span
                          className="absolute top-2 left-0 z-10 size-3.5 -translate-x-[calc(50%+2px)] rounded-full border-[3px] border-slate-900 bg-sky-400"
                          aria-hidden
                        />
                        <MilestoneBody m={m} variant="dark" />
                      </div>
                      <div className="relative hidden min-h-[5.5rem] sm:grid sm:grid-cols-2 sm:gap-8">
                        {isEven ? (
                          <>
                            <div className="flex justify-end pr-4">
                              <MilestoneBody m={m} className="text-right" variant="dark" />
                            </div>
                            <div aria-hidden className="min-w-0" />
                          </>
                        ) : (
                          <>
                            <div aria-hidden className="min-w-0" />
                            <div className="flex justify-start pl-4">
                              <MilestoneBody m={m} className="text-left" variant="dark" />
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

        {/* 대표 인사말 */}
        <section className="border-t bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              대표 인사말
            </h2>
            <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-12 lg:gap-16">
              <div className="flex justify-start">
                {ceoUrl ? (
                  <div className="w-full max-w-[340px] overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <Image
                      src={ceoUrl}
                      alt="신성호 대표이사"
                      width={560}
                      height={700}
                      className="aspect-[4/5] w-full object-cover object-center"
                      sizes="(min-width: 768px) 340px, 100vw"
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-[4/5] w-full max-w-[340px] items-center justify-center rounded-lg bg-neutral-200 text-sm font-medium text-neutral-500 shadow-lg ring-1 ring-black/5"
                    role="img"
                    aria-label="대표 사진 자리"
                  >
                    이미지 준비 중
                  </div>
                )}
              </div>
              <div className="min-w-0 space-y-6 text-left">
                <div>
                  <p className="text-2xl font-bold text-foreground">신성호</p>
                  <p className="mt-1 text-base font-medium text-[#0066cc]">대표이사</p>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                  <p>안녕하십니까, 주식회사 순한연구소 대표이사 신성호입니다.</p>
                  <p>
                    저희 순한연구소는 창업·정부지원사업·R&D·수출 컨설팅을 통해 단순 자문이 아닌
                    실행 파트너로서 기업 곁에 함께하고 있으며, 찾아주신 고객분들과 함께 지속적으로
                    성장하고 있습니다.
                  </p>
                  <p>
                    격변하는 AI, 데이터 시대를 맞아, 고객사의 업무 프로세스와 핵심 공정을
                    디지털화 하고, 정부지원을 통해 AI를 요소요소에 접목시켜 생산성 향상과 글로벌
                    경쟁력을 제고하고자, 임직원이 불철주야 노력하고 있습니다.
                  </p>
                  <p>
                    대표님의 핵심 의사결정에만 집중하실 수 있도록, 나머지 모든 실무를 저희가
                    책임지겠습니다. 감사합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 조직도 */}
        <section className="border-t bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">조직도</h2>
              <p className="mt-3 text-muted-foreground sm:text-base">
                순한연구소의 조직 구조입니다.
              </p>
            </div>
            <div className="mt-14">
              <OrgChart />
            </div>
          </div>
        </section>

        {/* 기술 · 특허 · 인증 현황 */}
        <section className="border-t bg-neutral-50 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              기술 · 특허 · 인증 현황
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {(
                [
                  { title: "특허 현황" },
                  { title: "인증 현황" },
                  { title: "기술 현황" },
                ] as const
              ).map((card) => (
                <div
                  key={card.title}
                  className="flex min-h-[180px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-auto pt-6 text-sm text-neutral-500">추후 업데이트 예정</p>
                </div>
              ))}
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
