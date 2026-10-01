import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { allProjects, getProject } from '@/data/projects'

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  const title = `${p.title} | HK Creative Web`
  const image = p.image ?? p.gallery?.[0]?.src ?? '/og-image.png'
  return {
    title,
    description: p.overview,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.overview, url: `/work/${p.slug}`, type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title, description: p.overview, images: [image] },
  }
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-t border-hairline">
      <h2 className="md:col-span-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">{title}</h2>
      <div className="md:col-span-9 text-slate leading-relaxed">{children}</div>
    </section>
  )
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  return (
    <div className="min-h-screen bg-cream flex flex-col">
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
              </a>
            )}
          </header>

          {p.image && (
            <div className="overflow-hidden border border-hairline bg-white mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.alt ?? p.title} width={1440} height={900} style={{ aspectRatio: '16 / 10' }} className="w-full object-cover object-top" />
            </div>
          )}

          <Block title="Overview"><p className="max-w-2xl">{p.overview}</p></Block>
          {p.challenge && <Block title="The challenge"><p className="max-w-2xl">{p.challenge}</p></Block>}
          {p.built && <Block title="What I built"><p className="max-w-2xl">{p.built}</p></Block>}
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
                  <div key={g.src} className="border border-hairline bg-white overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="w-full aspect-[9/16] object-cover object-top" />
                  </div>
                ))}
              </div>
            </Block>
          )}
          <div className="border-t border-hairline" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
