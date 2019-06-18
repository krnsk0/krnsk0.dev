import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MdFileDownload } from "react-icons/md"

const DownloadButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 3px;
  padding: 10px;
  font-size: 100%;
  &:hover {
    border-color: DeepSkyBlue;
    color: DeepSkyBlue;
  }
  &:hover * {
    color: DeepSkyBlue;
  }
  margin-right: 10px;
  margin-bottom: 5px;
`
const DownloadIcon = styled.div`
  margin-top: 5px;
  margin-bottom: -15px;
  font-size: 1.6em;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  color: #313131;
`

const Text = styled.div`
  text-align: center;
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
    <LinkWrapper href={data.file.publicURL} download="Jon_Kurinsky.pdf">
      <DownloadButton>
        <Text>Technical Résumé</Text>
        <DownloadIcon>
          <MdFileDownload></MdFileDownload>
        </DownloadIcon>
      </DownloadButton>
    </LinkWrapper>
  )
}
