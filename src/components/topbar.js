import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLinks from "./iconLinks"
import styled from "styled-components"
import { Link } from "gatsby"

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
`

const TitleText = styled.h1`
  margin: 5px;
  color: #313131;
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
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  margin-right: 10px;
`

export default () => (
  <TopbarContainer>
    <div>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <TitleText>KRNSK0</TitleText>
      </Link>
      <IconLinks />
    </div>
    <LinkContainer>
      <TopbarNavLink to="/">About</TopbarNavLink>
      <TopbarNavLink to="/portfolio/">Portfolio</TopbarNavLink>
      <TopbarNavLink to="/contact/">Contact</TopbarNavLink>
    </LinkContainer>
  </TopbarContainer>
)
