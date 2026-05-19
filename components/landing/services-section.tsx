import {
  Bot,
  Cog,
  Factory,
  Globe2,
  Lightbulb,
  LineChart,
  Smartphone,
  Users,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: Users,
    title: "직원화 서비스",
    body: "(주)순한연구소를 고객사 직원처럼 활용하는 월 구독형 서비스",
  },
  {
    icon: Lightbulb,
    title: "창업 지원",
    body: "예비·초기창업자, 소상공인, 중소기업 대표님을 위한 창업패키지",
  },
  {
    icon: LineChart,
    title: "정부지원사업 · R&D",
    body: "매년 35조원 규모 정부지원사업 기획~정산 전 과정 지원",
  },
  {
    icon: Globe2,
    title: "수출입 컨설팅",
    body: "10년 이상 해외영업 경험, 30여 개국 바이어 발굴·무역실무",
  },
  {
    icon: Factory,
    title: "제조 AX",
    body: "스마트공장, 제조 데이터 수집·가시화, 공정 자동화",
  },
  {
    icon: Smartphone,
    title: "앱 및 홈페이지 개발",
    body: "기업 맞춤형 모바일 앱·웹사이트 기획~개발~운영",
  },
  {
    icon: Cog,
    title: "자동화 시스템 개발",
    body: "정부지원사업 기반 로봇 자동화 시스템 개발 및 도입",
  },
  {
    icon: Bot,
    title: "AI 비전 에이전트",
    body: "AI 머신러닝 불량검출, 지능형 에이전트 구현",
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
          <p className="text-sm font-bold tracking-widest text-[#0066cc] uppercase">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            서비스 · 역량
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-base">
            소규모 기업에 산재한 데이터는 정리되지 않으면 AI 도입 효과도 제한적입니다.
            순한연구소는 제조 데이터뿐 아니라 사람·업무 데이터까지 포괄해 완성도 높은
            디지털 전환 기반을 함께 만듭니다.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
