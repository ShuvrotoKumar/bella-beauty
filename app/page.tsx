import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'

const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'), {
  loading: () => <div className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 text-center">Loading featured products...</div></div>,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="py-20"><div className="max-w-7xl mx-auto px-4 text-center">Loading testimonials...</div></div>,
})

const Newsletter = dynamic(() => import('@/components/Newsletter'), {
  loading: () => <div className="py-16 bg-gray-50"><div className="max-w-7xl mx-auto px-4 text-center">Loading newsletter...</div></div>,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-gray-900 text-white py-12"><div className="max-w-7xl mx-auto px-4 text-center">Loading footer...</div></div>,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}