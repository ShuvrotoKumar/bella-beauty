'use client'

import { useEffect, useRef } from 'react'

export default function PulsingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let time = 0
    const gridSize = 40

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          )
          const pulse = Math.sin(time * 0.05 - distance * 0.01) * 0.5 + 0.5
          const opacity = pulse * 0.6

          ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`
          ctx.fillRect(x + 5, y + 5, 30, 30)

          ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.5})`
          ctx.lineWidth = 1
          ctx.strokeRect(x + 5, y + 5, 30, 30)
        }
      }

      time++
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