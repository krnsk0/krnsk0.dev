import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const topbarContainerStyle = {
  border: "2px solid black",
  borderRadius: "3px",
  boxShadow: "2px 2px black",
  display: "flex",
  flexDirection: "row",
  padding: "5px",
  marginTop: "5px",
  marginLeft: "5px",
  marginRight: "5px",
}

const titleContainerStyle = {}

const titleTextStyle = {
  margin: "5px",
  padding: "5px",
  textAlign: "center",
  fontSize: "40px",
  textShadow: "4px 4px 0px #B5B5B5, 8px 8px 0px #DBDBDB",
  fontWeight: "bold",
}

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
}

const iconStyle = {
  fontSize: "1.4em",
  marginLeft: "5px",
  marginRight: "5px",
}

const linkContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  width: "100%",
  marginRight: "10px",
}

const navLinkStyle = {
  textAlign: "right",
}

const iconLinkStyle = {
  color: "black",
}

const TopbarNavLink = ({ to, children }) => (
  <div style={navLinkStyle}>
    <Link to={to}>{children}</Link>
  </div>
)

export default () => (
  <div style={topbarContainerStyle}>
    <div style={titleContainerStyle}>
      <h2 style={titleTextStyle}>KRNSK0</h2>
      <div style={iconContainerStyle}>
        <a
          href="https://github.com/krnsk0"
          target="_blank"
          style={iconLinkStyle}
        >
          <FaGithub style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/krnsk0/"
          target="_blank"
          style={iconLinkStyle}
        >
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
    </div>
    <div style={linkContainerStyle}>
      <TopbarNavLink to="/about/">about</TopbarNavLink>
      <TopbarNavLink to="/portfolio/">portfolio</TopbarNavLink>
      <TopbarNavLink to="/resume/">resume</TopbarNavLink>
      <TopbarNavLink to="/contact/">contact</TopbarNavLink>
    </div>
  </div>
)
