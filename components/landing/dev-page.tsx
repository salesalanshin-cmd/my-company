import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart2,
  BarChart3,
  Bot,
  Brain,
  Building2,
  Cloud,
  Code,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  Monitor,
  MonitorSmartphone,
  Plug,
  RefreshCw,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wind,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

function DevHero({
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
  const imageSrc = publicFileUrl("images", "dev", imagePath)

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

function WebsiteTypeCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  const imageSrc = publicFileUrl("images", "dev", image)

  return (
    <article className="group relative h-[280px] overflow-hidden rounded-xl sm:h-[320px]">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {imageSrc ? (
          <Image src={imageSrc} alt="" fill className="object-cover" sizes="25vw" />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a1f3c] via-[#143d8a] to-[#0066cc]"
            aria-hidden
          />
        )}
      </div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] transition-colors duration-500 group-hover:bg-[rgba(0,0,0,0.4)]" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white sm:p-6">
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/85">{description}</p>
      </div>
    </article>
  )
}

const websiteTypes = [
  {
    title: "레퍼런스형(랜딩형)",
    description: "서비스·제품 소개에 최적화된 단일 페이지 구성",
    image: "web1.jpg",
  },
  {
    title: "홈페이지형",
    description: "기업 소개부터 서비스까지 체계적인 다중 페이지 구성",
    image: "web2.jpg",
  },
  {
    title: "쇼핑몰형",
    description: "상품 등록·결제·관리까지 완성된 커머스 솔루션",
    image: "web3.jpg",
  },
  {
    title: "글로벌형",
    description: "다국어 지원·해외 SEO 최적화 글로벌 진출용 홈페이지",
    image: "web4.jpg",
  },
] as const

const techStack: { name: string; icon: LucideIcon }[] = [
  { name: "Next.js 14 (App Router)", icon: Layers },
  { name: "React 18", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "shadcn/ui", icon: Layers },
  { name: "Vercel (배포)", icon: Zap },
  { name: "PostgreSQL / Supabase", icon: Database },
  { name: "Node.js", icon: Server },
  { name: "REST API / GraphQL", icon: Plug },
  { name: "Git / GitHub", icon: GitBranch },
  { name: "SEO 최적화", icon: Search },
  { name: "PWA 지원", icon: MonitorSmartphone },
]

const processSteps = [
  {
    step: "01",
    title: "문의상담",
    description: "상담 또는 미팅을 통해 고객님의 요청 사항을 파악합니다.",
  },
  {
    step: "02",
    title: "상담 및 견적 안내",
    description: "온라인 또는 유선 상담을 통해 요청 내용을 반영한 견적을 제공합니다.",
  },
  {
    step: "03",
    title: "기획 및 디자인",
    description: "상담 내용을 바탕으로 사이트 구조를 기획하고 디자인을 진행합니다.",
  },
  {
    step: "04",
    title: "디자인 시안 검수",
    description: "완성된 디자인 시안을 고객이 검토하고 피드백을 주시면 수정 반영합니다.",
  },
  {
    step: "05",
    title: "퍼블리싱",
    description: "확정된 시안을 기반으로 실제 제작에 들어가며 기능 구현을 포함합니다.",
  },
  {
    step: "06",
    title: "웹 세팅",
    description: "도메인 연결, 웹 호스팅 등 사이트 운영을 위한 초기 세팅을 지원합니다.",
  },
  {
    step: "07",
    title: "최종 검수",
    description: "1차 제작물 확인 후 최종 수정사항을 반영합니다.",
  },
  {
    step: "08",
    title: "최종 납품",
    description: "완료된 결과물을 고객에게 최종 납품합니다.",
  },
] as const

function ProcessStepCard({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc] text-sm font-bold text-white">
        {step}
      </div>
      <p className="mt-3 text-xs font-semibold tracking-wider text-[#0066cc]">STEP {step}</p>
      <h4 className="mt-1 text-sm font-bold text-foreground sm:text-base">{title}</h4>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
    </div>
  )
}

function ProcessRow({ steps }: { steps: readonly (typeof processSteps)[number][] }) {
  return (
    <div className="flex items-start gap-1 sm:gap-2">
      {steps.map((item, index) => (
        <div key={item.step} className="flex min-w-0 flex-1 items-start gap-1 sm:gap-2">
          {index > 0 ? (
            <ArrowRight
              className="mt-5 hidden size-5 shrink-0 text-[#0066cc] sm:block lg:size-6"
              aria-hidden
            />
          ) : null}
          <ProcessStepCard {...item} />
        </div>
      ))}
    </div>
  )
}

