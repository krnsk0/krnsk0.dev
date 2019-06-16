import React from "react"
import styled from "styled-components"
import IconLink from "./iconLink"
import MobileTopbarNavLink from "./mobileTopbarNavLink"
import PageTitle from "./pageTitle"

const TopbarOuterContainer = styled.div`
  position: fixed;
  z-index: 100;
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
  margin-left: 15px;
  margin-right: 15px;
  display: none;
  @media (max-width: 700px) {
    display: inherit;
  }
`

const TopBarBottomRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const TopBarTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default () => (
  <TopbarOuterContainer>
    <TopbarContainer>
      <TopBarTopRow>
        <PageTitle type="mobile" />
        <div>
          <IconLink to="https://github.com/krnsk0" icon="FaGithub" />
          <IconLink
            to="https://www.linkedin.com/in/krnsk0/"
            icon="FaLinkedin"
          />
        </div>
      </TopBarTopRow>
      <TopBarBottomRow>
        <MobileTopbarNavLink to="/">About</MobileTopbarNavLink>
        <MobileTopbarNavLink to="/portfolio/">Portfolio</MobileTopbarNavLink>
        <MobileTopbarNavLink to="/contact/">Contact</MobileTopbarNavLink>
      </TopBarBottomRow>
    </TopbarContainer>
  </TopbarOuterContainer>
)
