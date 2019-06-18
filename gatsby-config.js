/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Jon Kurinsky - Fullstack Web Developer",
    canonicalUrl: "https://www.krnsk0.dev",
    description:
      "I'm a builder of tools and a solver of problems. I believe in writing human-friendly, declarative code...",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`],
          },
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `500`],
          },
          {
            family: `IBM Plex Mono`,
            variants: [`400`],
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/data/about/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-remark-copy-linked-files",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        icons: {
          favicons: true,
          firefox: true,
        },
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
