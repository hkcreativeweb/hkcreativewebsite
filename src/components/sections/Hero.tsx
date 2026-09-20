'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

// Three-part headline: static · rotating · static
const ROTATING_PHRASES = [
  "It took 6 months to build.",
  "Nobody can find it on Google.",
  "It looks like their nephew made it.",
  "It hasn't gotten them a single customer.",
]

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const id = setInterval(() => setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length), 2500)
    return () => clearInterval(id)
  }, [])

  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '12%'])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen w-full bg-cream overflow-hidden flex items-center">
      {/* Soft ambient mint glow — restrained, not neon */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-mint/70 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-mint/50 blur-[100px] pointer-events-none" />

      {/* Parallax grid */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(23,32,51,0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(23,32,51,0.9) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-36 pb-24 lg:py-24 gap-0">

          {/* ── Left: text ── */}
          <div className="flex-none w-full lg:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/25 bg-mint text-teal-dark text-[11px] font-semibold uppercase tracking-widest mb-8">
                Digital Creative Studio
              </span>
            </motion.div>

            {/* Three-part headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Line 1 — static */}
              <span className="block text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-navy">
                Your competitors have a website.
              </span>

              {/* Line 2 — rotating, block-level with extra bottom padding to prevent cut-off */}
              <span className="relative block pb-10 overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_PHRASES[phraseIndex]}
                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="block text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-teal"
                  >
                    {ROTATING_PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>

              {/* Line 3 — static */}
              <span className="block text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-navy -mt-6">
                Yours will be different.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-base text-slate max-w-sm leading-relaxed"
            >
              We build websites, manage social media, and set up the digital tools your business actually needs. Fast, affordable, and done properly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              className="mt-9 flex flex-col sm:flex-row gap-3 items-center lg:items-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-all duration-200 shadow-lg shadow-navy/10"
              >
                Book a Consultation
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-hairline text-navy text-sm font-medium hover:border-teal/40 hover:bg-mint transition-all duration-200"
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* ── Right: robot ── */}
          <div className="flex-1 w-full h-[420px] sm:h-[500px] lg:h-[680px] relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 200 200" width="55%" height="55%" style={{ maxWidth: 260 }}>
                    <circle cx="100" cy="100" r="96" fill="#E5F5F3" />
                    <rect x="92" y="34" width="16" height="20" rx="8" fill="#5E6878" />
                    <circle cx="100" cy="28" r="9" fill="#159A9C" />
                    <rect x="52" y="54" width="96" height="82" rx="24" fill="#172033" />
                    <rect x="66" y="70" width="68" height="46" rx="14" fill="#FAFAF7" />
                    <circle cx="88" cy="93" r="8" fill="#159A9C" />
                    <circle cx="112" cy="93" r="8" fill="#159A9C" />
                    <rect x="60" y="146" width="80" height="30" rx="15" fill="#172033" />
                    <rect x="30" y="150" width="26" height="14" rx="7" fill="#172033" />
                    <rect x="144" y="150" width="26" height="14" rx="7" fill="#172033" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
