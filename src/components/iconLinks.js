import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const IconSVG = styled.div`
  font-size: 1.4em;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
`

const IconLink = styled.a`
  color: black;
  &:hover {
    color: DeepSkyBlue;
  }
`

export default () => (
  <IconContainer>
    <IconLink
      href="https://github.com/krnsk0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconSVG as={FaGithub} />
    </IconLink>
    <IconLink
      href="https://www.linkedin.com/in/krnsk0/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconSVG as={FaLinkedin} />
    </IconLink>
  </IconContainer>
)
