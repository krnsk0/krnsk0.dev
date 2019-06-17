import Typography from "typography"

const pageTitleFont = "Roboto Mono"
const bodyFont = "IBM Plex Mono"
const headerFont = "Roboto"

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    { name: pageTitleFont, styles: ["400", "700"] },
    { name: bodyFont, styles: ["400", "500"] },
    { name: headerFont, styles: ["400"] },
  ],
  headerFontFamily: [headerFont],
  bodyFontFamily: [bodyFont],
})

export default typography
