/* eslint-disable no-unused-vars */
import React from "react"
import LayoutAndSEO from "../components/layoutAndSEO"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import Img from "gatsby-image"
import {
  FaGithub,
  FaRegFileVideo,
  FaExternalLinkAlt,
  FaNpm,
} from "react-icons/fa"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    border: 2px solid #313131;
    border-radius: 4px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const ImageContainer = styled.div`
  margin: 5px;
  flex: 1;
`

const ProjectDetails = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 6px;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
`

const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`

const ProjectTitle = styled.h2`
  margin-left: 5px;
  color: #313131;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: DeepSkyBlue;
  }
  margin-block-start: 3px;
  margin-block-end: 0px;
`

const IconLink = styled.a`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
`

const IconSVG = styled.div`
  font-size: 1.2em;
  margin-left: 5px;
`

const ProjectDescription = styled.div`
  margin-left: 5px;
  color: #313131;
  text-align: left;
  font-size: 15px;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`

const BuiltWithContainer = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: -3px;
  display: flex;
  flex-wrap: wrap;
`

const BuiltWithItem = styled.span`
  background-color: white;
  border: 1px solid #313131;
  font-size: 13px;
  border-radius: 2px;
  padding: 0px 3px 0px 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  @media (max-width: 700px) {
    margin-top: 5px;
  }
`

const LinkWrapper = styled.a`
  text-decoration: none;
`

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <LayoutAndSEO pageTitlePrefix="Projects" urlSuffix="projects/">
      {projects.map((project, index) => {
        const {
          title,
          description,
          image,
          builtWith,
          repoUrl,
          deployedSiteUrl,
          videoUrl,
          npmUrl,
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <ProjectContainer>
              <ImageContainer>
                <LinkWrapper href={deployedSiteUrl}>
                  <Img fluid={image.childImageSharp.fluid} />
                </LinkWrapper>
              </ImageContainer>
              <ProjectDetails>
                <ProjectTitleContainer>
                  <LinkWrapper href={deployedSiteUrl}>
                    <ProjectTitle>{title}</ProjectTitle>
                  </LinkWrapper>
                  <div>
                    {videoUrl && (
                      <IconLink target="_blank" href={videoUrl}>
                        <IconSVG as={FaRegFileVideo} />
                      </IconLink>
                    )}
                    {deployedSiteUrl && (
                      <IconLink target="_blank" href={deployedSiteUrl}>
                        <IconSVG as={FaExternalLinkAlt} />
                      </IconLink>
                    )}
                    {npmUrl && (
                      <IconLink target="_blank" href={npmUrl}>
                        <IconSVG as={FaNpm} />
                      </IconLink>
                    )}
                    {repoUrl && (
                      <IconLink target="_blank" href={repoUrl}>
                        <IconSVG as={FaGithub} />
                      </IconLink>
                    )}
                  </div>
                </ProjectTitleContainer>

                <ProjectDescription>{description}</ProjectDescription>
                <BuiltWithContainer>
                  {builtWith.map(techName => {
                    return (
                      <BuiltWithItem key={techName}>{techName}</BuiltWithItem>
                    )
                  })}
                </BuiltWithContainer>
              </ProjectDetails>
            </ProjectContainer>
          </PageContentStyleWrapper>
        )
      })}
    </LayoutAndSEO>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___priority], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            priority
            title
            dateString
            deployedSiteUrl
            repoUrl
            videoUrl
            npmUrl
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            builtWith
            description
          }
        }
      }
    }
  }
`
