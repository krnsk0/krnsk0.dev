/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"

const PostTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  line-height: 29px;
  @media (max-width: 700px) {
    font-size: calc(14px + 3.4vw);
    line-height: calc(12.2px + 4.35vw);
  }
  color: #313131;
  margin-top: 15px;
  margin-bottom: 15px;
  letter-spacing: -1px;
  /* Check for touchscreen to fix mobile webkit bug */
  @media (hover: none) {
    letter-spacing: -3px;
  }
`

const PostContainer = styled.div`
  padding: 10px;
`

const PostWrapper = styled.div`
  /* this rule targets only inline code in the rendered md */
  & p > code {
    font-family: "IBM Plex Mono";
    background-color: rgb(230, 230, 235);
    border-radius: 3px;
    padding-left: 3px;
    padding-right: 3px;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageContentStyleWrapper>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostContainer>
          <PostWrapper
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></PostWrapper>
        </PostContainer>
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
