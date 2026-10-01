import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '404 | HK Creative',
  description: 'This page could not be found.',
  robots: { index: false },
  alternates: { canonical: null },
  openGraph: { title: '404 | HK Creative', description: 'This page could not be found.'},
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <p className="text-sm font-semibold text-teal-dark tracking-widest">404</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-navy tracking-tight">Looks like this page took a wrong turn.</h1>
          <Link href="/" className="mt-8 inline-flex items-center h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200">
            Back to HK Creative →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
