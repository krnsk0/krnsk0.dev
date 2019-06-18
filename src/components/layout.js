/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from "react"
import DesktopTopbar from "./desktopTopbar"
import MobileTopbar from "./mobileTopbar"
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
  height: 0px;
  @media (max-width: 700px) {
    height: 83px;
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
            description
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
        <meta name="description" content={data.site.siteMetadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.site.siteMetadata.canonicalUrl} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta
          property="twitter:url"
          content={data.site.siteMetadata.canonicalUrl}
        />
        <meta property="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          property="twitter:description"
          content={data.site.siteMetadata.description}
        />
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
