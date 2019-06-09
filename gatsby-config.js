// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: "www.krnsk0.dev",
    canonicalUrl: "https://www.krnsk0.dev",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
  ],
}
