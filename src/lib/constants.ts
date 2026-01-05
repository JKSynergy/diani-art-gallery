/**
 * Combine classes utility (placeholder for clsx + tailwind-merge)
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Constants for the application
 */
export const CONSTANTS = {
  // Pagination
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
  
  // File uploads
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  
  // Currencies
  DEFAULT_CURRENCY: 'USD',
  SUPPORTED_CURRENCIES: ['USD', 'KES', 'EUR', 'GBP'],
  
  // Reservation
  DEPOSIT_PERCENTAGE: 0.10, // 10%
  RESERVATION_HOLD_DAYS: 7,
  
  // Gallery info
  GALLERY_NAME: 'Diani Art Gallery',
  GALLERY_EMAIL: 'info@dianartgallery.com',
  GALLERY_PHONE: '+254 700 103511',
  GALLERY_ADDRESS: 'Diani Beach Road, Diani Beach, Kwale County, Kenya',
  
  // Social media
  SOCIAL_LINKS: {
    facebook: 'https://facebook.com/dianartgallery',
    instagram: 'https://instagram.com/dianartgallery',
    twitter: 'https://twitter.com/dianartgallery',
  },
  
  // API limits
  RATE_LIMIT_REQUESTS: 100,
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  
  // Search
  MIN_SEARCH_LENGTH: 2,
  MAX_SEARCH_RESULTS: 50,
  
  // Image dimensions
  IMAGE_SIZES: {
    thumbnail: { width: 300, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
    hero: { width: 1920, height: 1080 },
  },
} as const

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
    verifyEmail: '/api/auth/verify-email',
  },
  
  // Users
  users: {
    profile: '/api/users/profile',
    update: '/api/users/update',
    delete: '/api/users/delete',
    wishlist: '/api/users/wishlist',
    orders: '/api/users/orders',
  },
  
  // Artists
  artists: {
    list: '/api/artists',
    detail: (slug: string) => `/api/artists/${slug}`,
    apply: '/api/artists/apply',
    artworks: (slug: string) => `/api/artists/${slug}/artworks`,
  },
  
  // Artworks
  artworks: {
    list: '/api/artworks',
    detail: (slug: string) => `/api/artworks/${slug}`,
    search: '/api/artworks/search',
    featured: '/api/artworks/featured',
    similar: (id: string) => `/api/artworks/${id}/similar`,
  },
  
  // Exhibitions
  exhibitions: {
    list: '/api/exhibitions',
    detail: (slug: string) => `/api/exhibitions/${slug}`,
    current: '/api/exhibitions/current',
    upcoming: '/api/exhibitions/upcoming',
    register: (id: string) => `/api/exhibitions/${id}/register`,
  },
  
  // Orders
  orders: {
    create: '/api/orders',
    detail: (id: string) => `/api/orders/${id}`,
    update: (id: string) => `/api/orders/${id}`,
    cancel: (id: string) => `/api/orders/${id}/cancel`,
  },
  
  // Payments
  payments: {
    stripe: {
      createIntent: '/api/payments/stripe/create-intent',
      confirm: '/api/payments/stripe/confirm',
      webhook: '/api/payments/stripe/webhook',
    },
    mpesa: {
      stkPush: '/api/payments/mpesa/stk-push',
      callback: '/api/payments/mpesa/callback',
      query: '/api/payments/mpesa/query',
    },
    pesapal: {
      initiate: '/api/payments/pesapal/initiate',
      callback: '/api/payments/pesapal/callback',
      query: '/api/payments/pesapal/query',
    },
  },
  
  // Admin
  admin: {
    dashboard: '/api/admin/dashboard',
    users: '/api/admin/users',
    artists: '/api/admin/artists',
    artworks: '/api/admin/artworks',
    exhibitions: '/api/admin/exhibitions',
    orders: '/api/admin/orders',
    analytics: '/api/admin/analytics',
  },
  
  // Miscellaneous
  newsletter: '/api/newsletter/subscribe',
  contact: '/api/contact',
  upload: '/api/upload',
  search: '/api/search',
} as const

