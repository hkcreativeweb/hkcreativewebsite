'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Heart, Bookmark, Share2, MessageCircle, Sparkles, Palette } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Portfolio data model — typed so future real projects drop straight in ──
export type PortfolioCategory = 'Web Design' | 'Branding' | 'Promotional Graphics' | 'Social Media Design' | 'Digital Design'

export interface PortfolioProject {
  id: string
  title: string
  client?: string
  industry?: string
  category: PortfolioCategory
  type: string
  description: string
  services: string[]
  challenge?: string
  solution?: string
  /** Only ever set this when a genuine, verifiable result exists. */
  result?: string
  technologies?: string[]
  liveUrl?: string
  isConcept?: boolean
}

// ─── Fuel Crisis England — featured, real project ───────────────────────────
const fuelCrisisEngland: PortfolioProject = {
  id: 'fuel-crisis-england',
  title: 'Fuel Crisis England',
  client: 'Fuel Crisis England',
  industry: 'Informative',
  category: 'Web Design',
  type: 'Informative Website',
  description: 'An informative website providing accessible information and resources about fuel prices and fuel-related issues in England.',
  services: [
    'Live UK fuel price tracking',
    'Interactive cost breakdown tool',
    'Official government & ONS data',
    'Weekly price updates',
  ],
  technologies: ['Next.js', 'React', 'Tailwind'],
  liveUrl: 'https://www.fuelcrisisengland.co.uk/',
  isConcept: false,
}

// ─── Renovation Resolution — real project ───────────────────────────────────
const renovationResolution: PortfolioProject = {
  id: 'renovation-resolution',
  title: 'Renovation Resolution',
  client: 'Renovation Resolution',
  industry: 'Construction & Home Renovation',
  category: 'Web Design',
  type: 'Full website design & build',
  description: 'A professional UK based renovation and construction website built to showcase services, completed projects, and the company itself, with clear calls-to-action that turn visitors into enquiries.',
  services: [
    'Modern responsive design',
    'Service-focused structure',
    'Project portfolio presentation',
    'Mobile-friendly design',
    'Professional branding',
    'Contact & enquiry forms',
  ],
  challenge: 'A growing renovation and construction business needed a professional website that could showcase completed work, explain services clearly, and turn visitors into enquiries.',
  solution: 'A custom-built site with dedicated project galleries, clear service pages and prominent calls-to-action, built for speed and easy updates.',
  technologies: ['Next.js', 'React', 'Tailwind'],
  liveUrl: 'https://renovation-resolution1.vercel.app/',
  isConcept: false,
}

function RRBrowserMockup() {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #0b2216 0%, #153f2a 55%, #0b2216 100%)' }}
    >
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#7fa32a]/20 blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#a5c3a5]/10 blur-[60px] pointer-events-none" />

      {/* Nav */}
      <div className="shrink-0 flex items-center justify-between px-4 py-2.5 relative z-10" style={{ borderBottom: '1px solid rgba(197,215,195,0.15)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/portfolio/rr-logo-light.svg" alt="Renovation Resolution" className="h-3" />
        <div className="hidden sm:flex gap-3 text-[5.5px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#a5c3a5' }}>
          <span>Services</span><span>Projects</span><span>About</span><span>Contact</span>
        </div>
        <span
          className="text-[5.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: '#c3d7c3', color: '#0b2216' }}
        >
          Get a Quote
        </span>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-2.5 text-[5px] font-semibold"
          style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
        >
          Residential &amp; Commercial Specialists
        </span>
        <p className="font-black leading-tight" style={{ fontSize: '13px', color: '#fff' }}>
          Building Quality,<br />
          <span style={{ color: '#a5c3a5' }}>Creating Trust</span>
        </p>
        <p className="mt-2 text-[5px] max-w-[220px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Premium renovations, extensions and building work delivered on time, on budget, built to last.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[5px] font-bold px-3 py-1.5 rounded-md" style={{ background: '#c3d7c3', color: '#0b2216' }}>
            Request Your Free Quote
          </span>
          <span className="text-[5px] font-semibold px-3 py-1.5 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
            Speak With Our Team
          </span>
        </div>
      </div>

      {/* Project strip */}
      <div className="shrink-0 grid grid-cols-3 gap-[1.5px] relative z-10" style={{ height: '26%' }}>
        {['/images/portfolio/rr-kitchen.jpg', '/images/portfolio/rr-bathroom.jpg', '/images/portfolio/rr-extension.jpg'].map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="Renovation Resolution completed project" className="w-full h-full object-cover" />
        ))}
      </div>
    </div>
  )
}

