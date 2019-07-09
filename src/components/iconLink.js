/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react"
import { FaGithub, FaLinkedin, FaMediumM, FaDev } from "react-icons/fa"
import styled from "styled-components"

const IconSVG = styled.div`
  font-size: ${props => (props.type === "desktop" ? "1.5em" : "1.4em")};
  margin-left: ${props => (props.type === "desktop" ? "5px" : "3px")};
  margin-right: ${props => (props.type === "desktop" ? "5px" : "3px")};
  margin-top: 5px;
`

const IconLink = styled.a`
  color: #313131;
  &:hover {
    color: DeepSkyBlue;
  }
`

const iconHash = {
  medium: FaMediumM,
  github: FaGithub,
  linkedin: FaLinkedin,
  dev: FaDev,
}

export default props => {
  return (
    <IconLink href={props.to}>
      <IconSVG as={iconHash[props.icon]} type={props.type} />
    </IconLink>
  )
}
