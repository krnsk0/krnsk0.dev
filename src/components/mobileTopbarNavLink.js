import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const NavLinkContainer = styled.div`
  text-align: right;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  font-size: 21px;
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: -1.5px;
  border: 1px solid #313131;
  border-radius: 3px;
  margin-left: 2px;
  margin-right: 2px;
  ${props =>
    props.active &&
    css`
      background-color: #313131;
      color: white;
    `};
`

export default ({ to, children }) => {
  const [active, setActive] = useState(false)

  // if this is the active link, store it
  const isActive = ({ isCurrent }) => {
    if (isCurrent) {
      setActive(true)
    }
  }

  return (
    <NavLinkContainer>
      <StyledLink to={to} getProps={isActive} active={active}>
        {children}
      </StyledLink>
    </NavLinkContainer>
  )
}
