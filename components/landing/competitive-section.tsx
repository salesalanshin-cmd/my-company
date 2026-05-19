import fs from "node:fs"
import path from "node:path"
import Image from "next/image"

import { cn } from "@/lib/utils"

type CompetitiveCard = {
  number: string
  image: string
  titleEn: string
  titleKo: string
  description: string
  checklist: readonly string[]
  whyUs: string
}

type ProcessStep = {
  step: string
  labelEn: string
  image: string
  title: string
  subtitle: string
  items: readonly string[]
  imageOnLeft: boolean
}

const competitiveCards: CompetitiveCard[] = [
  {
    number: "01",
    image: "competitive1.jpg",
    titleEn: "Growth Discovery System",
    titleKo: "기업 맞춤형 성장 과제 발굴 및 실행 지원",
    description:
      "기업 현황, 업종, 기술 수준, 사업 방향을 분석하여 적합한 정부지원사업과 성장 전략을 능동적으로 발굴하고 신청부터 수행까지 함께합니다.",
    checklist: [
      "기업 맞춤 과제 발굴",
      "정부지원사업 매칭",
      "사업계획서 기획 및 작성",
      "수행 및 사후관리 지원",
    ],
    whyUs: "다양한 제조업 및 정부지원사업 수행 경험 기반",
  },
  {
    number: "02",
    image: "competitive2.jpg",
    titleEn: "Custom AI Agent Technology",
    titleKo: "기업 맞춤형 AI 에이전트 구축 기술",
    description:
      "기업별 업무 프로세스와 데이터를 분석하여 실제 업무를 자동 수행할 수 있는 AI 에이전트를 구축합니다.",
    checklist: [
      "업무 프로세스 분석",
      "문서·ERP·MES 연동",
      "반복 업무 자동화",
      "지속 학습 기반 구조",
    ],
    whyUs: "제조 현장과 업무 환경을 이해한 실전형 AI 구축 경험",
  },
  {
    number: "03",
    image: "competitive3.jpg",
    titleEn: "Smart Data & Learning Platform",
    titleKo: "데이터 자동화 및 AI 학습 플랫폼 구축",
    description:
      "분산된 데이터를 자동 수집·관리하고 AI 활용을 위한 데이터 환경을 구축합니다.",
    checklist: [
      "OCR 기반 문서 인식",
      "데이터 자동 수집",
      "AI 학습 데이터 구축",
      "통합 데이터 관리",
    ],
    whyUs: "현장 데이터 기반 디지털 전환 프로젝트 경험",
  },
  {
    number: "04",
    image: "competitive4.jpg",
    titleEn: "Industrial DX Solutions",
    titleKo: "산업 맞춤형 DX 솔루션 구축",
    description:
      "생산 현장과 산업 환경에 최적화된 AI 및 디지털 솔루션을 제공합니다.",
    checklist: [
      "AI 비전 기술",
      "공정 데이터 분석",
      "품질 및 생산성 향상",
      "산업별 맞춤 시스템",
    ],
    whyUs: "제조업 및 공정 중심의 현장 경험 보유",
  },
]

const processSteps: ProcessStep[] = [
  {
    step: "01",
    labelEn: "Discover",
    image: "process1.jpg",
    title: "기업 진단 및 성장 기회 발굴",
    subtitle:
      "기업의 업무 환경, 기술 수준, 데이터 활용도 및 성장 방향을 분석하여 AI·DX 도입이 필요한 영역과 성장 가능성을 도출합니다.",
    items: [
      "업무 프로세스 분석",
      "기술 및 운영 환경 진단",
      "성장 기회 및 개선 영역 발굴",
      "기업 맞춤형 전략 수립",
    ],
    imageOnLeft: true,
  },
  {
    step: "02",
    labelEn: "Design",
    image: "process2.jpg",
    title: "AI·DX 및 성장 전략 설계",
    subtitle:
      "기업에 적합한 AI 활용 방식과 디지털 전환 구조를 설계하며, 필요 시 정부지원사업과 기술개발 과제를 성장 수단으로 연계합니다.",
    items: [
      "AI·DX 로드맵 설계",
      "맞춤형 AI 에이전트 기획",
      "정부지원사업 연계 전략",
      "기술개발 및 사업화 방향 설정",
    ],
    imageOnLeft: false,
  },
  {
    step: "03",
    labelEn: "Execute & Scale",
    image: "process3.jpg",
    title: "구축·실행 및 지속 성장 지원",
    subtitle:
      "기획 단계에서 끝나는 것이 아니라 실제 구축, 운영, 고도화 및 성장 지원까지 함께합니다.",
    items: [
      "AI 및 데이터 시스템 구축",
      "과제 수행 및 운영 지원",
      "성과 관리 및 고도화",
      "장기 성장 및 확장 지원",
    ],
    imageOnLeft: true,
  },
]

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex gap-2 text-sm leading-relaxed text-white/95">
      <span className="shrink-0 text-[#4da3ff]" aria-hidden>
        ✔
      </span>
      {children}
    </li>
  )
}

