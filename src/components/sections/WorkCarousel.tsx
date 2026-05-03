'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Bookmark, Share2, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type DeviceType = 'browser' | 'email' | 'social'

interface Project {
  title: string
  category: string
  year: string
  device: DeviceType
  content?: React.ReactNode
}

// ─── Social media data ────────────────────────────────────────────────────────
const socialVideos = [
  {
    img: '/images/social-pathaans.jpeg',
    name: "Pathaan's",
    sub: 'Afghan & Pakistani Cuisine',
    likes: '3,627',
    comments: '130',
    saves: '970',
    shares: '1,885',
    views: '100k+',
  },
  {
    img: '/images/social-adore.jpeg',
    name: 'Adore Kitchen',
    sub: 'British Asian Kitchen, Harrow',
    likes: '2,607',
    comments: '102',
    saves: '833',
    shares: '1,944',
    views: '70k+',
  },
  {
    img: '/images/social-cookiejar.jpeg',
    name: 'Cookie Jar London',
    sub: 'Artisan Cookies, Slough',
    likes: '2,961',
    comments: '35',
    saves: '628',
    shares: '1,520',
    views: '85k+',
  },
]

// ─── Social frame ─────────────────────────────────────────────────────────────
function SocialFrame() {
  return (
    <div className="w-full flex flex-col gap-5">
      {/* Phones row */}
      <div className="flex items-end justify-center gap-3 sm:gap-5">
        {socialVideos.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-3" style={{ width: 'min(32%, 210px)' }}>
            {/* Phone */}
            <div
              className="relative w-full rounded-[2rem] border-[3.5px] border-[#3a3a3c] bg-black overflow-hidden shadow-2xl shadow-purple-900/40"
              style={{ aspectRatio: '9/19.5' }}
            >
              {/* Dynamic island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[42px] h-[14px] bg-black rounded-full z-20" />
              {/* Views badge */}
              <div className="absolute top-5 left-2 z-20 bg-black/70 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                <span className="text-[7px] font-black text-white">{v.views}</span>
                <span className="text-[6px] text-white/60">views</span>
              </div>
              <img
                src={v.img}
                alt={v.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Restaurant name */}
            <div className="text-center">
              <p className="text-white text-[10px] font-bold leading-tight">{v.name}</p>
              <p className="text-neutral-500 text-[8px] mt-0.5">{v.sub}</p>
            </div>

            {/* Stat badges */}
            <div className="w-full grid grid-cols-2 gap-1">
              <div className="flex items-center justify-center gap-1 bg-red-500/10 border border-red-500/20 rounded-lg py-1.5">
                <Heart size={9} className="text-red-400 fill-red-400" />
                <span className="text-[9px] font-bold text-red-400">{v.likes}</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg py-1.5">
                <Bookmark size={9} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[9px] font-bold text-yellow-400">{v.saves}</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-purple-500/10 border border-purple-500/20 rounded-lg py-1.5">
                <Share2 size={9} className="text-purple-400" />
                <span className="text-[9px] font-bold text-purple-400">{v.shares}</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-white/5 border border-white/10 rounded-lg py-1.5">
                <MessageCircle size={9} className="text-white/40" />
                <span className="text-[9px] font-bold text-white/40">{v.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Pakora Restaurant (ultra-luxe) ───────────────────────────────────────────
const PakoraMockup = (
  <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(to bottom, #060401, #0a0704)' }}>
    {/* Top award strip */}
    <div className="shrink-0 text-center py-1" style={{ background: 'linear-gradient(90deg, #0a0704, #1a1205, #0a0704)' }}>
      <p className="text-[5px] tracking-[0.5em] font-bold uppercase" style={{ color: '#c9a96e' }}>
        ✦ &nbsp; Award Winning · Est. Slough 2023 &nbsp; ✦
      </p>
    </div>

    {/* Nav */}
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(180,140,60,0.15)' }}>
      <div className="flex gap-3 text-[5.5px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#8a6a30' }}>
        <span>Menu</span><span>About</span>
      </div>
      <div className="text-center">
        <p className="font-black tracking-[0.3em]" style={{ fontSize: '11px', color: '#d4a84a', fontFamily: 'Georgia, serif' }}>PAKORA</p>
        <div className="flex items-center justify-center gap-1.5 mt-0.5">
          <div className="h-px w-4" style={{ background: '#6a4f20' }} />
          <span className="text-[4.5px] tracking-[0.25em] uppercase" style={{ color: '#6a4f20' }}>Restaurant</span>
          <div className="h-px w-4" style={{ background: '#6a4f20' }} />
        </div>
      </div>
      <div className="flex gap-3 text-[5.5px] font-semibold tracking-[0.15em] uppercase" style={{ color: '#8a6a30' }}>
        <span>Reserve</span><span>Events</span>
      </div>
    </div>

    {/* Hero image */}
    <div className="shrink-0 relative overflow-hidden" style={{ height: '33%' }}>
      <img
        src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=90"
        alt="food"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,4,1,1) 0%, rgba(6,4,1,0.4) 55%, rgba(6,4,1,0.1) 100%)' }} />
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <p className="text-[5px] tracking-[0.45em] font-semibold uppercase mb-1.5" style={{ color: '#c9a96e' }}>Authentic Pakistani Cuisine</p>
        <p className="font-black text-white leading-tight" style={{ fontSize: '15px', fontFamily: 'Georgia, serif' }}>A Feast for<br />the Senses</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-px w-8" style={{ background: 'rgba(180,140,60,0.4)' }} />
          <span style={{ fontSize: '8px', color: '#c9a96e' }}>✦</span>
          <div className="h-px w-8" style={{ background: 'rgba(180,140,60,0.4)' }} />
        </div>
      </div>
    </div>

    {/* Ornamental divider */}
    <div className="shrink-0 flex items-center justify-center gap-2 py-2" style={{ borderBottom: '1px solid rgba(180,140,60,0.12)' }}>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(180,140,60,0.3))' }} />
      <span style={{ fontSize: '9px', color: '#8a6a30' }}>✦ ✦ ✦</span>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(180,140,60,0.3))' }} />
    </div>

    {/* Signature menu */}
    <div className="flex-1 overflow-hidden px-4 py-2">
      <p className="text-center text-[5.5px] tracking-[0.4em] font-bold uppercase mb-2.5" style={{ color: '#8a6a30' }}>
        Signature Dishes
      </p>
      <div className="space-y-2">
        {[
          { name: 'Lamb Karahi', desc: 'Slow-cooked, freshly ground whole spices', price: '£16.95', chef: true },
          { name: 'Nihari', desc: 'Braised beef shank, overnight slow cook', price: '£17.95', chef: false },
          { name: 'Chicken Tikka Masala', desc: 'Tandoor chicken, rich tomato masala', price: '£14.95', chef: false },
          { name: 'Mixed Grill Platter', desc: 'Seekh kebab, shami, tikka, ribs', price: '£24.95', chef: true },
        ].map(d => (
          <div key={d.name} className="flex items-start justify-between py-1.5" style={{ borderBottom: '1px solid rgba(180,140,60,0.1)' }}>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-[7px] font-bold" style={{ color: '#e8d5a8', fontFamily: 'Georgia, serif' }}>{d.name}</p>
                {d.chef && (
                  <span className="text-[4.5px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded" style={{ background: 'rgba(180,140,60,0.15)', color: '#c9a96e', border: '1px solid rgba(180,140,60,0.25)' }}>
                    Chef&apos;s Pick
                  </span>
                )}
              </div>
              <p className="text-[5px] mt-0.5 italic" style={{ color: '#5a4a28' }}>{d.desc}</p>
            </div>
            <span className="text-[7.5px] font-black ml-3 shrink-0" style={{ color: '#d4a84a' }}>{d.price}</span>
          </div>
        ))}
      </div>

      {/* Reserve CTA */}
      <div className="mt-2.5 text-center">
        <span
          className="inline-block text-[5.5px] font-black tracking-[0.25em] uppercase px-4 py-1.5"
          style={{ border: '1px solid rgba(180,140,60,0.4)', color: '#c9a96e', letterSpacing: '0.2em' }}
        >
          Reserve a Table
        </span>
      </div>
    </div>
  </div>
)

// ─── Afrin Clothing (Modest Luxe) ─────────────────────────────────────────────
const AfrinClothingMockup = (
  <div className="w-full h-full overflow-hidden flex flex-col" style={{ background: '#fdf9f5' }}>
    {/* Announcement */}
    <div className="shrink-0 text-center py-1" style={{ background: '#1a1410' }}>
      <p className="text-[5.5px] font-semibold tracking-[0.3em] uppercase" style={{ color: '#c4974e' }}>
        Complimentary UK Delivery · All Orders
      </p>
    </div>

    {/* Nav */}
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid #ede8e0' }}>
      <div className="flex gap-3 text-[5.5px] tracking-widest uppercase font-medium" style={{ color: '#a09080' }}>
        <span>Abayas</span><span>Kaftans</span><span>Prayer</span>
      </div>
      <div className="text-center">
        <p className="font-black" style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#1a1410' }}>MODEST LUXE</p>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <div className="h-px w-3" style={{ background: '#c4974e' }} />
          <p className="text-[4px] tracking-[0.3em] uppercase font-bold" style={{ color: '#c4974e' }}>est. 2023</p>
          <div className="h-px w-3" style={{ background: '#c4974e' }} />
        </div>
      </div>
      <div className="flex gap-3 text-[5.5px] tracking-widest uppercase font-medium" style={{ color: '#a09080' }}>
        <span>Search</span><span>Bag</span>
      </div>
    </div>

    {/* Full-width hero — model shot */}
    <div className="shrink-0 relative overflow-hidden" style={{ height: '43%' }}>
      <img
        src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=90"
        alt="modest fashion model"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 20%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,16,10,0.85) 0%, rgba(20,16,10,0.15) 60%, transparent 100%)' }} />
      <div className="absolute bottom-3 left-4">
        <p className="text-[5.5px] tracking-[0.35em] uppercase font-semibold mb-1" style={{ color: '#c4974e' }}>New Collection · 2025</p>
        <p className="font-black text-white leading-tight" style={{ fontSize: '14px', fontFamily: 'Georgia, serif' }}>Effortlessly Modest.<br />Unapologetically Luxe.</p>
        <span
          className="mt-2 inline-block text-[6px] font-bold tracking-widest uppercase px-3 py-0.5"
          style={{ border: '1px solid rgba(255,255,255,0.7)', color: 'white' }}
        >
          Explore Collection
        </span>
      </div>
    </div>

    {/* Category row */}
    <div className="shrink-0 flex" style={{ borderBottom: '1px solid #ede8e0' }}>
      {['New In', 'Abayas', 'Kaftans', 'Prayer Wear', 'Sale'].map((c, i) => (
        <div
          key={c}
          className="flex-1 text-center py-1.5 text-[5.5px] font-bold tracking-widest uppercase"
          style={{
            borderRight: i < 4 ? '1px solid #ede8e0' : 'none',
            background: i === 0 ? '#1a1410' : 'transparent',
            color: i === 0 ? '#c4974e' : '#b0a090',
          }}
        >
          {c}
        </div>
      ))}
    </div>

    {/* Product grid */}
    <div className="flex-1 overflow-hidden px-3 py-2">
      <p className="text-center text-[5.5px] tracking-[0.35em] uppercase font-semibold mb-2" style={{ color: '#b0a090' }}>
        Best Sellers
      </p>
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            name: 'Evening Abaya',
            price: '£129',
            img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80',
            pos: 'center top',
          },
          {
            name: 'Floral Kaftan',
            price: '£98',
            img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=300&q=80',
            pos: 'center top',
          },
          {
            name: 'Lace Occasion Dress',
            price: '£112',
            img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=300&q=80',
            pos: 'center top',
          },
        ].map(p => (
          <div key={p.name} className="flex flex-col">
            <div className="w-full rounded-sm mb-1.5 overflow-hidden" style={{ aspectRatio: '2/3', background: '#f0ebe4' }}>
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" style={{ objectPosition: p.pos }} />
            </div>
            <p className="text-[5.5px] font-medium leading-none" style={{ color: '#7a6a5a' }}>{p.name}</p>
            <p className="text-[6.5px] font-black mt-0.5" style={{ color: '#1a1410' }}>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Horizon Travel Email ──────────────────────────────────────────────────────
const TravelEmailMockup = (
  <div className="w-full h-full bg-white overflow-hidden flex flex-col">
    <div className="shrink-0 flex items-center justify-between px-4 py-2.5" style={{ background: 'linear-gradient(135deg, #08122a, #142d66)' }}>
      <p className="text-[10px] font-black tracking-[0.3em] text-white">HORIZON</p>
      <p className="text-[5px] tracking-[0.3em] font-semibold uppercase" style={{ color: 'rgba(147,197,253,0.6)' }}>Travel · Est. 2019</p>
    </div>
    <div className="shrink-0 relative overflow-hidden" style={{ height: '30%' }}>
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=85" alt="beach" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #08122a 0%, transparent 65%)' }} />
      <div className="absolute bottom-2 left-4">
        <p className="text-[5.5px] tracking-widest uppercase mb-0.5 font-semibold" style={{ color: 'rgba(147,197,253,0.8)' }}>Summer 2025</p>
        <p className="text-[13px] font-black text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Escape to<br />Paradise</p>
      </div>
    </div>
    <div className="shrink-0 px-4 pt-3 pb-2">
      <p className="text-[6.5px] leading-relaxed" style={{ color: '#6b7280' }}>
        Your dream getaway is closer than you think. We&apos;ve hand-picked the finest destinations for Summer 2025.
      </p>
    </div>
    <div className="flex-1 px-4 overflow-hidden">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { dest: 'Maldives', price: 'From £1,299', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=75', tag: 'All-Inclusive' },
          { dest: 'Santorini', price: 'From £899', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&q=75', tag: 'Boutique' },
          { dest: 'Dubai', price: 'From £599', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&q=75', tag: 'City Break' },
          { dest: 'Bali', price: 'From £749', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=75', tag: 'Luxury' },
        ].map(d => (
          <div key={d.dest} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img src={d.img} className="w-full h-full object-cover" alt={d.dest} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }} />
            <div className="absolute top-1 right-1 rounded-full px-1.5 py-0.5" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}>
              <p className="text-[4.5px] text-white font-semibold">{d.tag}</p>
            </div>
            <div className="absolute bottom-1.5 left-2">
              <p className="text-[7px] font-black text-white leading-none">{d.dest}</p>
              <p className="text-[5.5px] font-bold" style={{ color: '#93c5fd' }}>{d.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-2">
        <span className="inline-block text-[6px] font-black text-white px-5 py-1.5 rounded-full tracking-widest" style={{ background: 'linear-gradient(135deg, #08122a, #1a3d8f)' }}>
          EXPLORE ALL DESTINATIONS
        </span>
      </div>
    </div>
    <div className="shrink-0 text-center py-1.5" style={{ borderTop: '1px solid #f3f4f6' }}>
      <p className="text-[5px]" style={{ color: '#d1d5db' }}>© 2025 Horizon Travel · Unsubscribe · Privacy Policy</p>
    </div>
  </div>
)

// ─── Projects (Social first) ──────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: 'Local Restaurant TikToks',
    category: 'Social Media Management · 70k–100k+ views',
    year: '2025',
    device: 'social',
  },
  {
    title: 'Pakora Restaurant',
    category: 'Restaurant Website',
    year: '2025',
    device: 'browser',
    content: PakoraMockup,
  },
  {
    title: 'Modest Luxe',
    category: 'E-commerce · Modest Luxury Fashion',
    year: '2025',
    device: 'browser',
    content: AfrinClothingMockup,
  },
  {
    title: 'Horizon Travel',
    category: 'Email Marketing Campaign',
    year: '2025',
    device: 'email',
    content: TravelEmailMockup,
  },
]

// ─── Beam rays ────────────────────────────────────────────────────────────────
const BEAM_CONFIG = Array.from({ length: 16 }, (_, i) => ({
  angle: (i * 360) / 16,
  length: 260 + (i % 4) * 80,
  color: ['rgba(124,58,237,0.55)', 'rgba(139,92,246,0.35)', 'rgba(167,139,250,0.22)', 'rgba(124,58,237,0.15)'][i % 4],
  width: i % 4 === 0 ? 2.5 : 1.2,
  duration: 3.2 + (i % 5) * 0.65,
  delay: (i / 16) * 3.5,
}))

function BeamGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-700/8 blur-[130px]" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/12 blur-[70px]" />
      {BEAM_CONFIG.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${b.width}px`,
            height: `${b.length}px`,
            background: `linear-gradient(to bottom, transparent 0%, ${b.color} 45%, transparent 100%)`,
            transform: `rotate(${b.angle}deg)`,
            transformOrigin: 'top center',
            top: '50%',
            left: '50%',
            marginLeft: `-${b.width / 2}px`,
            filter: 'blur(1.2px)',
          }}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ─── Device frames ────────────────────────────────────────────────────────────
function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/30 bg-[#1c1c1e]">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#2c2c2e] border-b border-white/[0.08]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-3 bg-[#1c1c1e] rounded-md h-5 text-[10px] text-neutral-600 flex items-center px-2.5">
          hkcreativeweb.co.uk
        </div>
      </div>
      <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
        {project.content}
      </div>
    </div>
  )
}

function EmailFrame({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/30 bg-[#1c1c1e]">
      <div className="px-4 py-3 bg-[#2c2c2e] border-b border-white/[0.08] space-y-1">
        <div className="text-[10px]">
          <span className="text-neutral-500">From: </span>
          <span className="text-neutral-400">hello@horizontravel.co.uk</span>
        </div>
        <div className="text-[10px]">
          <span className="text-neutral-500">Subject: </span>
          <span className="text-neutral-300 font-medium">Your Summer 2025 Escapes Are Here ✈</span>
        </div>
      </div>
      <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
        {project.content}
      </div>
    </div>
  )
}

function DeviceFrame({ project }: { project: Project }) {
  if (project.device === 'social') return <SocialFrame />
  if (project.device === 'email') return <EmailFrame project={project} />
  return <BrowserFrame project={project} />
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
}

export function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function goTo(index: number, dir: number) {
    setDirection(dir)
    setActiveIndex(index)
  }

  const prev = () => goTo((activeIndex - 1 + projects.length) % projects.length, -1)
  const next = () => goTo((activeIndex + 1) % projects.length, 1)

  if (!mounted) return null

  const project = projects[activeIndex]

  return (
    <section id="work" className="bg-[#060606] py-20 lg:py-28 relative overflow-hidden">
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          What we&apos;ve built
        </h2>
        <p className="text-neutral-500 max-w-sm mx-auto text-sm leading-relaxed">
          A few of the projects we&apos;re proud of.
        </p>
      </div>

      <div className="relative flex items-center justify-center px-14 sm:px-20 lg:px-32">
        <BeamGlow />

        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-3 sm:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative z-10 w-full max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DeviceFrame project={project} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="absolute right-3 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-8 px-6"
        >
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <p className="text-neutral-500 text-sm mt-1">{project.category} · {project.year}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-1.5 mt-7">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 h-1.5 bg-purple-500' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-16 px-6">
        <p className="text-neutral-500 text-sm mb-5">Want us to do this for your business?</p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 shadow-lg shadow-purple-600/25 transition-colors duration-200"
        >
          Start a Project <ArrowRight size={15} />
        </motion.a>
      </div>
    </section>
  )
}
