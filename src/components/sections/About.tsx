'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Globe, Palette, Zap, RotateCcw, Smartphone, Play, Pause, Mic, ArrowRight } from 'lucide-react'

const VOICE_NOTE_URL = '/AUDIO-2026-04-26-15-45-58.m4a'

// ── Update this with lines from the audio transcript ──────────────────────────
const TRANSCRIPT_LINES = [
  "Hey, I'm Hassan — founder of HK Creative Web.",
  "We started this because local businesses deserve better than overpriced agencies.",
  "We build websites, content systems, and automation that actually bring in customers.",
  "If you're ready to grow, we'd love to work with you.",
]
// ─────────────────────────────────────────────────────────────────────────────

const BAR_HEIGHTS = [
  0.3, 0.55, 0.8, 0.4, 0.95, 0.6, 0.75, 0.35, 0.7, 0.5,
  0.3, 0.65, 0.9, 0.45, 0.85, 0.4, 0.7, 0.6, 0.25, 0.8,
  0.5, 0.95, 0.4, 0.65, 0.75, 0.3, 0.85, 0.5, 0.4, 0.9,
  0.6, 0.7, 0.35, 0.55, 0.8, 0.45, 0.65, 0.9, 0.5, 0.75,
]

function VoiceNotePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !VOICE_NOTE_URL) return
    if (playing) { audio.pause(); setPlaying(false) }
    else { audio.play(); setPlaying(true) }
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!VOICE_NOTE_URL || !audioRef.current || !audioRef.current.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration
  }

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`
  const hasAudio = Boolean(VOICE_NOTE_URL)

  const handleTimeUpdate = () => {
    const a = audioRef.current!
    setCurrentTime(a.currentTime)
    setProgress(a.currentTime / a.duration)
    // Cycle through transcript lines evenly across the audio duration
    if (a.duration) {
      const idx = Math.min(
        Math.floor((a.currentTime / a.duration) * TRANSCRIPT_LINES.length),
        TRANSCRIPT_LINES.length - 1
      )
      setLineIndex(idx)
    }
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#120030] via-[#1e0050] to-[#0d0020] border border-purple-500/20 shadow-2xl shadow-purple-900/30 p-6 sm:p-8 flex flex-col gap-5">
      {hasAudio && (
        <audio
          ref={audioRef}
          src={VOICE_NOTE_URL}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(audioRef.current!.duration)}
          onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime(0); setLineIndex(0) }}
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
          <Mic size={18} className="text-purple-400" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-none">A message from our CEO</p>
          <p className="text-purple-300/60 text-xs mt-1">Hear it directly from us</p>
        </div>
      </div>

      {/* Waveform + play button */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          disabled={!hasAudio}
          aria-label={playing ? 'Pause' : 'Play'}
          className="shrink-0 w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-lg shadow-purple-600/40 active:scale-95"
        >
          {playing
            ? <Pause size={20} className="text-white" />
            : <Play  size={20} className="text-white ml-0.5" />
          }
        </button>
        <div className="flex items-center gap-[2.5px] sm:gap-[3px] flex-1 h-14">
          {BAR_HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 min-w-[2px] rounded-full bg-purple-400"
              style={{ originY: 0.5 }}
              animate={playing ? {
                scaleY: [h, Math.min(h * 2, 1), h * 0.45, Math.min(h * 1.6, 1), h],
                opacity: [0.5, 1, 0.55, 1, 0.5],
              } : {
                scaleY: h,
                opacity: hasAudio ? 0.45 : 0.2,
              }}
              transition={playing ? {
                duration: 1.0 + (i % 7) * 0.11,
                repeat: Infinity,
                delay: (i * 0.75) / BAR_HEIGHTS.length,
                ease: 'easeInOut',
              } : { duration: 0.4 }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar + time */}
      <div className="space-y-2">
        <div
          className={`w-full h-1.5 bg-white/10 rounded-full overflow-hidden ${hasAudio ? 'cursor-pointer' : ''}`}
          onClick={seek}
        >
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-white/30">
          <span>{fmt(currentTime)}</span>
          <span>{duration > 0 ? fmt(duration) : '--:--'}</span>
        </div>
      </div>

      {/* Subtitles */}
      <div className="min-h-[48px] rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={playing ? lineIndex : 'idle'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-purple-200/70 leading-relaxed italic"
          >
            {playing ? TRANSCRIPT_LINES[lineIndex] : 'Press play to hear from our CEO...'}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

const services = [
  {
    icon: Globe,
    title: 'Website Design and Build',
    subtitle: 'Fast · Modern · Built to convert',
    back: 'We design and build fast, modern websites that look great and actually bring in customers. No templates. Built for your business.',
    tools: ['Next.js', 'React', 'Tailwind', 'Shopify'],
    color: 'from-violet-600 to-purple-700',
  },
  {
    icon: Smartphone,
    title: 'Social Media Management',
    subtitle: 'TikTok · Instagram · LinkedIn',
    back: 'From TikTok to Instagram to LinkedIn, we create content, manage your pages, and grow your audience so you don\'t have to.',
    tools: ['TikTok', 'Instagram', 'LinkedIn'],
    color: 'from-purple-600 to-fuchsia-700',
  },
  {
    icon: Zap,
    title: 'AI Tools and Automation',
    subtitle: 'Smart tools · Workflows · Time saved',
    back: 'We set up smart tools that save you time. Automated replies to AI powered workflows that run in the background while you focus on your business.',
    tools: ['Zapier', 'Make', 'OpenAI', 'n8n'],
    color: 'from-indigo-600 to-violet-700',
  },
  {
    icon: Palette,
    title: 'Branding and Identity',
    subtitle: 'Logo · Colour · Typography',
    back: 'Logos, colours, fonts, and the full visual identity your business needs to look professional and consistent everywhere.',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    color: 'from-fuchsia-600 to-pink-700',
  },
]

export function About() {
  const [flipped, setFlipped] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={sectionRef} id="about" className="bg-white overflow-hidden relative">
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-[80px] pointer-events-none"
      />

      <div className="relative z-10">

        {/* ── 50/50: Heading + body | Voice note player ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                One team.<br />
                <span className="text-neutral-400">Everything sorted.</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We are a UK based web and digital studio built for small businesses. Whether you need a new website, help with your social media, or someone to set up the right digital tools, we handle it all under one roof.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                No confusing agencies. No back and forth. Just straightforward work that gets your business seen, found, and remembered.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-purple-700 transition-colors duration-200"
              >
                Our full story <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Right: voice note player */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <VoiceNotePlayer />
            </motion.div>
          </div>
        </div>

        {/* ── Service flip cards ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
            {services.map((service, i) => {
              const Icon = service.icon
              const isFlipped = flipped === i
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="h-60 sm:h-64 cursor-pointer select-none"
                  style={{ perspective: '1200px' }}
                  onClick={() => setFlipped(isFlipped ? null : i)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700"
                    style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col items-center justify-center gap-4 p-6"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                        <Icon size={26} className="text-purple-600" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-neutral-900 text-sm leading-snug">{service.title}</h3>
                        <p className="text-[11px] text-neutral-400 mt-1">{service.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-purple-500 font-medium mt-1">
                        <RotateCcw size={11} /> Tap to explore
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} flex flex-col justify-between p-6`}
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                          <Icon size={20} className="text-white" />
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">{service.back}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tools.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/20 text-white">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
