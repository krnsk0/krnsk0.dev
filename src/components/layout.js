import React from "react"
import Topbar from "./topbar"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const GlobalContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const GlobalStyleDiv = styled.div`
  width: 700px;
  box-sizing: border-box;
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            canonicalUrl
          }
        }
      }
    `
  )

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.canonicalUrl} />
      </Helmet>
      <GlobalContainerDiv>
        <GlobalStyleDiv>
          <Topbar />
          {children}
        </GlobalStyleDiv>
      </GlobalContainerDiv>
    </div>
  )
}
