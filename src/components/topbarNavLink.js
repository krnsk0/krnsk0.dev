import React from "react"
import { Link } from "gatsby"

const navLinkStyle = {
  textAlign: "right",
}

export default ({ to, children }) => (
  <div style={navLinkStyle}>
    <Link to={to}>{children}</Link>
  </div>
)
