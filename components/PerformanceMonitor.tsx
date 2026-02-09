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
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, FCP: entry.startTime }))
          }
        })
      })
      observer.observe({ entryTypes: ['paint'] })

      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, LCP: lastEntry.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, CLS: clsValue }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        setMetrics(prev => ({ ...prev, TTFB: navigation.responseStart - navigation.requestStart }))
      }

      return () => {
        observer.disconnect()
        lcpObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.FCP.toFixed(0)}ms</div>
      <div>LCP: {metrics.LCP.toFixed(0)}ms</div>
      <div>CLS: {metrics.CLS.toFixed(3)}</div>
      <div>TTFB: {metrics.TTFB.toFixed(0)}ms</div>
    </div>
  )
}
