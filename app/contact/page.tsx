'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Mail, Phone, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react'

const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
})

const contactCards = [
  {
    title: 'Email us',
    description: 'hello@bellabeauty.com',
    icon: Mail
  },
  {
    title: 'Call support',
    description: '+1 (212) 555-0198',
    icon: Phone
  },
  {
    title: 'Visit studio',
    description: '285 Madison Ave, New York',
    icon: MapPin
  }
]

const supportHours = [
  { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' }
]

export default function ContactPage() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (window.innerWidth > 768) {
      import('gsap')
        .then((gsapModule) => {
          const gsap = gsapModule.default
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

          tl.fromTo(
            '[data-contact="badge"]',
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.4 }
          )
            .fromTo(
              '[data-contact="title"]',
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.5 },
              '-=0.2'
            )
            .fromTo(
              '[data-contact="subtitle"]',
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.45 },
              '-=0.25'
            )
            .fromTo(
              '[data-contact="cards"] > *',
              { autoAlpha: 0, y: 12, scale: 0.98 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
              '-=0.2'
            )
            .fromTo(
              '[data-contact="form"]',
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.5 },
              '-=0.2'
            )
            .fromTo(
              '[data-contact="hours"]',
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.45 },
              '-=0.25'
            )
        })
        .catch((error) => {
          console.warn('GSAP loading failed:', error)
        })
    }
  }, [])

  return (
    <main ref={rootRef} className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-24 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div data-contact="badge" className="inline-flex items-center px-4 py-2 bg-white/30 rounded-full text-primary-700 text-sm font-medium">
                <Sparkles size={16} className="mr-2" />
                We are here to help
              </div>

              <div className="space-y-4">
                <h1 data-contact="title" className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Let&apos;s Talk Beauty
                </h1>
                <p data-contact="subtitle" className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Reach out for product guidance, skincare routines, or order support. Our beauty advisors respond within 24 hours.
                </p>
              </div>

              <div data-contact="cards" className="grid sm:grid-cols-3 gap-4">
                {contactCards.map((card, index) => {
                  const Icon = card.icon
                  return (
                    <div key={index} className="bg-white/80 rounded-2xl p-5 shadow-lg border border-white/60">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                        <Icon className="text-primary-600" size={22} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                      <p className="text-sm text-gray-600">{card.description}</p>
                    </div>
                  )
                })}
              </div>

              <div data-contact="hours" className="bg-white/80 rounded-2xl p-6 shadow-md border border-white/70">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Clock className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-sm text-gray-600">Response times may vary during peak seasons.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {supportHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between text-sm text-gray-700">
                      <span>{item.day}</span>
                      <span className="font-medium text-gray-900">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-contact="form" className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Send a message</h2>
                <p className="text-gray-600">Tell us how we can help you today.</p>
              </div>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      placeholder="Lena"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Morales"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Order support"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Share details about your request..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Visit our beauty studio</h2>
              <p className="text-lg text-gray-600">
                Stop by for shade matching, product demos, and seasonal consultations with our artists. Walk-ins are welcome.
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary-600" size={20} />
                  <span>285 Madison Ave, Suite 1200, New York, NY</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-600" size={20} />
                  <span>+1 (212) 555-0198</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-600" size={20} />
                  <span>studio@bellabeauty.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-6 w-40 h-40 bg-primary-200 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-8 border border-primary-100 shadow-xl">
                <div className="aspect-[4/3] rounded-2xl bg-white shadow-inner flex items-center justify-center text-gray-400">
                  Map Preview
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bella Beauty Studio</h3>
                    <p className="text-sm text-gray-600">Open today until 6 PM</p>
                  </div>
                  <button className="px-4 py-2 rounded-full border border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="bg-gray-900 h-64 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </main>
  )
}
