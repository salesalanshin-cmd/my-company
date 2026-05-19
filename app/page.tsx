import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { CompetitiveSection } from "@/components/landing/competitive-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { LocationSection } from "@/components/landing/location-section"
import { TechBannerSection } from "@/components/landing/tech-banner-section"
import { ContactSection } from "@/components/landing/contact-section"
import { SiteFooter } from "@/components/landing/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <CompetitiveSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <LocationSection />
        <TechBannerSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
