import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const IconSVG = styled.div`
  font-size: 1.5em;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
`

const IconLink = styled.a`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
`

export default props => (
  <IconLink href={props.to}>
    <IconSVG as={props.icon === "FaGithub" ? FaGithub : FaLinkedin} />
  </IconLink>
)
