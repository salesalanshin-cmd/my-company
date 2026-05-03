import {
  Bot,
  Factory,
  Globe2,
  Layers3,
  Lightbulb,
  LineChart,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: Lightbulb,
    title: "창업 지원",
    body: "사업 구조 설계부터 지원사업 매칭, 사업계획·실행까지 단계별로 동행합니다.",
  },
  {
    icon: LineChart,
    title: "정부지원사업 · R&D",
    body: "과제 기획, 제안·신청, 수행 관리, 정산까지 행정·기술 문서를 일관되게 관리합니다.",
  },
  {
    icon: Globe2,
    title: "수출입 컨설팅",
    body: "시장 조사, 규제·물류, 거래 구조까지 실무 관점에서 실행 가능한 로드맵을 제시합니다.",
  },
  {
    icon: Layers3,
    title: "보육형 매니징",
    body: "단순 컨설팅이 아니라 기획·실무·수행·사후정산을 대행하며 내부 인력처럼 책임집니다.",
  },
  {
    icon: Factory,
    title: "제조 AX · 데이터",
    body: "현장 데이터 자동 수집, 공정 가시화, 스마트팩토리 도입을 위한 AX·데이터 전략을 준비합니다.",
  },
  {
    icon: Bot,
    title: "AI · 비전 · 에이전트",
    body: "제조·업무 데이터를 다각도로 연결해 업무 보조와 지능형 공장 에이전트 구현을 지향합니다.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t bg-[#f8fafc] pt-10 pb-20 sm:pt-12 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            서비스 · 역량
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-base">
            소규모 기업에 산재한 데이터는 정리되지 않으면 AI 도입 효과도 제한적입니다.
            순한연구소는 제조 데이터뿐 아니라 사람·업무 데이터까지 포괄해 완성도 높은
            디지털 전환 기반을 함께 만듭니다.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="border border-slate-200/80 bg-white shadow-md ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >
              <CardHeader className="gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#0c2348] text-white shadow-sm">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">
                  {body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
