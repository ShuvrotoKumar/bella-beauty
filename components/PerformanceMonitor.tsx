'use client'

import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    FCP: 0,
    LCP: 0,
    FID: 0,
    CLS: 0,
    TTFB: 0
  })

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return
    
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, FCP: Math.round(entry.startTime) }))
            }
          })
        })

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'navigation'] })

        return () => observer.disconnect()
      } catch (error) {
        console.warn('Performance monitoring not supported:', error)
      }
    }
  }, [])

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div>FCP: {metrics.FCP}ms</div>
      <div>LCP: {metrics.LCP}ms</div>
      <div>CLS: {metrics.CLS.toFixed(3)}</div>
      <div>TTFB: {metrics.TTFB}ms</div>
    </div>
  )
}
