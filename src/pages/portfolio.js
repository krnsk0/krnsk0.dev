/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import Img from "gatsby-image"
import { FaGithub, FaRegFileVideo, FaLink } from "react-icons/fa"

const ProjectContainer = styled.div`
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
const ImageContainer = styled.div`
  margin: 5px;
  flex: 1;
`

const ProjectDetails = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 4px;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
`

const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectTitle = styled.h2`
  margin-left: 5px;
  color: #313131;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: DeepSkyBlue;
  }
  margin-block-start: 0em;
  margin-block-end: 0em;
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
`

const BuiltWithContainer = styled.div`
  margin-left: 5px;
  margin-top: 5px;
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
`

const LinkWrapper = styled.a`
  text-decoration: none;
`

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      {projects.map((project, index) => {
        const {
          title,
          description,
          image,
          builtWith,
          repoUrl,
          deployedSiteUrl,
          videoUrl,
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <ProjectContainer>
              <ImageContainer>
                <LinkWrapper
                  href={deployedSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={image.childImageSharp.fluid} />
                </LinkWrapper>
              </ImageContainer>
              <ProjectDetails>
                <ProjectTitleContainer>
                  <LinkWrapper
                    href={deployedSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectTitle>{title}</ProjectTitle>
                  </LinkWrapper>
                  <div>
                    {videoUrl && (
                      <IconLink
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconSVG as={FaRegFileVideo} />
                      </IconLink>
                    )}
                    {deployedSiteUrl && (
                      <IconLink
                        href={deployedSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconSVG as={FaLink} />
                      </IconLink>
                    )}
                    {repoUrl && (
                      <IconLink
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___priority], order: DESC }) {
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
