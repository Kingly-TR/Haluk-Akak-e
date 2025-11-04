# Haluk Akakçe Website - Deployment Guide

## Project Overview

A production-ready Next.js website for Turkish contemporary artist Haluk Akakçe (1970–2023), featuring:
- Comprehensive artwork archive with filtering
- Exhibition history and timeline
- Commercial licensing hub
- E-commerce shop (front-end ready)
- Distinctive visual design inspired by Akakçe's artistic style

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + Framer Motion ready
- **Image Optimization**: Next.js Image component

## Current Status

✅ **Complete Features:**
- Home page with hero, featured works, and shop teaser
- Works archive with category filtering (/works)
- Individual artwork detail pages (/works/[slug])
- Exhibitions archive with type filtering (/exhibitions)
- Exhibition detail pages (/exhibitions/[slug])
- About/Biography page with timeline (/about)
- Licensing inquiry page with form (/licensing)
- Shop with product filtering (/shop)
- Product detail pages (/shop/[slug])
- Contact page with form (/contact)
- Responsive navbar and footer
- Animated backgrounds and shape dividers
- Mock data structure for easy CMS integration

## Integration Points (TODO)

The codebase is structured for easy integration with backend services. Look for `// TODO:` comments in the code:

### 1. Content Management System (CMS)

**Files to update:**
- `/data/artworks.ts` - Replace with CMS API calls
- `/data/exhibitions.ts` - Replace with CMS API calls
- `/data/products.ts` - Replace with e-commerce platform
- `/data/timeline.ts` - Replace with CMS API calls

**Recommended CMS Options:**
- Contentful
- Sanity.io
- Strapi
- WordPress with Headless CMS plugin

**Example integration:**
```typescript
// Replace static import
import { artworks } from '@/data/artworks';

// With async data fetching
async function getArtworks() {
  const res = await fetch('https://your-cms.com/api/artworks');
  return res.json();
}
```

### 2. E-commerce Platform

**Files to update:**
- `/app/shop/[slug]/page.tsx` - Cart functionality
- `/data/products.ts` - Product data source

**Recommended Platforms:**
- Shopify (Buy Button or Storefront API)
- Stripe with custom cart
- WooCommerce API
- Snipcart

**Cart Implementation:**
```typescript
// Add cart state management (Context API or Zustand)
// Implement cart persistence (localStorage or backend)
// Add checkout flow with payment gateway
```

### 3. Form Submissions

**Files to update:**
- `/app/licensing/page.tsx` - Licensing inquiry form
- `/app/contact/page.tsx` - Contact form
- `/components/layout/Footer.tsx` - Newsletter signup

**Recommended Services:**
- SendGrid for emails
- Formspree
- Netlify Forms
- Custom API route with Nodemailer

**Example API route:**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email via SendGrid/Mailgun/etc
  return Response.json({ success: true });
}
```

### 4. Image Hosting

**Current**: Uses placeholder images from Unsplash

**Update**:
- Upload actual artwork images to:
  - Cloudinary
  - AWS S3
  - Vercel Blob Storage
  - Your CMS's media library

- Update `next.config.js` image domains:
```javascript
images: {
  domains: ['your-cdn.com', 'images.ctfassets.net'], // Add your domains
},
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Configure environment variables
4. Deploy automatically

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables

### Option 3: Self-Hosted (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local` file:

```bash
# CMS
NEXT_PUBLIC_CMS_API_URL=https://your-cms.com/api
CMS_API_KEY=your-api-key

# E-commerce
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your-token

# Email
SENDGRID_API_KEY=your-key
CONTACT_EMAIL=info@halukakakce.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Performance Optimization

✅ **Already Implemented:**
- Next.js Image optimization
- Server Components where possible
- CSS-only animations (lightweight)
- Lazy loading for galleries

**Additional Optimizations:**
1. Add `loading="lazy"` to images below fold
2. Implement ISR (Incremental Static Regeneration) for artwork pages
3. Add CDN for static assets
4. Enable gzip/brotli compression
5. Implement service worker for offline support

## SEO Enhancements

**Add to each page:**
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Haluk Akakçe',
  description: 'Page description...',
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

**Additional SEO:**
- Add structured data (JSON-LD) for artworks
- Create XML sitemap
- Add robots.txt
- Implement canonical URLs

## Accessibility Checklist

✅ **Already Implemented:**
- Semantic HTML
- Alt text support in data structure
- Focus states for interactive elements
- Responsive design

**Test with:**
- Lighthouse (Chrome DevTools)
- axe DevTools extension
- Screen reader (VoiceOver/NVDA)

## Content Guidelines

### Adding New Artworks

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: 'Artwork Title',
  year: 2020,
  medium: 'Medium description',
  dimensions: '100 × 120 cm',
  image: '/path/to/image.jpg',
  category: 'painting', // painting|drawing|video|installation|public-project
  description: 'Detailed description...',
  featured: true, // Show on homepage
}
```

### Brand Colors (Tailwind)

- `akakce-red`: #FF0040 (Electric red)
- `akakce-magenta`: #FF00FF
- `akakce-cyan`: #00FFFF
- `akakce-lime`: #CCFF00
- `akakce-orange`: #FF6600
- `akakce-violet`: #8800FF

## Support & Maintenance

### Common Issues

**Issue**: Images not loading
**Solution**: Check image domains in `next.config.js`

**Issue**: Build fails
**Solution**: Run `npm run lint` and fix TypeScript errors

**Issue**: Slow page loads
**Solution**: Enable ISR and check image optimization

### Monitoring

Recommended tools:
- Vercel Analytics (built-in)
- Google Analytics 4
- Sentry for error tracking
- Hotjar for user behavior

## Future Enhancements

Potential features to add:
- [ ] Full e-commerce checkout flow
- [ ] User accounts and wishlists
- [ ] Advanced search/filtering
- [ ] Multi-language support
- [ ] Blog/News section
- [ ] Virtual exhibition tours (3D)
- [ ] Artist statement audio/video
- [ ] Print-on-demand integration

## License & Rights

© 2024 Haluk Akakçe Estate. All rights reserved.

**Important**: Replace all placeholder images with actual artwork images before production deployment. Ensure proper rights clearance for all visual content.

## Contact for Technical Support

For questions about this codebase:
- Review inline comments marked with `// TODO:`
- Check component documentation in files
- Refer to Next.js 14 documentation

---

**Built with care to honor Haluk Akakçe's visionary practice.**
