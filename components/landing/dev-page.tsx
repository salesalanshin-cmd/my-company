import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  MonitorSmartphone,
  Plug,
  Search,
  Server,
  Shield,
  Smartphone,
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

function SectionCta() {
  return (
    <div className="border-t bg-[#f8fafc] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Button size="lg" className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
          <Link href="/#contact">상담 문의하기</Link>
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

function FeatureCards({
  items,
}: {
  items: readonly { title: string; icon: LucideIcon }[]
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
      {items.map(({ title, icon: Icon }) => (
        <div
          key={title}
          className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-[#0066cc]/10">
            <Icon className="size-7 text-[#0066cc]" aria-hidden />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
        </div>
      ))}
    </div>
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

function SimpleDevSection({
  id,
  eyebrow,
  titleEn,
  titleKo,
  imagePath,
  features,
}: {
  id: string
  eyebrow?: string
  titleEn: string
  titleKo: string
  imagePath: string
  features: readonly { title: string; icon: LucideIcon }[]
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t">
      <DevHero
        eyebrow={eyebrow}
        titleEn={titleEn}
        titleKo={titleKo}
        imagePath={imagePath}
      />
      <div className="bg-white py-14 sm:py-16">
        <FeatureCards items={features} />
      </div>
      <SectionCta />
    </section>
  )
}

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

      <SimpleDevSection
        id="app"
        eyebrow="모바일 퍼스트 전략"
        titleEn="Application Development"
        titleKo="iOS·Android 네이티브부터 크로스플랫폼까지, 비즈니스에 최적화된 앱을 개발합니다."
        imagePath="app-hero.jpg"
        features={[
          { title: "iOS / Android 네이티브 앱", icon: Smartphone },
          { title: "React Native 크로스플랫폼", icon: Code2 },
          { title: "PWA (Progressive Web App)", icon: MonitorSmartphone },
        ]}
      />

      <SimpleDevSection
        id="mes"
        titleEn="MES System"
        titleKo="제조 현장에 최적화된 경량형 생산관리 시스템을 구축합니다."
        imagePath="mes-hero.jpg"
        features={[
          { title: "실시간 생산 현황 모니터링", icon: LineChart },
          { title: "불량·품질 데이터 관리", icon: BarChart3 },
          { title: "설비 가동률 분석", icon: Workflow },
        ]}
      />

      <SimpleDevSection
        id="automation"
        titleEn="SI / Automation System"
        titleKo="업무 프로세스를 자동화하고 시스템을 통합하여 운영 효율을 극대화합니다."
        imagePath="si-hero.jpg"
        features={[
          { title: "업무 프로세스 자동화", icon: Workflow },
          { title: "시스템 통합(SI) 구축", icon: Plug },
          { title: "RPA·API 연동", icon: Zap },
        ]}
      />
    </>
  )
}
