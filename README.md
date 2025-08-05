# ClubLiquidez - Premium Trading Platform

A modern, high-end trading website with cutting-edge design and advanced features. Built with Next.js, React, and TypeScript.

![ClubLiquidez](https://img.shields.io/badge/ClubLiquidez-Trading%20Platform-neon-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Features

### Design & UX
- **Luxury Fintech Aesthetic**: Dark mode UI with neon accents (electric blue, emerald green, purple)
- **High-Fidelity Animations**: Smooth micro-interactions, scroll-triggered reveals, parallax effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Typography**: Inter font family for premium feel

### Core Pages
- **Homepage**: Hero section with animated charts, tagline, and CTA buttons
- **Markets**: Real-time data display with sortable/filterable tables
- **Trading Tools**: Interactive calculators and charting tools
- **Insights**: Educational content and market analysis
- **About**: Company story and team profiles

### Technical Features
- **Real-time Data**: Live market feeds and price updates
- **Interactive Charts**: Professional-grade charting with TradingView integration
- **Advanced Analytics**: 100+ technical indicators
- **Risk Management**: Position sizing calculators and portfolio analysis
- **Price Alerts**: Custom notifications for price movements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + GSAP
- **Charts**: Recharts + TradingView integration
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/clubliquidez.git
   cd clubliquidez
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
   
   Add your API keys and configuration:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_TRADINGVIEW_SYMBOL=BTCUSD
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
clubliquidez/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── markets/           # Markets page
│   ├── tools/             # Trading tools page
│   ├── insights/          # Market insights page
│   └── about/             # About page
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, etc.)
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── home/             # Homepage components
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#00d4ff)
- **Success**: Emerald Green (#00ff88)
- **Warning**: Purple (#8b5cf6)
- **Danger**: Pink (#ec4899)
- **Background**: Dark gradients (#020617 to #1e293b)

### Typography
- **Primary**: Inter (Sans-serif)
- **Display**: Satoshi (Alternative)

### Components
- **Buttons**: Primary, Secondary, Outline, Ghost variants
- **Cards**: Glass effect with hover animations
- **Forms**: Dark theme with neon focus states
- **Charts**: Custom styled with neon accents

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.tsx` with your component
3. Update navigation in `components/layout/Navbar.tsx`

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for custom styles
- Use the design system classes for consistency

### Animations
- Use Framer Motion for component animations
- GSAP for complex chart animations
- CSS animations for micro-interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern fintech platforms
- **Icons**: Lucide React
- **Charts**: Recharts and TradingView
- **Animations**: Framer Motion and GSAP

## 📞 Support

For support, email support@clubliquidez.com or join our Discord community.

---

**ClubLiquidez** - Unlock Liquidity. Trade Smarter. 🚀 