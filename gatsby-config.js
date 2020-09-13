/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Jon Kurinsky | krnsk0.dev",
    description:
      "Portfolio site and technical blog for Jon Kurinsky, fullstack web developer",
    siteUrl: "https://www.krnsk0.dev",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/data/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blog/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: { js: "javascript" },
              showLineNumbers: false,
              noInlineHighlight: true,
              languageExtensions: [],
            },
          },
        ],
      },
    },
    "gatsby-plugin-eslint",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/success"],
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-317656-2",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.krnsk0.dev",
        sitemap: "https://www.krnsk0.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: "/success" }],
      },
    },
  ],
}
