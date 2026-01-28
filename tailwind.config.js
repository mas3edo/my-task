module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Almarai',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        // Keep existing class usages working (e.g. `font-cairo`) but render with Almarai.
        cairo: ['Almarai', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
