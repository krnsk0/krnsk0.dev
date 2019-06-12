import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    { name: "Roboto Mono", styles: ["400", "700"] },
    { name: "Roboto Slab", styles: ["400", "700"] },
    { name: "Inconsolata", styles: ["400"] },
  ],
  headerFontFamily: ["Roboto Slab"],
  bodyFontFamily: ["Inconsolata"],
})

export default typography
