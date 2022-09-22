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
            300: "#2D2D2F"
          },
          red: {
            100: "#FF4C47",
            200: "#E10600"
          },
          blue: {
            100: "#C3C3D5",
            200: "#242433",
            300: "#15151E",
            400: "#060609"
          }
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
          williams: "#36BEDC"
        }
      },
      boxShadow: {
        alfaromeo: "0 0 95px 24px rgb(201 45 75 / 0.15)",
        alphatauri: "0 0 95px 24px rgb(94 144 169 / 0.15)",
        alpine: "0 0 95px 24px rgb(35 147 209 / 0.13)",
        astonmartin: "0 0 95px 24px rgb(54 140 117 / 0.13)",
        ferrari: "0 0 95px 24px rgba(250, 20, 53, 0.13)",
        haas: "0 0 95px 24px rgb(182 186 189 / 0.13)",
        mclaren: "0 0 95px 24px rgb(246 127 31 / 0.13)",
        mercedes: "0 0 95px 24px rgb(108 211 190 / 0.09)",
        redbull: "0 0 95px 24px rgb(54 113 198 / 0.13)",
        williams: "0 0 95px 24px rgb(54 190 220 / 0.13)",
        "glow-alfaromeo": "0 0 15px rgb(201 45 75 / 0.5)",
        "glow-alphatauri": "0 0 15px rgb(94 144 169 / 0.6)",
        "glow-alpine": "0 0 15px rgb(35 147 209 / 0.6)",
        "glow-astonmartin": "0 0 15px rgb(54 140 117 / 0.5)",
        "glow-ferrari": "0 0 15px rgba(250, 20, 53, 0.5)",
        "glow-haas": "0 0 15px rgb(182 186 189 / 0.4)",
        "glow-mclaren": "0 0 15px rgb(246 127 31 / 0.4)",
        "glow-mercedes": "0 0 15px rgb(108 211 190 / 0.4)",
        "glow-redbull": "0 0 15px rgb(54 113 198 / 0.8)",
        "glow-williams": "0 0 15px rgb(54 190 220 / 0.4)",
        "info-dialog": "0 8px 28px rgb(0 0 0 / 0.3)",
        "brand-red": "0 0 15px rgb(225 6 1 / 0.5)",
        "brand-white": "0 0 26px rgb(255 255 255 / 0.3)"
      },
      dropShadow: {
        "card-text-sm": "0 2px 4px rgb(6 6 9 / 0.25)",
        "card-text-md": "0 2px 4px rgb(6 6 9 / 0.65)"
      }
    },
    animation: {
      "fade-in": "fade-in 3s linear"
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)"
        },
        "100%": {
          opacity: "1",
          transform: "none"
        }
      }
    }
  },
  plugins: []
};
