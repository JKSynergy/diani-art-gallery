'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'

// Mock cart data
const mockCartItems = [
  {
    id: '1',
    artworkId: '1',
    title: 'Coastal Serenity',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'coastal-serenity',
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm',
    year: 2024,
    price: 1200,
    image: '/placeholder-artwork-1.jpg',
    quantity: 1,
    available: true
  },
  {
    id: '2',
    artworkId: '4',
    title: 'Monsoon Reflections',
    artist: 'Priya Sharma',
    artistSlug: 'priya-sharma',
    slug: 'monsoon-reflections',
    medium: 'Acrylic on Canvas',
    dimensions: '90 x 70 cm',
    year: 2024,
    price: 750,
    image: '/placeholder-artwork-4.jpg',
    quantity: 1,
    available: true
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [promoCode, setPromoCode] = useState('')
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shippingCost = subtotal > 1000 ? 0 : 50 // Free shipping over $1000
  const discountAmount = isPromoApplied ? subtotal * 0.1 : 0 // 10% discount
  const total = subtotal + shippingCost - discountAmount

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'gallery10') {
      setIsPromoApplied(true)
      alert('Promo code applied! 10% discount')
    } else {
      alert('Invalid promo code')
    }
  }

  const handleCheckout = () => {
    alert('Proceeding to payment... (This would integrate with payment providers)')
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing artworks from our talented artists
            </p>
            <Link href="/artworks" className="btn-primary">
              Browse Artworks
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Cart Items ({cartItems.length})</h2>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    {/* Artwork Image */}
                    <Link href={`/artworks/${item.slug}`} className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-xs text-gray-600">Art</span>
                        </div>
                      </div>
                    </Link>

                    {/* Artwork Details */}
                    <div className="flex-1">
                      <Link href={`/artworks/${item.slug}`} className="group">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600">
                        by <Link href={`/artists/${item.artistSlug}`} className="hover:text-primary-600 transition-colors">
                          {item.artist}
                        </Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.medium} • {item.dimensions} • {item.year}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href="/artworks" 
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    id="promo"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    disabled={isPromoApplied}
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={isPromoApplied || !promoCode}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Apply
                  </button>
                </div>
                {isPromoApplied && (
                  <p className="text-sm text-green-600 mt-1">
                    ✓ Promo code applied (10% off)
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost}`}
                  </span>
                </div>

                {isPromoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {shippingCost === 0 && subtotal > 1000 && (
                  <p className="text-sm text-green-600">
                    🎉 You qualify for free shipping!
                  </p>
                )}

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full btn-primary mt-6 py-3 text-lg font-semibold"
              >
                Proceed to Checkout
              </button>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-blue-600 text-lg">🔒</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Secure Checkout</h3>
                    <p className="text-sm text-blue-600 mt-1">
                      Your payment information is processed securely. We accept MPESA, PESAPAL, and international cards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="mt-6 text-sm text-gray-500 space-y-2">
                <p>
                  <Link href="/policies/returns" className="hover:text-primary-600 transition-colors">
                    Return Policy
                  </Link>
                  {' • '}
                  <Link href="/policies/shipping" className="hover:text-primary-600 transition-colors">
                    Shipping Info
                  </Link>
                </p>
                <p>
                  Questions? <Link href="/contact" className="hover:text-primary-600 transition-colors">Contact us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}