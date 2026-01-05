import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, MapPin, Star, ArrowRight, Play, Users, Award } from 'lucide-react'
import { generatePageMetadata, generateLocalBusinessSchema, generateJsonLdScript } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contemporary African Art Gallery | Diani Art Gallery Kenya',
  description: 'Discover original contemporary African art by Kenya\'s leading artists. Shop paintings, sculptures & photography from our coastal gallery in Diani Beach. 150+ artists, 2500+ artworks.',
  keywords: [
    'African art gallery Kenya',
    'contemporary art Diani',
    'buy African paintings',
    'Kenya artists',
    'Diani Beach gallery',
    'African sculptures',
    'coastal art gallery',
    'East African art',
    'Kenyan contemporary art',
    'art exhibitions Kenya'
  ],
  path: '/'
})

const featuredArtworks = [
  {
    id: '1',
    title: 'Ocean Rhythms',
    artist: 'Wanjiku Kamuyu',
    price: 1250,
    medium: 'Acrylic on Canvas',
    dimensions: '120 x 90 cm',
    slug: 'ocean-rhythms',
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=500&fit=crop&crop=center'
  },
  {
    id: '2',
    title: 'Urban Pulse',
    artist: 'David Mwangi',
    price: 950,
    medium: 'Mixed Media',
    dimensions: '100 x 100 cm',
    slug: 'urban-pulse',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop&crop=center'
  },
  {
    id: '3',
    title: 'Heritage Song',
    artist: 'Grace Njeri',
    price: 1800,
    medium: 'Oil on Canvas',
    dimensions: '150 x 120 cm',
    slug: 'heritage-song',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop&crop=center'
  },
  {
    id: '4',
    title: 'Coastal Dreams',
    artist: 'Peter Otieno',
    price: 750,
    medium: 'Watercolor',
    dimensions: '80 x 60 cm',
    slug: 'coastal-dreams',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=500&fit=crop&crop=center'
  }
]

