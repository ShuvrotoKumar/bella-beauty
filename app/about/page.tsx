'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Heart, Award, Users, Globe, Sparkles, CheckCircle } from 'lucide-react'
import Image from 'next/image'

// Lazy load components
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
})

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Premium Products', value: '200+', icon: Sparkles },
  { label: 'Countries Served', value: '25+', icon: Globe },
  { label: 'Awards Won', value: '15+', icon: Award }
]

const values = [
  {
    title: 'Quality First',
    description: 'We source the finest ingredients and use cutting-edge formulations to ensure every product meets the highest standards.',
    icon: Award
  },
  {
    title: 'Cruelty-Free',
    description: 'All our products are 100% cruelty-free. We believe beauty should never come at the expense of animals.',
    icon: Heart
  },
  {
    title: 'Sustainable Beauty',
    description: 'We\'re committed to reducing our environmental footprint through eco-friendly packaging and sustainable practices.',
    icon: Globe
  }
]

const milestones = [
  { year: '2018', title: 'Bella Beauty Founded', description: 'Started with a mission to make premium beauty accessible to everyone.' },
  { year: '2019', title: 'First Product Launch', description: 'Released our signature foundation line that became an instant bestseller.' },
  { year: '2020', title: 'International Expansion', description: 'Expanded to 15 countries and reached 25,000 happy customers worldwide.' },
  { year: '2021', title: 'Sustainability Commitment', description: 'Achieved B-Corp certification and launched our eco-friendly packaging initiative.' },
  { year: '2022', title: 'Innovation Award', description: 'Won the Beauty Innovation Award for our revolutionary serum formula.' },
  { year: '2023', title: 'Community Impact', description: 'Reached 50,000 customers and launched our foundation supporting women in STEM.' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bella Beauty was born from a simple belief: everyone deserves to feel beautiful and confident in their own skin. 
              Since 2018, we've been crafting premium beauty products that enhance natural beauty while promoting self-love and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-6">
                    <Icon className="text-primary-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to a global beauty brand
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-5/12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-primary-600 font-semibold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white">
                    <CheckCircle className="text-white w-full h-full p-1" size={20} />
                  </div>
                  
                  <div className="w-full lg:w-5/12 lg:invisible"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bella Beauty
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600">Beauty industry veteran with 15+ years of experience in luxury cosmetics.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75"
                  alt="Dr. Emily Chen"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Emily Chen</h3>
              <p className="text-primary-600 mb-3">Head of R&D</p>
              <p className="text-gray-600">Cosmetic chemist dedicated to creating innovative, safe, and effective formulations.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75"
                  alt="Michael Rodriguez"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
              <p className="text-primary-600 mb-3">Creative Director</p>
              <p className="text-gray-600">Award-winning designer bringing beauty and innovation to every product experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Bella Beauty Family
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover products that not only make you look beautiful but feel beautiful too. 
            Experience the difference that quality and care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Our Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="bg-gray-900 h-64 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </main>
  )
}