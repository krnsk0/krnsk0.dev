import React, { useState } from "react"
import { Link } from "gatsby"

const navLinkStyle = {
  textAlign: "right",
}

export default ({ to, children }) => {
  const [active, setActive] = useState(false)

  // if this is the active link, store it
  const isActive = ({ isCurrent }) => {
    if (isCurrent) {
      setActive(true)
    }
  }

  return (
    <div style={navLinkStyle}>
      {active && <span>➤ </span>}
      <Link to={to} getProps={isActive}>
        {children}
      </Link>
    </div>
  )
}
