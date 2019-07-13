import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuFont } from "../utils/typography"

const NavLinkContainer = styled.div`
  text-align: right;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-family: ${menuFont};
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
  letter-spacing: -1px;
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
      {activeFlag && <span>➜ </span>}
      <StyledLink to={to} getProps={isActive}>
        {children}
      </StyledLink>
    </NavLinkContainer>
  )
}
