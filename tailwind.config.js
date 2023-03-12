/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        next: {
          50: "#fe19fa", //allow us to override only when we use it inside extend object.
          //* you can give 10: value, 100: value , etc..
        },
      },
    },
  },
  plugins: [],
};
