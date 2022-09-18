/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: {
            100: "#F6F6F9",
            200: "#6B6875",
            300: "#2D2D2F",
          },
          red: {
            100: "#FF4C47",
            200: "#E10600",
          },
          blue: {
            100: "#C3C3D5",
            200: "#242433",
            300: "#15151E",
            400: "#060609",
          },
        },
        teams: {
          alfaromeo: "#C92D4B",
          alphatauri: "#5E90A9",
          alpine: "#2393D1",
          astonmartin: "#368C75",
          ferrari: "#FA1435",
          haas: "#B6BABD",
          mercedes: "#6CD3BE",
          mclaren: "#F67F1F",
          redbull: "#3671C6",
          williams: "#36BEDC",
        },
      },
      boxShadow: {
        alfaromeo: "0 0 95px 24px rgb(201 45 75 / 0.15)",
        alphatauri: "0 0 95px 24px rgb(94 144 169 / 0.15)",
        alpine: "0 0 95px 24px rgb(35 147 209 / 0.15)",
        astonmartin: "0 0 95px 24px rgb(54 140 117 / 0.15)",
        ferrari: "0 0 95px 24px rgba(250, 20, 53, 0.15)",
        haas: "0 0 95px 24px rgb(182 186 189 / 0.15)",
        mclaren: "0 0 95px 24px rgb(246 127 31 / 0.15)",
        mercedes: "0 0 95px 24px rgb(108 211 190 / 0.15)",
        redbull: "0 0 95px 24px rgb(54 113 198 / 0.15)",
        williams: "0 0 95px 24px rgb(54 190 220 / 0.15)",
        "info-dialog": "0 8px 28px rgb(0 0 0 / 0.3)",
      },
      dropShadow: {
        "card-text-md": "0 2px 4px rgb(6 6 9 / 0.65)",
      },
    },
  },
  plugins: [],
};
