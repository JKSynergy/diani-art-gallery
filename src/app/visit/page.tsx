'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, MapPin, Phone, Mail, Car, Train, Accessibility, Camera, Baby, Coffee } from 'lucide-react'

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Visit Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience contemporary East African art in the heart of Diani Beach. 
              Plan your visit to discover our world-class exhibitions and collections.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Practical Information */}
          <div className="space-y-8">
            
            {/* Opening Hours */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Opening Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Public Holidays</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Last entry:</strong> 30 minutes before closing time
                </p>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Location & Contact</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Diani Beach Road, Building No. 42<br />
                    Diani Beach, Kwale County<br />
                    Kenya
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">+254 700 123 456</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">info@dianiartgallery.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Here */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Here</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">By Car</h3>
                    <p className="text-gray-600 text-sm">
                      Free parking available. Located on Diani Beach Road, 
                      easily accessible from Mombasa-Lunga Lunga Highway.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Train className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Public Transport</h3>
                    <p className="text-gray-600 text-sm">
                      Matatu routes from Ukunda town. Ask for "Art Gallery" stop 
                      or Baobab Beach Resort area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Information */}
          <div className="space-y-8">
            
            {/* Admission */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admission</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">General Admission</span>
                  <span className="text-2xl font-bold text-primary-600">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Guided Tours</span>
                  <span className="font-medium">KSh 500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Group Tours (10+)</span>
                  <span className="font-medium">KSh 300 per person</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  Students with valid ID receive 50% discount on guided tours
                </p>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Facilities</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Accessibility className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-sm text-gray-600">Wheelchair Accessible</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-sm text-gray-600">Photography Allowed</span>
                </div>
                <div className="flex items-center">
                  <Baby className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-sm text-gray-600">Family Friendly</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-sm text-gray-600">Gallery Café</span>
                </div>
              </div>
            </div>

            {/* Visitor Guidelines */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Visitor Guidelines</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Photography is welcome for personal use (no flash)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Please maintain a respectful distance from artworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Food and drinks are not permitted in exhibition areas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large bags may be checked at reception
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mobile phones should be on silent mode
                </li>
              </ul>
            </div>

            {/* Special Events */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Events</h2>
              <p className="text-gray-600 mb-4">
                Join us for exclusive events including artist talks, exhibition openings, 
                and cultural workshops.
              </p>
              <button className="btn-primary">
                View Upcoming Events
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 border-b">
              <h2 className="text-2xl font-semibold text-gray-900">Find Us</h2>
              <p className="text-gray-600 mt-2">
                Located in the cultural heart of Diani Beach, easily accessible from major hotels and resorts.
              </p>
            </div>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              {/* This would be replaced with an actual map component */}
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive map will be displayed here</p>
                <p className="text-sm text-gray-400 mt-2">
                  Diani Beach Road, Building No. 42, Diani Beach, Kenya
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