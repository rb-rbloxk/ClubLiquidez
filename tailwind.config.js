/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#f7f3ea',
          sand: '#ebe3d4',
          mist: '#e8eef5',
          ink: '#0f172a',
          midnight: '#0a1628',
          navy: '#132f4a',
          gold: '#d4af37',
          'gold-deep': '#9a7b2e',
          'gold-bright': '#f0d78c',
          bronze: '#8b6914',
          copper: '#b45309',
        },
        primary: {
          50: '#fdfaf3',
          100: '#f8efd9',
          200: '#eedfac',
          300: '#e3c978',
          400: '#d4af37',
          500: '#b8922e',
          600: '#9a7b26',
          700: '#7c631f',
          800: '#5e4b17',
          900: '#403310',
        },
        gold: {
          50: '#fdfaf3',
          100: '#f5ebd4',
          200: '#e8d48b',
          300: '#d4af37',
          400: '#c19b2e',
          500: '#a88426',
          600: '#8b6914',
          700: '#6e5410',
          800: '#523f0c',
          900: '#362a08',
        },
        neon: {
          gold: '#d4af37',
          'gold-deep': '#9a7b2e',
          'gold-champagne': '#c9a961',
          'gold-light': '#f0d78c',
          'gold-shine': '#f5e6b8',
          'gold-dark': '#8b6914',
          cream: '#f7f3ea',
          amber: '#c17f24',
          blue: '#1e4d7b',
          'blue-light': '#3b7cb8',
          'blue-dark': '#132f4a',
        },
        dark: {
          50: '#faf8f3',
          100: '#f3ebe0',
          200: '#e5d9c8',
          300: '#cbb89a',
          400: '#a89472',
          500: '#7a6b58',
          600: '#5c5346',
          700: '#e8dfd0',
          800: '#ffffff',
          900: '#efe6d5',
          950: '#f7f3ea',
        },
        black: '#0c1220',
        success: '#9a7b2e',
        warning: '#d4af37',
        danger: '#b45309',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        /** @deprecated use font-spectral — kept as alias for Spectral */
        display: ['var(--font-spectral)', 'Spectral', 'Georgia', 'serif'],
        spectral: ['var(--font-spectral)', 'Spectral', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 12px rgba(212,175,55,0.35)' },
          '100%': { boxShadow: '0 0 28px rgba(212,175,55,0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-neon':
          'linear-gradient(135deg, #d4af37 0%, #9a7b2e 45%, #f0d78c 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #8b6914 100%)',
        'gradient-gold-deep':
          'linear-gradient(135deg, #d4af37 0%, #9a7b2e 55%, #f5e6b8 100%)',
        'gradient-glow-gold':
          'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.18), transparent 55%)',
        'hero-aurum':
          'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(212,175,55,0.15), transparent 50%), linear-gradient(165deg, #0a1628 0%, #132f4a 45%, #0a1628 100%)',
      },
    },
  },
  plugins: [],
}
