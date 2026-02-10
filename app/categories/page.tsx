'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const Header = dynamic(() => import('../../components/Header'), {
  ssr: true // Keep SSR for SEO
})

const Footer = dynamic(() => import('../../components/Footer'), {
  ssr: true // Keep SSR for SEO
})

// Remove heavy animation component for performance
// const PulsingGrid = dynamic(() => import('../../components/animations/PulsingGrid'), {
//   ssr: false,
//   loading: () => null
// })

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  rating: number
  reviews: number
  inStock: boolean
}

const categories = [
  {
    id: 1,
    name: 'Skincare',
    description: 'Nourish and protect your skin',
    icon: '✨',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    name: 'Makeup',
    description: 'Express your unique style',
    icon: '💄',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Fragrance',
    description: 'Signature scents for every mood',
    icon: '🌸',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    name: 'Hair Care',
    description: 'Healthy, beautiful hair solutions',
    icon: '💇',
    color: 'from-blue-500 to-cyan-500'
  }
]

const products: Product[] = [
  {
    id: 1,
    name: 'Hydrating Face Serum',
    category: 'Skincare',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 2,
    name: 'Liquid Foundation',
    category: 'Makeup',
    price: 38.50,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: 3,
    name: 'Luxury Perfume',
    category: 'Fragrance',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: 'Shampoo & Conditioner',
    category: 'Hair Care',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.7,
    reviews: 312,
    inStock: true
  },
  {
    id: 5,
    name: 'Moisturizing Cream',
    category: 'Skincare',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.5,
    reviews: 198,
    inStock: true
  },
  {
    id: 6,
    name: 'Eyeshadow Palette',
    category: 'Makeup',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.8,
    reviews: 267,
    inStock: false
  },
  {
    id: 7,
    name: 'Body Mist',
    category: 'Fragrance',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.4,
    reviews: 145,
    inStock: true
  },
  {
    id: 8,
    name: 'Hair Mask Treatment',
    category: 'Hair Care',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=70',
    rating: 4.7,
    reviews: 289,
    inStock: true
  }
]

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam || null)
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState(100)

  const filteredProducts = products
    .filter(p => !selectedCategory || p.category === selectedCategory)
    .filter(p => p.price <= priceRange)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Remove heavy animation for performance */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium beauty products curated just for you
            </p>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat.name
                    ? `bg-gradient-to-br ${cat.color} text-white shadow-xl`
                    : 'bg-gray-50 hover:shadow-lg border-2 border-transparent hover:border-pink-200'
                }`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className={`text-sm ${selectedCategory === cat.name ? 'text-white/90' : 'text-gray-600'}`}>
                  {cat.description}
                </p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Max Price:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-32 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <span className="text-pink-600 font-semibold min-w-fit">${priceRange}</span>
            </div>

            <div className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={70}
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? '★' : '☆'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          product.inStock
                            ? 'bg-pink-500 text-white hover:bg-pink-600 active:scale-95'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add' : 'N/A'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
