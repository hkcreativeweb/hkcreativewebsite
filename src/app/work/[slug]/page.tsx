import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { allProjects, getProject } from '@/data/projects'
import { BUSINESS_ID, DEFAULT_OG_IMAGE, PERSON_ID, SITE_URL, breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return pageMetadata({
    title: `${p.title} Case Study | HK Creative Web`,
    description: p.metaDescription ?? p.overview,
    path: `/work/${p.slug}`,
    image: p.image ?? p.gallery?.[0]?.src ?? DEFAULT_OG_IMAGE,
  })
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-t border-hairline">
      <h2 className="md:col-span-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">{title}</h2>
      <div className="md:col-span-9 text-slate leading-relaxed">{children}</div>
    </section>
  )
}

// Where each thing I did is described on the services page
const serviceAnchor: Record<string, string> = {
  'Website design': '/services#service-01',
  'Web development': '/services#service-01',
  'Short-form social video': '/services#service-04',
  'Social content': '/services#service-04',
}

const inlineLink = 'font-semibold text-navy underline underline-offset-4 hover:text-teal-dark transition-colors duration-200'

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  const path = `/work/${p.slug}`
  const image = p.image ?? p.gallery?.[0]?.src ?? DEFAULT_OG_IMAGE
  const others = allProjects.filter((o) => o.slug !== p.slug).slice(0, 3)

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.metaDescription ?? p.overview,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${image}`,
    genre: p.type,
    ...(p.technologies.length > 0 && { keywords: p.technologies.join(', ') }),
    ...(p.url && { sameAs: p.url }),
    creator: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-GB',
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Work', path: '/portfolio' }, { name: p.title, path }])} />
      <JsonLd data={projectJsonLd} />
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy transition-colors duration-200">
            <ArrowLeft size={14} aria-hidden="true" /> All work
          </Link>

          <header className="mt-8 mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-slate">{p.type}</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-navy tracking-tight">{p.title}</h1>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
              >
                Visit Website <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </header>

          {p.image && (
            <div className="overflow-hidden border border-hairline bg-white mb-12">
              <Image
                src={p.image}
                alt={p.alt ?? p.title}
                width={1440}
                height={900}
                sizes="(min-width: 1280px) 1216px, 100vw"
                priority
                style={{ aspectRatio: '16 / 10' }}
                className="w-full object-cover object-top"
              />
            </div>
          )}

          <Block title="Overview"><p className="max-w-2xl">{p.overview}</p></Block>
          {p.challenge && <Block title="The challenge"><p className="max-w-2xl">{p.challenge}</p></Block>}
          {p.built && <Block title="What I built"><p className="max-w-2xl">{p.built}</p></Block>}
          {p.services && (
            <Block title="What I did">
              <p className="max-w-2xl">
                {p.services.map((s, i) => (
                  <span key={s}>
                    {i > 0 && ' · '}
                    {serviceAnchor[s] ? <Link href={serviceAnchor[s]} className={inlineLink}>{s}</Link> : s}
                  </span>
                ))}
                . See all of my <Link href="/services" className={inlineLink}>services</Link>.
              </p>
            </Block>
          )}
          {p.features.length > 0 && (
            <Block title="Key features">
              <ul className="space-y-2 list-disc pl-5 marker:text-teal max-w-2xl">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Block>
          )}
          {p.technologies.length > 0 && <Block title="Technology"><p>{p.technologies.join(' · ')}</p></Block>}

          {p.results && (
            <Block title="Documented results">
              <div className="space-y-8">
                {p.results.map((r) => (
                  <div key={r.name}>
                    <h3 className="text-navy font-bold">{r.name}{r.note && <span className="ml-2 text-sm font-normal text-slate">{r.note}</span>}</h3>
                    <dl className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-px bg-hairline border border-hairline">
                      {r.metrics.map((m) => (
                        <div key={m.label} className="bg-white px-4 py-3">
                          <dt className="text-[11px] uppercase tracking-widest text-slate">{m.label}</dt>
                          <dd className="mt-1 text-xl font-bold text-navy tabular-nums">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
                {p.resultsNote && <p className="text-xs text-slate max-w-xl">{p.resultsNote}</p>}
              </div>
            </Block>
          )}

          {p.gallery && (
            <Block title="Screenshots">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {p.gallery.map((g) => (
                  <div key={g.src} className="relative border border-hairline bg-white overflow-hidden aspect-[9/16]">
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover object-top" />
                  </div>
                ))}
              </div>
            </Block>
          )}

          <section aria-labelledby="cs-cta" className="py-10 border-t border-hairline flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 id="cs-cta" className="text-xl md:text-2xl font-bold text-navy tracking-tight">Want something similar for your business?</h2>
              <p className="mt-2 text-slate max-w-xl">
                Tell me about your business and I will explain what I would build and what it would involve. You can also see <Link href="/pricing" className={inlineLink}>how pricing works</Link>.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200 shrink-0"
            >
              Book a Consultation <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </section>

          <nav aria-label="More of my work" className="pt-8 border-t border-hairline">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-4">More of my work</h2>
            <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/work/${o.slug}`} className="group block py-1">
                    <span className="font-bold text-navy group-hover:text-teal-dark transition-colors duration-200">{o.title}</span>
                    <span className="block text-sm text-slate">{o.type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}
