module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      backgroundColor: {
        mainBgColor: "#1F233E",
        greyColor: "#9C9C9C",
        primary: "#2be7e8",
        secondary: "#2E3562",
      },
      textColor: {
        mainBgColor: "#1F233E",
        greyColor: "#9C9C9C",
        primary: "#2be7e8",
        secondary: "#2E3562",
      },
      colors: {
        mainBgColor: "#1F233E",
        greyColor: "#9C9C9C",
        primary: "#2be7e8",
        secondary: "#2E3562",
      },
      backgroundImage: {
        b1: "url('./src/img/b1.png')",
        b2: "url('./src/img/b2.png')",
      },
    },
  },
  plugins: [],
};
