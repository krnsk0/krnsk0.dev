import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLinks from "./iconLinks"
import PageTitle from "./pageTitle"
import styled from "styled-components"

const TopbarContainer = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  box-shadow: 2px 2px #414141;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  @media (max-width: 700px) {
    display: none;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  margin-right: 10px;
`

export default () => (
  <TopbarContainer>
    <div>
      <PageTitle size="40px" type="desktop" />
      <IconLinks />
    </div>
    <LinkContainer>
      <TopbarNavLink to="/">About</TopbarNavLink>
      <TopbarNavLink to="/portfolio/">Portfolio</TopbarNavLink>
      <TopbarNavLink to="/contact/">Contact</TopbarNavLink>
    </LinkContainer>
  </TopbarContainer>
)
