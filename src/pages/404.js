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
  <LayoutAndSEO pageTitlePrefix="404">
    <PageContentStyleWrapper>
      <div>
        Page not found. Go{" "}
        <LinkWrapper>
          <Link to="/">home</Link>
        </LinkWrapper>
        .
      </div>
    </PageContentStyleWrapper>
  </LayoutAndSEO>
)
