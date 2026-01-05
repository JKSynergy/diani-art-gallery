'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, User, Heart, LogIn } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from your auth context/state

  const navigation = [
    { name: 'Artists', href: '/artists' },
    { name: 'Artworks', href: '/artworks' },
    { name: 'Exhibitions', href: '/exhibitions' },
    { name: 'Visit', href: '/visit' },
    { name: 'Stories', href: '/stories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
              Diani Art Gallery
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/artworks" className="text-gray-700 hover:text-gray-900 font-medium">
              Shop
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/profile" className="text-gray-700 hover:text-gray-900" title="Wishlist">
                  <Heart className="w-5 h-5" />
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-gray-900 relative" title="Shopping Cart">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
                <Link href="/profile" className="text-gray-700 hover:text-gray-900" title="Profile">
                  <User className="w-5 h-5" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-700 hover:text-gray-900 flex items-center">
                  <LogIn className="w-4 h-4 mr-1" />
                  Login
                </Link>
                <Link href="/auth/register" className="btn-primary px-4 py-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  href="/artworks"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/profile"
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Wishlist
                    </Link>
                    <Link
                      href="/cart"
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cart
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      className="block px-3 py-2 bg-blue-600 text-white rounded-lg font-medium mx-3 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}