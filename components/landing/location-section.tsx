"use client"

import { useEffect } from "react"
import { Building2, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

const ADDRESS = "경상북도 경산시 경안로 65길 11-1"
const MAP_LAT = 35.8194
const MAP_LNG = 128.7415

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/경상북도+경산시+경안로+65길+11-1"

const KAKAO_MAP_URL =
  "https://map.kakao.com/link/search/경상북도+경산시+경안로+65길+11-1"

function KakaoMapPanel() {
  useEffect(() => {
    const initMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map")
        if (!container) return

        const options = {
          center: new window.kakao.maps.LatLng(MAP_LAT, MAP_LNG),
          level: 3,
        }
        const map = new window.kakao.maps.Map(container, options)

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(MAP_LAT, MAP_LNG),
        })
        marker.setMap(map)

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:5px;font-size:12px;">주식회사 순한연구소</div>',
        })
        infowindow.open(map, marker)
      })
    }

    if (window.kakao?.maps) {
      initMap()
      return
    }

    const interval = window.setInterval(() => {
      if (window.kakao?.maps) {
        window.clearInterval(interval)
        initMap()
      }
    }, 100)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-slate-200/80">
        <div
          id="kakao-map"
          style={{ width: "100%", height: "400px" }}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-[#03c75a] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:text-base"
        >
          네이버 지도에서 보기
        </a>
        <a
          href={KAKAO_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-[#fee500] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:text-base"
        >
          카카오맵에서 보기
        </a>
      </div>
    </div>
  )
}

type InfoRow = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

const companyInfo: InfoRow[] = [
  { icon: Building2, label: "회사명", value: siteConfig.name },
  { icon: MapPin, label: "주소", value: ADDRESS },
  {
    icon: Phone,
    label: "전화",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: "이메일",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
]

function InfoItem({ icon: Icon, label, value, href }: InfoRow) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-[#0066cc]" aria-hidden />
      <div>
        <dt className="text-sm font-medium text-slate-500">{label}</dt>
        <dd className="mt-1 text-base text-slate-900">
          {href ? (
            <a href={href} className="transition-colors hover:text-[#0066cc]">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  )
}

export function LocationSection() {
  return (
    <section id="location" className="border-t bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            COMPANY LOCATION
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-base">
            주식회사 순한연구소 찾아오시는 길
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <KakaoMapPanel />

          <div className="flex flex-col justify-center rounded-lg bg-white p-8 shadow-md sm:p-10">
            <dl className="space-y-8">
              {companyInfo.map((item) => (
                <InfoItem key={item.label} {...item} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

