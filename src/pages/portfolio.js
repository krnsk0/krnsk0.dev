/* eslint-disable no-unused-vars */
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"

const ProjectImage = styled.div``

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
              <ProjectImage>{image}</ProjectImage>
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
            image
            description
          }
        }
      }
    }
  }
`