/**
 * Routes for navigation
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  visit: '/visit',
  stories: '/stories',
  
  // Artists
  artists: '/artists',
  artistDetail: (slug: string) => `/artists/${slug}`,
  artistApply: '/artists/apply',
  
  // Artworks
  artworks: '/artworks',
  artworkDetail: (slug: string) => `/artworks/${slug}`,
  
  // Exhibitions
  exhibitions: '/exhibitions',
  exhibitionDetail: (slug: string) => `/exhibitions/${slug}`,
  
  // Authentication
  login: '/auth/login',
  register: '/auth/register',
  forgotPassword: '/auth/forgot-password',
  
  // User
  profile: '/profile',
  orders: '/profile/orders',
  wishlist: '/profile/wishlist',
  
  // Shopping
  cart: '/cart',
  checkout: '/checkout',
  
  // Admin
  adminDashboard: '/admin',
  adminArtists: '/admin/artists',
  adminArtworks: '/admin/artworks',
  adminExhibitions: '/admin/exhibitions',
  adminOrders: '/admin/orders',
  adminUsers: '/admin/users',
} as const

/**
 * Status messages
 */
export const MESSAGES = {
  success: {
    login: 'Successfully logged in',
    register: 'Account created successfully',
    logout: 'Successfully logged out',
    profileUpdate: 'Profile updated successfully',
    orderPlaced: 'Order placed successfully',
    paymentComplete: 'Payment completed successfully',
    newsletterSubscribe: 'Successfully subscribed to newsletter',
    contactSubmit: 'Message sent successfully',
    artistApplication: 'Application submitted successfully',
  },
  
  error: {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    unauthorized: 'You are not authorized to perform this action.',
    notFound: 'The requested resource was not found.',
    validation: 'Please check your input and try again.',
    payment: 'Payment failed. Please try again.',
    server: 'Server error. Please try again later.',
    maintenance: 'The site is under maintenance. Please try again later.',
  },
  
  loading: {
    default: 'Loading...',
    artworks: 'Loading artworks...',
    artists: 'Loading artists...',
    exhibitions: 'Loading exhibitions...',
    payment: 'Processing payment...',
    uploading: 'Uploading files...',
  },
} as const

/**
 * Color schemes for different artwork categories
 */
export const CATEGORY_COLORS = {
  PAINTING: 'bg-red-100 text-red-800',
  SCULPTURE: 'bg-blue-100 text-blue-800',
  PHOTOGRAPHY: 'bg-green-100 text-green-800',
  MIXED_MEDIA: 'bg-purple-100 text-purple-800',
  DIGITAL: 'bg-cyan-100 text-cyan-800',
  PRINT: 'bg-orange-100 text-orange-800',
  TEXTILE: 'bg-pink-100 text-pink-800',
  CERAMIC: 'bg-amber-100 text-amber-800',
  JEWELRY: 'bg-emerald-100 text-emerald-800',
  OTHER: 'bg-gray-100 text-gray-800',
} as const

/**
 * Status colors for orders and payments
 */
export const STATUS_COLORS = {
  // Order statuses
  PENDING: 'bg-yellow-100 text-yellow-800',
  CONFIRMED: 'bg-blue-100 text-blue-800',
  PROCESSING: 'bg-purple-100 text-purple-800',
  SHIPPED: 'bg-indigo-100 text-indigo-800',
  DELIVERED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800',
  REFUNDED: 'bg-gray-100 text-gray-800',
  
  // Payment statuses
  COMPLETED: 'bg-green-100 text-green-800',
  FAILED: 'bg-red-100 text-red-800',
} as const

/**
 * Feature flags for development
 */
export const FEATURE_FLAGS = {
  enableMpesa: process.env.NODE_ENV === 'production',
  enablePesapal: process.env.NODE_ENV === 'production',
  enableStripe: true,
  enableNewsletter: true,
  enableWishlist: true,
  enableReservations: true,
  enableExhibitionRegistration: true,
  enableArtistApplications: true,
} as const

/**
 * Environment configuration
 */
export const ENV = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  
  // External services
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  facebookPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
} as const