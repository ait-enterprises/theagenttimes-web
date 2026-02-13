/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a18',
          900: '#0a1628',
          800: '#111d35',
          700: '#1a2744',
          600: '#2a3a5c',
          500: '#3d5280',
        },
        cobalt: {
          600: '#1d4ed8',
          500: '#2563eb',
          400: '#3b82f6',
          300: '#60a5fa',
        },
        golden: {
          600: '#ca8a04',
          500: '#eab308',
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
};
