import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { BUSINESS_ID, SITE_URL, breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

const title = 'Web Development & Website Design Services | HK Creative Web'
const description = 'New websites, redesigns, online shops, digital content and marketing, from a Surrey-based web developer working with UK and international businesses.'

export const metadata: Metadata = pageMetadata({ title, description, path: '/services' })

type Related = { label: string; href: string }

// Only services HK Creative genuinely offers. Examples link to real projects on this site.
const services: { n: string; name: string; text: string[]; related: Related[] }[] = [
  {
    n: '01',
    name: 'Website design and development',
    text: [
      'New business websites and landing pages, designed around what your business does and built to work properly on phones, tablets and desktops.',
      'I build with modern tools such as Next.js and React, and I also work with WordPress and Shopify when they are the better fit for the project.',
    ],
    related: [
      { label: 'Renovation Resolution', href: '/work/renovation-resolution' },
      { label: 'Fuel Crisis England', href: '/work/fuel-crisis-england' },
    ],
  },
  {
    n: '02',
    name: 'Website redesigns',
    text: [
      'If your website looks dated, is awkward to use on a phone, or no longer reflects your business, I can redesign it: the layout and design, the mobile experience and how quickly it loads.',
      'I will tell you what is worth keeping and what is not, so you only pay for changes that make a difference.',
    ],
    related: [{ label: 'See my work', href: '/portfolio' }],
  },
  {
    n: '03',
    name: 'Online shops and ordering',
    text: [
      'Online shops, ordering pages and quote request forms for businesses that sell products or take bookings, using Shopify or a custom build depending on what you need.',
    ],
    related: [
      { label: 'Sterling Transfers', href: '/work/sterling-transfers' },
      { label: 'Hot Food House (demo)', href: '/work/hot-food-house' },
    ],
  },
  {
    n: '04',
    name: 'Digital content',
    text: [
      'Short-form social video, social content and graphics, and campaign assets that give your business something worth sharing.',
    ],
    related: [{ label: 'Local restaurant TikToks', href: '/work/local-restaurant-tiktoks' }],
  },
  {
    n: '05',
    name: 'Digital marketing',
    text: [
      'Practical help getting found online: social media support, content-led campaigns, website optimisation and simple automation such as automated replies.',
    ],
    related: [{ label: 'How pricing works', href: '/pricing' }],
  },
  {
    n: '06',
    name: 'Support after launch',
    text: [
      'A website needs looking after once it is live. Ongoing maintenance and support can be arranged after launch, depending on your project and what you need.',
    ],
    related: [{ label: 'Ask about support', href: '/#contact' }],
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': services.map((s) => ({
    '@type': 'Service',
    name: s.name,
    description: s.text.join(' '),
    url: `${SITE_URL}/services#service-${s.n}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: ['United Kingdom', 'Worldwide'],
  })),
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <JsonLd data={serviceJsonLd} />
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">Services</p>
            <h1 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">
              Web development, website design and digital content.
            </h1>
            <p className="mt-6 text-slate leading-relaxed max-w-2xl">
              I&apos;m Hamza, a web developer based in Surrey, UK. I work directly with small businesses and individuals across the UK and internationally, and I do the work myself, from the first conversation to launch.
            </p>
          </header>

          <div className="border-t border-navy">
            {services.map((s) => (
              <section key={s.n} aria-labelledby={`service-${s.n}-name`} id={`service-${s.n}`} className="scroll-mt-28 grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-b border-hairline">
                <p className="md:col-span-1 text-sm font-semibold text-slate tabular-nums">{s.n}</p>
                <h2 id={`service-${s.n}-name`} className="md:col-span-4 text-xl font-bold text-navy tracking-tight">{s.name}</h2>
                <div className="md:col-span-7 text-slate leading-relaxed space-y-3 max-w-2xl">
                  {s.text.map((t) => <p key={t}>{t}</p>)}
                  <p className="text-sm pt-1">
                    {s.related.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && <span aria-hidden="true" className="mx-2 text-hairline">|</span>}
                        <Link href={r.href} className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark transition-colors duration-200">
                          {r.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <section aria-labelledby="how-heading" className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 id="how-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">How it works</h2>
            </div>
            <div className="lg:col-span-7 text-slate leading-relaxed space-y-4 max-w-2xl">
              <p>
                It starts with a short consultation, where we talk through your business, your current website and what you need. I then put together a clear quote, so you know what you are getting before anything begins.
              </p>
              <p>
                From there I design, build and test the website, and launch it once you are happy. You can read more about how I work on the <Link href="/about" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">about page</Link>, or see how quotes work on the <Link href="/pricing" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">pricing page</Link>.
              </p>
              <p>
                I&apos;m based in Surrey, UK, and I work with clients across the UK and internationally. Projects are managed remotely, so I can work with you wherever you are.
              </p>
            </div>
          </section>

          <section aria-labelledby="services-cta" className="mt-16 border-t border-hairline pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 id="services-cta" className="text-xl md:text-2xl font-bold text-navy tracking-tight">Not sure which of these you need?</h2>
              <p className="mt-2 text-slate max-w-xl">Tell me about your business and I will explain what I would do and what it would involve.</p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200 shrink-0"
            >
              Book a Consultation <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
