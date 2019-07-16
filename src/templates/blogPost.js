/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import {
  formatTimestampToDate,
  formatNumberWithCommas,
  wordCountToMinutes,
} from "../utils/utilityFns"
import { codeFont } from "../utils/typography"

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
  margin-bottom: 10px;
`

const InfoLine = styled.div`
  text-align: center;
  font-size: 0.8em;
  color: #717171;
  margin-left: 5px;
  margin-top: 4px;
`

const PostContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 700px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const PostWrapper = styled.div`
  /* this rule targets only inline code in the rendered md */
  & p > code {
    font-family: ${codeFont};
    background-color: rgb(230, 230, 235);
    border-radius: 3px;
    padding-left: 3px;
    padding-right: 3px;
  }
  /* this rule targets code blocks but can be over-ridden by prism.css */
  code[class*="language-"],
  pre[class*="language-"] {
    font-size: 0.92em;
    @media (max-width: 700px) {
      font-size: 0.9em;
    }
    border-radius: 5px;
    font-family: ${codeFont};
    white-space: pre-wrap;
    line-height: 1.4;
    @media (max-width: 700px) {
      line-height: 1.2;
    }
  }
  /* paragraphs in the blog post */
  p {
    margin-bottom: 15px;
    margin-top: 15px;
    @media (max-width: 700px) {
      font-size: 0.9em;
    }
  }
  /* headers in the blog post */
  h2 {
    margin-bottom: 15px;
    margin-top: 30px;
    @media (max-width: 700px) {
      font-size: 1.2em;
    }
  }
  /* links in the blog post */
  a {
    color: #313131;
    &:hover {
      color: DeepSkyBlue;
    }
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageContentStyleWrapper>
        <PostContainer>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <InfoLine>
            <span>{formatTimestampToDate(post.frontmatter.date)}</span>
            <span>
              {" "}
              • {formatNumberWithCommas(post.frontmatter.word_count)} words
            </span>
            <span>
              {" "}
              • {wordCountToMinutes(post.frontmatter.word_count)} minutes
            </span>
          </InfoLine>

          <PostWrapper
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></PostWrapper>
        </PostContainer>
      </PageContentStyleWrapper>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        word_count
        description
      }
    }
  }
`
