/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
      },
      backgroundColor: {
        mySlate1: "#111827",
        mySlate2: "#1B2533",
      },
      borderColor: {
        mySlate2: "#1B2533",
      },
      width: {
        forty: "40%",
        sixtyFive: "65%",
      },
    },
  },
  plugins: [],
};
