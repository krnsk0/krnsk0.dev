/* eslint-disable no-console */
/* eslint-disable no-undef */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "post" }, host: { eq: "local" }, published: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: "/writing/" + node.frontmatter.slug,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
