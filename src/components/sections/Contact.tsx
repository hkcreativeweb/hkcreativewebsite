'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
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
  const sectionRef = useRef<HTMLElement>(null)

  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const auroraY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-8%', '8%'])

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
              <h2 className="text-5xl md:text-6xl font-bold text-navy tracking-tight leading-tight">
                Let&apos;s build
                <br />
                <span className="text-teal">something.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 text-slate max-w-md mx-auto leading-relaxed">
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
                { icon: Mail,   label: 'Email',     value: 'hkcreativeweb@gmail.com', href: 'mailto:hkcreativeweb@gmail.com' },
                { icon: MapPin, label: 'Based in',  value: 'United Kingdom' },
                { icon: Clock,  label: 'Available', value: 'Mon–Fri · 9am–5pm' },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <FadeUp key={label} delay={0.15 + i * 0.08}>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-hairline">
                    <div className="w-9 h-9 rounded-xl bg-mint flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate uppercase tracking-widest font-medium">{label}</div>
                      {href
                        ? <a href={href} className="text-sm text-teal-dark font-medium mt-0.5 hover:underline">{value}</a>
                        : <div className="text-sm text-navy font-medium mt-0.5">{value}</div>
                      }
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
              className="lg:col-span-3 bg-white/90 backdrop-blur-xl border border-hairline rounded-3xl p-8 shadow-xl shadow-navy/5"
            >
              <form
                action="https://formspree.io/f/mgodeynl"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_next" value="https://hkcreativeweb.com" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate mb-1.5 block uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-hairline text-navy text-sm placeholder:text-slate/60 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate mb-1.5 block uppercase tracking-wide">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-hairline text-navy text-sm placeholder:text-slate/60 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-xs font-semibold text-slate mb-1.5 block uppercase tracking-wide">
                    What do you need help with?
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-hairline text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Website Design & Development</option>
                    <option value="social">Social Media & Promotional Content</option>
                    <option value="ai">AI Tools & Digital Solutions</option>
                    <option value="brand">Branding & Digital Creative</option>
                    <option value="consultation">Digital &amp; Technology Consultation</option>
                    <option value="email">Email Marketing</option>
                    <option value="tiktok">TikTok and Content Creation</option>
                    <option value="other">Not sure yet, let&apos;s talk</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate mb-1.5 block uppercase tracking-wide">
                    Tell us about your business and what you&apos;re looking for
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you building? Timeline? Budget range?"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-hairline text-navy text-sm placeholder:text-slate/60 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-teal hover:bg-teal-dark text-white text-sm font-bold transition-colors duration-200 shadow-lg shadow-teal/25"
                >
                  <Send size={16} /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
