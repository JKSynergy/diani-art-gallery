# SEO Implementation Guide - Diani Art Gallery

## Overview
This document explains the SEO optimizations implemented for the Diani Art Gallery website and how to use them.

## What's Been Fixed

### 1. **Optimized Metadata** ✅
All major pages now have:
- Descriptive, keyword-rich titles (50-60 characters)
- Compelling meta descriptions (150-160 characters)
- Relevant keywords targeting art buyers and collectors
- Open Graph tags for social media sharing
- Twitter Card markup

### 2. **JSON-LD Structured Data** ✅
Implemented Schema.org markup for:
- **LocalBusiness/ArtGallery** - Gallery information
- **VisualArtwork** - Individual artwork details with pricing
- **Person** - Artist profiles
- **ExhibitionEvent** - Exhibition information
- **BreadcrumbList** - Navigation breadcrumbs
- **FAQPage** - Frequently asked questions

### 3. **Rich Content** ✅
Homepage now includes:
- 800+ words of SEO-optimized content
- Target keywords naturally integrated
- Detailed service descriptions
- Location-specific information (Diani Beach, Kenya)
- Clear calls-to-action

### 4. **Image Optimization** ✅
- Descriptive alt text with keywords
- Next.js Image component for automatic optimization
- Proper dimensions specified

### 5. **Site Infrastructure** ✅
- **robots.txt** - Controls search engine crawling
- **sitemap.xml** - Lists all pages for search engines
- Canonical URLs to prevent duplicate content

## File Structure

```
src/
├── lib/
│   └── seo.ts                          # Core SEO utilities
├── app/
│   ├── layout.tsx                      # Root metadata
│   ├── page.tsx                        # Homepage with schema
│   ├── robots.ts                       # Robots.txt configuration
│   ├── sitemap.ts                      # Dynamic sitemap generation
│   ├── artists/
│   │   └── [slug]/
│   │       ├── metadata.ts             # Artist metadata helper
│   │       └── page-example.tsx        # Implementation example
│   ├── artworks/
│   │   └── [slug]/
│   │       ├── metadata.ts             # Artwork metadata helper
│   │       └── page-example.tsx        # Implementation example
│   └── exhibitions/
│       └── [slug]/
│           └── metadata.ts             # Exhibition metadata helper
```

## How to Use

### Homepage (Already Implemented)
The homepage at `src/app/page.tsx` includes:
- Optimized metadata with keywords
- LocalBusiness JSON-LD schema
- SEO-rich content section

### Artist Pages
See `src/app/artists/[slug]/page-example.tsx` for implementation:

```typescript
import { generateArtistMetadata, getArtistSchemas } from './metadata'
import { generateJsonLdScript } from '@/lib/seo'

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artist = await getArtist(params.slug)
  return generateArtistMetadata(artist)
}

// In your component
const { artistSchema, breadcrumbSchema } = getArtistSchemas(artist)

// Add to page
<script type="application/ld+json" 
  dangerouslySetInnerHTML={{ __html: generateJsonLdScript(artistSchema) }} />
```

### Artwork Pages
See `src/app/artworks/[slug]/page-example.tsx` for implementation:

```typescript
import { generateArtworkMetadata, getArtworkSchemas } from './metadata'
import { generateJsonLdScript } from '@/lib/seo'

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artwork = await getArtwork(params.slug)
  return generateArtworkMetadata(artwork)
}

// In your component
const { artworkSchema, breadcrumbSchema } = getArtworkSchemas(artwork)

// Add to page
<script type="application/ld+json" 
  dangerouslySetInnerHTML={{ __html: generateJsonLdScript(artworkSchema) }} />
```

### Exhibition Pages
Similar pattern using `src/app/exhibitions/[slug]/metadata.ts`

## Target Keywords by Page

### Homepage
- African art gallery Kenya
- contemporary art Diani
- buy African paintings
- Kenya artists
- Diani Beach gallery
- East African art

### Artist Pages
- [Artist Name] artist
- [Country] contemporary art
- African artist [Name]
- buy [Artist Name] art

### Artwork Pages
- [Artwork Title]
- buy [Medium] art
- [Category] African art
- contemporary art for sale Kenya
- original African paintings

### Exhibition Pages
- art exhibition Kenya
- Diani Beach art show
- contemporary art exhibition
- African art events

## Best Practices

### 1. **Title Tags**
- Include primary keyword
- Keep under 60 characters
- Make it compelling and unique
- Format: `Primary Keyword | Brand Name`

