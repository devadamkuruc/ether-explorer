module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ether-gray-1": "rgba(255,255,255, 0.15)",
        "ether-gray-2": "rgba(255,255,255, 0.10)",
        "ether-gray-3": "rgba(255,255,255, 0.05)",
        "ether-blue": "#0D37A4",
        "ether-pink-1": "rgba(255,0,153,1)",
        "ether-pink-2": "rgba(255,0,153,0.55)",
      },
      width: {
        215: "215px",
        357: "357px",
        488: "488px",
        557: "557px",
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        488: "488px",
        557: "557px",
      },
      inset: {
        45: "45%",
        65: "65px",
        200: "200px",
        240: "240px",
        290: "290px",
        330: "330px",
        485: "485px",
      },
      blur: {
        "4xl": "330px",
      },
      spacing: {
        65: "65px",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        70: "70px",
      },
      zIndex: {
        "-5": "-5",
        0: "0",
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      mdsm: { max: "820px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
