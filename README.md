# Haluk Akakçe Official Website

Official web experience for Turkish contemporary artist Haluk Akakçe (1970–2023).

## About

This website presents the life and work of Haluk Akakçe, featuring:
- Comprehensive archive of paintings, drawings, video/film installations, and public projects
- Exhibition history and timeline
- Commercial licensing and product management hub
- Online shop for prints, merchandise, and limited editions

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Design Philosophy

The visual language reflects Haluk Akakçe's distinctive artistic style:
- Clean white backgrounds with layered, flat color shapes
- Bright tones: electric red, magenta, cyan, lime green, orange, violet
- Bold black calligraphic lines with gentle animations
- Concentric circles, stripes, and biomorphic shapes
- Diagonal cuts, overlapping panels, asymmetrical grids
- Subtle, non-distracting animations throughout

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # Biography and timeline
│   ├── works/             # Artwork archive
│   ├── exhibitions/       # Exhibition history
│   ├── licensing/         # Commercial licensing
│   ├── shop/              # E-commerce
│   └── contact/           # Contact form
├── components/            # Reusable React components
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # Buttons, Cards, Forms
│   └── animations/       # Animated elements
├── data/                 # Mock data (replace with CMS)
└── types/                # TypeScript type definitions
```

## Future Integration

The codebase is structured for easy integration with:
- **Headless CMS** (Contentful, Sanity, Strapi) for content management
- **E-commerce platform** (Shopify, Stripe) for shop functionality
- **Email service** (SendGrid, Mailchimp) for forms and newsletter

Look for `// TODO:` comments throughout the code indicating integration points.

## License

© 2024 Haluk Akakçe Estate. All rights reserved.
