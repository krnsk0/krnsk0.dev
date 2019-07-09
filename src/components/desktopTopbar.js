import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLink from "./iconLink"
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
  background-color: white;
`

const LinkContainer = styled.div`
  font-family: "IBM Plex Mono";
  font-size: 20px;
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

export default () => (
  <TopbarContainer>
    <div>
      <PageTitle type="desktop" />
      <IconContainer>
        <IconLink to="https://github.com/krnsk0" icon="FaGithub" />
        <IconLink to="https://www.linkedin.com/in/krnsk0/" icon="FaLinkedin" />
      </IconContainer>
    </div>
    <LinkContainer>
      <TopbarNavLink to="/">About</TopbarNavLink>
      <TopbarNavLink to="/projects/">Projects</TopbarNavLink>
      <TopbarNavLink to="/contact/">Contact</TopbarNavLink>
    </LinkContainer>
  </TopbarContainer>
)
