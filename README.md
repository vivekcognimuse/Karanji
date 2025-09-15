# Karanji - Technology Translation Partner

<div align="center">

![Karanji Logo](./public/logo.svg)

**Bridging creative storytelling, immersive technologies, and artificial intelligence (AI) innovation**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](./LICENSE)

[Live Website](https://karanji.com) • [Documentation](#documentation) • [Contact](#contact)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [API Routes](#api-routes)
- [Content Management](#content-management)
- [Styling & Design](#styling--design)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Overview

Karanji is a comprehensive web platform for a technology translation company specializing in:

- **Digital Learning Solutions** - Advanced learning management systems and content design
- **Creative Services** - Audio production, VFX animation, and event management
- **Technology Solutions** - AI advisory, digital twins, and XR gaming
- **Industry Solutions** - Specialized solutions for Healthcare, Aviation, Oil & Gas, and Logistics

The platform showcases an 18+ year journey from digital learning pioneers to comprehensive technology partners, featuring interactive timelines, case studies, and industry-specific solutions.

## ✨ Features

### 🏢 Core Platform Features

- **Responsive Design** - Mobile-first approach with advanced animations
- **Interactive Timeline** - Company journey visualization with GSAP animations
- **Dynamic Content** - Headless CMS integration with Strapi
- **Case Studies** - Detailed project showcases with rich media
- **Blog Platform** - Industry insights and thought leadership content
- **Resource Library** - Comprehensive documentation and guides
- **Contact Management** - Advanced form handling with email automation

### 🎨 Design & User Experience

- **Modern UI/UX** - Clean, professional design with consistent branding
- **Advanced Animations** - GSAP-powered smooth transitions and reveals
- **Interactive Components** - Engaging user interactions and micro-animations
- **Accessibility** - WCAG compliant design patterns
- **Performance Optimized** - Next.js 15 with Turbopack for lightning-fast builds

### 🏭 Industry Solutions

- **Healthcare** - Digital transformation and compliance solutions
- **Aviation** - Training simulations and maintenance systems
- **Oil & Gas** - Safety training and operational efficiency tools
- **Logistics** - Supply chain optimization and warehouse automation

## 🛠 Tech Stack

### Core Framework

- **[Next.js 15.3.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.0.0](https://reactjs.org/)** - Latest React with concurrent features
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Modern ES6+ syntax

### Styling & UI

- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon libraries

### Animation & Interactions

- **[GSAP](https://greensock.com/gsap/)** - Professional animation library
- **[@gsap/react](https://greensock.com/react/)** - React integration for GSAP
- **[Spline](https://spline.design/)** - 3D design and animation

### Content Management

- **[Strapi CMS](https://strapi.io/)** - Headless content management system
- **API Integration** - RESTful API with dynamic content fetching
- **Media Management** - Advanced image and video handling

### Form & Communication

- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Resend](https://resend.com/)** - Modern email API for transactional emails

### State Management

- **[Zustand](https://zustand.surge.sh/)** - Small, fast, and scalable state management

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS transformation and optimization
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 📁 Project Structure

```
karanji/
├── public/                     # Static assets
│   ├── advisory/              # Advisory service images
│   ├── audio/                 # Audio assets and icons
│   ├── avatars/               # Avatar components
│   ├── blog/                  # Blog-related images
│   ├── caseStudies/           # Case study media
│   ├── Company/               # Company section assets
│   ├── digital-learning/      # Digital learning resources
│   ├── entertainment/         # Entertainment service assets
│   ├── gradients/             # Gradient backgrounds
│   ├── hero/                  # Hero section images
│   ├── Icons/                 # Icon collections
│   ├── Industries/            # Industry-specific assets
│   ├── nav/                   # Navigation assets
│   ├── service-offering/      # Service offering media
│   ├── solutions/             # Solution-specific images
│   ├── speakers/              # Speaker profiles
│   ├── technologySolutions/   # Technology solution assets
│   └── testimonials/          # Client testimonials
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form handler
│   │   ├── blog-insights/     # Blog listing and posts
│   │   ├── case-studies/      # Case study pages
│   │   ├── coming-soon/       # Coming soon page
│   │   ├── company/           # Company pages
│   │   │   ├── about-us/      # About us with timeline
│   │   │   ├── careers/       # Career opportunities
│   │   │   ├── digital-twin/  # Digital twin showcase
│   │   │   └── our-team/      # Team profiles
│   │   ├── contact/           # Contact page
│   │   ├── creative-services/ # Creative service pages
│   │   │   ├── audio/         # Audio production
│   │   │   ├── event/         # Event management
│   │   │   └── vfx-animation/ # VFX and animation
│   │   ├── digital-learning/  # Digital learning solutions
│   │   │   ├── analytics/     # Learning analytics
│   │   │   ├── content-design/# Content design services
│   │   │   └── lms-implementation/ # LMS solutions
│   │   ├── Industries/        # Industry-specific pages
│   │   │   ├── aviation/      # Aviation solutions
│   │   │   ├── healthcare/    # Healthcare solutions
│   │   │   ├── logistics/     # Logistics solutions
│   │   │   └── oil-and-gas/   # Oil & Gas solutions
│   │   ├── resources/         # Resource library
│   │   ├── technology-solutions/ # Technology solutions
│   │   │   ├── ai-advisory/   # AI advisory services
│   │   │   ├── digital-twins/ # Digital twin technology
│   │   │   └── xr-gaming/     # XR and gaming solutions
│   │   ├── terms-policies/    # Legal pages
│   │   └── webinar/           # Webinar platform
│   │
│   ├── components/            # Reusable components
│   │   ├── animations/        # Animation components
│   │   ├── blog/              # Blog-related components
│   │   ├── cards/             # Card components
│   │   ├── caseStudy/         # Case study components
│   │   ├── home/              # Homepage components
│   │   ├── resources/         # Resource components
│   │   ├── ui/                # UI library components
│   │   └── webinar/           # Webinar components
│   │
│   ├── constant/              # Application constants
│   │   ├── advisory.js        # Advisory service constants
│   │   ├── navigation.js      # Navigation configuration
│   │   ├── webinarImages.js   # Webinar assets
│   │   └── solutions/         # Solution constants
│   │
│   ├── data/                  # Static data files
│   │   ├── blogs.json         # Blog metadata
│   │   ├── resources.json     # Resource listings
│   │   ├── webinarData.json   # Webinar information
│   │   ├── Case-studies/      # Case study data
│   │   ├── company/           # Company information
│   │   └── Industries/        # Industry data
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── contactform.js     # Contact form logic
│   │   └── smooth-scroll.js   # Smooth scrolling
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── analytics-provider.js # Analytics integration
│   │   ├── metadata.js        # SEO metadata helpers
│   │   ├── normalize-casestudy.js # Case study normalization
│   │   ├── strapi.js          # Strapi CMS integration
│   │   └── utils.js           # General utilities
│   │
│   ├── sections/              # Page sections
│   │   ├── Advisory/          # Advisory sections
│   │   ├── Company/           # Company sections
│   │   ├── digital-learning/  # Digital learning sections
│   │   ├── digital-twin/      # Digital twin sections
│   │   ├── entertainment/     # Entertainment sections
│   │   ├── home/              # Homepage sections
│   │   ├── Industries/        # Industry sections
│   │   └── service/           # Service sections
│   │
│   ├── stores/                # State management
│   │   └── cmsStore.js        # CMS data store
│   │
│   └── utils/                 # Utility functions
│       └── ish.js             # Helper utilities
│
├── hosting/                   # Build output and hosting files
├── components.json            # Shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── firebase.json              # Firebase hosting config
├── jsconfig.json              # JavaScript configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/CogniMuse/karanji.git
   cd karanji
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Add your environment variables
   RESEND_API_KEY=your_resend_api_key
   STRAPI_API_URL=https://your-strapi-instance.com/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
# Development with Turbopack (faster)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking (if using TypeScript)
npm run type-check
```

### Development Guidelines

#### Code Style

- Use **JavaScript** with modern ES6+ syntax
- Follow **Prettier** formatting rules
- Maintain **ESLint** compliance
- Use **functional components** with hooks

#### Component Structure

```javascript
// Component template
import React from "react";
import { cn } from "@/lib/utils";

const ComponentName = ({ className, ...props }) => {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

#### Styling Guidelines

- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **CSS custom properties** for theming
- Maintain **design system** consistency

#### Animation Best Practices

- Use **GSAP** for complex animations
- Implement **reduced motion** preferences
- Optimize for **60fps** performance
- Use **intersection observers** for scroll-triggered animations

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Deployment Platforms

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

#### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase
firebase deploy
```

#### Other Platforms

- **Netlify** - Connect GitHub repository
- **AWS Amplify** - Continuous deployment
- **Docker** - Containerized deployment

### Environment Variables

```bash
# Production environment
RESEND_API_KEY=prod_resend_key
STRAPI_API_URL=https://prod-strapi.com/api
NEXT_PUBLIC_SITE_URL=https://karanji.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔌 API Routes

### Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "project": "Digital transformation project description"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Handling:**

- `400` - Missing required fields
- `400` - Invalid email format
- `500` - Server error

### Usage Example

```javascript
const submitForm = async (formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed:", result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
```

## 📊 Content Management

### Strapi CMS Integration

The platform uses **Strapi** as a headless CMS for dynamic content management:

#### Content Types

- **Blogs** - Article content and metadata
- **Case Studies** - Project showcases and results
- **Company Data** - Team information and company details
- **Industry Solutions** - Sector-specific content
- **Webinars** - Event information and registration
- **Resources** - Documentation and guides

#### API Integration

```javascript
// Fetch content from Strapi
import { fetchFromStrapi } from "@/lib/strapi";

const data = await fetchFromStrapi("blog-posts", {
  populate: "*",
  pagination: { pageSize: 10 },
  sort: "createdAt:desc",
});
```

#### Media Management

- **Image Optimization** - Next.js Image component integration
- **Responsive Images** - Multiple format and size support
- **CDN Integration** - Fast global content delivery
- **SEO Optimization** - Alt tags and structured data

## 🎨 Styling & Design

### Design System

#### Color Palette

```css
:root {
  --primary: #1a1a1a;
  --secondary: #f5f5f5;
  --accent: #3b82f6;
  --muted: #6b7280;
  --background: #ffffff;
  --foreground: #1a1a1a;
}
```

#### Typography

- **Primary Font:** Albert Sans (Google Fonts)
- **Secondary Font:** Outfit (Google Fonts)
- **Weight Range:** 100-700
- **Responsive Scaling:** clamp() functions

#### Spacing System

```javascript
// Tailwind spacing configuration
spacing: {
  '0': '0px',
  '1': '0.25rem',
  '2': '0.5rem',
  '4': '1rem',
  '8': '2rem',
  '16': '4rem',
  '32': '8rem',
}
```

### Component Library

#### UI Components

- **Buttons** - Multiple variants and sizes
- **Cards** - Content containers with hover effects
- **Forms** - Validated input components
- **Navigation** - Responsive menu systems
- **Modals** - Overlay components

#### Animation Components

- **Hero Reveals** - Entrance animations
- **Scroll Triggers** - Scroll-based animations
- **Carousels** - Multi-item sliders
- **Timeline** - Interactive journey visualization

### Responsive Design

```css
/* Mobile-first breakpoints */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
@media (min-width: 1536px) {
  /* 2xl */
}
```

## ⚡ Performance

### Optimization Features

#### Next.js Optimizations

- **App Router** - Improved routing and layouts
- **Turbopack** - Faster development builds
- **Image Optimization** - Automatic WebP conversion
- **Font Optimization** - Google Fonts preloading
- **Code Splitting** - Automatic bundle optimization

#### Performance Metrics

- **Lighthouse Score:** 95+
- **Core Web Vitals:** Optimized
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

#### Monitoring

```javascript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Check dependencies
npm ls --depth=0

# Bundle size monitoring
npx bundlephobia-cli check package.json
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Review Process

- All changes require **code review**
- Maintain **test coverage** above 80%
- Follow **accessibility guidelines**
- Ensure **performance** impact is minimal
- Update **documentation** as needed

### Issue Reporting

When reporting issues, please include:

- **Browser and version**
- **Device information**
- **Steps to reproduce**
- **Expected behavior**
- **Screenshots** (if applicable)

## 📄 License

This project is proprietary and confidential. All rights reserved by **Karanji Technologies**.

For licensing inquiries, please contact: [legal@karanji.com](mailto:legal@karanji.com)

## 📞 Contact

### Development Team

- **Project Lead:** [lead@karanji.com](mailto:lead@karanji.com)
- **Technical Support:** [support@karanji.com](mailto:support@karanji.com)
- **General Inquiries:** [info@karanji.com](mailto:info@karanji.com)

### Company Information

**Karanji Technologies**  
Your Technology Translation Partner

- **Website:** [https://karanji.com](https://karanji.com)
- **LinkedIn:** [Karanji Technologies](https://linkedin.com/company/karanji)
- **Twitter:** [@KaranjiTech](https://twitter.com/karanjitech)

### Support

For technical support and questions:

1. **Documentation:** Check this README and inline comments
2. **Issues:** Create a GitHub issue for bug reports
3. **Email:** Contact our development team
4. **Community:** Join our developer discussions

---

<div align="center">

**Built with ❤️ by the Karanji Development Team**

_Transforming ideas into digital experiences since 2007_

</div>
