import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Bot,
  Building2,
  Factory,
  FlaskConical,
  Rocket,
  Ship,
  Smartphone,
  Users,
} from "lucide-react"

import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    absolute: "서비스·솔루션 | 주식회사 순한연구소",
  },
  description:
    "창업지원, 정부지원사업, R&D, 수출입 컨설팅, 제조AX, 앱 개발, 자동화 시스템, AI 비전 에이전트까지 8가지 전문 서비스를 제공합니다.",
}

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

type ServiceDef = {
  id: string
  title: string
  Icon: LucideIcon
  summary: string
  lead: string
  points: string[]
  statsTitle: string
  stats: { label: string; value: string }[]
  showComparison?: boolean
}

const services: ServiceDef[] = [
  {
    id: "staff-service",
    title: "직원화 서비스",
    Icon: Users,
    summary:
      "월 구독형으로 정부지원·수출입·디자인·업무 자동화까지 직원처럼 수행하고 정기 보고합니다",
    lead:
      "(주)순한연구소를 고객사의 직원처럼 활용하는 월 구독형 서비스로, 회사 운영에 필요한 정부지원과제, 수출입 업무, 디자인 및 업무 자동화(에이전트 개발) 등의 업무를 기획-실무까지 직원처럼 수행하고, 업무 진행 현황과 일정에 대한 업무 보고서를 정기적으로 제공해 드리는 서비스입니다.",
    points: [],
    statsTitle: "지원 범위",
    stats: [
      { label: "대상", value: "정부지원사업, R&D팀 운영, 수출/수입팀 운영, IT부서 등" },
      { label: "활용", value: "기획팀/R&D팀/무역팀/IT팀 총괄" },
      { label: "형태", value: "월단위 계약" },
    ],
    showComparison: true,
  },
  {
    id: "startup",
    title: "창업 지원",
    Icon: Rocket,
    summary:
      "예비·초기 창업자를 위한 창업패키지, 창업사관학교, 바우처 연계 지원",
    lead:
      "아이디어 단계부터 법인 설립·초도 매출까지, 창업자가 본업에 집중할 수 있도록 행정·사업계획·지원사업 매칭을 함께 설계합니다.",
    points: [
      "창업패키지·사관학교·예비·초기 패키지 등 제도별 적합 과제 매칭",
      "사업계획서·IR 자료·정부 양식에 맞는 서류 정합성 점검",
      "바우처·멘토링·공간·네트워크 등 지역·중앙 프로그램 연계",
      "설립 후 정산·변경 등 후속 행정까지 단계별 체크리스트 제공",
    ],
    statsTitle: "지원 범위",
    stats: [
      { label: "대상", value: "예비·초기창업자, 소상공인, 중소기업 대표님" },
      { label: "연계", value: "창업지원사업, 지자체 사업화 과제 등" },
    ],
  },
  {
    id: "government",
    title: "정부지원사업",
    Icon: Building2,
    summary: "매년 35조원 규모 정부지원사업 기획·신청·수행·정산 전 과정 지원",
    lead:
      "중앙부처·지자체 과제의 기획·제안·선정 이후 수행·정산까지, 내부 인력처럼 문서·일정·산출물을 일관되게 관리합니다.",
    points: [
      "사업 타당성·기술성·시장성 관점에서 과제 방향 및 예산 구조 설계",
      "공고·평가 기준에 맞는 제안서·부속 서류 작성 및 검증",
      "수행 단계별 보고·변경·증빙 관리와 현장 대응",
      "정산·감사·사후관리까지 증빙 체계 정리",
    ],
    statsTitle: "성과 지표 (예시)",
    stats: [
      { label: "연간 시장", value: "약 35조 규모" },
      { label: "지원 축", value: "기획~정산 일괄" },
      { label: "문서", value: "제안·수행·정산" },
    ],
  },
  {
    id: "rnd",
    title: "R&D",
    Icon: FlaskConical,
    summary:
      "중소벤처기업부·산업부·과기부 R&D 과제 발굴부터 선정까지 전략적 설계",
    lead:
      "고객사에서 필요한 기술에 대한 개발, 과제 기획, 합격포인트, 사업비 구성부터 핵심 포인트를 정리하고, 연구개발과제 기반의 기술개발을 고객사의 연구개발전담 팀처럼 운영합니다.",
    points: [
      "부처·사업별 적합 과제 스캔 및 로드맵 제안",
      "기술목표·개발내용·기대효과·사업화 연계 설계",
      "공동연구·위탁·장비·인력 구성 등 제약 조건 반영",
      "평가 대응·발표·질의 예상 시나리오 정리",
    ],
    statsTitle: "지원 범위",
    stats: [
      { label: "분야", value: "중기부·산업부·과기부 등" },
      { label: "단계", value: "발굴·기획·신청" },
      { label: "산출", value: "제안·부속·발표" },
    ],
  },
  {
    id: "export",
    title: "수출입 컨설팅",
    Icon: Ship,
    summary: "10년 이상 해외영업 경험, 30여 개국 바이어 발굴·무역실무·FTA 대응",
    lead:
      "시장 조사·규격·물류·결제까지 실행 가능한 수출입 로드맵을 제시하고, 바이어 미팅·무역 실무·FTA 활용을 병행합니다.",
    points: [
      "국가·품목별 바이어 리스트업 및 접촉 시나리오",
      "Incoterms·L/C·수출대금 회수 등 무역 실무 점검",
      "FTA 원산지·세번·관세 이슈 대응 지원",
      "전시회·온라인 채널·현지 파트너 연계 전략",
    ],
    statsTitle: "경험 수치",
    stats: [
      { label: "해외영업", value: "10년+" },
      { label: "국가", value: "30여 개국" },
      { label: "범위", value: "발굴~실무" },
    ],
  },
  {
    id: "manufacturing-ax",
    title: "제조 AX",
    Icon: Factory,
    summary:
      "스마트공장, 제조 데이터 수집·가시화, 공정 자동화 전략 수립 및 실행",
    lead:
      "현장 설비·MES·SCADA 연계를 전제로 데이터 파이프라인과 공정 KPI를 정의하고, 스마트공장·제조 혁신 과제와 연계해 실행 순서를 잡습니다.",
    points: [
      "공정·설비별 데이터 수집 포인트 및 표준 항목 정의",
      "대시보드·리포트·알람 등 가시화 요구사항 정리",
      "자동화·로봇 도입 전후 공정 밸런스 시뮬레이션",
      "스마트공장 인증·지원사업·PoC 로드맵 연계",
    ],
    statsTitle: "지원 범위",
    stats: [
      { label: "영역", value: "데이터·공정·자동화" },
      { label: "산출", value: "로드맵·PoC" },
      { label: "연계", value: "스마트공장" },
    ],
  },
  {
    id: "app-dev",
    title: "앱 및 홈페이지 개발",
    Icon: Smartphone,
    summary: "기업 맞춤형 모바일 앱·웹사이트·홈페이지 기획부터 개발·운영까지",
    lead:
      "기업 맞춤형 모바일 앱·웹사이트·홈페이지를 기획부터 개발·운영까지 전 과정을 지원합니다. 정부지원사업과 연계해 개발 비용을 최소화합니다.",
    points: [
      "업무 프로세스 기반 화면·권한·알림 요구사항 정리",
      "모바일·웹·관리자(백오피스) 범위 및 MVP 정의",
      "보안·로그·장애 대응 등 운영 정책 초안",
      "배포·스토어·내부 검수 절차 동행",
    ],
    statsTitle: "지원 범위",
    stats: [
      { label: "형태", value: "모바일·웹·홈페이지" },
      { label: "단계", value: "기획·개발·운영" },
      { label: "연계", value: "정부지원사업" },
    ],
  },
  {
    id: "automation",
    title: "자동화 시스템 개발",
    Icon: Bot,
    summary: "정부지원사업 연계 로봇 자동화 시스템 설계·구축으로 투자 최소화",
    lead:
      "소상공인, 공방, 제조업 중심으로 수요기업의 요구사항에 맞춰 정부지원사업 기반의 로봇 자동화 시스템 개발 및 도입을 통해 투자금액을 최소화합니다.",
    points: [
      "사이클 타임·안전·유지보수를 고려한 셀 레이아웃",
      "MCT·가공물 특성에 맞는 그리퍼·픽스처 검토",
      "비전·센서 기반 검사 시퀀스 및 불량 분기",
      "시운전·작업자 교육·예비품 전략",
    ],
    statsTitle: "지원 범위",
    stats: [
      { label: "대상", value: "제조업" },
      { label: "구성", value: "로봇 자동화 시스템" },
      { label: "산출", value: "설계·구축" },
    ],
  },
]

