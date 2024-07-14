/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'project': '0 8px 10px rgba(255, 255, 255, 0.1), 0 6px 8px rgba(255, 255, 255, 0.1)',
        'project-hover': '0 12px 24px rgba(255, 255, 255, 0.2), 0 8px 16px rgba(255, 255, 255, 0.14)',
    },
      colors: {
        'dark': '#1a1a1a',
        'dark-gray': '#2e2e2e',
        'blue-400': '#9cc9e3',
        'gray-100': '#f5f5f5',
        'gray-300': '#e4e6e7',
        'gray-400': '#d8bfbf',
        'red-600': '#6b3030',
        'red-700': '#801414',
        'blue-600': '#3b82f6',
        'blue-700': '#1e40af',
        'yellow-500': '#d0bb57',
      }
    },
  },
  plugins: [],
}