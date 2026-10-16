'use client'

import type { ReactNode } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Heart, Bookmark, Share2, MessageCircle, Sparkles, Palette } from 'lucide-react'
import Link from 'next/link'
import { featuredProject, getProject, tiktokCampaign, eidProject, templateProject } from '@/data/projects'
import { BrowserFrame, PhoneFrame, PreviewImage, mobileFor } from '@/components/ProjectPreview'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Portfolio data model — typed so future real projects drop straight in ──
export type PortfolioCategory = 'Web Design' | 'Branding' | 'Promotional Graphics' | 'Social Media Design' | 'Digital Design'

// Project details live in @/data/projects (single source of truth); this file only handles presentation.
const fuelCrisisEngland = featuredProject

// ─── Social media — real client work ───────────────────────────────────────
const metric = (r: { metrics: { label: string; value: string }[] }, l: string) => r.metrics.find((m) => m.label === l)?.value ?? ''
const socialVideos = (tiktokCampaign.results ?? []).map((r, i) => ({
  img: tiktokCampaign.gallery?.[i]?.src ?? '',
  name: r.name,
  views: metric(r, 'Views'),
  likes: metric(r, 'Likes'),
  comments: metric(r, 'Comments'),
  saves: metric(r, 'Saves'),
  shares: metric(r, 'Shares'),
}))

