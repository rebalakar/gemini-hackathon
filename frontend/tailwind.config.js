/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EBE3D5',
          300: '#DDD2BF',
          400: '#C8BBA4',
          500: '#AFA087',
        },
        charcoal: {
          50: '#F4F5F4',
          100: '#E3E5E3',
          200: '#C5C9C5',
          400: '#757C76',
          600: '#404541',
          700: '#2E322F',
          800: '#222523',
          900: '#171A18',
        },
        terracotta: {
          50: '#FDF6F0',
          100: '#F9E9DE',
          200: '#F2CEB9',
          300: '#E9AB8C',
          400: '#DE8359',
          500: '#C85A32',
          600: '#B34723',
          700: '#94361A',
          800: '#772C18',
          900: '#5F2416',
        },
        clay: {
          light: '#E29578',
          DEFAULT: '#C85A32',
          dark: '#934021',
        },
        technical: {
          blue: '#1D70B8',
          amber: '#DF7A14',
          green: '#28A745',
          cyan: '#0E7490',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      }
    },
  },
  plugins: [],
}