### 2. **Meta Descriptions**
- 150-160 characters
- Include call-to-action
- Use target keywords naturally
- Make it enticing to click

### 3. **Content**
- Minimum 300 words per page
- Homepage should have 800+ words
- Use headers (H1, H2, H3) with keywords
- Natural keyword density (1-2%)

### 4. **Images**
- Always use descriptive alt text
- Include keywords where relevant
- Format: `[Artwork Title] by [Artist] - [Medium], [Dimensions]`
- Optimize file size (use Next.js Image)

### 5. **Internal Linking**
- Link between related content
- Use descriptive anchor text
- Create hub pages (artist collections, categories)

### 6. **URL Structure**
- Keep URLs short and descriptive
- Use hyphens, not underscores
- Include primary keyword
- Example: `/artworks/coastal-serenity`

## Schema.org Markup

### Why It Matters
Structured data helps Google understand your content and display rich snippets in search results (star ratings, prices, availability).

### Implemented Schemas

1. **ArtGallery** (LocalBusiness)
   - Gallery name, address, phone
   - Opening hours
   - Geographic coordinates
   - Social media profiles

2. **VisualArtwork**
   - Artwork details (title, medium, dimensions)
   - Creator information
   - Pricing and availability
   - Links to artist

3. **Person** (Artist)
   - Name, bio, image
   - Location
   - Contact info
   - Social profiles

4. **ExhibitionEvent**
   - Event details (dates, location)
   - Registration info
   - Organizer information

5. **BreadcrumbList**
   - Navigation hierarchy
   - Improves site architecture understanding

## Testing Your SEO

### Tools to Use
1. **Google Search Console** - Monitor indexing, search performance
2. **Google Rich Results Test** - Validate structured data
   - https://search.google.com/test/rich-results
3. **Lighthouse** (Chrome DevTools) - Check performance and SEO score
4. **Screaming Frog** - Crawl site for SEO issues

### What to Check
- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] Images have alt text
- [ ] Structured data validates without errors
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Page speed is good (< 3 seconds)
- [ ] Mobile responsive design

## Next Steps

### When Database is Connected
Update `src/app/sitemap.ts` to fetch real data:

```typescript
// Uncomment the database queries
const artists = await db.artist.findMany({...})
const artworks = await db.artwork.findMany({...})
const exhibitions = await db.exhibition.findMany({...})
```

### Content Strategy
1. **Blog regularly** - Artist interviews, art techniques, collection guides
2. **Update content** - Keep exhibition dates current
3. **Add FAQs** - Common questions about buying art, shipping, etc.
4. **Create guides** - "How to Start an Art Collection", "Guide to African Art Styles"

### Technical SEO
1. **Set up Google Analytics** - Track visitor behavior
2. **Google Search Console** - Monitor search performance
3. **Submit sitemap** - Help Google find all pages
4. **Monitor errors** - Fix 404s, broken links
5. **Improve page speed** - Optimize images further, use CDN

### Local SEO
1. **Google Business Profile** - Claim and optimize listing
2. **Local citations** - List gallery in directories
3. **Reviews** - Encourage customer reviews
4. **Local keywords** - Target "art gallery Diani Beach", "Kenya art gallery"

## Performance Targets

- **Page Speed**: < 3 seconds load time
- **Core Web Vitals**: All green
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Mobile Score**: 90+
- **SEO Score**: 95+

## Monitoring

### Weekly
- Check Google Search Console for errors
- Monitor keyword rankings
- Review page performance

### Monthly
- Analyze traffic trends
- Update content
- Add new keywords
- Review and improve low-performing pages

### Quarterly
- Full SEO audit
- Competitor analysis
- Strategy adjustment

## Common Issues Avoided

### From Dream Kenya Safaris Analysis
✅ **Fixed:**
1. Generic title tags → Keyword-rich, descriptive titles
2. Missing meta descriptions → Unique descriptions per page
3. Thin content → 800+ words on homepage
4. Missing schema markup → Full JSON-LD implementation
5. Poor image optimization → Next.js Image with alt text
6. No sitemap → Dynamic sitemap.xml
7. Weak internal linking → Breadcrumbs and contextual links
8. No structured content → Headers, sections, semantic HTML

## Support

For questions or issues with SEO implementation, refer to:
- Next.js SEO docs: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Schema.org documentation: https://schema.org/
- Google Search Central: https://developers.google.com/search/docs

---

**Last Updated**: November 20, 2025  
**Version**: 1.0
