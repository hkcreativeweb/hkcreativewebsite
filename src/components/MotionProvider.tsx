'use client'

import { MotionConfig } from 'framer-motion'

// Makes every framer-motion animation site-wide respect the visitor's
// OS-level prefers-reduced-motion setting, without touching each component.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
