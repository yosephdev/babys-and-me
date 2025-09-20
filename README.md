# 🍼 Babys & Me - Swedish Baby Products E-commerce Platform

A comprehensive e-commerce platform specializing in Swedish baby and children's products, featuring affiliate marketing integration and a modern, responsive design.

## 🌟 Overview

Babys & Me is a curated e-commerce platform that connects Swedish families with high-quality baby and children's products from trusted retailers. The platform features an extensive product catalog, affiliate marketing integration, and a user-friendly shopping experience designed specifically for the Swedish market.

## ✨ Key Features

### 🛍️ **Product Catalog**
- **200+ Products** from 13+ approved Swedish retailers
- **5 Product Categories**: Clothing, Feeding, Toys, Nursery, Safety
- **Real-time Pricing** in Swedish Krona (SEK)
- **Product Reviews & Ratings** for informed purchasing decisions
- **Best Sellers & Editor's Picks** highlighting popular products

### 🤝 **Affiliate Marketing Integration**
- **13 Approved Advertisers** including major Swedish retailers
- **Commission Tracking** (4-10% depending on retailer)
- **Real-time Analytics** through Adtraction API
- **Automated Link Management** with proper tracking codes

### 🎨 **Modern UI/UX**
- **Responsive Design** optimized for mobile and desktop
- **Dark/Light Theme** support
- **Accessibility Features** following WCAG guidelines
- **Fast Loading** with optimized images and code splitting

### 🔐 **User Management**
- **User Authentication** with Firebase integration
- **Favorites System** for saved products
- **Newsletter Subscription** with Mailchimp integration
- **Admin Dashboard** for product management

## 🏪 Approved Retailers

| Retailer | Category | Commission | Status |
|----------|----------|------------|---------|
| **Axkid SE** | Car Seats & Safety | 5% | ✅ Active |
| **Baby V** | Baby Products | 8% | ✅ Active |
| **BabyBjörn** | Baby Carriers & Gear | 8% | ✅ Active |
| **Babyland** | Toys & Baby Products | 4% | ✅ Active |
| **BabyWorld SE** | Baby Products | 8% | ⏸️ Paused |
| **BERG SE** | Outdoor Play Equipment | 10% | ✅ Active |
| **Bonti** | Premium Baby Products | 6% | ✅ Active |
| **Kid's Concept** | Wooden Toys & Furniture | 7% | ✅ Active |
| **Leksaksbilar SE** | Toy Cars | 6% | ✅ Active |
| **Litenleker** | Educational Toys | 7% | ✅ Active |
| **Polarn O. Pyret** | Children's Clothing | 8% | ✅ Active |
| **Safekid SE** | Safety Products | 8% | ✅ Active |
| **Stor&Liten** | Toys & Games | 8% | ✅ Active |

## 🛠️ Technology Stack

### **Frontend**
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Router** for navigation
- **React Hook Form** for form handling

### **Backend & Services**
- **Firebase** for authentication and hosting
- **Supabase** for database management
- **Adtraction API** for affiliate tracking
- **Mailchimp** for email marketing
- **Vercel** for deployment

### **Development Tools**
- **ESLint** for code linting
- **TypeScript** for type safety
- **PostCSS** for CSS processing
- **Git** for version control

## 📁 Project Structure

```
babys-and-me/
├── 📁 api/                    # API endpoints and utilities
│   ├── auth/                  # Authentication endpoints
│   └── utils/                 # Utility functions
├── 📁 public/                 # Static assets
│   └── images/               # Product and logo images
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── admin/            # Admin dashboard components
│   │   ├── donate/           # Donation-related components
│   │   ├── home/             # Homepage components
│   │   ├── products/         # Product-related components
│   │   └── ui/               # Reusable UI components
│   ├── 📁 data/              # Product data and configurations
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 pages/             # Page components
│   ├── 📁 services/          # API services
│   └── 📁 types/             # TypeScript type definitions
├── 📄 package.json           # Dependencies and scripts
├── 📄 vite.config.ts         # Vite configuration
└── 📄 tailwind.config.ts     # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yosephdev/babys-and-me.git
   cd babys-and-me
   ```

2. **Install dependencies**
   ```bash
npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add the following environment variables:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_ADTRACTION_API_KEY=your_adtraction_api_key
   VITE_MAILCHIMP_API_KEY=your_mailchimp_api_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Product Categories

### 👕 **Clothing & Accessories** (Kläder & Accessoarer)
- Baby clothing from Polarn O. Pyret
- Organic cotton basics
- Winter overalls and waterproof jackets
- Socks and undergarments

### 🍼 **Feeding Products** (Matningsartiklar)
- Baby bottles and feeding accessories
- High chairs and booster seats
- Baby carriers and feeding pillows
- Nappies and feeding sets

### 🧸 **Toys & Educational** (Leksaker & Pedagogiska artiklar)
- Wooden toys from Kid's Concept
- Educational games and puzzles
- Outdoor play equipment from BERG
- Toy cars and vehicles

### 🏠 **Nursery Essentials** (Barnkammarnödvändigheter)
- Strollers and car seats
- Baby monitors and safety products
- Nursery furniture
- Travel cribs and baby carriers

### 🛡️ **Safety & Health** (Hälsa & Säkerhet)
- Car seats from Axkid
- GPS watches and safety devices
- Childproofing products
- Health monitoring equipment

## 🔧 Configuration

### **Tailwind CSS**
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.ts`:
- Custom color palette
- Responsive breakpoints
- Typography settings
- Animation utilities

### **Vite Configuration**
Development server configuration in `vite.config.ts`:
- API proxy for Adtraction integration
- Path aliases for clean imports
- Build optimizations
- Development server settings

## 📊 Analytics & Tracking

### **Adtraction Integration**
- Real-time affiliate link tracking
- Commission monitoring
- Product performance analytics
- Automated link generation

### **Firebase Analytics**
- User behavior tracking
- Page view analytics
- Conversion tracking
- Performance monitoring

## 🚀 Deployment

### **Vercel Deployment**
The project is configured for automatic deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### **Manual Deployment**
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@babys-and-me.se or join our Slack channel.

## 🙏 Acknowledgments

- **Swedish Baby Product Retailers** for their excellent product offerings
- **Adtraction** for affiliate marketing platform
- **Vercel** for hosting and deployment
- **Open Source Community** for amazing tools and libraries

---

**Made with ❤️ for Swedish families** 🇸🇪