import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HK Creative — Web Design & Development Studio',
  description:
    'HK Creative is a solo web design and development studio building high-end websites, digital design, and creative strategies for ambitious businesses.',
  openGraph: {
    title: 'HK Creative — Web Design & Development Studio',
    description: 'Building brands that live online.',
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
