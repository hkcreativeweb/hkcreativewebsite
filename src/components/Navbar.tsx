'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { InstagramIcon } from '@/components/InstagramIcon'
import { instagram } from '@/data/instagram'

const links = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services' },
  { label: 'Work',      href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/#contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  const showBanner = !dismissed && !pastHero

  // For hash links: use bare #hash on homepage so the browser native-scrolls,
  // and /#hash from other pages so Next.js navigates home first.
  const resolveHref = (href: string) =>
    href.startsWith('/#') && pathname === '/' ? href.slice(1) : href

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setPastHero(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ── Announcement banner — hides past hero, dismissible ── */}
      <div
        className={`overflow-hidden transition-all duration-500 ${showBanner ? 'max-h-16' : 'max-h-0'}`}
      >
        <div className="bg-navy text-white py-3 pl-4 pr-10 sm:pr-4 flex items-center justify-center gap-2 sm:gap-4 relative">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold uppercase tracking-widest shrink-0">
            Consultation
          </span>
          <span className="text-white/90 font-semibold text-center text-[11px] sm:text-sm">
            Not sure what your website needs? <span className="underline underline-offset-2 decoration-teal-light">Get advice before you commit.</span>
          </span>
          <a
            href="#services"
            className="shrink-0 font-bold text-xs sm:text-sm text-white bg-teal hover:bg-teal-dark px-3 py-1.5 rounded-md transition-colors"
          >
            Find Out More →
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="absolute right-1 sm:right-3 p-2 text-white/60 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-hairline' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="/images/logo-icon.png"
              alt="HK Creative Web"
              width={105}
              height={36}
              priority
              unoptimized
              className="h-7 sm:h-8 w-auto shrink-0"
            />
            <span className="hidden lg:flex flex-col leading-tight min-w-0">
              <span className="text-sm font-bold tracking-tight text-navy whitespace-nowrap">
                HK Creative Web
              </span>
              <span className="text-[10px] text-slate whitespace-nowrap">
                Websites. Social. Digital. Done properly.
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={resolveHref(l.href)}
                  className="relative text-sm text-slate hover:text-navy transition-colors duration-200 group py-1"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-teal rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <a
                  href={instagram.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-navy transition-colors duration-200 p-2 -m-1"
                >
                  <InstagramIcon size={16} /> <span className="hidden lg:inline">Instagram</span>
                  <span className="sr-only lg:hidden">Instagram</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={resolveHref('/#contact')}
              className="hidden md:inline-flex items-center h-10 px-5 whitespace-nowrap shrink-0 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
            >
              Book a Consultation
            </Link>

            {/* Mobile compact CTA */}
            <Link
              href={resolveHref('/#contact')}
              onClick={() => setOpen(false)}
              className="md:hidden inline-flex items-center h-10 text-xs font-semibold px-3 rounded-md bg-navy text-white shadow-sm whitespace-nowrap shrink-0"
            >
              Book a Consultation
            </Link>

            <button
              className="md:hidden p-2 -mr-2 text-slate hover:text-navy"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-b border-hairline px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="text-navy/80 hover:text-teal-dark text-base font-medium transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                  href={instagram.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy/80 hover:text-teal-dark text-base font-medium transition-colors duration-200"
                >
                  <InstagramIcon size={15} /> Instagram
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </li>
          </ul>
          <Link
            href={resolveHref('/#contact')}
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center text-sm font-semibold h-12 rounded-md bg-navy text-white shadow-sm"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </div>
  )
}
