import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  { title: 'Built around your business', desc: 'No unnecessary features or bloated templates.' },
  { title: 'Designed to be used', desc: 'Responsive, practical websites that work across devices.' },
  { title: 'Clear from the start', desc: 'Straightforward communication and practical advice.' },
  { title: 'More than just a website', desc: 'Web, content and digital systems working together.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">About</p>
          <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight max-w-xl">
            Websites built by someone who actually builds them.
          </h2>
          <p className="mt-5 text-slate leading-relaxed max-w-xl">
            Good websites should be easy to use, fast and built around the business behind them.
          </p>
          <div className="mt-10 max-w-md overflow-hidden rounded-lg border border-hairline">
            <Image
              src="/images/workspace-tablet.webp"
              alt="A notebook, fountain pen and tablet showing a website design tool on a wooden desk"
              width={500}
              height={467}
              sizes="(min-width: 1024px) 448px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:col-span-5 text-sm text-slate leading-relaxed space-y-4">
          <p>
            I&apos;m Hamza. HK Creative is my freelance web development and creative practice. I work directly with individuals and small businesses, from the first conversation through structure, design, development and launch. Based in Surrey, UK, I work with businesses and clients across the UK and internationally.
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
            My story <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
