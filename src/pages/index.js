import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DownloadButton from "../components/downloadButton"

const FloatContainer = styled.div`
  overflow: auto;
`

const ProfileImage = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  @media (max-width: 700px) {
    width: 25vw;
  }
  float: left;
`
const BigTextParagraph = styled.h1`
  font-size: 26px;
  @media (max-width: 700px) {
    font-size: calc(16px + 0.8vw);
  }
  color: #717171;
  margin-bottom: 15px;
  letter-spacing: -0.8px;
`

const Bold = styled.span`
  color: #313131;
`

// const MainText = styled.div`
//   letter-spacing: -1.4px;
//   margin-bottom: 15px;
// `

export default ({ data }) => (
  <Layout>
    <PageContentStyleWrapper>
      <FloatContainer>
        <ProfileImage>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ProfileImage>
        <BigTextParagraph>
          I{`'`}m <Bold>Jon Kurinsky</Bold>, a Chicago-based software developer
          relocating to <Bold>Philadelphia</Bold> or <Bold>Denver</Bold>.
        </BigTextParagraph>
        <BigTextParagraph>
          I{`'`}m a builder of things and a solver of problems. I believe in
          writing human-friendly, elegant code.
        </BigTextParagraph>
      </FloatContainer>

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
