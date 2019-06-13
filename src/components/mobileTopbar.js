import React from "react"
import styled from "styled-components"
import IconLinks from "./iconLinks"
import PageTitle from "./pageTitle"

const TopbarContainer = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  box-shadow: 2px 2px #414141;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 100;
  flex-direction: row;
  background-color: white;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
  justify-content: space-between;
  width: 100%;
`

export default () => (
  <TopbarContainer>
    <PageTitle size="27px" type="mobile" />
    <IconLinks />
  </TopbarContainer>
)
