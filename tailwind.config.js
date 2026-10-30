/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azentio: {
          mint: '#2EE59D',       // Exact fluorescent mint-green from azentio.com
          mintHover: '#25CE8B',
          darkNavy: '#0E2633',   // Exact dark navy pill color
          bannerDark: '#13262F', // Exact announcement bar color
          headline: '#142332',   // Deep charcoal/navy for typography
          body: '#4B5563',       // Body slate text
          cardBg: '#FFFFFF',
          lightBg: '#F8FAFC',
          border: '#E2E8F0',
          darkBg: '#0B1521',
          darkCard: '#101F31',
          darkBorder: '#1E344F'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
