'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Zap, RotateCcw, Smartphone, Compass, ArrowRight, X } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Websites',
    subtitle: 'Business sites · Redesigns · Responsive',
    back: 'Responsive business websites designed and developed around your business, so customers can find what they need and get in touch.',
    tools: ['Next.js', 'React', 'Tailwind'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    subtitle: 'Online stores · Ordering',
    back: 'Online stores and ordering experiences, so customers can browse your products or menu and buy without friction.',
    tools: ['Shopify'],
  },
  {
    icon: Smartphone,
    title: 'Content & Social',
    subtitle: 'Social content · Campaign support',
    back: 'Digital content, social assets and campaign support that keep your business visible across TikTok, Instagram and LinkedIn.',
    tools: ['TikTok', 'Instagram', 'LinkedIn'],
  },
  {
    icon: Zap,
    title: 'AI Automation',
    subtitle: 'Workflows · Automated replies',
    back: 'Practical automation for repetitive business processes, such as automated replies and simple workflows, so routine tasks take less of your time.',
    tools: ['Zapier', 'Make', 'OpenAI', 'n8n'],
  },
]

export function Services() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            What we do
          </h2>
          <p className="text-slate max-w-lg mx-auto leading-relaxed">
            A broad range of digital, creative and technology capabilities under one roof, so you&apos;re not piecing it together yourself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            const isFlipped = flipped === i
            const backId = `service-back-${i}`
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-60 sm:h-64 select-none"
                style={{ perspective: '1200px' }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Front — the whole face is a real button so keyboard/touch/screen-reader users can open it */}
                  <button
                    type="button"
                    onClick={() => setFlipped(isFlipped ? null : i)}
                    aria-expanded={isFlipped}
                    aria-controls={backId}
                    aria-hidden={isFlipped}
                    tabIndex={isFlipped ? -1 : 0}
                    className="absolute inset-0 w-full h-full rounded-lg bg-white border border-hairline flex flex-col items-center justify-center gap-4 p-6 text-left cursor-pointer"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="w-14 h-14 rounded-lg bg-mint flex items-center justify-center">
                      <Icon size={26} className="text-teal" aria-hidden="true" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-navy text-sm leading-snug">{service.title}</h3>
                      <p className="text-[11px] text-slate mt-1">{service.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-teal-dark font-medium mt-1">
                      <RotateCcw size={11} aria-hidden="true" /> Tap to explore
                    </div>
                  </button>

                  {/* Back */}
                  <div
                    id={backId}
                    aria-hidden={!isFlipped}
                    className="absolute inset-0 rounded-lg bg-navy flex flex-col justify-between p-6"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <button
                      type="button"
                      onClick={() => setFlipped(null)}
                      tabIndex={isFlipped ? 0 : -1}
                      aria-label={`Close ${service.title} details`}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    >
                      <X size={13} aria-hidden="true" />
                    </button>
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center mb-3">
                        <Icon size={20} className="text-teal-light" aria-hidden="true" />
                      </div>
                      <p className="text-white/85 text-sm leading-relaxed">{service.back}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/10 text-white">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Consultation spotlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-lg bg-mint border border-teal/15 p-8 lg:p-10 grid lg:grid-cols-3 gap-8 items-center"
        >
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-teal-dark bg-white px-3 py-1.5 rounded-md mb-4">
              <Compass size={12} aria-hidden="true" /> Digital &amp; Technology Consultation
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-3">
              Not sure what your website actually needs?
            </h3>
            <p className="text-slate leading-relaxed mb-2">
              Get professional advice before committing to a full project. A 30-minute call to talk through your business, your current setup and where you want to get to, so you know what&apos;s actually worth investing in.
            </p>
            <p className="text-slate leading-relaxed">
              From choosing the right website approach to making sense of platforms, tools and systems, we&apos;ll help you make an informed decision before you spend money on the wrong one.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
            >
              Book a Consultation <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
