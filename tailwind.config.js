/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide"; // Import the scrollbar-hide plugin

export default {
  // Specify the paths to all of your template files
  content: [
    "./index.html", // HTML file to scan for Tailwind CSS classes
    "./src/**/*.{js,ts,jsx,tsx}", // JavaScript, TypeScript, and React files
  ],
  theme: {
    // Extend the default theme configuration
    extend: {
      // Custom box shadow for 'b' (this will apply to any 'b' shadow class)
      boxShadow: {
        'b': '0 4px 8px rgba(0,0,0,1)', // Apply a medium shadow with black color
      },
    },
  },
  variants: {
    // Extend variants for specific utilities
    extend: {
      // Enable 'hover' state for boxShadow
      boxShadow: ['hover'], // Allow box-shadow to change on hover
    },
  },
  plugins: [scrollbarHide], // Add the scrollbar-hide plugin to hide scrollbars
}
