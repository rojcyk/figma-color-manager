import React from "react"
import styled from "styled-components"

// ******************** //
// LOCAL INCLUDES
// ******************** //

import { Headline, HeadlineStyle } from "../components/headline"
import { Description } from "../components/description"
import { Arrow } from "../icons/arrow"
import { ANIMATION_SPEED_MS, BACKGROUND, WHITE } from "../../constants/ui"
import { HeaderBackground } from "../components/sectionHeader"

const ButtonWrapper = styled.div<{
  isSynced: boolean
}>`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 56px;
  position: relative;

  ${({ isSynced }) =>
    isSynced
      ? `
    cursor: pointer;

    .background {
      background-color: ${WHITE};
    }

    &:hover {
      .background {
        background-color: ${BACKGROUND};
      }
    }
    `
      : `
    cursor: default;
`}
`

const HeadlineAnimated = styled(HeadlineStyle)<{
  expanded: boolean
}>`
  z-index: 10;
  transition: all ${ANIMATION_SPEED_MS}ms ease-out;
  position: absolute;
  top: ${({ expanded }) => (expanded ? "19px" : "0")};
  left: 32px;
  opacity: ${({ expanded }) => (expanded ? "1" : "0")};
`

const LoadedStyle = styled.div<{
  expanded: boolean
}>`
  z-index: 10;
  transition: all ${ANIMATION_SPEED_MS}ms ease-out;
  position: absolute;
  top: ${({ expanded }) => (expanded ? "24px" : "10px")};
  left: 30px;
  opacity: ${({ expanded }) => (expanded ? "0" : "1")};
`

export default ({
  expanded,
  name,
  paintStyles,
  isSynced,
  showArrow
}: {
  expanded: boolean
  name: string
  paintStyles: number
  isSynced: boolean
  showArrow: boolean
}) => {
  return (
    <ButtonWrapper isSynced={isSynced}>
      <Arrow
        direction={expanded ? "down" : "right"}
        style={{ opacity: showArrow ? "1" : "0.25", zIndex: 10 }}
      />

      {name === "" ? (
        <Headline>Sync styles</Headline>
      ) : (
        <React.Fragment>
          <HeadlineAnimated expanded={expanded}>Sync styles</HeadlineAnimated>
          <LoadedStyle expanded={expanded}>
            <Headline>{name}</Headline>
            <Description>{paintStyles} paint styles</Description>
          </LoadedStyle>
        </React.Fragment>
      )}

      <HeaderBackground className={"background"} isExpanded={expanded} />
    </ButtonWrapper>
  )
}
