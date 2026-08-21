import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#3730a3',
        pose: '#4338ca',
      },
    },
  },
  plugins: [],
};

export default config;
