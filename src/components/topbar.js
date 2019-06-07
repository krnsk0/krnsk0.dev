import React from "react"

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

export default () => (
  <div style={containerStyle}>
    <div style={titleStyle}>krnsk0</div>
    <div style={linkStyle}>about</div>
    <div style={linkStyle}>portfolio</div>
    <div style={linkStyle}>resume</div>
    <div style={linkStyle}>contact</div>
  </div>
)
