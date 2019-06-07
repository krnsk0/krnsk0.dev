import React from "react"
import Topbar from "./topbar"

const topLevelStyle = { margin: `3rem auto`, maxWidth: 600 }

const pageContentStyleWrapper = {
  border: "1px solid black",
  padding: "5px",
  marginTop: "10px",
}

export default ({ children }) => (
  <div style={topLevelStyle}>
    <Topbar />
    <div style={pageContentStyleWrapper}>{children}</div>
  </div>
)
