/**
 * 순한연구소 랜딩 페이지 설정
 * — Hero 동영상: `heroVideoSrc`에 MP4 등 직접 URL을 넣거나, `heroYoutubeId`에 유튜브 영상 ID를 넣으면 표시됩니다.
 */
export const siteConfig = {
  name: "주식회사 순한연구소",
  shortName: "순한연구소",
  description:
    "창업·정부지원·R&D·수출입부터 기획·실무·사후정산까지, 보육형 매니징으로 함께하는 컨설팅 파트너입니다.",

  /** 예: "/videos/intro.mp4" 또는 외부 절대 URL */
  heroVideoSrc: "" as string,
  /** 예: "dQw4w9WgXcQ" — 설정 시 배경에 유튜브 임베드(음소거·자동재생은 유튜브 정책에 따름) */
  heroYoutubeId: "" as string,

  /** Hero 슬라이드 이미지 — 경로만 바꾸면 메인 배경이 교체됩니다 */
  heroImages: [
    "/images/hero/slide1.jpg",
    "/images/hero/slide2.jpg",
    "/images/hero/slide3.jpg",
  ],

  contact: {
    email: "info@soonanlabs.com",
    phone: "010-5920-8487",
    address: "경상북도 경산시 경안로 65길 11-1, 주식회사 순한연구소",
  },
} as const
