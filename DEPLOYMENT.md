# ClubLiquidez Deployment Guide

## 🚀 Deploying to Netlify

This guide will walk you through deploying the ClubLiquidez trading platform to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (free at [netlify.com](https://netlify.com))

## Method 1: Deploy via Netlify UI (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/clubliquidez.git
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your `clubliquidez` repository
5. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (or latest LTS)

### Step 3: Environment Variables (Optional)

If you need environment variables, add them in Netlify:
1. Go to Site settings → Environment variables
2. Add any required variables (currently none needed)

### Step 4: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's DNS instructions

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Deploy

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

## Method 3: Drag & Drop Deployment

1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder to the deployment area

## Configuration Files

### netlify.toml
This file is already configured with:
- Build settings
- Security headers
- Cache optimization
- Redirects for SPA routing

### next.config.js
Configured for static export:
- `output: 'export'` - Generates static files
- `trailingSlash: true` - Adds trailing slashes for Netlify
- `images.unoptimized: true` - Required for static export

## Performance Optimization

The build includes:
- ✅ Static generation for all pages
- ✅ Optimized JavaScript bundles
- ✅ CSS optimization
- ✅ Image optimization (when possible)
- ✅ SEO-friendly meta tags

## Build Output

After running `npm run build`, you'll get:
- `out/` directory with static files
- Optimized assets in `out/_next/`
- All pages pre-rendered as HTML

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version (use 18+)
2. **Images not loading**: Ensure `images.unoptimized: true` in next.config.js
3. **Routing issues**: Verify `trailingSlash: true` is set
4. **404 errors**: Check that `out` directory is set as publish directory

### Build Commands:

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Post-Deployment

1. **Test all pages**: Navigate through all routes
2. **Check performance**: Use Lighthouse in Chrome DevTools
3. **Verify SEO**: Check meta tags and structured data
4. **Monitor analytics**: Set up Google Analytics if needed

## Customization

### Environment Variables:
Add to Netlify environment variables if needed:
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`

### Custom Headers:
Edit `netlify.toml` for additional security headers

### Redirects:
Add custom redirects in `netlify.toml` if needed

## Support

For issues:
1. Check Netlify build logs
2. Verify local build works (`npm run build`)
3. Check browser console for errors
4. Review Next.js static export documentation

---

**Your ClubLiquidez trading platform is now ready for deployment! 🎉** 