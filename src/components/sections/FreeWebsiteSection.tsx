'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, ArrowRight, Zap } from 'lucide-react'

// 30 days from 2026-04-26
const DEADLINE = new Date('2026-05-26T00:00:00Z')

const included = [
  { label: 'Website Design', free: true },
  { label: 'Website Build', free: true },
  { label: 'Launch and Setup', free: true },
  { label: 'Domain Name', free: false },
  { label: 'SSL Security Certificate', free: false },
  { label: 'Business Email Address', free: false },
  { label: 'Monthly Maintenance', free: false },
]

function useCountdown(target: Date) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return { ...t, mounted }
}

function TimerUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white leading-none">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[9px] sm:text-[10px] text-purple-300 uppercase tracking-widest mt-1">{label}</div>
    </div>
  )
}

export function FreeWebsiteSection() {
  const { days, hours, minutes, seconds, mounted } = useCountdown(DEADLINE)

  return (
    <section
      id="free-website"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(160deg, #0f0025 0%, #2a0060 40%, #1a003a 70%, #0f0025 100%)' }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-violet-700/10 blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-bold uppercase tracking-widest mb-5">
            <Zap size={11} className="fill-current" /> Limited Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            We will build your website.<br />
            <span className="text-purple-400">For free.</span>
          </h2>
          <p className="text-purple-200/70 max-w-xl mx-auto leading-relaxed text-lg">
            No, seriously. 100% free design and build. You just cover the basics to keep it live.
          </p>
        </motion.div>

        {/* Body */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left: copy + included list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4 text-purple-100/80 leading-relaxed">
              <p>
                Right now we are offering a limited number of small businesses a completely free website. No design fees. No build fees. Nothing.
              </p>
              <p>
                All you pay for is what keeps your site up and running. That means your domain name, security, business email, and monthly maintenance. The website itself costs you nothing.
              </p>
              <p className="font-medium text-white">
                This will not be around forever. We only have a handful of slots available and when they are gone, they are gone.
              </p>
            </div>

            {/* What's included */}
            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 mt-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-white/60">
                What&apos;s included
              </h3>
              <div className="space-y-3">
                {included.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {item.free ? (
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    ) : (
                      <CreditCard size={16} className="text-purple-400/60 shrink-0" />
                    )}
                    <span className={`text-sm flex-1 ${item.free ? 'text-white' : 'text-white/50'}`}>
                      {item.label}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                        item.free
                          ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                          : 'bg-white/5 text-white/40 border border-white/10'
                      }`}
                    >
                      {item.free ? 'Free' : 'You pay'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: timer + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Countdown timer */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-[10px] text-purple-300 uppercase tracking-[0.2em] font-semibold mb-5">
                Offer closes in
              </p>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                {mounted ? (
                  <>
                    <TimerUnit value={days}    label="Days" />
                    <span className="text-purple-400 text-xl font-bold pb-4">:</span>
                    <TimerUnit value={hours}   label="Hrs" />
                    <span className="text-purple-400 text-xl font-bold pb-4">:</span>
                    <TimerUnit value={minutes} label="Mins" />
                    <span className="text-purple-400 text-xl font-bold pb-4">:</span>
                    <TimerUnit value={seconds} label="Secs" />
                  </>
                ) : (
                  <span className="text-2xl font-mono font-bold text-white/30 tracking-widest">--:--:--:--</span>
                )}
              </div>
            </div>

            {/* Urgency */}
            <p className="text-center text-sm text-purple-200/70 leading-relaxed">
              Only a few spots remaining. Once they are filled this offer closes for good.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-purple-900 text-sm font-bold shadow-xl shadow-white/10 hover:bg-purple-50 transition-colors duration-200"
              >
                Claim Your Free Website <ArrowRight size={15} />
              </motion.a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors duration-200"
              >
                Find Out More
              </a>
            </div>

            {/* Small print */}
            <p className="text-center text-[11px] text-purple-300/40 leading-relaxed">
              Limited slots available. Offer subject to availability.<br />
              Get in touch to check if you qualify.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
