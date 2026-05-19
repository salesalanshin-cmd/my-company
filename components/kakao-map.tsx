"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const KAKAO_APP_KEY = "634395e4d4c7779371d938fdffb5109f"
const SCRIPT_ID = "kakao-map-sdk"

type KakaoMapProps = {
  lat: number
  lng: number
  level?: number
  className?: string
}

function loadKakaoSdk(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Kakao Maps SDK requires a browser environment"))
      return
    }

    const onReady = () => {
      window.kakao.maps.load(() => resolve())
    }

    if (window.kakao?.maps) {
      onReady()
      return
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      if (existing.dataset.loaded === "true") {
        onReady()
        return
      }
      existing.addEventListener("load", onReady, { once: true })
      existing.addEventListener("error", () => reject(new Error("Kakao Maps SDK failed to load")), {
        once: true,
      })
      return
    }

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`
    script.async = true
    script.onload = () => {
      script.dataset.loaded = "true"
      onReady()
    }
    script.onerror = () => reject(new Error("Kakao Maps SDK failed to load"))
    document.head.appendChild(script)
  })
}

export default function KakaoMap({
  lat = 35.835637,
  lng = 128.733042,
  level = 3,
  className,
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("카카오맵 useEffect 실행됨")
    let cancelled = false

    loadKakaoSdk()
      .then(() => {
        if (cancelled || !containerRef.current) return

        const center = new window.kakao.maps.LatLng(lat, lng)
        const map = new window.kakao.maps.Map(containerRef.current, {
          center,
          level,
        })

        const marker = new window.kakao.maps.Marker({ position: center })
        marker.setMap(map)

        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;font-size:12px;">주식회사 순한연구소</div>',
        })
        infowindow.open(map, marker)
      })
      .catch((error) => {
        console.error(error)
      })

    return () => {
      cancelled = true
    }
  }, [lat, lng, level])

  return <div ref={containerRef} className={cn("h-[400px] w-full", className)} />
}