const EMPLOYEE_COMPARISON = {
  hire: {
    title: "직원 고용",
    items: [
      "월 급여 400~500만원",
      "사대보험·퇴직금·식대 등 높은 비용",
      "성과 없어도보내기 힘듦",
      "적극성·전문성 보장 X",
    ],
  },
  staffService: {
    title: "직원화 서비스",
    items: [
      "전문가 수준 인력을 200~300만원의 저렴한 고정비로 활용",
      "세금계산서 비용처리 외 부대비용 없음",
      "성과 없으면 언제든 그만둘 수 있음",
      "계약 지속을 위한 노력",
    ],
  },
} as const

function StaffComparisonSection() {
  return (
    <div className="mt-14">
      <h3 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        직원 고용 vs 직원화 서비스
      </h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="border border-slate-200 bg-slate-100/80 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">
              {EMPLOYEE_COMPARISON.hire.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {EMPLOYEE_COMPARISON.hire.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="relative border border-[#0c2348] bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] text-white shadow-lg">
          <span className="absolute top-4 right-4 rounded-full bg-[#0066cc] px-3 py-1 text-xs font-semibold text-white">
            추천
          </span>
          <CardHeader>
            <CardTitle className="text-lg text-white">
              {EMPLOYEE_COMPARISON.staffService.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-relaxed text-white/90 sm:text-base">
              {EMPLOYEE_COMPARISON.staffService.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const servicesBgUrl = publicFileUrl("images", "services-bg.jpg")

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[22rem] overflow-hidden border-b py-20 text-center text-white sm:min-h-[26rem] sm:py-28">
          {servicesBgUrl ? (
            <>
              <Image
                src={servicesBgUrl}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                aria-hidden
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1a]/30 to-[#060d1a]/70"
                aria-hidden
              />
            </>
          )}
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              서비스 · 솔루션
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              기획부터 실행까지, 순한연구소가 함께합니다
            </p>
          </div>
        </section>

        {/* 카드 그리드 */}
        <section className="border-t bg-[#f8fafc] py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ id, title, Icon, summary }) => (
                <Link
                  key={id}
                  href={`/services#${id}`}
                  scroll
                  className={cn(
                    "group relative block overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-xl",
                    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[#0066cc] before:transition-transform before:duration-300 hover:before:scale-x-100"
                  )}
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-foreground">{title}</h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 상세 섹션 */}
        {services.map((svc, index) => {
          const { id, title, Icon, lead, points, statsTitle, stats, showComparison } = svc
          const bg = index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"
          return (
            <section
              key={id}
              id={id}
              className={cn("scroll-mt-28 border-t py-16 sm:py-24", bg)}
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {title}
                  </h2>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
                  <div>
                    <p className="text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
                      {lead}
                    </p>
                    {points.length > 0 ? (
                      <ul className="mt-8 list-disc space-y-3 pl-5 text-sm leading-relaxed text-neutral-700 sm:text-base">
                        {points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <Card className="border border-slate-200/80 bg-white shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">{statsTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {stats.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="shrink-0 text-sm font-medium text-muted-foreground">
                            {row.label}
                          </span>
                          <span className="text-right text-sm font-semibold text-foreground">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {showComparison ? <StaffComparisonSection /> : null}

                <div className="mt-12 flex justify-center">
                  <Button
                    className="rounded-md bg-[#0066cc] px-8 text-white hover:bg-[#0052a3]"
                    asChild
                  >
                    <Link href="/contact">상담 문의</Link>
                  </Button>
                </div>
              </div>
            </section>
          )
        })}

        {/* 하단 CTA */}
        <section className="border-t bg-gradient-to-b from-[#060d1a] via-[#0a1a32] to-[#0c2348] py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              어떤 서비스가 맞는지 모르겠다면?
            </h2>
            <p className="mt-3 text-white/75 sm:text-base">
              범위를 나누어 듣고 적합한 과제·지원 방향을 함께 정리해 드립니다.
            </p>
            <Button
              size="lg"
              className="mt-8 rounded-md border border-white/40 bg-white text-[#0c2348] hover:bg-white/90"
              variant="outline"
              asChild
            >
              <Link href="/contact">무료 상담 신청하기</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
