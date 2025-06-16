import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn defaults (can be overridden by custom vars in CSS)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Custom colors from user palette
        'custom-primary': '#9E7FFF', // Original custom primary
        'custom-secondary': '#38bdf8', // Original custom secondary
        'custom-accent': '#f472b6', // Original custom accent
        'custom-background': '#171717', // Original custom background
        'custom-surface': '#262626', // Original custom surface
        'custom-text': '#FFFFFF', // Original custom text
        'custom-text-secondary': '#A3A3A3', // Original custom text secondary
        'custom-border': '#2F2F2F', // Original custom border
        'custom-success': '#10b981', // Original custom success
        'custom-warning': '#f59e0b', // Original custom warning
        'custom-error': '#ef4444', // Original custom error

        // New palette colors
        // 'deep-navy': '#0A0E2A',
        'deep-navy': '#000000',
        'electric-blue': '#00B2FF',
        'light-gray': '#CCCCCC',
        'dark-panel': '#1A1C2C',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1rem', // Added for rounded-xl
        '2xl': '2rem', // Added for rounded-2xl
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        // Custom keyframes for slide transitions
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Custom animations for slide transitions
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.7s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-out': 'fade-out 0.7s ease-out forwards',
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'Helvetica', 'sans-serif'], // Added Roboto
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'], // Added for code blocks
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 178, 255, 0.15)',
        inner: 'inset 0 2px 4px rgba(0,0,0,0.06)', // Added for code block inner shadow
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #00B2FF, #4A00E0)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
