import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TitleText = styled.h1`
  font-family: "Roboto Mono";
  font-weight: 700;
  margin: 5px;
  color: #313131;
  text-align: left;
  font-size: 40px;
  text-shadow: 4px 4px 0px #b5b5b5, 8px 8px 0px #dbdbdb;
  font-weight: bold;
  &:hover {
    text-shadow: 4px 4px 0px DeepSkyBlue, 8px 8px 0px LightSkyBlue;
  }
`

export default () => (
  <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
    <TitleText>KRNSK0</TitleText>
  </Link>
)
