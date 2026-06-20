# Premium Australian Restaurant Website

A luxury, production-ready restaurant website built with modern web technologies. Experience premium quality meals with an elegant, high-end design inspired by elite Australian food brands.

## 🎯 Features

### Design & UX
- **Premium Luxury Aesthetic**: Black background with gold accents (#C89B3C)
- **Responsive Design**: Mobile-first approach with full desktop support
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Glass Morphism**: Modern glassmorphism styling throughout
- **Dark Premium Theme**: Cinematic food photography with luxury lighting effects

### Sections
1. **Navbar** - Sticky navigation with responsive mobile menu
2. **Hero Section** - Two-column layout with cinematic food imagery
3. **Featured Menu** - 6 premium food cards with hover animations
4. **Why Choose Us** - 4 feature cards highlighting key differentiators
5. **About Us** - Restaurant story with statistics and values
6. **Customer Reviews** - Testimonial slider with star ratings
7. **Gallery** - Masonry layout with hover zoom effects
8. **Delivery Area** - Interactive service zones and delivery times
9. **FAQ** - Modern accordion with common questions
10. **Contact** - Contact form, info, and map placeholder
11. **Footer** - Newsletter, links, and social media

### Technology Stack
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **Lucide React**: Premium icon library
- **Responsive Mobile-First**: Optimized for all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "D:/food website 2.0"

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── FeaturedMenu.tsx # Menu showcase
│       ├── WhyChooseUs.tsx # Features section
│       ├── AboutUs.tsx     # About section
│       ├── CustomerReviews.tsx # Testimonials
│       ├── Gallery.tsx     # Image gallery
│       ├── DeliveryArea.tsx # Service areas
│       ├── FAQ.tsx         # FAQ accordion
│       └── Contact.tsx     # Contact form & info
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.mjs     # PostCSS config
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  gold: '#C89B3C',
  'dark-bg': '#0a0a0a',
  'dark-secondary': '#1a1a1a',
}
```

### Content
Update content directly in component files:
- Menu items in `components/sections/FeaturedMenu.tsx`
- Restaurant info in `components/sections/AboutUs.tsx`
- Contact details in `components/sections/Contact.tsx`

### Images
Replace emoji placeholders with real images:
1. Add images to `public/` folder
2. Use Next.js Image component for optimization

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections are optimized for mobile-first design with proper spacing and touch targets.

## ⚡ Performance Optimizations

- **Lazy Loading**: Animations trigger on viewport intersection
- **Code Splitting**: Components loaded with Next.js App Router
- **Image Optimization**: Ready for Next.js Image component
- **CSS Optimization**: Tailwind purges unused styles
- **SEO Ready**: Meta tags and semantic HTML

## 🔧 Development

### Scripts
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

### Hot Reload
The development server supports hot module replacement (HMR) for instant updates during development.

## 📞 Contact Information

- **Phone**: (02) 9999 9999
- **Email**: hello@premium-restaurant.com
- **Address**: 123 Premium St, Sydney NSW 2000
- **Hours**: Daily 11am - 11pm

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted servers

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🎯 Future Enhancements

- [ ] Integration with real payment gateway
- [ ] Online ordering system
- [ ] Real-time delivery tracking
- [ ] Customer loyalty program
- [ ] Blog section
- [ ] Social media feed integration
- [ ] Live chat support
- [ ] Multi-language support

---

**Handcrafted. Grilled. Legendary.** ✨
