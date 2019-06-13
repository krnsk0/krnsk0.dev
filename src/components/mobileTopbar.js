import React from "react"
import styled from "styled-components"
import IconLinks from "./iconLinks"
import MobileTopbarNavLink from "./mobileTopbarNavLink"

const TopbarOuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  z-index: 100;
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
  justify-content: space-between;
  width: 100%;
`

const NavLinkContainer = styled.div`
  margin-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default () => (
  <TopbarOuterContainer>
    <TopbarContainer>
      <NavLinkContainer>
        <MobileTopbarNavLink to="/">About</MobileTopbarNavLink>
        <MobileTopbarNavLink to="/portfolio/">Portfolio</MobileTopbarNavLink>
        <MobileTopbarNavLink to="/contact/">Contact</MobileTopbarNavLink>
      </NavLinkContainer>
      <IconLinks />
    </TopbarContainer>
  </TopbarOuterContainer>
)
