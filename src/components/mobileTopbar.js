import React from "react"
import styled from "styled-components"
import IconLink from "./iconLink"
import MobileTopbarNavLink from "./mobileTopbarNavLink"

const TopbarOuterContainer = styled.div`
  position: fixed;
  z-index: 100;
  border: 1px red solid;
  width: 100%;
`

const TopbarContainer = styled.div`
  border: 2px solid #313131;
  border-radius: 3px;
  box-shadow: 2px 2px #414141;
  top: 0px;
  right: 0px;
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
  justify-content: flex-end;
`

export default () => (
  <TopbarOuterContainer>
    <TopbarContainer>
      <MobileTopbarNavLink to="/">About</MobileTopbarNavLink>
      <MobileTopbarNavLink to="/portfolio/">Portfolio</MobileTopbarNavLink>
      <MobileTopbarNavLink to="/contact/">Contact</MobileTopbarNavLink>
      <IconLink to="https://github.com/krnsk0" icon="FaGithub" />
      <IconLink to="https://www.linkedin.com/in/krnsk0/" icon="FaLinkedin" />
    </TopbarContainer>
  </TopbarOuterContainer>
)
