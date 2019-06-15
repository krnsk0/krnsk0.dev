import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    { name: "Roboto Mono", styles: ["400", "700"] },
    { name: "Fira Mono", styles: ["400", "700"] },
    { name: "Roboto", styles: ["400"] },
  ],
  headerFontFamily: ["Roboto"],
  bodyFontFamily: ["Fira Mono"],
})

export default typography
