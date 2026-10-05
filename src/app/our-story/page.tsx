import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import { ArrowRight, Users, Puzzle, Layers, Sprout, Briefcase, CheckCircle2 } from 'lucide-react'

const title = 'My Story: Hamza, Web Developer | HK Creative Web'
const description = "Why I started HK Creative Web, my background in financial services and web development, and how I work with small businesses across the UK."

export const metadata: Metadata = pageMetadata({ title, description, path: '/our-story' })

const storyBeats = [
  {
    icon: Puzzle,
    title: 'Why I started HK Creative',
    text: 'I kept seeing the same pattern. One company builds the website. Another handles social media. Someone else creates the graphics, and the technology gets asked about almost as an afterthought. Businesses were left to piece it all together themselves.',
  },
  {
    icon: Briefcase,
    title: 'My background',
    text: 'My background combines professional business experience with web development. I have worked in regulated financial services, across customer service, compliance and operations, while building my technical skills in Ruby on Rails, JavaScript, HTML and CSS, SQL and PostgreSQL, Git and GitHub, WordPress and Shopify. That helps me see both sides of a project: how a website needs to work technically, and what a business actually needs from it.',
  },
  {
    icon: Layers,
    title: 'What I do',
    text: 'I design and develop websites, and I help with the digital side around them: social content, branding, practical digital tools and honest technology advice. It is all in one place, so it fits together.',
  },
  {
    icon: Users,
    title: 'Working with me',
    text: 'You deal directly with me, from the first conversation through design, development and launch. No account managers and no hand-offs. I will tell you what you need and what you do not, before you spend any money. Based in Surrey, UK, I work with businesses and clients across the UK and internationally.',
  },
  {
    icon: Sprout,
    title: 'Why you can trust me with your website',
    text: 'Look at the work. Every project in my portfolio is a real website I designed and built, and you can visit each one. I do not build a website and disappear. I am here for the improvements that come after launch.',
  },
]

const foundations = [
  'Professional websites',
  'Consistent branding',
  'Social media content',
  'Promotional creative',
  'Clearer digital communication',
  'Appropriate technology',
  'Better online user experiences',
  'Ongoing improvements',
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'My story', path: '/our-story' }])} />
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ══════════════════ OUR STORY — editorial timeline ══════════════════ */}
        <section className="bg-cream pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark mb-5 px-3 py-1.5 rounded-md bg-mint border border-teal/20">
                My Story
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight leading-tight">
                I&apos;m Hamza, the web developer behind HK Creative.
              </h1>
              <p className="text-slate leading-relaxed">
                I build modern, professional websites for businesses, individuals and organisations, combining web development, design and digital content to create websites that look good, work properly and help businesses build a stronger online presence.
              </p>
            </div>

            <div className="mb-10 overflow-hidden rounded-lg border border-hairline">
              <Image
                src="/images/workspace.webp"
                alt="A web developer's desk with a laptop and monitor showing a website and code"
                width={1024}
                height={557}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="w-full h-auto"
              />
            </div>

            {/* Timeline card */}
            <div className="bg-white rounded-lg border border-hairline p-7 lg:p-12">
              <div className="space-y-10">
                {storyBeats.map((beat, i) => {
                  const Icon = beat.icon
                  return (
                    <div key={beat.title} className="flex gap-5 lg:gap-7">
                      <div className="flex flex-col items-center shrink-0">
                        <span className="w-11 h-11 rounded-full bg-mint border border-teal/25 flex items-center justify-center">
                          <Icon size={18} className="text-teal" />
                        </span>
                        {i < storyBeats.length - 1 && (
                          <span className="w-px flex-1 bg-hairline mt-2" style={{ minHeight: '2rem' }} />
                        )}
                      </div>
                      <div className="pb-2">
                        <h2 className="text-navy font-semibold text-lg mb-2">{beat.title}</h2>
                        <p className="text-slate leading-relaxed text-sm max-w-2xl">{beat.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Pull quote */}
              <div className="mt-12 border-l-2 border-teal pl-6 max-w-2xl">
                <p className="text-navy text-lg md:text-xl font-medium leading-relaxed italic">
                  I believe businesses shouldn&apos;t have to piece together lots of disconnected digital services just to have a presence they&apos;re proud of.
                </p>
              </div>
            </div>

            {/* Organic growth foundations — soft mint accent box */}
            <div className="mt-10 bg-mint rounded-lg p-7 lg:p-10">
              <h2 className="text-xl font-bold text-navy mb-3">Building the foundations for organic growth</h2>
              <p className="text-slate leading-relaxed max-w-2xl mb-7">
                I can&apos;t promise guaranteed growth or guaranteed sales. Nobody honestly can. What I can do is help you build the foundations a stronger online presence is made of:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                {foundations.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-navy">
                    <CheckCircle2 size={15} className="text-teal shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-white py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 tracking-tight">
              Want to know what I can actually do for you?
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              See the <Link href="/services" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">services I offer</Link> and the <Link href="/portfolio" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">websites I&apos;ve built</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-navy hover:bg-navy-dark text-white font-bold text-sm transition-colors duration-200"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-hairline bg-cream text-navy hover:border-teal/40 font-semibold text-sm transition-colors duration-200"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
