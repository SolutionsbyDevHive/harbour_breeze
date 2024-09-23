/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(180deg, #401b4e 0%, #5f286f 100%)",
        "btn-gradient": "linear-gradient(180deg, #FDE100 0%, #F58921 100%)",
        "pink-gradient1":
          "linear-gradient(118deg, #E7278A 0%, rgba(231, 39, 138, 0.00) 100%)",
        "pink-gradient2":
          "linear-gradient(118deg, rgba(231, 39, 138, 0.00) 0%, #E7278A 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
