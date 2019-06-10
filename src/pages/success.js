import React from "react"
import Layout from "../components/layout"
import PageContentStyleWrapper from "../components/pageContentStyleWrapper"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkWrapper = styled.span`
  color: black;
`

export default () => (
  <Layout>
    <PageContentStyleWrapper>
      <div>
        Your message has been sent! Go{" "}
        <LinkWrapper>
          <Link to="/">back</Link>
        </LinkWrapper>
        .
      </div>
    </PageContentStyleWrapper>
  </Layout>
)
