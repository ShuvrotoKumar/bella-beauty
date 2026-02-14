'use client'

import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Search, Filter, Star, Heart, ShoppingCart, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// Lazy load components
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
})

// Extended product data for shop
const allProducts = [
  {
    id: 1,
    name: 'Radiant Glow Foundation',
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1631214540242-3cd2c4d5e5a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Bestseller',
    category: 'Foundation',
    inStock: true
  },
  {
    id: 2,
    name: 'Luxury Lipstick Set',
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Limited Edition',
    category: 'Lipstick',
    inStock: true
  },
  {
    id: 3,
    name: 'Hydrating Face Serum',
    price: 65,
    originalPrice: 85,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'New',
    category: 'Serum',
    inStock: true
  },
  {
    id: 4,
    name: 'Professional Makeup Brush Set',
    price: 125,
    originalPrice: 180,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1583241800698-9c2e8b2b3b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Pro Choice',
    category: 'Brushes',
    inStock: true
  },
  {
    id: 5,
    name: 'Velvet Matte Lipstick',
    price: 32,
    originalPrice: 45,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Trending',
    category: 'Lipstick',
    inStock: true
  },
  {
    id: 6,
    name: 'Anti-Aging Night Cream',
    price: 78,
    originalPrice: 95,
    rating: 4.8,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
    category: 'Cream',
    inStock: true
  },
  {
    id: 7,
    name: 'Smoky Eye Palette',
    price: 55,
    originalPrice: 70,
    rating: 4.7,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'New',
    category: 'Eyeshadow',
    inStock: false
  },
  {
    id: 8,
    name: 'Nourishing Hair Oil',
    price: 28,
    originalPrice: 40,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75',
    badge: 'Sale',
    category: 'Hair Care',
    inStock: true
  }
]

const categories = ['All', 'Foundation', 'Lipstick', 'Serum', 'Brushes', 'Cream', 'Eyeshadow', 'Hair Care']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest']

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(product.rating)
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={
            i < fullStars
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
          }
        />
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={70}
        />
        
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.badge}
          </span>
        </div>
        
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-primary-600" />
        </button>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            disabled={!product.inStock}
            className={`w-full py-2 rounded-full font-medium transition-colors flex items-center justify-center ${
              product.inStock
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={18} className="mr-2" />
            {product.inStock ? 'Quick Add' : 'Unavailable'}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>
          <span className="text-sm text-green-600 font-medium">
            Save ${product.originalPrice - product.price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState(200)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice = product.price <= priceRange
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort products
    switch (sortBy) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'Rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'Newest':
        filtered = filtered.filter(p => p.badge === 'New').concat(filtered.filter(p => p.badge !== 'New'))
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy, priceRange])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Shop Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Shop All Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium beauty products
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* Price Range Filter (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 mt-4">
            <span className="text-gray-700 font-medium">Max Price:</span>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-48 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <span className="text-primary-600 font-semibold">${priceRange}</span>
          </div>
        </div>
      </section>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Max Price:</span>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <span className="text-primary-600 font-semibold">${priceRange}</span>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-gray-600">
            Showing {filteredAndSortedProducts.length} of {allProducts.length} products
          </div>

          {/* Products */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      <Suspense fallback={<div className="bg-gray-900 h-64 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </main>
  )
}   


