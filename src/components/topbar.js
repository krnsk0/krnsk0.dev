import React from "react"
import TopbarNavLink from "./topbarNavLink"
import IconLinks from "./iconLinks"

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
  textAlign: "left",
  fontSize: "40px",
  textShadow: "4px 4px 0px #B5B5B5, 8px 8px 0px #DBDBDB",
  fontWeight: "bold",
}

const linkContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  width: "100%",
  marginRight: "10px",
}

export default () => (
  <div style={topbarContainerStyle}>
    <div style={titleContainerStyle}>
      <h2 style={titleTextStyle}>KRNSK0</h2>
      <IconLinks />
    </div>
    <div style={linkContainerStyle}>
      <TopbarNavLink to="/">about</TopbarNavLink>
      <TopbarNavLink to="/portfolio/">portfolio</TopbarNavLink>
      <TopbarNavLink to="/resume/">resume</TopbarNavLink>
      <TopbarNavLink to="/contact/">contact</TopbarNavLink>
    </div>
  </div>
)
