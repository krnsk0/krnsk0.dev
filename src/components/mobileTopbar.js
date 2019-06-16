/* eslint-disable no-undef */
/* eslint-disable no-console */
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
  flex-direction: row;
  background-color: white;
  padding: 5px;
  padding-bottom: 10px;
  margin: 0px auto;
  display: none;
  @media (max-width: 700px) {
    display: inherit;
  }
  border-bottom: 2px solid black;
`

const TopBarTopRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const TopBarBottomRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Spacer = styled.div`
  width: 70px;
`

export default () => {
  return (
    <TopbarOuterContainer>
      <TopbarContainer>
        <TopBarTopRow>
          <PageTitle type="mobile" />
          <Spacer />
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
}
