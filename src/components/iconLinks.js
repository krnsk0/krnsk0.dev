import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const iconContainerStyle = {
  display: "flex",
  justifyContent: "flex-start",
}

const iconStyle = {
  fontSize: "1.4em",
  marginLeft: "5px",
  marginRight: "5px",
  marginTop: "5px",
}

const iconLinkStyle = {
  color: "black",
}

export default () => (
  <div style={iconContainerStyle}>
    <a
      href="https://github.com/krnsk0"
      target="_blank"
      rel="noopener noreferrer"
      style={iconLinkStyle}
    >
      <FaGithub style={iconStyle} />
    </a>
    <a
      href="https://www.linkedin.com/in/krnsk0/"
      target="_blank"
      rel="noopener noreferrer"
      style={iconLinkStyle}
    >
      <FaLinkedin style={iconStyle} />
    </a>
  </div>
)