// ─── Social media — real client work ───────────────────────────────────────
const socialVideos = [
  { img: '/images/social-pathaans.jpeg', name: "Pathaan's", sub: 'Afghan & Pakistani Cuisine', likes: '3,627', comments: '130', saves: '970', shares: '1,885', views: '100k+' },
  { img: '/images/social-adore.jpeg', name: 'Adore Kitchen', sub: 'British Asian Kitchen, Harrow', likes: '2,607', comments: '102', saves: '833', shares: '1,944', views: '70k+' },
  { img: '/images/social-cookiejar.jpeg', name: 'Cookie Jar London', sub: 'Artisan Cookies, Slough', likes: '2,961', comments: '35', saves: '628', shares: '1,520', views: '85k+' },
]

function SocialFrame() {
  return (
    <div className="w-full h-full flex items-end justify-center gap-2 p-3" style={{ background: '#060606' }}>
      {socialVideos.map((v) => (
        <div key={v.name} className="flex flex-col items-center gap-1.5" style={{ width: '31%' }}>
          <div className="relative w-full rounded-xl border-[2px] border-[#3a3a3c] bg-black overflow-hidden" style={{ aspectRatio: '9/17' }}>
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-black rounded-full z-20" />
            <div className="absolute top-3 left-1 z-20 bg-black/70 rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
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
const PakoraMockup = (
  <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(to bottom, #060401, #0a0704)' }}>
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(180,140,60,0.15)' }}>
      <div className="flex gap-3 text-[5.5px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#8a6a30' }}>
        <span>Menu</span><span>About</span>
      </div>
      <p className="font-black tracking-[0.3em]" style={{ fontSize: '11px', color: '#d4a84a', fontFamily: 'Georgia, serif' }}>PAKORA</p>
      <div className="flex gap-3 text-[5.5px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#8a6a30' }}>
        <span>Reserve</span><span>Events</span>
      </div>
    </div>
    <div className="shrink-0 relative overflow-hidden" style={{ height: '46%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=90" alt="Pakora restaurant concept design" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,4,1,1) 0%, rgba(6,4,1,0.4) 55%, rgba(6,4,1,0.1) 100%)' }} />
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <p className="font-black text-white leading-tight" style={{ fontSize: '15px', fontFamily: 'Georgia, serif' }}>A Feast for<br />the Senses</p>
      </div>
    </div>
    <div className="flex-1 overflow-hidden px-4 py-2.5">
      <p className="text-center text-[5.5px] tracking-[0.4em] font-bold uppercase mb-2.5" style={{ color: '#8a6a30' }}>Signature Dishes</p>
      {[
        { name: 'Lamb Karahi', price: '£16.95' },
        { name: 'Nihari', price: '£17.95' },
        { name: 'Mixed Grill Platter', price: '£24.95' },
      ].map(d => (
        <div key={d.name} className="flex items-center justify-between py-1.5" style={{ borderBottom: '1px solid rgba(180,140,60,0.1)' }}>
          <p className="text-[7px] font-bold" style={{ color: '#e8d5a8', fontFamily: 'Georgia, serif' }}>{d.name}</p>
          <span className="text-[7.5px] font-black" style={{ color: '#d4a84a' }}>{d.price}</span>
        </div>
      ))}
    </div>
  </div>
)

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
      <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=90" alt="Modest Luxe fashion concept design" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,16,10,0.85) 0%, rgba(20,16,10,0.15) 60%, transparent 100%)' }} />
      <div className="absolute bottom-3 left-4">
        <p className="font-black text-white leading-tight" style={{ fontSize: '13px', fontFamily: 'Georgia, serif' }}>Effortlessly Modest.<br />Unapologetically Luxe.</p>
      </div>
    </div>
    <div className="flex-1 overflow-hidden px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: 'Evening Abaya', price: '£129', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80' },
          { name: 'Floral Kaftan', price: '£98', img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=300&q=80' },
          { name: 'Lace Dress', price: '£112', img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=300&q=80' },
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
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=85" alt="Horizon Travel email concept design" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #08122a 0%, transparent 65%)' }} />
      <div className="absolute bottom-2 left-4">
        <p className="text-[13px] font-black text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Escape to<br />Paradise</p>
      </div>
    </div>
    <div className="flex-1 px-4 py-3 overflow-hidden">
      <div className="grid grid-cols-2 gap-2">
        {[
          { dest: 'Maldives', price: 'From £1,299', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=75' },
          { dest: 'Santorini', price: 'From £899', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&q=75' },
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

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="w-full h-full rounded-t-xl overflow-hidden bg-white border border-hairline flex flex-col">
      <div className="shrink-0 flex items-center gap-1.5 px-3 py-2.5 bg-[#F5F6F4] border-b border-hairline">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-3 bg-white rounded-md h-5 text-[10px] text-slate flex items-center px-2.5 truncate border border-hairline">
          {url}
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

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
}

const secondaryProjects: SecondaryProject[] = [
  {
    title: renovationResolution.title,
    category: renovationResolution.category,
    type: `${renovationResolution.industry} Website`,
    meta: 'Live project',
    badge: null,
    liveUrl: renovationResolution.liveUrl,
    description: renovationResolution.description,
    technologies: renovationResolution.technologies,
    content: (
      <BrowserChrome url="renovation-resolution1.vercel.app">
        <RRBrowserMockup />
      </BrowserChrome>
    ),
    isEmail: false,
  },
  {
    title: 'Local Restaurant TikToks',
    category: 'Social Media Design',
    type: 'Social Media Management',
    meta: '70k–100k+ views · 2025',
    badge: null,
    content: <SocialFrame />,
    isEmail: false,
  },
  {
    title: 'Pakora Restaurant',
    category: 'Web Design',
    type: 'Restaurant Website',
    meta: 'Concept design · 2025',
    badge: 'Concept',
    content: <BrowserChrome url="pakorarestaurant.co.uk">{PakoraMockup}</BrowserChrome>,
    isEmail: false,
  },
  {
    title: 'Modest Luxe',
    category: 'Web Design',
    type: 'E-commerce · Fashion',
    meta: 'Concept design · 2025',
    badge: 'Concept',
    content: <BrowserChrome url="modestluxe.co.uk">{ModestLuxeMockup}</BrowserChrome>,
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
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <section id="work" className="bg-cream py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-mint/60 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/25 bg-mint text-teal-dark text-[11px] font-semibold uppercase tracking-widest mb-5">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-3 tracking-tight">
            What I&apos;ve built
          </h2>
          <p className="text-slate max-w-md mx-auto text-sm leading-relaxed">
            Real projects, real results. This is the standard every client gets.
          </p>
        </motion.div>

        {/* ── Featured project: Fuel Crisis England ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} className="text-teal" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-teal-dark">Featured Project</span>
          </div>

          <div className="rounded-3xl bg-white border border-hairline shadow-[0_4px_28px_rgba(23,32,51,0.06)] p-6 lg:p-10 grid lg:grid-cols-5 gap-10 items-center">

            {/* Device */}
            <div className="lg:col-span-3 relative">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-t-xl shadow-lg shadow-navy/10"
                style={{ aspectRatio: '16/10' }}
              >
                <BrowserChrome url="fuelcrisisengland.co.uk">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/portfolio/fce-og.png" alt="Fuel Crisis England website preview" className="w-full h-full object-cover" />
                </BrowserChrome>
              </motion.div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 pt-10 sm:pt-0">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-teal-dark bg-mint border border-teal/20 rounded-full px-3 py-1 mb-4">
                {fuelCrisisEngland.industry} Website
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-3 tracking-tight">{fuelCrisisEngland.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-6">
                {fuelCrisisEngland.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {fuelCrisisEngland.services.map((f) => (
                  <span key={f} className="text-[11px] font-medium text-navy bg-[#F5F6F4] border border-hairline rounded-full px-3 py-1.5">
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
              <a
                href={fuelCrisisEngland.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
              >
                Visit Website <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Secondary work grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondaryProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-hairline overflow-hidden group shadow-[0_2px_12px_rgba(23,32,51,0.04)] hover:border-teal/25 transition-colors duration-300"
            >
              <div className={`relative overflow-hidden ${p.isEmail ? 'bg-white' : ''}`} style={{ aspectRatio: p.title.includes('TikTok') ? '4/5' : '16/11' }}>
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
                  {p.content}
                </div>
                {p.badge && (
                  <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wide bg-navy/85 backdrop-blur-sm text-white rounded-full px-2 py-1">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-navy font-semibold text-sm">{p.title}</h4>
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
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-teal-dark hover:text-teal transition-colors duration-200"
                  >
                    Visit Website <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Branding & promotional graphics — honest placeholder, not fake work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: secondaryProjects.length * 0.08, ease }}
            className="rounded-2xl bg-white border border-dashed border-hairline overflow-hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 p-6" style={{ aspectRatio: '16/11' }}>
              <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center">
                <Palette size={22} className="text-teal" aria-hidden="true" />
              </div>
              <p className="text-navy font-semibold text-sm">Branding &amp; Promotional Graphics</p>
              <p className="text-slate text-xs leading-relaxed max-w-[22ch]">
                Examples added here as real client projects are completed.
              </p>
            </div>
            <div className="p-4 border-t border-hairline">
              <h4 className="text-navy font-semibold text-sm">Coming soon</h4>
              <p className="text-slate text-xs mt-1">Branding · Promotional Graphics</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate text-sm mb-5">Want us to do this for your business?</p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark shadow-lg shadow-navy/15 transition-colors duration-200"
          >
            Book a Consultation <ArrowRight size={15} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
