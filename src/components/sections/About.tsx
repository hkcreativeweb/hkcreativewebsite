import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  { title: 'Built around your business', desc: 'No unnecessary features or bloated templates.' },
  { title: 'Designed to be used', desc: 'Responsive, practical websites that work across devices.' },
  { title: 'Clear from the start', desc: 'Straightforward communication and practical solutions.' },
  { title: 'More than just a website', desc: 'Web, content and digital systems working together.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">About</p>
          <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight max-w-xl">
            Good websites aren&apos;t just about looking good.
          </h2>
          <p className="mt-5 text-slate leading-relaxed max-w-xl">
            They need to be easy to use, fast, maintainable and built around the business behind them.
          </p>
        </div>
        <div className="lg:col-span-5 text-sm text-slate leading-relaxed space-y-4">
          <p>
            I&apos;m Hamza. HK Creative is my freelance web development and creative practice. I work directly with individuals and small businesses, from the first conversation through structure, design, development and launch.
          </p>
          <p>You deal with the person building your website, not an account manager.</p>
          <dl className="pt-4 space-y-3 border-t border-hairline">
            {principles.map((p) => (
              <div key={p.title}>
                <dt className="font-bold text-navy uppercase tracking-wide text-xs">{p.title}</dt>
                <dd>{p.desc}</dd>
              </div>
            ))}
          </dl>
          <Link href="/our-story" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-dark transition-colors duration-200">
            Our story <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
