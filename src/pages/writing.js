/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import LayoutAndSEO from "../components/layoutAndSEO"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FaMediumM, FaDev } from "react-icons/fa"
import {
  formatTimestampToDate,
  formatNumberWithCommas,
  wordCountToMinutes,
  wordCount,
} from "../utils/utilityFns"

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
  margin-bottom: 5px;
`

const InfoLine = styled.div`
  font-size: 0.8em;
  color: #717171;
  margin-left: 5px;
  margin-top: 4px;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
  margin-bottom: 5px;
`

const PostDescription = styled.div`
  margin-top: 2px;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
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

const IconSVG = styled.span`
  position: relative;
  top: 4px;
  margin-right: 0.5em;
`

const iconHash = {
  medium: FaMediumM,
  dev: FaDev,
}

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <LayoutAndSEO pageTitlePrefix="Writing" urlSuffix="writing/">
      {projects.map((project, index) => {
        const {
          title,
          date,
          host,
          description,
          word_count,
          slug,
          offsite_link,
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <PostContainer>
              <TitleLinkWrapper
                href={host === "local" ? `/writing/${slug}` : offsite_link}
              >
                <PostTitle>
                  {host !== "local" && <IconSVG as={iconHash[host]} />}
                  {title}
                </PostTitle>
              </TitleLinkWrapper>
              <InfoLine>
                <span>{formatTimestampToDate(date)}</span>
                <span> • {formatNumberWithCommas(word_count)} words</span>
                <span>
                  {" "}
                  • {wordCountToMinutes(word_count)} minute
                  {wordCountToMinutes(word_count) !== "1" ? "s" : ""}
                </span>
              </InfoLine>
              <PostDescription>{description}</PostDescription>
            </PostContainer>
          </PageContentStyleWrapper>
        )
      })}
    </LayoutAndSEO>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            host
            date
            description
            word_count
            slug
            offsite_link
          }
        }
      }
    }
  }
`
