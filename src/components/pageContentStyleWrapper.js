import React from "react"
import styled from "styled-components"

const PageContentWrapper = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 2px 2px black;
  padding: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

export default ({ children }) => (
  <PageContentWrapper>{children}</PageContentWrapper>
)
