import Typography from "typography"
console.log("read typography")

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    { name: "Roboto", styles: ["400", "700"] },
    { name: "Inconsolata", styles: ["400"] },
  ],
  headerFontFamily: ["Roboto"],
  bodyFontFamily: ["Inconsolata"],
})

export default typography
