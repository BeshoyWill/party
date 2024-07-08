/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/images/header.jpg')",
        'footer-texture': "url('/images/invitation.jpg')",
      }
    },
  },
  plugins: [],
};
