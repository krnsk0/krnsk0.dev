import React from "react"
import LayoutAndSEO from "../components/layoutAndSEO"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkWrapper = styled.span`
  & a {
    color: #313131;
  }
`

export default () => (
  <LayoutAndSEO pageTitlePrefix="Contact" urlSuffix="contact/">
    <PageContentStyleWrapper>
      <div>
        Your message has been sent! Go{" "}
        <LinkWrapper>
          <Link to="/">back</Link>
        </LinkWrapper>
        .
      </div>
    </PageContentStyleWrapper>
  </LayoutAndSEO>
)
