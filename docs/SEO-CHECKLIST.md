# SEO Implementation Checklist

Use this checklist when creating or updating pages to ensure proper SEO.

## Every Page Should Have

### Metadata
- [ ] Unique `<title>` tag (50-60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] Relevant keywords (5-10 per page)
- [ ] Open Graph tags (title, description, image)
- [ ] Twitter Card tags
- [ ] Canonical URL

### Content
- [ ] One H1 tag with primary keyword
- [ ] H2 and H3 subheadings with related keywords
- [ ] Minimum 300 words (500+ preferred)
- [ ] Keywords naturally integrated (1-2% density)
- [ ] Clear call-to-action
- [ ] Internal links to related pages

### Images
- [ ] Descriptive alt text with keywords
- [ ] Optimized file size
- [ ] Proper dimensions specified
- [ ] Next.js Image component used

### Structured Data
- [ ] Appropriate JSON-LD schema
- [ ] Breadcrumb navigation
- [ ] Validated with Google Rich Results Test

## Page-Specific Requirements

### Artist Pages
```typescript
✅ Metadata: generateArtistMetadata(artist)
✅ Schema: artistSchema + breadcrumbSchema
✅ Content: Full bio (300+ words)
✅ Images: Artist photo + artwork thumbnails
✅ Links: To individual artworks, exhibitions
```

### Artwork Pages
```typescript
✅ Metadata: generateArtworkMetadata(artwork)
✅ Schema: artworkSchema + breadcrumbSchema
✅ Content: Detailed description (200+ words)
✅ Images: Multiple angles with alt text
✅ Links: To artist profile, related artworks
```

### Exhibition Pages
```typescript
✅ Metadata: generateExhibitionMetadata(exhibition)
✅ Schema: exhibitionSchema + breadcrumbSchema
✅ Content: Full description (400+ words)
✅ Images: Exhibition photos with alt text
✅ Links: To featured artists, artworks
```

### Category/Collection Pages
```typescript
✅ Metadata: Category-specific title and description
✅ Schema: breadcrumbSchema
✅ Content: Category overview (400+ words)
✅ Filters: Visible to users and search engines
✅ Pagination: Properly implemented with rel="next/prev"
```

## Quick SEO Wins

### Priority 1 (Do First)
- [x] Homepage optimization
- [x] Sitemap and robots.txt
- [x] Core schema markup
- [ ] Artist pages (top 10)
- [ ] Artwork pages (featured items)
- [ ] About page
- [ ] Contact page

### Priority 2 (Next)
- [ ] All artist pages
- [ ] All artwork pages
- [ ] Exhibition pages
- [ ] Category pages
- [ ] Blog/Stories pages

### Priority 3 (Ongoing)
- [ ] FAQ page with FAQ schema
- [ ] Guides and tutorials
- [ ] Customer testimonials
- [ ] Video content
- [ ] Regular blog updates

## Common Mistakes to Avoid

❌ **Don't:**
- Use duplicate titles or descriptions
- Stuff keywords unnaturally
- Forget alt text on images
- Use generic anchor text ("click here")
- Ignore mobile optimization
- Have thin content (< 200 words)
- Use keyword in URL, title, H1 too many times

✅ **Do:**
- Write for humans first, search engines second
- Use natural language
- Provide value to visitors
- Update content regularly
- Fix broken links promptly
- Monitor performance metrics

## Testing Before Launch

### Manual Checks
- [ ] View page source - check title, meta tags
- [ ] Check mobile responsiveness
- [ ] Test all internal links
- [ ] Verify images load and have alt text
- [ ] Read content aloud - does it sound natural?

### Tool-Based Testing
- [ ] Google Rich Results Test - validate schema
- [ ] Lighthouse audit - aim for 90+ SEO score
- [ ] PageSpeed Insights - check performance
- [ ] Mobile-Friendly Test
- [ ] Search Console URL Inspection

## Monthly SEO Tasks

### Week 1: Content
- [ ] Add new blog post or article
- [ ] Update 3-5 existing pages
- [ ] Check for content gaps

### Week 2: Technical
- [ ] Review Search Console errors
- [ ] Fix broken links
- [ ] Update sitemap if needed
- [ ] Check page speed scores

### Week 3: Keywords
- [ ] Research new keywords
- [ ] Analyze competitor rankings
- [ ] Update meta descriptions
- [ ] Add internal links

### Week 4: Monitoring
- [ ] Review Google Analytics
- [ ] Check keyword rankings
- [ ] Identify top/bottom pages
- [ ] Plan next month's improvements

## Resources

### Tools
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Lighthouse**: Chrome DevTools

### Documentation
- **Next.js SEO**: https://nextjs.org/docs/app/building-your-application/optimizing
- **Schema.org**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search

---

**Remember**: SEO is an ongoing process. Consistent effort yields better results than one-time optimization.
