import fs from "node:fs"
import path from "node:path"
import Image from "next/image"

const MARQUEE_TEXT =
  "AI Agent 개발 · Python · Node.js · React · Next.js · LLM 연동 · RAG 시스템 · 자동화 워크플로우 · 우리의 기술력으로 AI 활용을 더 쉽게 · 맞춤형 AI 서비스 구축 · 스마트 업무 자동화 · GPT · Claude · Gemini 연동 · AI로 비즈니스 경쟁력을 높이세요 ·"

const TECH_IMAGES = ["tech1.jpg", "tech2.jpg", "tech3.jpg"] as const

const textClassName =
  "shrink-0 whitespace-nowrap px-10 text-3xl font-bold leading-none text-white"

function publicFileUrl(...parts: string[]): string | null {
  const filePath = path.join(process.cwd(), "public", ...parts)
  return fs.existsSync(filePath) ? `/${parts.join("/")}` : null
}

function TechImageCell({ src, alt }: { src: string | null; alt: string }) {
  return (
    <div className="relative min-h-0 min-w-0 overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[#0a1f3c]" aria-hidden />
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.55)]"
        aria-hidden
      />
    </div>
  )
}

export function TechBannerSection() {
  const imageUrls = TECH_IMAGES.map((file) => publicFileUrl("images", file))

  return (
    <section
      className="tech-banner-section relative isolate mb-0 box-border grid h-[500px] max-h-[500px] min-h-[500px] grid-cols-3 gap-0 overflow-hidden border-t border-b-0 bg-[#0a1f3c] p-0 pb-0 leading-none"
      style={{ marginBottom: 0, paddingBottom: 0 }}
    >
      {imageUrls.map((src, index) => (
        <TechImageCell
          key={TECH_IMAGES[index]}
          src={src}
          alt={`순한연구소 기술 ${index + 1}`}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden"
        aria-label="기술 역량 소개"
      >
        <div className="tech-marquee-track flex w-max items-center">
          <span className={textClassName}>{MARQUEE_TEXT}</span>
          <span className={textClassName} aria-hidden>
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>

      <style>{`
        .tech-banner-section {
          margin-bottom: 0;
          padding-bottom: 0;
          overflow: hidden;
        }
        .tech-banner-section > span,
        .tech-banner-section img {
          display: block;
        }
        .tech-banner-section [data-nimg="fill"] {
          position: absolute !important;
          inset: 0 !important;
          height: 100% !important;
          width: 100% !important;
        }
        @keyframes tech-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .tech-marquee-track {
          animation: tech-marquee-scroll 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
