import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  FileText,
  Globe,
  Map,
  Mic,
  RefreshCw,
  Search,
  Shield,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

function ConsultingHero({
  eyebrow,
  titleEn,
  titleKo,
  imagePath,
  fallbackClassName = "bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a]",
}: {
  eyebrow?: string
  titleEn: string
  titleKo: string
  imagePath: string
  fallbackClassName?: string
}) {
  const imageSrc = publicFileUrl("images", "consulting", imagePath)

  return (
    <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[24rem]">
      {imageSrc ? (
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="100vw" priority />
      ) : (
        <div className={cn("absolute inset-0", fallbackClassName)} aria-hidden />
      )}
      <div className="absolute inset-0 bg-black/65" aria-hidden />
      <div className="relative z-10 mx-auto flex h-full min-h-[20rem] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-[24rem] sm:px-6">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-[#7eb8ff] sm:text-base">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            eyebrow && "mt-3"
          )}
        >
          {titleEn}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          {titleKo}
        </p>
      </div>
    </div>
  )
}

function ConsultingMainHero() {
  const imageSrc = publicFileUrl("images", "consulting", "consulting-main-hero.jpg")

  return (
    <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[24rem]">
      {imageSrc ? (
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="100vw" priority />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a]"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-black/65" aria-hidden />
      <div className="relative z-10 mx-auto flex h-full min-h-[20rem] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-[24rem] sm:px-6">
        <p className="text-sm font-bold tracking-widest text-[#7eb8ff] uppercase">
          CONSULTING
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Consulting Services
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          단순 자문이 아닌 실행까지 책임지는 컨설팅 파트너입니다.
        </p>
      </div>
    </div>
  )
}

function SectionCta({ label = "상담 문의하기" }: { label?: string }) {
  return (
    <div className="border-t bg-[#f8fafc] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Button size="lg" className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
          <Link href="/#contact">{label}</Link>
        </Button>
      </div>
    </div>
  )
}

type ConsultingFeature = {
  title: string
  description: string
  icon: LucideIcon
}

type ConsultingProcessStep = {
  step: string
  title: string
  description: string
}

type SupportTarget = {
  title: string
  description: string
}

type ProgramsBlock = {
  title: string
  items: readonly string[]
  variant: "navy" | "slate"
}

type ConsultingDetailSectionProps = {
  id: string
  hero: {
    eyebrow?: string
    titleEn: string
    titleKo: string
    imagePath: string
  }
  featuresTitle: string
  featuresSubtitle: string
  features: readonly ConsultingFeature[]
  supportTargets?: readonly SupportTarget[]
  programs?: ProgramsBlock
  processTitle: string
  processSteps: readonly ConsultingProcessStep[]
  infoBox: string
  ctaLabel: string
}

function ConsultingFeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc]/10">
        <Icon className="size-6 text-[#0066cc]" strokeWidth={1.5} aria-hidden />
      </div>
      <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

