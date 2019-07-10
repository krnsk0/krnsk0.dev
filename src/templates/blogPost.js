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
  letter-spacing: -1px;
  /* Check for touchscreen to fix mobile webkit bug */
  @media (hover: none) {
    letter-spacing: -3px;
  }
`

const InfoLine = styled.div`
  text-align: center;
  font-size: 0.8em;
  color: #717171;
  margin-left: 5px;
  margin-top: 4px;
`

const PostContainer = styled.div`
  padding: 20px;
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
  p {
    margin-bottom: 15px;
    margin-top: 15px;
  }
  h2 {
    margin-bottom: 25px;
    margin-top: 30px;
  }
  a {
    color: #313131;
    &:hover {
      color: DeepSkyBlue;
    }
  }
  table {
    width: 33%;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PageContentStyleWrapper>
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
