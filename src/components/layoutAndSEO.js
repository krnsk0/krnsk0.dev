/* eslint-disable no-unused-vars */
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
  margin-bottom: 15px;
`

const GlobalStyleDiv = styled.div`
  width: 800px;
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

export default ({
  children,
  pageTitlePrefix = null,
  customDescription = null,
  urlSuffix = null,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  )

  // use default title or title from props?
  const metadataTitle = data.site.siteMetadata.title
  const title = pageTitlePrefix
    ? pageTitlePrefix + " | " + metadataTitle
    : metadataTitle

  // use default description or title from props?
  const metadataDescripiton = data.site.siteMetadata.description
  const description = customDescription || metadataDescripiton

  // use default url or url from props?
  const defaultUrl = data.site.siteMetadata.siteUrl
  const url = urlSuffix ? defaultUrl + "/" + urlSuffix : defaultUrl

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
