import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Portfolio } from '@/components/sections/Portfolio'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

const title = 'Web Design & Development Portfolio | HK Creative Web'
const description = "Websites and digital projects I've built, including Fuel Crisis England, Sterling Transfers and Renovation Resolution, with case studies and technologies used."

export const metadata: Metadata = pageMetadata({ title, description, path: '/portfolio' })

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Work', path: '/portfolio' }])} />
      <Navbar />
      <main className="flex-1 pt-20">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
