# Diani Art Gallery - Development Guidelines

## Project Overview
This is a comprehensive contemporary art gallery website built with Next.js 14, featuring artist portfolios, artwork catalogs, exhibition management, and e-commerce functionality. The site serves both customers and gallery administrators with distinct user journeys.

## Technology Stack
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM, PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe, MPESA, PESAPAL integration
- **UI**: Radix UI components, Lucide icons
- **Forms**: React Hook Form with Zod validation

## Key Business Requirements

### Customer Journeys
1. **Purchase Flow**: Browse → Select → Buy Now/Reserve (10% deposit) → Payment
2. **Exhibition Registration**: View → Register → Payment (if applicable)
3. **Artist Applications**: Submit portfolio → Review → Approval/Rejection

### Core Features
- Artist portfolio management
- Artwork catalog with filtering/search
- Exhibition management with event registration
- E-commerce with multiple payment methods
- Admin dashboard for content management
- Newsletter subscriptions
- Customer account management

## Development Guidelines

### File Organization
- Use the established `src/app` structure for pages
- Create reusable components in `src/components`
- Keep business logic in `src/lib`
- Define types in `src/types`

### Database Schema
- Follow the established Prisma schema in `prisma/schema.prisma`
- All models include proper relationships and constraints
- Use enums for status fields and categories

### Styling
- Use Tailwind CSS with the established design system
- Follow the color palette: primary (blue), secondary (purple), accent (orange)
- Maintain responsive design principles
- Use the defined component classes (btn-primary, btn-secondary, btn-outline)

### API Development
- Create API routes in `src/app/api`
- Follow RESTful conventions
- Include proper error handling and validation
- Use TypeScript for all API endpoints

### Payment Integration
- Support MPESA, PESAPAL, and Stripe
- Handle reservation deposits (10% with 7-day hold)
- Implement proper webhook handling
- Include payment status tracking

### SEO & Performance
- Use Next.js Image optimization
- Implement schema.org markup for artworks, artists, exhibitions
- Include proper meta tags and Open Graph data
- Optimize for Core Web Vitals

## Code Standards
- Use TypeScript for all new code
- Follow ESLint rules
- Write descriptive commit messages
- Include error boundaries for React components
- Implement proper loading states

## Testing
- Write unit tests for utility functions
- Include integration tests for API endpoints
- Test payment flows thoroughly
- Verify responsive design across devices

## Security
- Validate all user inputs
- Implement proper authentication checks
- Secure payment processing
- Follow OWASP guidelines

## Deployment
- Environment variables configured in `.env`
- Database migrations managed via Prisma
- Static assets optimized for CDN
- Monitoring and error tracking enabled

This project serves Kenya's coastal art community and should reflect the high quality and professionalism of contemporary African art galleries.