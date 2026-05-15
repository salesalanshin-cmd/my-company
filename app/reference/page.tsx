import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ReferenceCaseGallery } from "@/components/landing/reference-case-gallery"
import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  buildCaseGallery,
  CASE_GALLERY_LAYOUT,
  type CaseGalleryData,
} from "@/lib/reference-case-images"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "레퍼런스",
  description: `${siteConfig.name}와 함께 성장한 기업들의 실제 사례와 성과를 소개합니다.`,
}

const stats = [
  { label: "누적 고객사", value: "5개+" },
  { label: "누적 정부지원금", value: "11억원+" },
  { label: "수출 성과", value: "50만달러+" },
  { label: "협업 국가", value: "30개국+" },
] as const

const TAG_STYLES: Record<string, string> = {
  "R&D": "bg-blue-100 text-blue-800 border-blue-200",
  스마트자동화: "bg-sky-100 text-sky-800 border-sky-200",
  "제조AX": "bg-emerald-100 text-emerald-800 border-emerald-200",
  스마트화: "bg-teal-100 text-teal-800 border-teal-200",
  수출: "bg-violet-100 text-violet-800 border-violet-200",
  사업전환: "bg-purple-100 text-purple-800 border-purple-200",
  창업: "bg-amber-100 text-amber-800 border-amber-200",
  정부지원사업: "bg-indigo-100 text-indigo-800 border-indigo-200",
}

type CaseStudy = {
  id: string
  title: string
  tags: string[]
  caseFolder: string
  project: string
  challenge: string
  solution: string[]
  outcome: ReactNode
  meta?: { label: string; value: string }[]
}

const cases: CaseStudy[] = [
  {
    id: "auto-parts",
    title: "자동차 부품 제조업",
    tags: ["R&D", "스마트자동화"],
    caseFolder: "case1",
    project: "AI 머신러닝 불량검출 시스템 + 로봇 자동화",
    challenge: "수동 불량검사로 인한 생산성 저하",
    solution: [
      "2024 AI바우처 지원사업 연계, AI 불량검출 시스템 도입",
      "2025 스마트자동화 구축, MCT 취출·세척·검사 로봇 자동화",
    ],
    outcome: (
      <>
        <span className="font-semibold text-[#0066cc]">5년간 누적 정부지원금 8억원</span> 확보
      </>
    ),
    meta: [{ label: "지원금", value: "총 4억원 (AI바우처 2억 + 스마트자동화 2억)" }],
  },
  {
    id: "kitchenware",
    title: "주방용품 제조업",
    tags: ["제조AX", "스마트화"],
    caseFolder: "case2",
    project: "다이캐스팅 공정 자동화",
    challenge: "수작업 중심 공정으로 인한 안전사고 및 비효율",
    solution: [
      "2024 안전동행 지원사업 연계, 취출기 도입",
      "2025 테크노파크 뿌리기업 공정연구 지원사업",
    ],
    outcome: (
      <>
        누적 정부지원금 <span className="font-semibold text-[#0066cc]">3억원</span> 확보, 공정
        개선 → 자동화 확장
      </>
    ),
    meta: [{ label: "지원금", value: "총 2.2억원" }],
  },
  {
    id: "cosmetics",
    title: "건강식품 → 화장품 전환",
    tags: ["수출", "사업전환"],
    caseFolder: "case3",
    project: "신규 제품 개발 및 해외 판로 개척",
    challenge: "건강식품 중심 구조에서 신규 사업 확장 필요",
    solution: [
      "정부지원사업 활용 화장품 제품 개발",
      "KOTRA·KITA 지원사업 연계, 수출 인증 준비",
    ],
    outcome: (
      <>
        연간 약 <span className="font-semibold text-[#0066cc]">50만달러</span> 수출 달성
      </>
    ),
    meta: [{ label: "기간", value: "3년간 수출 패키지 진행" }],
  },
  {
    id: "industrial-export",
    title: "산업용품 판매점 → 수출 전문기업",
    tags: ["수출", "사업전환"],
    caseFolder: "case4",
    project: "내수 중심에서 수출 전문기업으로 전환",
    challenge: "도소매 판매 구조, 해외 영업 노하우 부재",
    solution: [
      "2년간 수출 컨설팅, 사우디아라비아 가스플랜트 수출",
      "중동·동남아 시장 확대",
    ],
    outcome: (
      <>
        약 <span className="font-semibold text-[#0066cc]">10억원</span> 규모 계약 체결, 수출 중심
        사업 구조로 전환
      </>
    ),
    meta: [{ label: "기간", value: "약 2년" }],
  },
  {
    id: "soon-international",
    title: "순 인터내셔널",
    tags: ["창업", "R&D", "정부지원사업"],
    caseFolder: "case5",
    project: "도소매 → 기술 기반 사업 모델 전환",
    challenge: "단순 유통 구조에서 기술 기반 사업으로 전환 필요",
    solution: [
      "기술 개발·인증·특허 기반 구축",
      "청년창업사관학교 등 7개 정부지원사업 선정",
    ],
    outcome: (
      <>
        매출 <span className="font-semibold text-[#0066cc]">2억 → 6억</span> 성장 (
        <span className="font-semibold text-[#0066cc]">3배</span> 확대)
      </>
    ),
    meta: [{ label: "선정", value: "7개 정부지원사업" }],
  },
]

