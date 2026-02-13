/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        cobalt: {
          500: '#2563eb',
          400: '#3b82f6',
          600: '#1d4ed8',
        },
        golden: {
          500: '#eab308',
          400: '#facc15',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
