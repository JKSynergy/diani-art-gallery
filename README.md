# Diani Art Gallery Website

A comprehensive contemporary art gallery website built with Next.js 14, featuring artist portfolios, artwork catalogs, exhibition management, e-commerce functionality, and customer journey optimization.

## 🎨 Features

### Core Functionality
- **Artist Portfolios**: Comprehensive artist profiles with bios, statements, and artwork collections
- **Artwork Catalog**: Detailed artwork listings with multiple images, descriptions, and metadata
- **Exhibition Management**: Current, upcoming, and past exhibitions with event registration
- **E-commerce Integration**: Complete shopping cart, checkout, and payment processing
- **Content Management**: Blog/stories system for gallery news and artist features
- **User Accounts**: Customer registration, wishlists, order history, and profile management

### Customer Journeys

#### Purchase Journey
1. **Artwork Selection**: Browse and select paintings, sculptures, or other pieces
2. **Purchase Options**:
   - **Buy Now**: Direct payment via MPESA, PESAPAL, or Card
   - **Reserve**: 10% deposit reservation (7-day hold, 50% deposit forfeit if expired)
3. **Newsletter Subscription**: Optional sign-up for gallery updates

#### Exhibition Attendance
1. **Registration**: "Yes, I would like to attend" → "Register here"
2. **Payment Processing**: Automatic redirect to payment platform for paid events

#### Artist Application
1. **Portfolio Submission**: Artists can apply to exhibit work
2. **Exhibition Period**: Choose 6-month or 12-month exhibition periods
3. **Review Process**: Curatorial team review and approval workflow

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, and caching
- **SEO Enhanced**: Schema.org markup, meta tags, and sitemap generation
- **Multi-currency Support**: Display prices in multiple currencies
- **Search & Filtering**: Advanced faceted search across artists, artworks, and exhibitions
- **Payment Integration**: MPESA, PESAPAL, and international card processing

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe, MPESA, PESAPAL
- **UI Components**: Radix UI + Lucide Icons
- **Forms**: React Hook Form with Zod validation
- **Image Handling**: Next.js Image optimization + Cloudinary

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── artists/           # Artist pages and applications
│   ├── artworks/          # Artwork catalog and details
│   ├── exhibitions/       # Exhibition listings and details
│   ├── visit/             # Gallery information
│   ├── stories/           # Blog/news section
│   ├── shop/              # E-commerce pages
│   ├── account/           # User account pages
│   ├── contact/           # Contact forms
│   └── admin/             # Admin dashboard
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   └── ui/                # UI component library
├── lib/                   # Utilities and configurations
│   ├── prisma.ts          # Database client
│   ├── auth.ts            # Authentication config
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript type definitions

prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations
```

## 🗄️ Database Schema

The application uses a comprehensive PostgreSQL schema with the following main entities:

- **Users**: Customer accounts and admin users
- **Artists**: Artist profiles and portfolios
- **Artworks**: Artwork details, images, and metadata
- **Exhibitions**: Exhibition management and events
- **Orders**: E-commerce orders and payments
- **Categories**: Artwork categorization (medium, style, price bands)
- **Stories**: Blog posts and news content
- **Inquiries**: Contact forms and customer inquiries
- **Applications**: Artist application submissions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd diani-art-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/diani_art_gallery"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Payment providers
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   MPESA_CONSUMER_KEY="your-mpesa-key"
   MPESA_CONSUMER_SECRET="your-mpesa-secret"
   PESAPAL_CONSUMER_KEY="your-pesapal-key"
   PESAPAL_CONSUMER_SECRET="your-pesapal-secret"
   
   # File storage
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Database Setup**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed  # Optional: seed with sample data
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma database browser
- `npx prisma migrate dev` - Create and apply database migrations

## 🎯 Key Pages & Routes

### Public Routes
- `/` - Homepage with hero, featured artists, and quick filters
- `/artists` - Artist directory and portfolios
- `/artists/apply` - Artist application form
- `/artworks` - Artwork catalog with filtering
- `/artworks/[slug]` - Individual artwork details
- `/exhibitions` - Exhibition listings (current, upcoming, past)
- `/exhibitions/[slug]` - Exhibition details and registration
- `/visit` - Gallery hours, location, and visitor information
- `/stories` - Blog posts and gallery news
- `/contact` - Contact forms and inquiries

### E-commerce Routes
- `/shop` - Shop interface (mirrors artworks with pricing)
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/account` - User dashboard
- `/account/orders` - Order history
- `/account/wishlist` - Saved artworks

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/artists` - Artist management
- `/admin/artworks` - Artwork management
- `/admin/exhibitions` - Exhibition management
- `/admin/orders` - Order management
- `/admin/inquiries` - Customer inquiry management

## 🔧 Configuration

### Payment Integration

#### MPESA Setup
1. Register with Safaricom MPESA API
2. Get Consumer Key and Secret
3. Configure business short code and passkey
4. Set up callback URLs

#### PESAPAL Setup
1. Create PESAPAL merchant account
2. Get API credentials
3. Configure callback and notification URLs

#### Stripe Setup
1. Create Stripe account
2. Get publishable and secret keys
3. Set up webhooks for payment confirmation

### Image Handling
The application uses Cloudinary for image storage and optimization:
1. Create Cloudinary account
2. Get cloud name and API credentials
3. Configure upload presets for different image types

## 🔍 SEO Features

- **Schema.org Markup**: Structured data for galleries, artworks, artists, and events
- **Meta Tags**: Dynamic Open Graph and Twitter card generation
- **Sitemap**: Automatic XML sitemap generation
- **Image Alt Text**: Accessibility-compliant image descriptions
- **Clean URLs**: SEO-friendly slug-based routing

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Optimized navigation for small screens
- Touch-friendly interface elements
- Fast loading on mobile networks

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on git push

### Docker Deployment
```bash
docker build -t diani-art-gallery .
docker run -p 3000:3000 diani-art-gallery
```

### Traditional Hosting
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@dianiartsalley.com
- Phone: +254 700 000 000
- Website: [https://dianiartsalley.com](https://dianiartsalley.com)

## 🎨 Gallery Information

**Diani Art Gallery**
Diani Beach Road
Diani Beach, Kwale County
Kenya

**Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 10:00 AM - 8:00 PM  
- Sunday: 12:00 PM - 5:00 PM

---

Built with ❤️ for the East African art community