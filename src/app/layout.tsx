import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollHashHandler } from '@/components/ScrollHashHandler'
import { MotionProvider } from '@/components/MotionProvider'
import { phone } from '@/data/contact'
import { instagram } from '@/data/instagram'
import { JsonLd } from '@/components/JsonLd'
import { BUSINESS_ID, PERSON_ID, SITE_URL, WEBSITE_ID } from '@/lib/seo'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const title = 'HK Creative Web | Web Developer & Website Design, Surrey UK'
const description = "I'm Hamza, a freelance web developer in Surrey, UK. I build and redesign business websites and create digital content for clients across the UK and worldwide."

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hkcreativeweb.com'),
  title,
  description,
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
    url: SITE_URL,
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

// Entities on every page share stable @ids. Everything here matches what the site visibly says.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': BUSINESS_ID,
      name: 'HK Creative Web',
      description,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      image: `${SITE_URL}/og-image.png`,
      sameAs: [instagram.profileUrl],
      email: 'hkcreativeweb@gmail.com',
      telephone: phone.tel,
      address: { '@type': 'PostalAddress', addressRegion: 'Surrey', addressCountry: 'GB' },
      areaServed: ['United Kingdom', 'Worldwide'],
      founder: { '@id': PERSON_ID },
      serviceType: ['Web Development', 'Website Design', 'Website Redesign', 'Content Creation', 'Digital Marketing'],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Hamza',
      jobTitle: 'Web Developer',
      url: `${SITE_URL}/our-story`,
      worksFor: { '@id': BUSINESS_ID },
      homeLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressRegion: 'Surrey', addressCountry: 'GB' } },
      knowsAbout: ['Web development', 'Website design', 'Ruby on Rails', 'JavaScript', 'HTML and CSS', 'SQL and PostgreSQL', 'Git and GitHub', 'WordPress', 'Shopify'],
      sameAs: [instagram.profileUrl],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: 'HK Creative Web',
      inLanguage: 'en-GB',
      publisher: { '@id': BUSINESS_ID },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-navy" suppressHydrationWarning>
        <JsonLd data={jsonLd} />
        <ScrollHashHandler />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
