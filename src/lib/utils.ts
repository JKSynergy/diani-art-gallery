// Utility functions for formatting and display

/**
 * Format price with currency symbol and locale
 */
export function formatPrice(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format price for Kenyan Shilling with proper locale
 */
export function formatKesPrice(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options })
}

/**
 * Format date range for exhibitions
 */
export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  const startFormatted = formatDate(start, { month: 'short', day: 'numeric' })
  const endFormatted = formatDate(end, { month: 'short', day: 'numeric', year: 'numeric' })
  
  return `${startFormatted} - ${endFormatted}`
}

/**
 * Format dimensions string
 */
export function formatDimensions(dimensions: string): string {
  // Convert various dimension formats to standard cm format
  return dimensions
    .replace(/x/gi, ' × ')
    .replace(/cm/gi, ' cm')
    .replace(/inches?|in\b/gi, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Generate excerpt from text
 */
export function generateExcerpt(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  
  const excerpt = text.substr(0, maxLength)
  const lastSpaceIndex = excerpt.lastIndexOf(' ')
  
  return lastSpaceIndex > 0 
    ? excerpt.substr(0, lastSpaceIndex) + '...'
    : excerpt + '...'
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}

/**
 * Generate URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim()
}

/**
 * Parse search query for filters
 */
export function parseSearchQuery(query: string): {
  searchTerm: string
  filters: Record<string, string>
} {
  const filters: Record<string, string> = {}
  let searchTerm = query
  
  // Extract filter patterns like "artist:wanjiku" or "price:<1000"
  const filterRegex = /(\w+):([^\s]+)/g
  let match
  
  while ((match = filterRegex.exec(query)) !== null) {
    const [fullMatch, key, value] = match
    filters[key] = value
    searchTerm = searchTerm.replace(fullMatch, '').trim()
  }
  
  return { searchTerm, filters }
}

/**
 * Calculate reservation deposit (10%)
 */
export function calculateDeposit(price: number): number {
  return Math.round(price * 0.1)
}

/**
 * Calculate remaining balance after deposit
 */
export function calculateRemainingBalance(price: number): number {
  return price - calculateDeposit(price)
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Get relative time (e.g., "2 hours ago")
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ]
  
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds)
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`
    }
  }
  
  return 'Just now'
}

/**
 * Pluralize word based on count
 */
export function pluralize(word: string, count: number, suffix: string = 's'): string {
  return count === 1 ? word : word + suffix
}

/**
 * Format artwork title with artist for SEO/meta
 */
export function formatArtworkTitle(title: string, artist: string): string {
  return `${title} by ${artist} | Diani Art Gallery`
}

/**
 * Format exhibition title for SEO/meta
 */
export function formatExhibitionTitle(title: string): string {
  return `${title} | Exhibitions | Diani Art Gallery`
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj < new Date()
}

/**
 * Check if exhibition is currently active
 */
export function isExhibitionActive(startDate: Date | string, endDate: Date | string): boolean {
  const now = new Date()
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  return now >= start && now <= end
}

/**
 * Get days until exhibition starts/ends
 */
export function getDaysUntilExhibition(date: Date | string): number {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffTime = dateObj.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

/**
 * Convert price between currencies (placeholder - would integrate with real API)
 */
export function convertCurrency(amount: number, from: string, to: string): number {
  // This is a placeholder. In production, you'd integrate with a currency API
  const rates: Record<string, number> = {
    'USD-KES': 150,
    'KES-USD': 0.0067,
    'USD-EUR': 0.85,
    'EUR-USD': 1.18,
  }
  
  const rateKey = `${from}-${to}`
  const rate = rates[rateKey] || 1
  
  return Math.round(amount * rate)
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (basic)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

/**
 * Extract and format phone number for Kenya
 */
export function formatKenyanPhone(phone: string): string {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '')
  
  // Handle different formats
  if (digits.startsWith('254')) {
    return `+${digits}`
  } else if (digits.startsWith('0')) {
    return `+254${digits.substring(1)}`
  } else if (digits.length === 9) {
    return `+254${digits}`
  }
  
  return phone
}