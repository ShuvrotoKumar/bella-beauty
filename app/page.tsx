import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Only lazy load components that are below the fold
const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'), {
  loading: () => <div className="py-20 bg-gray-50 animate-pulse"></div>,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="py-20 bg-white animate-pulse"></div>,
})

const Newsletter = dynamic(() => import('@/components/Newsletter'), {
  loading: () => <div className="py-20 bg-gray-50 animate-pulse"></div>,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-gray-900 h-64 animate-pulse"></div>,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Suspense fallback={<div className="py-20 bg-gray-50 animate-pulse"></div>}>
        <FeaturedProducts />
      </Suspense>
      <Suspense fallback={<div className="py-20 bg-white animate-pulse"></div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="py-20 bg-gray-50 animate-pulse"></div>}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<div className="bg-gray-900 h-64 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </main>
  )
}