'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X, Heart, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary-600 cursor-pointer hover:text-primary-700 transition-colors">Bella Beauty</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Shop</Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Shop</a>
              <Link href="/categories" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}