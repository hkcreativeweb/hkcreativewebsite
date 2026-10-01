import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Quality } from '@/components/sections/Quality'
import { AffordableSection } from '@/components/sections/AffordableSection'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex-1 bg-cream">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <Quality />
      <AffordableSection />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