function SupportTargetsSection({ targets }: { targets: readonly SupportTarget[] }) {
  return (
    <section className="bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          지원 대상
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {targets.map((target) => (
            <div
              key={target.title}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur-sm"
            >
              <h4 className="text-lg font-semibold text-white">{target.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramsBadgeSection({ title, items, variant }: ProgramsBlock) {
  const isNavy = variant === "navy"

  return (
    <section className={cn("py-14 sm:py-20", isNavy ? "bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348]" : "bg-slate-100")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3
          className={cn(
            "text-center text-2xl font-semibold tracking-tight sm:text-3xl",
            isNavy ? "text-white" : "text-slate-900"
          )}
        >
          {title}
        </h3>
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {items.map((item) => (
            <span
              key={item}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                isNavy
                  ? "border border-white/15 bg-white/10 text-white"
                  : "border border-slate-200 bg-white text-slate-800 shadow-sm"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConsultingVerticalTimeline({
  steps,
}: {
  steps: readonly ConsultingProcessStep[]
}) {
  return (
    <ol className="relative mx-auto max-w-3xl">
      <div
        className="absolute top-2 bottom-2 left-6 w-0.5 -translate-x-1/2 bg-[#0066cc]"
        aria-hidden
      />
      {steps.map((item) => (
        <li key={item.step} className="relative flex gap-6 pb-12 last:pb-0">
          <div
            className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0066cc] text-sm font-bold text-white"
            aria-hidden
          >
            {item.step}
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function ConsultingDetailSection({
  id,
  hero,
  featuresTitle,
  featuresSubtitle,
  features,
  supportTargets,
  programs,
  processTitle,
  processSteps,
  infoBox,
  ctaLabel,
}: ConsultingDetailSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t">
      <ConsultingHero
        eyebrow={hero.eyebrow}
        titleEn={hero.titleEn}
        titleKo={hero.titleKo}
        imagePath={hero.imagePath}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {featuresTitle}
            </h3>
            <p className="mt-3 text-muted-foreground sm:text-base">{featuresSubtitle}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <ConsultingFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {supportTargets ? <SupportTargetsSection targets={supportTargets} /> : null}

      {programs ? (
        <ProgramsBadgeSection
          title={programs.title}
          items={programs.items}
          variant={programs.variant}
        />
      ) : null}

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {processTitle}
            </h3>
          </div>
          <div className="mt-14">
            <ConsultingVerticalTimeline steps={processSteps} />
          </div>
          <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-[#0066cc]/20 bg-[#0066cc]/5 px-6 py-5 text-center sm:px-8 sm:py-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{infoBox}</p>
          </div>
        </div>
      </section>

      <SectionCta label={ctaLabel} />
    </section>
  )
}

const startupFeatures: ConsultingFeature[] = [
  {
    title: "맞춤형 과제 발굴",
    description:
      "예비창업자부터 초기기업까지 단계에 맞는 창업지원사업을 발굴하고 전략을 수립합니다.",
    icon: Search,
  },
  {
    title: "사업계획서 작성",
    description: "선정 가능성을 높이는 사업계획서를 함께 기획하고 작성합니다.",
    icon: FileText,
  },
  {
    title: "특허·인증 준비",
    description: "기술 차별화를 위한 특허 출원과 각종 인증 취득을 지원합니다.",
    icon: Shield,
  },
  {
    title: "발표 대응",
    description: "심사 발표 준비부터 예상 질문 대응까지 선정을 위한 전 과정을 지원합니다.",
    icon: Mic,
  },
  {
    title: "정부지원사업 연계",
    description:
      "창업패키지, 창업사관학교, 바우처 등 초기기업에 맞는 지원사업을 연계합니다.",
    icon: Building2,
  },
  {
    title: "사후 관리",
    description: "과제 선정 후 수행 관리, 정산까지 전 과정을 내부 팀처럼 함께 진행합니다.",
    icon: RefreshCw,
  },
]

const startupSupportTargets: SupportTarget[] = [
  {
    title: "예비창업자",
    description: "아이디어는 있지만 사업화 방법을 모르는 분",
  },
  {
    title: "초기창업자",
    description: "창업 후 정부지원사업 활용이 필요한 기업",
  },
  {
    title: "소상공인·중소기업",
    description: "신규 사업 확장이 필요한 대표님",
  },
]

const startupPrograms = [
  "예비창업패키지",
  "초기창업패키지",
  "청년창업사관학교",
  "창업중심대학",
  "로컬크리에이터",
  "소상공인 바우처",
  "창업도약패키지",
  "민간투자주도형 기술창업",
  "TIPS",
  "지자체 창업지원사업",
] as const

const startupProcessSteps: ConsultingProcessStep[] = [
  {
    step: "01",
    title: "초기 상담 및 진단",
    description:
      "현재 아이디어·기술·사업 단계를 파악하고 적합한 지원사업을 진단합니다.",
  },
  {
    step: "02",
    title: "과제 선정 및 전략 수립",
    description: "지원 가능한 사업을 선별하고 선정 가능성을 높이는 전략을 수립합니다.",
  },
  {
    step: "03",
    title: "사업계획서 기획 및 작성",
    description: "차별화 포인트를 부각한 사업계획서를 함께 기획하고 작성합니다.",
  },
  {
    step: "04",
    title: "특허·인증 준비",
    description: "필요 시 특허 출원, 기업부설연구소 설립 등 기반 구축을 지원합니다.",
  },
  {
    step: "05",
    title: "발표 준비 및 대응",
    description: "심사 발표 자료 제작과 예상 질문 대응 연습을 함께합니다.",
  },
  {
    step: "06",
    title: "선정 후 수행 관리",
    description: "과제 선정 후 사업비 집행, 중간·최종 보고까지 전 과정을 지원합니다.",
  },
]

const rdFeatures: ConsultingFeature[] = [
  {
    title: "맞춤형 과제 발굴",
    description:
      "중소벤처기업부, 산업부, 과기부, 지자체 사업 중 기업에 맞는 과제를 선별합니다.",
    icon: Search,
  },
  {
    title: "전략적 기획",
    description:
      "아이템·기술 컨셉 개발부터 차별화 스토리 설계, 선정 가능성 분석까지 함께합니다.",
    icon: Target,
  },
  {
    title: "사업계획서 작성",
    description: "과제 특성에 맞는 사업계획서를 기획·작성하고 평가자료를 체계화합니다.",
    icon: FileText,
  },
  {
    title: "발표 대응",
    description: "발표 자료 제작부터 예상 질문 대응, 현장 발표 준비까지 지원합니다.",
    icon: Mic,
  },
  {
    title: "수행 관리",
    description: "과제 선정 후 사업비 집행, 중간점검, 완료보고까지 전 과정을 관리합니다.",
    icon: ClipboardList,
  },
  {
    title: "장기 협업",
    description:
      "단기 계약으로 시작해 2년, 길게는 7년 이상 협업하며 기업 성장을 함께합니다.",
    icon: Users,
  },
]

const rdPrograms = [
  "중소기업 기술개발(R&D)",
  "AI바우처",
  "스마트공장 보급사업",
  "혁신바우처",
  "테크노파크 과제",
  "산업기술개발",
  "디딤돌 R&D",
  "규제샌드박스",
  "연구개발특구",
  "지역특화산업 육성",
  "소재·부품·장비 R&D",
  "창업성장기술개발",
] as const

const rdProcessSteps: ConsultingProcessStep[] = [
  {
    step: "01",
    title: "기업 진단 및 과제 발굴",
    description: "기업 현황, 기술 수준, 사업 방향을 분석하고 적합한 R&D 과제를 발굴합니다.",
  },
  {
    step: "02",
    title: "전략 기획",
    description: "아이템·기술 컨셉을 개발하고 차별화 스토리와 선정 전략을 수립합니다.",
  },
  {
    step: "03",
    title: "사업계획서 작성",
    description: "과제 유형에 맞는 사업계획서를 기획·작성하고 평가자료를 체계화합니다.",
  },
  {
    step: "04",
    title: "발표 준비 및 선정 대응",
    description: "발표 자료 제작과 예상 질문 대응으로 선정률을 높입니다.",
  },
  {
    step: "05",
    title: "과제 수행 관리",
    description: "선정 후 사업비 집행, 중간점검, 성과물 관리를 지원합니다.",
  },
  {
    step: "06",
    title: "완료보고 및 사후 관리",
    description: "완료보고서 작성과 정산, 이후 후속 과제 연계까지 지원합니다.",
  },
]

const exportFeatures: ConsultingFeature[] = [
  {
    title: "바이어 발굴",
    description: "30여 개국 네트워크를 활용하여 타겟 시장의 적합한 바이어를 발굴합니다.",
    icon: Globe,
  },
  {
    title: "수출 전략 수립",
    description:
      "시장 조사, 규제·물류·거래 구조까지 실무 관점에서 수출 로드맵을 설계합니다.",
    icon: Map,
  },
  {
    title: "무역 실무 대응",
    description: "FTA 활용, 수출입 서류, 인증 준비 등 무역 실무 전 과정을 지원합니다.",
    icon: FileText,
  },
  {
    title: "정부 수출지원사업 연계",
    description: "KOTRA, KITA, 수출바우처 등 정부 수출지원사업을 연계하여 비용을 절감합니다.",
    icon: Building2,
  },
  {
    title: "해외 전시회 준비",
    description: "해외 전시회 참가 준비부터 현장 대응, 바이어 미팅까지 함께합니다.",
    icon: Star,
  },
  {
    title: "장기 해외영업 파트너",
    description:
      "단기 계약으로 시작해 실제 수출 성과가 쌓일 때까지 외부 영업팀으로 함께합니다.",
    icon: Users,
  },
]

const exportPrograms = [
  "수출바우처",
  "KOTRA 지원사업",
  "KITA 무역진흥",
  "중소기업 수출지원",
  "해외전시회 참가지원",
  "FTA 활용지원",
  "글로벌강소기업",
  "수출유망중소기업",
  "해외규격인증 취득지원",
  "온라인수출플랫폼 입점지원",
] as const

const exportProcessSteps: ConsultingProcessStep[] = [
  {
    step: "01",
    title: "수출 준비도 진단",
    description:
      "현재 제품·기술·인증 현황을 분석하고 수출 가능성과 준비 사항을 진단합니다.",
  },
  {
    step: "02",
    title: "타겟 시장 및 전략 수립",
    description: "목표 시장을 선정하고 진입 전략과 수출 로드맵을 수립합니다.",
  },
  {
    step: "03",
    title: "인증·특허 준비",
    description: "해외 진출에 필요한 인증 취득과 IP 권리 기반을 확보합니다.",
  },
  {
    step: "04",
    title: "바이어 발굴 및 접촉",
    description: "타겟 시장의 바이어를 발굴하고 접촉·협상을 진행합니다.",
  },
  {
    step: "05",
    title: "계약 및 무역 실무",
    description: "수출 계약 체결과 선적, 통관, FTA 활용 등 무역 실무를 지원합니다.",
  },
  {
    step: "06",
    title: "수출 성과 관리 및 확대",
    description: "첫 수출 이후 거래 확대와 신규 시장 개척을 지속 지원합니다.",
  },
]

export function ConsultingPageContent() {
  return (
    <>
      <ConsultingMainHero />

      <ConsultingDetailSection
        id="startup"
        hero={{
          eyebrow: "예비·초기창업자를 위한",
          titleEn: "Startup Consulting",
          titleKo: "아이디어 단계부터 사업화까지, 창업의 모든 과정을 함께합니다.",
          imagePath: "startup-hero.jpg",
        }}
        featuresTitle="순한연구소 창업 컨설팅이 특별한 이유"
        featuresSubtitle="보고서로 끝나는 컨설팅이 아닌, 실제 선정까지 함께하는 실행형 컨설팅입니다."
        features={startupFeatures}
        supportTargets={startupSupportTargets}
        programs={{
          title: "지원 가능 정부사업",
          items: startupPrograms,
          variant: "slate",
        }}
        processTitle="창업 컨설팅 프로세스"
        processSteps={startupProcessSteps}
        infoBox="창업 컨설팅을 위해 현재 사업 아이디어 또는 기술 개요, 창업 단계(예비/초기), 희망하는 지원사업을 사전에 정리해주시면 더욱 정확한 상담이 가능합니다."
        ctaLabel="창업 컨설팅 문의하기"
      />

      <ConsultingDetailSection
        id="rd"
        hero={{
          eyebrow: "매년 35조원 규모 정부지원사업",
          titleEn: "Government R&D Consulting",
          titleKo: "기획부터 선정, 수행, 정산까지 고객사의 R&D 전담팀으로 함께합니다.",
          imagePath: "rd-hero.jpg",
        }}
        featuresTitle="순한연구소 R&D 컨설팅이 특별한 이유"
        featuresSubtitle="단순 신청 대행이 아닌, 선정 가능한 구조를 설계합니다."
        features={rdFeatures}
        programs={{
          title: "지원 가능 정부사업",
          items: rdPrograms,
          variant: "navy",
        }}
        processTitle="R&D 컨설팅 프로세스"
        processSteps={rdProcessSteps}
        infoBox="R&D 컨설팅을 위해 현재 기술 개요, 보유 특허·인증 현황, 희망하는 지원사업을 사전에 정리해주시면 더욱 정확한 상담이 가능합니다."
        ctaLabel="R&D 컨설팅 문의하기"
      />

      <ConsultingDetailSection
        id="export"
        hero={{
          eyebrow: "30여 개국 수출 경험 기반",
          titleEn: "Export & Import Consulting",
          titleKo: "바이어 발굴부터 계약, 무역 실무까지 외부 해외영업팀으로 함께합니다.",
          imagePath: "export-hero.jpg",
        }}
        featuresTitle="순한연구소 수출입 컨설팅이 특별한 이유"
        featuresSubtitle="10년 이상 해외영업 경험을 바탕으로 실제 계약과 매출로 이어지도록 설계합니다."
        features={exportFeatures}
        programs={{
          title: "연계 가능 정부지원사업",
          items: exportPrograms,
          variant: "navy",
        }}
        processTitle="수출입 컨설팅 프로세스"
        processSteps={exportProcessSteps}
        infoBox="수출입 컨설팅을 위해 수출 희망 제품·서비스, 타겟 국가, 현재 보유 인증 현황을 사전에 정리해주시면 더욱 정확한 상담이 가능합니다."
        ctaLabel="수출입 컨설팅 문의하기"
      />
    </>
  )
}
