import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart2,
  Bot,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Plug,
  RefreshCw,
  Search,
  Server,
  Settings,
  TrendingDown,
  Upload,
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

function AiHero({
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
  const imageSrc = publicFileUrl("images", "ai", imagePath)

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

function AiMainHero() {
  const imageSrc = publicFileUrl("images", "ai", "ai-main-hero.jpg")

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
        <p className="text-sm font-bold tracking-widest text-[#7eb8ff] uppercase">AI SOLUTIONS</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          AI Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          기업 맞춤형 AI 솔루션으로 비즈니스 경쟁력을 높입니다.
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

type AiFeature = {
  title: string
  description: string
  icon: LucideIcon
}

type AiProcessStep = {
  step: string
  title: string
  description: string
}

type AiDetailSectionProps = {
  id: string
  hero: {
    eyebrow?: string
    titleEn: string
    titleKo: string
    imagePath: string
  }
  featuresTitle: string
  featuresSubtitle: string
  features: readonly AiFeature[]
  techStack: readonly { name: string; icon: LucideIcon }[]
  processTitle: string
  processSubtitle: string
  processSteps: readonly AiProcessStep[]
  infoBox: string
  ctaLabel: string
}

function AiFeatureCard({
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

function AiVerticalTimeline({ steps }: { steps: readonly AiProcessStep[] }) {
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

function AiDetailSection({
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
}: AiDetailSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t">
      <AiHero
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
              <AiFeatureCard key={feature.title} {...feature} />
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
            <p className="mt-3 text-muted-foreground sm:text-base">{processSubtitle}</p>
          </div>
          <div className="mt-14">
            <AiVerticalTimeline steps={processSteps} />
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

const agentFeatures: AiFeature[] = [
  {
    title: "맞춤형 설계",
    description:
      "기업별 업무 프로세스를 분석하여 실제 업무에 최적화된 AI 에이전트를 설계합니다.",
    icon: Bot,
  },
  {
    title: "LLM 연동",
    description: "GPT-4, Claude, Gemini 등 최신 LLM을 활용하여 고성능 AI 에이전트를 구축합니다.",
    icon: Brain,
  },
  {
    title: "업무 자동화",
    description:
      "문서 작성, 데이터 분석, 이메일 처리 등 반복 업무를 AI가 자동으로 수행합니다.",
    icon: Zap,
  },
  {
    title: "시스템 연동",
    description:
      "ERP·MES·CRM·문서 시스템 등 기존 업무 시스템과 연동하여 실무에 바로 적용합니다.",
    icon: Plug,
  },
  {
    title: "RAG 기반 지식 검색",
    description:
      "기업 내부 문서·데이터를 학습하여 정확한 답변과 업무 처리가 가능한 AI를 구축합니다.",
    icon: Search,
  },
  {
    title: "지속 학습 및 개선",
    description:
      "운영 데이터를 기반으로 지속적으로 학습하고 성능을 개선하는 구조로 설계합니다.",
    icon: RefreshCw,
  },
]

const agentTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Code },
  { name: "LangChain / LlamaIndex", icon: GitBranch },
  { name: "GPT-4 / Claude / Gemini", icon: Brain },
  { name: "RAG 시스템", icon: Search },
  { name: "Vector DB (Pinecone, Chroma)", icon: Database },
  { name: "FastAPI / Node.js", icon: Server },
  { name: "PostgreSQL / Supabase", icon: Layers },
  { name: "AWS / Vercel", icon: Cloud },
]

const agentProcessSteps: AiProcessStep[] = [
  {
    step: "01",
    title: "업무 분석 및 요구사항 정의",
    description:
      "자동화할 업무 범위와 데이터 환경을 분석하고 AI 에이전트 설계 방향을 수립합니다.",
  },
  {
    step: "02",
    title: "데이터 수집 및 전처리",
    description: "내부 문서·데이터를 수집하고 AI 학습 및 검색에 적합한 형태로 가공합니다.",
  },
  {
    step: "03",
    title: "AI 에이전트 설계 및 개발",
    description: "LLM 선택, RAG 구조 설계, 툴 연동 등 에이전트 핵심 기능을 개발합니다.",
  },
  {
    step: "04",
    title: "시스템 연동 및 테스트",
    description: "기존 업무 시스템과 연동하고 실제 업무 환경에서 테스트합니다.",
  },
  {
    step: "05",
    title: "배포 및 운영 안정화",
    description: "실제 환경에 배포하고 초기 운영 안정화를 지원합니다.",
  },
  {
    step: "06",
    title: "모니터링 및 고도화",
    description: "운영 현황을 모니터링하고 성능 개선 및 기능 확장을 지속 지원합니다.",
  },
]

const pipelineFeatures: AiFeature[] = [
  {
    title: "데이터 자동 수집",
    description:
      "다양한 소스에서 데이터를 자동으로 수집·정제·저장하는 파이프라인을 구축합니다.",
    icon: Database,
  },
  {
    title: "전처리 자동화",
    description:
      "OCR, 텍스트 정제, 이미지 처리 등 AI 학습에 필요한 전처리 과정을 자동화합니다.",
    icon: Settings,
  },
  {
    title: "모델 학습 환경",
    description:
      "기업 데이터 기반의 AI 모델 학습 환경을 구성하고 반복 학습 구조를 설계합니다.",
    icon: Cpu,
  },
  {
    title: "모델 서빙",
    description:
      "학습된 모델을 실제 서비스에 안정적으로 배포하고 운영할 수 있는 서빙 환경을 구축합니다.",
    icon: Server,
  },
  {
    title: "모니터링",
    description:
      "파이프라인 운영 현황과 모델 성능을 실시간으로 모니터링하고 이상 징후를 감지합니다.",
    icon: BarChart2,
  },
  {
    title: "확장 가능한 구조",
    description:
      "데이터 증가와 모델 고도화에 유연하게 대응할 수 있는 확장 가능한 구조로 설계합니다.",
    icon: GitBranch,
  },
]

const pipelineTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Code },
  { name: "Apache Airflow", icon: Workflow },
  { name: "FastAPI", icon: Server },
  { name: "Docker / Kubernetes", icon: Layers },
  { name: "PostgreSQL / MongoDB", icon: Database },
  { name: "AWS S3 / Lambda", icon: Cloud },
  { name: "MLflow", icon: BarChart2 },
  { name: "Git / GitHub", icon: GitBranch },
]

const pipelineProcessSteps: AiProcessStep[] = [
  {
    step: "01",
    title: "데이터 환경 분석",
    description:
      "현재 데이터 수집·저장·활용 현황을 분석하고 파이프라인 설계 방향을 수립합니다.",
  },
  {
    step: "02",
    title: "파이프라인 설계",
    description: "데이터 흐름, 전처리 방식, 모델 연동 구조를 설계합니다.",
  },
  {
    step: "03",
    title: "수집·전처리 개발",
    description: "데이터 자동 수집 및 전처리 파이프라인을 개발하고 테스트합니다.",
  },
  {
    step: "04",
    title: "모델 학습 및 서빙 환경 구축",
    description: "AI 모델 학습 환경을 구성하고 서빙 인프라를 구축합니다.",
  },
  {
    step: "05",
    title: "테스트 및 안정화",
    description: "실제 데이터로 전체 파이프라인을 테스트하고 안정화합니다.",
  },
  {
    step: "06",
    title: "모니터링 및 고도화",
    description: "운영 모니터링 환경을 구성하고 지속적인 성능 개선을 지원합니다.",
  },
]

const mlFeatures: AiFeature[] = [
  {
    title: "환경 구성",
    description:
      "GPU 서버, 클라우드, 온프레미스 등 기업 환경에 맞는 ML 개발 환경을 구성합니다.",
    icon: Server,
  },
  {
    title: "데이터 관리",
    description: "AI 학습에 필요한 데이터 수집·라벨링·버전 관리 체계를 구축합니다.",
    icon: Database,
  },
  {
    title: "모델 개발 환경",
    description:
      "실험 관리, 모델 버전 관리, 협업 개발이 가능한 ML 개발 환경을 구성합니다.",
    icon: Code,
  },
  {
    title: "학습 자동화",
    description:
      "모델 재학습 및 성능 평가를 자동화하여 지속적인 모델 개선 체계를 구축합니다.",
    icon: RefreshCw,
  },
  {
    title: "배포 환경 구축",
    description:
      "학습된 모델을 실제 서비스에 안정적으로 배포할 수 있는 MLOps 환경을 구축합니다.",
    icon: Upload,
  },
  {
    title: "비용 최적화",
    description:
      "클라우드 자원 활용 최적화와 정부지원사업 연계로 AI 도입 비용을 최소화합니다.",
    icon: TrendingDown,
  },
]

const mlTechStack: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Code },
  { name: "TensorFlow / PyTorch", icon: Cpu },
  { name: "Scikit-learn", icon: BarChart2 },
  { name: "MLflow / DVC", icon: RefreshCw },
  { name: "Docker / Kubernetes", icon: Layers },
  { name: "AWS SageMaker", icon: Cloud },
  { name: "NVIDIA CUDA", icon: Zap },
  { name: "Git / GitHub", icon: GitBranch },
]

const mlProcessSteps: AiProcessStep[] = [
  {
    step: "01",
    title: "현황 분석 및 요구사항 정의",
    description:
      "현재 데이터·시스템·인력 환경을 분석하고 ML 인프라 구축 범위를 정의합니다.",
  },
  {
    step: "02",
    title: "인프라 설계",
    description: "서버·클라우드·네트워크 구성과 ML 개발 환경 설계를 진행합니다.",
  },
  {
    step: "03",
    title: "환경 구축",
    description: "개발·학습·배포 환경을 단계별로 구축하고 기본 파이프라인을 설정합니다.",
  },
  {
    step: "04",
    title: "데이터 관리 체계 구성",
    description: "데이터 수집·저장·라벨링·버전 관리 체계를 구성합니다.",
  },
  {
    step: "05",
    title: "테스트 모델 개발 및 검증",
    description: "구축된 인프라에서 테스트 모델을 개발하고 전체 시스템을 검증합니다.",
  },
  {
    step: "06",
    title: "운영 안정화 및 교육",
    description: "운영 안정화를 지원하고 담당자 교육을 진행합니다.",
  },
]

export function AiPageContent() {
  return (
    <>
      <AiMainHero />

      <AiDetailSection
        id="ai-agent"
        hero={{
          eyebrow: "업무를 대신 수행하는 AI",
          titleEn: "AI Agent Development",
          titleKo: "반복 업무를 자동화하고 실제 업무를 수행하는 맞춤형 AI 에이전트를 구축합니다.",
          imagePath: "agent-hero.jpg",
        }}
        featuresTitle="순한연구소 AI Agent가 특별한 이유"
        featuresSubtitle="단순 챗봇이 아닌, 실제 업무를 처리하는 AI 에이전트를 구축합니다."
        features={agentFeatures}
        techStack={agentTechStack}
        processTitle="AI Agent 개발 프로세스"
        processSubtitle="업무 분석부터 실제 운영까지, 단계별로 함께합니다."
        processSteps={agentProcessSteps}
        infoBox="AI 에이전트 구축을 위해 자동화하고 싶은 업무 목록, 내부 문서·데이터 현황, 연동이 필요한 시스템 목록을 사전에 정리해주시면 더욱 정확한 견적과 빠른 구축이 가능합니다."
        ctaLabel="AI Agent 개발 문의하기"
      />

      <AiDetailSection
        id="ai-pipeline"
        hero={{
          eyebrow: "데이터에서 인사이트까지",
          titleEn: "AI Pipeline Construction",
          titleKo:
            "데이터 수집부터 AI 모델 서빙까지, 안정적인 AI 파이프라인을 구축합니다.",
          imagePath: "pipeline-hero.jpg",
        }}
        featuresTitle="순한연구소 AI 파이프라인이 특별한 이유"
        featuresSubtitle="단발성 개발이 아닌, 지속 운영 가능한 AI 인프라를 설계합니다."
        features={pipelineFeatures}
        techStack={pipelineTechStack}
        processTitle="AI 파이프라인 구축 프로세스"
        processSubtitle="데이터 환경 분석부터 운영까지, 단계별로 함께합니다."
        processSteps={pipelineProcessSteps}
        infoBox="AI 파이프라인 구축을 위해 현재 데이터 수집·저장 현황, 활용하고 싶은 AI 기능, 연동이 필요한 시스템 목록을 사전에 정리해주시면 더욱 정확한 견적이 가능합니다."
        ctaLabel="AI 파이프라인 문의하기"
      />

      <AiDetailSection
        id="ml-infra"
        hero={{
          eyebrow: "AI 도입의 첫 번째 단계",
          titleEn: "Machine Learning Infrastructure",
          titleKo: "AI 모델을 안정적으로 개발·운영할 수 있는 머신러닝 인프라를 구축합니다.",
          imagePath: "ml-hero.jpg",
        }}
        featuresTitle="순한연구소 ML 인프라가 특별한 이유"
        featuresSubtitle="기업 규모와 환경에 맞는 실용적인 ML 인프라를 설계합니다."
        features={mlFeatures}
        techStack={mlTechStack}
        processTitle="ML 인프라 구축 프로세스"
        processSubtitle="현황 분석부터 운영 안정화까지, 단계별로 함께합니다."
        processSteps={mlProcessSteps}
        infoBox="ML 인프라 구축을 위해 현재 서버·클라우드 환경, 보유 데이터 현황, 개발하고 싶은 AI 모델 종류를 사전에 정리해주시면 더욱 정확한 견적이 가능합니다."
        ctaLabel="ML 인프라 문의하기"
      />
    </>
  )
}
