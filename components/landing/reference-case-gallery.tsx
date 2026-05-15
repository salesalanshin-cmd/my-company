"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

import type { CaseGalleryData } from "@/lib/reference-case-images"
import { cn } from "@/lib/utils"

type LightboxState = { src: string; alt: string } | null

function Lightbox({ state, onClose }: { state: LightboxState; onClose: () => void }) {
  useEffect(() => {
    if (!state) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [state, onClose])

  if (!state) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={"\uC774\uBBF8\uC9C0 \uC6D0\uBCF8 \uBCF4\uAE30"}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label={"\uB2EB\uAE30"}
      >
        <X className="size-6" />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={state.src}
        alt={state.alt}
        className="max-h-[90vh] max-w-[min(100%,1200px)] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

function GalleryTile({
  src,
  alt,
  className,
  sizes,
  onOpen,
  certCard = false,
}: {
  src: string | null
  alt: string
  className?: string
  sizes?: string
  onOpen: (src: string, alt: string) => void
  certCard?: boolean
}) {
  const placeholderLabel = `${alt} \uC774\uBBF8\uC9C0 \uC900\uBE44 \uC911`
  const placeholderText = "\uC774\uBBF8\uC9C0 \uC900\uBE44 \uC911"

  const content = src ? (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className={cn(
        "group/tile relative block h-full w-full overflow-hidden rounded-lg bg-neutral-100 text-left",
        "cursor-zoom-in transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066cc] focus-visible:ring-offset-2"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={certCard ? "object-contain p-1" : "object-cover"}
        sizes={sizes ?? "33vw"}
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover/tile:bg-black/20">
        <ZoomIn className="size-8 text-white opacity-0 transition-opacity group-hover/tile:opacity-100" />
      </span>
    </button>
  ) : (
    <div
      className="flex h-full min-h-[120px] w-full items-center justify-center rounded-lg bg-neutral-200 text-xs font-medium text-neutral-500 sm:text-sm"
      role="img"
      aria-label={placeholderLabel}
    >
      {placeholderText}
    </div>
  )

  if (certCard) {
    return (
      <div
        className={cn(
          "rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-100",
          className
        )}
      >
        <div className="relative aspect-[4/3] w-full">{content}</div>
      </div>
    )
  }

  return <div className={cn("relative min-h-[120px] w-full", className)}>{content}</div>
}

export function ReferenceCaseGallery({ gallery }: { gallery: CaseGalleryData }) {
  const [lightbox, setLightbox] = useState<LightboxState>(null)
  const open = useCallback((src: string, alt: string) => setLightbox({ src, alt }), [])
  const close = useCallback(() => setLightbox(null), [])

  const { layout, title } = gallery

  if (layout === "case1") {
    const { main, detail1, detail2 } = gallery.images
    return (
      <>
        <div className="grid min-h-[220px] grid-cols-1 gap-3 sm:min-h-[280px] sm:grid-cols-3 md:min-h-[320px]">
          <GalleryTile
            src={main}
            alt={`${title} \uB300\uD45C \uC0AC\uC9C4`}
            className="sm:col-span-2 sm:min-h-[280px] md:min-h-[320px]"
            sizes="(min-width: 640px) 60vw, 100vw"
            onOpen={open}
          />
          <div className="grid grid-rows-2 gap-3 sm:col-span-1">
            <GalleryTile
              src={detail1}
              alt={`${title} \uC0C1\uC138 1`}
              className="min-h-[100px] sm:min-h-0"
              sizes="(min-width: 640px) 25vw, 100vw"
              onOpen={open}
            />
            <GalleryTile
              src={detail2}
              alt={`${title} \uC0C1\uC138 2`}
              className="min-h-[100px] sm:min-h-0"
              sizes="(min-width: 640px) 25vw, 100vw"
              onOpen={open}
            />
          </div>
        </div>
        <Lightbox state={lightbox} onClose={close} />
      </>
    )
  }

  if (layout === "case2" || layout === "case4") {
    const { main, detail1 } = gallery.images
    return (
      <>
        <div className="grid min-h-[200px] grid-cols-1 gap-3 sm:min-h-[260px] sm:grid-cols-2 md:min-h-[300px]">
          <GalleryTile
            src={main}
            alt={`${title} \uC0AC\uC9C4 1`}
            className="min-h-[200px] sm:min-h-[260px]"
            sizes="(min-width: 640px) 45vw, 100vw"
            onOpen={open}
          />
          <GalleryTile
            src={detail1}
            alt={`${title} \uC0AC\uC9C4 2`}
            className="min-h-[200px] sm:min-h-[260px]"
            sizes="(min-width: 640px) 45vw, 100vw"
            onOpen={open}
          />
        </div>
        <Lightbox state={lightbox} onClose={close} />
      </>
    )
  }

  if (layout === "case3") {
    const { main, cert1, cert2, cert3 } = gallery.images
    return (
      <>
        <div className="space-y-4">
          <GalleryTile
            src={main}
            alt={`${title} \uB300\uD45C \uC0AC\uC9C4`}
            className="aspect-[21/9] min-h-[160px] sm:min-h-[200px]"
            sizes="100vw"
            onOpen={open}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <GalleryTile
              src={cert1}
              alt={`${title} \uC778\uC99D\uC11C 1`}
              certCard
              sizes="(min-width: 640px) 30vw, 100vw"
              onOpen={open}
            />
            <GalleryTile
              src={cert2}
              alt={`${title} \uC778\uC99D\uC11C 2`}
              certCard
              sizes="(min-width: 640px) 30vw, 100vw"
              onOpen={open}
            />
            <GalleryTile
              src={cert3}
              alt={`${title} \uC778\uC99D\uC11C 3`}
              certCard
              sizes="(min-width: 640px) 30vw, 100vw"
              onOpen={open}
            />
          </div>
        </div>
        <Lightbox state={lightbox} onClose={close} />
      </>
    )
  }

  if (layout === "case5") {
    const certs = [
      gallery.images.cert1,
      gallery.images.cert2,
      gallery.images.cert3,
      gallery.images.cert4,
      gallery.images.cert5,
      gallery.images.cert6,
    ]
    return (
      <>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {certs.map((src, i) => (
            <GalleryTile
              key={i}
              src={src}
              alt={`${title} \uC778\uC99D\uC11C ${i + 1}`}
              certCard
              sizes="(min-width: 640px) 30vw, 50vw"
              onOpen={open}
            />
          ))}
        </div>
        <Lightbox state={lightbox} onClose={close} />
      </>
    )
  }

  return null
}
