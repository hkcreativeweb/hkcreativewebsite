import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'
import {
  ArrowRight, Globe, Smartphone, Zap, Palette, Compass, LifeBuoy,
  Users, Target, Zap as ZapIcon,
} from 'lucide-react'

const title = 'About HK Creative Web | Web Developer in Surrey, UK'
const description = 'HK Creative is the web development and digital services business of Hamza, based in Surrey, UK and working with clients across the UK and internationally.'

export const metadata: Metadata = pageMetadata({ title, description, path: '/about' })

const capabilities = [
  { icon: Globe,      title: 'Website Design & Development', desc: 'New builds and redesigns. Responsive, accessible and built around your users, not just built to look good.' },
  { icon: Smartphone, title: 'Social Media & Promotional Content', desc: 'Content, promotional graphics and day-to-day management across the platforms that matter to your business.' },
  { icon: Palette,    title: 'Branding & Digital Creative', desc: 'Visual identity, graphics and creative assets that keep your business looking consistent everywhere.' },
  { icon: Zap,        title: 'AI & Digital Solutions', desc: 'Practical tools and automation that save you time, without adding technology you don\'t actually need.' },
  { icon: Compass,    title: 'Technology & Website Consultations', desc: 'Honest guidance on platforms, tools and systems, so you know what\'s worth investing in.' },
  { icon: LifeBuoy,   title: 'Ongoing Digital Support', desc: 'I don\'t build something and disappear. I\'m here for the improvements that come after launch.' },
]

const whyUs = [
  { icon: Target,  title: 'Clarity over complexity',  desc: 'I focus on what your business actually needs, not on what\'s easiest to sell.' },
  { icon: ZapIcon, title: 'Guidance over guesswork',   desc: 'I\'d rather tell you what you don\'t need than sell you something you won\'t use.' },
  { icon: Users,   title: 'Built to be useful',     desc: 'I judge a website by whether it works for your business, not by how much I can add to it.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-cream pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <Image src="/images/logo-icon.png" alt="HK Creative Web" width={52} height={52} unoptimized className="h-10 w-auto mb-5 opacity-90" />
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark mb-6 px-3 py-1.5 rounded-md bg-mint border border-teal/20">
                  About HK Creative Web
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-navy leading-tight tracking-tight mb-6">
                  Websites built by someone{' '}
                  <span className="text-teal">who actually builds them.</span>
                </h1>
                <p className="text-slate text-lg leading-relaxed mb-4">
                  Websites · Social · Branding · Digital Guidance
                </p>
                <p className="text-slate leading-relaxed mb-8">
                  I&apos;m Hamza, the web developer behind HK Creative. I build modern, professional websites for businesses, individuals and organisations, combining web development, design and digital content to create websites that look good, work properly and help businesses build a stronger online presence. Based in Surrey, UK, I work with businesses and clients across the UK and internationally.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-colors duration-200"
                >
                  Work with me <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/about-us-img.webp"
                  alt="HK Creative Web"
                  width={600}
                  height={500}
                  className="relative rounded-lg object-cover w-full shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ ABOUT US — clean, structured ══════════════════ */}
        <section id="about-us" className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark mb-5 px-3 py-1.5 rounded-md bg-mint border border-teal/20">
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">
                More than just a website.
              </h2>
              <p className="text-slate leading-relaxed">
                HK Creative is my web development and digital services business. I work across websites, social content, branding, digital tools and technology guidance, so you&apos;re not left finding a different provider for every part of it. See the <Link href="/services" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">services I offer</Link> and the <Link href="/portfolio" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">websites I&apos;ve built</Link>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[#F5F6F4] rounded-lg p-6 border border-hairline">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4">
                    <Icon size={22} className="text-teal" />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-2 leading-snug">{title}</h3>
                  <p className="text-slate text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <p className="text-navy font-medium max-w-xl">
                The idea is simple: one place to bring your digital presence together, and straightforward advice on what actually makes sense for your business.
              </p>
              <Link
                href="/our-story"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md border border-hairline bg-[#F5F6F4] text-navy text-sm font-semibold hover:border-teal/40 transition-colors duration-200"
              >
                Read my story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why businesses work with us ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 tracking-tight">
                Why Businesses Work With Me
              </h2>
              <p className="text-slate max-w-lg mx-auto">
                Most providers sell one service and move on. I look after the website and the digital work around it, so it all fits together.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-teal flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal/25">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our approach ── */}
        <section className="bg-mint py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">
                  I work directly with every client.
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  I personally handle the work on every project, so I only take on a limited number of projects at a time. That means I can give each one the attention it deserves.
                </p>
                <p className="text-slate leading-relaxed">
                  There are no hand-offs and no account managers. You talk to me from the first conversation to launch, and after.
                </p>
              </div>
              <div className="bg-navy rounded-lg p-10 text-center lg:text-right">
                <p className="text-5xl font-bold text-white mb-2">Limited</p>
                <p className="text-white/60 text-lg">projects at a time, so each one gets my full attention</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-md bg-teal text-white font-bold text-sm hover:bg-teal-dark transition-colors duration-200 shadow-lg"
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-cream py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 tracking-tight">
              Ready to talk about your website?
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Tell me what you need. I&apos;ll give you honest advice and a straightforward quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-navy hover:bg-navy-dark text-white font-bold text-sm transition-colors duration-200"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-hairline bg-white text-navy hover:border-teal/40 font-semibold text-sm transition-colors duration-200"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
