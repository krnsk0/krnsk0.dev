import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DownloadButton from "../components/downloadButton"

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileImage = styled.div`
  flex: 1;
  border: 2px solid #313131;
  border-radius: 3px;
  margin: 5px;
`

const ProfileDetails = styled.div`
  flex: 2;
  margin: 5px;
`

export default ({ data }) => (
  <Layout>
    <PageContentStyleWrapper>
      <ProfileContainer>
        <ProfileImage>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ProfileImage>
        <ProfileDetails>profile details</ProfileDetails>
      </ProfileContainer>
      <DownloadButton />
    </PageContentStyleWrapper>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
