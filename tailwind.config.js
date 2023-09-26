/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hoverbg: 'url("/icon_hover.png")',
        'gradient-radial-a': 'radial-gradient(at right bottom, #003b71 20%, #72B5DF, #003b71 80%)',
        'gradient-radial-b': 'radial-gradient(at right top, #003b71 20%, #72B5DF, #003b71 80%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-c': 'radial-gradient(at right bottom, #72B5DF, #FFFFFF 70%, #72B5DF)',
      },
    },
  },
  plugins: [],
}
