import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowRight, Globe, Smartphone, Zap, Palette, Target, Zap as ZapIcon, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | HK Creative Web',
  description: 'We build content systems that turn local businesses into consistent customer machines. Content, websites, and AI automation under one roof.',
}

const whatWeDo = [
  { icon: Smartphone, title: 'Content that attracts attention', desc: 'Short-form video and social content designed to stop the scroll and bring in enquiries.' },
  { icon: Globe,      title: 'Websites that convert visitors', desc: 'Fast, modern websites built to turn visitors into customers — no templates.' },
  { icon: Zap,        title: 'Automation that captures leads', desc: 'Smart tools that respond, follow up, and qualify leads while you focus on your business.' },
  { icon: Palette,    title: 'Strategy that ties it together', desc: 'Every part of your digital presence designed to work as one connected system.' },
]

const whyUs = [
  { icon: Target,  title: 'Clarity over complexity',  desc: 'We cut through the noise and focus on what actually moves the needle for your business.' },
  { icon: ZapIcon, title: 'Strategy over volume',     desc: 'We don\'t post for the sake of posting. Everything we create has a purpose and a plan.' },
  { icon: Users,   title: 'Results over activity',    desc: 'We measure success by customers generated, not content produced.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-black pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.15)_0%,_transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                  About HK Creative Web
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                  We build systems that turn attention into{' '}
                  <span className="text-purple-400">customers.</span>
                </h1>
                <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                  Content · Websites · AI Automation
                </p>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Most businesses struggle online not because they lack effort — but because they lack a system. We fix that by combining content, websites, and automation into one simple goal: more visibility, more trust, more customers.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-purple-600/30"
                >
                  Work with us <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl" />
                <Image
                  src="/about-us-img.jpeg"
                  alt="HK Creative Web team"
                  width={600}
                  height={500}
                  className="relative rounded-2xl object-cover w-full shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stop posting. Start growing. ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                Stop Posting. Start Growing.
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                If your social media isn't bringing enquiries, it's not working.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We help local businesses turn content into a predictable source of leads through short-form video, smart messaging, and consistent visibility strategies.
              </p>
              <p className="text-neutral-700 font-semibold">
                This isn't marketing for the sake of it — this is structured customer acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* ── What we actually do ── */}
        <section className="bg-neutral-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                What We Actually Do
              </h2>
              <p className="text-neutral-500 max-w-xl">
                We don't sell random services — we build growth systems. Every part of your digital presence is designed to work as one.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDo.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-sm mb-2 leading-snug">{title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI & Automation ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-500 mb-5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
                  AI and Automation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                  Your business runs even when you're not online.
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  We build systems that help businesses capture and convert leads automatically — so you're never missing an enquiry.
                </p>
                <ul className="space-y-3">
                  {[
                    'Instagram DM funnels that capture leads',
                    'WhatsApp auto-replies for enquiries',
                    'AI-generated captions and content ideas',
                    'Automated follow-up systems',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 p-8 text-white">
                <p className="text-2xl font-bold mb-3 leading-tight">Your business stops relying on manual responses.</p>
                <p className="text-purple-200 leading-relaxed">It starts running on structure — capturing leads, following up, and converting enquiries around the clock.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Website Conversion ── */}
        <section className="bg-neutral-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-500 mb-5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
                Website Intelligence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                Your website shouldn't just exist — it should convert.
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-10">
                We design and optimise websites that turn visitors into enquiries, build trust instantly, support your content strategy, and improve conversion rates.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  { title: 'Turn visitors into enquiries', desc: 'Clear calls to action, smart layout, and fast load times that keep people on the page.' },
                  { title: 'Build trust instantly', desc: 'Professional design, social proof, and clear messaging that converts first-time visitors.' },
                  { title: 'Support your content strategy', desc: 'Your website and content work together — each piece driving traffic to convert.' },
                  { title: 'Improve conversion rates', desc: 'Ongoing optimisation based on real data, not guesswork.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-5 border border-neutral-100">
                    <h3 className="font-semibold text-neutral-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why businesses work with us ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                Why Businesses Work With Us
              </h2>
              <p className="text-neutral-500 max-w-lg mx-auto">
                Most agencies sell posts and websites. We build systems that generate customers consistently.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-600/30">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our approach ── */}
        <section className="bg-gradient-to-r from-purple-800 via-purple-600 to-violet-700 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  We work with a limited number of clients each month.
                </h2>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Not because we're small — but because every system we build is hands-on, strategic, and performance-focused.
                </p>
                <p className="text-purple-100 leading-relaxed">
                  This ensures quality stays high and results stay consistent. Once slots are filled, onboarding closes until the next cycle.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-5xl font-bold text-white mb-2">Limited</p>
                <p className="text-purple-200 text-lg">client slots available each month</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 transition-colors duration-200 shadow-lg"
                >
                  Claim your spot <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-black py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              Ready to build a system that works?
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Stop relying on inconsistent marketing. Start building predictable growth with a team that treats your business like their own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-purple-600/30"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-colors duration-200"
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
