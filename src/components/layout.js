import React from "react"
import Topbar from "./topbar"
import styled from "styled-components"

const GlobalStyleDiv = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  box-sizing: border-box;
`

const PageContentStyleWrapper = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 2px 2px black;
  padding: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

export default ({ children }) => (
  <GlobalStyleDiv>
    <Topbar />
    <PageContentStyleWrapper>{children}</PageContentStyleWrapper>
  </GlobalStyleDiv>
)
