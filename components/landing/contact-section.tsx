"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const fieldFocus =
  "focus-visible:border-blue-500 focus-visible:ring-3 focus-visible:ring-blue-500/35"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const company = String(data.get("company") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`[${siteConfig.shortName} 문의] ${company || name}`)
    const body = encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n회사: ${company}\n\n문의 내용:\n${message}`
    )
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="border-t bg-gradient-to-b from-[#060d1a] via-[#0a1a32] to-[#0c2348] py-24 text-white sm:py-32 lg:py-36"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24">
        <div className="flex flex-col justify-center lg:min-h-0">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            문의
          </h2>
          <p className="mt-3 max-w-md text-white/75 sm:text-base">
            프로젝트 범위·일정을 알려 주시면 검토 후 연락드립니다. 민감 정보는 이메일 본문에
            최소한으로 적어 주세요.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div className="flex gap-4">
              <Mail
                className="mt-0.5 size-5 shrink-0 text-sky-400"
                aria-hidden
              />
              <div>
                <dt className="font-medium text-white">이메일</dt>
                <dd className="mt-1 text-white/75">
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={`mailto:${siteConfig.contact.email}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone
                className="mt-0.5 size-5 shrink-0 text-sky-400"
                aria-hidden
              />
              <div>
                <dt className="font-medium text-white">전화</dt>
                <dd className="mt-1 text-white/75">{siteConfig.contact.phone}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-sky-400"
                aria-hidden
              />
              <div>
                <dt className="font-medium text-white">주소</dt>
                <dd className="mt-1 text-white/75">{siteConfig.contact.address}</dd>
              </div>
            </div>
          </dl>
        </div>
        <Card className="border border-slate-200/90 bg-white shadow-xl ring-0">
          <CardHeader>
            <CardTitle className="text-base text-foreground">상담 요청 폼</CardTitle>
            <CardDescription>
              제출 시 기본 메일 앱이 열립니다. 메일이 열리지 않으면 왼쪽 이메일로 직접 보내 주세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="홍길동"
                  autoComplete="name"
                  className={cn(fieldFocus)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  autoComplete="email"
                  className={cn(fieldFocus)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">회사 / 기관</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="주식회사 ○○"
                  className={cn(fieldFocus)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">문의 내용</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="희망 서비스, 일정, 예산 범위 등을 적어 주세요."
                  className={cn(fieldFocus)}
                />
              </div>
              <Button
                type="submit"
                className="h-10 w-full border-0 bg-blue-600 text-white hover:bg-blue-700"
              >
                메일로 보내기
              </Button>
              {sent ? (
                <p className="text-xs text-muted-foreground" role="status">
                  메일 작성 화면이 열렸다면 내용을 확인 후 전송해 주세요.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
