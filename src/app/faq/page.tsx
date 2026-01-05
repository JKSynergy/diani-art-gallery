import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { generatePageMetadata, generateFAQSchema, generateJsonLdScript } from '@/lib/seo'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions | Diani Art Gallery',
  description: 'Get answers to common questions about buying African art, shipping, authenticity, payments, and visiting our Diani Beach gallery. Expert guidance for art collectors.',
  keywords: [
    'art gallery FAQ',
    'buying African art',
    'art shipping Kenya',
    'art authenticity',
    'art payment options',
    'gallery visit information',
    'African art collecting'
  ],
  path: '/faq'
})

const faqs = [
  {
    category: 'Buying Art',
    questions: [
      {
        question: 'How do I purchase artwork from Diani Art Gallery?',
        answer: 'You can purchase art directly through our website by clicking "Buy Now" on any available artwork. We also accept reservations with a 10% deposit to hold an artwork for 7 days. Alternatively, visit our gallery in person or contact us via email or phone to arrange your purchase.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept multiple payment methods for your convenience: Stripe (credit/debit cards), M-PESA (Kenya mobile payments), and PESAPAL for secure online transactions. International customers can pay via credit card or bank transfer.'
      },
      {
        question: 'Can I reserve an artwork before purchasing?',
        answer: 'Yes! You can reserve any available artwork with a 10% deposit. This holds the piece for 7 days, giving you time to arrange full payment or visit the gallery in person. If you decide not to proceed, deposits are non-refundable but can be applied to other artworks.'
      },
      {
        question: 'Do artworks come with certificates of authenticity?',
        answer: 'Absolutely. Every artwork purchased from Diani Art Gallery includes a certificate of authenticity signed by the artist and our gallery. This certificate documents the artwork\'s provenance, materials, dimensions, and creation date.'
      }
    ]
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship worldwide. We use professional art shipping services with full insurance coverage. Domestic Kenya shipping is free for most orders. International shipping costs are calculated based on destination, size, and weight of the artwork. Delivery typically takes 5-10 business days within Kenya and 2-4 weeks internationally.'
      },
      {
        question: 'How is artwork packaged for shipping?',
        answer: 'We take great care in packaging artwork. Paintings are wrapped in acid-free paper, protected with bubble wrap and foam corner protectors, then placed in custom wooden crates. Sculptures are individually wrapped and secured. All shipments are fully insured against damage or loss during transit.'
      },
      {
        question: 'What if my artwork arrives damaged?',
        answer: 'While extremely rare due to our professional packaging, if your artwork arrives damaged, contact us immediately with photos. All shipments are fully insured. We\'ll arrange for repair, replacement, or full refund depending on the situation.'
      }
    ]
  },
  {
    category: 'Artists & Artworks',
    questions: [
      {
        question: 'How do you select artists for the gallery?',
        answer: 'We carefully curate our artist roster based on artistic excellence, originality, and professional practice. Our selection committee reviews artist portfolios, exhibitions history, and artistic vision. We focus on contemporary East African artists while also featuring select international artists with connections to the region.'
      },
      {
        question: 'Can I commission a custom artwork?',
        answer: 'Yes! Many of our artists accept commissions. Contact us with details about size, subject matter, colors, and budget. We\'ll connect you with suitable artists, provide quotes, and manage the commission process. Custom works typically take 4-8 weeks depending on complexity.'
      },
      {
        question: 'Are the prices negotiable?',
        answer: 'Our pricing reflects the fair market value of each artist\'s work and supports sustainable artistic practice. While we generally maintain set prices, we\'re happy to discuss payment plans for higher-value pieces or multi-artwork purchases.'
      },
      {
        question: 'What happens if an artwork I want is sold?',
        answer: 'If an artwork sells, it will be marked as unavailable on our website. We can notify you of similar works by the same artist or help you find comparable pieces. Many of our artists can create similar works or accept commissions.'
      }
    ]
  },
  {
    category: 'Gallery Visits',
    questions: [
      {
        question: 'What are your gallery hours?',
        answer: 'We\'re open Monday through Saturday, 9:00 AM to 6:00 PM. The gallery is closed on Sundays and public holidays. We recommend calling ahead for special viewing requests or private tours.'
      },
      {
        question: 'Where is the gallery located?',
        answer: 'Diani Art Gallery is located on Diani Beach Road in Kwale County, Kenya. We\'re easily accessible from Diani Beach hotels and the Ukunda airstrip. Parking is available on-site.'
      },
      {
        question: 'Can I visit without an appointment?',
        answer: 'Yes, walk-ins are always welcome during gallery hours. However, if you\'re interested in specific artworks or artists, scheduling an appointment ensures our art consultants can provide focused attention and have relevant works available for viewing.'
      },
      {
        question: 'Do you offer guided tours?',
        answer: 'Yes! We offer complimentary guided tours of current exhibitions by appointment. Tours typically last 30-45 minutes and provide insights into the artists, artworks, and themes. Contact us to schedule a tour.'
      }
    ]
  },
  {
    category: 'For Artists',
    questions: [
      {
        question: 'How can I exhibit my work at Diani Art Gallery?',
        answer: 'We welcome submissions from talented contemporary artists. Visit our "Apply as Artist" page to submit your portfolio, including 10-15 images of recent work, artist statement, CV, and contact information. Our selection committee reviews submissions quarterly.'
      },
      {
        question: 'What is your commission structure?',
        answer: 'We work on a consignment basis with a standard gallery commission. Rates vary based on artist experience, exhibition type, and other factors. We discuss all terms transparently before any agreement. Contact us for detailed information.'
      },
      {
        question: 'Do you represent emerging artists?',
        answer: 'Absolutely! We\'re committed to supporting emerging talent alongside established artists. We look for strong artistic vision, professional practice, and dedication to craft regardless of career stage.'
      }
    ]
  },
  {
    category: 'Care & Maintenance',
    questions: [
      {
        question: 'How should I care for my artwork?',
        answer: 'Keep artworks away from direct sunlight, extreme temperatures, and humidity. Dust paintings gently with a soft, dry cloth. Avoid using cleaning chemicals. For valuable pieces, consider UV-protective glass. We provide detailed care instructions with each purchase.'
      },
      {
        question: 'Should I frame my artwork?',
        answer: 'Framing is recommended for works on paper and can enhance any artwork. We offer professional framing services or can recommend trusted framers. Many paintings are sold unframed to allow you to choose framing that matches your space.'
      }
    ]
  }
]

export default function FAQPage() {
  // Generate FAQ schema for all questions
  const allFAQs = faqs.flatMap(category => category.questions)
  const faqSchema = generateFAQSchema(allFAQs)

  return (
    <main className="min-h-screen">
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(faqSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-100">
            Everything you need to know about buying art, visiting our gallery, and working with us
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 pb-4 border-b-2 border-primary-200">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <details 
                    key={faqIndex}
                    className="group bg-secondary-50 rounded-lg overflow-hidden"
                  >
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-secondary-100 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Contact Us
            </a>
            <a 
              href="tel:+254XXXXXXXXX" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Call Gallery
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
