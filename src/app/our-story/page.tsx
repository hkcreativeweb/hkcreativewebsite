import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowRight, Users, Puzzle, Layers, Sprout, CheckCircle2 } from 'lucide-react'

const title = 'Our Story | HK Creative Web'
const description = 'Why HK Creative was created, and the thinking behind bringing website, social, branding and technology guidance together under one roof.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/our-story' },
  openGraph: { title, description, url: '/our-story', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

const storyBeats = [
  {
    icon: Users,
    title: 'Different paths, one idea',
    text: 'HK Creative was founded by a small group of developers and digital creatives who came together from different sectors and different career backgrounds, not a shared career path, but a shared interest in building something of their own.',
  },
  {
    icon: Puzzle,
    title: 'A shared frustration',
    text: 'Between us, we\'d seen the same pattern play out again and again. One company builds the website. Another handles social media. Someone else creates the graphics. Another person gets asked about the technology, almost as an afterthought. Businesses were left to piece it all together themselves.',
  },
  {
    icon: Layers,
    title: 'A simpler way forward',
    text: 'Some of us had been through changes in the job market or shifts in our own professional circumstances. Rather than letting that hold us back, we wanted to put our skills, creativity and technical knowledge to use, and build something more connected than what was already out there.',
  },
  {
    icon: Sprout,
    title: 'What we\'re building today',
    text: 'HK Creative exists to bring those capabilities together under one roof: websites, content, branding, digital tools and honest technology guidance. The goal was never to build a website and disappear. It\'s to help businesses build a stronger digital foundation, gradually and properly.',
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
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ══════════════════ OUR STORY — editorial timeline ══════════════════ */}
        <section className="bg-cream pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-mint/70 blur-[120px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark mb-5 px-3 py-1.5 rounded-full bg-mint border border-teal/20">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
                Built by people who&apos;d seen the industry from the other side.
              </h1>
              <p className="text-slate leading-relaxed">
                We&apos;re a group of developers and digital creatives, not one single founder story. Here&apos;s roughly how HK Creative came together.
              </p>
            </div>

            {/* Timeline card */}
            <div className="bg-white rounded-3xl border border-hairline shadow-[0_4px_28px_rgba(23,32,51,0.06)] p-7 lg:p-12">
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
                  We believe businesses shouldn&apos;t have to piece together lots of disconnected digital services just to have a presence they&apos;re proud of.
                </p>
              </div>
            </div>

            {/* Organic growth foundations — soft mint accent box */}
            <div className="mt-10 bg-mint rounded-3xl p-7 lg:p-10">
              <h2 className="text-xl font-bold text-navy mb-3">Building the foundations for organic growth</h2>
              <p className="text-slate leading-relaxed max-w-2xl mb-7">
                We can&apos;t promise guaranteed growth or guaranteed sales. Nobody honestly can. What we can do is help you build the foundations a stronger online presence is made of:
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
              Want to know what we can actually do for you?
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              See what HK Creative is today and the range of digital and creative support we offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-navy/15"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-hairline bg-cream text-navy hover:border-teal/40 font-semibold text-sm transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
