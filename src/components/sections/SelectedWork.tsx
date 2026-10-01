import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { featuredProject, supportingProjects, type WebsiteProject } from '@/data/projects'

function Shot({ p, priority = false }: { p: WebsiteProject; priority?: boolean }) {
  if (!p.image) return null
  return (
    <div className="overflow-hidden border border-hairline bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image}
        alt={p.alt}
        width={1440}
        height={900}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ aspectRatio: '16 / 10' }}
        className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )
}

export function SelectedWork() {
  const f = featuredProject
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-white py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 id="work-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">
              Selected work
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-navy tracking-tight max-w-xl">
              A selection of websites and digital projects built by HK Creative.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-navy hover:text-teal-dark transition-colors duration-200 shrink-0"
          >
            View All Work <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-10 items-start">
          <Link href={`/work/${f.slug}`} className="group block lg:col-span-8">
            <Shot p={f} priority />
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-bold text-navy">{f.title}</h3>
              <p className="text-xs uppercase tracking-widest text-slate">{f.type} · {f.technologies.join(' · ')}</p>
            </div>
            <p className="mt-2 text-sm text-slate leading-relaxed max-w-xl">{f.description}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-teal-dark transition-colors duration-200">
              View Case Study <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          <div className="lg:col-span-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {supportingProjects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                <Shot p={p} />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-bold text-navy">{p.title}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-slate">{p.type}</p>
                </div>
                <p className="mt-1.5 text-sm text-slate leading-relaxed">{p.description}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-teal-dark transition-colors duration-200">
                  View Case Study <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
