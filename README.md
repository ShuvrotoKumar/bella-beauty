# Bella Beauty - Modern Cosmetics Landing Page

A modern, responsive Next.js landing page for a women's cosmetics shop featuring elegant design, smooth animations, and mobile-first approach.

## Features

- **Modern Design**: Clean, elegant interface with a pink/rose color scheme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Product Showcase**: Featured products with ratings, pricing, and quick actions
- **Category Navigation**: Easy browsing by product categories
- **Customer Testimonials**: Social proof with customer reviews
- **Newsletter Signup**: Email collection with discount incentive
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Next.js Image** - Optimized image loading

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Categories.tsx       # Product categories grid
│   ├── FeaturedProducts.tsx # Product showcase
│   ├── Testimonials.tsx     # Customer reviews
│   ├── Newsletter.tsx       # Email signup form
│   └── Footer.tsx           # Site footer
└── public/                  # Static assets
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (pink/rose theme)
- Secondary colors (gray theme)

### Content
Update product data, testimonials, and company information in the respective component files.

### Images
Replace placeholder images with your actual product photos. Update the `next.config.js` domains array if using different image sources.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

This project is open source and available under the [MIT License](LICENSE).