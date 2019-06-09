import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinkContainer = styled.div`
  text-align: right;
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
      <Link to={to} getProps={isActive}>
        {children}
      </Link>
    </NavLinkContainer>
  )
}
