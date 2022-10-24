import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLink from "./iconLink"
import PageTitle from "./pageTitle"
import styled from "styled-components"
import { headerFont } from "../utils/typography"

const TopbarContainer = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  box-shadow: 2px 2px #414141;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  @media (max-width: 700px) {
    display: none;
  }
  background-color: white;
`

const LinkContainer = styled.div`
  font-family: ${headerFont};
  font-size: 19.5px;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  margin-right: 10px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default () => (
  <TopbarContainer>
    <LeftSideContainer>
      <PageTitle type="desktop" />
      <IconContainer>
        <IconLink to="https://github.com/krnsk0" icon="github" type="desktop" />
        <IconLink
          to="https://www.linkedin.com/in/krnsk0/"
          icon="linkedin"
          type="desktop"
        />
        <IconLink
          to="https://medium.com/@krnsk0"
          icon="medium"
          type="desktop"
        />
        <IconLink to="https://dev.to/krnsk0" icon="dev" type="desktop" />
      </IconContainer>
    </LeftSideContainer>
    <LinkContainer>
      <TopbarNavLink to="/">About</TopbarNavLink>
      <TopbarNavLink to="/writing/">Writing</TopbarNavLink>
      <TopbarNavLink to="/contact/">Contact</TopbarNavLink>
    </LinkContainer>
  </TopbarContainer>
)
