import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowRight, Camera, Video, TrendingUp, Star, Zap, Globe, CheckCircle, Compass } from 'lucide-react'

const title = 'Pricing | HK Creative Web'
const description = 'Transparent pricing from HK Creative Web: a consultation to scope your project honestly, quote-based website design, and optional content and automation services.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pricing' },
  openGraph: { title, description, url: '/pricing', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
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
      'Website design included in the plan',
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
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-cream pt-16 pb-20 lg:pt-24 lg:pb-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-mint/70 blur-[120px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark mb-6 px-3 py-1.5 rounded-full bg-mint border border-teal/20">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-5">
              Simple, honest pricing.
            </h1>
            <p className="text-slate text-lg leading-relaxed mb-3">
              Websites · Content · Digital Systems
            </p>
            <p className="text-slate leading-relaxed">
              Most projects don&apos;t fit a fixed package, so we don&apos;t force one on you. Everything here starts with an honest conversation, from a consultation to scope a website properly, through to ongoing content support for businesses that want it.
            </p>
          </div>
        </section>

        {/* ── Digital & Technology Consultation — the starting point for everything below ── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-teal/20 bg-mint p-8 lg:p-10 grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-teal-dark bg-white px-3 py-1.5 rounded-full mb-4">
                  <Compass size={12} /> Start Here
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-3">
                  Not sure what your website needs?
                </h2>
                <p className="text-slate leading-relaxed mb-2">
                  Get professional advice before committing to a full project. A chance to talk through your business, your current setup and your goals, so you know what&apos;s actually worth investing in.
                </p>
                <p className="text-slate leading-relaxed">
                  Every website below is quoted individually once we understand what you need. This consultation is how we get there.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200 shadow-lg shadow-navy/15"
                >
                  Book a Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Website Design & Development ── */}
        <section className="bg-mint py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <Globe size={20} className="text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Website Design &amp; Development</h2>
            </div>
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-hairline p-7 bg-white">
                <h3 className="font-bold text-navy text-lg mb-1">Quoted individually, every time</h3>
                <p className="text-slate text-sm mt-1 mb-5">No fixed packages, no hidden extras</p>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  Every business needs something different from a website, so we don&apos;t sell a one-size-fits-all package. We start with a consultation to understand what you actually need, then give you a straightforward, honest quote for the build, whether that&apos;s a new site or a redesign.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'New builds and redesigns',
                    'Responsive, accessible design',
                    'A clear quote before any work begins',
                    'No agency-style retainers or lock-in',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-colors duration-200"
                >
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content Production — optional, for businesses that also want ongoing content support ── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate mb-14">
              Optional: for businesses that also want ongoing content and growth support
            </p>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center">
                <Camera size={20} className="text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Content Production</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Shoot session */}
              <div className="rounded-2xl border border-hairline p-7 bg-[#F5F6F4]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-navy text-lg">Content Shoot Session</h3>
                    <p className="text-slate text-sm mt-1">Production Day</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-dark">£100</span>
                    <p className="text-slate text-xs">per session</p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  A focused content creation session designed to build your content library. This is for businesses building their content foundation.
                </p>
                <ul className="space-y-2">
                  {[
                    'Up to 1 hour filming (can be split across 2 days)',
                    '10–20 short-form video assets produced',
                    'Raw footage delivered for full flexibility',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Per asset */}
              <div className="rounded-2xl border border-hairline p-7 bg-[#F5F6F4]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-navy text-lg">Content Production</h3>
                    <p className="text-slate text-sm mt-1">Per asset, minimum 5</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-dark">£25–£40</span>
                    <p className="text-slate text-xs">per video</p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  A flexible option for ongoing brand visibility. Designed to keep your brand consistently active online.
                </p>
                <ul className="space-y-2">
                  {[
                    'Filming, editing, captions included',
                    '1 revision per video',
                    'Optimised for TikTok, Instagram and Facebook',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visibility & Growth ── */}
        <section className="bg-mint py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <TrendingUp size={20} className="text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Visibility and Growth Systems</h2>
            </div>
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-hairline p-7 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-navy text-lg">Business Growth System</h3>
                    <p className="text-slate text-sm mt-1">10-video campaign</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-dark">£350</span>
                    <p className="text-slate text-xs">per campaign</p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  A structured content system designed to increase visibility and enquiries. This is where content starts becoming a growth tool, not just posts.
                </p>
                <ul className="space-y-2">
                  {[
                    'Full filming and editing',
                    'Captions included',
                    'Posting guidance provided',
                    'Platform optimisation, choose 2 platforms',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Monthly Growth Systems ── */}
        <section className="bg-mint py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <Video size={20} className="text-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Monthly Growth Systems</h2>
              </div>
              <p className="text-slate max-w-lg mx-auto">
                Ongoing systems that build consistent visibility and enquiries month after month.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-7 flex flex-col bg-white ${
                    plan.highlight ? 'border-2 border-teal shadow-2xl shadow-teal/20 scale-[1.02]' : 'border border-hairline'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wide shadow-lg">
                      {plan.badge}
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-1 text-navy">{plan.name}</h3>
                    <p className="text-sm mb-4 text-slate">{plan.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-bold ${plan.highlight ? 'text-teal-dark' : 'text-navy'}`}>{plan.price}</span>
                      <span className="text-sm pb-1 text-slate">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                        <span className="text-navy">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-colors duration-200 ${
                      plan.highlight
                        ? 'bg-teal text-white hover:bg-teal-dark'
                        : 'bg-navy text-white hover:bg-navy-dark'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Full Growth Partnership */}
            <div className="mt-8 rounded-2xl border border-hairline bg-white p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={18} className="text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-dark">Ongoing Partnership</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Full Growth Partnership</h3>
                  <p className="text-slate text-sm mb-5">Your outsourced marketing system, done for you from start to finish.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {[
                      'Done-for-you content production (high-volume short-form video)',
                      'Full strategy and content direction',
                      'Website optimisation and conversion improvements',
                      'AI automation: DMs, replies, lead capture systems',
                      'Continuous optimisation based on performance',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                        <CheckCircle size={14} className="text-teal mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right shrink-0">
                  <div className="text-4xl font-bold text-navy mb-1">£1,000–£1,500</div>
                  <div className="text-slate text-sm mb-6">/month</div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal hover:bg-teal-dark text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-teal/20"
                  >
                    Apply now <ArrowRight size={16} />
                  </Link>
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
                  <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center">
                    <Zap size={20} className="text-teal" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">AI and Automation Systems</h2>
                </div>
                <p className="text-slate leading-relaxed mb-6">
                  We build systems that help businesses capture and convert leads automatically. Turn your business into a system that responds and converts 24/7.
                </p>
                <ul className="space-y-3">
                  {[
                    'WhatsApp auto-replies and enquiry handling',
                    'Instagram DM automation funnels',
                    'AI-powered captions and content ideation',
                    'Lead capture and follow-up systems',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate italic">Pricing quoted based on scope. Get in touch to discuss your needs.</p>
              </div>
              <div className="rounded-2xl bg-navy p-8 text-white">
                <Zap size={32} className="text-teal-light mb-4" />
                <p className="text-xl font-bold mb-3">Your business runs even when you&apos;re not online.</p>
                <p className="text-white/70 text-sm leading-relaxed">Stop missing enquiries. Our automation systems capture, respond, and convert leads around the clock, without you lifting a finger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Website Intelligence Audit ── */}
        <section className="bg-mint py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <Globe size={20} className="text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Website Intelligence Audit</h2>
            </div>
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-hairline p-7 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-navy text-lg">Website Growth Report</h3>
                    <p className="text-slate text-sm mt-1">Full performance breakdown</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-dark">£30–£40</span>
                    <p className="text-slate text-xs">one-off</p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  A full breakdown of your website performance and improvement opportunities. Implementation quoted separately based on scope.
                </p>
                <ul className="space-y-2">
                  {[
                    'SEO and performance analysis',
                    'Design and user experience review',
                    'Conversion improvement insights',
                    'Clear action plan',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckCircle size={15} className="text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-cream py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              We only work with a limited number of businesses each month. Once slots are filled, onboarding closes until the next cycle.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy hover:bg-navy-dark text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-navy/15"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