const freeBenefits: { label: string; icon: LucideIcon }[] = [
  { label: "네이버 검색엔진 등록", icon: Search },
  { label: "구글 검색엔진 등록", icon: Globe },
  { label: "SEO 기본 최적화", icon: LineChart },
  { label: "Google Analytics 연동", icon: BarChart3 },
  { label: "사이트맵 자동 생성", icon: Layers },
  { label: "robots.txt 설정", icon: Code2 },
  { label: "HTTPS 보안 인증", icon: Shield },
  { label: "반응형 모바일 최적화", icon: Smartphone },
  { label: "페이지 속도 최적화", icon: Zap },
  { label: "오픈그래프 메타태그 설정", icon: Globe },
  { label: "네이버 서치어드바이저 등록", icon: Search },
]

function BenefitsMarquee() {
  const items = [...freeBenefits, ...freeBenefits]

  return (
    <section className="overflow-hidden bg-[#f8fafc] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            고객 제공 무료 혜택
          </h3>
          <p className="mt-3 text-muted-foreground sm:text-base">
            홈페이지 제작 시 기본 제공되는 무료 서비스입니다.
          </p>
        </div>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="dev-benefits-marquee flex w-max gap-4 px-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.label}-${index}`}
                className="flex w-[200px] shrink-0 flex-col items-center gap-3 rounded-xl bg-white px-4 py-5 shadow-md sm:w-[220px]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#0066cc]/10">
                  <Icon className="size-6 text-[#0066cc]" aria-hidden />
                </div>
                <p className="text-center text-sm font-medium text-slate-800">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        @keyframes dev-benefits-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .dev-benefits-marquee {
          animation: dev-benefits-scroll 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .dev-benefits-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}


function WebsiteSection() {
  return (
    <section id="website" className="scroll-mt-28 border-t">
      <DevHero
        eyebrow="템플릿 기반이 아닌 코드 개발 기반의 커스터마이징"
        titleEn="Website Development"
        titleKo="단순한 홈페이지가 아닌, 기업과 나를 알리기 위한 전략의 시작입니다."
        imagePath="website-hero.jpg"
      />

      <div className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {websiteTypes.map((type) => (
              <WebsiteTypeCard key={type.title} {...type} />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            OUR TECH STACK
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {techStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-5 text-center backdrop-blur-sm"
              >
                <Icon className="size-8 text-[#4da3ff]" strokeWidth={1.5} aria-hidden />
                <span className="text-xs font-medium text-white sm:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              홈페이지 제작 과정
            </h3>
            <p className="mt-3 text-muted-foreground sm:text-base">
              고객님의 요구 사항을 체계적인 절차에 따라 완성도 높은 홈페이지를 제작합니다.
            </p>
          </div>
          <div className="mx-auto mt-10 h-1 max-w-xs rounded-full bg-[#0066cc]" aria-hidden />
          <div className="mt-10 space-y-8">
            <ProcessRow steps={processSteps.slice(0, 4)} />
            <ProcessRow steps={processSteps.slice(4, 8)} />
          </div>
        </div>
      </section>

      <BenefitsMarquee />
      <SectionCta />
    </section>
  )
}

const appFeatures = [
  {
    title: "크로스플랫폼",
    description:
      "iOS와 Android 앱을 하나의 코드베이스로 동시에 개발할 수 있어 비용과 시간을 절감합니다.",
    icon: Smartphone,
  },
  {
    title: "빠른 개발 속도",
    description:
      "핫리로드(Hot Reload) 기능을 통해 개발-테스트-수정 사이클을 빠르게 반복할 수 있습니다.",
    icon: Zap,
  },
  {
    title: "전문 개발 기반",
    description:
      "노코드·로우코드가 아닌 실제 코드 기반으로 확장성과 운영 편의성을 고려해 정확하게 개발합니다.",
    icon: Code,
  },
  {
    title: "SEO & 퍼포먼스 최적화",
    description:
      "앱 성능 최적화와 함께 관련 웹 연동 시 검색 노출까지 고려한 구조로 개발합니다.",
    icon: TrendingUp,
  },
  {
    title: "API 연동",
    description:
      "기존 ERP·MES·외부 서비스와의 API 연동을 기본으로 고려하여 즉시 활용 가능한 앱을 구축합니다.",
    icon: Plug,
  },
  {
    title: "유지보수 & 업데이트",
    description:
      "납품 후에도 지속적인 업데이트와 오류 수정을 지원하며 장기 운영을 함께합니다.",
    icon: RefreshCw,
  },
] as const

const appTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Flutter / Dart", icon: Smartphone },
  { name: "React Native", icon: Code2 },
  { name: "Next.js (웹앱)", icon: Layers },
  { name: "Firebase", icon: Zap },
  { name: "REST API / GraphQL", icon: Plug },
  { name: "Node.js 백엔드", icon: Server },
  { name: "AWS / Vercel", icon: Cloud },
  { name: "Git / GitHub", icon: GitBranch },
]

const appProcessSteps = [
  {
    step: "01",
    title: "문의 및 견적 요청",
    description:
      "홈페이지 문의하기를 통해 요청하시면 1일 이내로 예상 견적과 일정을 안내드립니다.",
  },
  {
    step: "02",
    title: "계약 및 착수",
    description: "요구사항 확정 후 계약을 진행하고 프로젝트가 시작됩니다.",
  },
  {
    step: "03",
    title: "기획 및 화면 설계",
    description: "앱 구조와 화면 흐름(UI Flow)을 설계하고 와이어프레임을 제작합니다.",
  },
  {
    step: "04",
    title: "디자인 및 개발",
    description: "UI 디자인 확정 후 실제 앱 기능 개발을 진행합니다.",
  },
  {
    step: "05",
    title: "테스트 및 피드백 반영",
    description: "실제 디바이스에서 테스트하고 피드백을 수렴하여 수정 반영합니다.",
  },
  {
    step: "06",
    title: "최종 납품",
    description:
      "Android(APK/AAB) 및 iOS(IPA) 패키지로 제공되며, 앱스토어 등록 가이드도 함께 안내드립니다.",
  },
] as const

type DevFeature = {
  title: string
  description: string
  icon: LucideIcon
}

type DevProcessStep = {
  step: string
  title: string
  description: string
}

type DevDetailSectionProps = {
  id: string
  hero: {
    eyebrow?: string
    titleEn: string
    titleKo: string
    imagePath: string
  }
  featuresTitle: string
  featuresSubtitle: string
  features: readonly DevFeature[]
  techStack: readonly { name: string; icon: LucideIcon }[]
  processTitle: string
  processSubtitle: string
  processSteps: readonly DevProcessStep[]
  infoBox: string
  ctaLabel: string
}

function DevFeatureCard({
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

function DevVerticalTimeline({ steps }: { steps: readonly DevProcessStep[] }) {
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

function DevDetailSection({
  id,
  hero,
  featuresTitle,
  featuresSubtitle,
  features,
  techStack,
  processTitle,
  processSubtitle,
  processSteps,
  infoBox,
  ctaLabel,
}: DevDetailSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t">
      <DevHero
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
              <DevFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            TECH STACK
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {techStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-5 text-center backdrop-blur-sm"
              >
                <Icon className="size-8 text-[#4da3ff]" strokeWidth={1.5} aria-hidden />
                <span className="text-xs font-medium text-white sm:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {processTitle}
            </h3>
            <p className="mt-3 text-muted-foreground sm:text-base">
              {processSubtitle}
            </p>
          </div>
          <div className="mt-14">
            <DevVerticalTimeline steps={processSteps} />
          </div>
          <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-[#0066cc]/20 bg-[#0066cc]/5 px-6 py-5 text-center sm:px-8 sm:py-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              {infoBox}
            </p>
          </div>
        </div>
      </section>

      <SectionCta label={ctaLabel} />
    </section>
  )
}

const mesFeatures: DevFeature[] = [
  {
    title: "경량형 구조",
    description:
      "대형 ERP 없이도 도입 가능한 경량형 구조로 중소 제조업에 최적화되어 있습니다.",
    icon: Layers,
  },
  {
    title: "실시간 생산 현황",
    description:
      "라인별·설비별 생산 현황을 실시간으로 모니터링하고 이상 징후를 즉시 파악합니다.",
    icon: Monitor,
  },
  {
    title: "불량·품질 관리",
    description:
      "불량 유형별 데이터를 수집·분석하여 품질 개선 방향을 수립할 수 있습니다.",
    icon: ShieldCheck,
  },
  {
    title: "설비 가동률 분석",
    description:
      "설비별 가동·비가동 시간을 자동 집계하여 OEE 분석과 개선 방향을 제시합니다.",
    icon: BarChart2,
  },
  {
    title: "정부지원사업 연계",
    description:
      "스마트공장 보급사업, AI바우처 등 정부지원사업과 연계하여 도입 비용을 최소화합니다.",
    icon: Building2,
  },
  {
    title: "맞춤형 커스터마이징",
    description:
      "업종·공정·규모에 따라 필요한 기능만 선택해 구성하는 맞춤형 시스템을 제공합니다.",
    icon: Settings,
  },
]

const mesTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Next.js / React", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL / MySQL", icon: Database },
  { name: "REST API", icon: Plug },
  { name: "Node.js 백엔드", icon: Server },
  { name: "Supabase / AWS", icon: Cloud },
  { name: "실시간 데이터 처리", icon: Zap },
  { name: "Git / GitHub", icon: GitBranch },
]

const mesProcessSteps: DevProcessStep[] = [
  {
    step: "01",
    title: "현장 진단 및 요구사항 분석",
    description:
      "제조 현장의 공정 흐름, 설비 구성, 데이터 현황을 분석하고 필요 기능을 정의합니다.",
  },
  {
    step: "02",
    title: "시스템 설계",
    description: "공정별 데이터 흐름과 화면 구조를 설계하고 DB 스키마를 구성합니다.",
  },
  {
    step: "03",
    title: "개발 및 현장 테스트",
    description: "핵심 기능 개발 후 실제 현장에서 테스트하고 피드백을 반영합니다.",
  },
  {
    step: "04",
    title: "데이터 연동 및 설비 연결",
    description:
      "기존 설비·ERP·바코드 등과 연동하여 데이터 자동 수집 환경을 구축합니다.",
  },
  {
    step: "05",
    title: "교육 및 안정화",
    description: "현장 담당자 교육을 진행하고 초기 운영 안정화를 지원합니다.",
  },
  {
    step: "06",
    title: "유지보수 및 고도화",
    description: "운영 중 발생하는 이슈 대응과 기능 고도화를 지속적으로 지원합니다.",
  },
]

const automationFeatures: DevFeature[] = [
  {
    title: "업무 프로세스 분석",
    description:
      "반복 업무와 비효율 구간을 분석하여 자동화 우선순위와 구조를 설계합니다.",
    icon: GitBranch,
  },
  {
    title: "RPA 자동화",
    description:
      "반복적인 수작업 업무를 RPA로 자동화하여 인력 낭비를 줄이고 정확도를 높입니다.",
    icon: Bot,
  },
  {
    title: "API 시스템 통합",
    description:
      "기존 ERP·MES·CRM·외부 서비스를 API로 연결하여 데이터 사일로를 해소합니다.",
    icon: Plug,
  },
  {
    title: "AI 에이전트 연동",
    description:
      "단순 자동화를 넘어 AI 에이전트와 연동하여 판단·처리까지 자동화합니다.",
    icon: Brain,
  },
  {
    title: "정부지원사업 연계",
    description:
      "스마트공장, AI바우처, 디지털전환 지원사업 등을 활용해 도입 비용을 최소화합니다.",
    icon: Building2,
  },
  {
    title: "유지보수 & 확장",
    description:
      "구축 이후에도 업무 변화에 따라 유연하게 확장·수정할 수 있는 구조로 개발합니다.",
    icon: RefreshCw,
  },
]

const automationTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Python (자동화 스크립트)", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "REST API / GraphQL", icon: Plug },
  { name: "RPA (업무 자동화)", icon: Bot },
  { name: "AI Agent 연동", icon: Brain },
  { name: "PostgreSQL / MySQL", icon: Database },
  { name: "AWS / Vercel", icon: Cloud },
  { name: "Git / GitHub", icon: GitBranch },
]

const automationProcessSteps: DevProcessStep[] = [
  {
    step: "01",
    title: "업무 진단 및 요구사항 분석",
    description:
      "현재 업무 흐름과 시스템 환경을 분석하고 자동화·통합이 필요한 영역을 정의합니다.",
  },
  {
    step: "02",
    title: "자동화 구조 설계",
    description: "자동화 범위와 시스템 연동 구조를 설계하고 우선순위를 수립합니다.",
  },
  {
    step: "03",
    title: "개발 및 테스트",
    description: "핵심 자동화 기능을 개발하고 실제 업무 환경에서 테스트합니다.",
  },
  {
    step: "04",
    title: "시스템 연동 및 통합",
    description: "기존 시스템과 API 연동을 완료하고 데이터 흐름을 검증합니다.",
  },
  {
    step: "05",
    title: "교육 및 인수인계",
    description: "담당자 교육을 진행하고 운영 가이드를 제공합니다.",
  },
  {
    step: "06",
    title: "유지보수 및 고도화",
    description: "운영 중 발생하는 이슈 대응과 추가 자동화 기능 확장을 지원합니다.",
  },
]

export function DevPageContent() {
  return (
    <>
      <section className="border-b bg-[#f8fafc] py-12 text-center sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-bold tracking-widest text-[#0066cc] uppercase">DEVELOPMENT</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            개발 서비스
          </h1>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            홈페이지·앱·MES·자동화 시스템까지 비즈니스에 맞는 개발 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <WebsiteSection />

      <DevDetailSection
        id="app"
        hero={{
          eyebrow: "iOS · Android · 크로스플랫폼",
          titleEn: "Application Development",
          titleKo:
            "하나의 코드로 iOS와 Android를 동시에, 비즈니스에 최적화된 앱을 개발합니다.",
          imagePath: "app-hero.jpg",
        }}
        featuresTitle="순한연구소 앱 개발이 특별한 이유"
        featuresSubtitle="개발만이 아닌, 고객에게 도달하고 활용되는 제품을 설계합니다."
        features={appFeatures}
        techStack={appTechStack}
        processTitle="앱 개발 프로세스"
        processSubtitle="처음부터 출시까지, 투명하고 전문적인 절차로 함께합니다."
        processSteps={appProcessSteps}
        infoBox="앱 개발을 위해 로고/컬러 가이드, 주요 기능 목록, 참고 앱 사례 등의 자료를 사전에 준비해주시면 더욱 빠른 진행이 가능합니다."
        ctaLabel="앱 개발 문의하기"
      />

      <DevDetailSection
        id="mes"
        hero={{
          eyebrow: "제조 현장 맞춤형 솔루션",
          titleEn: "MES System",
          titleKo: "제조 현장에 최적화된 경량형 생산관리 시스템을 구축합니다.",
          imagePath: "mes-hero.jpg",
        }}
        featuresTitle="순한연구소 MES가 특별한 이유"
        featuresSubtitle="현장을 이해한 개발자가 만드는 실전형 생산관리 시스템입니다."
        features={mesFeatures}
        techStack={mesTechStack}
        processTitle="MES 구축 프로세스"
        processSubtitle="현장 분석부터 운영까지, 단계별로 함께합니다."
        processSteps={mesProcessSteps}
        infoBox="MES 도입을 위해 현재 공정 흐름도, 설비 목록, 관리하고 싶은 데이터 항목을 사전에 정리해주시면 더욱 정확한 견적과 빠른 구축이 가능합니다."
        ctaLabel="MES 도입 문의하기"
      />

      <DevDetailSection
        id="automation"
        hero={{
          eyebrow: "업무 효율화 & 시스템 통합",
          titleEn: "SI / Automation System",
          titleKo:
            "업무 프로세스를 자동화하고 시스템을 통합하여 운영 효율을 극대화합니다.",
          imagePath: "si-hero.jpg",
        }}
        featuresTitle="순한연구소 SI/자동화가 특별한 이유"
        featuresSubtitle="단순 개발이 아닌, 업무 구조를 이해하고 설계하는 자동화입니다."
        features={automationFeatures}
        techStack={automationTechStack}
        processTitle="SI/자동화 구축 프로세스"
        processSubtitle="업무 분석부터 실제 운영까지, 단계별로 함께합니다."
        processSteps={automationProcessSteps}
        infoBox="자동화 구축을 위해 현재 업무 프로세스 흐름도, 사용 중인 시스템 목록, 자동화하고 싶은 업무 목록을 사전에 정리해주시면 더욱 정확한 견적과 빠른 구축이 가능합니다."
        ctaLabel="자동화 시스템 문의하기"
      />
    </>
  )
}
