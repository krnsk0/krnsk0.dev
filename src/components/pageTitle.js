import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const TitleText = styled.h1`
  font-family: "Roboto Mono";
  font-weight: 700;
  margin: 5px;
  margin-top: ${props => (props.type === "desktop" ? "5px" : "2px")};
  color: #313131;
  text-align: left;
  font-size: ${props => (props.type === "desktop" ? "40px" : "28px")};
  font-weight: bold;
  ${props =>
    props.type === "desktop"
      ? css`
          text-shadow: 4px 4px 0px #b5b5b5, 8px 8px 0px #dbdbdb;
          &:hover {
            text-shadow: 4px 4px 0px DeepSkyBlue, 8px 8px 0px LightSkyBlue;
          }
        `
      : css`
          text-shadow: 3px 3px 0px #b5b5b5, 6px 6px 0px #dbdbdb;
          &:hover {
            text-shadow: 3px 3px 0px DeepSkyBlue, 6px 6px 0px LightSkyBlue;
          }
        `}
`

export default props => (
  <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
    <TitleText type={props.type}>KRNSK0</TitleText>
  </Link>
)
