import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MdFileDownload } from "react-icons/Md"

const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 3px;
  margin: 5px;
  padding: 10px;
  font-size: 22px;
`
const DownloadIcon = styled.div`
  font-size: 1.4em;
  margin-top: 12px;
  margin-left: 15px;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  color: #313131;
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "Jon_Kurinsky.pdf" }) {
          publicURL
        }
      }
    `
  )

  return (
    <LinkWrapper href={data.file.publicURL} download>
      <DownloadButton>
        Technical Résumé - PDF
        <DownloadIcon>
          <MdFileDownload></MdFileDownload>
        </DownloadIcon>
      </DownloadButton>
    </LinkWrapper>
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
  }
`
