import React from "react"
import { Link } from "gatsby"

const containerStyle = {
  border: "2px solid black",
  borderRadius: "3px",
  boxShadow: "2px 2px black",
  display: "flex",
  flexDirection: "row",
  padding: "5px",
}

const titleBoxStyle = {
  flex: 2,
}

const titleTextStyle = {
  margin: "5px",
  padding: "5px",
  textAlign: "center",
  fontSize: "40px",
  textShadow: "0px 5px 0px #B5B5B5, 0px 10px 0px #DBDBDB",
  fontWeight: "bold",
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
    <div style={titleBoxStyle}>
      <h2 style={titleTextStyle}>KRNSK0</h2>
    </div>
    <TopbarLink to="/about/">about</TopbarLink>
    <TopbarLink to="/portfolio/">portfolio</TopbarLink>
    <TopbarLink to="/resume/">resume</TopbarLink>
    <TopbarLink to="/contact/">contact</TopbarLink>
  </div>
)
