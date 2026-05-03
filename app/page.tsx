import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { SiteFooter } from "@/components/landing/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
