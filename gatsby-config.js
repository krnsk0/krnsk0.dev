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
        name: `projects`,
        path: `${__dirname}/src/data/projects/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-eslint",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
}
