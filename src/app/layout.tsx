import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Affordable Web Design for Local Businesses | HK Creative Web',
  description: 'Affordable websites, AI content & social media services for local businesses.',
  openGraph: {
    title: 'Affordable Web Design for Local Businesses | HK Creative Web',
    description: 'Affordable websites, AI content & social media services for local businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>{children}</body>
    </html>
  )
}
