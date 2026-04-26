'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ── Dismissible announcement banner ── */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-purple-900 via-purple-600 to-violet-800 text-white py-3 pl-4 pr-10 sm:pr-4 flex items-center justify-center gap-2 sm:gap-4 relative">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest shrink-0">
            Limited Time Only
          </span>
          <span className="text-white font-semibold text-center text-[11px] sm:text-sm">
            We are building <span className="font-black text-white">FREE</span> business websites. <span className="underline underline-offset-2">Only a few slots left.</span>
          </span>
          <a
            href="#free-website"
            className="shrink-0 font-bold text-xs sm:text-sm text-white bg-white/20 hover:bg-white/30 border border-white/30 px-3 py-1.5 rounded-full transition-colors"
          >
            Claim Your Spot →
          </a>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
            className="absolute right-3 sm:right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* ── Main nav ── */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              HK<span className="text-purple-500">.</span>
            </span>
            <span className="hidden sm:block text-xs text-neutral-400 font-medium uppercase tracking-widest">
              Creative
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-200 group py-1"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop CTA — HoverBorderGradient */}
            <HoverBorderGradient
              as="a"
              href="#contact"
              className="hidden md:flex text-sm font-semibold text-white"
              containerClassName="hidden md:flex"
              duration={1.2}
            >
              Let&apos;s Talk
            </HoverBorderGradient>

            {/* Mobile compact CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="md:hidden text-xs font-semibold px-3.5 py-2 rounded-full bg-purple-600 text-white shadow-md shadow-purple-600/20"
            >
              Let&apos;s Talk
            </a>

            <button
              className="md:hidden text-neutral-400 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-300 hover:text-white text-base font-medium transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center text-sm font-semibold py-3.5 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/20"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </div>
  )
}
