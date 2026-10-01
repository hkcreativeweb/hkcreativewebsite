'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'

const ROBOT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

// Static robot shown while the 3D scene is deferred, if it fails, or when motion is reduced
function RobotFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" width="55%" height="55%" style={{ maxWidth: 260 }} role="img" aria-label="HK Creative robot">
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
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  // Defer the heavy 3D runtime until after first paint so text and CTAs load first
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 600)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <section id="home" className="relative w-full bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-10 lg:pt-28 lg:pb-12 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <p
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-teal-dark mb-5"
          >
            Content <span aria-hidden="true">•</span> Websites <span aria-hidden="true">•</span> Digital Marketing
          </p>

          <h1
            className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.025em] text-navy"
          >
            Websites. Social. Digital.
            <span className="block text-teal-dark">Done properly.</span>
          </h1>

          <p
            className="mt-5 text-base lg:text-lg text-slate max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            We build useful websites. We create digital content. We help businesses market themselves online.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
            >
              Book a Consultation
              <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-navy/15 text-navy text-sm font-semibold hover:border-navy/40 hover:bg-white transition-colors duration-200"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Robot — the visual itself, no decoration around it */}
        <div className="lg:col-span-6 w-full h-[260px] sm:h-[360px] lg:h-[560px]">
          {ready && !reduce ? (
            <SplineScene scene={ROBOT_SCENE} className="w-full h-full" timeoutMs={25000} fallback={<RobotFallback />} />
          ) : (
            <RobotFallback />
          )}
        </div>
      </div>
    </section>
  )
}
