import React from "react"
import Layout from "../components/layout"

const globalStyles = {
  boxSizing: "border-box",
}

export default () => (
  <div style={globalStyles}>
    <Layout>
      <div>page content</div>
    </Layout>
  </div>
)
