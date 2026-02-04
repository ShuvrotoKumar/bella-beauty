'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const dotRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Mouse move listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      dotRef.current.targetX = e.clientX
      dotRef.current.targetY = e.clientY

      // Create particles on mouse move
      for (let i = 0; i < 3; i++) {
        const particle: Particle = {
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          life: 1,
          maxLife: 1,
          size: Math.random() * 3 + 2,
        }
        particlesRef.current.push(particle)
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.1 // gravity
        particle.life -= 0.02

        if (particle.life <= 0) return false

        const opacity = particle.life * 0.6
        ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      // Smooth dot movement
      dotRef.current.x += (dotRef.current.targetX - dotRef.current.x) * 0.15
      dotRef.current.y += (dotRef.current.targetY - dotRef.current.y) * 0.15

      // Draw cursor dot
      ctx.fillStyle = 'rgba(236, 72, 153, 0.8)'
      ctx.beginPath()
      ctx.arc(dotRef.current.x, dotRef.current.y, 8, 0, Math.PI * 2)
      ctx.fill()

      // Draw outer ring
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(dotRef.current.x, dotRef.current.y, 15, 0, Math.PI * 2)
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}