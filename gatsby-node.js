/* eslint-disable no-console */
/* eslint-disable no-undef */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { type: { eq: "blog_post" }, host: { eq: "local" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug_or_url
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug_or_url,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug_or_url: node.frontmatter.slug_or_url,
        },
      })
    })
  })
}
