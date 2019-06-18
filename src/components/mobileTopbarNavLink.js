import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const NavLinkContainer = styled.div`
  text-align: right;
  margin-top: 5px;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-family: "IBM Plex Mono";
  font-size: 17px;
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: -1.2px;
  border: 1px solid #313131;
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 5px;
  ${props =>
    props.selected &&
    css`
      background-color: #313131;
      color: deepskyblue;
    `};
`

export default ({ to, children }) => {
  const [activeFlag, setActiveFlag] = useState(false)

  // if this is the active link, store it
  const isActive = ({ isCurrent }) => {
    if (isCurrent) {
      setActiveFlag(true)
    }
  }

  return (
    <NavLinkContainer>
      <StyledLink to={to} getProps={isActive} selected={activeFlag}>
        {children}
      </StyledLink>
    </NavLinkContainer>
  )
}
