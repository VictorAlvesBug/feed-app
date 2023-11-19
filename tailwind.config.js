import colors from 'tailwind/colors';

import coresCustomizadas from './src/data/coresCustomizadas';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...coresCustomizadas
    },
    extend: {},
  },
  plugins: [],
}

