/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      dropShadow: {
        textShadow: "2px 2px 4px #000000",
      },
      fontFamily: {
        anonymous: ['"Anonymous Pro", monospace'],
      },
    },
  },
  plugins: [],
};
