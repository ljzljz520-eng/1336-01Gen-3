/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'space-blue': {
          50: '#f0f4fa',
          100: '#dce6f2',
          200: '#b9cde5',
          300: '#8eaed3',
          400: '#5c88bd',
          500: '#3a6aa7',
          600: '#2a538a',
          700: '#224370',
          800: '#1d385c',
          900: '#0A1628',
          950: '#070e1a',
        },
        'industrial-orange': {
          50: '#fff4ed',
          100: '#ffe4d4',
          200: '#ffc5a8',
          300: '#ff9d70',
          400: '#ff6b2c',
          500: '#f94d0a',
          600: '#ea3405',
          700: '#c22507',
          800: '#9a200d',
          900: '#7c1e10',
          950: '#430b04',
        },
        'steel': {
          50: '#f7f8f9',
          100: '#eef0f2',
          200: '#d8dde2',
          300: '#b5bec7',
          400: '#8c99a6',
          500: '#6b7a8a',
          600: '#566371',
          700: '#47515c',
          800: '#3d454e',
          900: '#353b42',
          950: '#23272c',
        },
      },
      fontFamily: {
        sans: ['"Source Han Sans CN"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Source Code Pro"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #1a2d4a 50%, #0A1628 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