function CompetitiveCardItem({ card }: { card: CompetitiveCard }) {
  const imageSrc = publicFileUrl("images", card.image)

  return (
    <article className="group relative h-[450px] overflow-hidden rounded-xl">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="25vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#143d8a]"
            aria-hidden
          />
        )}
      </div>

      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.75)] transition-colors duration-500 group-hover:bg-[rgba(0,0,0,0.45)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="text-4xl font-bold text-[#4da3ff]">{card.number}</p>
          <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
            {card.titleEn}
          </h3>
          <p className="mt-2 text-sm font-medium text-white/90">{card.titleKo}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75 transition-opacity duration-500 group-hover:opacity-0">
            {card.description}
          </p>
        </div>

        <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ul className="space-y-2">
            {card.checklist.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
          <p className="mt-4 border-t border-white/20 pt-4 text-xs leading-relaxed text-white/85 sm:text-sm">
            <span className="font-semibold text-white">OUR SOLUTIONS : </span>
            {card.whyUs}
          </p>
        </div>
      </div>
    </article>
  )
}

function ProcessImageHalf({ src, alt }: { src: string | null; alt: string }) {
  return (
    <div className="relative h-[450px] w-full shrink-0 overflow-hidden md:w-1/2">
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="50vw" />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a1f3c] via-[#143d8a] to-[#0066cc]"
          aria-hidden
        />
      )}
    </div>
  )
}

function ProcessTextHalf({ step }: { step: ProcessStep }) {
  return (
    <div className="flex h-[450px] w-full shrink-0 flex-col justify-center bg-gradient-to-br from-[#060d1a] via-[#0a1f3c] to-[#0c2348] px-8 py-12 text-white sm:px-12 lg:px-16 md:w-1/2">
      <p className="text-sm font-semibold tracking-widest text-[#4da3ff]">
        STEP {step.step} — {step.labelEn}
      </p>
      <h4 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {step.title}
      </h4>
      <p className="mt-4 text-base leading-relaxed text-[#7eb8ff] sm:text-lg">
        {step.subtitle}
      </p>
      <ul className="mt-8 space-y-3">
        {step.items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-relaxed text-white/90 sm:text-base"
          >
            <span className="shrink-0 font-semibold text-[#4da3ff]" aria-hidden>
              ✔
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProcessStepRow({ step }: { step: ProcessStep }) {
  const imageSrc = publicFileUrl("images", step.image)

  return (
    <div className="flex w-full flex-col md:flex-row">
      {step.imageOnLeft ? (
        <>
          <ProcessImageHalf src={imageSrc} alt={step.title} />
          <ProcessTextHalf step={step} />
        </>
      ) : (
        <>
          <ProcessTextHalf step={step} />
          <ProcessImageHalf src={imageSrc} alt={step.title} />
        </>
      )}
    </div>
  )
}

const HEX_RADIUS = 28
const HEX_WIDTH = HEX_RADIUS * Math.sqrt(3)
const HEX_HEIGHT = HEX_RADIUS * 2

function hexagonPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(" ")
}

function buildHoneycombHexagons(cols: number, rows: number) {
  const hexes: { cx: number; cy: number; delay: number }[] = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const offsetX = row % 2 === 1 ? HEX_WIDTH / 2 : 0
      hexes.push({
        cx: col * HEX_WIDTH + offsetX + HEX_RADIUS + 20,
        cy: row * (HEX_HEIGHT * 0.75) + HEX_RADIUS + 20,
        delay: (row * cols + col) % 6,
      })
    }
  }
  return hexes
}

