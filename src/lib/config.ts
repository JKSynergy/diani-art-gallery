// Configuration for the Diani Art Gallery application

export const siteConfig = {
  name: "Diani Art Gallery",
  description: "Contemporary art gallery showcasing East African and international artists on Kenya's coast",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  keywords: ["art gallery", "contemporary art", "Kenya", "Diani", "East African art", "paintings", "sculptures"],
  
  // Gallery information
  gallery: {
    name: "Diani Art Gallery",
    email: "info@dianartgallery.com",
    phone: "+254 700 103511",
    address: {
      street: "Diani Beach Road",
      city: "Diani Beach",
      state: "Kwale County",
      country: "Kenya",
      full: "Diani Beach Road, Diani Beach, Kwale County, Kenya"
    },
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 8:00 PM",
      sunday: "12:00 PM - 5:00 PM"
    }
  },
  
  // Social media
  social: {
    facebook: "https://facebook.com/dianartgallery",
    instagram: "https://instagram.com/dianartgallery",
    twitter: "https://twitter.com/dianartgallery",
  },
  
  // Features
  features: {
    newsletter: true,
    wishlist: true,
    reservations: true,
    exhibitions: true,
    artistApplications: true,
    multiplePaymentMethods: true,
  },
  
  // Payment methods
  payments: {
    stripe: process.env.ENABLE_STRIPE === 'true',
    mpesa: process.env.ENABLE_MPESA === 'true',
    pesapal: process.env.ENABLE_PESAPAL === 'true',
  },
  
  // Navigation
  mainNav: [
    {
      title: "Artists",
      href: "/artists",
      description: "Discover talented contemporary artists"
    },
    {
      title: "Artworks",
      href: "/artworks",
      description: "Browse our curated collection"
    },
    {
      title: "Exhibitions",
      href: "/exhibitions",
      description: "Current and upcoming exhibitions"
    },
    {
      title: "Visit",
      href: "/visit",
      description: "Plan your gallery visit"
    },
    {
      title: "Stories",
      href: "/stories",
      description: "Art stories and insights"
    },
    {
      title: "About",
      href: "/about",
      description: "Learn about our gallery"
    }
  ],
  
  // Footer links
  footerNav: {
    explore: [
      { title: "Artists", href: "/artists" },
      { title: "Artworks", href: "/artworks" },
      { title: "Exhibitions", href: "/exhibitions" },
      { title: "Stories", href: "/stories" }
    ],
    visit: [
      { title: "Hours & Location", href: "/visit" },
      { title: "Contact", href: "/contact" },
      { title: "About", href: "/about" },
      { title: "Upcoming Exhibitions", href: "/exhibitions?status=upcoming" }
    ],
    support: [
      { title: "FAQs", href: "/faqs" },
      { title: "Shipping & Returns", href: "/shipping-returns" },
      { title: "Certificates & Provenance", href: "/provenance" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Use", href: "/terms" }
    ]
  }
}

export type SiteConfig = typeof siteConfig