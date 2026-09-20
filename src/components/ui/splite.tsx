'use client'

import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (spline: Application) => void
  /** Shown if the scene fails to load, or doesn't finish within timeoutMs. */
  fallback?: ReactNode
  timeoutMs?: number
}

// The scene loads from an external CDN — a network hiccup there shouldn't take
// the whole page down. This catches render-time failures.
class SplineErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {
    this.props.onError()
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export function SplineScene({ scene, className, onLoad, fallback, timeoutMs = 9000 }: SplineSceneProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // A slow/dead connection to the CDN can hang without ever throwing —
  // that case can't be caught by an error boundary, so it needs its own timeout.
  useEffect(() => {
    if (loaded) return
    const id = setTimeout(() => setFailed(true), timeoutMs)
    return () => clearTimeout(id)
  }, [loaded, timeoutMs])

  if (failed) return <>{fallback ?? null}</>

  return (
    <SplineErrorBoundary onError={() => setFailed(true)}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-teal border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={(app) => {
            setLoaded(true)
            onLoad?.(app)
          }}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
