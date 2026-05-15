"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const heroButtonClass =
  "border-white bg-transparent text-white hover:bg-white/10 hover:text-white"

const heroTextShadow =
  "[text-shadow:0_2px_12px_rgba(0,0,0,0.45),0_4px_32px_rgba(0,0,0,0.35)]"

const SLIDE_INTERVAL_MS = 4000
const FADE_DURATION_MS = 1200

function HeroImageSlider() {
  const slides = siteConfig.heroImages
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [slides.length])

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity ease-in-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        aria-hidden
      />
      <div
        className="pointer-events-auto absolute inset-x-0 bottom-8 z-[1] flex justify-center gap-2"
        role="tablist"
        aria-label="히어로 슬라이드"
      >
        {slides.map((src, i) => (
          <span
            key={src}
            role="tab"
            aria-selected={i === index}
            aria-label={`슬라이드 ${i + 1}`}
            className={cn(
              "size-2.5 rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  const { heroVideoSrc, heroYoutubeId } = siteConfig
  const hasVideo = Boolean(heroVideoSrc)
  const hasYoutube = Boolean(heroYoutubeId)
  const hasMedia = hasVideo || hasYoutube

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {hasYoutube && (
          <iframe
            title="소개 영상"
            src={`https://www.youtube.com/embed/${heroYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${heroYoutubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute left-1/2 top-1/2 h-[120%] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          />
        )}
        {hasVideo && !hasYoutube && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        )}
        {!hasMedia && <HeroImageSlider />}
        {hasMedia ? (
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/55 via-[#0a1f3c]/75 to-[#0c2650]/90"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28">
        <div className="flex w-full max-w-4xl flex-col items-center gap-6 sm:gap-8">
          <div
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full border border-white/25",
              "bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md",
              heroTextShadow
            )}
          >
            <span
              className="size-2.5 shrink-0 rounded-full bg-gradient-to-br from-[#4dabf7] to-[#0066cc] shadow-[0_0_8px_rgba(0,102,204,0.6)]"
              aria-hidden
            />
            <span className="font-medium tracking-wide">
              <span className="bg-gradient-to-r from-[#7ec8ff] via-[#3b9eff] to-[#0066cc] bg-clip-text font-semibold text-transparent">
                AI+
              </span>
              <span className="text-white/95"> Powered Consulting</span>
            </span>
          </div>

          <div className={cn("w-full space-y-1 sm:space-y-2", heroTextShadow)}>
            <p className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
              Beyond Consulting.
            </p>
            <p className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              We Execute.
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              We Deliver.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <h1
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl",
              heroTextShadow
            )}
          >
            기획부터 실무·수행·사후정산까지,
            <br className="hidden sm:block" />
            {siteConfig.name}가 함께합니다
          </h1>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed text-white/90 sm:text-lg",
              heroTextShadow
            )}
          >
            창업 지원, 정부지원사업 및 R&amp;D, 수출입 컨설팅을 넘어 단순 자문이 아닌 실행 파트너로
            남습니다. 제조 데이터·AX·AI 비전으로 스마트팩토리와 지능형 공장 에이전트를 향한
            로드맵도 함께 그립니다.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="outline" className={heroButtonClass} asChild>
            <Link href="#contact">프로젝트 문의</Link>
          </Button>
          <Button size="lg" variant="outline" className={heroButtonClass} asChild>
            <Link href="/services">서비스 살펴보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
