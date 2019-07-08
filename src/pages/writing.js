/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    border: 2px solid #313131;
    border-radius: 3px;
    box-shadow: 2px 2px #414141;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const PostDetails = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 6px;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
`

const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostTitle = styled.h2`
  margin-left: 5px;
  color: #313131;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: DeepSkyBlue;
  }
  margin-block-start: 3px;
  margin-block-end: 0px;
  letter-spacing: -1px;
`

const PostDescription = styled.div`
  margin-left: 5px;
  color: #313131;
  text-align: left;
  font-size: 15px;
`

const TagsContainer = TagsContainer.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: -3px;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background-color: white;
  border: 1px solid #313131;
  font-size: 13px;
  border-radius: 2px;
  padding: 0px 3px 0px 3px;
  margin-right: 3px;
  margin-bottom: 3px;
`

const LinkWrapper = styled.a`
  text-decoration: none;
`

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      {projects.map((project, index) => {
        const { title, date, tags, description, url } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <PostContainer>
              <PostDetails>
                <PostTitleContainer>
                  <LinkWrapper href={url}>
                    <PostTitle>{title}</PostTitle>
                  </LinkWrapper>
                </PostTitleContainer>
                <PostDescription>{description}</PostDescription>
                <TagsContainer></TagsContainer>
              </PostDetails>
            </PostContainer>
          </PageContentStyleWrapper>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___priority], order: DESC }
      filter: { frontmatter: { type: { eq: "blog_post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
            description
            url
          }
        }
      }
    }
  }
`
