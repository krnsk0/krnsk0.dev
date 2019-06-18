import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkWrapper = styled.span`
  & a {
    color: #313131;
  }
`

export default () => (
  <Layout>
    <PageContentStyleWrapper>
      <div>
        Page not found. Go{" "}
        <LinkWrapper>
          <Link to="/">home</Link>
        </LinkWrapper>
        .
      </div>
    </PageContentStyleWrapper>
  </Layout>
)
