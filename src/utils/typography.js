import Typography from "typography"

export const pageTitleFont = "Roboto Mono"
export const bodyFont = "IBM Plex Sans"
export const headerFont = "Open Sans"
export const codeFont = "IBM Plex Mono"
export const menuFont = "IBM Plex Mono"

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    { name: pageTitleFont, styles: ["700"] },
    { name: bodyFont, styles: ["400", "500"] },
    { name: headerFont, styles: ["400"] },
    { name: codeFont, styles: ["400"] },
    { name: menuFont, styles: ["400"] },
  ],
  headerFontFamily: [headerFont],
  bodyFontFamily: [bodyFont],
})

export default typography
