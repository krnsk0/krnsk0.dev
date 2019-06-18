/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DownloadButton from "../components/downloadButton"
// import { Link } from "gatsby"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    display: none;
  }
`

const Left = styled.div`
  flex: 20%;
`

const Right = styled.div`
  flex: 80%;
`

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: inherit;
  }
`

const FloatContainer = styled.div`
  float: left;
  width: 33%;
`

const ProfileImage = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`

const TitleText = styled.h1`
  font-size: 25px;
  line-height: 29px;
  @media (max-width: 700px) {
    font-size: calc(14px + 3.4vw);
    line-height: calc(12.2px + 4.35vw);
  }
  color: #717171;
  margin-bottom: 8px;
  letter-spacing: -1px;
  & b {
    color: #313131;
  }
`

const MainText = styled.div`
  font-size: 19px;
  line-height: 21px;
  letter-spacing: -1px;
  color: #717171;
  font-weight: 400;
  & b {
    color: #313131;
    font-weight: 400;
  }
  & p {
    margin-bottom: 8px;
  }
  & a {
    color: #313131;
    &:hover {
      color: DeepSkyBlue;
    }
    text-decoration: none;
  }
`

export default ({ data }) => {
  const about = data.allMarkdownRemark.edges[0].node
  const title = about.frontmatter.title
  const body = about.html

  return (
    <Layout>
      <PageContentStyleWrapper>
        <FlexContainer>
          <Left>
            <ProfileImage>
              <Img fluid={data.file.childImageSharp.fluid} />
            </ProfileImage>
            <DownloadButton />
          </Left>
          <Right>
            <TitleText dangerouslySetInnerHTML={{ __html: title }}></TitleText>
            <MainText dangerouslySetInnerHTML={{ __html: body }}></MainText>
          </Right>
        </FlexContainer>
        <MobileContainer>
          <FloatContainer>
            <ProfileImage>
              <Img fluid={data.file.childImageSharp.fluid} />
            </ProfileImage>
            <DownloadButton />
          </FloatContainer>
          <TitleText dangerouslySetInnerHTML={{ __html: title }}></TitleText>
          <MainText dangerouslySetInnerHTML={{ __html: body }}></MainText>
        </MobileContainer>
      </PageContentStyleWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
