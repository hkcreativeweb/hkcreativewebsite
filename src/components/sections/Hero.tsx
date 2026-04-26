'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedBeams } from '@/components/ui/animated-beams'

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

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#7c3aed" />

      {/* Parallax grid */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </motion.div>

      <AnimatedBeams />

      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-36 pb-24 lg:py-24 gap-0">

          {/* ── Left: text ── */}
          <div className="flex-none w-full lg:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[11px] font-semibold uppercase tracking-widest mb-8">
                Web Design &amp; Digital Studio
              </span>
            </motion.div>

            {/* Three-part headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Line 1 — static */}
              <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-white">
                Your competitors have a website.
              </p>

              {/* Line 2 — rotating, block-level with extra bottom padding to prevent cut-off */}
              <div className="relative pb-10 overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={ROTATING_PHRASES[phraseIndex]}
                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400"
                  >
                    {ROTATING_PHRASES[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Line 3 — static */}
              <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-white -mt-6">
                Yours will be different.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-base text-neutral-500 max-w-sm leading-relaxed"
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
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-100 transition-all duration-200 shadow-lg shadow-white/5"
              >
                See Our Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-200"
              >
                Start a Project
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 flex items-center justify-center lg:justify-start gap-10"
            >
              {[
                { num: '50+', label: 'Projects Delivered' },
                { num: '100%', label: 'Client Satisfaction' },
                { num: '5★', label: 'Rated Studio' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">{s.num}</div>
                  <div className="text-[11px] text-neutral-600 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: robot ── */}
          <div className="flex-1 w-full h-[420px] sm:h-[500px] lg:h-[680px] relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
