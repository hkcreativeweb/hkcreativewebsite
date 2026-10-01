import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/#contact' },
]

const linkClass =
  'inline-block py-2 text-sm text-white/75 hover:text-white underline-offset-4 hover:underline transition-colors duration-200'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            {/* The logo is purple on transparent, so it sits on a light tile to stay sharp and high-contrast on navy */}
            <Link href="/" aria-label="HK Creative Web, home" className="inline-flex items-center justify-center bg-cream rounded-md px-3 py-2">
              <Image
                src="/images/logo-icon.png"
                alt="HK Creative Web logo"
                width={1006}
                height={345}
                sizes="240px"
                loading="eager"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 text-lg font-bold">HK Creative Web</p>
            <p className="mt-1 text-sm text-white/70">Content • Websites • Digital Marketing</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Navigate</p>
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Get in touch</p>
            <a
              href="mailto:hkcreativeweb@gmail.com"
              className="inline-block py-1 text-sm font-medium text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors duration-200"
            >
              hkcreativeweb@gmail.com
            </a>
            <div className="mt-5">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-teal-dark hover:bg-teal text-white text-sm font-semibold transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:justify-between gap-1.5 text-xs text-white/60">
          <p>© {new Date().getFullYear()} HK Creative Web. All rights reserved.</p>
          <p>Created by HK Creative.</p>
        </div>
      </div>
    </footer>
  )
}