const honeycombHexes = buildHoneycombHexagons(14, 8)

function HexagonBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-20"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 900 500"
        preserveAspectRatio="xMidYMid slice"
      >
        {honeycombHexes.map((hex) => (
          <polygon
            key={`${hex.cx}-${hex.cy}`}
            points={hexagonPoints(hex.cx, hex.cy, HEX_RADIUS)}
            fill="none"
            stroke="white"
            strokeWidth="1"
            className={`competitive-hex-pulse competitive-hex-delay-${hex.delay}`}
          />
        ))}
      </svg>
    </div>
  )
}

function ClosingBanner() {
  return (
    <div className="group relative overflow-hidden bg-white py-32">
      <div
        className="absolute inset-0 z-0 bg-[#0a1f3c] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
        aria-hidden
      />
      <HexagonBackground />
      <div className="relative z-10 mx-auto max-w-4xl space-y-2 px-6 text-center">
        <p className="text-2xl leading-relaxed font-bold text-[#222] transition-colors duration-700 ease-in-out group-hover:text-white md:text-3xl">
          순한연구소는 단순히 AI를 도입하지 않습니다.
        </p>
        <p className="text-2xl leading-relaxed font-bold text-[#222] transition-colors duration-700 ease-in-out group-hover:text-white md:text-3xl">
          기업이 성장할 수 있는 구조를 설계하고,
        </p>
        <p className="text-2xl leading-relaxed font-bold text-[#222] transition-colors duration-700 ease-in-out group-hover:text-white md:text-3xl">
          필요한 재원과 실행까지 함께합니다.
        </p>
      </div>
      <div
        className="competitive-curtain-left absolute inset-y-0 left-0 z-20 h-full w-1/2 transition-transform duration-700 ease-in-out group-hover:-translate-x-full"
        aria-hidden
      />
      <div
        className="competitive-curtain-right absolute inset-y-0 right-0 z-20 h-full w-1/2 transition-transform duration-700 ease-in-out group-hover:translate-x-full"
        aria-hidden
      />
      <style>{`
        .competitive-curtain-left {
          background-color: #e2e8f0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(15, 23, 42, 0.06) 10px,
            rgba(15, 23, 42, 0.06) 20px
          );
        }
        .competitive-curtain-right {
          background-color: #e2e8f0;
          background-image: radial-gradient(
            circle,
            rgba(15, 23, 42, 0.1) 1px,
            transparent 1px
          );
          background-size: 14px 14px;
        }
        @keyframes competitive-hex-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .competitive-hex-pulse {
          animation: competitive-hex-pulse 4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .competitive-hex-delay-0 {
          animation-delay: 0s;
        }
        .competitive-hex-delay-1 {
          animation-delay: 0.6s;
        }
        .competitive-hex-delay-2 {
          animation-delay: 1.2s;
        }
        .competitive-hex-delay-3 {
          animation-delay: 1.8s;
        }
        .competitive-hex-delay-4 {
          animation-delay: 2.4s;
        }
        .competitive-hex-delay-5 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
}

export function CompetitiveSection() {
  return (
    <section id="competitive" className="border-t">
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto mb-4 max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#0066cc] uppercase">
              WHY SOONAN LABS
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              왜 순한연구소인가
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-base">
              단순 컨설팅을 넘어 실행까지 책임지는 파트너
            </p>
          </div>
        </div>

        <div className="mx-16 grid w-full grid-cols-2 gap-2 px-16 lg:grid-cols-4">
          {competitiveCards.map((card) => (
            <CompetitiveCardItem key={card.number} card={card} />
          ))}
        </div>
      </div>

      <div className="mt-24 w-full">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#0066cc] uppercase">
            OUR PROCESS
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            업무 프로세스
          </h3>
        </div>

        <div className="mt-14 w-full space-y-0">
          {processSteps.map((step) => (
            <ProcessStepRow key={step.step} step={step} />
          ))}
        </div>
      </div>

      <ClosingBanner />
    </section>
  )
}
