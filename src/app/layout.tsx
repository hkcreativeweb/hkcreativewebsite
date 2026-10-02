import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollHashHandler } from '@/components/ScrollHashHandler'
import { MotionProvider } from '@/components/MotionProvider'
import { phone } from '@/data/contact'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const title = 'HK Creative Web | Website Design & Digital Creative Studio, UK'
const description = 'HK Creative Web is a UK digital studio: content, websites and digital marketing, built by someone who actually builds them. See our work, including Renovation Resolution.'

export const metadata: Metadata = {
  metadataBase: new URL('https://hkcreativeweb.com'),
  title,
  description,
  keywords: ['web design UK', 'website design agency', 'small business website', 'social media management', 'web development studio', 'digital creative studio', 'technology consultation'],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://hkcreativeweb.com',
    siteName: 'HK Creative Web',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HK Creative Web: websites built for real businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'HK Creative Web',
  description,
  url: 'https://hkcreativeweb.com',
  email: 'hkcreativeweb@gmail.com',
  telephone: phone.tel,
  areaServed: 'United Kingdom',
  serviceType: ['Website Design', 'Web Development', 'Content Creation', 'Social Media Management', 'Digital Marketing', 'Digital Technology Consultation'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-navy" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollHashHandler />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