function SocialFrame() {
  return (
    <div className="w-full h-full flex items-end justify-center gap-2 p-3" style={{ background: '#060606' }}>
      {socialVideos.map((v) => (
        <div key={v.name} className="flex flex-col items-center gap-1.5" style={{ width: '31%' }}>
          <div className="relative w-full rounded-xl border-[2px] border-[#3a3a3c] bg-black overflow-hidden" style={{ aspectRatio: '9/17' }}>
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-black rounded-full z-20" />
            <div className="absolute top-3 left-1 z-20 bg-black/70 rounded-md px-1.5 py-0.5 flex items-center gap-0.5">
              <span className="text-[5px] font-black text-white">{v.views}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.img} alt={`${v.name} social content`} className="w-full h-full object-cover object-top" />
          </div>
          <p className="text-white text-[6.5px] font-bold leading-tight text-center">{v.name}</p>
          <div className="w-full grid grid-cols-2 gap-0.5">
            <div className="flex items-center justify-center gap-0.5 bg-red-500/10 rounded py-0.5">
              <Heart size={7} className="text-red-400 fill-red-400" />
              <span className="text-[6px] font-bold text-red-400">{v.likes}</span>
            </div>
            <div className="flex items-center justify-center gap-0.5 bg-yellow-500/10 rounded py-0.5">
              <Bookmark size={7} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[6px] font-bold text-yellow-400">{v.saves}</span>
            </div>
            <div className="flex items-center justify-center gap-0.5 bg-teal/10 rounded py-0.5">
              <Share2 size={7} className="text-teal-light" />
              <span className="text-[6px] font-bold text-teal-light">{v.shares}</span>
            </div>
            <div className="flex items-center justify-center gap-0.5 bg-white/5 rounded py-0.5">
              <MessageCircle size={7} className="text-white/40" />
              <span className="text-[6px] font-bold text-white/40">{v.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Concept website mockups (clearly labelled) ────────────────────────────
const ModestLuxeMockup = (
  <div className="w-full h-full overflow-hidden flex flex-col" style={{ background: '#fdf9f5' }}>
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid #ede8e0' }}>
      <div className="flex gap-3 text-[5.5px] tracking-widest uppercase font-medium" style={{ color: '#a09080' }}>
        <span>Abayas</span><span>Kaftans</span>
      </div>
      <p className="font-black" style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#1a1410' }}>MODEST LUXE</p>
      <div className="flex gap-3 text-[5.5px] tracking-widest uppercase font-medium" style={{ color: '#a09080' }}>
        <span>Search</span><span>Bag</span>
      </div>
    </div>
    <div className="shrink-0 relative overflow-hidden" style={{ height: '46%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/portfolio/concepts/modest-luxe-hero.webp" alt="Modest Luxe fashion concept design" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,16,10,0.85) 0%, rgba(20,16,10,0.15) 60%, transparent 100%)' }} />
      <div className="absolute bottom-3 left-4">
        <p className="font-black text-white leading-tight" style={{ fontSize: '13px', fontFamily: 'Georgia, serif' }}>Effortlessly Modest.<br />Unapologetically Luxe.</p>
      </div>
    </div>
    <div className="flex-1 overflow-hidden px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: 'Evening Abaya', price: '£129', img: '/images/portfolio/concepts/modest-luxe-abaya.webp' },
          { name: 'Floral Kaftan', price: '£98', img: '/images/portfolio/concepts/modest-luxe-kaftan.webp' },
          { name: 'Lace Dress', price: '£112', img: '/images/portfolio/concepts/modest-luxe-dress.webp' },
        ].map(p => (
          <div key={p.name} className="flex flex-col">
            <div className="w-full rounded-sm mb-1.5 overflow-hidden" style={{ aspectRatio: '2/3', background: '#f0ebe4' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-[6.5px] font-black" style={{ color: '#1a1410' }}>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const HorizonEmailMockup = (
  <div className="w-full h-full bg-white overflow-hidden flex flex-col">
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ background: 'linear-gradient(135deg, #08122a, #142d66)' }}>
      <p className="text-[10px] font-black tracking-[0.3em] text-white">HORIZON</p>
    </div>
    <div className="shrink-0 relative overflow-hidden" style={{ height: '38%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/portfolio/concepts/horizon-hero.webp" alt="Horizon Travel email concept design" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #08122a 0%, transparent 65%)' }} />
      <div className="absolute bottom-2 left-4">
        <p className="text-[13px] font-black text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Escape to<br />Paradise</p>
      </div>
    </div>
    <div className="flex-1 px-4 py-3 overflow-hidden">
      <div className="grid grid-cols-2 gap-2">
        {[
          { dest: 'Maldives', price: 'From £1,299', img: '/images/portfolio/concepts/horizon-maldives.webp' },
          { dest: 'Santorini', price: 'From £899', img: '/images/portfolio/concepts/horizon-santorini.webp' },
        ].map(d => (
          <div key={d.dest} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.img} className="w-full h-full object-cover" alt={d.dest} />
            <div className="absolute bottom-1.5 left-2">
              <p className="text-[7px] font-black text-white leading-none">{d.dest}</p>
              <p className="text-[5.5px] font-bold" style={{ color: '#93c5fd' }}>{d.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

interface SecondaryProject {
  title: string
  category: PortfolioCategory
  type: string
  meta: string
  badge: string | null
  content: ReactNode
  isEmail: boolean
  liveUrl?: string
  description?: string
  technologies?: string[]
  caseStudy?: string
  caseLabel?: string
}

const sterling = getProject('sterling-transfers')!
const hotFoodHouse = getProject('hot-food-house')!
const noorAndCo = getProject('noor-and-co')!
const pakora = getProject('pakora-restaurant')!
const addiesdive = getProject('addiesdive-catalogue')!
const renovation = getProject('renovation-resolution')!
const setYourWatch = getProject('set-your-watch')!

function ProjectShot({ p }: { p: { title: string; url?: string; image?: string; alt?: string } }) {
  return (
    <BrowserFrame url={p.url ? new URL(p.url).host : p.title}>
      {p.image && (
        <PreviewImage
          src={p.image}
          alt={p.alt ?? `${p.title} website preview`}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 46vw, 92vw"
          className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      )}
    </BrowserFrame>
  )
}

const secondaryProjects: SecondaryProject[] = [
  ...[
    { p: setYourWatch, meta: 'Live website', badge: null },
    { p: renovation, meta: 'Live project', badge: null },
    { p: eidProject, meta: 'Live project', badge: null },
    { p: sterling, meta: 'Live project', badge: null },
    { p: noorAndCo, meta: 'Demo build', badge: 'Demo' },
    { p: addiesdive, meta: 'Demo build', badge: 'Demo' },
    { p: hotFoodHouse, meta: 'Demo build', badge: 'Demo' },
    { p: templateProject, meta: 'Template demo', badge: 'Template' },
    { p: pakora, meta: 'Concept Design · 2025', badge: 'Concept' },
  ].map(({ p, meta, badge }): SecondaryProject => ({
    title: p.title,
    category: 'Web Design',
    type: p.type,
    meta,
    badge,
    liveUrl: p.url,
    description: p.description,
    technologies: p.technologies,
    caseStudy: 'slug' in p ? p.slug : undefined,
    content: <ProjectShot p={p} />,
    isEmail: false,
  })),
  {
    title: 'Local Restaurant TikToks',
    category: 'Social Media Design',
    type: 'Social Media Management',
    meta: '70k–100k+ views · 2025',
    badge: null,
    description: tiktokCampaign.description,
    caseStudy: tiktokCampaign.slug,
    caseLabel: 'View Documented Results',
    content: <SocialFrame />,
    isEmail: false,
  },
  {
    title: 'Modest Luxe',
    category: 'Web Design',
    type: 'E-commerce · Fashion',
    meta: 'Concept design · 2025',
    badge: 'Concept',
    content: <BrowserFrame url="modestluxe.co.uk">{ModestLuxeMockup}</BrowserFrame>,
    isEmail: false,
  },
  {
    title: 'Horizon Travel',
    category: 'Promotional Graphics',
    type: 'Email Marketing Campaign',
    meta: 'Concept campaign · 2025',
    badge: 'Concept',
    content: HorizonEmailMockup,
    isEmail: true,
  },
]

export function Portfolio() {
  return (
    // reducedMotion="user": entrance and hover animations are skipped for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
    <section id="work" className="bg-cream py-20 lg:py-28 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-teal/25 bg-mint text-teal-dark text-[11px] font-semibold uppercase tracking-widest mb-5">
            My Work
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3 tracking-tight">
            What I&apos;ve built
          </h1>
          <p className="text-slate max-w-md mx-auto text-sm leading-relaxed">
            Websites and digital projects built by HK Creative.
          </p>
        </motion.div>

        {/* ── Featured project: Fuel Crisis England ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} className="text-teal" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-teal-dark">Featured Project</span>
          </div>

          <div className="rounded-lg bg-white border border-hairline p-6 lg:p-10 grid lg:grid-cols-5 gap-10 items-center">

            {/* Device */}
            <div className="lg:col-span-3 relative sm:pr-[12%] sm:pb-8">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease }}
                style={{ aspectRatio: '1600 / 1032' }}
              >
                {/* Mouse shortcut to the live site; the "Visit Website" button below is the accessible link. */}
                <a href={fuelCrisisEngland.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="block w-full h-full cursor-pointer">
                  <BrowserFrame url={new URL(fuelCrisisEngland.url!).host}>
                    <PreviewImage
                      src={fuelCrisisEngland.image!}
                      alt={`${fuelCrisisEngland.title} website, desktop homepage`}
                      sizes="(min-width: 1024px) 640px, 90vw"
                      priority
                    />
                  </BrowserFrame>
                </a>
              </motion.div>
              {mobileFor(fuelCrisisEngland.image) && (
                <PhoneFrame
                  base={mobileFor(fuelCrisisEngland.image)!}
                  alt={`${fuelCrisisEngland.title} website on a phone`}
                  className="hidden sm:block absolute right-0 bottom-0 w-[24%] max-w-[150px]"
                />
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 pt-10 sm:pt-0">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-teal-dark bg-mint border border-teal/20 rounded-md px-3 py-1 mb-4">
                {fuelCrisisEngland.type}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3 tracking-tight">{fuelCrisisEngland.title}</h2>
              <p className="text-slate text-sm leading-relaxed mb-6">
                {fuelCrisisEngland.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {fuelCrisisEngland.features.map((f) => (
                  <span key={f} className="text-[11px] font-medium text-navy bg-[#F5F6F4] border border-hairline rounded-md px-3 py-1.5">
                    {f}
                  </span>
                ))}
              </div>
              {fuelCrisisEngland.technologies && (
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="text-[11px] text-slate">Built with:</span>
                  {fuelCrisisEngland.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-teal-dark">{t}</span>
                  ))}
                </div>
              )}
              <Link href={`/work/${fuelCrisisEngland.slug}`} className="inline-flex items-center gap-2 mr-6 py-3.5 text-sm font-semibold text-navy hover:text-teal-dark transition-colors duration-200">
                View Case Study <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a
                href={fuelCrisisEngland.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
              >
                Visit Website <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Secondary work grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="rounded-lg bg-white border border-hairline overflow-hidden group hover:border-teal/25 transition-colors duration-300"
            >
              <div
                className={`relative overflow-hidden ${p.isEmail || p.title.includes('TikTok') ? 'bg-white' : 'bg-[#F5F6F4] px-4 pt-4'}`}
                style={{ aspectRatio: p.title.includes('TikTok') ? '4/5' : '16/11' }}
              >
                {p.liveUrl ? (
                  // Mouse shortcut to the live site; keyboard and screen-reader users have the "Visit Website" link below.
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="block w-full h-full cursor-pointer">
                    {p.content}
                  </a>
                ) : (
                  <div className="w-full h-full">{p.content}</div>
                )}
                {p.badge && (
                  <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wide bg-navy/85 backdrop-blur-sm text-white rounded-md px-2 py-1">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-navy font-semibold text-sm">{p.title}</h3>
                <p className="text-slate text-xs mt-1">{p.type} · {p.meta}</p>
                {p.description && (
                  <p className="text-slate text-xs leading-relaxed mt-2">{p.description}</p>
                )}
                {p.technologies && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                    <span className="text-[10px] text-slate/70">Built with:</span>
                    {p.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-medium text-teal-dark">{t}</span>
                    ))}
                  </div>
                )}
                {p.caseStudy && (
                  <Link href={`/work/${p.caseStudy}`} className="inline-flex items-center gap-1.5 mt-3 mr-5 py-1 text-xs font-semibold text-navy hover:text-teal-dark transition-colors duration-200">
                    {p.caseLabel ?? 'View Case Study'} <ArrowRight size={13} aria-hidden="true" />
                    <span className="sr-only">: {p.title}</span>
                  </Link>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 py-1 text-xs font-semibold text-teal-dark hover:text-teal transition-colors duration-200"
                  >
                    Visit Website <ArrowUpRight size={13} aria-hidden="true" />
                    <span className="sr-only"> {p.title} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Branding & promotional graphics — honest placeholder, not fake work */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: secondaryProjects.length * 0.08, ease }}
            className="rounded-lg bg-white border border-dashed border-hairline overflow-hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 p-6" style={{ aspectRatio: '16/11' }}>
              <div className="w-12 h-12 rounded-lg bg-mint flex items-center justify-center">
                <Palette size={22} className="text-teal" aria-hidden="true" />
              </div>
              <p className="text-navy font-semibold text-sm">Branding &amp; Promotional Graphics</p>
              <p className="text-slate text-xs leading-relaxed max-w-[22ch]">
                Examples added here as real client projects are completed.
              </p>
            </div>
            <div className="p-4 border-t border-hairline">
              <h3 className="text-navy font-semibold text-sm">Coming soon</h3>
              <p className="text-slate text-xs mt-1">Branding · Promotional Graphics</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate text-sm mb-5">Want me to do this for your business? See the <Link href="/services" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">services I offer</Link>, or get in touch.</p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
          >
            Book a Consultation <ArrowRight size={15} />
          </motion.a>
        </div>
      </div>
    </section>
    </MotionConfig>
  )
}
