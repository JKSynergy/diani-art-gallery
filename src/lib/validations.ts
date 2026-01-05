import { z } from 'zod'
import { UserRole, ArtworkCategory, PaymentMethod, ReservationType, ShippingMethod } from '@/types'

// User validation schemas
export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  phone: z.string().optional(),
  country: z.string().min(2, 'Please select a country'),
  newsletter: z.boolean().default(false),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().default(false),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
})

// Artist validation schemas
export const artistApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country: z.string().min(2, 'Please select a country'),
  city: z.string().min(2, 'City is required'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  instagram: z.string().optional(),
  bio: z.string().min(100, 'Bio must be at least 100 characters').max(1000, 'Bio must not exceed 1000 characters'),
  statement: z.string().min(200, 'Artist statement must be at least 200 characters').max(2000, 'Artist statement must not exceed 2000 characters'),
  experience: z.string().min(50, 'Please describe your experience (minimum 50 characters)'),
  education: z.string().optional(),
  awards: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
})

// Artwork validation schemas
export const artworkCreateSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters').max(100, 'Title must not exceed 100 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters').max(2000, 'Description must not exceed 2000 characters'),
  medium: z.string().min(2, 'Medium is required'),
  dimensions: z.string().min(3, 'Dimensions are required (e.g., 100 x 120 cm)'),
  year: z.number().min(1900, 'Year must be 1900 or later').max(new Date().getFullYear(), 'Year cannot be in the future'),
  price: z.number().positive('Price must be greater than 0'),
  currency: z.string().default('USD'),
  category: z.nativeEnum(ArtworkCategory),
  style: z.string().optional(),
  technique: z.string().optional(),
  subject: z.string().optional(),
  weight: z.number().positive().optional(),
  condition: z.string().default('Excellent'),
  provenance: z.string().optional(),
  exhibition_history: z.string().optional(),
  literature: z.string().optional(),
  signature: z.string().optional(),
  frame: z.boolean().default(false),
  certificate: z.boolean().default(false),
  available: z.boolean().default(true),
  featured: z.boolean().default(false),
})

export const artworkUpdateSchema = artworkCreateSchema.partial()

// Exhibition validation schemas
export const exhibitionCreateSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(100, 'Title must not exceed 100 characters'),
  description: z.string().min(100, 'Description must be at least 100 characters').max(2000, 'Description must not exceed 2000 characters'),
  startDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: 'Start date must be in the future',
  }),
  endDate: z.string(),
  location: z.string().min(5, 'Location is required'),
  curator: z.string().optional(),
  registrationRequired: z.boolean().default(false),
  registrationFee: z.number().min(0).optional(),
  maxAttendees: z.number().positive().optional(),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
}).refine((data) => new Date(data.endDate) > new Date(data.startDate), {
  message: 'End date must be after start date',
  path: ['endDate'],
})

// Order validation schemas
export const orderCreateSchema = z.object({
  items: z.array(z.object({
    artworkId: z.string().min(1, 'Artwork ID is required'),
    quantity: z.number().positive('Quantity must be positive'),
    reservationType: z.nativeEnum(ReservationType),
  })).min(1, 'At least one item is required'),
  shippingAddress: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    company: z.string().optional(),
    addressLine1: z.string().min(5, 'Address is required'),
    addressLine2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().optional(),
    postalCode: z.string().min(3, 'Postal code is required'),
    country: z.string().min(2, 'Country is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
  }),
  billingAddress: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    company: z.string().optional(),
    addressLine1: z.string().min(5, 'Address is required'),
    addressLine2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().optional(),
    postalCode: z.string().min(3, 'Postal code is required'),
    country: z.string().min(2, 'Country is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
  }).optional(),
  paymentMethod: z.nativeEnum(PaymentMethod),
  shippingMethod: z.nativeEnum(ShippingMethod),
  notes: z.string().max(500, 'Notes must not exceed 500 characters').optional(),
})

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message must not exceed 2000 characters'),
  artworkInquiry: z.string().optional(),
})

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters').optional(),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').optional(),
  preferences: z.object({
    exhibitions: z.boolean().default(true),
    newArtworks: z.boolean().default(true),
    artistSpotlights: z.boolean().default(true),
    events: z.boolean().default(true),
  }).optional(),
})

// Search and filter validation
export const artworkFiltersSchema = z.object({
  category: z.nativeEnum(ArtworkCategory).optional(),
  medium: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  artist: z.string().optional(),
  year: z.number().min(1900).max(new Date().getFullYear()).optional(),
  available: z.boolean().optional(),
  featured: z.boolean().optional(),
  style: z.string().optional(),
  subject: z.string().optional(),
  search: z.string().optional(),
  sortBy: z.enum(['price', 'title', 'artist', 'year', 'created']).default('created'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(12),
})

export const artistFiltersSchema = z.object({
  country: z.string().optional(),
  featured: z.boolean().optional(),
  verified: z.boolean().optional(),
  search: z.string().optional(),
  sortBy: z.enum(['name', 'country', 'artworkCount', 'created']).default('name'),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(12),
})

export const exhibitionFiltersSchema = z.object({
  status: z.enum(['UPCOMING', 'CURRENT', 'PAST', 'CANCELLED']).optional(),
  featured: z.boolean().optional(),
  registrationRequired: z.boolean().optional(),
  search: z.string().optional(),
  sortBy: z.enum(['startDate', 'title', 'created']).default('startDate'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(12),
})

// Admin validation schemas
export const adminUserUpdateSchema = z.object({
  role: z.nativeEnum(UserRole),
  emailVerified: z.boolean().optional(),
})

export const adminArtworkUpdateSchema = z.object({
  featured: z.boolean().optional(),
  available: z.boolean().optional(),
  price: z.number().positive().optional(),
})

// File upload validation
export const fileUploadSchema = z.object({
  file: z.any().refine((file) => file instanceof File, 'File is required'),
  maxSize: z.number().default(10 * 1024 * 1024), // 10MB default
  allowedTypes: z.array(z.string()).default(['image/jpeg', 'image/png', 'image/webp']),
})

// Payment validation schemas
export const stripePaymentSchema = z.object({
  paymentMethodId: z.string().min(1, 'Payment method is required'),
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('usd'),
  orderId: z.string().min(1, 'Order ID is required'),
})

export const mpesaPaymentSchema = z.object({
  phoneNumber: z.string().regex(/^254[0-9]{9}$/, 'Please enter a valid Kenyan phone number'),
  amount: z.number().positive('Amount must be positive'),
  orderId: z.string().min(1, 'Order ID is required'),
})

export const pesapalPaymentSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('KES'),
  description: z.string().min(5, 'Description is required'),
  orderId: z.string().min(1, 'Order ID is required'),
})

// Type inference helpers
export type RegisterFormData = z.infer<typeof registerSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>
export type ArtistApplicationFormData = z.infer<typeof artistApplicationSchema>
export type ArtworkCreateFormData = z.infer<typeof artworkCreateSchema>
export type ArtworkUpdateFormData = z.infer<typeof artworkUpdateSchema>
export type ExhibitionCreateFormData = z.infer<typeof exhibitionCreateSchema>
export type OrderCreateFormData = z.infer<typeof orderCreateSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
export type ArtworkFiltersData = z.infer<typeof artworkFiltersSchema>
export type ArtistFiltersData = z.infer<typeof artistFiltersSchema>
export type ExhibitionFiltersData = z.infer<typeof exhibitionFiltersSchema>