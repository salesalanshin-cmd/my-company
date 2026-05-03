"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "컨설팅과 보육형 매니징의 차이는 무엇인가요?",
    a: "자문과 제안에 그치지 않고, 기획·문서·수행·정산 등 실무를 함께 하거나 대행하여 마감까지 책임지는 방식입니다. 내부 인력을 채용하기 어려운 구간을 대신 메워 드립니다.",
  },
  {
    q: "어떤 산업·규모와 협업이 가능한가요?",
    a: "창업 초기 팀부터 중소 제조·무역 기업까지 폭넓게 진행해 왔습니다. 과제 성격에 따라 전문 파트너와 협업해 스코프를 구성합니다.",
  },
  {
    q: "정부지원사업·R&D만 단기로 맡길 수 있나요?",
    a: "네. 진단·신청서 작성·중간·최종 보고 등 구간별 계약도 가능합니다. 다만 수행·정산까지 일관되게 맡기시면 리스크와 커뮤니케이션 비용이 줄어드는 경우가 많습니다.",
  },
  {
    q: "제조 AX·AI는 어느 정도 준비되어야 하나요?",
    a: "데이터가 정리되어 있지 않아도 됩니다. 현장 설비·엑셀·MES 등 어디에 무엇이 있는지부터 매핑하고, 수집·거버넌스·PoC 순으로 로드맵을 제안합니다.",
  },
  {
    q: "비용은 어떻게 산정되나요?",
    a: "월 정액 매니징, 과제별 성과급, 하이브리드 등 프로젝트에 맞춰 제안드립니다. 상담 후 견적서를 드립니다.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div>
          <h2 className="border-l-4 border-blue-600 pl-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            자주 묻는 질문
          </h2>
          <p className="mt-3 pl-4 text-muted-foreground sm:text-base">
            더 궁금하신 점은 문의 섹션으로 남겨 주세요.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-10 w-full rounded-xl border border-slate-200 bg-white px-1 shadow-sm"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="group/item border-slate-200 px-2 transition-colors hover:bg-blue-50/80 data-[state=open]:bg-blue-50/50"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={cn(
                    "pb-1 leading-relaxed text-slate-500 transition-colors duration-300 ease-out",
                    "group-data-[state=open]/item:text-slate-600",
                  )}
                >
                  {item.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
