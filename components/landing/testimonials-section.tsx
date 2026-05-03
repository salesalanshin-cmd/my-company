import { Quote } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    quote:
      "지원사업 서류와 정산까지 한 팀이 이어가 주셔서 내부 인력을 줄이지 않고도 과제를 마무리할 수 있었습니다.",
    name: "김○○",
    role: "제조 스타트업 대표",
    initials: "김",
  },
  {
    quote:
      "컨설팅이 아니라 실제 실행을 같이 해 주신다는 느낌이었습니다. 수출 초기에 리스크를 많이 줄였습니다.",
    name: "이○○",
    role: "무역 중소기업 이사",
    initials: "이",
  },
  {
    quote:
      "R&D 과제 설계 단계부터 현장 데이터 정리 방향까지 한 번에 잡아 주셔서 이후 AX 확장이 수월했습니다.",
    name: "박○○",
    role: "공장장 / 생산본부",
    initials: "박",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-[#060d1a] via-[#0a1a32] to-[#0c2348] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            고객 후기
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            실제 협업 사례를 바탕으로 한 의견입니다. 기업명은 비공개 요청에 따라 표기하지
            않습니다.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <Card
              key={t.name}
              className="flex flex-col border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.14] hover:shadow-xl"
            >
              <div className="px-4 pt-4">
                <p
                  className="text-lg leading-none tracking-wide text-amber-300"
                  aria-label="별점 5점"
                >
                  ⭐⭐⭐⭐⭐
                </p>
              </div>
              <CardContent className="flex flex-1 flex-col gap-4 px-4 pt-4 pb-2">
                <div className="flex gap-3">
                  <Quote
                    className="mt-0.5 size-14 shrink-0 stroke-[1.25] text-white/40"
                    aria-hidden
                  />
                  <p className="text-pretty text-sm font-medium leading-relaxed text-white/95">
                    {t.quote}
                  </p>
                </div>
              </CardContent>
              <div className="mt-auto flex items-center gap-4 border-t border-white/15 px-4 py-4">
                <Avatar className="size-14 border border-white/25 shadow-sm">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-base font-semibold text-white">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium leading-none text-white">{t.name}</p>
                  <p className="mt-1.5 text-sm text-white/65">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
