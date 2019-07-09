/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageContentStyleWrapper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </PageContentStyleWrapper>
    </Layout>
  )
}
export const query = graphql`
  query($slug_or_url: String!) {
    markdownRemark(frontmatter: { slug_or_url: { eq: $slug_or_url } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
