/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FaMediumM, FaDev } from "react-icons/fa"

import PageContentStyleWrapper from "../components/pageContentStyleWrapper"

const PostContainer = styled.div`
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 6px;
`

const PostTitle = styled.h2`
  margin-left: 5px;
  font-size: 24px;
  font-weight: bold;
  margin-block-start: 3px;
  margin-block-end: 0px;
  letter-spacing: -1px;
`
const DateDisplay = styled.div`
  font-size: 0.8em;
  color: #717171;
  margin-left: 5px;
  margin-top: 4px;
`

const PostDescription = styled.div`
  margin-top: 2px;
  margin-left: 5px;
  color: #313131;
  text-align: left;
  font-size: 15px;
`

const TitleLinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
`

const IconSVG = styled.div`
  font-size: 1.4em;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 5px;
`

const iconHash = {
  medium: FaMediumM,
  dev: FaDev,
}

const formatTimestampToDate = timestamp => {
  const date = new Date(Number(timestamp))
  console.log("date: ", date)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      {projects.map((project, index) => {
        const {
          title,
          date,
          host,
          description,
          slug,
          offsite_link,
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <PostContainer>
              <TitleLinkWrapper
                href={host === "local" ? `/writing/${slug}` : offsite_link}
              >
                {host !== "local" && <IconSVG as={iconHash[host]} />}
                <PostTitle>{title}</PostTitle>
              </TitleLinkWrapper>
              <DateDisplay>{formatTimestampToDate(date)}</DateDisplay>
              <PostDescription>{description}</PostDescription>
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            host
            date
            description
            slug
            offsite_link
          }
        }
      }
    }
  }
`
