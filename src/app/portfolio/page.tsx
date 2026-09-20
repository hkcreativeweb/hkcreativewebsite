import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Portfolio } from '@/components/sections/Portfolio'
import { Footer } from '@/components/Footer'

const title = 'Portfolio | HK Creative Web'
const description = 'Real projects built by HK Creative Web, including Fuel Crisis England and Renovation Resolution.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/portfolio' },
  openGraph: { title, description, url: '/portfolio', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
