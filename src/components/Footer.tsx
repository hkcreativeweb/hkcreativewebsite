import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-icon.png"
              alt="HK Creative Web logo"
              width={105}
              height={36}
              unoptimized
              className="h-6 w-auto"
            />
            <span className="text-sm font-bold text-white">HK Creative Web</span>
          </div>
          <p className="text-[11px] text-white/50">Websites. Social. Digital. Done properly.</p>
        </div>

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} HK Creative Web. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
