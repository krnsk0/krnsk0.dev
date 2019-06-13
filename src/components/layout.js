import React from "react"
import DesktopTopbar from "./desktopTopbar"
import MobileTopbar from "./MobileTopbar"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const GlobalContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: 320px;
`

const GlobalStyleDiv = styled.div`
  width: 700px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const GlobalOffset = styled.div`
  height: 55px;
  @media (min-width: 700px) {
    display: none;
  }
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
          <MobileTopbar />
          <DesktopTopbar />
          <GlobalOffset />
          {children}
        </GlobalStyleDiv>
      </GlobalContainerDiv>
    </div>
  )
}
