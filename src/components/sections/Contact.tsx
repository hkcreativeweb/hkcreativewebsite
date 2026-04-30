'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Send, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { AuroraBackground } from '@/components/ui/aurora-background'

const WHATSAPP_NUMBER = '447404197864'

const ease = [0.25, 0.46, 0.45, 0.94] as const

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const auroraY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/mgodeynl', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        formRef.current?.reset()
      } else {
        const data = await res.json()
        setError(data?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Could not send message. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden">
      <motion.div style={{ y: auroraY }} className="absolute inset-0 z-0">
        <AuroraBackground className="absolute inset-0 h-full w-full" showRadialGradient>
          <span />
        </AuroraBackground>
      </motion.div>

      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <FadeUp delay={0}>
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                Let&apos;s build
                <br />
                <span className="text-purple-600">something.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 text-neutral-500 max-w-md mx-auto leading-relaxed">
                Tell us a bit about your project and we&apos;ll get back to you within 24 hours. No hard sell. Just a chat.
              </p>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* ── Left: info + WhatsApp ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#1eb858] transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-base">Chat on WhatsApp</div>
                    <div className="text-white/80 text-sm mt-0.5">Prefer to just talk? Message us now.</div>
                  </div>
                </motion.a>
              </FadeUp>

              {[
                { icon: Mail,   label: 'Email',     value: 'hkcreativeweb@gmail.com' },
                { icon: MapPin, label: 'Based in',  value: 'United Kingdom' },
                { icon: Clock,  label: 'Available', value: 'Mon to Fri · 9am to 6pm GMT' },
              ].map(({ icon: Icon, label, value }, i) => (
                <FadeUp key={label} delay={0.15 + i * 0.08}>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-neutral-200/60">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-widest font-medium">{label}</div>
                      <div className="text-sm text-neutral-800 font-medium mt-0.5">{value}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* ── Right: form ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="lg:col-span-3 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-xl shadow-neutral-200/50"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center"
                  >
                    <Send size={24} className="text-purple-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-neutral-900">Message sent!</h3>
                  <p className="text-neutral-500 text-sm max-w-xs">
                    Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 mb-1.5 block uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 mb-1.5 block uppercase tracking-wide">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-500 mb-1.5 block uppercase tracking-wide">
                      What do you need help with?
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option value="web">Website Design and Build</option>
                      <option value="social">Social Media Management</option>
                      <option value="ai">AI Tools and Automation</option>
                      <option value="brand">Branding and Identity</option>
                      <option value="email">Email Marketing</option>
                      <option value="tiktok">TikTok and Content Creation</option>
                      <option value="other">Not sure yet, let&apos;s talk</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-500 mb-1.5 block uppercase tracking-wide">
                      Tell us about your business and what you&apos;re looking for
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you building? Timeline? Budget range?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15 transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white text-sm font-bold transition-colors duration-200 shadow-lg shadow-purple-600/25"
                  >
                    {loading
                      ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      : <><Send size={16} /> Send Message</>
                    }
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
