"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
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

const EMAILJS_SERVICE_ID = "service_l38ouh3"
const EMAILJS_TEMPLATE_ID = "template_boda7zp"
const EMAILJS_PUBLIC_KEY = "fXBzjjk7ONC8JvH1t"

type FormStatus = "idle" | "sending" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const company = String(data.get("company") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    setStatus("sending")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          company,
          message,
          title: "[순한연구소 상담문의]",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  const isSending = status === "sending"

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
            상담 문의는 아래 연락처 중 편한 곳으로 연락주시면, 검토 후 답변드리겠습니다.
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
              폼을 작성해 주시면 검토 후 연락드립니다.
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
                  disabled={isSending}
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
                  disabled={isSending}
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
                  disabled={isSending}
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
                  disabled={isSending}
                  rows={5}
                  placeholder="희망 서비스, 일정, 예산 범위 등을 적어 주세요."
                  className={cn(fieldFocus)}
                />
              </div>
              <Button
                type="submit"
                disabled={isSending}
                className="h-10 w-full border-0 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {isSending ? "전송 중..." : "문의 보내기"}
              </Button>
              {status === "success" ? (
                <p className="text-sm text-green-600" role="status">
                  문의가 접수되었습니다. 검토 후 연락드리겠습니다.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-600" role="alert">
                  전송 중 오류가 발생했습니다. 직접 연락 부탁드립니다.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
