'use client'

import { useEffect, useRef } from 'react'

export default function RotatingCube() {
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
      const size = 60

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(angle)

      // Draw cube faces
      const colors = ['rgba(236, 72, 153, 0.8)', 'rgba(236, 72, 153, 0.6)', 'rgba(236, 72, 153, 0.4)']

      // Front face
      ctx.fillStyle = colors[0]
      ctx.fillRect(-size, -size, size * 2, size * 2)
      ctx.strokeStyle = 'rgba(236, 72, 153, 1)'
      ctx.lineWidth = 2
      ctx.strokeRect(-size, -size, size * 2, size * 2)

      // Side faces
      ctx.fillStyle = colors[1]
      ctx.beginPath()
      ctx.moveTo(size, -size)
      ctx.lineTo(size + 20, -size - 20)
      ctx.lineTo(size + 20, size - 20)
      ctx.lineTo(size, size)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = colors[2]
      ctx.beginPath()
      ctx.moveTo(-size, -size)
      ctx.lineTo(-size + 20, -size - 20)
      ctx.lineTo(size + 20, -size - 20)
      ctx.lineTo(size, -size)
      ctx.fill()
      ctx.stroke()

      ctx.restore()

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