import Image from 'next/image'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import WaveAnimation from './animations/WaveAnimation'

const products = [
  {
    id: 1,
    name: 'Radiant Glow Foundation',
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1631214540242-3cd2c4d5e5a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Luxury Lipstick Set',
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Limited Edition'
  },
  {
    id: 3,
    name: 'Hydrating Face Serum',
    price: 65,
    originalPrice: 85,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'New'
  },
  {
    id: 4,
    name: 'Professional Makeup Brush Set',
    price: 125,
    originalPrice: 180,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1583241800698-9c2e8b2b3b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Pro Choice'
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 h-64">
        <WaveAnimation />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, handpicked by beauty experts
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
                
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart size={18} className="text-gray-600 hover:text-primary-600" />
                </button>
                
                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-primary-600 text-white py-2 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <ShoppingCart size={18} className="mr-2" />
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save ${product.originalPrice - product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}