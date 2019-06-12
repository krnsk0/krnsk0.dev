import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DownloadButton from "../components/downloadButton"

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftBar = styled.div`
  flex: 1;
  min-width: 100px;
`
const RightBar = styled.div`
  flex: 2;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
`

const ProfileImage = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  margin: 5px;
`
const BigTextParagraph = styled.h2`
  font-size: 20.5px;
  color: #717171;
  margin-bottom: 15px;
`

const Bold = styled.span`
  color: #313131;
`

const MainTextContainer = styled.div``

const MainText = styled.div`
  margin: 5px;
  font-size: 20px;
  color: #717171;
  margin-bottom: 10px;
`

const Float = styled.div`
  float: left;
  width: 208px;
  margin: 5px;
  margin-right: 10px;
`

export default ({ data }) => (
  <Layout>
    <PageContentStyleWrapper>
      <TopContainer>
        <LeftBar>
          <ProfileImage>
            <Img fluid={data.file.childImageSharp.fluid} />
          </ProfileImage>
        </LeftBar>
        <RightBar>
          <BigTextParagraph>
            I{`'`}m <Bold>Jon Kurinsky</Bold>, a Chicago-based software
            developer relocating to <Bold>Philadelphia</Bold> or{" "}
            <Bold>Denver</Bold>.
          </BigTextParagraph>
          <BigTextParagraph>
            I{`'`}m a builder of things and a solver of problems. I believe in
            writing human-friendly, elegant code.
          </BigTextParagraph>
        </RightBar>
      </TopContainer>
      <MainTextContainer>
        <Float>
          <DownloadButton />
        </Float>
        <MainText>
          After self-teaching Python to automate my job in the publishing
          industry, I fell in love with programming.
        </MainText>

        <MainText>
          I turned to Fullstack Academy, a bootcamp program in Chicago, to help
          me transition from autodidact hobbyist to professional. They helped me
          become proficient in a Javascript-based stack: <Bold>Node</Bold>,{" "}
          <Bold>Express</Bold>, <Bold>React</Bold>, <Bold>Redux</Bold>,{" "}
          <Bold>PostgresSQL</Bold>, <Bold>Sequelize</Bold>.
        </MainText>

        <MainText>
          I enjoy the immediacy and interactivity of frontend development.
          Getting to know the React ecosystem--and the problem space of writing
          for the browser--has been a blast. But I{`'`}ve also been captivated
          by server architecture for real-time applications; websockets and node
          are a potent combination. So, for now, I{`'`}m comfortable with the
          label {`'`}
          fullstack.{`'`}
        </MainText>
        <MainText></MainText>
      </MainTextContainer>
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
