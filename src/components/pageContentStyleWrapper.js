import React from "react"
import styled from "styled-components"

const PageContentWrapper = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  box-shadow: 2px 2px #414141;
  padding: 10px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: white;
`

export default props => {
  const { children } = props
  return <PageContentWrapper>{children}</PageContentWrapper>
}
