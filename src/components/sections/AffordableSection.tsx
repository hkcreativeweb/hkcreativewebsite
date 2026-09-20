'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Tag, Sparkles, ShieldCheck, Layers } from 'lucide-react'

const included = [
  { label: 'Custom design tailored to your brand', icon: Sparkles },
  { label: 'Fully responsive on every device', icon: Layers },
  { label: 'Launch, setup and testing', icon: ShieldCheck },
]

const whyAffordable = [
  'No bloated agency overhead',
  'A streamlined, efficient process',
  'Direct communication, no account managers',
  'Modern tools that keep build time down',
]

export function AffordableSection() {
  return (
    <section
      id="affordable"
      className="relative overflow-hidden py-20 lg:py-28 bg-mint"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(23,32,51,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,32,51,0.9) 1px, transparent 1px)`,
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal/25 text-teal-dark text-[11px] font-bold uppercase tracking-widest mb-5">
            <Tag size={11} /> Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight mb-4">
            Professional web design.<br />
            <span className="text-teal">Without agency-level prices.</span>
          </h2>
          <p className="text-slate max-w-xl mx-auto leading-relaxed text-lg">
            Get a modern, professional website without the high cost of a traditional web agency.
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
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                We believe every small business deserves a website that looks professional, without paying traditional agency prices.
              </p>
              <p>
                Our process keeps costs down without cutting corners: no bloated overhead, no unnecessary mark-ups, just straightforward, professional web design.
              </p>
              <p className="font-medium text-navy">
                Straightforward pricing for growing businesses.
              </p>
            </div>

            {/* What's included */}
            <div className="bg-white border border-hairline rounded-2xl p-6 mt-8 shadow-[0_2px_16px_rgba(23,32,51,0.05)]">
              <h3 className="text-navy font-semibold text-sm uppercase tracking-widest mb-5 text-slate">
                What&apos;s included
              </h3>
              <div className="space-y-3">
                {included.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <Icon size={16} className="text-teal shrink-0" />
                      <span className="text-sm flex-1 text-navy">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: why it's affordable + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-white border border-hairline rounded-2xl p-6 shadow-[0_2px_16px_rgba(23,32,51,0.05)]">
              <p className="text-[10px] text-teal-dark uppercase tracking-[0.2em] font-semibold mb-4">
                How we keep costs down
              </p>
              <ul className="space-y-3">
                {whyAffordable.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-navy text-white text-sm font-bold shadow-lg shadow-navy/15 hover:bg-navy-dark transition-colors duration-200"
              >
                Book a Consultation <ArrowRight size={15} />
              </motion.a>
              <a
                href="/portfolio"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-hairline bg-white text-navy text-sm font-medium hover:border-teal/40 transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>

            {/* Small print */}
            <p className="text-center text-[11px] text-slate/70 leading-relaxed">
              No specific pricing shown here. Every project is quoted based on what your business actually needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
