'use client'

import { useState } from 'react'
import { Mail, Gift } from 'lucide-react'
import PulsingGrid from './animations/PulsingGrid'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <PulsingGrid />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-4 rounded-full">
              <Gift size={32} className="text-primary-600" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get 20% Off Your First Order
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive offers, and beauty tips from our experts.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
          </form>
          
          {isSubscribed && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-full">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          )}
          
          <p className="text-sm text-gray-600 mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <Gift size={20} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Exclusive Offers</h4>
                <p className="text-sm text-gray-600">Get access to subscriber-only discounts and early sales</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <Mail size={20} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Beauty Tips</h4>
                <p className="text-sm text-gray-600">Weekly beauty advice from professional makeup artists</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <Gift size={20} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">New Arrivals</h4>
                <p className="text-sm text-gray-600">Be first to discover our latest product launches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}