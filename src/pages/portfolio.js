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
  const projects = props.data.allProjectsJson.edges

  return (
    <Layout>
      {projects.map(project => {
        return (
          <PageContentStyleWrapper key={project.node.title}>
            <ProjectContainer>
              <ProjectDetails>
                <ProjectTitle>{project.node.title}</ProjectTitle>
                <ProjectDescription>
                  {project.node.description}
                </ProjectDescription>
              </ProjectDetails>
              <ProjectImage>{project.node.image}</ProjectImage>
            </ProjectContainer>
          </PageContentStyleWrapper>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          dateString
          deployedSiteUrl
          repoUrl
          image
        }
      }
    }
  }
`
