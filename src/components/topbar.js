import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLinks from "./iconLinks"
import styled from "styled-components"

const TopbarContainer = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  box-shadow: 2px 2px black;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

const TitleText = styled.h1`
  margin: 5px;
  color: black;
  text-align: left;
  font-size: 40px;
  text-shadow: 4px 4px 0px #b5b5b5, 8px 8px 0px #dbdbdb;
  font-weight: bold;
  &:hover {
    text-shadow: 4px 4px 0px DeepSkyBlue, 8px 8px 0px LightSkyBlue;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  width: 100%;
  margin-right: 10px;
`

export default () => (
  <TopbarContainer>
    <div>
      <TitleText>KRNSK0</TitleText>
      <IconLinks />
    </div>
    <LinkContainer>
      <TopbarNavLink to="/">about</TopbarNavLink>
      <TopbarNavLink to="/portfolio/">portfolio</TopbarNavLink>
      <TopbarNavLink to="/resume/">resume</TopbarNavLink>
      <TopbarNavLink to="/contact/">contact</TopbarNavLink>
    </LinkContainer>
  </TopbarContainer>
)
