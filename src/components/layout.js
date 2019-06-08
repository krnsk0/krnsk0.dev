import React from "react"
import Topbar from "./topbar"

const globalStyle = {
  margin: `3rem auto`,
  maxWidth: 600,
  boxSizing: "border-box",
}

const pageContentStyleWrapper = {
  border: "1px solid black",
  padding: "5px",
  marginTop: "10px",
}

export default ({ children }) => (
  <div style={globalStyle}>
    <Topbar />
    <div style={pageContentStyleWrapper}>{children}</div>
  </div>
)
