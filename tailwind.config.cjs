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
          mclaren: "#F77528",
          ferrari: "#FD1531",
          alfaromeo: "#C52842",
          williams: "#23B5D6",
          alpine: "#1387C8",
          redbull: "#2C64BB",
          alphatauri: "#51849F",
          mercedes: "#5ACDB8",
          astonmartin: "#28816B",
          haas: "#ADB1B5",
        },
      },
      boxShadow: {
        "3xl": "0 0 95px 24px rgba(255, 6, 1, 0.13)",
      },
    },
  },
  plugins: [],
};
