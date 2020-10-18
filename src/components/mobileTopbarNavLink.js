import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { menuFont } from "../utils/typography"

const NavLinkContainer = styled.div`
  text-align: right;
  margin-top: 5px;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-family: ${menuFont};
  font-size: 17px;
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  text-decoration: none;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 1px;
  letter-spacing: -1px;
  border: 1px solid #313131;
  border-radius: 3px;
  margin-left: 2px;
  margin-right: 2px;
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
