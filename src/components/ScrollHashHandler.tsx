'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NAV_OFFSET = 88 // navbar height + a little breathing room

export function ScrollHashHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    // Small delay so the page has finished rendering before we scroll
    const id = setTimeout(() => {
      const el = document.querySelector(hash)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
    }, 80)

    return () => clearTimeout(id)
  }, [pathname])

  return null
}
