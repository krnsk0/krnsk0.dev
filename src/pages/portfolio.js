/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import Img from "gatsby-image"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
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
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
`

const ProjectTitle = styled.div`
  margin-left: 5px;
  color: black;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
`

const ProjectDescription = styled.div`
  margin-left: 5px;
  color: black;
  text-align: left;
  font-size: 15px;
`

const BuiltWithContainer = styled.div`
  margin-left: 5px;
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
        } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <ProjectContainer>
              {index % 2 ? (
                <ImageContainer>
                  <Img fluid={image.childImageSharp.fluid} />
                </ImageContainer>
              ) : null}
              <ProjectDetails>
                <ProjectTitle>{title}</ProjectTitle>
                <BuiltWithContainer>
                  {builtWith.map(techName => {
                    return (
                      <BuiltWithItem key={techName}>{techName}</BuiltWithItem>
                    )
                  })}
                </BuiltWithContainer>
                <ProjectDescription>{description}</ProjectDescription>
              </ProjectDetails>
              {!(index % 2) ? (
                <ImageContainer>
                  <Img fluid={image.childImageSharp.fluid} />
                </ImageContainer>
              ) : null}
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
