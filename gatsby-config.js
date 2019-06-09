/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "krnsk0.dev",
    canonicalUrl: "https://www.krnsk0.dev",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
  ],
}
