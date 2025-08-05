#!/bin/bash

# ClubLiquidez Deployment Script
echo "🚀 Starting ClubLiquidez deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    
    # Check if out directory exists
    if [ -d "out" ]; then
        echo "📊 Build summary:"
        echo "   - Total files: $(find out -type f | wc -l)"
        echo "   - Total size: $(du -sh out | cut -f1)"
        
        echo ""
        echo "🎉 Ready for deployment!"
        echo ""
        echo "Next steps:"
        echo "1. Push to GitHub: git push origin main"
        echo "2. Deploy to Netlify:"
        echo "   - Go to netlify.com"
        echo "   - Import your GitHub repository"
        echo "   - Set build command: npm run build"
        echo "   - Set publish directory: out"
        echo ""
        echo "Or use Netlify CLI:"
        echo "   npm install -g netlify-cli"
        echo "   netlify login"
        echo "   netlify deploy --prod --dir=out"
    else
        echo "❌ Build failed - 'out' directory not found"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi 