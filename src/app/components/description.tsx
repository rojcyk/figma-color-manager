import React from "react"
import styled from "styled-components"

import { GRAY, BLUE } from "../../constants/ui"

// ******************************** //
// Interface
// ******************************** //

export interface DescriptionProps {
  children: any
  style?: React.CSSProperties
}

// ******************************** //
// Styles
// ******************************** //

export const DescriptionStyle = styled.p`
  display: block;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: ${GRAY};
  margin: 0;
  padding: 0;

  a {
    color: ${BLUE};
    font-weight: 500;
  }
`

// ******************************** //
// Section Class
// ******************************** //

export const Description = ({ children, style }: DescriptionProps) => {
  return <DescriptionStyle style={style}>{children}</DescriptionStyle>
}
