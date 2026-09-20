'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Search, PenTool, Code2, Rocket } from 'lucide-react'

const process = [
  { icon: Search,  title: 'Discuss', desc: 'We talk through your idea, goals and budget.' },
  { icon: PenTool, title: 'Build',   desc: 'I design and develop the website around your requirements.' },
  { icon: Code2,   title: 'Refine',  desc: 'I test everything and make adjustments based on your feedback.' },
  { icon: Rocket,  title: 'Launch',  desc: 'Your website goes live and I hand everything over to you.' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-6%', '6%'])

  return (
    <section ref={sectionRef} id="about" className="bg-white overflow-hidden relative py-24">
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-mint/70 blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight tracking-tight mb-6">
              How I Work
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Every project starts with a conversation. I understand what you need, plan the work, build it, test it and make sure you can actually use it.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
            >
              Our full story <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right: how we work */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {process.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl bg-[#F5F6F4] border border-hairline p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-mint flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-teal" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate/60">0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-navy text-sm">{step.title}</h3>
                  <p className="text-slate text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