const currentExhibition = {
  title: 'Coastal Rhythms',
  description: 'A celebration of the ocean\'s influence on contemporary East African art',
  startDate: '2024-10-15',
  endDate: '2024-12-30',
  artistCount: 8,
  artworkCount: 24
}

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema()
  
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(localBusinessSchema) }}
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero Background Image */}
        <Image
          src="/wood-hero.jpg"
          alt="Diani Art Gallery - Wood Art Interior"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-700/30"></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            Contemporary Art
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-accent-200">
            on Kenya's Coast
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional contemporary art from East African and international artists 
            in the heart of Diani Beach. Where culture meets creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/artworks" className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-secondary-50 font-semibold">
              Explore Artworks
            </Link>
            <Link href="/exhibitions" className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary-600 font-semibold">
              Current Exhibitions
            </Link>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sm opacity-90">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">2,500+</div>
              <div className="text-sm opacity-90">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">85</div>
              <div className="text-sm opacity-90">Exhibitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm opacity-90">Years</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Current Exhibition Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Current Exhibition</span>
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mt-2 mb-6">
                {currentExhibition.title}
              </h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {currentExhibition.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Until</div>
                    <div className="font-medium">Dec 30, 2024</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Featured</div>
                    <div className="font-medium">{currentExhibition.artistCount} Artists</div>
                  </div>
                </div>
              </div>
              
              <Link href="/exhibitions/coastal-rhythms" className="btn-primary inline-flex items-center">
                Explore Exhibition
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=450&fit=crop&crop=center"
                  alt="Coastal Rhythms Exhibition - Featured Artwork"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <Play className="w-8 h-8 text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">Virtual Tour</div>
                    <div className="text-sm text-gray-500">3D Gallery Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Featured Artworks</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Discover exceptional pieces from our current collection, carefully curated to showcase 
              the diversity and talent of contemporary East African artists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <Link href={`/artworks/${artwork.slug}`}>
                  <div className="aspect-[4/5] bg-gray-200 rounded-t-lg overflow-hidden">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    <Link href={`/artworks/${artwork.slug}`}>{artwork.title}</Link>
                  </h3>
                  <p className="text-primary-600 text-sm font-medium mb-2">
                    <Link href={`/artists/${artwork.artist.toLowerCase().replace(' ', '-')}`}>
                      {artwork.artist}
                    </Link>
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{artwork.medium}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${artwork.price.toLocaleString()}</span>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/artworks" className="btn-outline">
              View All Artworks
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-neutral-700">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/artworks?filter=new" className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 hover:from-primary-100 hover:to-primary-200 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-50 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">New Arrivals</h3>
                <p className="text-sm text-neutral-600">Latest additions</p>
              </div>
            </Link>
            <Link href="/artworks?medium=painting" className="group bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 hover:from-accent-100 hover:to-accent-200 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-50 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Paintings</h3>
                <p className="text-sm text-gray-600">Oil, acrylic & more</p>
              </div>
            </Link>
            <Link href="/artworks?medium=sculpture" className="group bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8 hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl">🗿</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">Sculptures</h3>
                <p className="text-sm text-neutral-600">3D contemporary art</p>
              </div>
            </Link>
            <Link href="/artworks?price=under-1000" className="group bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-8 hover:from-neutral-100 hover:to-neutral-200 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-50 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">Under $1,000</h3>
                <p className="text-sm text-neutral-600">Accessible art</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Featured Artists</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Meet the talented artists whose innovative work and unique perspectives define contemporary East African art
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Wanjiku Kamuyu',
                specialty: 'Abstract Expressionist',
                bio: 'Known for vibrant canvases that capture the energy of Kenyan landscapes and urban life',
                artworkCount: 15,
                slug: 'wanjiku-kamuyu',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'David Mwangi',
                specialty: 'Mixed Media Artist',
                bio: 'Combines traditional materials with contemporary techniques to explore cultural identity',
                artworkCount: 22,
                slug: 'david-mwangi',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'Grace Njeri',
                specialty: 'Contemporary Painter',
                bio: 'Creates powerful narratives through her large-scale oil paintings and installations',
                artworkCount: 18,
                slug: 'grace-njeri',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
              }
            ].map((artist, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-56 h-56 mx-auto bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {artist.artworkCount}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-2">{artist.name}</h3>
                <p className="text-accent-600 font-medium mb-4">{artist.specialty}</p>
                <p className="text-neutral-700 mb-6 leading-relaxed max-w-sm mx-auto">{artist.bio}</p>
                <Link 
                  href={`/artists/${artist.slug}`} 
                  className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/artists" className="bg-primary-900 text-white hover:bg-primary-800 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center">
              Discover All Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Experience */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Experience Art in Person at Diani Beach Gallery</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Visit Kenya's premier contemporary art gallery in Diani Beach, where each artwork is thoughtfully displayed 
                to create an immersive cultural experience. Browse original African paintings, sculptures, and photography 
                by East Africa's most talented contemporary artists. Our knowledgeable team provides personalized guidance 
                to help collectors and art enthusiasts discover exceptional pieces.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-accent-400 mr-3" />
                  <div>
                    <div className="font-semibold">Expert Curation</div>
                    <div className="text-gray-400 text-sm">Professional art advisors</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-accent-400 mr-3" />
                  <div>
                    <div className="font-semibold">Prime Location</div>
                    <div className="text-gray-400 text-sm">Heart of Diani Beach</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/visit" className="btn-primary">
                  Plan Your Visit
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Gallery
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
                  alt="Diani Art Gallery Interior - Contemporary African Art Exhibition Space"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-accent-500 text-gray-900 rounded-lg p-4">
                <div className="font-bold text-2xl">6</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Why Choose Diani Art Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
              Kenya's Leading Contemporary African Art Gallery
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Located in the heart of Diani Beach on Kenya's beautiful coastline, Diani Art Gallery has been 
              showcasing exceptional contemporary African art since 2019. We represent over 150 talented East 
              African and international artists, featuring a diverse collection of paintings, sculptures, 
              photography, and mixed media artworks that celebrate African culture and contemporary expression.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our gallery specializes in emerging and established Kenyan artists, providing a platform for 
              creative voices from across East Africa. Whether you're an experienced art collector or 
              beginning your collection journey, we offer personalized service to help you find the perfect 
              piece. From vibrant coastal landscapes and abstract expressionism to traditional-inspired 
              contemporary works, our carefully curated collection represents the best of African contemporary art.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-primary-900 mt-8 mb-4">
              Art Collection Services
            </h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>Original contemporary paintings by Kenyan and East African artists</li>
              <li>Sculptures in wood, stone, bronze, and mixed media</li>
              <li>Fine art photography showcasing African landscapes and culture</li>
              <li>Secure worldwide shipping with professional art handling</li>
              <li>Flexible payment options including reservations with 10% deposit</li>
              <li>Certificate of authenticity with every purchase</li>
              <li>Art advisory services for collectors and interior designers</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary-900 mt-8 mb-4">
              Visit Our Gallery in Diani Beach
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Experience art in our beautiful gallery space located on Diani Beach Road, Kwale County. 
              We're open Monday through Saturday from 9:00 AM to 6:00 PM. Private viewings and guided 
              tours are available by appointment. Our team of art consultants is ready to assist you 
              in finding the perfect artwork for your home or office.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Get exclusive updates on new exhibitions, artist features, gallery events, 
            and early access to artwork launches. Join our community of art enthusiasts.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:ring-2 focus:ring-accent-400 focus:outline-none"
              required
            />
            <button type="submit" className="bg-accent-500 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-accent-400 transition-colors">
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-primary-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}