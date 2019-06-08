import React from "react"
import Topbar from "./topbar"

const globalStyle = {
  margin: `3rem auto`,
  maxWidth: 600,
  boxSizing: "border-box",
}

const pageContentStyleWrapper = {
  border: "2px solid black",
  borderRadius: "3px",
  boxShadow: "2px 2px black",
  padding: "10px",
  marginTop: "5px",
  marginLeft: "5px",
  marginRight: "5px",
}

export default ({ children }) => (
  <div style={globalStyle}>
    <Topbar />
    <div style={pageContentStyleWrapper}>{children}</div>
  </div>
)
