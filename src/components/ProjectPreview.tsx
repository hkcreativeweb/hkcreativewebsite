import type { ReactNode } from 'react'

// Website previews are real screenshots captured with scripts/capture-portfolio.mjs.
// Desktop files: <slug>-desktop-<800|1200|1600>.webp (1440×900 layout, 16:10).
// Mobile files:  <slug>-mobile-<390|780>.webp (390×844 layout).
const DESKTOP = /-desktop-1600\.webp$/

/** srcset for a captured desktop screenshot; other images are used as-is. */
function desktopSrcSet(src: string) {
  if (!DESKTOP.test(src)) return undefined
  const base = src.replace(DESKTOP, '')
  return [800, 1200, 1600].map((w) => `${base}-desktop-${w}.webp ${w}w`).join(', ')
}

/** Mobile screenshot path for a desktop screenshot, if one was captured. */
export function mobileFor(src?: string) {
  return src && DESKTOP.test(src) ? src.replace(DESKTOP, '') : undefined
}

export function PreviewImage({
  src,
  alt,
  sizes,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={desktopSrcSet(src)}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={1000}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`block w-full h-full object-cover object-top ${className}`}
    />
  )
}

/** Understated browser frame: neutral controls and the site's address, so the work stays the focus. */
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-white border border-hairline flex flex-col shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.18)]">
      <div className="shrink-0 flex items-center gap-3 px-3 h-8 bg-[#F5F6F4] border-b border-hairline">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#D5D8D3]" />
          <span className="w-2 h-2 rounded-full bg-[#D5D8D3]" />
          <span className="w-2 h-2 rounded-full bg-[#D5D8D3]" />
        </div>
        <div className="flex-1 max-w-[60%] mx-auto bg-white rounded h-5 text-[10px] text-slate flex items-center justify-center px-2.5 truncate border border-hairline">
          {url}
        </div>
        <div className="w-[34px]" aria-hidden="true" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

/** Phone frame showing a captured mobile screenshot. Decorative companion to the desktop preview. */
export function PhoneFrame({ base, alt, className = '' }: { base: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[1.4rem] bg-navy p-[5px] shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)] ${className}`}>
      <div className="rounded-[1.1rem] overflow-hidden bg-white" style={{ aspectRatio: '390 / 844' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${base}-mobile-390.webp`}
          srcSet={`${base}-mobile-390.webp 390w, ${base}-mobile-780.webp 780w`}
          sizes="(min-width: 1024px) 150px, 26vw"
          alt={alt}
          width={390}
          height={844}
          loading="lazy"
          decoding="async"
          className="block w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}
