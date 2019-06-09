import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinkContainer = styled.div`
  text-align: right;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  &:hover {
    color: DeepSkyBlue;
  }
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
      {active && <span>➤ </span>}
      <StyledLink to={to} getProps={isActive}>
        {children}
      </StyledLink>
    </NavLinkContainer>
  )
}
