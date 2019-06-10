/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import Img from "gatsby-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  & img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border: 2px solid black;
    border-radius: 3px;
    box-shadow: 2px 2px black;
  }
  &:hover img {
    -webkit-filter: none;
    filter: none;
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
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
`

const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProjectTitle = styled.span`
  margin-left: 5px;
  color: black;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: DeepSkyBlue;
  }
`

const IconLink = styled.a`
  color: black;
  &:hover {
    color: DeepSkyBlue;
  }
`

const IconSVG = styled.div`
  font-size: 1.3em;
  margin-left: 12px;
  margin-top: 4px;
`

const ProjectDescription = styled.div`
  margin-left: 5px;
  color: black;
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
  border: 1px solid black;
  font-size: 13px;
  border-radius: 2px;
  padding: 0px 3px 0px 3px;
  margin-right: 3px;
  margin-bottom: 3px;
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
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <ProjectContainer>
              <ImageContainer>
                <Img fluid={image.childImageSharp.fluid} />
              </ImageContainer>
              <ProjectDetails>
                <ProjectTitleContainer>
                  <ProjectTitle>{title}</ProjectTitle>
                  <div>
                    <IconLink
                      href={deployedSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconSVG as={FaExternalLinkAlt} />
                    </IconLink>
                    <IconLink
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconSVG as={FaGithub} />
                    </IconLink>
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            dateString
            deployedSiteUrl
            repoUrl
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980) {
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
