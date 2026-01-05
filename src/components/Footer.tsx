import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Gallery Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Diani Art Gallery</h3>
            <p className="text-gray-300 mb-4">
              Showcasing contemporary art on Kenya's beautiful coast since 2020
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-gray-300 hover:text-white transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/artworks" className="text-gray-300 hover:text-white transition-colors">
                  Artworks
                </Link>
              </li>
              <li>
                <Link href="/exhibitions" className="text-gray-300 hover:text-white transition-colors">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/visit" className="text-gray-300 hover:text-white transition-colors">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/exhibitions/upcoming" className="text-gray-300 hover:text-white transition-colors">
                  Upcoming Exhibitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/provenance" className="text-gray-300 hover:text-white transition-colors">
                  Certificates & Provenance
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">
                Diani Beach Road<br />
                Diani Beach, Kwale County<br />
                Kenya
              </p>
              <p className="text-gray-300 mt-2">
                Phone: +254 700 103511<br />
                Email: info@dianartgallery.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Gallery Hours</h4>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 8:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Diani Art Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}