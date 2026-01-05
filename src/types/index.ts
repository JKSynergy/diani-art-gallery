// Core types for the Diani Art Gallery website

export interface Artist {
  id: string
  name: string
  slug: string
  email: string
  bio: string
  country: string
  city?: string
  website?: string
  instagram?: string
  phone?: string
  image: string
  featured: boolean
  verified: boolean
  createdAt: Date
  updatedAt: Date
  artworks?: Artwork[]
  exhibitions?: Exhibition[]
  artworkCount?: number
}

export interface Artwork {
  id: string
  title: string
  slug: string
  description: string
  medium: string
  dimensions: string
  year: number
  price: number
  currency: string
  image: string
  additionalImages?: string[]
  available: boolean
  featured: boolean
  category: ArtworkCategory
  style?: string
  technique?: string
  subject?: string
  weight?: number
  condition: string
  provenance?: string
  exhibition_history?: string
  literature?: string
  signature?: string
  frame?: boolean
  certificate?: boolean
  artistId: string
  artist?: Artist
  createdAt: Date
  updatedAt: Date
  orderItems?: OrderItem[]
  wishlistItems?: WishlistItem[]
  views?: number
  likes?: number
}

export interface Exhibition {
  id: string
  title: string
  slug: string
  description: string
  image: string
  startDate: Date
  endDate: Date
  location: string
  curator?: string
  featured: boolean
  status: ExhibitionStatus
  registrationRequired: boolean
  registrationFee?: number
  maxAttendees?: number
  currentAttendees: number
  tags?: string[]
  createdAt: Date
  updatedAt: Date
  artists?: Artist[]
  artworks?: Artwork[]
  registrations?: ExhibitionRegistration[]
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: Date
  country?: string
  city?: string
  address?: string
  postalCode?: string
  role: UserRole
  emailVerified?: Date
  image?: string
  preferences?: UserPreferences
  createdAt: Date
  updatedAt: Date
  orders?: Order[]
  wishlist?: WishlistItem[]
  exhibitions?: ExhibitionRegistration[]
  newsletter: boolean
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  user?: User
  items: OrderItem[]
  totalAmount: number
  currency: string
  status: OrderStatus
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  paymentId?: string
  stripePaymentIntentId?: string
  mpesaCode?: string
  pesapalOrderId?: string
  shippingAddress: Address
  billingAddress?: Address
  shippingMethod: ShippingMethod
  shippingCost: number
  taxAmount: number
  discountAmount?: number
  discountCode?: string
  estimatedDelivery?: Date
  actualDelivery?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  orderId: string
  artworkId: string
  artwork?: Artwork
  quantity: number
  unitPrice: number
  totalPrice: number
  reservationType?: ReservationType
  reservationExpiresAt?: Date
  createdAt: Date
}

export interface WishlistItem {
  id: string
  userId: string
  artworkId: string
  artwork?: Artwork
  createdAt: Date
}

export interface ExhibitionRegistration {
  id: string
  userId: string
  user?: User
  exhibitionId: string
  exhibition?: Exhibition
  registrationDate: Date
  paymentStatus: PaymentStatus
  paymentId?: string
  notes?: string
}

export interface Address {
  firstName: string
  lastName: string
  company?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode: string
  country: string
  phone?: string
}

export interface UserPreferences {
  currency: string
  language: string
  notifications: {
    email: boolean
    newArtworks: boolean
    exhibitions: boolean
    newsletter: boolean
    orderUpdates: boolean
  }
  privacy: {
    showPurchases: boolean
    showWishlist: boolean
  }
}

// Enums
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  ARTIST = 'ARTIST',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export enum ArtworkCategory {
  PAINTING = 'PAINTING',
  SCULPTURE = 'SCULPTURE',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  MIXED_MEDIA = 'MIXED_MEDIA',
  DIGITAL = 'DIGITAL',
  PRINT = 'PRINT',
  TEXTILE = 'TEXTILE',
  CERAMIC = 'CERAMIC',
  JEWELRY = 'JEWELRY',
  OTHER = 'OTHER'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED'
}

export enum PaymentMethod {
  STRIPE = 'STRIPE',
  MPESA = 'MPESA',
  PESAPAL = 'PESAPAL',
  BANK_TRANSFER = 'BANK_TRANSFER'
}

export enum ReservationType {
  DEPOSIT = 'DEPOSIT', // 10% deposit with 7-day hold
  FULL_PAYMENT = 'FULL_PAYMENT'
}

export enum ShippingMethod {
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS',
  OVERNIGHT = 'OVERNIGHT',
  PICKUP = 'PICKUP',
  WHITE_GLOVE = 'WHITE_GLOVE'
}

export enum ExhibitionStatus {
  UPCOMING = 'UPCOMING',
  CURRENT = 'CURRENT',
  PAST = 'PAST',
  CANCELLED = 'CANCELLED'
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Search and filter types
export interface ArtworkFilters {
  category?: ArtworkCategory
  medium?: string
  minPrice?: number
  maxPrice?: number
  artist?: string
  year?: number
  available?: boolean
  featured?: boolean
  style?: string
  subject?: string
  dimensions?: string
  search?: string
  sortBy?: 'price' | 'title' | 'artist' | 'year' | 'created'
  sortOrder?: 'asc' | 'desc'
}

export interface ArtistFilters {
  country?: string
  featured?: boolean
  verified?: boolean
  search?: string
  sortBy?: 'name' | 'country' | 'artworkCount' | 'created'
  sortOrder?: 'asc' | 'desc'
}

export interface ExhibitionFilters {
  status?: ExhibitionStatus
  featured?: boolean
  registrationRequired?: boolean
  search?: string
  startDate?: Date
  endDate?: Date
  sortBy?: 'startDate' | 'title' | 'created'
  sortOrder?: 'asc' | 'desc'
}

// Cart types
export interface CartItem {
  artworkId: string
  artwork: Artwork
  quantity: number
  reservationType: ReservationType
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalAmount: number
  currency: string
}

// Newsletter types
export interface NewsletterSubscription {
  id: string
  email: string
  firstName?: string
  lastName?: string
  preferences: {
    exhibitions: boolean
    newArtworks: boolean
    artistSpotlights: boolean
    events: boolean
  }
  status: 'ACTIVE' | 'UNSUBSCRIBED' | 'BOUNCED'
  subscribedAt: Date
  unsubscribedAt?: Date
}

// Form types
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  artworkInquiry?: string
}

export interface ArtistApplicationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  website?: string
  instagram?: string
  bio: string
  statement: string
  experience: string
  education?: string
  awards?: string
  portfolio: File[]
  cv?: File
  agreeToTerms: boolean
}

export interface NewsletterSignupForm {
  email: string
  firstName?: string
  lastName?: string
  preferences?: {
    exhibitions: boolean
    newArtworks: boolean
    artistSpotlights: boolean
    events: boolean
  }
}