'use client'

import { useEffect, useRef } from 'react'

export default function OrbitingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let angle = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw orbits
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.2)'
      ctx.lineWidth = 1

      for (let i = 1; i <= 3; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, 40 * i, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw orbiting dots
      for (let i = 0; i < 3; i++) {
        const radius = 40 * (i + 1)
        const x = centerX + Math.cos(angle + (i * Math.PI * 2) / 3) * radius
        const y = centerY + Math.sin(angle + (i * Math.PI * 2) / 3) * radius

        ctx.fillStyle = `rgba(236, 72, 153, ${0.8 - i * 0.2})`
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw center dot
      ctx.fillStyle = 'rgba(236, 72, 153, 1)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
      ctx.fill()

      angle += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}