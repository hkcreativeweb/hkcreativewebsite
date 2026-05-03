import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowRight, Camera, Video, TrendingUp, Star, Zap, Globe, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | HK Creative Web',
  description: 'Simple, transparent pricing for content production, monthly growth systems, AI automation, and website services.',
}

const monthlyPlans = [
  {
    name: 'Starter Growth System',
    price: '£299',
    period: '/month',
    desc: 'For consistency and visibility',
    features: [
      '8–10 short-form videos',
      'Basic content strategy',
      'Brand consistency support',
    ],
    highlight: false,
    cta: 'Get started',
  },
  {
    name: 'Growth System',
    price: '£499',
    period: '/month',
    desc: 'For businesses ready to scale visibility',
    features: [
      '15–20 short-form videos',
      'Content planning and strategy',
      'FREE website included (if needed)',
      'Focus on engagement and enquiries',
    ],
    highlight: true,
    badge: 'Most Popular',
    cta: 'Get started',
  },
  {
    name: 'Pro Growth System',
    price: '£799+',
    period: '/month',
    desc: 'For serious growth and scaling',
    features: [
      '25–40 videos monthly',
      'Content and automation integration',
      'Full social media execution support',
      'Designed for consistent customer flow',
    ],
    highlight: false,
    cta: 'Get started',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-black pt-16 pb-20 lg:pt-24 lg:pb-24 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.15)_0%,_transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
              Simple, transparent pricing.
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-3">
              Content · Websites · AI Automation
            </p>
            <p className="text-neutral-500 leading-relaxed">
              We help local businesses grow through high-quality content, smart strategy, and digital systems that consistently generate customers.
            </p>
          </div>
        </section>

        {/* ── Content Production ── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Camera size={20} className="text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">Content Production</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Shoot session */}
              <div className="rounded-2xl border border-neutral-200 p-7 bg-neutral-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">Content Shoot Session</h3>
                    <p className="text-neutral-500 text-sm mt-1">Production Day</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">£100</span>
                    <p className="text-neutral-400 text-xs">per session</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  A focused content creation session designed to build your content library. This is for businesses building their content foundation.
                </p>
                <ul className="space-y-2">
                  {[
                    'Up to 1 hour filming (can be split across 2 days)',
                    '10–20 short-form video assets produced',
                    'Raw footage delivered for full flexibility',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-purple-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Per asset */}
              <div className="rounded-2xl border border-neutral-200 p-7 bg-neutral-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">Content Production</h3>
                    <p className="text-neutral-500 text-sm mt-1">Per Asset — minimum 5</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">£25–£40</span>
                    <p className="text-neutral-400 text-xs">per video</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  A flexible option for ongoing brand visibility. Designed to keep your brand consistently active online.
                </p>
                <ul className="space-y-2">
                  {[
                    'Filming, editing, captions included',
                    '1 revision per video',
                    'Optimised for TikTok, Instagram and Facebook',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-purple-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visibility & Growth ── */}
        <section className="bg-neutral-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <TrendingUp size={20} className="text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">Visibility and Growth Systems</h2>
            </div>
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-neutral-200 p-7 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">Business Growth System</h3>
                    <p className="text-neutral-500 text-sm mt-1">10-video campaign</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">£350</span>
                    <p className="text-neutral-400 text-xs">per campaign</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  A structured content system designed to increase visibility and enquiries. This is where content starts becoming a growth tool, not just posts.
                </p>
                <ul className="space-y-2">
                  {[
                    'Full filming and editing',
                    'Captions included',
                    'Posting guidance provided',
                    'Platform optimisation — choose 2 platforms',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-purple-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Monthly Growth Systems ── */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <Video size={20} className="text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Monthly Growth Systems</h2>
              </div>
              <p className="text-neutral-400 max-w-lg mx-auto">
                Ongoing systems that build consistent visibility and enquiries month after month.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-7 flex flex-col ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-purple-600 to-violet-700 shadow-2xl shadow-purple-600/30 scale-[1.02]'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-purple-700 text-xs font-bold uppercase tracking-wide shadow-lg">
                      {plan.badge}
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.highlight ? 'text-purple-100' : 'text-neutral-400'}`}>{plan.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                      <span className={`text-sm pb-1 ${plan.highlight ? 'text-purple-200' : 'text-neutral-400'}`}>{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-purple-200' : 'text-purple-400'}`} />
                        <span className={plan.highlight ? 'text-purple-50' : 'text-neutral-300'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-colors duration-200 ${
                      plan.highlight
                        ? 'bg-white text-purple-700 hover:bg-purple-50'
                        : 'bg-purple-600 text-white hover:bg-purple-500'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* Full Growth Partnership */}
            <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={18} className="text-yellow-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Core High-Ticket Offer</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full Growth Partnership</h3>
                  <p className="text-purple-200 text-sm mb-5">Your outsourced marketing system — done for you, end to end.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {[
                      'Done-for-you content production (high-volume short-form video)',
                      'Full strategy and content direction',
                      'Website optimisation and conversion improvements',
                      'AI automation — DMs, replies, lead capture systems',
                      'Continuous optimisation based on performance',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-purple-100">
                        <CheckCircle size={14} className="text-purple-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right shrink-0">
                  <div className="text-4xl font-bold text-white mb-1">£1,000–£1,500</div>
                  <div className="text-purple-300 text-sm mb-6">/month</div>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-colors duration-200 shadow-lg"
                  >
                    Apply now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI & Automation ── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Zap size={20} className="text-purple-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">AI and Automation Systems</h2>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  We build systems that help businesses capture and convert leads automatically. Turn your business into a system that responds and converts 24/7.
                </p>
                <ul className="space-y-3">
                  {[
                    'WhatsApp auto-replies and enquiry handling',
                    'Instagram DM automation funnels',
                    'AI-powered captions and content ideation',
                    'Lead capture and follow-up systems',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-purple-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-neutral-500 italic">Pricing quoted based on scope — get in touch to discuss your needs.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white">
                <Zap size={32} className="text-purple-200 mb-4" />
                <p className="text-xl font-bold mb-3">Your business runs even when you're not online.</p>
                <p className="text-purple-200 text-sm leading-relaxed">Stop missing enquiries. Our automation systems capture, respond, and convert leads around the clock — without you lifting a finger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Website Intelligence Audit ── */}
        <section className="bg-neutral-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Globe size={20} className="text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">Website Intelligence Audit</h2>
            </div>
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-neutral-200 p-7 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">Website Growth Report</h3>
                    <p className="text-neutral-500 text-sm mt-1">Full performance breakdown</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">£30–£40</span>
                    <p className="text-neutral-400 text-xs">one-off</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  A full breakdown of your website performance and improvement opportunities. Implementation quoted separately based on scope.
                </p>
                <ul className="space-y-2">
                  {[
                    'SEO and performance analysis',
                    'Design and user experience review',
                    'Conversion improvement insights',
                    'Clear action plan',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-purple-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-r from-purple-800 via-purple-600 to-violet-700 py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-purple-100 leading-relaxed mb-8">
              We only work with a limited number of businesses each month. Once slots are filled, onboarding closes until the next cycle.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 transition-colors duration-200 shadow-lg"
            >
              Get in touch <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
