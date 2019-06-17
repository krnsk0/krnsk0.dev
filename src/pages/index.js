import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DownloadButton from "../components/downloadButton"
import { Link } from "gatsby"

const FlexContainer = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 25%;
`

const Right = styled.div`
  flex: 75%;
`
const ProfileImage = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
  }
`

const BigTextParagraph = styled.h1`
  font-size: 24px;
  line-height: 25px;
  color: #717171;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
`

const Dark = styled.span`
  color: #313131;
`

const MainText = styled.div`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.6px;
  margin-bottom: 15px;
  color: #717171;
  font-weight: 500;
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  text-decoration: none;
`

const StyledLink = styled.a`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  text-decoration: none;
`

export default ({ data }) => (
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
          <BigTextParagraph>
            I{`'`}m <Dark>Jon Kurinsky</Dark>, a Chicago-based software
            developer relocating to <Dark>Philadelphia</Dark> or{" "}
            <Dark>Denver</Dark>.
          </BigTextParagraph>
          <BigTextParagraph>
            I{`'`}m a builder of things and a solver of problems. I believe in
            writing human-friendly, elegant code.
          </BigTextParagraph>

          <MainText>
            After self-teaching Python to automate my job in the publishing
            industry, I fell in love with programming.
          </MainText>
          <MainText>
            I turned to Fullstack Academy, a bootcamp program in Chicago, to
            help me transition from hobbyist to professional. They helped me
            become proficient in a Javascript-based stack: <Dark>Node</Dark>,{" "}
            <Dark>Express</Dark>, <Dark>React</Dark>, <Dark>Redux</Dark>,{" "}
            <Dark>PostgresSQL</Dark>, and <Dark>Sequelize</Dark>.
          </MainText>
          <MainText>
            I enjoy the immediacy and interactivity of frontend development.
            Getting to know the React ecosystem and the challenges of writing
            clean, maintainable, and performant code for the browser has been a
            blast.
          </MainText>
          <MainText>
            But I{`'`}ve also been captivated by the challenges of scalable
            server architecture for for real-time applications. So, for now, I
            {`'`}m comfortable with the label {`'`}
            fullstack.{`'`}
          </MainText>
          <MainText>
            Interested in working with me? Check out my{" "}
            <StyledGatsbyLink to="/portfolio/">portfolio</StyledGatsbyLink>, my{" "}
            <StyledLink href="https://github.com/krnsk0">Github</StyledLink>, or
            connect with me on{" "}
            <StyledLink href="https://www.linkedin.com/in/krnsk0/">
              LinkedIn
            </StyledLink>
            .
          </MainText>
        </Right>
      </FlexContainer>
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
