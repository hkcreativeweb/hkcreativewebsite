'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const testimonials = [
  {
    initials: 'TM',
    color: 'from-amber-400 to-orange-500',
    text: 'HK Creative built our restaurant website in less than a week and we saw a massive jump in table bookings coming straight through the site within the first month.',
    name: 'Tariq Mahmood',
    jobtitle: 'Restaurant Owner',
  },
  {
    initials: 'AH',
    color: 'from-teal-400 to-teal-600',
    text: 'They made us a TikTok video that went viral overnight and we had a queue out the door the very next evening. I could not believe it.',
    name: 'Abdul Hussain',
    jobtitle: 'Restaurant Owner',
  },
  {
    initials: 'AH',
    color: 'from-emerald-400 to-teal-500',
    text: 'From first message to live website in four days. The turnaround was unreal and the whole thing looks incredibly professional.',
    name: 'Amir Hussain',
    jobtitle: 'Solicitor',
  },
  {
    initials: 'ST',
    color: 'from-rose-400 to-pink-500',
    text: 'Our social media was dead before HK Creative took over. Now our reels get thousands of views and new customers find us on Instagram every single week.',
    name: 'Sarah Thompson',
    jobtitle: 'Business Owner',
  },
  {
    initials: 'ZA',
    color: 'from-orange-400 to-rose-500',
    text: 'Always on hand whenever we need anything. They feel less like an agency and more like a member of our own team. Could not recommend them enough.',
    name: 'Zara Ahmed',
    jobtitle: 'Boutique Owner',
  },
]

const stats = [
  { num: '50+', label: 'Projects Delivered', sub: 'across 6 industries' },
  { num: '5★', label: 'Client Rating', sub: 'on every engagement' },
  { num: '100%', label: 'On Time Delivery', sub: 'since day one' },
]

function TypewriterText({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!active) {
      setDisplayed('')
      return
    }
    setDisplayed('')
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 14)
    return () => clearInterval(id)
  }, [active, text])

  return <span>{displayed}</span>
}

function MobileAvatar({
  t, i, selected, setSelected,
}: {
  t: typeof testimonials[number]
  i: number
  selected: number | null
  setSelected: (v: number | null) => void
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
      onClick={() => setSelected(selected === i ? null : i)}
      className="flex flex-col items-center gap-2 rounded-lg"
      aria-label={`Read ${t.name}'s testimonial`}
    >
      <div className={`transition-transform duration-200 ${selected === i ? 'scale-110' : ''}`}>
        <Avatar t={t} size="sm" />
      </div>
      <p className={`text-[11px] font-semibold text-center leading-snug transition-colors ${selected === i ? 'text-navy' : 'text-slate'}`}>
        {t.name.split(' ')[0]}
      </p>
    </motion.button>
  )
}

function Avatar({ t, size }: { t: typeof testimonials[number]; size: 'sm' | 'lg' }) {
  const dim = size === 'lg' ? 'w-24 h-24 text-xl' : 'w-16 h-16 text-base'
  return (
    <div className={`${dim} rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center border-2 border-white shadow-lg shrink-0`}>
      <span className="font-bold text-white tracking-tight">{t.initials}</span>
    </div>
  )
}

export function TestimonialsBanner() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="w-full bg-cream py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Stats row */}
        <div className="grid grid-cols-3 pb-14 border-b border-hairline mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${i > 0 ? 'border-l border-hairline' : ''}`}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">{s.num}</span>
              <span className="text-xs md:text-sm font-semibold text-navy/80 mt-2 leading-tight">{s.label}</span>
              <span className="text-[10px] md:text-xs text-slate mt-1 hidden sm:block">{s.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-navy/70 text-base font-medium">Real businesses. Real results.</p>
          <p className="text-slate text-sm mt-1">Do not just take our word for it.</p>
        </motion.div>

        {/* ── Desktop: hover avatars with speech bubbles above ── */}
        <div className="hidden md:flex justify-center gap-14 lg:gap-20 pb-10" style={{ overflow: 'visible' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
              className="relative w-24 flex flex-col items-center gap-2.5 cursor-default"
              style={{ overflow: 'visible' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Desktop speech bubble */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute z-50 bg-white rounded-2xl p-5 shadow-xl border border-hairline"
                    style={{
                      width: 300,
                      bottom: 'calc(100% + 16px)',
                      left: 'calc(50% - 150px)',
                    }}
                  >
                    <p className="text-sm font-bold text-navy leading-none mb-0.5">{t.name}</p>
                    <p className="text-xs text-teal-dark font-semibold mb-3">{t.jobtitle}</p>
                    <p className="text-sm text-slate leading-relaxed">
                      &ldquo;<TypewriterText text={t.text} active={hovered === i} />&rdquo;
                    </p>
                    {/* Caret */}
                    <div
                      className="absolute bg-white border-r border-b border-hairline"
                      style={{
                        width: 14,
                        height: 14,
                        bottom: -6,
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        borderRadius: 2,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <Avatar t={t} size="lg" />
              <p className="text-navy text-xs font-semibold text-center leading-snug">{t.name}</p>
              <p className="text-slate text-[10px] text-center -mt-1.5">{t.jobtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop hint */}
        <p className="hidden md:block text-center text-slate/70 text-xs mt-2 mb-12">
          Hover over each avatar to read what our clients had to say
        </p>

        {/* ── Mobile: tap avatars, card expands below ── */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6 mb-6">
            {/* Row 1: first 3 */}
            <div className="flex justify-center gap-6">
              {testimonials.slice(0, 3).map((t, i) => (
                <MobileAvatar key={t.name} t={t} i={i} selected={selected} setSelected={setSelected} />
              ))}
            </div>
            {/* Row 2: last 2 centred */}
            <div className="flex justify-center gap-6">
              {testimonials.slice(3).map((t, i) => (
                <MobileAvatar key={t.name} t={t} i={i + 3} selected={selected} setSelected={setSelected} />
              ))}
            </div>
          </div>

          {/* Mobile expanded quote card */}
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-hairline mb-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar t={testimonials[selected]} size="sm" />
                  <div>
                    <p className="text-sm font-bold text-navy">{testimonials[selected].name}</p>
                    <p className="text-xs text-teal-dark font-semibold mt-0.5">{testimonials[selected].jobtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  &ldquo;{testimonials[selected].text}&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile hint */}
          <p className="text-center text-slate/70 text-xs mb-12">
            Tap an avatar to read what our clients had to say
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(21,154,156,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-white text-sm font-bold hover:bg-navy-dark transition-all duration-300 shadow-lg shadow-navy/15"
          >
            Let&apos;s Work Together
            <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  )
}
