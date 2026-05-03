import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { FreeWebsiteSection } from '@/components/sections/FreeWebsiteSection'
import { About } from '@/components/sections/About'
import { WorkCarousel } from '@/components/sections/WorkCarousel'
import { TestimonialsBanner } from '@/components/sections/TestimonialsBanner'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex-1 bg-black">
      <Navbar />
      <Hero />
      <FreeWebsiteSection />
      <About />
      <WorkCarousel />
      <TestimonialsBanner />
      <Contact />
      <Footer />
    </main>
  )
}
