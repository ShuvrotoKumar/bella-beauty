import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import FloatingParticles from './animations/FloatingParticles'

export default function Hero() {
  return (
    <section className="pt-16 gradient-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingParticles />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-primary-700 text-sm font-medium">
              <Sparkles size={16} className="mr-2" />
              New Collection Available
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Unleash Your
              <span className="text-primary-600 block">Natural Beauty</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover premium cosmetics crafted for the modern woman. From everyday essentials to glamorous looks, find your perfect match.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful woman with makeup"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-primary-300 rounded-full opacity-50 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}