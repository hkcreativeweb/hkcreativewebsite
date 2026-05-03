import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'

const FreeWebsiteSection = dynamic(() => import('@/components/sections/FreeWebsiteSection').then(m => ({ default: m.FreeWebsiteSection })))
const About             = dynamic(() => import('@/components/sections/About').then(m => ({ default: m.About })))
const WorkCarousel      = dynamic(() => import('@/components/sections/WorkCarousel').then(m => ({ default: m.WorkCarousel })))
const TestimonialsBanner = dynamic(() => import('@/components/sections/TestimonialsBanner').then(m => ({ default: m.TestimonialsBanner })))
const Contact           = dynamic(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })))
const Footer            = dynamic(() => import('@/components/Footer').then(m => ({ default: m.Footer })))

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
