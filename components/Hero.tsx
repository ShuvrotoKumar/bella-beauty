'use client'

import { useRef, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Only load GSAP on desktop and when user interacts
    if (window.innerWidth > 768) {
      import('gsap').then((gsapModule) => {
        const gsap = gsapModule.default
        
        // Direct GSAP usage without useGSAP hook to avoid hook rules violation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
          '[data-hero="badge"]',
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.7 }
        )
          .fromTo(
            '[data-hero="title"]',
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            '-=0.35'
          )
          .fromTo(
            '[data-hero="desc"]',
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.65 },
            '-=0.45'
          )
          .fromTo(
            '[data-hero="actions"] > *',
            { autoAlpha: 0, y: 14, scale: 0.98 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
            '-=0.35'
          )
          .fromTo(
            '[data-hero="image"]',
            { autoAlpha: 0, y: 18, scale: 0.98 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
            '-=0.9'
          )

        // Minimal continuous animation
        gsap.to('[data-hero="image"]', {
          y: -5,
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }).catch(error => {
        console.warn('GSAP loading failed:', error)
      })
    }
  }, [])

  return (
    <section ref={rootRef} className="pt-16 gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div data-hero="badge" className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-primary-700 text-sm font-medium">
              <Sparkles size={16} className="mr-2" />
              New Collection Available
            </div>
            
            <h1 data-hero="title" className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Unleash Your
              <span className="text-primary-600 block">Natural Beauty</span>
            </h1>
            
            <p data-hero="desc" className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover premium cosmetics crafted for the modern woman. From everyday essentials to glamorous looks, find your perfect match.
            </p>
            
            <div data-hero="actions" className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center group">
                Shop Collection
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors">
                Watch Tutorial
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5★</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div data-hero="image" className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=75"
                alt="Beautiful woman with makeup"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                priority
              />
            </div>
            
            {/* Simplified Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-100 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-primary-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}