function CaseStudyCard({
  study,
  gallery,
}: {
  study: CaseStudy
  gallery: CaseGalleryData
}) {
  const { title, tags, project, challenge, solution, outcome, meta } = study

  return (
    <Card
      className={cn(
        "group overflow-hidden border border-slate-200/80 bg-white shadow-md ring-0 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl"
      )}
    >
      <CardContent className="p-6 sm:p-8">
        <ReferenceCaseGallery gallery={gallery} />

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                TAG_STYLES[tag] ?? "bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">{project}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              도전과제
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
              {challenge}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              솔루션
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
              {solution.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0066cc]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">성과</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">{outcome}</p>
            {meta?.map((row) => (
              <p key={row.label} className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{row.label}</span>
                {" · "}
                {row.value}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">
          <Button
            variant="outline"
            className="group/btn border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white"
            asChild
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              자세히 보기
              <ArrowRight
                className="size-4 transition-transform group-hover/btn:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ReferencePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a] py-20 text-center text-white sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1a]/30 to-[#060d1a]/70" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              레퍼런스
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              순한연구소와 함께 성장한 기업들의 실제 이야기입니다
            </p>
          </div>
        </section>

        {/* 성과 숫자 */}
        <section className="border-t bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ label, value }) => (
                <Card
                  key={label}
                  className="border border-slate-200/80 bg-white text-center shadow-md"
                >
                  <CardContent className="px-6 py-8">
                    <p className="text-3xl font-bold tabular-nums text-[#0066cc] sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                      {label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 케이스 스터디 */}
        <section className="border-t bg-[#f8fafc] py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                케이스 스터디
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-base">
                산업별 도전과제부터 정부지원·수출·자동화까지, 실제 수행 사례입니다.
              </p>
            </div>
            <div className="mt-12 space-y-8">
              {cases.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  gallery={buildCaseGallery(
                    study.caseFolder,
                    CASE_GALLERY_LAYOUT[study.caseFolder],
                    study.title
                  )}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-b from-[#060d1a] via-[#0a1a32] to-[#0c2348] py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              우리 회사도 가능할까요?
            </h2>
            <p className="mt-3 text-white/75 sm:text-base">
              비슷한 과제·산업이 있다면 범위를 나누어 가능성을 함께 검토해 드립니다.
            </p>
            <Button
              size="lg"
              className="mt-8 rounded-md border border-white/40 bg-white text-[#0c2348] hover:bg-white/90"
              variant="outline"
              asChild
            >
              <Link href="/#contact">무료 상담 신청하기</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
