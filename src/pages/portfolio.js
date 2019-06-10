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
`
const ImageContainer = styled.div`
  flex: 1;
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
`

const ProjectTitle = styled.div`
  margin: 5px;
  color: black;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
`

const ProjectDescription = styled.div`
  margin: 5px;
  color: black;
  text-align: left;
  font-size: 15px;
`

export default props => {
  const projects = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      {projects.map(project => {
        const { title, description, image } = project.node.frontmatter

        return (
          <PageContentStyleWrapper key={title}>
            <ProjectContainer>
              <ProjectDetails>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
              </ProjectDetails>
              <ImageContainer>
                <Img fluid={image.childImageSharp.fluid} />
              </ImageContainer>
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
            description
          }
        }
      }
    }
  }
`
