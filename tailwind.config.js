/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "living-day":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/living-room-day.jpg)",
        "workplace-day":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/workplace-room-day.jpg)",
        "bed-day":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/bed-room-day.jpg)",
        "kitchen-day":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/kitchen-room-day.jpg)",
        "living-night":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/living-room-night.jpg)",
        "workplace-night":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/workplace-room-night.jpg)",
        "bed-night":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/bed-room-night.jpg)",
        "kitchen-night":
          "url(https://shaileshsolanke.github.io/data/furniture/assets/background-images/kitchen-room-night.jpg)",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.2)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        glass: "0 0 1px rgba(0, 0, 0)",
      },
      dropShadow: {
        tagline: "0 0 5px rgba(0, 0, 0)",
      },
      fontFamily: {
        Borel: "Borel",
      },
    },
  },
  plugins: [],
};
