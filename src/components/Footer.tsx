import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/#contact' },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Image src="/images/logo-icon.png" alt="HK Creative Web logo" width={105} height={36} unoptimized className="h-6 w-auto" />
              <span className="text-sm font-bold text-white">HK Creative Web</span>
            </div>
            <p className="text-xs text-white/60">Websites. Social. Digital. Done properly.</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center md:justify-end gap-x-7 gap-y-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" className="text-sm font-semibold text-white hover:text-teal-light transition-colors duration-200">
              Book a Consultation
            </Link>
            <a href="mailto:hkcreativeweb@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
              hkcreativeweb@gmail.com
            </a>
          </nav>
        </div>

        <p className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 text-center md:text-left">
          © {new Date().getFullYear()} HK Creative Web. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
