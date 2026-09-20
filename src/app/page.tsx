import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Portfolio } from '@/components/sections/Portfolio'
import { Services } from '@/components/sections/Services'
import { AffordableSection } from '@/components/sections/AffordableSection'
import { About } from '@/components/sections/About'
import { TestimonialsBanner } from '@/components/sections/TestimonialsBanner'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex-1 bg-cream">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <AffordableSection />
      <About />
      <TestimonialsBanner />
      <Contact />
      <Footer />
    </main>
  )
}
