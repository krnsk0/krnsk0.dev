import React from "react"
import { Link } from "gatsby"

const containerStyle = {
  border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  padding: "5px",
}

const titleStyle = {
  flex: 2,
}

const linkStyle = {
  flex: 1,
}

const TopbarLink = ({ to, children }) => (
  <div style={linkStyle}>
    <Link to={to}>{children}</Link>
  </div>
)

export default () => (
  <div style={containerStyle}>
    <div style={titleStyle}>krnsk0</div>
    <TopbarLink to="/about/">about</TopbarLink>
    <TopbarLink to="/portfolio/">portfolio</TopbarLink>
    <TopbarLink to="/resume/">resume</TopbarLink>
    <TopbarLink to="/contact/">contact</TopbarLink>
  </div>
)
